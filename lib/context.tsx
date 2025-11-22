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
    'nav-services-ovumethod': 'The OvuMethod',
    'nav-services-egg-freezing': 'Egg Freezing',
    'nav-services-ivf': 'IVF Treatment',
    'nav-services-embryo-freezing': 'Embryo Freezing',
    'nav-services-third-party': 'Third-Party Reproduction',
    'nav-services-lab': 'Our Lab & Facilities',
    'nav-services-pricing': 'Pricing',
    'nav-about': 'About Us',
    'nav-about-story': 'Our Story',
    'nav-about-team': 'Our Team',
    'nav-start': 'Start Here',
    'nav-resources': 'Patient Resources',
    'nav-resources-faq': 'FAQ',
    'nav-resources-legal': 'Legal Documents & Patient Rights',
    'nav-blog': 'Blog',
    'nav-contact': 'Contact',
    'nav-team': 'Our Team',
    'nav-lab': 'Our Lab',
    'nav-pricing': 'Pricing',
    'nav-legal': 'Legal',
    'nav-ovumethod': 'The OvuMethod',
    'nav-faq': 'FAQ',
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
    'nav-services-ovumethod': 'OvuMethod',
    'nav-services-egg-freezing': '卵子冷冻',
    'nav-services-ivf': 'IVF治疗',
    'nav-services-embryo-freezing': '胚胎冷冻',
    'nav-services-third-party': '第三方辅助生殖',
    'nav-services-lab': '实验室设施',
    'nav-services-pricing': '价格',
    'nav-about': '关于我们',
    'nav-about-story': '我们的故事',
    'nav-about-team': '我们的团队',
    'nav-start': '开始这里',
    'nav-resources': '患者资源',
    'nav-resources-faq': '常见问题',
    'nav-resources-legal': '法律文件与患者权利',
    'nav-blog': '博客',
    'nav-contact': '联系',
    'nav-team': '我们的团队',
    'nav-lab': '我们的实验室',
    'nav-pricing': '价格',
    'nav-legal': '法律文件',
    'nav-ovumethod': 'OvuMethod',
    'nav-faq': '常见问题',
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
