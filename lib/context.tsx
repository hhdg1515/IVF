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
    'nav-team': 'Our Team',
    'nav-pricing': 'Pricing',
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
    'nav-blog': 'Blog',
    'blog-all-posts': 'All Posts',
    'blog-patient-stories': 'Patient Stories',
    'blog-clinical': 'Clinical Insights',
    'blog-nutrition': 'Nutrition',
    'blog-mind-body': 'Mind-Body',
    'blog-read-more': 'Read More',
    'blog-back-to-blog': 'Back to Blog',
    'blog-related-articles': 'Related Articles',
    'blog-continue-reading': 'Continue Reading',
  },
  zh: {
    'nav-home': '首页',
    'nav-services': '服务',
    'nav-ovumethod': 'OvuMethod',
    'nav-team': '我们的团队',
    'nav-pricing': '价格',
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
    'nav-blog': '博客',
    'blog-all-posts': '全部文章',
    'blog-patient-stories': '患者故事',
    'blog-clinical': '临床洞见',
    'blog-nutrition': '营养指导',
    'blog-mind-body': '身心健康',
    'blog-read-more': '阅读全文',
    'blog-back-to-blog': '返回博客',
    'blog-related-articles': '相关文章',
    'blog-continue-reading': '继续阅读',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

type LanguageProviderProps = {
  children: ReactNode
  initialLanguage?: Language
}

export function LanguageProvider({ children, initialLanguage = 'en' }: LanguageProviderProps) {
  const [lang, setLang] = useState<Language>(initialLanguage)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
      document.cookie = `preferred-language=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`
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
