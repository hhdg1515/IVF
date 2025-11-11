'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'

type CopyBlock = {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const methodSteps: Array<CopyBlock & { labelEn: string; labelZh: string }> = [
  {
    labelEn: 'Phase 1',
    labelZh: '阶段 1',
    titleEn: 'Discover & Assess',
    titleZh: '发现与评估',
    descEn:
      'Your fertility story is uniquely yours. We start with comprehensive diagnostics—hormonal panels, imaging, and genetic screening—to truly understand what\'s impacting your fertility. You\'ll meet your entire care team and together, we\'ll create your personalized roadmap.',
    descZh:
      '每个人的生育故事都独一无二。我们以全面的诊断开始——激素检查、影像学、遗传筛查——深入理解您的情况。您将与整个护理团队相识，我们一起为您制定个性化的治疗路线图。'
  },
  {
    labelEn: 'Phase 2',
    labelZh: '阶段 2',
    titleEn: 'Prepare & Optimize',
    titleZh: '准备与优化',
    descEn:
      "While your body prepares for treatment, we optimize it from every angle. Our nutritionists, counselors, and physicians work together to fine-tune your nutrition, manage stress, and address any underlying imbalances. This foundation is everything—it's what gives you the best possible chance at success.",
    descZh:
      '在身体为治疗做准备时，我们从各个角度进行优化。营养师、心理咨询师与医生携手，精心调整您的营养、管理压力、解决潜在失衡。这个基础至关重要——它决定了您成功的可能性。'
  },
  {
    labelEn: 'Phase 3',
    labelZh: '阶段 3',
    titleEn: 'Treatment & Companionship',
    titleZh: '治疗与陪伴',
    descEn:
      "Treatment is never a journey you take alone. During this phase, your care team is with you every step—monitoring closely, adjusting as your body responds, and holding space for your emotions. You'll have regular check-ins with physicians and direct access whenever you need support.",
    descZh:
      '治疗从不是孤独的旅程。在这个阶段，您的护理团队与您同行每一步——密切监测、根据身体反应调整、为您的情感需求留出空间。您将定期与医生沟通，在需要支持时可以直接获得帮助。'
  },
  {
    labelEn: 'Phase 4',
    labelZh: '阶段 4',
    titleEn: 'Sustain & Thrive',
    titleZh: '延续与成长',
    descEn:
      "Your success is just the beginning of your story with us. Whether you're expecting or planning your next cycle, we remain your partners. Ongoing monitoring, customized care, and seamless coordination with your obstetric team ensure you feel supported through pregnancy and beyond.",
    descZh:
      '您的成功只是与我们关系的开始。无论您已成功受孕或计划下一个周期，我们都将继续陪伴。持续的监测、定制化的护理，以及与产科团队的无缝协作，确保您在孕期及之后都感受到支持。'
  }
]

const pillarHighlights: Array<CopyBlock & { numberEn: string; numberZh: string; letter: string; iconPath: string }> = [
  {
    numberEn: '1',
    numberZh: '01',
    letter: 'B',
    titleEn: 'Board-certified reproductive endocrinologists',
    titleZh: '经认证的生殖内分泌专家',
    descEn:
      'Your care is guided by physicians who combine deep reproductive endocrinology expertise with integrative medicine principles. Every protocol is personally designed—never a standard formula.',
    descZh:
      '您的护理由生殖内分泌医师亲自指导，他们结合深厚的医学知识与整合医学理念。每份方案都是专属设计——没有千篇一律。',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    numberEn: '2',
    numberZh: '02',
    letter: 'I',
    titleEn: 'Integrated onsite facilities',
    titleZh: '整合的院内设施',
    descEn:
      'All diagnostics, embryology, andrology, genetic testing, and procedures happen under one roof. This means faster results, tighter quality control, and consistent care standards.',
    descZh:
      '所有诊断、胚胎培养、男科检查、遗传检测与手术均在中心内完成。这意味着更快的结果、更严格的质量控制与一致的护理标准。',
    iconPath: 'M18 18.72v-8.505a5.973 5.973 0 00-.882-2.882m0 0a5.973 5.973 0 00-5.882-2.9m0 0A5.023 5.023 0 007.1 6.278m0 0a5.973 5.973 0 00-5.882 2.9m0 0a3 3 0 015.88.803 5.973 5.973 0 006 2.282m0 0a3 3 0 015.88-.803',
  },
  {
    numberEn: '3',
    numberZh: '03',
    letter: 'W',
    titleEn: 'Whole-person support team',
    titleZh: '全人整合支持团队',
    descEn:
      'Licensed counselors, nutritionists, acupuncturists, and care coordinators work as true partners—not just coordinating care, but truly supporting your body and mind through every phase.',
    descZh:
      '执照心理师、营养师、针灸师与护理协调员不仅是协调，更是真正的伙伴式支持您的身心——贯穿整个旅程的每个阶段。',
    iconPath: 'M6 12a6 6 0 1112 0A6 6 0 016 12z',
  }
]

export default function Home() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Integrative Fertility Medicine' : '整合医学生育护理'}
        backgroundImage="https://www.ovulifemd.com/wp-content/uploads/2019/12/shutterstock_1012695904.jpg"
        title={
          isEn
            ? 'Personalized fertility care for the path that is uniquely yours'
            : '为您量身打造的个性化生育之旅'
        }
        subtitle={
          isEn
            ? 'Board-certified reproductive endocrinologists, bilingual specialists, and a whole-person support team partnering with you at every step.'
            : '认证生殖内分泌专家、双语医疗团队与全人支持体系，在旅程的每一步与您并肩同行。'
        }
        primaryCtaText={isEn ? 'Book Consultation' : '预约咨询'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Explore The OvuMethod' : '了解 OvuMethod'}
        secondaryCtaHref="/the-ovumethod"
        showScrollIndicator
        priority
      />

      <section className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#a63655]">
                {isEn ? 'Why IVY Fertility' : '为什么选择 IVY'}
              </span>
              <h2 className="mt-4 text-[40px] leading-tight text-[#2f2b33]">
                {isEn
                  ? 'Care that goes beyond treatment'
                  : '超越治疗的关怀'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-20 md:space-y-28">
            {pillarHighlights.map(({ letter, titleEn, titleZh, descEn, descZh, iconPath }, idx) => (
              <ScrollInView key={idx} delay={idx * 0.1}>
                <div className={`relative ${idx === 1 ? 'md:ml-56' : ''} ${idx === 2 ? 'md:ml-[28rem]' : ''}`}>
                  {/* Background Letter */}
                  <div className="pointer-events-none absolute -left-4 -top-8 text-[120px] font-serif font-bold text-white/30 md:text-[160px]">
                    {letter}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-6">
                    <svg className="h-12 w-12 flex-shrink-0 text-[#a63655] mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                    </svg>
                    <div>
                      <h3 className="text-[24px] font-serif text-[#a63655] md:text-[28px]">
                        {isEn ? titleEn : titleZh}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? descEn : descZh}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'The OvuMethod™' : 'OvuMethod™'}
              </span>
              <h2 className="mt-4 text-[44px] leading-tight text-[#2f2b33]">
                {isEn
                  ? 'A proven approach personalized to your needs'
                  : '为您量身打造的成熟方法'}
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? "Your journey with us follows a thoughtful progression—from understanding your story to supporting you through treatment and beyond."
                  : '您与我们的旅程遵循深思熟虑的进程——从理解您的故事到支持您完成治疗及之后。'}
              </p>
            </div>
          </ScrollInView>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {methodSteps.map(({ titleEn, titleZh }, idx) => (
              <ScrollInView key={idx} delay={idx * 0.1}>
                <Card className="h-full px-6 py-8 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl font-serif font-light text-[#c86b79] mb-3">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                </Card>
              </ScrollInView>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <Link href="/the-ovumethod">
              <Button variant="primary" size="lg">
                {isEn ? 'Explore the OvuMethod' : '深入了解 OvuMethod'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SectionWithNumber
        title={isEn ? 'Whole-person fertility medicine' : '全人整合医学生育护理'}
        subtitle={
          isEn
            ? 'We treat the root causes'
            : '关注根源'
        }
        content={
          <div className="space-y-4">
            <p>
              {isEn
                ? 'Every treatment plan begins with a deep understanding of your story, labs, imaging, and lifestyle. We combine reproductive endocrinology, Traditional Chinese Medicine principles, and precision nutrition to help your body thrive.'
                : '每一份治疗方案都从深入了解您的故事、化验、影像与生活方式开始。我们结合生殖内分泌学、传统中医理念与精准营养，帮助您的身体焕发最佳状态。'}
            </p>
            <p>
              {isEn
                ? 'Our bilingual team ensures you never have to translate complicated medical language or advocate for yourself alone.'
                : '双语医疗团队让您无须再自行翻译复杂医学术语，也不必独自奔走。'}
            </p>
          </div>
        }
        imageSrc="https://www.ovulifemd.com/wp-content/uploads/2019/12/about-us_hero.jpg"
        imageAlt="Fertility specialist consulting with patient"
        backgroundColor="white"
        ctaText={isEn ? 'Meet the physicians' : '认识医生团队'}
        ctaHref="/about"
      />

      <SectionWithNumber
        title={isEn ? 'A clinic built for belonging' : '让您安心归属的诊所环境'}
        subtitle={
          isEn
            ? 'Serene spaces'
            : '静谧空间'
        }
        content={
          <div className="space-y-4">
            <p>
              {isEn
                ? 'Egg retrieval suites, embryology laboratory, andrology lab, and procedure rooms are all onsite. That means consistent standards, tightly controlled environments, and your care team by your side.'
                : '取卵手术室、胚胎实验室、男科实验室与治疗室均位于中心内部，确保标准一致、环境可控，您的护理团队始终陪伴左右。'}
            </p>
            <p>
              {isEn
                ? 'Flexible scheduling, discreet VIP pathways, and partnerships with top maternal-fetal medicine specialists ensure the transition to pregnancy care is seamless.'
                : '灵活的预约安排、私密尊享通道，以及与顶尖母胎医学专家的合作，让孕期衔接顺畅安心。'}
            </p>
          </div>
        }
        imageSrc="/images/belonging.jpg"
        imageAlt="IVY Fertility Center interior"
        backgroundColor="cream"
        reversed
        ctaText={isEn ? 'Tour the facility' : '参观诊所'}
        ctaHref="/services"
      />

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-2xl rounded-[24px] bg-white/90 px-8 py-10 shadow-[0_24px_70px_rgba(45,28,36,0.12)] backdrop-blur">
              <h2 className="mt-4 text-[38px] text-[#2f2b33]">
                {isEn
                  ? 'Guides and insights'
                  : '指南与洞见'}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'Explore the latest research-backed tips from our physicians, nutritionists, and counselors.'
                  : '查阅我们的医生、营养师与心理咨询师提供的最新循证建议。'}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/blog">
                  <Button variant="primary" size="md">
                    {isEn ? 'Visit the blog' : '访问博客'}
                  </Button>
                </Link>
                <Button variant="ghost" size="md">
                  {isEn ? 'Download free resources' : '下载免费资源'}
                </Button>
              </div>
            </div>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#f7ebe5] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Your story is only beginning' : '您的故事正要展开'}
          </span>
          <h2 className="text-[42px] leading-tight text-[#2f2b33]">
            {isEn
              ? "Let's design a fertility plan around your values"
              : '我们一起打造符合您价值观与梦想的生育计划'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Contact us' : '联系礼宾团队'}
              </Button>
            </Link>
            <Link href="/start-here">
              <Button variant="outline" size="lg">
                {isEn ? 'START YOUR JOURNEY' : '开启您的旅程'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
