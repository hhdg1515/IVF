'use client'

import { useState, useEffect, useMemo, useRef, CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage, type TranslationKey } from '@/lib/context'

type NavLinkConfig = {
  href: string
  labelKey: TranslationKey
  isActive: (path: string) => boolean
  children?: NavLinkConfig[]
}

const NAV_LINKS: NavLinkConfig[] = [
  { href: '/', labelKey: 'nav-home', isActive: (path) => path === '/' },
  {
    href: '/services',
    labelKey: 'nav-services',
    isActive: (path) =>
      path.startsWith('/services') ||
      path === '/the-ovumethod' ||
      path === '/our-lab' ||
      path === '/pricing',
    children: [
      { href: '/the-ovumethod', labelKey: 'nav-services-ovumethod', isActive: (path) => path === '/the-ovumethod' },
      { href: '/services/egg-freezing', labelKey: 'nav-services-egg-freezing', isActive: (path) => path === '/services/egg-freezing' },
      { href: '/services/ivf-treatment', labelKey: 'nav-services-ivf', isActive: (path) => path === '/services/ivf-treatment' },
      { href: '/services/embryo-freezing', labelKey: 'nav-services-embryo-freezing', isActive: (path) => path === '/services/embryo-freezing' },
      { href: '/services/third-party', labelKey: 'nav-services-third-party', isActive: (path) => path === '/services/third-party' },
      { href: '/our-lab', labelKey: 'nav-services-lab', isActive: (path) => path === '/our-lab' },
      { href: '/pricing', labelKey: 'nav-services-pricing', isActive: (path) => path === '/pricing' },
    ],
  },
  { href: '/about', labelKey: 'nav-about', isActive: (path) => path.startsWith('/about') },
  { href: '/start-here', labelKey: 'nav-start', isActive: (path) => path === '/start-here' },
  {
    href: '/patient-resources',
    labelKey: 'nav-resources',
    isActive: (path) => path.startsWith('/faq') || path === '/legal-documents' || path === '/insurance-financing' || path === '/fertility-testing',
    children: [
      { href: '/fertility-testing', labelKey: 'nav-resources-testing', isActive: (path) => path === '/fertility-testing' },
      { href: '/insurance-financing', labelKey: 'nav-resources-insurance', isActive: (path) => path === '/insurance-financing' },
      { href: '/faq', labelKey: 'nav-resources-faq', isActive: (path) => path === '/faq' },
      { href: '/legal-documents', labelKey: 'nav-resources-legal', isActive: (path) => path === '/legal-documents' },
    ],
  },
  { href: '/blog', labelKey: 'nav-blog', isActive: (path) => path.startsWith('/blog') },
  { href: '/contact', labelKey: 'nav-contact', isActive: (path) => path === '/contact' },
]

const disableScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const enableScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

export const Navigation = () => {
  const { t, toggle, currentLanguage } = useLanguage()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<Set<string>>(new Set())
  const dropdownCloseTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        enableScroll()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      enableScroll()
    }
  }, [pathname, isMenuOpen])

  useEffect(() => enableScroll, [])

  useEffect(() => {
    return () => {
      if (dropdownCloseTimeout.current) {
        clearTimeout(dropdownCloseTimeout.current)
      }
    }
  }, [])

  const navItems = useMemo(
    () =>
      NAV_LINKS.map(({ href, labelKey, isActive, children }) => ({
        href,
        label: t(labelKey),
        active: isActive(pathname),
        children: children?.map((child) => ({
          href: child.href,
          label: t(child.labelKey),
          active: child.isActive(pathname),
        })),
      })),
    [pathname, t]
  )

  const openMenu = () => {
    setIsMenuOpen(true)
    disableScroll()
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenMobileDropdowns(new Set())
    enableScroll()
  }

  const toggleMobileDropdown = (href: string) => {
    setOpenMobileDropdowns((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(href)) {
        newSet.delete(href)
      } else {
        newSet.add(href)
      }
      return newSet
    })
  }

  const openDropdown = (href: string) => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current)
      dropdownCloseTimeout.current = null
    }
    setActiveDropdown(href)
  }

  const scheduleCloseDropdown = () => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current)
    }
    dropdownCloseTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
      dropdownCloseTimeout.current = null
    }, 80)
  }

  const languageLabel = `${String.fromCharCode(0x4E2D)} / EN`
  const languageToggleAria =
    currentLanguage === 'en' ? 'Switch language to Chinese' : 'Switch language to English'

  return (
    <header className="sticky top-0 z-[100] w-full">
      <div
        className="border-b border-[#decfbe] bg-[#f7eee7dd] backdrop-blur-lg"
        style={{ boxShadow: '0 10px 30px rgba(46, 29, 36, 0.12)' } as CSSProperties}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col leading-none text-[#a63655]">
              <span className="font-serif italic text-3xl">IVY</span>
              <span className="text-[11px] uppercase tracking-[0.48em] text-[#5a555d]">
                Fertility
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-4">
              {navItems.map(({ href, label, active, children }) => (
                <li
                  key={href}
                  className="relative"
                >
                  {children ? (
                    <div
                      onMouseEnter={() => openDropdown(href)}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      <button
                        className={`uppercase-nav relative inline-flex items-center gap-1 text-[10.5px] font-semibold tracking-wide text-[#5a555d] transition hover:text-[#a63655] ${
                          active ? 'text-[#a63655]' : ''
                        }`}
                      >
                        <span>{label}</span>
                        <svg
                          className="h-3 w-3 transition-transform"
                          style={{
                            transform: activeDropdown === href ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4.5l3 3 3-3" />
                        </svg>
                        {active && (
                          <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#a63655]" />
                        )}
                      </button>
                      {activeDropdown === href && (
                        <div
                          className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-[#decfbe] bg-[#f7eee7] shadow-xl"
                          onMouseEnter={() => openDropdown(href)}
                          onMouseLeave={scheduleCloseDropdown}
                        >
                          <ul className="py-2">
                            {children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={`block px-4 py-2.5 text-sm text-[#5a555d] transition hover:bg-[#f0e3d8] hover:text-[#a63655] ${
                                    child.active ? 'bg-[#f0e3d8] text-[#a63655]' : ''
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className={`uppercase-nav relative inline-flex items-center text-[10.5px] font-semibold tracking-wide text-[#5a555d] transition hover:text-[#a63655] ${
                        active ? 'text-[#a63655]' : ''
                      }`}
                    >
                      <span>{label}</span>
                      {active && (
                        <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#a63655]" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={toggle}
              className="uppercase-nav inline-flex items-center rounded border border-[#d9c8b8] px-4 py-2 text-[11px] text-[#5a555d] transition hover:border-[#a63655] hover:text-[#a63655]"
              aria-label={languageToggleAria}
            >
              {languageLabel}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center rounded border border-[#d9c8b8] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-[#5a555d] transition hover:border-[#a63655] hover:text-[#a63655]"
              aria-label={languageToggleAria}
            >
              {languageLabel}
            </button>
            <button
              type="button"
              onClick={openMenu}
              className="flex h-11 w-11 items-center justify-center rounded bg-[#a63655] text-white shadow-md transition hover:bg-[#8a2c3e]"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[95] transition-opacity duration-300 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{ background: 'rgba(38,17,27,0.96)' } as CSSProperties}
        onClick={closeMenu}
      >
        <div
          className="relative mx-auto flex h-full w-full max-w-[480px] flex-col gap-6 overflow-y-auto px-8 pb-16 pt-20 text-white"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={closeMenu}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="1.5" d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>

          <div className="flex flex-col gap-2 pt-6">
            <span className="font-serif italic text-3xl text-[#f8d0c3]">IVY</span>
            <span className="text-[11px] uppercase tracking-[0.36em] text-white/70">
              Integrative Fertility Center
            </span>
          </div>

          <ul className="mt-6 flex flex-col gap-4 text-left text-base uppercase tracking-[0.24em]">
            {navItems.map(({ href, label, children }) => (
              <li key={`mobile-${href}`}>
                {children ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(href)}
                      className="flex w-full items-center justify-between py-3 transition hover:text-[#f8d0c3]"
                    >
                      <span>{label}</span>
                      <svg
                        className="h-4 w-4 transition-transform"
                        style={{
                          transform: openMobileDropdowns.has(href) ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4.5l3 3 3-3" />
                      </svg>
                    </button>
                    {openMobileDropdowns.has(href) && (
                      <ul className="ml-4 mt-2 flex flex-col gap-3 border-l border-white/20 pl-4">
                        {children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={closeMenu}
                              className="block py-2 text-sm uppercase tracking-[0.2em] text-white/80 transition hover:text-[#f8d0c3]"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="inline-flex items-center justify-start py-3 transition hover:text-[#f8d0c3]"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#a63655] shadow-lg transition hover:bg-[#f8d0c3]"
            >
              Book Consultation
            </Link>
            <button
              type="button"
              onClick={() => {
                toggle()
                closeMenu()
              }}
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.32em] text-white transition hover:bg-white/10"
              aria-label={languageToggleAria}
            >
              {languageLabel}
            </button>
          </div>

          <div className="mt-auto flex flex-col gap-2 text-sm text-white/70">
            <a href="tel:+18885551234" className="inline-flex items-center justify-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 0 0 2.25-2.25v-1.071a1.5 1.5 0 0 0-1.106-1.447l-3.105-.889a1.5 1.5 0 0 0-1.8.75l-.563 1.126a11.977 11.977 0 0 1-5.358-5.358l1.126-.563a1.5 1.5 0 0 0 .75-1.8l-.889-3.105A1.5 1.5 0 0 0 6.321 3h-1.07A2.25 2.25 0 0 0 3 5.25v.75Z"
                />
              </svg>
              +1 (888) 555-1234
            </a>
            <span className="text-center">info@ivyfertility.com</span>
          </div>
        </div>
      </div>
    </header>
  )
}
