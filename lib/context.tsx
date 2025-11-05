'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'

export type TranslationKey = string

export type Language = 'en' | 'zh'

interface LanguageContextType {
  lang: Language
  t: (key: TranslationKey) => string
  toggle: () => void
  currentLanguage: Language
}

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-about': 'About Us',
    'nav-contact': 'Contact',
    'footer-contact-title': 'Contact Info',
    'footer-hours-title': 'Hours',
    'footer-nav-title': 'Navigation',
    'footer-nav-services': 'Services',
    'footer-nav-about': 'About Us',
    'footer-nav-contact': 'Contact',
    'footer-nav-book': 'Book Consultation',
    'day-monday': 'Monday',
    'day-tuesday': 'Tuesday',
    'day-wednesday': 'Wednesday',
    'day-thursday': 'Thursday',
    'day-friday': 'Friday',
    'day-saturday': 'Saturday',
    'day-sunday': 'Sunday',
    'hero-title': 'Fertility Made Personal',
    'hero-subtitle': 'World-class fertility care with a personal touch',
    'hero-cta': 'Book Free Consultation',
    'footer-copyright': 'All rights reserved',
  },
  zh: {
    'nav-home': '首页',
    'nav-services': '服务',
    'nav-about': '关于我们',
    'nav-contact': '联系',
    'footer-contact-title': '联系方式',
    'footer-hours-title': '营业时间',
    'footer-nav-title': '导航',
    'footer-nav-services': '服务',
    'footer-nav-about': '关于我们',
    'footer-nav-contact': '联系',
    'footer-nav-book': '预约免费咨询',
    'day-monday': '周一',
    'day-tuesday': '周二',
    'day-wednesday': '周三',
    'day-thursday': '周四',
    'day-friday': '周五',
    'day-saturday': '周六',
    'day-sunday': '周日',
    'hero-title': '生育诊疗，个人化护理',
    'hero-subtitle': '世界级生育诊疗服务，个性化关怀',
    'hero-cta': '预约免费咨询',
    'footer-copyright': '版权所有',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-language') as Language | null
      if (stored) {
        setLang(stored)
      } else {
        const browserLang = navigator.language
        setLang(browserLang.startsWith('zh') ? 'zh' : 'en')
      }
    }
    setMounted(true)
  }, [])

  const toggle = () => {
    const newLang = lang === 'en' ? 'zh' : 'en'
    setLang(newLang)
    localStorage.setItem('preferred-language', newLang)
  }

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || key
  }

  // Always provide context, even before mounted
  return (
    <LanguageContext.Provider value={{ lang, t, toggle, currentLanguage: lang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
