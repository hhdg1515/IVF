'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError('Invalid email or password')
        setLoading(false)
        return
      }

      // Success - redirect to dashboard
      router.push('/dashboard')
      router.refresh()
    } catch (err) {
      setError('An unexpected error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            IVY Fertility
          </h1>
          <p className="text-base text-gray-600">
            Front Desk Staff Login
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="staff@ivyfertility.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Enter your password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-base text-red-600">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full min-h-[48px] bg-blue-600 text-white py-3 px-6 rounded-md text-base font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Back to Home Link */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <a
              href="/"
              className="text-base text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Booking Page
            </a>
          </div>
        </div>

        {/* Info Text */}
        <p className="mt-6 text-center text-sm text-gray-500">
          For front desk staff only. Patients can book appointments on the{' '}
          <a href="/" className="text-blue-600 hover:underline">
            main page
          </a>
          .
        </p>
      </div>
    </div>
  )
}
