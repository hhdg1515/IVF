import { format, addMinutes, setHours, setMinutes, isWeekend, parseISO } from 'date-fns'

export const APPOINTMENT_TYPES = [
  'Initial Consultation',
  'Follow-up Visit',
  'Treatment Planning',
] as const

export const BUSINESS_HOURS = {
  start: 9, // 9 AM
  end: 17, // 5 PM
  slotDuration: 30, // 30 minutes
}

/**
 * Generate all possible time slots for a business day
 */
export function generateTimeSlots(): string[] {
  const slots: string[] = []
  let currentTime = setMinutes(setHours(new Date(), BUSINESS_HOURS.start), 0)
  const endTime = setHours(new Date(), BUSINESS_HOURS.end)

  while (currentTime < endTime) {
    slots.push(format(currentTime, 'HH:mm'))
    currentTime = addMinutes(currentTime, BUSINESS_HOURS.slotDuration)
  }

  return slots
}

/**
 * Check if a date is a valid booking date (Monday-Friday, not in the past)
 */
export function isValidBookingDate(date: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return !isWeekend(date) && date >= today
}

/**
 * Format phone number to (XXX) XXX-XXXX
 */
export function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, '')
  const match = numbers.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)

  if (!match) return value

  const [, area, prefix, line] = match

  if (line) {
    return `(${area}) ${prefix}-${line}`
  } else if (prefix) {
    return `(${area}) ${prefix}`
  } else if (area) {
    return `(${area}`
  }

  return ''
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Combine date and time strings into ISO format
 */
export function formatAppointmentDateTime(date: string, time: string): string {
  return `${date}T${time}:00`
}
