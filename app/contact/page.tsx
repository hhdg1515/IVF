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
    number: '1',
    letter: 'C',
    titleEn: 'Call or text us',
    titleZh: '电话 / 短信联系我们',
    descEn: 'Concierge available Monday–Friday, 8am – 7pm PT',
    descZh: '礼宾团队在太平洋时间周一至周五 8am – 7pm 为您服务',
    action: { label: '+1 (415) 555-1234', href: 'tel:+14155551234' },
    iconPath: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
  },
  {
    number: '2',
    letter: 'E',
    titleEn: 'Email concierge',
    titleZh: '邮件联系礼宾',
    descEn: 'Share medical records or detailed questions and receive a response within 24 hours',
    descZh: '发送资料或详细问题,我们将在 24 小时内回复',
    action: { label: 'info@ivyfertility.com', href: 'mailto:info@ivyfertility.com' },
    iconPath: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  },
  {
    number: '3',
    letter: 'Z',
    titleEn: 'Schedule a virtual chat',
    titleZh: '预约线上咨询',
    descEn: 'Book a 20-minute Zoom session with a bilingual coordinator at a time that suits you',
    descZh: '预约 20 分钟的双语协调员 Zoom 咨询,选择最适合您的时间',
    action: { label: 'Book virtual chat', href: '/contact' },
    iconPath: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  },
]

const visitDetails = [
  {
    titleEn: 'Clinic address',
    titleZh: '诊所地址',
    linesEn: ['123 Fertility Lane', 'San Francisco, CA 94102'],
    linesZh: ['123 Fertility Lane', '旧金山, CA 94102'],
  },
  {
    titleEn: 'On-site services',
    titleZh: '院内服务',
    linesEn: ['Embryology & andrology lab', 'Ultrasound & monitoring', 'Consult suites & recovery lounge'],
    linesZh: ['胚胎与男科实验室', '超声与监测中心', '会诊室与恢复休息区'],
  },
  {
    titleEn: 'Parking & travel',
    titleZh: '停车与交通',
    linesEn: ['Validated parking garage', '5 minutes from BART Civic Center', 'Concierge travel planning available'],
    linesZh: ['提供验证停车库', '距 BART Civic Center 5 分钟', '可预约礼宾行程规划'],
  },
]

const serviceOptions = [
  { value: 'general', labelEn: 'General inquiry', labelZh: '常规咨询' },
  { value: 'egg-freezing', labelEn: 'Egg freezing', labelZh: '冻卵' },
  { value: 'ivf', labelEn: 'IVF treatment', labelZh: '体外受精' },
  { value: 'donor', labelEn: 'Donor services', labelZh: '捐献服务' },
  { value: 'surrogacy', labelEn: 'Gestational surrogacy', labelZh: '代孕' },
  { value: 'second-opinion', labelEn: 'Second opinion', labelZh: '二次意见' },
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
      setError(isEn ? 'Please complete all required fields.' : '请填写所有必填字段。')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError(isEn ? 'Please enter a valid email address.' : '请输入有效的电子邮箱地址。')
      return
    }

    // Log user action without PII
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submitted:', {
        serviceType: formData.serviceType,
        timestamp: new Date().toISOString()
      })
    }
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
        eyebrow={isEn ? 'Contact concierge' : '联系礼宾团队'}
        backgroundImage="/images/love.jpg"
        title={
          isEn
            ? "We're ready to guide your fertility journey"
            : '我们随时为您的生育旅程提供指引'
        }
        subtitle={
          isEn
            ? 'Reach out to schedule your consultation, request records, or speak with our bilingual concierge team.'
            : '预约会诊、索取资料,或直接与我们的双语礼宾团队交流。'
        }
        primaryCtaText={isEn ? 'Schedule consultation' : '预约会诊'}
        primaryCtaHref="#contact-form"
        secondaryCtaText={isEn ? 'View patient guide' : '查看患者指南'}
        secondaryCtaHref="/faq#patient-guide"
        stats={[
          { value: '24h', label: isEn ? 'Average response time' : '平均回复时间' },
          { value: '7', label: isEn ? 'Concierge specialists' : '礼宾专员' },
          { value: '100%', label: isEn ? 'In-house services' : '院内服务' },
        ]}
        highlight={{
          title: isEn ? 'Bilingual support' : '双语支持',
          description: isEn
            ? 'Our Mandarin- and English-speaking coordinators ensure every conversation feels clear and supportive.'
            : '中英双语协调员确保沟通顺畅、全程贴心支持。',
        }}
      />

      <section className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32 md:pb-48">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <div className="space-y-20 md:space-y-28">
            {contactChannels.map(({ number, letter, titleEn, titleZh, descEn, descZh, action, iconPath }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <div className={`relative grid items-end gap-8 md:grid-cols-[140px_1fr] md:gap-12 ${idx === 1 ? 'md:ml-56' : ''} ${idx === 2 ? 'md:ml-[28rem]' : ''}`}>
                  {/* Background Letter */}
                  <div className="pointer-events-none absolute -left-8 -top-12 text-[180px] font-serif font-bold text-white/40 md:-left-4 md:-top-16 md:text-[220px]">
                    {letter}
                  </div>

                  {/* Number + Icon */}
                  <div className="relative z-10">
                    <div className="text-[72px] font-serif font-light leading-none text-[#a63655] md:text-[96px]">
                      {number}
                    </div>
                    <svg className="absolute -right-20 top-0 h-16 w-16 text-[#a63655] md:left-0 md:top-full md:ml-6 md:mt-4 md:h-20 md:w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-[28px] font-serif text-[#a63655] md:text-[32px]">
                      {isEn ? titleEn : titleZh}
                    </h3>
                    <a
                      href={action.href}
                      className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-[#a63655] transition hover:text-[#8a2c3e]"
                    >
                      {action.label}
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                    {(isEn ? descEn : descZh) && (
                      <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? descEn : descZh}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:px-0">
          <ScrollInView>
            <Card className="h-full px-8 py-10">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Visit our San Francisco clinic' : '欢迎来到旧金山诊所'}
              </span>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'All diagnostics, procedures, and integrative therapies are performed under one roof. You can relax in spa-inspired recovery lounges and meet every specialist in person during your visit.'
                  : '所有诊断、治疗与整合护理均在同一地点完成。您可在 SPA 风格的休息区放松,并与各领域专家面对面交流。'}
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
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Send us a message' : '发送信息给我们'}
              </span>
              <h2 className="mt-4 text-[40px] leading-tight text-[#2f2b33]">
                {isEn
                  ? 'Our concierge will respond within one business day'
                  : '礼宾团队将在一个工作日内回复'}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Share your story, treatment interests, and preferred consultation window. We respect your privacy and keep all information confidential.'
                  : '欢迎分享您的故事、感兴趣的治疗与偏好时间。我们尊重您的隐私,并对信息严格保密。'}
              </p>
              <div className="mt-6 space-y-3 text-[15px] text-[#5a555d]">
                <p>
                  {isEn
                    ? 'Already a patient? Message your coordinator through the patient portal for the fastest response.'
                    : '已是患者?通过患者门户联系协调员可获得最快回复。'}
                </p>
                <Link href="/login" className="inline-flex">
                  <Button variant="ghost" size="md">
                    {isEn ? 'Go to patient portal' : '前往患者门户'}
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
                      : '感谢您的联系!我们已收到信息,将尽快回复您。'}
                  </div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                    {isEn ? 'Full name' : '姓名'}
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                      placeholder={isEn ? 'Your name' : '您的姓名'}
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-[#2f2b33]">
                    {isEn ? 'Email address' : '电子邮箱'}
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
                    {isEn ? 'Phone number' : '电话号码'}
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
                    {isEn ? 'Service of interest' : '感兴趣的服务'}
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
                  {isEn ? 'How can we support you?' : '我们可以如何帮助您?'}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[140px] rounded-[12px] border border-[#ead9ca] bg-white px-4 py-3 text-[15px] text-[#2f2b33] transition focus:border-[#a63655] focus:outline-none focus:ring-2 focus:ring-[#f2b1c5]"
                    placeholder={
                      isEn
                        ? 'Tell us about your goals, timeline, and any questions you may have.'
                        : '欢迎分享您的目标、时间规划及任何疑问。'
                    }
                  />
                </label>

                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                  {isEn ? 'Submit message' : '发送信息'}
                </Button>
              </form>
            </Card>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Need guidance before you reach out?' : '联系之前想先了解更多?'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Explore our Start Here resources or review the OvuMethod'
              : '先浏览"开始这里"资源或了解 OvuMethod'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/start-here" className="inline-flex">
              <Button variant="primary" size="lg">
                {isEn ? 'View Start Here resources' : '查看 Start Here 资源'}
              </Button>
            </Link>
            <Link href="/the-ovumethod" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'Learn the OvuMethod' : '了解 OvuMethod'}
              </Button>
            </Link>
            <Link href="/faq" className="inline-flex">
              <Button variant="ghost" size="lg">
                {isEn ? 'Read our FAQs' : '阅读常见问题'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
