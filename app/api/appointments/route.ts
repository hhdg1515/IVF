import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import { appointmentRateLimit } from '@/lib/rate-limit'
import { logger } from '@/lib/logger'

// Validation schema for appointment booking
const appointmentSchema = z.object({
  patient_name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  patient_email: z
    .string()
    .email('Invalid email format')
    .max(255, 'Email must not exceed 255 characters')
    .toLowerCase(),
  patient_phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  appointment_type: z.enum(['Initial Consultation', 'Follow-up Visit', 'Treatment Planning', 'Diagnostic Testing', 'IVF Cycle', 'Other']),
  appointment_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD required)'),
  appointment_time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, 'Invalid time format (HH:MM required)'),
  notes: z
    .string()
    .max(1000, 'Notes must not exceed 1000 characters')
    .optional()
    .default(''),
})

export async function POST(request: NextRequest) {
  try {
    // Get client IP address
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Parse and validate request body
    const body = await request.json()
    const validated = appointmentSchema.parse(body)

    // Rate limiting check
    const rateLimitResult = await appointmentRateLimit(ip, validated.patient_email)
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: rateLimitResult.error },
        { status: 429 }
      )
    }

    // Additional validation: check date is in the future
    const appointmentDateTime = new Date(`${validated.appointment_date}T${validated.appointment_time}`)
    if (appointmentDateTime <= new Date()) {
      return NextResponse.json(
        { error: 'Appointment must be scheduled for a future date and time' },
        { status: 400 }
      )
    }

    // Create Supabase client
    const supabase = await createClient()

    // Check if slot is already taken
    const { data: existingAppointment } = await supabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', validated.appointment_date)
      .eq('appointment_time', validated.appointment_time)
      .eq('status', 'pending')
      .single()

    if (existingAppointment) {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please select another time.' },
        { status: 409 }
      )
    }

    // Insert appointment
    const { data, error } = await supabase
      .from('appointments')
      .insert({
        patient_name: validated.patient_name,
        patient_email: validated.patient_email,
        patient_phone: validated.patient_phone,
        appointment_type: validated.appointment_type,
        appointment_date: validated.appointment_date,
        appointment_time: validated.appointment_time,
        notes: validated.notes,
        status: 'pending',
      })
      .select()
      .single()

    if (error) {
      logger.error('Failed to insert appointment', error)
      return NextResponse.json(
        { error: 'Failed to book appointment. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data,
      message: 'Appointment booked successfully',
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid input data',
          details: error.issues.map((e: any) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }

    logger.error('Appointment booking failed', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
