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
    icon: '☎️',
    titleEn: 'Call or text us',
    titleZh: '电话 / 短信联系我们',
    descEn: 'Concierge available Monday–Friday, 8am – 7pm PT',
    descZh: '礼宾团队在太平洋时间周一至周五 8am – 7pm 为您服务',
    action: { label: '+1 (415) 555-1234', href: 'tel:+14155551234' },
  },
  {
    icon: '✉️',
    titleEn: 'Email concierge',
    titleZh: '邮件联系礼宾',
    descEn: 'Share medical records or detailed questions and receive a response within 24 hours',
    descZh: '发送资料或详细问题,我们将在 24 小时内回复',
    action: { label: 'info@ivyfertility.com', href: 'mailto:info@ivyfertility.com' },
  },
  {
    icon: '💬',
    titleEn: 'Schedule a virtual chat',
    titleZh: '预约线上咨询',
    descEn: 'Book a 20-minute Zoom session with a bilingual coordinator at a time that suits you',
    descZh: '预约 20 分钟的双语协调员 Zoom 咨询,选择最适合您的时间',
    action: { label: 'Book virtual chat', href: '/contact' },
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
              <span className="font-script text-3xl text-[#c86b79]">
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
          <span className="font-script text-3xl text-[#c86b79]">
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
