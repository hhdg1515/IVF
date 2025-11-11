import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Initialize rate limiter only if environment variables are set
// This allows the app to work without Upstash in development
let ratelimit: Ratelimit | null = null

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
    analytics: true,
  })
}

export async function checkRateLimit(identifier: string): Promise<{ success: boolean; error?: string }> {
  // If rate limiting is not configured, allow the request (for development)
  if (!ratelimit) {
    console.warn('Rate limiting is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to enable.')
    return { success: true }
  }

  try {
    const { success, limit, reset, remaining } = await ratelimit.limit(identifier)

    if (!success) {
      const resetDate = new Date(reset)
      const waitMinutes = Math.ceil((resetDate.getTime() - Date.now()) / 60000)

      return {
        success: false,
        error: `Too many requests. Please try again in ${waitMinutes} minute${waitMinutes > 1 ? 's' : ''}.`
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Rate limiting error:', error)
    // On error, allow the request but log the issue
    return { success: true }
  }
}

// Different rate limiters for different endpoints
export const appointmentRateLimit = (ip: string, email: string) =>
  checkRateLimit(`appointment_${ip}_${email}`)

export const loginRateLimit = (ip: string) =>
  checkRateLimit(`login_${ip}`)

export const contactRateLimit = (ip: string, email: string) =>
  checkRateLimit(`contact_${ip}_${email}`)
