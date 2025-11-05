'use client'

import { useState } from 'react'
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns'
import { isValidBookingDate } from '@/lib/utils'

interface CalendarProps {
  selectedDate: Date | null
  onSelectDate: (date: Date) => void
}

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-gray-800">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 hover:bg-gray-100 rounded-md transition-all duration-200"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    )
  }

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
      <div className="grid grid-cols-7 gap-2 mb-3">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-semibold text-gray-600 py-2"
          >
            {day}
          </div>
        ))}
      </div>
    )
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        const isValid = isValidBookingDate(cloneDay)
        const isCurrentMonth = isSameMonth(day, monthStart)
        const isSelected = selectedDate && isSameDay(day, selectedDate)
        const isTodayDate = isToday(day)

        days.push(
          <button
            key={day.toString()}
            onClick={() => isValid && onSelectDate(cloneDay)}
            disabled={!isValid}
            className={`
              h-12 flex items-center justify-center text-base rounded-md transition-all duration-200
              ${!isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
              ${isValid ? 'hover:bg-blue-50 cursor-pointer font-medium' : 'cursor-not-allowed opacity-40'}
              ${isSelected ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm' : ''}
              ${isTodayDate && !isSelected ? 'border-2 border-blue-600 font-semibold' : ''}
            `}
          >
            {format(day, 'd')}
          </button>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-2">
          {days}
        </div>
      )
      days = []
    }

    return <div className="space-y-2">{rows}</div>
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600 space-y-1">
        <p>• Select a weekday to view available times</p>
        <p>• Weekend appointments are not available</p>
      </div>
    </div>
  )
}
