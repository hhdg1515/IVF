'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollInView } from '@/components/ui/ScrollInView'
import Link from 'next/link'

type TimelineItem = {
  year: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

type ValueItem = {
  eyebrowEn: string
  eyebrowZh: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const timeline: TimelineItem[] = [
  {
    year: '2010',
    titleEn: 'Where the story began',
    titleZh: '故事的起点',
    descEn:
      'Dr. Sarah Chen and Dr. Michael Rodriguez founded IVY Fertility to deliver bilingual, evidence-based fertility medicine for the Bay Area community.',
    descZh:
      '陈莎拉医生与迈克尔·罗德里格斯医生创立 IVY Fertility，为湾区社群提供双语、循证的生育医疗服务。',
  },
  {
    year: '2015',
    titleEn: 'Expanding to integrative care',
    titleZh: '扩展整合护理',
    descEn:
      'We introduced the OvuMethod™ and welcomed licensed nutritionists, counselors, and TCM practitioners to support every aspect of fertility.',
    descZh:
      '我们推出 OvuMethod™ 并引入营养师、心理咨询师与中医科医师，为生育旅程的每一面提供支持。',
  },
  {
    year: '2019',
    titleEn: 'In-house embryology lab opens',
    titleZh: '自有胚胎实验室启用',
    descEn:
      'A state-of-the-art embryology and andrology lab came online, allowing us to manage every specimen with the highest standards onsite.',
    descZh:
      '最先进的胚胎学与男科实验室投入使用，让我们得以在院内以最高标准管理所有标本。',
  },
  {
    year: '2024',
    titleEn: 'Serving families worldwide',
    titleZh: '服务全球家庭',
    descEn:
      'Today, IVY Fertility supports families across North America and Asia with virtual consults, concierge travel planning, and continuous care.',
    descZh:
      '如今，IVY Fertility 通过远程会诊、礼宾式行程规划与持续护理，为北美与亚洲的家庭提供支持。',
  },
]

const values: ValueItem[] = [
  {
    numberEn: '1',
    numberZh: '01',
    letter: 'C',
    titleEn: 'Clinically precise, deeply personal',
    titleZh: '科学精准，更显贴心',
    descEn:
      'Board-certified reproductive endocrinologists create protocols informed by the latest research and tailored to your unique biomarkers.',
    descZh:
      '经认证的生殖内分泌专家结合最新研究成果，并根据您的生理指标量身定制治疗方案。',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    numberEn: '2',
    numberZh: '02',
    letter: 'W',
    titleEn: 'Whole-person collaboration',
    titleZh: '全人协作团队',
    descEn:
      'Licensed counselors, nutritionists, and care coordinators meet with you weekly, ensuring mind, body, and emotions progress together.',
    descZh:
      '执照心理咨询师、营养师与护理协调员每周与您会面，确保身心与情绪同步前进。',
    iconPath: 'M18 18.72v-8.505a5.973 5.973 0 00-.882-2.882m0 0a5.973 5.973 0 00-5.882-2.9m0 0A5.023 5.023 0 007.1 6.278m0 0a5.973 5.973 0 00-5.882 2.9m0 0a3 3 0 015.88.803 5.973 5.973 0 006 2.282m0 0a3 3 0 015.88-.803',
  },
  {
    numberEn: '3',
    numberZh: '03',
    letter: 'B',
    titleEn: 'Belonging, in every language',
    titleZh: '多语沟通，贴近文化',
    descEn:
      'Our Mandarin- and English-speaking clinicians advocate for you, translate complex terminology, and honour your cultural rituals.',
    descZh:
      '我们的中英文双语医生为您发声，解释医学术语，同时尊重并融入您的文化仪式。',
    iconPath: 'M6 12a6 6 0 1112 0A6 6 0 016 12z',
  },
]

export default function AboutPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Meet the team' : '与 IVY 背后的医生团队相遇'}
        backgroundImage="/images/about.jpg"
        title={
          isEn
            ? 'Board-certified fertility specialists delivering integrative, evidence-based care'
            : '经认证的生育专家，提供整合且双语的护理'
        }
        subtitle={
          isEn
            ? 'IVY Fertility unites advanced reproductive medicine with compassionate, culturally fluent care.'
            : '创始医生将先进的生殖医学与细致体贴、跨文化的支持结合，创建了 IVY Fertility。'
        }
        primaryCtaText={isEn ? 'Book a consultation' : '预约咨询'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Explore our services' : '浏览服务'}
        secondaryCtaHref="/services"
        stats={[
          { value: '30+', label: isEn ? 'EXPERIENCE' : '30+ 年综合经验' },
          { value: '4', label: isEn ? 'Physicians' : '4 位认证医师' },
          { value: '98%', label: isEn ? 'Satisfaction' : '98% 患者满意度' },
        ]}
        highlight={{
          title: isEn ? "Founders' promise" : '创始团队承诺',
          description: isEn
            ? 'Every family deserves excellent care and clear guidance.'
            : '每个家庭都应得到卓越医疗、透明指导与始终如一的鼓励。',
        }}
        priority
      />

      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:gap-16 lg:px-0">
          <ScrollInView className="flex-shrink-0 md:w-2/5">
            <div className="overflow-hidden rounded-[28px] border-8 border-white shadow-[0_24px_60px_rgba(45,28,36,0.12)]">
              <img
                src="/images/discussion.jpg"
                alt={isEn ? 'IVY founders collaborating' : 'IVY 创始团队讨论'}
                className="h-full w-full object-cover"
              />
            </div>
          </ScrollInView>

          <ScrollInView className="flex-1 md:flex-shrink-1">
            <span className="font-serif italic text-3xl text-[#c86b79]">
              {isEn ? 'From our medical directors' : '来自医疗主任的寄语'}
            </span>
            <h2 className="mt-4 text-[20px] leading-tight text-[#2f2b33] md:text-[24px] whitespace-nowrap">
              {isEn
                ? "We built the clinic we wish we'd had"
                : '我们打造了自己曾渴望拥有的生育诊所'}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#5a555d]">
              {isEn
                ? "We've seen how hard it is for families to navigate jargon, coordinate specialists, and find emotional support. IVY Fertility brings everything together—labs, procedures, nutrition, counseling, and bilingual advocates—under one welcoming roof, pairing precise medicine with unhurried conversations so you feel informed and genuinely supported."
                : '作为生殖内分泌医师，我们见证了家庭在翻译专业术语、协调各类专家、寻找情绪支持时的艰难。IVY Fertility 将实验室、手术、营养、心理与双语陪伴整合于温暖的空间。我们承诺在精准治疗的同时保持耐心沟通，让您清楚了解每个选择，并真正感到被支持。'}
            </p>
            <div className="mt-8">
              <p className="font-serif italic text-2xl text-[#c86b79]">Dr. Sarah Chen &amp; Dr. Michael Rodriguez</p>
              <p className="text-sm uppercase tracking-[0.28em] text-[#8b858d]">
                {isEn ? 'Co-Founders & Medical Directors' : '联合创始人 · 医疗主任'}
              </p>
            </div>
          </ScrollInView>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32 md:pb-48">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-20">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Our philosophy' : '我们的理念'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Fertility care that honours your culture and vision'
                  : '尊重您文化与家庭愿景的整合生育医学'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-20 md:space-y-28">
            {values.map(({ numberEn, numberZh, letter, titleEn, titleZh, descEn, descZh, iconPath }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <div className={`relative grid items-end gap-8 md:grid-cols-[140px_1fr] md:gap-12 ${idx === 1 ? 'md:ml-56' : ''} ${idx === 2 ? 'md:ml-[28rem]' : ''}`}>
                  {/* Background Letter */}
                  <div className="pointer-events-none absolute -left-8 -top-12 text-[180px] font-serif font-bold text-white/40 md:-left-4 md:-top-16 md:text-[220px]">
                    {letter}
                  </div>

                  {/* Number + Icon */}
                  <div className="relative z-10">
                    <div className="text-[72px] font-serif font-light leading-none text-[#a63655] md:text-[96px]">
                      {isEn ? numberEn : numberZh}
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
                    <p className="mt-6 text-[15px] leading-relaxed text-[#5a555d]">
                      {isEn ? descEn : descZh}
                    </p>
                  </div>
                </div>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Milestones' : '里程碑'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'How IVY Fertility has grown alongside our patients'
                  : 'IVY Fertility 随患者一同成长的足迹'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-14 space-y-10 border-l border-[#e2d0c1] pl-10 md:pl-14">
            {timeline.map(({ year, titleEn, titleZh, descEn, descZh }) => (
              <ScrollInView key={year} className="relative pl-6">
                <span className="absolute -left-[44px] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#a63655] bg-[#fdf7f2] text-sm font-semibold text-[#a63655]">
                  {year}
                </span>
                <h3 className="text-2xl text-[#2f2b33]">
                  {isEn ? titleEn : titleZh}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Your care team' : '您的护理团队'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Physician-led, specialist-supported care'
                  : '医生领航，专家团队全程陪伴'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <ScrollInView>
              <Card className="h-full px-9 py-10">
                <span className="font-serif italic text-2xl text-[#c86b79]">
                  {isEn ? 'Medical leadership' : '医疗领导'}
                </span>
                <h3 className="mt-3 text-2xl text-[#2f2b33]">
                  {isEn
                    ? 'Reproductive endocrinology, embryology, and surgical excellence'
                    : '生殖内分泌、胚胎学与手术的专业卓越'}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn
                    ? 'Our physicians oversee every protocol, perform all retrievals and transfers, and collaborate closely with our in-house embryology team.'
                    : '我们的医师负责所有方案，亲自执行取卵与移植，并与院内胚胎团队紧密合作。'}
                </p>
                <ul className="mt-6 space-y-2 text-[15px] text-[#5a555d]">
                  <li>• {isEn ? 'Advanced ultrasound & monitoring suite' : '高级超声与监测中心'}</li>
                  <li>• {isEn ? 'IUI, IVF, ICSI, PGT-A/PGT-M expertise' : 'IUI、IVF、ICSI、PGT-A/PGT-M 专业'}</li>
                  <li>• {isEn ? 'Minimally invasive reproductive surgery' : '微创生殖外科'}</li>
                </ul>
              </Card>
            </ScrollInView>

            <ScrollInView delay={0.1}>
              <Card className="h-full px-9 py-10">
                <span className="font-serif italic text-2xl text-[#c86b79]">
                  {isEn ? 'Integrative support' : '整合支持'}
                </span>
                <h3 className="mt-3 text-2xl text-[#2f2b33]">
                  {isEn
                    ? 'Nutrition, mental health, and concierge coordination'
                    : '营养、心理与礼宾协调'}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn
                    ? 'Weekly integrative sessions ensure you have nourishing recipes, stress relief practices, and logistical guidance for medications and travel.'
                    : '每周整合护理会议，提供营养食谱、情绪纾解与用药及行程的安排协助。'}
                </p>
                <ul className="mt-6 space-y-2 text-[15px] text-[#5a555d]">
                  <li>• {isEn ? 'Registered dietitians & acupuncturists' : '注册营养师与针灸师'}</li>
                  <li>• {isEn ? 'Licensed therapists & support circles' : '执照心理咨询师与支持小组'}</li>
                  <li>• {isEn ? 'Concierge travel & virtual care team' : '礼宾式行程与远程护理团队'}</li>
                </ul>
              </Card>
            </ScrollInView>
          </div>
        </div>
      </section>

      <section className="bg-[#f7ebe5] py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? "We're honoured to walk with you" : '能与您同行是我们的荣幸'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Schedule a discovery call with our team'
              : '与我们的双语礼宾团队预约了解电话'}
          </h2>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? "We'll review your records and create a plan and timeline that fit your life."
              : '我们将一起审阅您的资料，说明 OvuMethod™ 如何支持您的目标，并规划符合您生活节奏的专属时间表。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'Plan my visit' : '规划我的来访'}
            </Button>
            <Link href="/faq" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'Explore FAQs' : '查看常见问题'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
