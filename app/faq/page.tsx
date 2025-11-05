'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'

type FAQ = {
  questionEn: string
  questionZh: string
  answerEn: string
  answerZh: string
}

type FAQCategory = {
  categoryEn: string
  categoryZh: string
  faqs: FAQ[]
}

const faqCategories: FAQCategory[] = [
  {
    categoryEn: 'General information',
    categoryZh: '基本信息',
    faqs: [
      {
        questionEn: 'What makes IVY Fertility different from a referral agency?',
        questionZh: 'IVY 生育中心与转介机构有何不同？',
        answerEn:
          'IVY is a fully licensed medical clinic with board-certified physicians, in-house embryology and andrology labs, and bilingual integrative specialists. Your care never leaves our team.',
        answerZh:
          'IVY 是拥有认证医师、院内胚胎与男科实验室以及双语整合专家的完整医疗机构，您的护理始终由我们的团队负责。',
      },
      {
        questionEn: 'Do you work with out-of-town or international patients?',
        questionZh: '是否接待外地或国际患者？',
        answerEn:
          'Yes. Our concierge coordinates travel, virtual check-ins, and remote monitoring so every part of your journey feels seamless.',
        answerZh:
          '当然。礼宾团队会协助安排行程、远程会诊与监测，让您的旅程顺畅无忧。',
      },
      {
        questionEn: 'Can I bring a support person or translator to appointments?',
        questionZh: '可以带陪同或翻译参加会诊吗？',
        answerEn:
          'Absolutely—partners, family members, and trusted friends are welcome. Our team also provides bilingual support in Mandarin and English.',
        answerZh:
          '当然可以——欢迎伴侣、家人或朋友陪同。我们的团队亦提供中英双语支持。',
      },
    ],
  },
  {
    categoryEn: 'Treatment process & timeline',
    categoryZh: '治疗流程与时间',
    faqs: [
      {
        questionEn: 'How long does a typical IVF cycle take?',
        questionZh: '一次典型的 IVF 周期需要多长时间？',
        answerEn:
          'From consultation to embryo transfer, most patients complete a cycle in 10–14 weeks. This includes diagnostic preparation, stimulation, retrieval, fertilization, and transfer.',
        answerZh:
          '从初诊到胚胎移植，通常需要 10–14 周，期间涵盖评估准备、促排、取卵、受精和移植。',
      },
      {
        questionEn: 'What happens during the initial consultation?',
        questionZh: '初诊时会经历哪些环节？',
        answerEn:
          'You will meet your physician, integrative specialist, and concierge. Together we review your history, interpret labs, and craft your personalized OvuMethod roadmap.',
        answerZh:
          '您将与医生、整合专家及礼宾团队会面，共同回顾病史、解读化验，并制定专属 OvuMethod 路线图。',
      },
      {
        questionEn: 'How often are monitoring visits required?',
        questionZh: '监测需要多频繁进行？',
        answerEn:
          'During stimulation you can expect 4–6 monitoring appointments over two weeks. Coordinators provide a detailed calendar and remote support between visits.',
        answerZh:
          '促排期间通常在两周内安排 4–6 次监测，协调团队会提供详细日程并在就诊间隙提供远程支持。',
      },
    ],
  },
  {
    categoryEn: 'Financial & logistics',
    categoryZh: '费用与后勤',
    faqs: [
      {
        questionEn: 'Do you offer transparent pricing?',
        questionZh: '费用是否透明？',
        answerEn:
          'Yes. You receive written estimates, financing options, and guidance on maximizing insurance benefits before treatment begins.',
        answerZh:
          '是的。治疗前会提供书面报价、金融方案以及保险利用建议，确保透明规划。',
      },
      {
        questionEn: 'What financing support is available?',
        questionZh: '有哪些金融支持？',
        answerEn:
          'We partner with leading fertility financing programs and offer bundled plans to help manage costs.',
        answerZh:
          '我们与主要的生育金融机构合作，并提供组合方案，帮助您灵活规划费用。',
      },
      {
        questionEn: 'Can you help with travel arrangements?',
        questionZh: '是否协助安排行程？',
        answerEn:
          'Our concierge reserves hotels, transportation, and interpreters, making your stay in San Francisco comfortable and efficient.',
        answerZh:
          '礼宾团队可协助预订酒店、交通及翻译，让您在旧金山的停留舒心便捷。',
      },
    ],
  },
]

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
    descEn: 'Share records or detailed questions and receive a response within 24 hours',
    descZh: '发送资料或详细问题，我们将在 24 小时内回复',
    action: { label: 'info@ivyfertility.com', href: 'mailto:info@ivyfertility.com' },
  },
  {
    icon: '💬',
    titleEn: 'Visit our resource center',
    titleZh: '访问资源中心',
    descEn: 'Browse guides, watch past workshops, and explore articles from our physicians.',
    descZh: '浏览指南、观看往期课程，并阅读医生撰写的文章。',
    action: { label: 'Explore resources', href: '/start-here' },
  },
]

export default function FAQPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setActiveItem((prev) => (prev === id ? null : id))
  }

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Frequently asked questions' : '常见问题'}
        backgroundImage="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2000&q=80"
        title={
          isEn
            ? 'Answers for every step of your fertility journey'
            : '为您的生育旅程答疑解惑'
        }
        subtitle={
          isEn
            ? 'Browse the questions we hear most about consultations, treatment, and support at IVY Fertility.'
            : '浏览关于会诊、治疗与 IVY 生育中心支持服务的常见问题。'
        }
        primaryCtaText={isEn ? 'Schedule a consultation' : '预约会诊'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'View patient guide' : '查看患者指南'}
        secondaryCtaHref="#patient-guide"
        stats={[
          { value: '40+', label: isEn ? 'Common questions answered' : '40+ 个常见问题' },
          { value: '24/7', label: isEn ? 'Concierge hotline' : '24/7 礼宾热线' },
          { value: '2', label: isEn ? 'Bilingual languages' : '双语服务' },
        ]}
        highlight={{
          title: isEn ? 'Need personal assistance?' : '需要个性化协助？',
          description: isEn
            ? 'Our concierge team is available by phone, email, or chat to guide you through anything not covered here.'
            : '礼宾团队可通过电话、邮件或聊天帮助您解决未在此处涵盖的问题。',
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
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Browse by topic' : '按主题浏览'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Find answers quickly by exploring categories'
                  : '按类别快速找到答案'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {faqCategories.map(({ categoryEn, categoryZh, faqs }, categoryIdx) => (
              <ScrollInView key={categoryEn} delay={categoryIdx * 0.1}>
                <Card className="h-full px-8 py-10">
                  <h3 className="text-2xl text-[#2f2b33]">
                    {isEn ? categoryEn : categoryZh}
                  </h3>
                  <div className="mt-6 space-y-4">
                    {faqs.map(({ questionEn, questionZh, answerEn, answerZh }, questionIdx) => {
                      const id = `${categoryIdx}-${questionIdx}`
                      const isOpen = activeItem === id
                      return (
                        <div key={id} className="rounded-[16px] border border-[#ead9ca] bg-white/80">
                          <button
                            type="button"
                            onClick={() => toggleItem(id)}
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                            aria-expanded={isOpen}
                          >
                            <span className="text-[15px] font-semibold text-[#2f2b33]">
                              {isEn ? questionEn : questionZh}
                            </span>
                            <span className="text-[#a63655]">{isOpen ? '−' : '+'}</span>
                          </button>
                          {isOpen && (
                            <div className="border-t border-[#ead9ca] bg-[#fff9f3] px-5 py-4 text-[15px] leading-relaxed text-[#5a555d]">
                              {isEn ? answerEn : answerZh}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section id="patient-guide" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Patient guide highlights' : '患者指南重点'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Review the essentials before your appointment'
                  : '会诊前先了解重要内容'}
              </h2>
            </div>
          </ScrollInView>

          <ScrollInView delay={0.1}>
            <Card className="px-8 py-10">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl text-[#2f2b33]">
                    {isEn ? 'Inside the patient guide' : '指南内容简介'}
                  </h3>
                  <ul className="space-y-3 text-[15px] text-[#5a555d]">
                    {(isEn
                      ? [
                          'Step-by-step walkthrough of the OvuMethod and what to expect at each phase',
                          'Key questions to ask your physician with space to capture notes',
                          'Resource links for insurance planning, travel, and emotional support',
                        ]
                      : [
                          '详解 OvuMethod 各阶段及其对应体验',
                          '列出向医生提问的重点并提供记录空间',
                          '保险规划、行程安排与情绪支持的资源链接',
                        ]).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[20px] bg-[#f7eee7] px-6 py-6 shadow-inner">
                  <h3 className="text-xl text-[#2f2b33]">
                    {isEn ? 'How to use it' : '如何使用指南'}
                  </h3>
                  <ol className="mt-4 space-y-3 text-[15px] text-[#5a555d]">
                    {(isEn
                      ? [
                          'Print or save the guide on your device before your consultation.',
                          'Bring it to each appointment so your coordinator can help complete it with you.',
                          'Review the next-step checklist after every visit to stay on track.',
                        ]
                      : [
                          '会诊前打印或保存至设备中。',
                          '每次就诊时携带，方便协调员与您一同填写。',
                          '每次就诊后查看下一步清单，保持节奏。',
                        ]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 h-6 w-6 flex-shrink-0 rounded-full bg-[#a63655] text-center text-sm font-semibold text-white">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Card>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#2a1a22] py-24 text-[#f4e7df]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#f6c7bd]">
            {isEn ? 'Still have questions?' : '还有疑问？'}
          </span>
          <h2 className="text-[40px] leading-tight">
            {isEn
              ? 'Let’s talk through your unique situation together'
              : '让我们一起讨论您的独特情况'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#f4e7df]/80">
            {isEn
              ? 'Whether you are preparing for your first consultation, comparing treatment options, or returning for another cycle, our bilingual concierge team is ready to help.'
              : '无论您正准备首次会诊、比较治疗方案，还是计划进行下一周期，我们的双语礼宾团队都随时为您提供帮助。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button variant="primary" size="lg">
                {isEn ? 'Contact concierge' : '联系礼宾团队'}
              </Button>
            </Link>
            <Link href="/services" className="inline-flex">
              <Button variant="outline-light" size="lg">
                {isEn ? 'Explore services' : '浏览服务'}
              </Button>
            </Link>
            <Link href="/the-ovumethod" className="inline-flex">
              <Button variant="ghost" size="lg">
                {isEn ? 'Learn about the OvuMethod' : '了解 OvuMethod'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
