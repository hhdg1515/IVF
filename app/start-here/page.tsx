'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { SectionWithNumber } from '@/components/ui/SectionWithNumber'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

type ResourceDetail = {
  id: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  bulletsEn: string[]
  bulletsZh: string[]
}

type ChecklistBlock = {
  titleEn: string
  titleZh: string
  itemsEn: string[]
  itemsZh: string[]
}

type TimelineStep = {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
}

const resourceDetails: ResourceDetail[] = [
  {
    id: 'fertility-guide',
    titleEn: 'Fertility optimization guide',
    titleZh: '生育力优化指南',
    descEn: 'A 28-page blueprint that prepares your body with nutrition, lifestyle, and lab checklists.',
    descZh: '28 页的蓝图，涵盖营养、生活方式与化验清单，帮助身体做好准备。',
    bulletsEn: [
      'Four-week nutrition and supplementation plan created by IVY dietitians',
      'Lifestyle adjustments for sleep hygiene, stress management, and environmental toxins',
      'Lab checklist with target ranges and commentary from your physician',
    ],
    bulletsZh: [
      'IVY 营养师制定的四周营养与补充方案',
      '围绕睡眠、压力与环境毒素的生活方式建议',
      '附目标参考值与医生说明的化验清单',
    ],
  },
  {
    id: 'ovumethod-quiz',
    titleEn: 'OvuMethod compatibility guide',
    titleZh: 'OvuMethod 适配指南',
    descEn: 'A self-assessment that shows which OvuMethod phase you need and the actions inside each stage.',
    descZh: '自测问卷帮助判断您所处的 OvuMethod 阶段，并了解各阶段需要完成的行动。',
    bulletsEn: [
      'Determine whether you are in the discover, balance, or thrive phase',
      'Sample integrative schedule with nutrition, acupuncture, and counseling touchpoints',
      'Consultation-ready checklist so your roadmap feels clear',
    ],
    bulletsZh: [
      '判断自己处于探索、平衡或繁盛阶段',
      '整合护理时间表示例，包含营养、针灸与心理支持',
      '会诊携带清单，确保路线图一目了然',
    ],
  },
  {
    id: 'workshop-library',
    titleEn: 'Virtual workshop library',
    titleZh: '线上工作坊资料库',
    descEn: 'Replay physician-led classes covering egg health, male fertility, donor coordination, and emotional wellness.',
    descZh: '回看医生主持的课程，主题涵盖卵子健康、男性生育、捐赠协调与身心照护。',
    bulletsEn: [
      'Monthly live Zoom sessions with bilingual Q&A',
      'On-demand recordings with downloadable slides and resource lists',
      'Invites to small-group coaching circles and community chats',
    ],
    bulletsZh: [
      '每月提供中英双语的 Zoom 直播问答',
      '按需回看录像，并可下载讲义与资源列表',
      '专属邀请，加入小组辅导与社群交流',
    ],
  },
]

const readinessChecklist: ChecklistBlock[] = [
  {
    titleEn: 'Clarify your goals',
    titleZh: '明确目标',
    itemsEn: [
      'Decide whether you are growing your family soon, preserving fertility, or exploring donor / gestational services',
      'List your medical history, prior treatments, and current supplements',
    ],
    itemsZh: [
      '确定是近期备孕、保存生育力，还是探索捐赠／代孕服务',
      '整理病史、既往治疗记录以及当前使用的补充品',
    ],
  },
  {
    titleEn: 'Collect recent testing',
    titleZh: '整理近期检测',
    itemsEn: [
      'Gather hormone labs (AMH, FSH, LH, thyroid), pelvic ultrasound, and semen analysis',
      'Prepare reports or plan to complete testing in our on-site lab',
    ],
    itemsZh: [
      '准备激素化验（AMH、FSH、LH、甲状腺）、盆腔超声与精液分析',
      '携带报告或安排在院内实验室完成检测',
    ],
  },
  {
    titleEn: 'Plan your support',
    titleZh: '安排支持体系',
    itemsEn: [
      'Decide who will join consultations (partner, interpreter, support friend)',
      'Review finances and insurance so planning stays transparent',
    ],
    itemsZh: [
      '决定由谁陪同会诊（伴侣、翻译或支持朋友）',
      '了解财务与保险状况，方便进行透明规划',
    ],
  },
]

const postBookingTimeline: TimelineStep[] = [
  {
    titleEn: 'Concierge welcome call',
    titleZh: '礼宾欢迎电话',
    descEn:
      'We confirm your appointment, gather your history, and email the readiness checklist and records upload link.',
    descZh: '确认会诊时间、了解病史，并发送准备清单与资料上传链接。',
  },
  {
    titleEn: 'Records & lab coordination',
    titleZh: '资料与化验协调',
    descEn:
      'Send recent labs or schedule testing at IVY. Our team translates and summarizes everything for your physician.',
    descZh: '上传近期化验或预约在 IVY 完成，我们会翻译整理后提供给医生。',
  },
  {
    titleEn: 'Consult day experience',
    titleZh: '会诊当天体验',
    descEn:
      'Meet your physician, integrative specialist, and concierge. Leave with a personalized OvuMethod roadmap.',
    descZh: '与医生、整合专家及礼宾团队见面，并带走专属的 OvuMethod 路线图。',
  },
  {
    titleEn: 'Post-visit follow-up',
    titleZh: '会诊后跟进',
    descEn:
      'Receive a detailed recap, transparent cost outline, and calendar invite for your first integrative session.',
    descZh: '收到详细总结、费用说明以及首次整合护理的日历邀请。',
  },
]

export default function StartHerePage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Start your journey' : '旅程起点'}
        backgroundImage="/images/start.jpg"
        title={
          isEn
            ? 'Everything you need to begin with IVY Fertility'
            : '开启 IVY 生育旅程所需的一切'
        }
        subtitle={
          isEn
            ? 'Use this guided path to gather records, book your consult, and explore resources that align with your goals.'
            : '按照引导路径准备资料、预约会诊，并了解符合您目标的资源。'
        }
        primaryCtaText={isEn ? 'Book your consultation' : '预约会诊'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'View the starter guide' : '查看入门指南'}
        secondaryCtaHref="#fertility-guide"
        stats={[
          { value: '48h', label: isEn ? 'Consult scheduling window' : '48 小时内安排会诊' },
          { value: '3', label: isEn ? 'Readiness milestones' : '3 项准备要点' },
          { value: '100%', label: isEn ? 'Personalized next steps' : '100% 专属下一步' },
        ]}
        highlight={{
          title: isEn ? 'First time with IVY?' : '第一次接触 IVY？',
          description: isEn
            ? 'Our concierge reviews your history, coordinates records, and supports you before, during, and after your visit.'
            : '礼宾团队会梳理病史、协调资料，并在就诊前后全程支持。',
        }}
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'Start with these resources' : '先从这些资源开始'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Preview the materials before your first consultation'
                  : '在首次会诊前预览相关资料'}
              </h2>
            </div>
          </ScrollInView>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {resourceDetails.map(({ id, titleEn, titleZh, descEn, descZh }, idx) => (
            <ScrollInView key={id} delay={idx * 0.1}>
              <Card className="h-full px-8 py-10">
                <h3 className="text-xl text-[#2f2b33]">
                  {isEn ? titleEn : titleZh}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5a555d]">
                  {isEn ? descEn : descZh}
                </p>
                <Link href={`#${id}`} className="mt-6 inline-flex">
                  <Button variant="ghost" size="md">
                    {isEn ? 'View details' : '查看详情'}
                  </Button>
                </Link>
              </Card>
            </ScrollInView>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-[#f7eee7] py-24" id="resources">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'What each resource includes' : '资源内容一览'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Explore the guides before you arrive'
                  : '在来访前先浏览指南内容'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 space-y-12">
            {resourceDetails.map(({ id, titleEn, titleZh, bulletsEn, bulletsZh }) => (
              <ScrollInView key={id}>
                <Card id={id} className="px-8 py-10">
                  <h3 className="text-2xl text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                  <ul className="mt-4 space-y-3 text-[15px] text-[#5a555d]">
                    {(isEn ? bulletsEn : bulletsZh).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      <div id="readiness-checklist">
        <SectionWithNumber
          number={1}
          title={isEn ? 'How to prepare for your consult' : '如何为会诊做好准备'}
          subtitle={
            isEn
              ? 'Follow these milestones so your medical team can create a precise plan'
              : '完成以下步骤，帮助医疗团队制定精确方案'
          }
          content={
            <div className="grid gap-6 md:grid-cols-3">
              {readinessChecklist.map(({ titleEn, titleZh, itemsEn, itemsZh }) => (
                <div key={titleEn} className="rounded-[16px] bg-[#f7eee7] px-6 py-6 shadow-inner">
                  <h3 className="text-lg text-[#2f2b33]">
                    {isEn ? titleEn : titleZh}
                  </h3>
                  <ul className="mt-3 space-y-2 text-[15px] text-[#5a555d]">
                    {(isEn ? itemsEn : itemsZh).map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          }
          imageSrc="/images/arrange.jpg"
          imageAlt={isEn ? 'Preparing for consult' : '会诊准备'}
          backgroundColor="cream"
          ctaText={isEn ? 'View readiness checklist' : '查看准备清单'}
          ctaHref="#readiness-checklist"
        />
      </div>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-script text-3xl text-[#c86b79]">
                {isEn ? 'What happens after you book' : '预约之后会发生什么'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'A concierge-guided timeline from confirmation to your personalized plan'
                  : '礼宾团队陪伴，从确认到专属方案的完整时间轴'}
              </h2>
            </div>
          </ScrollInView>

          <div className="mt-12 space-y-8 border-l border-[#e2d0c1] pl-8 md:pl-12">
            {postBookingTimeline.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
              <ScrollInView key={titleEn} delay={idx * 0.1} className="relative pl-6">
                <span className="absolute -left-8 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#a63655] bg-[#fdf7f2] text-sm font-semibold text-[#a63655]">
                  {`${idx + 1}`.padStart(2, '0')}
                </span>
                <h3 className="text-xl text-[#2f2b33]">
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
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-script text-3xl text-[#c86b79]">
            {isEn ? 'We’re here when you’re ready' : '随时在此，等您准备好'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Choose the next step that feels right'
              : '选择最适合您的下一步'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button variant="primary" size="lg">
                {isEn ? 'Schedule consultation' : '预约会诊'}
              </Button>
            </Link>
            <Link href="/faq#patient-guide" className="inline-flex">
              <Button variant="outline" size="lg">
                {isEn ? 'View patient guide' : '查看患者指南'}
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
