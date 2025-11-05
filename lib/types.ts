export type AppointmentType = 'Initial Consultation' | 'Follow-up Visit' | 'Treatment Planning'

export interface Appointment {
  id: string
  patient_name: string
  patient_email: string
  patient_phone: string
  appointment_type: AppointmentType
  appointment_date: string
  appointment_time: string
  created_at: string
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface BookingFormData {
  patient_name: string
  patient_email: string
  patient_phone: string
  appointment_type: AppointmentType
  appointment_date: string
  appointment_time: string
}
