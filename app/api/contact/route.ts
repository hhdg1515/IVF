import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { contactRateLimit } from '@/lib/rate-limit'
import { sanitizeName, sanitizeEmail, sanitizePhone } from '@/lib/sanitize'
import { logger } from '@/lib/logger'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. 初始化邮件服务
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const resend = new Resend(process.env.RESEND_API_KEY || 'test_key_for_build')

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. 验证 Schema (与表单字段完全匹配)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must not exceed 255 characters')
    .toLowerCase(),

  phone: z.string()
    .regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),

  serviceType: z.enum([
    'general',
    'egg-freezing',
    'ivf',
    'donor',
    'surrogacy',
    'second-opinion'
  ]),

  message: z.string()
    .max(2000, 'Message must not exceed 2000 characters')
    .optional()
    .default(''),
})

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. API Handler
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export async function POST(request: NextRequest) {
  try {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.0 环境变量检查
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    if (!process.env.RESEND_API_KEY) {
      logger.error('Contact form error: RESEND_API_KEY not configured')
      return NextResponse.json(
        {
          success: false,
          error: 'Email service is not configured. Please try again later.',
        },
        { status: 503 }
      )
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.1 获取客户端信息 (用于速率限制)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const ip = request.headers.get('x-forwarded-for')
      || request.headers.get('x-real-ip')
      || 'unknown'

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.2 解析并验证请求体
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const body = await request.json()

    // Zod 验证 (自动抛出错误如果无效)
    const validated = contactSchema.parse(body)

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.3 速率限制检查
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const rateLimitResult = await contactRateLimit(ip, validated.email)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: rateLimitResult.error
        },
        { status: 429 }
      )
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.4 清理数据 (XSS 防护)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const sanitized = {
      name: sanitizeName(validated.name),
      email: sanitizeEmail(validated.email),
      phone: sanitizePhone(validated.phone),
      serviceType: validated.serviceType,
      message: validated.message,
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.5 发送邮件 (立即处理，不缓存)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@ivyfertility.com',
      to: process.env.CONTACT_EMAIL_TO || 'info@ivyfertility.com',
      subject: `${process.env.CONTACT_EMAIL_SUBJECT_PREFIX || '[新咨询]'} ${getServiceTypeLabel(sanitized.serviceType)}`,
      html: generateEmailHTML(sanitized),
      // 可选：也发送纯文本版本
      text: generateEmailText(sanitized),
    })

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.6 记录用户操作 (不记录敏感信息)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    logger.userAction('contact_form_submitted', {
      serviceType: sanitized.serviceType,
      timestamp: new Date().toISOString(),
      // ❌ 不记录: name, email, phone, message
    })

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 3.7 返回成功响应
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you within 24 hours.',
    })

    // ✅ 函数结束，所有数据从内存中清除

  } catch (error: unknown) {
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 错误处理
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    // Zod 验证错误
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input data',
          details: error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
          })),
        },
        { status: 400 }
      )
    }

    // 邮件发送错误
    logger.error('Contact form email failed', error instanceof Error ? error : new Error(String(error)))

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send your inquiry. Please try again or contact us directly at info@ivyfertility.com.',
      },
      { status: 500 }
    )
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 辅助函数
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function getServiceTypeLabel(serviceType: string): string {
  const labels: Record<string, string> = {
    'general': 'General Inquiry',
    'egg-freezing': 'Egg Freezing',
    'ivf': 'IVF Treatment',
    'donor': 'Donor Services',
    'surrogacy': 'Gestational Surrogacy',
    'second-opinion': 'Second Opinion',
  }
  return labels[serviceType] || 'New Inquiry'
}

function generateEmailHTML(data: {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: #a63655;
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border: 1px solid #e0e0e0;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-weight: 600;
      color: #5a555d;
      margin-bottom: 5px;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }
    .field-value {
      font-size: 16px;
      color: #2f2b33;
      padding: 10px;
      background: white;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">🌸 New Contact Inquiry</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">IVY Fertility Center</p>
  </div>

  <div class="content">
    <div class="field">
      <div class="field-label">Full Name</div>
      <div class="field-value">${data.name}</div>
    </div>

    <div class="field">
      <div class="field-label">Email Address</div>
      <div class="field-value">
        <a href="mailto:${data.email}" style="color: #a63655; text-decoration: none;">
          ${data.email}
        </a>
      </div>
    </div>

    <div class="field">
      <div class="field-label">Phone Number</div>
      <div class="field-value">
        <a href="tel:+1${data.phone}" style="color: #a63655; text-decoration: none;">
          ${formatPhone(data.phone)}
        </a>
      </div>
    </div>

    <div class="field">
      <div class="field-label">Service of Interest</div>
      <div class="field-value">${getServiceTypeLabel(data.serviceType)}</div>
    </div>

    ${data.message ? `
    <div class="field">
      <div class="field-label">Message</div>
      <div class="field-value" style="white-space: pre-wrap;">${data.message}</div>
    </div>
    ` : ''}

    <div class="footer">
      <p>
        <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', {
          timeZone: 'America/Los_Angeles',
          dateStyle: 'full',
          timeStyle: 'short'
        })} PT
      </p>
      <p style="margin-top: 10px; color: #a63655;">
        💡 <strong>Quick Actions:</strong><br>
        • Reply to ${data.email}<br>
        • Call ${formatPhone(data.phone)}<br>
        • Review inquiry type: ${getServiceTypeLabel(data.serviceType)}
      </p>
    </div>
  </div>
</body>
</html>
  `
}

function generateEmailText(data: {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}): string {
  return `
🌸 NEW CONTACT INQUIRY - IVY Fertility Center

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION:

Name: ${data.name}
Email: ${data.email}
Phone: ${formatPhone(data.phone)}
Service of Interest: ${getServiceTypeLabel(data.serviceType)}

${data.message ? `
MESSAGE:
${data.message}
` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted: ${new Date().toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles',
  dateStyle: 'full',
  timeStyle: 'short'
})} PT

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `
}

function formatPhone(phone: string): string {
  // 格式化电话号码: 4155551234 -> (415) 555-1234
  if (phone.length === 10) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
  }
  return phone
}
