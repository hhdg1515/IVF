'use client'

import { useState } from 'react'
import { APPOINTMENT_TYPES, formatPhoneNumber, isValidEmail } from '@/lib/utils'
import type { BookingFormData, AppointmentType } from '@/lib/types'

interface AppointmentFormProps {
  selectedDate: Date | null
  selectedTime: string | null
  onSubmit: (data: BookingFormData) => Promise<void>
}

export default function AppointmentForm({
  selectedDate,
  selectedTime,
  onSubmit,
}: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    patient_name: '',
    patient_email: '',
    patient_phone: '',
    appointment_type: '' as AppointmentType | '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.patient_name.trim()) {
      newErrors.patient_name = 'Name is required'
    }

    if (!formData.patient_email.trim()) {
      newErrors.patient_email = 'Email is required'
    } else if (!isValidEmail(formData.patient_email)) {
      newErrors.patient_email = 'Please enter a valid email'
    }

    const phoneDigits = formData.patient_phone.replace(/\D/g, '')
    if (!phoneDigits) {
      newErrors.patient_phone = 'Phone number is required'
    } else if (phoneDigits.length !== 10) {
      newErrors.patient_phone = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.appointment_type) {
      newErrors.appointment_type = 'Please select an appointment type'
    }

    if (!selectedDate) {
      newErrors.date = 'Please select a date'
    }

    if (!selectedTime) {
      newErrors.time = 'Please select a time'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm() || !selectedDate || !selectedTime) {
      return
    }

    setSubmitting(true)

    try {
      await onSubmit({
        ...formData,
        appointment_type: formData.appointment_type as AppointmentType,
        appointment_date: selectedDate.toISOString().split('T')[0],
        appointment_time: selectedTime,
      })

      // Reset form on success
      setFormData({
        patient_name: '',
        patient_email: '',
        patient_phone: '',
        appointment_type: '',
      })
      setErrors({})
    } catch (error) {
      // Error is already handled by the API route
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error)
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value)
    setFormData({ ...formData, patient_phone: formatted })
    if (errors.patient_phone) {
      setErrors({ ...errors, patient_phone: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">Patient Information</h3>

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-base font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.patient_name}
            onChange={(e) => {
              setFormData({ ...formData, patient_name: e.target.value })
              if (errors.patient_name) setErrors({ ...errors, patient_name: '' })
            }}
            className={`w-full px-4 py-3 border rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.patient_name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="John Doe"
          />
          {errors.patient_name && (
            <p className="mt-2 text-sm text-red-600">{errors.patient_name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.patient_email}
            onChange={(e) => {
              setFormData({ ...formData, patient_email: e.target.value })
              if (errors.patient_email) setErrors({ ...errors, patient_email: '' })
            }}
            className={`w-full px-4 py-3 border rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.patient_email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john.doe@example.com"
          />
          {errors.patient_email && (
            <p className="mt-2 text-sm text-red-600">{errors.patient_email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-base font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.patient_phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className={`w-full px-4 py-3 border rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.patient_phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
            maxLength={14}
          />
          {errors.patient_phone && (
            <p className="mt-2 text-sm text-red-600">{errors.patient_phone}</p>
          )}
        </div>

        {/* Appointment Type */}
        <div>
          <label htmlFor="type" className="block text-base font-semibold text-gray-700 mb-2">
            Appointment Type *
          </label>
          <select
            id="type"
            value={formData.appointment_type}
            onChange={(e) => {
              setFormData({ ...formData, appointment_type: e.target.value as AppointmentType })
              if (errors.appointment_type) setErrors({ ...errors, appointment_type: '' })
            }}
            className={`w-full px-4 py-3 border rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${
              errors.appointment_type ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select appointment type</option>
            {APPOINTMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.appointment_type && (
            <p className="mt-2 text-sm text-red-600">{errors.appointment_type}</p>
          )}
        </div>

        {/* Error messages for date/time */}
        {(errors.date || errors.time) && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-base text-red-600">{errors.date || errors.time}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting || !selectedDate || !selectedTime}
          className="w-full min-h-[48px] bg-blue-600 text-white py-3 px-6 rounded-md text-base font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
        >
          {submitting ? 'Booking Appointment...' : 'Book Appointment'}
        </button>
      </div>
    </form>
  )
}
