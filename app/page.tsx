'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Button } from '@/components/ui/Button'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { ConcentricRings, GradientOrb, FlowingCurve, OrganicBlob, FloatingHearts, BloomingFlower, FertilitySymbol, RainbowOrb } from '@/components/ui/Decorations'

type CopyBlock = {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const methodSteps = [
  {
    titleEn: 'Discover',
    titleZh: '发现',
    iconSrc: '/discover2.png',
    iconClass: 'w-35 h-35',
  },
  {
    titleEn: 'Prepare',
    titleZh: '准备',
    iconSrc: '/哑铃2.png',
  },
  {
    titleEn: 'Treatment',
    titleZh: '治疗',
    iconSrc: '/药瓶2.png',
  },
  {
    titleEn: 'Thrive',
    titleZh: '成长',
    iconSrc: '/喝水2.png',
  }
]

const pillarHighlights: Array<CopyBlock & { numberEn: string; numberZh: string; letter: string; iconPath: string }> = [
  {
    numberEn: '01',
    numberZh: '01',
    letter: 'L',
    titleEn: 'Doctors who listen first',
    titleZh: '先倾听的医生',
    descEn:
      'Before we run a single test, we want to hear your story. Our reproductive endocrinologists bring decades of expertise—but more importantly, they bring patience. Your protocol starts with understanding you.',
    descZh:
      '在做任何检查之前，我们想先听听您的故事。我们的生殖专家拥有数十年经验——但更重要的是，他们愿意耐心倾听。您的方案，从理解您开始。',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    numberEn: '02',
    numberZh: '02',
    letter: 'O',
    titleEn: 'Everything under one roof',
    titleZh: '一站式安心体验',
    descEn:
      'No more running between labs. No more waiting weeks for results. From your first blood draw to embryo transfer, it all happens here—where we can watch over every detail.',
    descZh:
      '不必在各个检查机构间奔波，不必漫长等待结果。从第一次抽血到胚胎移植，一切都在这里完成——我们守护每一个细节。',
    iconPath: 'M18 18.72v-8.505a5.973 5.973 0 00-.882-2.882m0 0a5.973 5.973 0 00-5.882-2.9m0 0A5.023 5.023 0 007.1 6.278m0 0a5.973 5.973 0 00-5.882 2.9m0 0a3 3 0 015.88.803 5.973 5.973 0 006 2.282m0 0a3 3 0 015.88-.803',
  },
  {
    numberEn: '03',
    numberZh: '03',
    letter: 'V',
    titleEn: 'Care for your whole self',
    titleZh: '身心一起照顾',
    descEn:
      'Fertility treatment is hard on your body and your heart. That\'s why our nutritionists, counselors, and acupuncturists work alongside your doctor—so you\'re supported in every way, not just medically.',
    descZh:
      '生育治疗对身体和心灵都是考验。这就是为什么营养师、心理咨询师和针灸师与您的医生协同工作——让您在各个层面都被支持，而不只是医学上的治疗。',
    iconPath: 'M6 12a6 6 0 1112 0A6 6 0 016 12z',
  }
]

export default function Home() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Where Hope Takes Root' : '让希望生根'}
        backgroundImage="https://www.ovulifemd.com/wp-content/uploads/2019/12/shutterstock_1012695904.jpg"
        title={
          isEn
            ? "You've been through enough. Let's find your path forward."
            : '您已经承受了太多。让我们一起找到前行的路。'
        }
        subtitle={
          isEn
            ? "Expert fertility care in your language, at your pace. Our bilingual team sees the whole you—not just a chart."
            : '用您熟悉的语言，按您舒适的节奏。我们的双语团队看见完整的您——而不只是病历上的数字。'
        }
        primaryCtaText={isEn ? 'Schedule a Conversation' : '预约一次对话'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'See How It Works' : '看看怎么做'}
        secondaryCtaHref="/the-ovumethod"
        showScrollIndicator
        priority
      />

      <section className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32">
        <GradientOrb className="w-[760px] h-[760px] -top-96 -left-96 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.22),_transparent_60%)]" />
        <GradientOrb className="w-[720px] h-[720px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.65),_transparent_60%)]" />
        <ConcentricRings className="w-64 h-64 -right-24 top-20 text-white/35" />
        <OrganicBlob className="w-[560px] h-[560px] -top-72 -right-64 text-white/28 blur-3xl" variant={2} />
        <FlowingCurve className="bottom-12 left-6 w-72 text-white/28" direction="right" />

        {/* New fertility-themed decorations */}
        <div className="animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
          <FloatingHearts className="left-[3%] top-1/4 w-24 h-24 text-[#a63655] opacity-30" />
        </div>
        <div className="animate-float hidden xl:block" style={{ animationDelay: '2s' }}>
          <BloomingFlower className="right-[5%] bottom-1/4 w-20 h-20 text-[#c86b79] opacity-25" />
        </div>
        <div className="animate-gentle-pulse hidden lg:block">
          <RainbowOrb className="-left-16 bottom-32" size="md" />
        </div>

        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="text-[14px] font-semibold uppercase tracking-[0.1em] text-[#a63655]">
                {isEn ? 'Why IVY Fertility' : '为什么选择 IVY'}
              </span>
              <h2 className="mt-4 text-[36px] leading-[1.2] text-[#212529]">
                {isEn
                  ? 'Care that feels different'
                  : '不一样的关怀体验'}
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
                    <svg className="h-10 w-10 flex-shrink-0 text-[#a63655] mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                    </svg>
                    <div>
                      <h3 className="text-[22px] font-serif text-[#a63655] md:text-[26px]">
                        {isEn ? titleEn : titleZh}
                      </h3>
                      <p className="mt-4 text-[17px] leading-[1.75] text-[#495057]">
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

      <section className="relative overflow-hidden bg-[#f7eee7] py-20 md:py-28">
        <GradientOrb className="w-[640px] h-[640px] -top-80 -left-80 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.22),_transparent_60%)]" />
        <GradientOrb className="w-[640px] h-[640px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.60),_transparent_60%)]" />
        <ConcentricRings className="w-48 h-48 right-4 top-6 text-[#a63655]/28" />
        <FlowingCurve className="bottom-10 right-2 w-64 text-[#a63655]/26" direction="left" />
        <OrganicBlob className="w-[520px] h-[520px] -bottom-72 left-6 text-[#c86b79]/16 blur-3xl" variant={1} />

        {/* Fertility decorations */}
        <div className="animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
          <FertilitySymbol className="left-[4%] bottom-20 w-20 h-20 text-[#a63655] opacity-35" />
        </div>
        <div className="animate-gentle-pulse hidden xl:block">
          <FloatingHearts className="right-[6%] top-1/3 w-20 h-20 text-[#c86b79] opacity-25" />
        </div>

        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-[26px] text-[#a63655]">
                {isEn ? 'The OvuMethod™' : 'OvuMethod™'}
              </span>
              <h2 className="mt-4 text-[36px] leading-[1.2] text-[#212529]">
                {isEn
                  ? 'A path designed around you'
                  : '为您量身设计的旅程'}
              </h2>
              <p className="mt-6 text-[18px] leading-[1.75] text-[#495057]">
                {isEn
                  ? 'Four phases. Your timeline. No rushing, no waiting longer than you need to. Just thoughtful care that meets you where you are.'
                  : '四个阶段，按您的节奏。不催促，也不让您多等一天。只是用心的关怀，在您需要的地方等着您。'}
              </p>
            </div>
          </ScrollInView>

          <div className="mt-14 grid grid-cols-2 gap-x-16 gap-y-12 max-w-2xl mx-auto">
            {methodSteps.map(({ titleEn, titleZh, iconSrc, iconClass }, idx) => (
              <ScrollInView key={idx} delay={idx * 0.1}>
                <div className="flex items-center gap-4">
                  <Image
                    src={iconSrc}
                    alt={isEn ? titleEn : titleZh}
                    width={128}
                    height={128}
                    className={`object-contain flex-shrink-0 ${iconClass ?? ''}`}
                    loading="lazy"
                    quality={85}
                  />
                  <h3 className="text-2xl text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                </div>
              </ScrollInView>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <Link href="/the-ovumethod">
              <Button variant="primary" size="lg">
                {isEn ? 'Learn How It Works' : '了解具体流程'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SectionWithNumber
        title={isEn ? 'We look at the whole picture' : '我们看的是全貌'}
        subtitle={
          isEn
            ? 'Beyond the numbers'
            : '不只是数字'
        }
        content={
          <div className="space-y-4">
            <p>
              {isEn
                ? 'Most clinics focus on one thing. We look at everything—your hormones, your nutrition, your stress, your sleep. Because your body is connected, and your care should be too.'
                : '大多数诊所只关注一件事。我们看的是全貌——您的激素、营养、压力、睡眠。因为您的身体是一个整体，您的护理也应该如此。'}
            </p>
            <p>
              {isEn
                ? "And with our bilingual team, you'll never feel lost in translation or left to navigate this alone."
                : '有我们的双语团队，您永远不会因为语言而感到迷茫，也不必独自面对这一切。'}
            </p>
          </div>
        }
        imageSrc="https://www.ovulifemd.com/wp-content/uploads/2019/12/about-us_hero.jpg"
        imageAlt="Fertility specialist consulting with patient"
        backgroundColor="white"
        ctaText={isEn ? 'Meet Our Team' : '认识我们的团队'}
        ctaHref="/about"
      />

      <SectionWithNumber
        title={isEn ? 'A space that feels different' : '一个不一样的空间'}
        subtitle={
          isEn
            ? 'Designed for comfort'
            : '为您的舒适而设计'
        }
        content={
          <div className="space-y-4">
            <p>
              {isEn
                ? "We know what it's like to dread medical appointments. That's why our space feels more like a sanctuary than a clinic—private, calm, and designed around your comfort."
                : '我们知道去医院有时让人焦虑。所以这里更像一个静谧的港湾，而不是冰冷的诊所——私密、安静，为您的舒适而设计。'}
            </p>
            <p>
              {isEn
                ? 'Everything happens under one roof—no rushing between buildings, no waiting weeks for results. Just your care team, by your side, through every step.'
                : '一切都在同一屋檐下完成——不必在各处奔波，不必漫长等待结果。只有您的护理团队，始终陪伴在侧。'}
            </p>
          </div>
        }
        imageSrc="/images/belonging.jpg"
        imageAlt="IVY Fertility Center interior"
        backgroundColor="cream"
        reversed
        ctaText={isEn ? 'See Our Space' : '参观环境'}
        ctaHref="/our-lab"
      />

      <section className="relative overflow-hidden bg-[#f7eee7] py-24">
        <GradientOrb className="w-[640px] h-[640px] -top-72 -left-72 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.20),_transparent_60%)]" />
        <GradientOrb className="w-[640px] h-[640px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.60),_transparent_60%)]" />
        <ConcentricRings className="w-48 h-48 right-6 bottom-6 text-[#c86b79]/30" />
        <FlowingCurve className="top-12 left-4 w-60 text-[#a63655]/26" direction="right" />
        <OrganicBlob className="w-[520px] h-[520px] -bottom-64 left-10 text-[#a63655]/14 blur-3xl" variant={3} />

        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-2xl rounded-[24px] bg-white/90 px-10 py-12 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
              <h2 className="text-[32px] leading-[1.2] text-[#212529]">
                {isEn
                  ? 'Guides written for real people'
                  : '为真实的人写的指南'}
              </h2>
              <p className="mt-5 text-[18px] leading-[1.75] text-[#495057]">
                {isEn
                  ? 'No medical jargon. Just clear, honest information from our doctors, nutritionists, and counselors—so you can make informed decisions.'
                  : '没有晦涩的医学术语。只有来自我们医生、营养师和心理咨询师的清晰、诚实的信息——帮助您做出明智的决定。'}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/blog">
                  <Button variant="primary" size="md">
                    {isEn ? 'Read Our Blog' : '阅读博客'}
                  </Button>
                </Link>
                <Button variant="ghost" size="md">
                  {isEn ? 'Get Started Guide' : '入门指南'}
                </Button>
              </div>
            </div>
          </ScrollInView>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7ebe5] py-24">
        <GradientOrb className="w-[780px] h-[780px] left-1/2 -translate-x-1/2 -top-72 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.24),_transparent_60%)]" />
        <ConcentricRings className="w-[460px] h-[460px] left-1/2 -translate-x-1/2 top-8 text-[#c86b79]/30" />
        <OrganicBlob className="w-[520px] h-[520px] -bottom-[380px] -left-[360px] text-[#a63655]/14 blur-3xl" variant={2} />
        <OrganicBlob className="w-[520px] h-[520px] -top-[360px] -right-[360px] text-[#c86b79]/18 blur-3xl" variant={1} />
        <FlowingCurve className="bottom-10 left-0 w-64 text-[#a63655]/24" direction="right" />
        <FlowingCurve className="top-10 right-0 w-64 text-[#a63655]/24" direction="left" />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-[26px] text-[#a63655]">
            {isEn ? 'Ready when you are' : '当您准备好的时候'}
          </span>
          <h2 className="text-[36px] leading-[1.25] text-[#212529]">
            {isEn
              ? "Let's start with a conversation"
              : '让我们从一次对话开始'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? "Let's Talk" : '聊聊看'}
              </Button>
            </Link>
            <Link href="/start-here">
              <Button variant="outline" size="lg">
                {isEn ? 'Take the First Step' : '迈出第一步'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
