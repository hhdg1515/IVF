'use client'

import Link from 'next/link'
import { useLanguage, type TranslationKey } from '@/lib/context'

const HOURS: Array<{ dayKey: TranslationKey; time: string }> = [
  { dayKey: 'day-monday', time: '9:00am - 5:00pm' },
  { dayKey: 'day-tuesday', time: '9:00am - 5:00pm' },
  { dayKey: 'day-wednesday', time: '9:00am - 5:00pm' },
  { dayKey: 'day-thursday', time: '9:00am - 5:00pm' },
  { dayKey: 'day-friday', time: '9:00am - 5:00pm' },
  { dayKey: 'day-saturday', time: '10:00am - 2:00pm' },
  { dayKey: 'day-sunday', time: 'Closed' }
]

const FOOTER_NAV: Array<{ href?: string; labelKey: TranslationKey; external?: boolean }> = [
  { href: '/services', labelKey: 'footer-nav-services' },
  { href: '/about', labelKey: 'footer-nav-about' },
  { href: '/contact', labelKey: 'footer-nav-contact' },
  { href: '/contact', labelKey: 'footer-nav-book' }
]

export const Footer = () => {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-[60] bg-[#1a1a2e] pt-[50px] text-white">
      <div className="mx-auto w-[80%] max-w-[1200px] px-[20px]">
        <div className="flex flex-col gap-[30px] pb-12 md:flex-row md:justify-center md:gap-x-[80px]">
          <section className="flex w-full flex-col gap-5 text-left md:max-w-[320px]">
            <h3 className="text-[0.9rem] font-semibold uppercase tracking-[0.5px]">
              {t('footer-contact-title')}
            </h3>
            <div className="space-y-[20px] text-[0.9rem] text-white/90">
              <div className="leading-[1.6]">
                <p className="m-0">123 Fertility Lane,</p>
                <p className="m-0">San Francisco,</p>
                <p className="m-0">CA 94102</p>
              </div>
              <a
                href="tel:+14155551234"
                className="text-white transition duration-300 hover:text-[#e33479] hover:underline"
              >
                +1 (415) 555-1234
              </a>
              <a
                href="mailto:info@ivyfertility.com"
                className="text-white transition duration-300 hover:text-[#e33479] hover:underline"
              >
                info@ivyfertility.com
              </a>
            </div>
          </section>

          <section className="flex w-full flex-col gap-5 text-left md:max-w-[280px]">
            <h3 className="text-[0.9rem] font-semibold uppercase tracking-[0.5px]">
              {t('footer-hours-title')}
            </h3>
            <div className="flex flex-col gap-[6px]">
              {HOURS.map(({ dayKey, time }) => (
                <div key={dayKey} className="flex items-center gap-4 py-[2px] whitespace-nowrap">
                  <span className="min-w-[110px] text-[0.9rem] font-medium text-white/90 whitespace-nowrap">
                    {t(dayKey)}
                  </span>
                  <span className="text-[0.9rem] text-white whitespace-nowrap">{time}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="flex w-full flex-col gap-5 text-left md:ml-auto md:max-w-[260px]">
            <h3 className="text-[0.9rem] font-semibold uppercase tracking-[0.5px]">
              {t('footer-nav-title')}
            </h3>
            <nav className="flex flex-col gap-2 text-[0.9rem] text-white/90">
              {FOOTER_NAV.map(({ href, labelKey, external }) => {
                const label = t(labelKey)
                const baseClasses =
                  'cursor-pointer py-[6px] transition duration-300 hover:translate-x-[5px] hover:text-[#e33479]'
                if (external || !href) {
                  return (
                    <a key={labelKey} href={href || '#'} className={baseClasses}>
                      {label}
                    </a>
                  )
                }
                return (
                  <Link key={labelKey} href={href} className={baseClasses}>
                    {label}
                  </Link>
                )
              })}
            </nav>
          </section>
        </div>
      </div>

      <div className="bg-[#0f0f1e]">
        <div className="mx-auto flex w-[80%] max-w-[1200px] flex-wrap items-center justify-center gap-4 px-8 py-5 text-[0.9rem] text-white/80">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition duration-300 hover:bg-white/20 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:-translate-y-[3px] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Back to top"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <p className="text-center tracking-[0.5px]">
            © 2025 IVY FERTILITY CENTER – {t('footer-copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
