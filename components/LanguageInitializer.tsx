'use client'

import { useEffect, useState, ReactNode } from 'react'
import { LanguageProvider, type Language } from '@/lib/context'

type LanguageInitializerProps = {
  children: ReactNode
}

export default function LanguageInitializer({ children }: LanguageInitializerProps) {
  const [initialLanguage, setInitialLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language | null
    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      setInitialLanguage(savedLanguage)
    } else {
      // Fall back to browser language preference
      const browserLang = navigator.language.toLowerCase()
      setInitialLanguage(browserLang.startsWith('zh') ? 'zh' : 'en')
    }
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by only rendering after mounted
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      {children}
    </LanguageProvider>
  )
}
