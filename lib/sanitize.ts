/**
 * Sanitize user input to prevent XSS attacks
 * This provides an additional layer of security alongside React's built-in escaping
 */

export function sanitizeHtml(input: string): string {
  if (typeof input !== 'string') return ''

  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Sanitize display name (remove HTML tags but allow basic punctuation)
 */
export function sanitizeName(input: string): string {
  if (typeof input !== 'string') return ''

  // Remove any HTML tags
  const withoutTags = input.replace(/<[^>]*>/g, '')

  // Only allow letters, spaces, hyphens, apostrophes
  return withoutTags.replace(/[^a-zA-Z\s\-']/g, '').trim()
}

/**
 * Sanitize email (basic format validation and lowercase)
 */
export function sanitizeEmail(input: string): string {
  if (typeof input !== 'string') return ''

  return input.toLowerCase().trim().replace(/[<>]/g, '')
}

/**
 * Sanitize phone number (digits only)
 */
export function sanitizePhone(input: string): string {
  if (typeof input !== 'string') return ''

  return input.replace(/\D/g, '')
}

/**
 * Safe display wrapper for user-generated content
 * Use this when displaying data from the database
 */
export function safeDisplay(input: string | null | undefined): string {
  if (!input) return ''

  // React already escapes by default, but this adds an extra layer
  return sanitizeHtml(input.toString())
}
