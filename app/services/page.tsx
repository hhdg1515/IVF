'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { Button } from '@/components/ui/Button'
import {
  ConcentricRings,
  GradientOrb,
  FlowingCurve,
  OrganicBlob,
  FloatingHearts,
  BloomingFlower,
  FertilitySymbol,
  RainbowOrb
} from '@/components/ui/Decorations'
import Link from 'next/link'

type CopyBlock = {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const primaryPrograms: CopyBlock[] = [
  {
    titleEn: 'IVF & Embryology Programs',
    titleZh: '体外受精与胚胎实验室方案',
    descEn:
      'Personalized stimulation protocols, gentle retrievals, and in-house embryology with PGT-A/PGT-M screening.',
    descZh:
      '个性化促排方案、温和取卵,并在院内完成胚胎培养与 PGT-A/PGT-M 遗传检测。',
  },
  {
    titleEn: 'Egg Freezing & Fertility Preservation',
    titleZh: '冻卵与生育保存',
    descEn:
      'Rapid-start cycles for career, personal, or medical reasons, supported by holistic hormone preparation.',
    descZh:
      '为职业、个人或医疗需求提供快速启动周期,并辅以全方位的激素调理支持。',
  },
  {
    titleEn: 'Donor & Gestational Carriers',
    titleZh: '捐赠与代孕协调',
    descEn:
      'Dedicated coordinators manage matching, screening, and legal guidance with transparent financial planning.',
    descZh:
      '专属协调团队负责匹配、筛查与法律指引,并提供清晰透明的费用规划。',
  },
  {
    titleEn: 'Male Fertility & Andrology',
    titleZh: '男性生育与男科服务',
    descEn:
      'Comprehensive semen analysis, DNA fragmentation testing, and on-site ICSI/IMSI expertise.',
    descZh:
      '完整的精液分析、DNA 断裂检测以及院内 ICSI/IMSI 专业操作。',
  },
]

const supportiveCare: Array<CopyBlock & { numberEn: string; numberZh: string; letter: string; iconPath: string }> = [
  {
    numberEn: '1',
    numberZh: '01',
    letter: 'E',
    titleEn: 'Endocrine & Metabolic Support',
    titleZh: '内分泌与代谢支持',
    descEn: 'We address root hormonal imbalances—thyroid, PCOS, insulin sensitivity, immune response—with protocols crafted for your specific biomarkers. This foundation optimizes your body\'s readiness for treatment and makes all the difference in your results.',
    descZh: '我们针对甲状腺、PCOS、胰岛素敏感度与免疫功能等根本的激素失衡进行专属优化，根据您的生化标志物制定方案。这个基础优化您的身体状态，对生育结果至关重要。',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    numberEn: '2',
    numberZh: '02',
    letter: 'I',
    titleEn: 'Integrated Mind-Body Care',
    titleZh: '身心整合护理',
    descEn: 'Licensed counselors guide you through the emotional journey of treatment. Acupuncture, nutritional support, and mindfulness practices work alongside medical care to prepare your whole self. You\'re never alone in this process.',
    descZh: '执照心理师引导您度过治疗的情感之旅。针灸、营养支持与正念练习与医学治疗相辅相成。您在这个过程中永远不是孤独的。',
    iconPath: 'M18 18.72v-8.505a5.973 5.973 0 00-.882-2.882m0 0a5.973 5.973 0 00-5.882-2.9m0 0A5.023 5.023 0 007.1 6.278m0 0a5.973 5.973 0 00-5.882 2.9m0 0a3 3 0 015.88.803 5.973 5.973 0 006 2.282m0 0a3 3 0 015.88-.803',
  },
  {
    numberEn: '3',
    numberZh: '03',
    letter: 'C',
    titleEn: 'Cycle Concierge & Access',
    titleZh: '周期礼宾与全程陪伴',
    descEn: 'From local visits to international care, we handle every detail. Secure telemedicine check-ins, flexible scheduling, and dedicated concierge support ensure seamless access to your care team whenever you need guidance.',
    descZh: '无论是本地会诊还是远程治疗，我们为您处理所有细节。安全的远程诊疗、灵活的预约时间与专属礼宾支持，让您随时获得护理团队的指导。',
    iconPath: 'M6 12a6 6 0 1112 0A6 6 0 016 12z',
  },
]

const serviceJourney: Array<{
  stepEn: string
  stepZh: string
  descEn: string
  descZh: string
}> = [
  {
    stepEn: 'Your Consultation: Comprehensive Intake & Discovery',
    stepZh: '您的初诊：全面评估与发现',
    descEn:
      'We start by truly listening to your story. Detailed history, hormone panels, ultrasound imaging, and partner screening help us understand what\'s impacting your fertility. You\'ll meet your entire care team—physicians, nurses, nutritionists, and counselors who will support you. This is where your personalized journey begins.',
    descZh:
      '我们从真诚聆听您的故事开始。详尽的病史、激素检测、超声影像与伴侣筛查帮助我们理解您的情况。您将认识整个护理团队——医生、护士、营养师与心理咨询师，他们将全程陪伴。这是您个性化旅程的开始。',
  },
  {
    stepEn: 'Preparation Phase: Your Personalized Treatment Blueprint',
    stepZh: '准备阶段：您的个性化治疗方案',
    descEn:
      'Your care team creates a detailed treatment plan designed specifically for you—not a standard protocol. We discuss every detail together: your cycle calendar, medication schedule, nutrition plan, and integrative support. You\'ll understand exactly what to expect and why each element matters for your success.',
    descZh:
      '您的护理团队专为您设计详细的治疗方案——完全个性化。我们一起讨论每个细节：周期日程、用药计划、营养方案与整合健康支持。您将清楚地了解每一步的内容与作用。',
  },
  {
    stepEn: 'Active Treatment: Daily Concierge Support',
    stepZh: '治疗阶段：每日礼宾陪伴',
    descEn:
      'During your treatment cycle, you are never alone. Daily check-ins with our concierge team track your symptoms and celebrate your progress. Your physicians adjust protocols as needed, our nutritionists fine-tune your diet in real time, and counselors support you emotionally. You have a dedicated team every single day.',
    descZh:
      '在您的治疗周期中，您永远不是孤独的。我们的礼宾团队每日跟进，追踪症状并为您的进展庆祝。您的医生根据反应调整方案，营养师实时优化饮食，心理师提供情感支持。您每一天都有一个专属的团队。',
  },
  {
    stepEn: 'Beyond: Ongoing Partnership & Care',
    stepZh: '后续：持续的伙伴式陪伴',
    descEn:
      'Your success is just the beginning. Whether you\'re expecting or planning your next cycle, our partnership continues. We coordinate seamlessly with your OB partners, provide pregnancy-specific wellness support, and postpartum care. Your whole family\'s wellness is our priority.',
    descZh:
      '您的成功只是开始。无论您已成功受孕或计划下一个周期，我们的伙伴关系继续。我们与产科团队无缝协作，提供孕期与产后护理。您和家庭的整体健康是我们的优先。',
  },
]

export default function ServicesPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Specialized Fertility Programs' : '专业生育方案'}
        backgroundImage="/images/service.jpg"
        title={
          isEn
            ? 'Comprehensive fertility services tailored to your pathway to parenthood'
            : '为您的为人父母之旅量身打造的全面生育服务'
        }
        subtitle={
          isEn
            ? 'From diagnostics to advanced IVF and integrative support, every service is delivered in-house by the team you already trust.'
            : '从评估到先进的体外受精与整合支持,所有服务均由您信赖的院内团队亲自提供。'
        }
        primaryCtaText={isEn ? 'Plan your consultation' : '预约初诊'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Meet the physicians' : '认识医生团队'}
        secondaryCtaHref="/about"
        stats={[
          { value: '12', label: isEn ? 'Core treatment programs' : '12 项核心方案' },
          { value: '24/7', label: isEn ? 'Cycle concierge support' : '全天候周期礼宾支持' },
          { value: '100%', label: isEn ? 'On-site lab & procedures' : '院内实验室与手术' },
        ]}
        highlight={{
          title: isEn ? 'Care designed around you' : '围绕您设计的护理',
          description: isEn
            ? 'Every service includes bilingual coaching, integrative wellness, and transparent pricing.'
            : '每项服务均包含双语陪伴、整合健康支持与透明费用说明。',
        }}
        priority
      />

      <section className="relative overflow-hidden bg-white py-24">
        {/* Decorative elements */}
        <GradientOrb className="w-[640px] h-[640px] -top-72 -right-72 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.15),_transparent_60%)]" />
        <GradientOrb className="w-[560px] h-[560px] -bottom-64 -left-64 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.50),_transparent_60%)]" />
        <div className="animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
          <FloatingHearts className="right-[4%] top-20 w-24 h-24 text-[#c86b79] opacity-30" />
        </div>
        <div className="animate-float hidden xl:block" style={{ animationDelay: '2s' }}>
          <BloomingFlower className="left-[3%] bottom-32 w-20 h-20 text-[#a63655] opacity-25" />
        </div>
        <ConcentricRings className="w-48 h-48 -left-24 top-1/3 text-[#c86b79]/20" />

        <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Primary treatment programs' : '核心生育治疗项目'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'A dedicated pathway for every stage of your fertility journey'
                  : '针对生育旅程每个阶段的专属方案'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {primaryPrograms.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <Link
                  href={
                    idx === 0 ? '/services/ivf-treatment' :
                    idx === 1 ? '/services/egg-freezing' :
                    idx === 2 ? '/services/third-party' :
                    '/services'
                  }
                  className="block h-full"
                >
                  <Card className="h-full px-8 py-10 hover:shadow-xl transition-shadow group cursor-pointer">
                    <span className="font-serif italic text-2xl text-[#c86b79]">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="mt-4 text-2xl text-[#2f2b33] group-hover:text-[#a63655] transition-colors">
                      {isEn ? titleEn : titleZh}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                      {isEn ? descEn : descZh}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-[#a63655] font-medium text-sm">
                      <span>{isEn ? 'Learn more' : '了解更多'}</span>
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Card>
                </Link>
              </ScrollInView>
            ))}
          </div>

          {/* Additional note about pricing */}
          <ScrollInView delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/pricing" className="inline-flex items-center gap-2 text-[#a63655] hover:text-[#8b2a45] font-medium">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{isEn ? 'View transparent pricing for all services' : '查看所有服务的透明价格'}</span>
              </Link>
            </div>
          </ScrollInView>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32 md:pb-48">
        {/* Decorative elements */}
        <GradientOrb className="w-[760px] h-[760px] -top-96 -left-96 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.18),_transparent_60%)]" />
        <GradientOrb className="w-[720px] h-[720px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.60),_transparent_60%)]" />
        <ConcentricRings className="w-64 h-64 -right-32 top-20 text-white/30" />
        <OrganicBlob className="w-[560px] h-[560px] -top-72 -right-64 text-white/25 blur-3xl" variant={2} />
        <FlowingCurve className="bottom-16 left-6 w-72 text-white/25" direction="right" />

        {/* Fertility-themed decorations */}
        <div className="animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
          <FertilitySymbol className="left-[4%] top-1/4 w-20 h-20 text-[#a63655] opacity-35" />
        </div>
        <div className="animate-float hidden xl:block" style={{ animationDelay: '2.5s' }}>
          <FloatingHearts className="right-[5%] bottom-1/3 w-24 h-24 text-[#c86b79] opacity-25" />
        </div>
        <div className="animate-gentle-pulse hidden lg:block">
          <RainbowOrb className="-left-16 bottom-40" size="md" />
        </div>

        <div className="mx-auto max-w-5xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-20">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Support beyond the procedure' : '超越治疗的全程支持'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Integrative care woven into every service package'
                  : '每项服务均融入整合护理'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-20 md:space-y-28">
            {supportiveCare.map(({ numberEn, numberZh, letter, titleEn, titleZh, descEn, descZh, iconPath }, idx) => (
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

      <SectionWithNumber
        title={isEn ? 'How we personalize your cycle' : '我们如何个性化您的治疗周期'}
        subtitle={
          isEn
            ? 'Customized just for you'
            : '完全个性化'
        }
        content={
          <ul className="space-y-3 text-[15px] text-[#5a555d]">
            <li>
              {isEn
                ? 'We interpret your hormonal patterns and ultrasound findings to design a stimulation protocol that\'s right for YOUR body—not a standard formula.'
                : '我们解读您独特的激素模式与超声表现，为您的身体设计个性化促排方案——而不是标准流程。'}
            </li>
            <li>
              {isEn
                ? 'Our bilingual nurses walk through every medication with you, answering questions and making sure you feel confident and informed at every step.'
                : '双语护理团队逐一讲解每种用药，回答您的所有疑问，确保您在每一步都感到充分知情和自信。'}
            </li>
            <li>
              {isEn
                ? 'Your samples never leave our hands—our in-house lab means faster results, tighter quality control, and one less thing for you to worry about.'
                : '您的样本全程留在我们的照顾下——院内实验室意味着更快的结果、更严格的质量控制，也让您少一份担忧。'}
            </li>
            <li>
              {isEn
                ? 'Weekly check-ins let us adapt your nutrition, acupuncture timing, and emotional support in real time as your body responds—because real medicine is responsive medicine.'
                : '每周的会议让我们根据您身体的反应，实时调整营养、针灸时机与情感支持——因为真正的医学就是有反应的医学。'}
            </li>
          </ul>
        }
        imageSrc="/images/turorial.jpg"
        imageAlt={isEn ? 'IVY Fertility lab' : 'IVY 生育实验室'}
        backgroundColor="white"
        ctaText={isEn ? 'View sample cycle calendar' : '查看示例周期日程'}
        ctaHref="/start-here#readiness-checklist"
      />

      <section className="relative overflow-hidden bg-white py-24">
        {/* Decorative elements */}
        <GradientOrb className="w-[600px] h-[600px] -top-64 -left-64 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.12),_transparent_60%)]" />
        <FlowingCurve className="top-20 right-0 w-64 text-[#c86b79]/20" direction="left" />
        <div className="animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <BloomingFlower className="right-[6%] top-1/4 w-20 h-20 text-[#c86b79] opacity-25" />
        </div>
        <div className="animate-gentle-pulse hidden xl:block">
          <FertilitySymbol className="left-[3%] bottom-1/4 w-16 h-16 text-[#a63655] opacity-30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Your service journey' : '您的服务旅程'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'What to expect from consultation to ongoing wellness'
                  : '从初诊到持续健康的完整体验'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-14 space-y-10 border-l border-[#e2d0c1] pl-8 md:pl-12">
            {serviceJourney.map(({ stepEn, stepZh, descEn, descZh }, idx) => (
              <ScrollInView key={stepEn} delay={idx * 0.1} className="relative pl-6">
                <span className="absolute -left-8 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#a63655] bg-[#fdf7f2] text-sm font-semibold text-[#a63655]">
                  {idx + 1}
                </span>
                <h3 className="text-xl text-[#2f2b33]">
                  {isEn ? stepEn : stepZh}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7eee7] py-24">
        {/* Decorative elements */}
        <GradientOrb className="w-[700px] h-[700px] left-1/2 -translate-x-1/2 -top-64 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.20),_transparent_60%)]" />
        <ConcentricRings className="w-[400px] h-[400px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#c86b79]/25" />
        <OrganicBlob className="w-[480px] h-[480px] -bottom-[340px] -left-[320px] text-[#a63655]/12 blur-3xl" variant={2} />
        <OrganicBlob className="w-[480px] h-[480px] -top-[320px] -right-[320px] text-[#c86b79]/15 blur-3xl" variant={1} />
        <FlowingCurve className="bottom-12 left-0 w-56 text-[#a63655]/20" direction="right" />
        <FlowingCurve className="top-12 right-0 w-56 text-[#a63655]/20" direction="left" />

        {/* Fertility-themed decorations */}
        <div className="animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
          <FloatingHearts className="left-[8%] top-1/3 w-20 h-20 text-[#a63655] opacity-35" />
        </div>
        <div className="animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
          <FloatingHearts className="right-[8%] bottom-1/3 w-16 h-16 text-[#c86b79] opacity-25" />
        </div>
        <div className="animate-gentle-pulse hidden xl:block">
          <BloomingFlower className="left-[5%] bottom-20 w-16 h-16 text-[#a63655] opacity-20" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? "Let's plan the right service for you" : '一起规划最适合您的服务'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Book a complimentary consultation or explore our starter resources'
              : '预约免费咨询,或先浏览我们的入门资源'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'We will review your medical history, discuss goals, and recommend the services and support bundles that align with your timeline.'
              : '我们会一起回顾您的病史,明确目标,并推荐符合您时间规划的服务与支持组合。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'Schedule consultation' : '预约咨询'}
            </Button>
            <Link href="/start-here" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'View starter resources' : '查看入门资源'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
