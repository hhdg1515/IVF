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
  { dayKey: 'day-sunday', time: 'Closed' },
]

const PRIMARY_LINKS: Array<{ href: string; labelKey: TranslationKey }> = [
  { href: '/about', labelKey: 'footer-nav-about' },
  { href: '/services', labelKey: 'footer-nav-services' },
  { href: '/faq', labelKey: 'nav-faq' },
  { href: '/contact', labelKey: 'footer-nav-contact' },
]

const RESOURCE_LINKS: Array<{ href: string; label: string }> = [
  { href: '/the-ovumethod', label: 'The OvuMethod' },
  { href: '/start-here', label: 'Start Here' },
  { href: '/patient-resources', label: 'Patient Resources' },
  { href: '/legal-documents', label: 'Legal Documents' },
  { href: '/blog', label: 'Blog' },
]

const SOCIAL_LINKS: Array<{ href: string; label: string }> = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://facebook.com', label: 'Facebook' },
  { href: 'https://pinterest.com', label: 'Pinterest' },
]

export const Footer = () => {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-[40] overflow-hidden bg-[#2a1a22] text-[#f4e7df]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(166,54,85,0.28),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(92,32,61,0.35),_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-serif italic text-3xl text-[#f6c7bd]">IVY</span>
            <p className="uppercase tracking-[0.32em] text-xs text-[#f4e7df]/70">
              Integrative Fertility Center
            </p>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-[#f4e7df]/80">
              <p className="m-0">123 Fertility Lane</p>
              <p className="m-0">San Francisco, CA 94102</p>
              <a
                className="mt-3 inline-flex text-[#f4e7df] transition hover:text-[#f6c7bd]"
                href="tel:+14155551234"
              >
                +1 (415) 555-1234
              </a>
              <a
                className="block text-[#f4e7df] transition hover:text-[#f6c7bd]"
                href="mailto:info@ivyfertility.com"
              >
                info@ivyfertility.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.28em] !text-[#f6c7bd]">
              {t('footer-nav-title')}
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-[#f4e7df]/80">
              {PRIMARY_LINKS.map(({ href, labelKey }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition hover:translate-x-1 hover:text-[#f6c7bd]"
                >
                  {t(labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.28em] !text-[#f6c7bd]">
              Resources
            </h3>
            <nav className="flex flex-col gap-3 text-sm text-[#f4e7df]/80">
              {RESOURCE_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition hover:translate-x-1 hover:text-[#f6c7bd]"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.28em] !text-[#f6c7bd]">
              {t('footer-hours-title')}
            </h3>
            <div className="space-y-2 text-sm text-[#f4e7df]/80">
              {HOURS.map(({ dayKey, time }) => (
                <div key={dayKey} className="flex items-center justify-between gap-6">
                  <span>{t(dayKey)}</span>
                  <span className="text-[#f4e7df]/60">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 text-sm text-[#f4e7df]/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="uppercase tracking-[0.24em]">
              © 2025 IVY Fertility Center
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ href }) => (
                <a
                  key={href}
                  href={href}
                  className="transition hover:text-[#f6c7bd]"
                  aria-label={href.replace('https://', '')}
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.04c-5.45 0-9.87 4.42-9.87 9.87 0 4.37 2.87 8.08 6.85 9.39-.1-.8-.2-2.04.04-2.92.21-.87 1.4-5.55 1.4-5.55s-.35-.7-.35-1.74c0-1.63.95-2.84 2.13-2.84 1 0 1.47.75 1.47 1.66 0 1.01-.64 2.52-.97 3.92-.28 1.13.6 2.05 1.78 2.05 2.14 0 3.79-2.25 3.79-5.48 0-2.86-2.05-4.87-4.98-4.87-3.39 0-5.39 2.55-5.39 5.18 0 1.03.4 2.14.9 2.74.1.12.12.22.09.34-.1.37-.31 1.13-.36 1.29-.06.2-.19.24-.43.14-1.62-.75-2.64-3.1-2.64-4.99 0-4.06 2.95-7.78 8.51-7.78 4.47 0 7.95 3.18 7.95 7.44 0 4.44-2.81 8.02-6.7 8.02-1.31 0-2.54-.68-2.96-1.47l-.8 3.05c-.29 1.1-1.08 2.48-1.61 3.31 1.21.37 2.49.57 3.82.57 5.45 0 9.87-4.42 9.87-9.87 0-5.45-4.42-9.87-9.87-9.87Z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[#f4e7df] transition hover:-translate-y-1 hover:border-[#f6c7bd] hover:text-[#f6c7bd]"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="1.5" d="m5 14 7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
