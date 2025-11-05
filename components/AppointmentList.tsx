'use client'

import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { createClient } from '@/lib/supabase/client'
import type { Appointment } from '@/lib/types'

export default function AppointmentList() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'today' | 'upcoming'>('all')

  useEffect(() => {
    fetchAppointments()

    // Subscribe to realtime changes
    const supabase = createClient()
    const channel = supabase
      .channel('appointments')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'appointments' },
        () => {
          fetchAppointments()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchAppointments = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('appointment_date', { ascending: true })
      .order('appointment_time', { ascending: true })

    if (error) {
      console.error('Error fetching appointments:', error)
      setLoading(false)
      return
    }

    setAppointments(data || [])
    setLoading(false)
  }

  const getFilteredAppointments = () => {
    const today = new Date().toISOString().split('T')[0]

    switch (filter) {
      case 'today':
        return appointments.filter(apt => apt.appointment_date === today)
      case 'upcoming':
        return appointments.filter(apt => apt.appointment_date >= today)
      default:
        return appointments
    }
  }

  const formatAppointmentTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }

  const filteredAppointments = getFilteredAppointments()

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent mx-auto"></div>
        <p className="mt-4 text-gray-600 text-base">Loading appointments...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Filter Tabs */}
      <div className="border-b border-gray-200 p-6 pb-0">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-base font-medium rounded-t-md transition-all ${
              filter === 'all'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All ({appointments.length})
          </button>
          <button
            onClick={() => setFilter('today')}
            className={`px-4 py-2 text-base font-medium rounded-t-md transition-all ${
              filter === 'today'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Today
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 text-base font-medium rounded-t-md transition-all ${
              filter === 'upcoming'
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Upcoming
          </button>
        </div>
      </div>

      {/* Appointments List */}
      <div className="divide-y divide-gray-200">
        {filteredAppointments.length === 0 ? (
          <div className="p-8 text-center">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-gray-600 text-base">
              No appointments found
            </p>
          </div>
        ) : (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {appointment.patient_name}
                  </h4>
                  <div className="flex flex-wrap gap-4 text-base text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {format(parseISO(appointment.appointment_date), 'MMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {formatAppointmentTime(appointment.appointment_time)}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {appointment.patient_email}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {appointment.patient_phone}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">
                    {appointment.appointment_type}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
