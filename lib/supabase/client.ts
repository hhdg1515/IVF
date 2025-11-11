import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    if (process.env.NODE_ENV === 'development') {
      // Provide dummy credentials for development when Supabase is not configured
      console.warn('⚠️  Supabase credentials not configured. Using mock client.')
      return createBrowserClient(
        'https://placeholder.supabase.co',
        'placeholder-anon-key',
        {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
          },
        }
      )
    }
    throw new Error(
      'Missing Supabase environment variables. Please check your .env.local file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
    )
  }

  return createBrowserClient(url, key, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce',
    },
  })
}
