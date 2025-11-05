'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type TranslationKey = string
export type Language = 'en' | 'zh'

interface LanguageContextType {
  lang: Language
  currentLanguage: Language
  t: (key: TranslationKey) => string
  toggle: () => void
}

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-ovumethod': 'The OvuMethod',
    'nav-start': 'Start Here',
    'nav-about': 'About Us',
    'nav-faq': 'FAQ',
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
    'nav-ovumethod': 'OvuMethod',
    'nav-start': '开始这里',
    'nav-about': '关于我们',
    'nav-faq': '常见问题',
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
    'hero-title': '生育诊疗，个性化关怀',
    'hero-subtitle': '世界级的生育诊疗服务，兼具个性化关怀',
    'hero-cta': '预约免费咨询',
    'footer-copyright': '版权所有',
  },
}

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en'
  }
  const stored = localStorage.getItem('preferred-language')
  if (stored === 'zh' || stored === 'en') {
    return stored
  }
  return navigator.language.startsWith('zh') ? 'zh' : 'en'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
    }
  }, [lang])

  const toggle = () => {
    setLang((prev) => (prev === 'en' ? 'zh' : 'en'))
  }

  const t = (key: TranslationKey): string => {
    const dictionary = translations[lang]
    return dictionary[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, currentLanguage: lang, t, toggle }}>
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
