'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function PatientResourcesPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const resources = [
    {
      icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      titleEn: 'Frequently Asked Questions',
      titleZh: '常见问题',
      descEn: 'Find answers to common questions about consultations, treatment timelines, costs, and logistics.',
      descZh: '查找有关咨询、治疗时间表、费用和物流的常见问题的答案。',
      href: '/faq',
      ctaEn: 'View FAQ',
      ctaZh: '查看常见问题',
    },
    {
      icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      titleEn: 'Legal Documents & Patient Rights',
      titleZh: '法律文件与患者权利',
      descEn: 'Review your rights, required legal documents, and consent forms for fertility treatment.',
      descZh: '查看您的权利、生育治疗所需的法律文件和同意书。',
      href: '/legal-documents',
      ctaEn: 'View Legal Info',
      ctaZh: '查看法律信息',
    },
    {
      icon: 'M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z',
      titleEn: 'Financial Planning Guide',
      titleZh: '财务规划指南',
      descEn: 'Understand treatment costs, payment options, financing plans, and insurance coverage.',
      descZh: '了解治疗费用、支付选项、融资计划和保险覆盖范围。',
      href: '/pricing',
      ctaEn: 'View Pricing',
      ctaZh: '查看价格',
    },
  ]

  const guides = [
    {
      titleEn: 'Fertility Optimization Guide',
      titleZh: '生育优化指南',
      descEn: 'A comprehensive 28-page guide on nutrition, lifestyle, and preparation strategies.',
      descZh: '一份28页的综合指南，涵盖营养、生活方式和准备策略。',
    },
    {
      titleEn: 'OvuMethod Compatibility Guide',
      titleZh: 'OvuMethod 兼容性指南',
      descEn: 'Understand your fertility phase and discover how OvuMethod supports your specific needs.',
      descZh: '了解您的生育阶段，发现OvuMethod如何满足您的特定需求。',
    },
    {
      titleEn: 'Virtual Workshop Library',
      titleZh: '虚拟讲座库',
      descEn: 'Access physician-led workshops on egg health, male fertility, and donor coordination.',
      descZh: '访问关于卵子健康、男性生育力和捐献者协调的医生讲座。',
    },
  ]

  const faqs = [
    {
      questionEn: 'Who should I contact if I have legal questions?',
      questionZh: '如果我有法律问题，应该联系谁？',
      answerEn:
        'We provide in-house legal consultation and can also refer you to independent legal counsel. Our team will guide you through all required forms and documents.',
      answerZh:
        '我们提供院内法律咨询，也可以推荐您联系独立法律顾问。我们的团队将指导您完成所有必需的表格和文件。',
    },
    {
      questionEn: 'What should I bring to my first consultation?',
      questionZh: '我应该为初次咨询准备什么？',
      answerEn:
        'Please bring any previous fertility workup, imaging results, medication lists, and a list of questions. Our concierge team can help you gather records if needed.',
      answerZh:
        '请携带任何以前的生育检查、影像学结果、用药清单和问题列表。如需要，我们的礼宾团队可以帮助您收集记录。',
    },
    {
      questionEn: 'How does billing work for international patients?',
      questionZh: '国际患者的账单如何处理？',
      answerEn:
        'We accept various payment methods and offer financing options. Our billing team can discuss arrangements suitable for international patients.',
      answerZh:
        '我们接受多种支付方式并提供融资选项。我们的账单团队可以讨论适合国际患者的安排。',
    },
  ]

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Patient Resources' : '患者资源'}
        backgroundImage="/images/about.jpg"
        title={
          isEn
            ? 'Everything you need to know for your fertility journey'
            : '生育旅程中您需要了解的一切'
        }
        subtitle={
          isEn
            ? 'Access guides, legal documents, FAQs, and support resources to help you make informed decisions.'
            : '访问指南、法律文件、常见问题和支持资源，帮助您做出明智决定。'
        }
        primaryCtaText={isEn ? 'Book a consultation' : '预约咨询'}
        primaryCtaHref="/contact"
        priority
      />

      {/* Main Resources */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-20">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Essential Information' : '必要信息'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Key resources for your decision-making'
                  : '用于决策的关键资源'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-3">
            {resources.map((resource, idx) => (
              <ScrollInView key={resource.href} delay={idx * 0.1}>
                <Card className="h-full flex flex-col px-8 py-10">
                  <div className="mb-6">
                    <svg
                      className="h-12 w-12 text-[#a63655]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={resource.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-[#2f2b33] mb-3">
                    {isEn ? resource.titleEn : resource.titleZh}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5a555d] flex-grow">
                    {isEn ? resource.descEn : resource.descZh}
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#e2d0c1]">
                    <Link href={resource.href}>
                      <Button variant="outline" size="sm" className="w-full">
                        {isEn ? resource.ctaEn : resource.ctaZh}
                      </Button>
                    </Link>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-20">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Downloadable Resources' : '可下载资源'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Guides and materials to support your preparation'
                  : '支持您准备的指南和材料'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-3">
            {guides.map((guide, idx) => (
              <ScrollInView key={guide.titleEn} delay={idx * 0.1}>
                <Card className="h-full flex flex-col px-8 py-10 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <svg className="h-8 w-8 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.148.413-.24.612a.75.75 0 001.415.584m-5.801 0H5.25A2.25 2.25 0 013 9.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V9.25A2.25 2.25 0 0018.75 7.5" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-[#2f2b33] mb-3">
                    {isEn ? guide.titleEn : guide.titleZh}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[#5a555d] flex-grow">
                    {isEn ? guide.descEn : guide.descZh}
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#e2d0c1]">
                    <Button variant="primary" size="sm" className="w-full">
                      {isEn ? 'Download' : '下载'}
                    </Button>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Quick Answers' : '快速回答'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Common questions about resources' : '关于资源的常见问题'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <ScrollInView key={faq.questionEn} delay={idx * 0.1}>
                <Card className="px-8 py-8">
                  <h3 className="text-lg font-semibold text-[#2f2b33] mb-4">
                    {isEn ? faq.questionEn : faq.questionZh}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5a555d]">
                    {isEn ? faq.answerEn : faq.answerZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-[#f7ebe5] py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Still have questions?' : '仍有疑问？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Our team is here to help'
              : '我们的团队随时准备帮助您'}
          </h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Connect with our bilingual team to discuss your specific situation and get personalized guidance.'
              : '与我们的双语团队联系，讨论您的具体情况并获得个性化指导。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Schedule consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/faq" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'Browse all FAQs' : '浏览所有常见问题'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
