'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { Button } from '@/components/ui/Button'
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

const supportiveCare: CopyBlock[] = [
  {
    titleEn: 'Endocrine & Metabolic Optimization',
    titleZh: '内分泌与代谢优化',
    descEn: 'Thyroid, PCOS, insulin-sensitivity, and immune protocols tailored to your biomarkers.',
    descZh: '针对甲状腺、PCOS、胰岛素敏感度与免疫状况制定个性化方案。',
  },
  {
    titleEn: 'Integrative Mind-Body Support',
    titleZh: '身心整合支持',
    descEn: 'Licensed counselors, acupuncture, and restorative nutrition sessions every step of the way.',
    descZh: '执照心理咨询、针灸与调养营养课程贯穿全程。',
  },
  {
    titleEn: 'Concierge Travel & Remote Monitoring',
    titleZh: '礼宾行程与远程监测',
    descEn: 'Seamless coordination for international patients with secure telemedicine check-ins.',
    descZh: '为外地患者提供无缝行程安排与安全的远程诊疗跟进。',
  },
]

const serviceJourney: Array<{
  stepEn: string
  stepZh: string
  descEn: string
  descZh: string
}> = [
  {
    stepEn: 'Comprehensive Intake & Testing',
    stepZh: '全面初诊与检测',
    descEn:
      'History review, hormone panel, ultrasound, and partner screening to map a precise starting point.',
    descZh:
      '详尽病史、激素检测、超声与伴侣筛查,为后续治疗建立精准起点。',
  },
  {
    stepEn: 'Personalized Treatment Blueprint',
    stepZh: '个性化治疗蓝图',
    descEn:
      'Our physicians craft a cycle calendar, medication plan, and integrative care schedule matched to your goals.',
    descZh:
      '医生团队制定周期日程、用药计划与整合护理安排,以符合您的目标。',
  },
  {
    stepEn: 'Dedicated Cycle Coaching',
    stepZh: '专属周期陪伴',
    descEn:
      'Concierge check-ins, symptom tracking, and nutrition adjustments keep you supported every day.',
    descZh:
      '礼宾团队每日跟进、记录症状并调整营养方案,让您每天都感到被支持。',
  },
  {
    stepEn: 'Ongoing Pregnancy & Wellness Care',
    stepZh: '持续孕期与健康护理',
    descEn:
      'Positive outcome handoffs to OB partners, trimester-specific plans, and postnatal resources.',
    descZh:
      '成功怀孕后与产科合作伙伴顺利衔接,并提供分期计划与产后资源。',
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
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
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
                <Card className="h-full px-8 py-10">
                  <span className="font-script text-2xl text-[#c86b79]">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h3 className="mt-4 text-2xl text-[#2f2b33]">
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

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Support beyond the procedure' : '超越治疗的全程支持'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Integrative care woven into every service package'
                  : '每项服务均融入整合护理'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {supportiveCare.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1}>
                <Card className="h-full px-8 py-10">
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

      <SectionWithNumber
        number={1}
        title={isEn ? 'How we personalize your cycle' : '我们如何个性化您的治疗周期'}
        subtitle={
          isEn
            ? 'A four-part framework ensures continuity from consultation to pregnancy confirmation'
            : '四个阶段的框架确保从初诊到验孕的连续性'
        }
        content={
          <ul className="space-y-3 text-[15px] text-[#5a555d]">
            <li>
              {isEn
                ? 'Detailed hormone interpretation and ultrasound mapping guide your protocol design.'
                : '详细的激素解读与超声图谱引导方案设计。'}
            </li>
            <li>
              {isEn
                ? 'Our bilingual nurses review medications with you via video and in-person sessions.'
                : '双语护理团队通过视频与面诊,共同确认用药细节。'}
            </li>
            <li>
              {isEn
                ? 'In-house lab means your samples never leave our care and results are delivered quickly.'
                : '院内实验室确保标本全程留在中心,结果反馈迅速可靠。'}
            </li>
            <li>
              {isEn
                ? 'Weekly integrative check-ins adapt nutrition, acupuncture, and counseling to your needs.'
                : '每周整合护理会议,随时调整营养、针灸与心理支持。'}
            </li>
          </ul>
        }
        imageSrc="/images/turorial.jpg"
        imageAlt={isEn ? 'IVY Fertility lab' : 'IVY 生育实验室'}
        backgroundColor="white"
        ctaText={isEn ? 'View sample cycle calendar' : '查看示例周期日程'}
        ctaHref="/start-here#readiness-checklist"
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
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

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#c86b79]">
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
