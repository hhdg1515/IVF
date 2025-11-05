'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  message: string
}

export default function ContactPage() {
  const { currentLanguage } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const serviceOptions = [
    { value: 'general', labelEn: 'General Inquiry', labelZh: '常规询问' },
    { value: 'egg-freezing', labelEn: 'Egg Freezing', labelZh: '冻卵' },
    { value: 'ivf', labelEn: 'IVF Treatment', labelZh: '体外受精' },
    { value: 'donor', labelEn: 'Donor Services', labelZh: '捐献服务' },
    { value: 'surrogacy', labelEn: 'Surrogacy', labelZh: '代孕' },
    { value: 'consultation', labelEn: 'Free Consultation', labelZh: '免费咨询' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError(currentLanguage === 'en' ? 'Please fill in all required fields' : '请填写所有必填字段')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError(currentLanguage === 'en' ? 'Please enter a valid email address' : '请输入有效的电子邮件地址')
      return
    }

    // Here you would normally send the form data to a backend
    // For now, just show success message
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'general',
        message: ''
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? 'Contact Us' : '联系我们'}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {currentLanguage === 'en'
              ? 'Have questions? Our team is ready to help you start your fertility journey.'
              : '有问题？我们的团队已准备好帮助您开始生育之旅。'}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {currentLanguage === 'en' ? 'Address' : '地址'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                IVY Fertility Center
                <br />
                123 Fertility Lane
                <br />
                San Francisco, CA 94102
                <br />
                {currentLanguage === 'en' ? 'United States' : '美国'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {currentLanguage === 'en' ? 'Phone & Email' : '电话和邮箱'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                <a href="tel:+14155551234" className="hover:text-[#e33479] transition">
                  +1 (415) 555-1234
                </a>
                <br />
                <a href="mailto:info@ivyfertility.com" className="hover:text-[#e33479] transition">
                  info@ivyfertility.com
                </a>
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {currentLanguage === 'en' ? 'Hours' : '营业时间'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {currentLanguage === 'en' ? (
                  <>
                    Monday - Friday: 9am - 5pm
                    <br />
                    Saturday: 10am - 2pm
                    <br />
                    Sunday: Closed
                  </>
                ) : (
                  <>
                    周一至周五: 9am - 5pm
                    <br />
                    周六: 10am - 2pm
                    <br />
                    周日: 休息
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-12 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {currentLanguage === 'en' ? 'Send us a Message' : '给我们发送信息'}
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-green-700 font-semibold">
                  {currentLanguage === 'en'
                    ? '✓ Thank you! We will contact you soon.'
                    : '✓ 感谢您！我们很快会与您联系。'}
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'Full Name *' : '全名 *'}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e33479] focus:border-transparent"
                  placeholder={currentLanguage === 'en' ? 'Your name' : '您的名字'}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {currentLanguage === 'en' ? 'Email *' : '邮箱 *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e33479] focus:border-transparent"
                    placeholder={currentLanguage === 'en' ? 'your@email.com' : '您的邮箱'}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    {currentLanguage === 'en' ? 'Phone *' : '电话 *'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e33479] focus:border-transparent"
                    placeholder={currentLanguage === 'en' ? '(555) 123-4567' : '(555) 123-4567'}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'Service of Interest' : '感兴趣的服务'}
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e33479] focus:border-transparent"
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {currentLanguage === 'en' ? option.labelEn : option.labelZh}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'Message' : '留言'}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e33479] focus:border-transparent resize-none"
                  placeholder={
                    currentLanguage === 'en'
                      ? 'Tell us about your situation...'
                      : '告诉我们您的情况...'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#e33479] text-white font-semibold rounded-lg hover:bg-[#d01e6d] transition duration-300"
              >
                {currentLanguage === 'en' ? 'Send Message' : '发送信息'}
              </button>

              <p className="text-center text-slate-600 text-sm">
                {currentLanguage === 'en'
                  ? 'We typically respond within 24 hours.'
                  : '我们通常在24小时内回复。'}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#e33479] to-[#d01e6d] text-white py-16 mt-20">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {currentLanguage === 'en' ? 'Prefer to Call?' : '想要直接致电？'}
          </h2>
          <p className="text-white/90 mb-8">
            {currentLanguage === 'en'
              ? 'Our friendly staff is ready to answer your questions and schedule your consultation.'
              : '我们友好的工作人员已准备好回答您的问题并安排咨询。'}
          </p>
          <a
            href="tel:+14155551234"
            className="inline-block px-8 py-3 bg-white text-[#e33479] font-semibold rounded-lg hover:bg-slate-100 transition duration-300"
          >
            +1 (415) 555-1234
          </a>
        </div>
      </section>
    </main>
  )
}
