/**
 * Custom error types for better type safety
 */

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public details?: Record<string, any>
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export type ValidationError = {
  field: string
  message: string
}

export type LoggerError = Error | unknown
