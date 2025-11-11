'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'

type FAQ = {
  questionEn: string
  questionZh: string
  answerEn: string
  answerZh: string
}

// 扁平化所有 FAQ 问题
const allFAQs: FAQ[] = [
  {
    questionEn: 'What makes IVY Fertility different from a referral agency?',
    questionZh: 'IVY 生育中心与转介机构有何不同？',
    answerEn:
      'We are a fully licensed, independent medical clinic. Board-certified physicians direct your care, all testing and procedures happen in our in-house labs—there are no handoffs. You work with the same trusted team from first consultation through pregnancy confirmation and beyond. This means continuity, accountability, and truly personalized support.',
    answerZh:
      '我们是一家独立的完整医疗机构。认证医师直接指导您的护理，所有检测和治疗都在院内完成——没有转介。您从初诊到验孕确认，以及之后，始终与同一个信任的团队合作。这意味着护理的连贯性、医生的责任心，以及真正个性化的支持。',
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
  {
    questionEn: 'How long does a typical IVF cycle take?',
    questionZh: '一次典型的 IVF 周期需要多长时间？',
    answerEn:
      'Most patients complete an IVF cycle in 10–14 weeks from your first consultation through embryo transfer. Here\'s the general timeline: weeks 1–2 for comprehensive assessment and testing, weeks 3–6 for body preparation and optimization, and weeks 7–14 for stimulation, retrieval, and transfer. Every timeline is personalized based on your body\'s response, so your care team will keep you informed every step.',
    answerZh:
      '从初诊到胚胎移植，大多数患者需要 10–14 周。时间表是：第 1-2 周进行全面评估与检测，第 3-6 周优化身体状态，第 7-14 周进行促排、取卵与移植。每个患者的时间表都是个性化的，取决于您身体的反应，我们的团队会在每一步保持沟通。',
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
      'During your stimulation phase (usually 10–14 days), you\'ll have 4–6 in-person check-ins. These visits let us track how your body is responding, adjust your medications if needed, and ensure everything is progressing perfectly. Between visits, our concierge team is available for questions via phone, video, or email. You\'re never without support.',
    answerZh:
      '在促排阶段（通常 10-14 天），您需要进行 4-6 次面诊检查。这些会议让我们追踪您身体的反应、必要时调整用药，确保一切顺利进行。两次就诊之间，我们的礼宾团队随时可通过电话、视频或邮件解答问题。您始终得到支持。',
  },
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
            ? 'Support for every step'
            : '为您的生育旅程答疑解惑'
        }
        subtitle={
          isEn
            ? "See the questions we're asked most often."
            : '浏览关于会诊、治疗与 IVY 生育中心支持服务的常见问题。'
        }
        primaryCtaText={isEn ? 'Schedule a consultation' : '预约会诊'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Contact us' : '联系我们'}
        secondaryCtaHref="#contact"
        stats={[
          { value: '40+', label: isEn ? 'FAQ' : '40+ 个常见问题' },
          { value: '24/7', label: isEn ? 'Communication' : '24/7 礼宾热线' },
          { value: '2', label: isEn ? 'BILINGUAL' : '双语服务' },
        ]}
        highlight={{
          title: isEn ? 'Need assistance?' : '需要个性化协助？',
          description: isEn
            ? 'Our team is available to guide you through anything not covered here.'
            : '礼宾团队可通过电话、邮件或聊天帮助您解决未在此处涵盖的问题。',
        }}
      />

      <section className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32 md:pb-48">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <div className="space-y-20 md:space-y-28">
            {/* 1. Call us */}
            <ScrollInView>
              <div className="relative grid items-end gap-8 md:grid-cols-[140px_1fr] md:gap-12">
                {/* Background Letter */}
                <div className="pointer-events-none absolute -left-8 -top-12 text-[180px] font-serif font-bold text-white/40 md:-left-4 md:-top-16 md:text-[220px]">
                  C
                </div>

                {/* Number + Icon */}
                <div className="relative z-10">
                  <div className="text-[72px] font-serif font-light leading-none text-[#a63655] md:text-[96px]">
                    1
                  </div>
                  <svg className="absolute -right-20 top-0 h-16 w-16 text-[#a63655] md:left-0 md:top-full md:ml-6 md:mt-4 md:h-20 md:w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[28px] font-serif text-[#a63655] md:text-[32px]">
                    {isEn ? 'Call us' : '电话联系我们'}
                  </h3>
                  <a
                    href="tel:+14155551234"
                    className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-[#a63655] transition hover:text-[#8a2c3e]"
                  >
                    +1 (415) 555-1234
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollInView>

            {/* 2. Email us - 向右缩进 */}
            <ScrollInView delay={0.1}>
              <div className="relative grid items-end gap-8 md:ml-56 md:grid-cols-[140px_1fr] md:gap-12">
                {/* Background Letter */}
                <div className="pointer-events-none absolute -left-8 -top-12 text-[180px] font-serif font-bold text-white/40 md:-left-4 md:-top-16 md:text-[220px]">
                  E
                </div>

                {/* Number + Icon */}
                <div className="relative z-10">
                  <div className="text-[72px] font-serif font-light leading-none text-[#a63655] md:text-[96px]">
                    2
                  </div>
                  <svg className="absolute -right-20 top-0 h-16 w-16 text-[#a63655] md:left-0 md:top-full md:ml-6 md:mt-4 md:h-20 md:w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[28px] font-serif text-[#a63655] md:text-[32px]">
                    {isEn ? 'Email us' : '邮件联系我们'}
                  </h3>
                  <a
                    href="mailto:info@ivyfertility.com"
                    className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-[#a63655] transition hover:text-[#8a2c3e]"
                  >
                    info@ivyfertility.com
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollInView>

            {/* 3. Visit us - 向右再缩进 */}
            <ScrollInView delay={0.2}>
              <div className="relative grid items-end gap-8 md:ml-[28rem] md:grid-cols-[140px_1fr] md:gap-12">
                {/* Background Letter */}
                <div className="pointer-events-none absolute -left-8 -top-12 text-[180px] font-serif font-bold text-white/40 md:-left-4 md:-top-16 md:text-[220px]">
                  V
                </div>

                {/* Number + Icon */}
                <div className="relative z-10">
                  <div className="text-[72px] font-serif font-light leading-none text-[#a63655] md:text-[96px]">
                    3
                  </div>
                  <svg className="absolute -right-20 top-0 h-16 w-16 text-[#a63655] md:left-0 md:top-full md:ml-6 md:mt-4 md:h-20 md:w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[28px] font-serif text-[#a63655] md:text-[32px]">
                    {isEn ? 'Visit us' : '访问我们'}
                  </h3>
                  <a
                    href="/start-here"
                    className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-[#a63655] transition hover:text-[#8a2c3e]"
                  >
                    {isEn ? 'Explore resources' : '浏览资源'}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* FAQ List Section - 单列全宽 */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mb-16 text-center">
              <h2 className="font-serif text-[48px] text-[#2f2b33]">
                {isEn ? 'Frequently Asked Questions.' : '常见问题'}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Everything you need to know about cleansing, delivery and more. Reach out to us'
                  : '关于咨询、治疗等您需要了解的一切。还有更多问题？请联系我们。'}
              </p>
            </div>
          </ScrollInView>

          <div className="space-y-0">
            {allFAQs.map((faq, index) => {
              const id = `faq-${index}`
              const isOpen = activeItem === id
              return (
                <ScrollInView key={id} delay={index * 0.05}>
                  <div className="border-b border-[#e5e5e5]">
                    <button
                      type="button"
                      onClick={() => toggleItem(id)}
                      className="flex w-full items-center justify-between gap-8 py-6 text-left transition hover:opacity-70"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#2f2b33]">
                        {isEn ? faq.questionEn : faq.questionZh}
                      </span>
                      <span className="flex-shrink-0 text-[24px] font-light text-[#2f2b33]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 pr-12 text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? faq.answerEn : faq.answerZh}
                      </div>
                    )}
                  </div>
                </ScrollInView>
              )
            })}
          </div>
        </div>
      </section>

      {/* Get in Touch Section - 图片拼贴 + CTA */}
      <section className="bg-[#fdf7f2] py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
            {/* 左侧：图片拼贴 - 3张图片叠加 */}
            <div className="relative aspect-square px-8 py-8">
              {/* 大图 - 底层 (pregnant2.jpg - 妈妈和孩子) */}
              <div className="absolute inset-8 z-0 overflow-hidden rounded-[20px] bg-[#e8d5d0]">
                <Image
                  src="/pregnant2.jpg"
                  alt="Mother and baby"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* 小图 1 - 左下角叠加（pregnant.jpg - 孕妇肖像）*/}
              <div className="absolute bottom-0 z-10 h-[60%] w-[42%] overflow-hidden rounded-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.15)]" style={{ left: '-21%' }}>
                <Image
                  src="/pregnant.jpg"
                  alt="Pregnant woman"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* 小图 2 - 右上角叠加（pregnant3.jpg - 剪影艺术照）*/}
              <div className="absolute top-0 z-10 h-[60%] w-[42%] overflow-hidden rounded-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.15)]" style={{ right: '-21%' }}>
                <Image
                  src="/pregnant3.jpg"
                  alt="Mother and child silhouette"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* 右侧：文字内容 */}
            <div className="flex flex-col justify-center pl-0 md:pl-14">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5a555d]">
                {isEn ? 'GOT MORE QUESTIONS?' : '还有更多问题？'}
              </p>
              <h2 className="mt-4 font-serif text-[48px] leading-tight text-[#2f2b33]">
                {isEn ? 'Get in Touch' : '联系我们'}
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Our customer service team is here to help find the right cleanses for you, and to support you throughout your cleansing journey. You can call, WhatsApp or email us.'
                  : '我们的客户服务团队随时为您提供帮助，为您找到合适的方案，并在整个过程中为您提供支持。您可以致电、使用 WhatsApp 或发送邮件给我们。'}
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    {isEn ? 'CONTACT US' : '联系我们'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
