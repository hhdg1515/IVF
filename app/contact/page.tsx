'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'

type FormData = {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

const contactChannels = [
  {
    icon: 'â˜Žï¸',
    titleEn: 'Call or text us',
    titleZh: 'ç”µè¯ / çŸ­ä¿¡è”ç³»æˆ‘ä»¬',
    descEn: 'Concierge available Mondayâ€“Friday, 8am â€“ 7pm PT',
    descZh: 'ç¤¼å®¾å›¢é˜Ÿåœ¨å¤ªå¹³æ´‹æ—¶é—´å‘¨ä¸€è‡³å‘¨äº” 8am â€“ 7pm ä¸ºæ‚¨æœåŠ¡',
    action: { label: '+1 (415) 555-1234', href: 'tel:+14155551234' },
  },
  {
    icon: 'âœ‰ï¸',
    titleEn: 'Email concierge',
    titleZh: 'é‚®ä»¶è”ç³»ç¤¼å®¾',
    descEn: 'Share medical records or detailed questions and receive a response within 24 hours',
    descZh: 'å‘é€èµ„æ–™æˆ–è¯¦ç»†é—®é¢˜ï¼Œæˆ‘ä»¬å°†åœ¨ 24 å°æ—¶å†…å›žå¤',
    action: { label: 'info@ivyfertility.com', href: 'mailto:info@ivyfertility.com' },
  },
  {
    icon: 'ðŸ’¬',
    titleEn: 'Schedule a virtual chat',
    titleZh: 'é¢„çº¦çº¿ä¸Šå’¨è¯¢',
    descEn: 'Book a 20-minute Zoom session with a bilingual coordinator at a time that suits you',
    descZh: 'é¢„çº¦ 20 åˆ†é’Ÿçš„åŒè¯­åè°ƒå‘˜ Zoom å’¨è¯¢ï¼Œé€‰æ‹©æœ€é€‚åˆæ‚¨çš„æ—¶é—´',
    action: { label: 'Book virtual chat', href: '/contact' },
  },
]

const visitDetails = [
  {
    titleEn: 'Clinic address',
    titleZh: 'è¯Šæ‰€åœ°å€',
    linesEn: ['123 Fertility Lane', 'San Francisco, CA 94102'],
    linesZh: ['123 Fertility Lane', 'æ—§é‡‘å±±, CA 94102'],
  },
  {
    titleEn: 'On-site services',
    titleZh: 'é™¢å†…æœåŠ¡',
    linesEn: ['Embryology & andrology lab', 'Ultrasound & monitoring', 'Consult suites & recovery lounge'],
    linesZh: ['èƒšèƒŽä¸Žç”·ç§‘å®žéªŒå®¤', 'è¶…å£°ä¸Žç›‘æµ‹ä¸­å¿ƒ', 'ä¼šè¯Šå®¤ä¸Žæ¢å¤ä¼‘æ¯åŒº'],
  },
  {
    titleEn: 'Parking & travel',
    titleZh: 'åœè½¦ä¸Žäº¤é€š',
    linesEn: ['Validated parking garage', '5 minutes from BART Civic Center', 'Concierge travel planning available'],
    linesZh: ['æä¾›éªŒè¯åœè½¦åº“', 'è· BART Civic Center 5 åˆ†é’Ÿ', 'å¯é¢„çº¦ç¤¼å®¾è¡Œç¨‹è§„åˆ’'],
  },
]

const serviceOptions = [
  { value: 'general', labelEn: 'General inquiry', labelZh: 'å¸¸è§„å’¨è¯¢' },
  { value: 'egg-freezing', labelEn: 'Egg freezing', labelZh: 'å†»åµ' },
  { value: 'ivf', labelEn: 'IVF treatment', labelZh: 'ä½“å¤–å—ç²¾' },
  { value: 'donor', labelEn: 'Donor services', labelZh: 'æçŒ®æœåŠ¡' },
  { value: 'surrogacy', labelEn: 'Gestational surrogacy', labelZh: 'ä»£å­•' },
  { value: 'second-opinion', labelEn: 'Second opinion', labelZh: 'äºŒæ¬¡æ„è§' },
]

export default function ContactPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.phone) {
      setError(isEn ? 'Please complete all required fields.' : 'è¯·å¡«å†™æ‰€æœ‰å¿…å¡«å­—æ®µã€‚')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError(isEn ? 'Please enter a valid email address.' : 'è¯·è¾“å…¥æœ‰æ•ˆçš„ç”µå­é‚®ç®±åœ°å€ã€‚')
      return
    }

    console.log('Contact form submission:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'general',
        message: '',
      })
    }, 3000)
  }

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Contact concierge' : 'è”ç³»ç¤¼å®¾å›¢é˜Ÿ'}
        backgroundImage="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=2000&q=80"
        title={
          isEn
            ? 'Weâ€™re ready to guide your fertility journey'
            : 'æˆ‘ä»¬éšæ—¶ä¸ºæ‚¨çš„ç”Ÿè‚²æ—…ç¨‹æä¾›æŒ‡å¼•'
        }
        subtitle={
          isEn
            ? 'Reach out to schedule your consultation, request records, or speak with our bilingual concierge team.'
            : 'é¢„çº¦ä¼šè¯Šã€ç´¢å–èµ„æ–™ï¼Œæˆ–ç›´æŽ¥ä¸Žæˆ‘ä»¬çš„åŒè¯­ç¤¼å®¾å›¢é˜Ÿäº¤æµã€‚'
        }
        primaryCtaText={isEn ? 'Schedule consultation' : 'é¢„çº¦ä¼šè¯Š'}
        primaryCtaHref="#contact-form"
        secondaryCtaText={isEn ? 'View patient guide' : '查看患者指南'}
        secondaryCtaHref="/faq#patient-guide"
        stats={[
          { value: '24h', label: isEn ? 'Average response time' : 'å¹³å‡å›žå¤æ—¶é—´' },
          { value: '7', label: isEn ? 'Concierge specialists' : 'ç¤¼å®¾ä¸“å‘˜' },
          { value: '100%', label: isEn ? 'In-house services' : 'é™¢å†…æœåŠ¡' },
        ]}
        highlight={{
          title: isEn ? 'Bilingual support' : 'åŒè¯­æ”¯æŒ',
          description: isEn
            ? 'Our Mandarin- and English-speaking coordinators ensure every conversation feels clear and supportive.'
            : 'ä¸­è‹±åŒè¯­åè°ƒå‘˜ç¡®ä¿æ²Ÿé€šé¡ºç•…ã€å…¨ç¨‹è´´å¿ƒæ”¯æŒã€‚',
        }}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 lg:px-0">
          {contactChannels.map(({ icon, titleEn, titleZh, descEn, descZh, action }, idx) => (
            <ScrollInView key={titleEn} delay={idx * 0.1}>
              <Card className="h-full px-7 py-9">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-xl text-[#2f2b33]">
                  {isEn ? titleEn : titleZh}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
                <a href={action.href} className="mt-5 inline-flex">
                  <Button variant="ghost" size="md">
                    {action.label}
                  </Button>
                </a>
              </Card>
            </ScrollInView>
          ))}
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:px-0">
          <ScrollInView>
            <Card className="h-full px-8 py-10">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Visit our San Francisco clinic' : 'æ¬¢è¿Žæ¥åˆ°æ—§é‡‘å±±è¯Šæ‰€'}
              </span>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'All diagnostics, procedures, and integrative therapies are performed under one roof. You can relax in spa-inspired recovery lounges and meet every specialist in person during your visit.'
                  : 'æ‰€æœ‰è¯Šæ–­ã€æ²»ç–—ä¸Žæ•´åˆæŠ¤ç†å‡åœ¨åŒä¸€åœ°ç‚¹å®Œæˆã€‚æ‚¨å¯åœ¨ SPA é£Žæ ¼çš„ä¼‘æ¯åŒºæ”¾æ¾ï¼Œå¹¶ä¸Žå„é¢†åŸŸä¸“å®¶é¢å¯¹é¢äº¤æµã€‚'}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {visitDetails.map(({ titleEn, titleZh, linesEn, linesZh }) => (
                  <div key={titleEn}>
                    <h4 className="text-sm uppercase tracking-[0.28em] text-[#8b858d]">
                      {isEn ? titleEn : titleZh}
                    </h4>
                    <ul className="mt-3 space-y-1 text-[14px] text-[#5a555d]">
                      {(isEn ? linesEn : linesZh).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollInView>
          <ScrollInView delay={0.1}>
            <div className="overflow-hidden rounded-[24px] shadow-[0_24px_60px_rgba(45,28,36,0.12)]">
              <iframe
                title="IVY Fertility Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.008875243502!2d-122.41312092346805!3d37.77902671373754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2d6a1237%3A0x0!2zMzfCsDQ2JzQ0LjUiTiAxMjLCsDI0JzQxLjQiVw!5e0!3m2!1sen!2sus!4v1700000000000"
                className="h-[360px] w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </ScrollInView>
        </div>
      </section>

      <section id="contact-form" className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-0">
          <ScrollInView>
            <div>
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Send us a message' : 'å‘é€ä¿¡æ¯ç»™æˆ‘ä»¬'}
              </span>
              <h2 className="mt-4 text-[40px] leading-tight text-[#2f2b33]">
                {isEn
                  ? 'Our concierge will respond within one business day'
                  : 'ç¤¼å®¾å›¢é˜Ÿå°†åœ¨ä¸€ä¸ªå·¥ä½œæ—¥å†…å›žå¤'}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Share your story, treatment interests, and preferred consultation window. We respect your privacy and keep all information confidential.'
                  : 'æ¬¢è¿Žåˆ†äº«æ‚¨çš„æ•…äº‹ã€æ„Ÿå…´è¶£çš„æ²»ç–—ä¸Žåå¥½æ—¶é—´ã€‚æˆ‘ä»¬å°Šé‡æ‚¨çš„éšç§ï¼Œå¹¶å¯¹ä¿¡æ¯ä¸¥æ ¼ä¿å¯†ã€‚'}
              </p>
              <div className="mt-6 space-y-3 text-[15px] text-[#5a555d]">
                <p>
                  {isEn
                    ? 'Already a patient? Message your coordinator through the patient portal for the fastest response.'
                    : 'å·²æ˜¯æ‚£è€…ï¼Ÿé€šè¿‡æ‚£è€…é—¨æˆ·è”ç³»åè°ƒå‘˜å¯èŽ·å¾—æœ€å¿«å›žå¤ã€‚'}
                </p>
                <Link href="/login" className="inline-flex">
                  <Button variant="ghost" size="md">
                    {isEn ? 'Go to patient portal' : 'å‰å¾€æ‚£è€…é—¨æˆ·'}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollInView>

          <ScrollInView delay={0.1}>
            <Card className="h-full px-8 py-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="rounded border border-[#dc3545] bg-[#fee2e2] px-4 py-3 text-sm text-[#991b1b]">
                    {error}
                  </div>
                )}
                {submitted && (
                  <div className="rounded border border-[#28a745] bg-[#dcfce7] px-4 py-3 text-sm text-[#166534]">
                    {isEn
                      ? 'Thank you! We received your message and will reach out shortly.'
                      : 'æ„Ÿè°¢æ‚¨çš„è”ç³»ï¼æˆ‘ä»¬å·²æ”¶åˆ°ä¿¡æ¯ï¼Œå°†å°½å¿«å›žå¤æ‚¨ã€‚'}
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                    {isEn ? 'Full name' : 'å§“å'}
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                      placeholder={isEn ? 'Your name' : 'æ‚¨çš„å§“å'}
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                    {isEn ? 'Email address' : 'ç”µå­é‚®ç®±'}
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                      placeholder="name@example.com"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                    {isEn ? 'Phone number' : 'ç”µè¯å·ç '}
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                      placeholder={isEn ? '(415) 555-1234' : '(415) 555-1234'}
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                    {isEn ? 'Service of interest' : 'æ„Ÿå…´è¶£çš„æœåŠ¡'}
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                    >
                      {serviceOptions.map(({ value, labelEn, labelZh }) => (
                        <option key={value} value={value}>
                          {isEn ? labelEn : labelZh}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                  {isEn ? 'How can we support you?' : 'æˆ‘ä»¬å¯ä»¥å¦‚ä½•å¸®åŠ©æ‚¨ï¼Ÿ'}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[140px] rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                    placeholder={
                      isEn
                        ? 'Tell us about your goals, timeline, and any questions you may have.'
                        : 'æ¬¢è¿Žåˆ†äº«æ‚¨çš„ç›®æ ‡ã€æ—¶é—´è§„åˆ’åŠä»»ä½•ç–‘é—®ã€‚'
                    }
                  />
                </label>

                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                  {isEn ? 'Submit message' : 'å‘é€ä¿¡æ¯'}
                </Button>
              </form>
            </Card>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#c86b79]">
            {isEn ? 'Need guidance before you reach out?' : 'è”ç³»ä¹‹å‰æƒ³å…ˆäº†è§£æ›´å¤šï¼Ÿ'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Explore our Start Here resources or review the OvuMethod'
              : 'å…ˆæµè§ˆâ€œå¼€å§‹è¿™é‡Œâ€èµ„æºæˆ–äº†è§£ OvuMethod'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/start-here" className="inline-flex">
              <Button variant="primary" size="lg">
                {isEn ? 'View Start Here resources' : '查看 Start Here 资源'}
              </Button>
            </Link>
            <Link href="/the-ovumethod" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'Learn the OvuMethod' : 'äº†è§£ OvuMethod'}
              </Button>
            </Link>
            <Link href="/faq" className="inline-flex">
              <Button variant="ghost" size="lg">
                {isEn ? 'Read our FAQs' : 'é˜…è¯»å¸¸è§é—®é¢˜'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
