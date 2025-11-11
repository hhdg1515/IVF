/**
 * Secure logging utility
 * In production, sensitive information is not logged to console
 * In development, full logging is available for debugging
 */

const isDevelopment = process.env.NODE_ENV === 'development'

export const logger = {
  /**
   * Log errors (always logged, but sanitized in production)
   */
  error: (message: string, error?: any) => {
    if (isDevelopment) {
      console.error(`[ERROR] ${message}`, error)
    } else {
      // In production, log only the message without sensitive details
      console.error(`[ERROR] ${message}`)
      // TODO: Send to monitoring service (Sentry, DataDog, etc.)
    }
  },

  /**
   * Log warnings (always logged)
   */
  warn: (message: string, data?: any) => {
    if (isDevelopment) {
      console.warn(`[WARN] ${message}`, data)
    } else {
      console.warn(`[WARN] ${message}`)
    }
  },

  /**
   * Log info messages (only in development)
   */
  info: (message: string, sanitizedData?: any) => {
    if (isDevelopment) {
      console.log(`[INFO] ${message}`, sanitizedData)
    }
  },

  /**
   * Log debug messages (only in development)
   */
  debug: (message: string, data?: any) => {
    if (isDevelopment) {
      console.debug(`[DEBUG] ${message}`, data)
    }
  },

  /**
   * Log user actions without PII (safe for production)
   * Use this for form submissions, API calls, etc.
   */
  userAction: (action: string, metadata?: Record<string, any>) => {
    const sanitizedMetadata = metadata ? {
      ...metadata,
      // Remove PII fields
      name: undefined,
      email: undefined,
      phone: undefined,
      message: undefined,
      patient_name: undefined,
      patient_email: undefined,
      patient_phone: undefined,
    } : undefined

    if (isDevelopment) {
      console.log(`[USER ACTION] ${action}`, sanitizedMetadata)
    }
    // TODO: Send to analytics service
  },
}
