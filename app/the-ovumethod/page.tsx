'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const frameworkSteps = [
  {
    number: 1,
    titleEn: 'Discover & Assess',
    titleZh: '发现与评估',
    subtitleEn: 'We deeply understand your unique story',
    subtitleZh: '深入理解您的独特情况',
    pointsEn: [
      'Comprehensive diagnostics: hormones, metabolism, immune status, and environmental factors',
      'Detailed cycle mapping and ultrasound imaging to understand your reproductive patterns',
      'Initial assessment of how integrative medicine can support your specific goals',
    ],
    pointsZh: [
      '全面诊断：激素、代谢、免疫状态与环境因素',
      '详细的周期图绘制与超声成像，了解您的生殖模式',
      '评估整合医学如何支持您的具体目标',
    ],
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'Learn about our diagnostics',
    ctaZh: '了解我们的诊断',
  },
  {
    number: 2,
    titleEn: 'Prepare & Optimize',
    titleZh: '准备与优化',
    subtitleEn: 'Build your strongest foundation',
    subtitleZh: '打造您的最佳基础',
    pointsEn: [
      'Personalized nutrition, supplementation, and acupuncture based on your biomarkers',
      'Evidence-based therapies: mindfulness, counseling, sleep optimization, and movement',
      'Endocrine balancing and lifestyle adjustments to prepare your body optimally',
    ],
    pointsZh: [
      '根据您的生物标志物制定营养、补充与针灸方案',
      '循证疗法：正念、心理咨询、睡眠优化与运动',
      '内分泌调理与生活方式调整，为身体做最好的准备',
    ],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'Meet your support team',
    ctaZh: '认识您的支持团队',
  },
  {
    number: 3,
    titleEn: 'Treatment & Companionship',
    titleZh: '治疗与陪伴',
    subtitleEn: 'You are never alone through every step',
    subtitleZh: '您在每一步都得到陪伴',
    pointsEn: [
      'Custom protocols (IUI, IVF, donor, surrogacy) executed by board-certified reproductive endocrinologists',
      'Daily cycle concierge monitoring, real-time medication coaching, and symptom management',
      'Integrated wellness: nutrition adjustments, acupuncture, and emotional support throughout',
    ],
    pointsZh: [
      '由认证医师执行的定制方案（IUI、IVF、捐赠与代孕）',
      '每日礼宾监测、实时用药指导与症状管理',
      '整合支持：营养调整、针灸与全程情感陪伴',
    ],
    image: '/images/flower.jpg',
    ctaEn: 'Hear our patients\' stories',
    ctaZh: '听听患者的故事',
  },
  {
    number: 4,
    titleEn: 'Sustain & Thrive',
    titleZh: '延续与成长',
    subtitleEn: 'Your success is just the beginning',
    subtitleZh: '您的成功只是开始',
    pointsEn: [
      'Seamless transition to pregnancy care with coordination between our team and your OB',
      'Trimester-specific wellness plans addressing pregnancy-unique needs and support',
      'Postpartum resources and ongoing health optimization for your whole family',
    ],
    pointsZh: [
      '与产科团队无缝协作，顺利过渡到孕期护理',
      '分孕期健康计划，应对孕期特有需求',
      '产后资源与持续的家庭健康优化',
    ],
    image: '/thrive.jpg',
    ctaEn: 'Learn more',
    ctaZh: '了解更多',
  },
]

const pillars = [
  {
    titleEn: 'Board-certified reproductive endocrinologists',
    titleZh: '认证生殖内分泌专家',
    descEn:
      'Every protocol is personally designed by physicians who combine deep medical knowledge with integrative medicine principles. No algorithms, no standard formulas—just expertise tailored to your unique body.',
    descZh: '每份方案都由医师亲自设计，他们结合深厚的医学知识与整合医学理念。没有算法、没有标准流程——只有针对您身体的专属设计。',
  },
  {
    titleEn: 'Integrated onsite care team',
    titleZh: '整合的院内护理团队',
    descEn:
      'Licensed counselors, acupuncturists, nutritionists, and nurses collaborate closely—truly partnering to support your body and mind. All facilities are under one roof for seamless, coordinated care.',
    descZh: '执照心理师、针灸师、营养师与护士紧密协作——真正的伙伴式支持您的身心。所有设施都在同一屋檐下，确保护理的无缝协作。',
  },
  {
    titleEn: 'Bilingual support & cultural understanding',
    titleZh: '双语支持与文化理解',
    descEn:
      'Our Mandarin- and English-speaking physicians and team understand your cultural context and family values. You\'ll never feel lost translating medical concepts or making important decisions alone.',
    descZh: '我们的中英双语医师与团队理解您的文化背景与家庭价值观。您永远不需要独自翻译医学概念或做重大决定。',
  },
]

const timeline = [
  {
    phaseEn: 'Phase 1: Weeks 1-2 · Discover & Assess',
    phaseZh: '阶段 1：第 1-2 周 · 发现与评估',
    descEn:
      'Your initial consultation—we listen deeply to understand your complete story. Comprehensive testing reveals the full picture. You\'ll leave with your personalized OvuMethod blueprint.',
    descZh: '您的初诊——我们深入聆听您的完整故事。全面检测揭示完整图景。您将获得专属的 OvuMethod 蓝图。',
  },
  {
    phaseEn: 'Phase 2: Weeks 3-6 · Prepare & Optimize',
    phaseZh: '阶段 2：第 3-6 周 · 准备与优化',
    descEn:
      'Your care team begins weekly integrated sessions. Nutrition adjustments, acupuncture, and counseling work together to optimize your foundation. This is when you feel the power of our whole-person approach.',
    descZh: '您的护理团队开始每周的整合会议。营养调整、针灸与心理咨询协力优化您的基础。这时您能感受到我们全人方法的力量。',
  },
  {
    phaseEn: 'Phase 3: Weeks 7-16 · Treatment & Companionship',
    phaseZh: '阶段 3：第 7-16 周 · 治疗与陪伴',
    descEn:
      'Your active treatment cycle begins. Daily concierge check-ins, real-time medication coaching, and continuous wellness support surround you. You experience the full strength of our partnership.',
    descZh: '您的主动治疗周期开始。每日礼宾跟进、实时用药指导与持续的整合支持陪伴您。您体验我们伙伴式支持的全面力量。',
  },
  {
    phaseEn: 'Phase 4: Ongoing · Sustain & Thrive',
    phaseZh: '阶段 4：长期 · 延续与成长',
    descEn:
      'Whether you\'re pregnant or planning your next cycle, we remain your partners. Seamless coordination with your OB team and ongoing wellness support ensure your whole family thrives.',
    descZh: '无论您已成功受孕或计划下一个周期，我们都是您的伙伴。与产科团队的无缝协作和持续支持，确保您的整个家庭蓬勃发展。',
  },
]

export default function OvuMethodPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'The OvuMethod™' : 'OvuMethod™'}
        backgroundImage="/images/journey.jpg"
        title={isEn ? 'Your Four-Phase Treatment Framework' : '您的四阶段治疗框架'}
        subtitle={
          isEn
            ? 'Created by reproductive endocrinologists and integrative medicine specialists to guide your complete fertility journey with science-backed care and whole-person support.'
            : '由生殖内分泌专家与整合医学专家共同创建，以科学为基、全人关怀为核心，引导您的完整生育旅程。'
        }
        primaryCtaText={isEn ? 'Schedule a consultation' : '预约初诊'}
        primaryCtaHref="/contact"
        stats={[
          { value: '16', label: isEn ? 'Week journey' : '周旅程' },
          { value: '4', label: isEn ? 'Phases' : '个阶段' },
          { value: '360°', label: isEn ? 'Integrated support' : '整合支持' },
        ]}
        highlight={{
          title: isEn ? 'Personalized and proven.' : '个性化与循证',
          description: isEn
            ? 'Every patient\'s journey is unique. We combine medical expertise with integrative care to optimize your path to parenthood.'
            : '每位患者的旅程都独一无二。我们结合医学专业与整合护理，优化您的为人父母之路。',
        }}
      />

      {/* Phase Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e2d0c1] shadow-sm">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <nav className="flex items-center justify-between py-4 overflow-x-auto">
            {frameworkSteps.map(({ number, titleEn, titleZh }) => (
              <a
                key={number}
                href={`#phase-${number}`}
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-[#5a555d] hover:text-[#a63655] transition-colors whitespace-nowrap"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#e2d0c1] text-xs font-semibold">
                  {number}
                </span>
                <span className="hidden md:inline">{isEn ? titleEn : titleZh}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div id="method-overview" className="relative">
        {/* Timeline Indicator */}
        <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col items-center gap-3">
            {frameworkSteps.map(({ number, titleEn, titleZh }) => (
              <a
                key={number}
                href={`#phase-${number}`}
                className="group flex items-center gap-3"
                title={isEn ? titleEn : titleZh}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-[#e2d0c1] text-sm font-semibold text-[#5a555d] group-hover:border-[#a63655] group-hover:text-[#a63655] transition-all shadow-sm">
                  {number}
                </span>
                <span className="opacity-0 group-hover:opacity-100 absolute left-14 whitespace-nowrap bg-[#2f2b33] text-white text-xs px-3 py-1 rounded transition-opacity">
                  {isEn ? titleEn : titleZh}
                </span>
              </a>
            ))}
          </div>
        </div>

        {frameworkSteps.map(
          (
            {
              number,
            titleEn,
            titleZh,
            subtitleEn,
            subtitleZh,
            pointsEn,
            pointsZh,
            image,
            ctaEn,
            ctaZh,
          },
          idx
        ) => (
          <div key={number} id={`phase-${number}`}>
            <SectionWithNumber
              number={number}
              title={isEn ? titleEn : titleZh}
              subtitle={isEn ? subtitleEn : subtitleZh}
              content={
                <ul className="space-y-3 text-[15px] text-[#5a555d]">
                  {(isEn ? pointsEn : pointsZh).map((item, pointIdx) => (
                    <li key={pointIdx}>• {item}</li>
                  ))}
                </ul>
              }
              imageSrc={image}
              imageAlt={titleEn}
              reversed={idx % 2 === 1}
              backgroundColor={idx % 2 === 0 ? 'white' : 'cream'}
              ctaText={isEn ? ctaEn : ctaZh}
              ctaHref={idx === 0 ? '/services' : idx === 1 ? '/about' : '/faq'}
            />
          </div>
          )
        )}
      </div>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'What makes it work' : '为什么有效'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Built on expertise and care' : '建立在专业与关怀之上'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <Card className="h-full px-8 py-10 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                    {isEn ? descEn : descZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:px-0">
          <ScrollInView>
            <div className="rounded-[24px] bg-[#f7eee7] px-8 py-10 shadow-[0_24px_60px_rgba(45,28,36,0.12)]">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Patient spotlight' : '患者故事'}
              </span>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? "\"After years of unanswered questions, the OvuMethod finally stringed everything together. The integrative protocols helped me balance my hormones before IVF, and the cycle concierge made daily injections feel effortless. We're expecting our baby girl in a few months.\""
                  : '"多年没有答案的困惑，OvuMethod 终于替我串联起来。整合方案帮助我在 IVF 前调节激素，周期礼宾团队让每日注射也变得轻松。再过几个月，我们就要迎接女儿的到来了。"'}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-[#8b858d]">
                {isEn ? 'Lily & Daniel — IVF + OvuMethod Graduate' : 'Lily 与 Daniel — IVF + OvuMethod 成功案例'}
              </p>
            </div>
          </ScrollInView>
          <ScrollInView delay={0.1}>
            <Card className="h-full px-8 py-10">
              <h3 className="text-xl text-[#2f2b33]">
                {isEn ? 'What you receive when enrolling' : '加入计划可享内容'}
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-[#5a555d]">
                <li>
                  {isEn
                    ? 'Weekly integrative sessions (nutrition, acupuncture, counseling)'
                    : '每周整合护理会（营养、针灸、心理咨询）'}
                </li>
                <li>
                  {isEn
                    ? 'All diagnostic labs and hormone testing performed on-site'
                    : '所有诊断化验与激素检测均在院内完成'}
                </li>
                <li>
                  {isEn
                    ? 'Cycle concierge hotline with same-day responses'
                    : '周期礼宾热线，当日回复'}
                </li>
                <li>
                  {isEn
                    ? 'Detailed progress reports and next-step playbooks'
                    : '详细进程报告与下一步操作指南'}
                </li>
                <li>
                  {isEn
                    ? 'Post-program prenatal + postpartum wellness plan'
                    : '计划结束后的孕前及产后健康方案'}
                </li>
              </ul>
            </Card>
          </ScrollInView>
        </div>
      </section>

      <section className="bg-[#f7ebe5] py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to begin the OvuMethod?' : '准备开启 OvuMethod 吗？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Let us know what we can help' : '告诉我们可以如何帮助您'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? "We'll listen deeply to your story, review your history, map out the four phases specific to your body, and outline the timeline and investment that fit your goals and dreams."
              : '我们将深入聆听您的故事，梳理您的病史，规划适合您的四大阶段，并说明对应的时间与投入——所有这一切都围绕您的梦想展开。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'CONTACT US' : '联系我们'}
            </Button>
            <Link href="/start-here" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'Join the next workshop' : '报名下一场工作坊'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
