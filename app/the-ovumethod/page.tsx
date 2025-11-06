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
    titleEn: 'Remove fertility threats',
    titleZh: '排除生育风险',
    subtitleEn: 'Identify and resolve root causes',
    subtitleZh: '识别并解决根源问题',
    pointsEn: [
      'Functional diagnostics for hormones, metabolism, immune and environmental factors',
      'Cycle mapping and ultrasound imaging to understand reproductive timing',
      'Personalized detox, endocrine balancing, and lifestyle adjustments',
    ],
    pointsZh: [
      '针对激素、代谢、免疫及环境因素进行功能性诊断',
      '周期图绘制与超声成像，掌握生殖节奏',
      '定制化排毒、内分泌调理与生活方式调整',
    ],
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'Explore diagnostics',
    ctaZh: '了解诊断项目',
  },
  {
    number: 2,
    titleEn: 'Nourish the whole person',
    titleZh: '滋养全人',
    subtitleEn: 'Support body, mind, and spirit',
    subtitleZh: '身心灵同步支持',
    pointsEn: [
      'Evidence-based nutrition, supplementation, and acupuncture tailored to your biomarkers',
      'Mind-body therapies—mindfulness, counseling, and community circles',
      'Sleep optimization and gentle movement plans to restore energy',
    ],
    pointsZh: [
      '根据生理指标定制营养、补充与针灸方案',
      '正念、心理咨询与支持圈等身心疗法',
      '睡眠优化及温和运动计划，恢复能量',
    ],
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
    ctaEn: 'Meet our integrative team',
    ctaZh: '认识整合护理团队',
  },
  {
    number: 3,
    titleEn: 'Sustain success together',
    titleZh: '持续携手成功',
    subtitleEn: 'Navigate treatment and beyond',
    subtitleZh: '陪伴完成治疗与产后',
    pointsEn: [
      'Custom fertility protocols (IUI, IVF, donor, surrogacy) executed by our physicians',
      'Cycle concierge monitoring, medication coaching, and travel coordination',
      'Pregnancy handoff to maternal-fetal partners plus postpartum wellness plans',
    ],
    pointsZh: [
      '由医师执行的定制生育方案：IUI、IVF、捐赠与代孕',
      '周期礼宾监测、用药指导与行程协调',
      '与母胎医学伙伴的孕期衔接及产后健康计划',
    ],
    image: '/images/flower.jpg',
    ctaEn: 'See success stories',
    ctaZh: '查看成功案例',
  },
]

const pillars = [
  {
    titleEn: 'Clinically precise',
    titleZh: '临床精准',
    descEn:
      'Board-certified reproductive endocrinologists interpret every lab and design each protocol.',
    descZh: '经认证的生殖内分泌医师解读所有检测，并亲自设计每项方案。',
  },
  {
    titleEn: 'Whole-person partnership',
    titleZh: '全人伙伴',
    descEn:
      'Licensed counselors, acupuncturists, and dietitians collaborate weekly to support your progress.',
    descZh: '执照心理师、针灸师与营养师每周协作，支持您的每一步进展。',
  },
  {
    titleEn: 'Bilingual advocacy',
    titleZh: '双语倡导',
    descEn:
      'Our Mandarin- and English-speaking team ensures you never navigate complex decisions alone.',
    descZh: '中英双语团队陪伴左右，帮助您从容应对每个关键决策。',
  },
]

const timeline = [
  {
    phaseEn: 'Weeks 1-3 · Discover',
    phaseZh: '第 1-3 周 · 了解自己',
    descEn:
      'Consultation, fertility testing, and OvuMethod blueprint delivered with lifestyle homework.',
    descZh: '面诊、检测与 OvuMethod 蓝图制定，同时提供生活方式作业。',
  },
  {
    phaseEn: 'Weeks 4-8 · Balance',
    phaseZh: '第 4-8 周 · 平衡调理',
    descEn:
      'Nutrition upgrades, hormone optimization, and integrative therapies prepare your body.',
    descZh: '营养升级、激素优化与整合疗法，为身体做好准备。',
  },
  {
    phaseEn: 'Weeks 9-12 · Treatment',
    phaseZh: '第 9-12 周 · 进入治疗',
    descEn:
      'IVF/IUI/donor protocols with daily concierge guidance, medication coaching, and lab support.',
    descZh: '在礼宾团队每日指导下进行 IVF/IUI/捐赠等方案，并辅以用药与实验室支持。',
  },
  {
    phaseEn: 'Beyond · Thrive',
    phaseZh: '持续阶段 · 持续繁盛',
    descEn:
      'Pregnancy confirmation, trimester plans, and postpartum wellness resources for lasting health.',
    descZh: '成功验孕后提供孕期计划，以及产后健康资源，持续守护您的家庭。',
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
        title={
          isEn
            ? 'A three-part framework guiding every IVY Fertility journey'
            : '引领 IVY 生育旅程的三大框架'
        }
        subtitle={
          isEn
            ? 'Designed by board-certified physicians and integrative specialists to remove threats, nourish your whole self, and sustain lasting fertility success.'
            : '由认证医师与整合专家共同打造，排除风险、滋养全人，并守护长期生育成果。'
        }
        primaryCtaText={isEn ? 'Start your OvuMethod plan' : '启动 OvuMethod 计划'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'View method overview' : '查看方法概览'}
        secondaryCtaHref="#method-overview"
        stats={[
          { value: '3', label: isEn ? 'Core phases' : '3 大阶段' },
          { value: '12+', label: isEn ? 'Weeks of guided care' : '12+ 周全程指导' },
          { value: '360°', label: isEn ? 'Whole-person support' : '360° 全人支持' },
        ]}
        highlight={{
          title: isEn ? 'Rooted in science, delivered with heart' : '科学为基，温度为伴',
          description: isEn
            ? 'You receive bilingual coaching, concierge monitoring, and integrative therapies every step of the way.'
            : '全程双语陪伴、礼宾监测与整合疗法，与您同行。',
        }}
      />

      <div id="method-overview">
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
          <SectionWithNumber
            key={number}
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
          )
        )}
      </div>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Why the OvuMethod works' : 'OvuMethod 的独到之处'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Precision medicine meets compassionate, bilingual care'
                  : '精准医疗与双语关怀的融合'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
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

      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Your 12-week roadmap' : '12 周路线图'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'What happens when you enroll in the OvuMethod'
                  : '加入 OvuMethod 后会经历什么'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 space-y-10 border-l border-[#e2d0c1] pl-8 md:pl-12">
            {timeline.map(({ phaseEn, phaseZh, descEn, descZh }, idx) => (
              <ScrollInView key={phaseEn} delay={idx * 0.1} className="relative pl-6">
                <span className="absolute -left-8 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#a63655] bg-[#fdf7f2] text-sm font-semibold text-[#a63655]">
                  {idx + 1}
                </span>
                <h3 className="text-xl text-[#2f2b33]">
                  {isEn ? phaseEn : phaseZh}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:px-0">
          <ScrollInView>
            <div className="rounded-[24px] bg-[#f7eee7] px-8 py-10 shadow-[0_24px_60px_rgba(45,28,36,0.12)]">
              <span className="font-script text-3xl text-[#c86b79]">
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
          <span className="font-script text-3xl text-[#c86b79]">
            {isEn ? 'Ready to begin the OvuMethod?' : '准备开启 OvuMethod 吗？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Schedule a discovery call or join our next virtual workshop'
              : '预约了解电话或加入在线工作坊'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? "We'll review your history, map out the three phases specific to your body, and outline the timeline and investment that fit your goals."
              : '我们将共同梳理您的病史，规划适合您的三大阶段，并说明对应的时间与投入。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              {isEn ? 'Book discovery call' : '预约了解电话'}
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
