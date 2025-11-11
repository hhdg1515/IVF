# Code Optimization Recommendations for IVY Fertility Center

**Date:** 2025-11-11
**Codebase Version:** Next.js 16.0.1 + React 19.2.0
**Overall Code Quality Score:** 7.5/10

---

## Executive Summary

The IVY Fertility Center codebase is a well-structured Next.js application with excellent frontend architecture, clean TypeScript implementation, and comprehensive bilingual support. However, there are critical opportunities for optimization in **performance**, **functionality**, and **security** that should be addressed before full production deployment.

### Key Findings
- ✅ **Strengths:** Clean architecture, zero TypeScript errors, excellent responsive design
- ⚠️ **Critical Issues:** Unoptimized images (3MB+), non-functional forms, missing backend integration
- 🚨 **Security Concerns:** No input sanitization, console logging in production, missing error boundaries

---

## Priority 1: Critical Performance Optimizations

### 1.1 Image Optimization (HIGH IMPACT)
**Current Issue:** All images use standard `<img>` tags instead of Next.js `<Image>` component, causing:
- Large bundle sizes (3MB in `/public/images`)
- No lazy loading
- No automatic format optimization (WebP/AVIF)
- Poor Lighthouse performance scores

**Files Affected:**
- `app/page.tsx:176-180` - Method step icons
- `app/page.tsx:88` - Hero background image
- All other page components using `<img>` tags

**Recommended Fix:**
```typescript
// Replace this:
<img src="/discover2.png" alt="Discover" className="w-32 h-32" />

// With this:
import Image from 'next/image'
<Image
  src="/discover2.png"
  alt="Discover"
  width={128}
  height={128}
  loading="lazy"
  quality={85}
/>
```

**Expected Impact:**
- 40-60% reduction in image payload
- +10-15 Lighthouse performance points
- Faster LCP (Largest Contentful Paint)

**Effort:** 2-3 hours

---

### 1.2 Remove Unused Dependencies
**Current Issue:** Package.json includes dependencies that aren't used:

```json
{
  "framer-motion": "^12.23.24",  // Not used anywhere (~100KB)
  "swiper": "^12.0.3",            // Not used anywhere (~200KB)
  "date-fns": "^4.1.0"            // Only used in one place, could use native Date
}
```

**Recommended Action:**
```bash
npm uninstall framer-motion swiper
# Consider removing date-fns if not heavily used
```

**Expected Impact:**
- ~300KB reduction in bundle size
- Faster install times
- Reduced dependency security surface

**Effort:** 15 minutes

---

### 1.3 Optimize Remote Images
**Files:** `next.config.ts:3-16`

**Current Issue:** External images from `www.ovulifemd.com` are not optimized

**Recommended Fix:**
1. Download and host images locally for better control
2. Compress images using tools like:
   - [ImageOptim](https://imageoptim.com/) (Mac)
   - [Squoosh](https://squoosh.app/) (Web)
   - `sharp` (Node.js)

```bash
# Example compression script
npm install --save-dev sharp
```

**Expected Impact:**
- 50-70% reduction in image file sizes
- Better caching control
- Improved CDN performance

**Effort:** 1-2 hours

---

## Priority 2: Critical Functionality Issues

### 2.1 Non-Functional Contact Form
**File:** `app/contact/page.tsx:102-129`

**Current Issue:** Form only logs to console, doesn't send data anywhere

```typescript
// Line 117
console.log('Contact form submission:', formData)
setSubmitted(true)
```

**Recommended Implementation:**

**Option A: API Route + Email Service**
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, phone, serviceType, message } = await request.json()

  // Validate and sanitize
  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'noreply@ivyfertility.com',
      to: 'info@ivyfertility.com',
      subject: `New Contact Form: ${serviceType}`,
      html: `<p><strong>Name:</strong> ${name}</p>...`
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
```

**Option B: Supabase Integration**
```typescript
// lib/supabase.ts - Already configured, needs activation
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// In contact form handler
const { data, error } = await supabase
  .from('contact_submissions')
  .insert([{ name, email, phone, service_type: serviceType, message }])
```

**Expected Impact:**
- Functional contact form
- Email notifications for new inquiries
- Database backup of all submissions

**Effort:** 3-4 hours

---

### 2.2 Input Validation & Sanitization
**Files:** `app/contact/page.tsx:106-115`

**Current Issue:** Simple regex validation, no XSS protection

**Recommended Fix:**
```bash
npm install zod
```

```typescript
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100)
    .regex(/^[a-zA-Z\s\u4e00-\u9fa5]+$/, 'Invalid characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string()
    .regex(/^\+?[\d\s\-()]+$/, 'Invalid phone number'),
  serviceType: z.enum(['general', 'egg-freezing', 'ivf', 'donor', 'surrogacy', 'second-opinion']),
  message: z.string().max(2000).optional()
})

// In handleSubmit
const validation = contactSchema.safeParse(formData)
if (!validation.success) {
  setError(validation.error.errors[0].message)
  return
}
```

**Expected Impact:**
- Protection against XSS attacks
- Better error messages
- Type-safe validation

**Effort:** 1 hour

---

## Priority 3: Code Quality Improvements

### 3.1 Remove DOM Manipulation Anti-Pattern
**File:** `components/Navigation.tsx:24-34`

**Current Issue:** Direct DOM manipulation of `document.body.style.overflow`

**Recommended Fix:**
```typescript
// Use Tailwind classes instead
const [isMenuOpen, setIsMenuOpen] = useState(false)

// In JSX (line 89)
<body className={isMenuOpen ? 'overflow-hidden' : ''}>

// Or use CSS module approach
useEffect(() => {
  if (isMenuOpen) {
    document.documentElement.classList.add('overflow-hidden')
  } else {
    document.documentElement.classList.remove('overflow-hidden')
  }
}, [isMenuOpen])
```

**Expected Impact:**
- More React-idiomatic code
- Better SSR compatibility
- Easier testing

**Effort:** 30 minutes

---

### 3.2 Replace `<a>` Tags with Next.js `<Link>`
**File:** `components/Navigation.tsx:223, 234`

**Current Issue:** Using `<a>` for internal phone/email links

```typescript
// Line 223
<a href="tel:+18885551234" className="...">
```

**Recommendation:** These are correct for external protocols (tel:, mailto:), but ensure all internal navigation uses `<Link>` component.

**Status:** ✅ Already correct for external links

---

### 3.3 Remove Console Logging
**Files:** Multiple

**Current Issue:** Production code contains console.log statements

```bash
# Find all console logs
grep -r "console\." --include="*.tsx" --include="*.ts" app/ components/ lib/
```

**Recommended Fix:**
1. Remove all console.log statements
2. Add ESLint rule to prevent future additions:

```json
// .eslintrc.json
{
  "rules": {
    "no-console": ["warn", { "allow": ["error", "warn"] }]
  }
}
```

**Expected Impact:**
- Cleaner production code
- No data leakage in browser console
- Better performance

**Effort:** 30 minutes

---

## Priority 4: Architecture Improvements

### 4.1 Externalize Hard-Coded Content
**Files:** Multiple page components

**Current Issue:** Contact info, service options, and content are hard-coded in components

```typescript
// app/contact/page.tsx:19-50
const contactChannels = [
  {
    titleEn: 'Call or text us',
    titleZh: '电话 / 短信联系我们',
    action: { label: '+1 (415) 555-1234', href: 'tel:+14155551234' },
  },
  // ...
]
```

**Recommended Approach:**

**Option A: JSON Configuration Files**
```typescript
// data/contact.json
{
  "channels": [
    {
      "id": "phone",
      "titleEn": "Call or text us",
      "titleZh": "电话 / 短信联系我们",
      "phone": "+1 (415) 555-1234"
    }
  ]
}

// app/contact/page.tsx
import contactData from '@/data/contact.json'
```

**Option B: CMS Integration (Long-term)**
- Sanity.io
- Contentful
- Strapi (self-hosted)

**Expected Impact:**
- Easy content updates without code changes
- Better separation of concerns
- Non-technical staff can update content

**Effort:**
- Option A: 2-3 hours
- Option B: 1-2 weeks

---

### 4.2 Add Error Boundaries
**Current Issue:** No error boundaries to catch React errors

**Recommended Implementation:**
```typescript
// components/ErrorBoundary.tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught:', error, errorInfo)
    // Send to error tracking service (Sentry, etc.)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">
              Something went wrong
            </h2>
            <button onClick={() => this.setState({ hasError: false })}>
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// app/layout.tsx
import { ErrorBoundary } from '@/components/ErrorBoundary'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
```

**Expected Impact:**
- Graceful error handling
- Better user experience
- Error tracking capabilities

**Effort:** 1 hour

---

### 4.3 Implement Loading States
**Current Issue:** No loading states for form submission or page transitions

**Recommended Fix:**
```typescript
// app/contact/page.tsx
const [isSubmitting, setIsSubmitting] = useState(false)

const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault()
  setIsSubmitting(true)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (!response.ok) throw new Error('Submission failed')

    setSubmitted(true)
  } catch (error) {
    setError('Failed to send message. Please try again.')
  } finally {
    setIsSubmitting(false)
  }
}

// In button
<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? 'Sending...' : 'Submit message'}
</Button>
```

**Expected Impact:**
- Better UX during async operations
- Prevents duplicate submissions
- Clear feedback to users

**Effort:** 30 minutes per form

---

## Priority 5: Testing & Quality Assurance

### 5.1 Add Testing Infrastructure
**Current Issue:** No tests exist (0% coverage)

**Recommended Setup:**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom \
  @testing-library/user-event jest jest-environment-jsdom \
  @types/jest
```

```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

**Priority Test Cases:**
1. Language switching functionality
2. Form validation
3. Navigation component
4. Button component variants

**Expected Impact:**
- Catch regressions early
- Confidence in refactoring
- Better code quality

**Effort:** 1 week for initial setup + key tests

---

### 5.2 Add Type Safety for Translations
**File:** `lib/context.tsx:5`

**Current Issue:** `TranslationKey` is just `string`, not type-safe

**Recommended Fix:**
```typescript
// lib/context.tsx
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-services': 'Services',
    // ...
  },
  zh: {
    'nav-home': '首页',
    'nav-services': '服务',
    // ...
  },
} as const

export type TranslationKey = keyof typeof translations.en
export type Language = 'en' | 'zh'

// Now this will error at compile time:
t('invalid-key')  // ❌ TypeScript error
t('nav-home')     // ✅ Valid
```

**Expected Impact:**
- Compile-time safety for translations
- Autocomplete for translation keys
- Catch missing translations early

**Effort:** 30 minutes

---

## Priority 6: Security Hardening

### 6.1 Environment Variables
**Current Issue:** No `.env.example` file, unclear what variables are needed

**Recommended Action:**
```bash
# .env.example
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
NODE_ENV=production
```

**Expected Impact:**
- Clear documentation for required env vars
- Easier onboarding for new developers
- Better secrets management

**Effort:** 15 minutes

---

### 6.2 Add Rate Limiting
**Recommendation:** Add rate limiting to contact form API to prevent spam

```bash
npm install @upstash/ratelimit @upstash/redis
```

```typescript
// app/api/contact/route.ts
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
})

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown"
  const { success } = await ratelimit.limit(ip)

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }

  // Handle form submission
}
```

**Expected Impact:**
- Protection against spam/abuse
- Better server resource management
- Improved security posture

**Effort:** 1 hour

---

### 6.3 Add Content Security Policy
**File:** `next.config.ts`

**Recommended Addition:**
```typescript
const nextConfig: NextConfig = {
  // ... existing config
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self'",
              "connect-src 'self' https://*.supabase.co",
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
}
```

**Expected Impact:**
- Protection against XSS attacks
- Reduced clickjacking risk
- Better security headers

**Effort:** 1 hour

---

## Priority 7: Performance Monitoring

### 7.1 Add Analytics
**Current Issue:** No analytics tracking

**Recommended Services:**
1. **Google Analytics 4** (free, comprehensive)
2. **Vercel Analytics** (built-in if deploying to Vercel)
3. **Plausible** (privacy-focused alternative)

**Implementation Example (GA4):**
```bash
npm install @next/third-parties
```

```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

**Expected Impact:**
- User behavior insights
- Conversion tracking
- Performance monitoring

**Effort:** 30 minutes

---

### 7.2 Add Error Tracking
**Recommended Service:** Sentry (free tier available)

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

**Expected Impact:**
- Real-time error notifications
- Stack traces for debugging
- Performance monitoring

**Effort:** 1 hour

---

## Implementation Roadmap

### Week 1: Quick Wins (Critical)
- [ ] Replace `<img>` with `<Image>` (4 hours)
- [ ] Remove unused dependencies (15 min)
- [ ] Add input validation with Zod (1 hour)
- [ ] Remove console.log statements (30 min)
- [ ] Fix Navigation DOM manipulation (30 min)

**Total Effort:** ~1 day

### Week 2: Functionality (Critical)
- [ ] Implement contact form API route (3 hours)
- [ ] Add Supabase integration (2 hours)
- [ ] Add error boundaries (1 hour)
- [ ] Add loading states (1 hour)
- [ ] Add environment variables documentation (15 min)

**Total Effort:** ~1 day

### Week 3: Quality & Security
- [ ] Compress and optimize images (2 hours)
- [ ] Add rate limiting (1 hour)
- [ ] Implement CSP headers (1 hour)
- [ ] Set up testing infrastructure (4 hours)
- [ ] Write key test cases (8 hours)

**Total Effort:** 2 days

### Week 4: Monitoring & Refinement
- [ ] Add analytics (30 min)
- [ ] Set up Sentry (1 hour)
- [ ] Add type-safe translations (30 min)
- [ ] Create content JSON files (2 hours)
- [ ] Code review and cleanup (4 hours)

**Total Effort:** 1 day

---

## Metrics & Success Criteria

### Performance
- **Current:** Lighthouse ~60-70
- **Target:** Lighthouse 90+
- **Bundle size:** Reduce by 30-40%

### Functionality
- **Current:** Forms non-functional
- **Target:** 100% functional with email notifications

### Code Quality
- **Current:** 0% test coverage
- **Target:** 60%+ coverage on critical paths

### Security
- **Current:** No CSP, no rate limiting
- **Target:** All security headers, rate limiting active

---

## Quick Reference: File-Specific Issues

| File | Issue | Priority | Effort |
|------|-------|----------|--------|
| `app/page.tsx:176-180` | Unoptimized images | HIGH | 1h |
| `app/contact/page.tsx:117` | Non-functional form | CRITICAL | 3h |
| `components/Navigation.tsx:24-34` | DOM manipulation | MEDIUM | 30m |
| `package.json:18,23` | Unused deps | HIGH | 15m |
| `lib/context.tsx:5` | Weak type safety | LOW | 30m |
| `next.config.ts` | Missing CSP headers | MEDIUM | 1h |

---

## Conclusion

The IVY Fertility Center codebase has a solid foundation with excellent architecture and clean code. By addressing the recommendations in this document, you will:

1. **Improve performance** by 30-40% (Lighthouse score 90+)
2. **Enable critical functionality** (working contact forms)
3. **Enhance security** (CSP, rate limiting, input validation)
4. **Increase maintainability** (tests, error boundaries, externalized content)

**Total estimated effort for all Priority 1-2 items:** 5-6 days

**Recommended next steps:**
1. Start with Week 1 quick wins for immediate impact
2. Implement contact form functionality (Week 2)
3. Add security hardening (Week 3)
4. Set up monitoring and testing (Week 4)

---

**Questions or need clarification on any recommendation?** Feel free to ask!
