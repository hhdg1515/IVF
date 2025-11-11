'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { generateTimeSlots } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'

interface TimeSlotPickerProps {
  selectedDate: Date | null
  selectedTime: string | null
  onSelectTime: (time: string) => void
}

export default function TimeSlotPicker({
  selectedDate,
  selectedTime,
  onSelectTime,
}: TimeSlotPickerProps) {
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!selectedDate) {
      setBookedSlots(new Set())
      return
    }

    const fetchBookedSlots = async () => {
      setLoading(true)
      const supabase = createClient()
      const dateStr = format(selectedDate, 'yyyy-MM-dd')

      const { data, error } = await supabase
        .from('appointments')
        .select('appointment_time')
        .eq('appointment_date', dateStr)

      if (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error fetching booked slots:', error)
        }
        setLoading(false)
        return
      }

      const booked = new Set(data.map((apt) => apt.appointment_time))
      setBookedSlots(booked)
      setLoading(false)
    }

    fetchBookedSlots()
  }, [selectedDate])

  if (!selectedDate) {
    return (
      <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
        <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="text-gray-600 text-base">Please select a date to view available time slots</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent mx-auto"></div>
        <p className="mt-4 text-gray-600 text-base">Loading available times...</p>
      </div>
    )
  }

  const timeSlots = generateTimeSlots()

  const formatTimeDisplay = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-6 text-gray-800">
        Available Times for {format(selectedDate, 'MMMM d, yyyy')}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {timeSlots.map((time) => {
          const isBooked = bookedSlots.has(time)
          const isSelected = selectedTime === time

          return (
            <button
              key={time}
              onClick={() => !isBooked && onSelectTime(time)}
              disabled={isBooked}
              className={`
                min-h-[48px] px-4 py-3 rounded-md border text-base font-medium transition-all duration-200
                ${isBooked
                  ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                  : isSelected
                  ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                  : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-700'
                }
              `}
            >
              {formatTimeDisplay(time)}
              {isBooked && (
                <span className="block text-sm mt-1">Booked</span>
              )}
            </button>
          )
        })}
      </div>
      {bookedSlots.size === timeSlots.length && (
        <p className="mt-6 text-center text-orange-600 font-medium">
          All time slots are booked for this date. Please select another day.
        </p>
      )}
    </div>
  )
}
