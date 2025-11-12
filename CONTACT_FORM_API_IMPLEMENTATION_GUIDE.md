# 📧 安全联系表单 API 实施指南
## IVY Fertility Center - Contact Form Implementation

**目标:** 实现一个安全的、不依赖 Supabase 的联系表单 API
**安全级别:** 生产环境就绪
**预估工作量:** 2-3 小时

---

## 📋 Table of Contents

1. [架构概述](#架构概述)
2. [安全原则](#安全原则)
3. [实施步骤](#实施步骤)
4. [代码实现](#代码实现)
5. [环境配置](#环境配置)
6. [测试验证](#测试验证)
7. [生产部署](#生产部署)

---

## 架构概述

### 两种表单的明确区分

```
┌─────────────────────────────────────────────────────────────┐
│  联系表单 (Contact Form) - /contact                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  用途: 潜在客户咨询                                          │
│  认证: ❌ 不需要登录                                         │
│  权限: 🌍 任何人都可以访问                                   │
│  数据流:                                                     │
│    用户提交 → API验证 → 清理数据 → 发送邮件 → 立即清除      │
│  存储: 不缓存，立即处理                                      │
│  API: POST /api/contact                                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  预约表单 (Appointment Form) - /dashboard                   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  用途: 已有患者预约服务                                      │
│  认证: ✅ 必须登录                                           │
│  权限: 🔒 仅认证用户                                         │
│  数据流:                                                     │
│    用户登录 → 验证 → 创建预约 → 存数据库 (user_id关联)      │
│  存储: Supabase (启用后)                                     │
│  API: POST /api/appointments (已实现)                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 安全原则

### ✅ DO - 必须做的

1. **服务端验证**
   - ✅ 使用 Zod schema 验证所有输入
   - ✅ 清理所有用户输入 (XSS 防护)
   - ✅ 验证邮箱格式、电话格式

2. **速率限制**
   - ✅ IP + Email 组合限制
   - ✅ 5次请求/分钟 (可调整)
   - ✅ 防止垃圾邮件攻击

3. **数据安全**
   - ✅ 数据只在内存中临时存在
   - ✅ 立即处理，不缓存
   - ✅ HTTPS 传输 (Next.js 自动)
   - ✅ 不记录敏感信息到日志

4. **错误处理**
   - ✅ 不暴露内部错误信息
   - ✅ 通用错误消息给用户
   - ✅ 详细错误记录到服务器日志

### ❌ DON'T - 绝对不能做的

1. **❌ 不要缓存用户数据**
   ```typescript
   // ❌ 错误！不要这样做
   await redis.set(`contact:${email}`, formData)
   await localStorage.setItem('contact', data)
   ```

2. **❌ 不要记录敏感信息**
   ```typescript
   // ❌ 错误！不要记录用户数据
   console.log('User data:', { name, email, phone })

   // ✅ 正确：只记录事件类型
   logger.userAction('contact_form_submitted', { serviceType })
   ```

3. **❌ 不要信任客户端输入**
   ```typescript
   // ❌ 错误！直接使用用户输入
   const name = body.name

   // ✅ 正确：验证并清理
   const validated = contactSchema.parse(body)
   const name = sanitizeName(validated.name)
   ```

4. **❌ 不要暴露邮件服务器错误**
   ```typescript
   // ❌ 错误！暴露内部错误
   catch (error) {
     return { error: error.message }
   }

   // ✅ 正确：通用错误消息
   catch (error) {
     logger.error('Email failed', error)
     return { error: 'Failed to send inquiry. Please try again.' }
   }
   ```

---

## 实施步骤

### Step 1: 安装依赖 (5分钟)

```bash
# 选择一个邮件服务提供商

# 方案 A: Resend (推荐 - 最简单)
npm install resend

# 方案 B: Nodemailer (免费，需要 SMTP)
npm install nodemailer

# 方案 C: SendGrid (企业级)
npm install @sendgrid/mail
```

**推荐：Resend**
- ✅ 免费额度：3000封/月
- ✅ 简单易用
- ✅ 专为 Next.js 优化
- ✅ 可靠性高

---

### Step 2: 配置环境变量 (5分钟)

```bash
# .env.local
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Resend API Key (从 https://resend.com/api-keys 获取)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# 接收咨询邮件的地址
CONTACT_EMAIL_TO=info@ivyfertility.com

# 发件人邮箱 (必须是您验证过的域名)
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# 邮件主题前缀
CONTACT_EMAIL_SUBJECT_PREFIX="[IVY Fertility]"

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**注册 Resend (3分钟):**
1. 访问 https://resend.com/signup
2. 注册账号（免费）
3. 验证您的域名（或使用测试域名）
4. 生成 API Key
5. 复制 API Key 到 `.env.local`

---

### Step 3: 创建联系表单 API 路由 (30分钟)

创建文件: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { contactRateLimit } from '@/lib/rate-limit'
import { sanitizeName, sanitizeEmail, sanitizePhone } from '@/lib/sanitize'
import { logger } from '@/lib/logger'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. 初始化邮件服务
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const resend = new Resend(process.env.RESEND_API_KEY)

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
```

---

### Step 4: 更新前端表单 (15分钟)

修改文件: `app/contact/page.tsx`

找到 `handleSubmit` 函数 (约第103-129行)，替换为：

```typescript
const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault()
  setError('')
  setIsSubmitting(true)  // 添加这个 state

  try {
    // 客户端基础验证
    if (!formData.name || !formData.email || !formData.phone) {
      setError(isEn ? 'Please complete all required fields.' : '请填写所有必填字段。')
      setIsSubmitting(false)
      return
    }

    // 格式化电话号码（移除非数字字符）
    const cleanPhone = formData.phone.replace(/\D/g, '')

    if (cleanPhone.length !== 10) {
      setError(isEn ? 'Please enter a valid 10-digit phone number.' : '请输入有效的10位电话号码。')
      setIsSubmitting(false)
      return
    }

    // 发送到 API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: cleanPhone,  // 只发送数字
        serviceType: formData.serviceType,
        message: formData.message,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Submission failed')
    }

    // 成功
    setSubmitted(true)

    // 3秒后重置表单
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'general',
        message: '',
      })
    }, 3000)

  } catch (err: any) {
    setError(err.message || (isEn
      ? 'Failed to send your inquiry. Please try again or contact us directly.'
      : '发送失败。请重试或直接联系我们。'
    ))
  } finally {
    setIsSubmitting(false)
  }
}
```

在文件顶部添加 `isSubmitting` state:

```typescript
const [submitted, setSubmitted] = useState(false)
const [error, setError] = useState('')
const [isSubmitting, setIsSubmitting] = useState(false)  // 添加这行
```

更新提交按钮 (约第371-373行):

```typescript
<Button
  type="submit"
  variant="primary"
  size="lg"
  className="w-full md:w-auto"
  disabled={isSubmitting}  // 添加这行
>
  {isSubmitting
    ? (isEn ? 'Sending...' : '发送中...')
    : (isEn ? 'Submit message' : '发送信息')
  }
</Button>
```

---

### Step 5: 环境变量模板 (5分钟)

创建文件: `.env.example` (如果还没有)

```bash
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# IVY Fertility - Environment Variables Template
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Supabase (暂时未启用)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Upstash Redis (速率限制 - 可选)
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# Resend (邮件服务 - 联系表单需要)
RESEND_API_KEY=re_your_resend_api_key

# Email Configuration
CONTACT_EMAIL_TO=info@ivyfertility.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
CONTACT_EMAIL_SUBJECT_PREFIX="[IVY Fertility Contact]"

# Node Environment
NODE_ENV=development

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Setup Instructions:
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 1. Copy this file: cp .env.example .env.local
# 2. Fill in your actual values
# 3. Never commit .env.local to git
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 测试验证

### 本地测试清单

**测试前准备:**
```bash
# 1. 确保环境变量配置正确
cat .env.local | grep RESEND_API_KEY

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器
open http://localhost:3000/contact
```

**测试用例:**

#### ✅ Test 1: 正常提交
```
输入:
- Name: John Doe
- Email: john@example.com
- Phone: (415) 555-1234
- Service: IVF treatment
- Message: I would like to learn more about IVF options.

预期结果:
✓ 表单提交成功
✓ 显示成功消息
✓ 收到邮件通知
✓ 表单重置
```

#### ✅ Test 2: 验证错误
```
输入:
- Name: A  (太短)
- Email: invalid-email
- Phone: 123  (不足10位)

预期结果:
✓ 显示验证错误
✓ 表单不提交
✓ 不发送邮件
```

#### ✅ Test 3: 速率限制
```
操作:
连续提交 6 次（超过 5次/分钟限制）

预期结果:
✓ 前5次成功
✓ 第6次返回 429 错误
✓ 显示"Too many requests"消息
```

#### ✅ Test 4: XSS 防护
```
输入:
- Name: <script>alert('XSS')</script>
- Message: <img src=x onerror=alert('XSS')>

预期结果:
✓ HTML 标签被转义
✓ 邮件中显示为纯文本
✓ 不执行脚本
```

#### ✅ Test 5: 网络错误处理
```
操作:
1. 停止网络连接
2. 提交表单

预期结果:
✓ 显示友好错误消息
✓ 建议直接联系方式
✓ 不崩溃
```

---

### API 测试 (使用 curl)

```bash
# Test 1: 成功提交
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "4155551234",
    "serviceType": "general",
    "message": "This is a test message"
  }'

# 预期响应:
# {"success":true,"message":"Thank you for contacting us..."}

# Test 2: 验证错误 (无效邮箱)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "invalid-email",
    "phone": "4155551234",
    "serviceType": "general"
  }'

# 预期响应:
# {"success":false,"error":"Invalid input data","details":[...]}

# Test 3: 速率限制
for i in {1..6}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{
      "name": "Test User",
      "email": "test@example.com",
      "phone": "4155551234",
      "serviceType": "general"
    }'
  echo "\n--- Request $i ---\n"
  sleep 1
done

# 预期: 第6次请求返回 429 错误
```

---

## 安全检查清单

### 部署前必须检查

- [ ] **环境变量已配置**
  ```bash
  # 检查所有必需的环境变量
  printenv | grep -E "RESEND_API_KEY|CONTACT_EMAIL"
  ```

- [ ] **API Key 不在代码中**
  ```bash
  # 搜索硬编码的 API key
  grep -r "re_" app/ lib/ --exclude-dir=node_modules
  ```

- [ ] **速率限制已启用**
  ```bash
  # 检查 Upstash 配置
  printenv | grep UPSTASH
  ```

- [ ] **输入验证已启用**
  ```typescript
  // 确保使用 Zod schema
  const validated = contactSchema.parse(body)
  ```

- [ ] **清理函数已使用**
  ```typescript
  // 确保所有输入都经过清理
  const name = sanitizeName(validated.name)
  ```

- [ ] **错误不暴露敏感信息**
  ```typescript
  // ❌ 不要这样
  return { error: error.message }

  // ✅ 应该这样
  logger.error('..', error)
  return { error: 'Generic message' }
  ```

- [ ] **HTTPS 已启用** (生产环境)
  ```bash
  # Vercel/Netlify 自动提供 HTTPS
  ```

- [ ] **CORS 配置正确**
  ```typescript
  // Next.js API 路由默认同源，无需额外配置
  ```

---

## 生产部署

### Vercel 部署步骤

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Add secure contact form API"
   git push origin main
   ```

2. **在 Vercel 配置环境变量**
   - 登录 Vercel Dashboard
   - 选择项目 → Settings → Environment Variables
   - 添加：
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL_TO`
     - `CONTACT_EMAIL_FROM`
     - `UPSTASH_REDIS_REST_URL` (如果有)
     - `UPSTASH_REDIS_REST_TOKEN` (如果有)

3. **重新部署**
   ```bash
   # Vercel 会自动部署，或手动触发
   vercel --prod
   ```

4. **验证部署**
   ```bash
   # 测试生产环境 API
   curl -X POST https://yourdomain.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","phone":"4155551234","serviceType":"general"}'
   ```

---

## 监控与维护

### 日志监控

```typescript
// 在 Vercel/Netlify 查看日志
// 搜索关键词:
// - "contact_form_submitted" (成功)
// - "[ERROR] Contact form" (失败)
// - "Too many requests" (速率限制)
```

### 邮件送达率监控

Resend 提供仪表板：
- 发送成功率
- 退信率
- 送达时间

访问: https://resend.com/emails

---

## 故障排查

### 问题 1: 邮件未收到

**检查步骤:**
```bash
# 1. 检查 API 日志
vercel logs --follow

# 2. 检查 Resend 仪表板
# 访问 https://resend.com/emails

# 3. 检查垃圾邮件文件夹

# 4. 验证发件人域名
# 在 Resend 添加并验证您的域名
```

**常见原因:**
- ❌ API Key 无效
- ❌ 发件人邮箱未验证
- ❌ 被标记为垃圾邮件
- ❌ 环境变量未设置

---

### 问题 2: 速率限制不工作

**检查步骤:**
```bash
# 1. 检查 Upstash 配置
echo $UPSTASH_REDIS_REST_URL

# 2. 查看日志
# lib/rate-limit.ts:19 会输出警告
```

**解决方案:**
```typescript
// 如果没有 Upstash，速率限制会优雅降级
// 开发环境下这是正常的
// 生产环境建议配置 Upstash
```

---

### 问题 3: 验证错误不显示

**检查:**
```typescript
// app/contact/page.tsx
const [error, setError] = useState('')

// 确保错误显示在 UI 中
{error && (
  <div className="error-message">
    {error}
  </div>
)}
```

---

## 未来增强 (可选)

### 1. 自动回复邮件

```typescript
// 在 API 中添加
await resend.emails.send({
  from: 'noreply@ivyfertility.com',
  to: sanitized.email,  // 发给用户
  subject: 'We received your inquiry - IVY Fertility',
  html: `
    <p>Dear ${sanitized.name},</p>
    <p>Thank you for contacting IVY Fertility Center...</p>
  `
})
```

### 2. Supabase 存储 (未来)

```typescript
// 当 Supabase 启用后
const supabase = await createClient()

await supabase.from('contact_inquiries').insert({
  name: sanitized.name,
  email: sanitized.email,
  phone: sanitized.phone,
  service_type: sanitized.serviceType,
  message: sanitized.message,
  submitted_at: new Date().toISOString(),
  status: 'new',
})
```

### 3. Webhook 通知

```typescript
// 发送到 Slack/Discord
await fetch(process.env.SLACK_WEBHOOK_URL, {
  method: 'POST',
  body: JSON.stringify({
    text: `🌸 New inquiry from ${sanitized.name}`
  })
})
```

### 4. Google reCAPTCHA

```bash
npm install react-google-recaptcha-v3
```

```typescript
// 在表单中添加
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const { executeRecaptcha } = useGoogleReCaptcha()
const token = await executeRecaptcha('contact_form')

// 在 API 中验证
const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  method: 'POST',
  body: `secret=${process.env.RECAPTCHA_SECRET}&response=${token}`
})
```

---

## 附录 A: 完整文件清单

实施此指南需要修改/创建以下文件：

```
✅ 新建文件:
- app/api/contact/route.ts  (主要 API 逻辑)

✅ 修改文件:
- app/contact/page.tsx  (表单提交逻辑)
- .env.local  (环境变量)
- .env.example  (模板)

✅ 已存在 (无需修改):
- lib/sanitize.ts  (清理函数)
- lib/rate-limit.ts  (速率限制)
- lib/logger.ts  (日志记录)
- lib/types/errors.ts  (错误类型)
```

---

## 附录 B: 服务类型映射

```typescript
const serviceTypeMapping = {
  'general': {
    en: 'General Inquiry',
    zh: '常规咨询'
  },
  'egg-freezing': {
    en: 'Egg Freezing',
    zh: '冻卵'
  },
  'ivf': {
    en: 'IVF Treatment',
    zh: '体外受精'
  },
  'donor': {
    en: 'Donor Services',
    zh: '捐献服务'
  },
  'surrogacy': {
    en: 'Gestational Surrogacy',
    zh: '代孕'
  },
  'second-opinion': {
    en: 'Second Opinion',
    zh: '二次意见'
  },
}
```

---

## 总结

### ✅ 实施完成后您将拥有：

1. **安全的联系表单**
   - ✅ 服务端验证
   - ✅ XSS 防护
   - ✅ 速率限制
   - ✅ 不缓存用户数据

2. **可靠的邮件通知**
   - ✅ 立即发送
   - ✅ 美观的 HTML 邮件
   - ✅ 纯文本备份

3. **良好的用户体验**
   - ✅ 加载状态
   - ✅ 错误提示
   - ✅ 成功反馈

4. **生产就绪**
   - ✅ 环境变量管理
   - ✅ 错误处理
   - ✅ 日志记录

### 📋 下一步

1. **立即实施：** 按照本指南创建 `/api/contact` 路由
2. **本地测试：** 完成所有测试用例
3. **部署到生产：** 配置环境变量并部署
4. **监控：** 查看邮件送达率和用户反馈

---

**预估总工作量：** 2-3 小时
**难度级别：** ⭐⭐ (中等)
**安全级别：** ⭐⭐⭐⭐⭐ (生产就绪)

---

📧 **有问题？**
- 检查 Resend 文档: https://resend.com/docs
- 查看 Next.js API 文档: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- 参考本项目的其他 API: `app/api/appointments/route.ts`

**祝实施顺利！** 🎉
