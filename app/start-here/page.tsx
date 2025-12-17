'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { GAD7Assessment } from '@/components/GAD7Assessment'
import { WHO5Assessment } from '@/components/WHO5Assessment'
import { GQ6Assessment } from '@/components/GQ6Assessment'
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

type ResourceDetail = {
  id: string
  numberEn: string
  numberZh: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  bulletsEn: string[]
  bulletsZh: string[]
  iconPath: string
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
    numberEn: '01',
    numberZh: '01',
    titleEn: 'Fertility optimization guide',
    titleZh: '生育力优化指南',
    descEn: 'A 28-page blueprint that prepares your body with nutrition, lifestyle, and lab checklists.',
    descZh: '28 页的蓝图，涵盖营养、生活方式与化验清单，帮助身体做好准备。',
    bulletsEn: [
      'Four-week nutrition and supplementation plan created by IVY dietitians',
      'Lifestyle tips for better sleep, less stress, and a cleaner environment.',
      'Lab checklist with target ranges and commentary from your physician',
    ],
    bulletsZh: [
      'IVY 营养师制定的四周营养与补充方案',
      '围绕睡眠、压力与环境毒素的生活方式建议',
      '附目标参考值与医生说明的化验清单',
    ],
    iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', // Document icon
  },
  {
    id: 'ovumethod-quiz',
    numberEn: '02',
    numberZh: '02',
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
    iconPath: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z', // Clipboard/checklist icon
  },
  {
    id: 'workshop-library',
    numberEn: '03',
    numberZh: '03',
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
    iconPath: 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z', // Play/video icon
  },
]

const readinessChecklist: ChecklistBlock[] = [
  {
    titleEn: 'Clarify your vision',
    titleZh: '明确您的愿景',
    itemsEn: [
      'Reflect on your timeline: Are you looking to grow your family soon, preserve fertility for the future, or explore alternative pathways like donor or gestational services?',
      'Start gathering your medical story: past diagnoses, previous treatments, current medications, and supplements you\'re taking',
    ],
    itemsZh: [
      '思考您的时间规划：是否想近期备孕、保存生育力，还是探索捐赠或代孕等其他途径？',
      '开始整理医疗史：既往诊断、过往治疗、当前用药与补充品',
    ],
  },
  {
    titleEn: 'Gather your records',
    titleZh: '整理您的记录',
    itemsEn: [
      'Collect recent hormone labs (AMH, FSH, LH, thyroid), imaging reports (pelvic ultrasound), and partner testing (semen analysis) if applicable',
      'Don\'t worry if you\'re missing tests—our team can order them and we\'ll complete the full workup together during your first visit',
    ],
    itemsZh: [
      '准备近期激素检查（AMH、FSH、LH、甲状腺）、影像报告（盆腔超声）与伴侣检测（精液分析，如适用）',
      '如果您缺少某些检测也不用担心——我们的团队可以安排，并在初诊时完成全面评估',
    ],
  },
  {
    titleEn: 'Build your support circle',
    titleZh: '建立支持圈',
    itemsEn: [
      'Decide who will join your consultation—your partner, a friend, an interpreter, or anyone who supports you',
      'Take time to reflect on your financial and insurance situation so we can create transparent, aligned planning with you',
    ],
    itemsZh: [
      '确定谁会陪伴您的会诊——伴侣、朋友、翻译或任何支持您的人',
      '理解您的财务与保险状况，这样我们可以透明地为您规划',
    ],
  },
]

const postBookingTimeline: TimelineStep[] = [
  {
    titleEn: 'Your concierge welcome call',
    titleZh: '礼宾欢迎电话',
    descEn:
      'Within 24 hours, a warm voice from our team reaches out to confirm your visit, hear your story, and answer any early questions. We\'ll email you a secure link to upload records and send the pre-visit resources so you can get started anytime.',
    descZh: '预约后 24 小时内，我们的团队会亲切地与您联系，确认会诊时间、了解您的故事并回答初期疑问。我们会发送安全链接让您上传资料，并提供会诊前的资源，让您随时开始准备。',
  },
  {
    titleEn: 'Records review & lab coordination',
    titleZh: '资料审查与化验协调',
    descEn:
      'The week before your visit, send us your records and recent test results, or schedule any missing labs at our on-site facility. Our medical assistant reviews everything, ensures it\'s complete, and creates a detailed summary for your physician so they can prepare a thoughtful, informed consultation.',
    descZh: '会诊前一周，上传您的记录与近期检测结果，或在我们的院内实验室安排任何缺失的检查。我们的医疗助理审查所有资料，确保完整，并为医生创建详细总结，这样医生可以为富有同理心且信息充分的会诊做准备。',
  },
  {
    titleEn: 'Your consultation experience',
    titleZh: '您的会诊体验',
    descEn:
      'You\'ll meet your physician and integrative wellness specialist face-to-face. Expect a deep conversation about your goals, a thorough clinical review, and a moment where everything clicks into place. You\'ll walk out with a personalized OvuMethod roadmap designed exactly for you and a clear sense of what comes next.',
    descZh: '您将与医生和整合健康专家面对面见面。这是一次深入的对话，涵盖您的目标与临床检查。在这一刻，一切都将变得清晰。您将带走一份专为您设计的个性化 OvuMethod 路线图，以及对下一步的清晰认识。',
  },
  {
    titleEn: 'Next steps & your care plan',
    titleZh: '下一步与护理计划',
    descEn:
      'Within 48 hours after your visit, you\'ll receive a detailed written summary, a transparent cost outline tailored to your needs, and calendar invites for your first integrative sessions. Your care team is already thinking about how to best support you. This is where your journey truly begins.',
    descZh: '会诊后 48 小时内，您将收到详细的访问总结、根据您需求定制的费用说明，以及首次整合护理会议的日历邀请。您的护理团队已经在思考如何最好地支持您。这是您旅程真正开始的地方。',
  },
]

type AssessmentType = 'gad7' | 'who5' | 'gq6' | null

export default function StartHerePage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const [activeAssessment, setActiveAssessment] = useState<AssessmentType>(null)

  const navigationSections = [
    { id: 'assessment', titleEn: 'Assessment', titleZh: '评估' },
    { id: 'prepare', titleEn: 'Prepare', titleZh: '准备' },
    { id: 'journey', titleEn: 'Journey', titleZh: '旅程' },
    { id: 'get-started', titleEn: 'Get Started', titleZh: '开始' },
  ]

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
            ? 'Get your records, book a consult, and find what you need—all in one place.'
            : '在同一个页面完成资料准备、预约会诊与资源查找。'
        }
        primaryCtaText={isEn ? 'Book your consultation' : '预约会诊'}
        primaryCtaHref="/contact"
        highlight={{
          title: isEn ? 'First time with IVY?' : '第一次接触 IVY？',
          description: isEn
            ? 'Our team handles your records and supports you every step of the way. We\'ll make this process simple and clear.'
            : '我们的团队为您处理资料，并在每一步提供支持。我们会让这个过程简单清晰。',
        }}
        priority
      />

      <div className="relative">
        {/* Left-side Navigation Indicator */}
        <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col items-center gap-3">
            {navigationSections.map(({ id, titleEn, titleZh }, idx) => (
              <a
                key={id}
                href={`#${id}`}
                className="group flex items-center gap-3"
                title={isEn ? titleEn : titleZh}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-[#e2d0c1] text-sm font-semibold text-[#5a555d] group-hover:border-[#a63655] group-hover:text-[#a63655] transition-all shadow-sm">
                  {idx + 1}
                </span>
                <span className="opacity-0 group-hover:opacity-100 absolute left-14 whitespace-nowrap bg-[#2f2b33] text-white text-xs px-3 py-1 rounded transition-opacity">
                  {isEn ? titleEn : titleZh}
                </span>
              </a>
            ))}
          </div>
        </div>

	        {/* Section 1: Resources (artistic poster style) */}
	        <section id="resources" className="relative overflow-hidden bg-[#e8d5d0] py-24 md:py-32">
	          <GradientOrb className="w-[760px] h-[760px] -top-96 -left-96 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.14),_transparent_60%)]" />
	          <GradientOrb className="w-[720px] h-[720px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.55),_transparent_60%)]" />
	          <ConcentricRings className="w-72 h-72 -right-36 top-24 text-white/25" />
	          <OrganicBlob className="w-[560px] h-[560px] -top-72 -right-80 text-white/25 blur-3xl" variant={2} />
	          <FlowingCurve className="bottom-12 left-0 w-72 text-white/20" direction="right" />

            {/* Fertility-themed decorations */}
            <div className="animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <FloatingHearts className="left-[3%] top-1/4 w-24 h-24 text-[#a63655] opacity-30" />
            </div>
            <div className="animate-float hidden xl:block" style={{ animationDelay: '2s' }}>
              <BloomingFlower className="right-[5%] bottom-1/3 w-20 h-20 text-[#c86b79] opacity-25" />
            </div>
            <div className="animate-gentle-pulse hidden lg:block">
              <RainbowOrb className="-left-16 bottom-40" size="md" />
            </div>

	          <div className="mx-auto max-w-5xl px-4 lg:px-0">
	            <ScrollInView>
	              <div className="mx-auto max-w-3xl text-center mb-16">
                <span className="font-serif italic text-3xl text-[#c86b79]">
                  {isEn ? 'Resources for your journey' : '旅程资源'}
                </span>
                <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                  {isEn ? 'Explore at your own pace' : '按您的节奏探索'}
                </h2>
                <p className="mt-5 text-[17px] leading-relaxed text-[#5a555d]">
                  {isEn
                    ? 'Free resources to help you understand your fertility journey—no commitment required.'
                    : '免费资源助您理解生育之旅——无需承诺。'}
                </p>
              </div>
            </ScrollInView>

            <div className="space-y-20 md:space-y-28">
              {resourceDetails.map(({ id, numberEn, numberZh, titleEn, titleZh, descEn, descZh, bulletsEn, bulletsZh, iconPath }, idx) => (
                <ScrollInView key={id} delay={idx * 0.1}>
                  <div className={`relative grid items-start gap-8 md:grid-cols-[140px_1fr] md:gap-12 ${idx === 1 ? 'md:ml-56' : ''} ${idx === 2 ? 'md:ml-[28rem]' : ''}`}>

                    {/* Number + Icon */}
                    <div className="relative z-10">
                      <div className="text-[72px] font-serif font-light leading-none text-[#a63655] md:text-[96px]">
                        {isEn ? numberEn : numberZh}
                      </div>
                      <svg
                        className="absolute -right-16 top-4 h-14 w-14 text-[#a63655] md:left-0 md:top-full md:ml-6 md:mt-4 md:h-16 md:w-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-[28px] font-serif text-[#a63655] md:text-[32px]">
                        {isEn ? titleEn : titleZh}
                      </h3>
                      <p className="mt-4 text-[16px] leading-relaxed text-[#5a555d]">
                        {isEn ? descEn : descZh}
                      </p>
                      <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-[#5a555d]">
                        {(isEn ? bulletsEn : bulletsZh).map((item, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2">
                            <span className="text-[#a63655] mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollInView>
              ))}
            </div>
          </div>
        </section>

	        {/* Transition / Divider */}
	        <section className="relative bg-gradient-to-b from-[#e8d5d0] to-white py-20">
	          <FlowingCurve className="top-10 left-1/2 w-[520px] -translate-x-1/2 text-[#a63655]/20" direction="right" />
	          <GradientOrb className="w-[520px] h-[520px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.18),_transparent_70%)]" />

	          <div className="mx-auto max-w-4xl px-4 text-center lg:px-0">
	            <ScrollInView>
	              <div className="space-y-6">
                <h3 className="text-[32px] font-serif text-[#2f2b33]">
                  {isEn ? 'Before you begin' : '在开始之前'}
                </h3>
                <p className="text-[17px] leading-relaxed text-[#a63655] font-medium">
                  {isEn ? 'Understanding your mental wellbeing' : '了解您的心理健康状况'}
                </p>
                <div className="flex justify-center pt-4">
                  <svg
                    className="h-8 w-8 text-[#a63655] animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </ScrollInView>
          </div>
        </section>

	        {/* Assessment Section */}
	        <section id="assessment" className="relative bg-[#faf6f3] py-24 overflow-hidden">
	          {/* Decorative elements (scheme A: soft glow + subtle linework) */}
	          <GradientOrb className="w-[640px] h-[640px] -top-72 -left-72 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.18),_transparent_60%)]" />
	          <GradientOrb className="w-[720px] h-[720px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.45),_transparent_60%)]" />
	          <ConcentricRings className="w-56 h-56 -right-28 top-1/2 -translate-y-1/2 text-[#a63655]/15" />
	          <OrganicBlob className="w-[520px] h-[520px] -top-72 right-10 text-[#a63655]/5 blur-3xl" variant={1} />
	          <FlowingCurve className="bottom-14 -left-10 w-64 text-[#a63655]/18" direction="right" />

            {/* Fertility-themed decorations */}
            <div className="animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
              <FertilitySymbol className="left-[4%] bottom-1/4 w-20 h-20 text-[#a63655] opacity-35" />
            </div>
            <div className="animate-gentle-pulse hidden xl:block">
              <FloatingHearts className="right-[6%] top-1/3 w-20 h-20 text-[#c86b79] opacity-25" />
            </div>

	          <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
	            <ScrollInView>
              <div className="mx-auto max-w-3xl text-center mb-12">
                <span className="font-serif italic text-[26px] text-[#a63655]">
                  {isEn ? 'Mental Wellbeing Check' : '心理健康检查'}
                </span>
                <h2 className="mt-4 text-[36px] leading-[1.2] text-[#212529]">
                  {isEn ? 'Assess your anxiety levels' : '评估您的焦虑水平'}
                </h2>
                <p className="mt-6 text-[18px] leading-[1.75] text-[#495057]">
                  {isEn
                    ? 'Whether you\'re just starting your fertility journey or already in treatment, understanding your mental health is an important part of holistic care. This quick 2-minute assessment can help you and your care team provide better support.'
                    : '无论您是刚刚开始生育旅程还是已经在接受治疗，了解您的心理健康都是整体护理的重要组成部分。这个快速的 2 分钟评估可以帮助您和您的护理团队提供更好的支持。'}
                </p>
              </div>
            </ScrollInView>

{activeAssessment === null ? (
              <ScrollInView delay={0.2}>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {/* GAD-7 Card */}
                  <div
                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-10 cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-[#e8d5d0]/50"
                    onClick={() => setActiveAssessment('gad7')}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a63655] to-[#c86b79] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center space-y-5">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f7ebe5] to-[#f7d9d9] group-hover:from-[#a63655]/10 group-hover:to-[#c86b79]/10 transition-colors">
                        <svg className="h-10 w-10 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[22px] font-serif text-[#212529]">GAD-7</h3>
                        <p className="text-[15px] text-[#a63655] font-medium mt-1">
                          {isEn ? 'Anxiety Screening' : '焦虑筛查'}
                        </p>
                        <p className="text-[15px] leading-[1.6] text-[#495057] mt-3">
                          {isEn ? 'Assess anxiety symptoms over the past 2 weeks' : '评估过去2周的焦虑症状'}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-[14px] text-[#6c757d]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {isEn ? '7 questions • ~2 min' : '7题 • 约2分钟'}
                      </div>
                    </div>
                  </div>

                  {/* WHO-5 Card */}
                  <div
                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-10 cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-[#e8d5d0]/50"
                    onClick={() => setActiveAssessment('who5')}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c86b79] to-[#e8a5a5] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center space-y-5">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f7ebe5] to-[#f7d9d9] group-hover:from-[#a63655]/10 group-hover:to-[#c86b79]/10 transition-colors">
                        <svg className="h-10 w-10 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[22px] font-serif text-[#212529]">WHO-5</h3>
                        <p className="text-[15px] text-[#a63655] font-medium mt-1">
                          {isEn ? 'Well-Being Index' : '幸福感指数'}
                        </p>
                        <p className="text-[15px] leading-[1.6] text-[#495057] mt-3">
                          {isEn ? 'Measure your mental well-being and quality of life' : '测量心理健康和生活质量'}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-[14px] text-[#6c757d]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {isEn ? '5 questions • ~1 min' : '5题 • 约1分钟'}
                      </div>
                    </div>
                  </div>

                  {/* GQ-6 Card */}
                  <div
                    className="relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-10 cursor-pointer group transition-all duration-300 hover:-translate-y-1 border border-[#e8d5d0]/50"
                    onClick={() => setActiveAssessment('gq6')}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e8a5a5] to-[#f7c5c5] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-center space-y-5">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#f7ebe5] to-[#f7d9d9] group-hover:from-[#a63655]/10 group-hover:to-[#c86b79]/10 transition-colors">
                        <svg className="h-10 w-10 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[22px] font-serif text-[#212529]">GQ-6</h3>
                        <p className="text-[15px] text-[#a63655] font-medium mt-1">
                          {isEn ? 'Gratitude Assessment' : '感恩量表'}
                        </p>
                        <p className="text-[15px] leading-[1.6] text-[#495057] mt-3">
                          {isEn ? 'Understand your gratitude orientation and potential' : '了解您的感恩倾向和潜力'}
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-[14px] text-[#6c757d]">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {isEn ? '6 questions • ~2 min' : '6题 • 约2分钟'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Note */}
                <div className="mt-10 max-w-3xl mx-auto">
                  <div className="flex gap-4 px-6 py-5 rounded-xl bg-gradient-to-r from-[#f7ebe5]/60 to-[#f7d9d9]/40 border border-[#e8d5d0]/30">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#a63655]/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-[15px] text-[#495057]">
                      <p className="font-medium text-[#212529] mb-1">
                        {isEn ? 'Complete what feels right for you' : '选择适合您的评估'}
                      </p>
                      <p className="leading-[1.7]">
                        {isEn
                          ? 'You can take one, two, or all three assessments. Each provides unique insights into your mental health. All responses are private and not stored.'
                          : '您可以进行一个、两个或全部三个评估。每个评估都能提供关于您心理健康的独特见解。所有回答都是私密的，不会被存储。'}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollInView>
            ) : activeAssessment === 'gad7' ? (
              <div>
                <div className="mb-6 flex justify-center">
                  <Button onClick={() => setActiveAssessment(null)} variant="outline" size="md">
                    ← {isEn ? 'Back to Assessment Selection' : '返回评估选择'}
                  </Button>
                </div>
                <GAD7Assessment />
              </div>
            ) : activeAssessment === 'who5' ? (
              <div>
                <div className="mb-6 flex justify-center">
                  <Button onClick={() => setActiveAssessment(null)} variant="outline" size="md">
                    ← {isEn ? 'Back to Assessment Selection' : '返回评估选择'}
                  </Button>
                </div>
                <WHO5Assessment />
              </div>
            ) : (
              <div>
                <div className="mb-6 flex justify-center">
                  <Button onClick={() => setActiveAssessment(null)} variant="outline" size="md">
                    ← {isEn ? 'Back to Assessment Selection' : '返回评估选择'}
                  </Button>
                </div>
                <GQ6Assessment />
              </div>
            )}
          </div>
        </section>

	        {/* Section 2: Prepare */}
	        <section id="prepare" className="relative bg-white py-24 overflow-hidden">
	          {/* Decorative elements (scheme A: soft glow + subtle linework) */}
	          <GradientOrb className="w-[720px] h-[720px] -bottom-80 -right-80 bg-[radial-gradient(circle_at_center,_rgba(247,217,217,0.60),_transparent_60%)]" />
	          <GradientOrb className="w-[560px] h-[560px] left-1/3 -top-80 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.10),_transparent_65%)]" />
	          <FlowingCurve className="top-16 -left-10 w-64 text-[#a63655]/25" direction="right" />
	          <ConcentricRings className="w-64 h-64 -left-32 bottom-16 text-[#c86b79]/18" />
	          <OrganicBlob className="w-[640px] h-[640px] -top-[420px] -right-[420px] text-[#a63655]/5 blur-3xl" variant={2} />

            {/* Fertility-themed decorations */}
            <div className="animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <BloomingFlower className="right-[4%] top-32 w-20 h-20 text-[#c86b79] opacity-25" />
            </div>
            <div className="animate-float hidden xl:block" style={{ animationDelay: '2.5s' }}>
              <FloatingHearts className="left-[3%] bottom-1/4 w-20 h-20 text-[#a63655] opacity-30" />
            </div>

	          <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
	            <ScrollInView>
              <div className="mx-auto max-w-3xl text-center">
                <span className="font-serif italic text-[26px] text-[#a63655]">
                  {isEn ? 'Preparing for your visit' : '为会诊做准备'}
                </span>
                <h2 className="mt-4 text-[36px] leading-[1.2] text-[#212529]">
                  {isEn ? 'What to have ready' : '需要准备什么'}
                </h2>
              </div>
            </ScrollInView>

            <div className="mt-14 flex flex-col items-center gap-6">
              {readinessChecklist.map(({ titleEn, titleZh, itemsEn, itemsZh }, idx) => (
                <ScrollInView key={titleEn} delay={idx * 0.1} className="w-full">
                  <div className="relative mx-auto max-w-3xl">
                    <div className="group relative bg-gradient-to-br from-white to-[#faf6f3] rounded-2xl px-8 py-8 border border-[#e8d5d0]/50 transition-all duration-300 hover:-translate-y-1">
                      {/* Accent line */}
                      <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-[#a63655] to-[#c86b79] rounded-full" />

                      <div className="flex items-start gap-5 pl-4">
                        <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#f7ebe5] to-[#f7d9d9] text-[22px] font-serif text-[#a63655]">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[20px] text-[#212529] font-medium">
                            {isEn ? titleEn : titleZh}
                          </h3>
                          <ul className="mt-4 space-y-3 text-[16px] text-[#495057] leading-[1.7]">
                            {(isEn ? itemsEn : itemsZh).map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c86b79] flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Flow connector */}
                    {idx < readinessChecklist.length - 1 && (
                      <div className="flex justify-center my-3">
                        <div className="h-8 w-px bg-gradient-to-b from-[#c86b79]/40 to-transparent" />
                      </div>
                    )}
                  </div>
                </ScrollInView>
              ))}
            </div>
          </div>
        </section>

	        {/* Section 3: Journey */}
	        <section id="journey" className="relative bg-[#f7eee7] py-24 overflow-hidden">
	          {/* Decorative elements (scheme A: soft glow + subtle linework) */}
	          <GradientOrb className="w-[760px] h-[760px] -top-80 -left-80 bg-[radial-gradient(circle_at_center,_rgba(166,54,85,0.12),_transparent_60%)]" />
	          <GradientOrb className="w-[720px] h-[720px] -bottom-96 -right-96 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.20),_transparent_60%)]" />
	          <ConcentricRings className="w-56 h-56 -right-28 top-1/2 -translate-y-1/2 text-[#c86b79]/20" />
	          <OrganicBlob className="w-[520px] h-[520px] -bottom-72 left-10 text-[#c86b79]/8 blur-3xl" variant={3} />
	          <FlowingCurve className="bottom-16 right-0 w-72 text-[#a63655]/18" direction="left" />

            {/* Fertility-themed decorations */}
            <div className="animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
              <FertilitySymbol className="left-[5%] top-1/3 w-20 h-20 text-[#a63655] opacity-30" />
            </div>
            <div className="animate-float hidden xl:block" style={{ animationDelay: '2s' }}>
              <BloomingFlower className="right-[4%] bottom-1/4 w-20 h-20 text-[#c86b79] opacity-25" />
            </div>
            <div className="animate-gentle-pulse hidden lg:block">
              <RainbowOrb className="-right-16 top-40" size="sm" />
            </div>

	          <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
	            <ScrollInView>
              <div className="mx-auto max-w-3xl text-center">
                <span className="font-serif italic text-[26px] text-[#a63655]">
                  {isEn ? 'After you book' : '预约之后'}
                </span>
                <h2 className="mt-4 text-[36px] leading-[1.2] text-[#212529]">
                  {isEn
                    ? 'Your journey to consultation'
                    : '通往初诊的旅程'}
                </h2>
                <p className="mt-6 text-[18px] leading-[1.75] text-[#495057]">
                  {isEn
                    ? 'Here\'s what happens from the moment you book until your first visit—and beyond.'
                    : '从您预约的那一刻起直到首次会诊及之后的整个过程。'}
                </p>
              </div>
            </ScrollInView>

            <div className="mt-16 relative max-w-4xl mx-auto">
              {/* Timeline connector line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e8d5d0] via-[#c86b79] to-[#e8d5d0] transform -translate-x-1/2" />

              {postBookingTimeline.map(({ titleEn, titleZh, descEn, descZh }, idx) => (
                <ScrollInView key={titleEn} delay={idx * 0.1}>
                  <div className={`relative mb-12 md:mb-16 ${idx % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}>
                    {/* Timeline dot with ring */}
                    <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="h-5 w-5 rounded-full bg-[#a63655] border-[3px] border-white ring-2 ring-[#c86b79]/30" />
                    </div>

                    <div className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-8 border border-[#e8d5d0]/50 transition-all duration-300 hover:-translate-y-1 ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      {/* Step number badge */}
                      <div className="absolute -top-3 left-8 px-4 py-1 bg-gradient-to-r from-[#a63655] to-[#c86b79] rounded-full text-white text-[13px] font-medium tracking-wide">
                        {isEn ? `Step ${idx + 1}` : `第 ${idx + 1} 步`}
                      </div>

                      <div className="flex items-start gap-4 pt-2">
                        <div className="flex-shrink-0 md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#a63655] to-[#c86b79] text-white font-semibold">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[20px] text-[#212529] font-medium">
                            {isEn ? titleEn : titleZh}
                          </h3>
                          <p className="mt-3 text-[16px] leading-[1.7] text-[#495057]">
                            {isEn ? descEn : descZh}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollInView>
              ))}
            </div>
          </div>
        </section>

	        {/* Section 4: Get Started CTA */}
	        <section id="get-started" className="relative bg-gradient-to-b from-white to-[#faf6f3] py-28 overflow-hidden">
	          {/* Decorative elements (scheme A: centered halo) */}
	          <GradientOrb className="w-[880px] h-[880px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(200,107,121,0.18),_transparent_60%)]" />
	          <ConcentricRings className="w-[560px] h-[560px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#c86b79]/25" />
	          <OrganicBlob className="w-[640px] h-[640px] -bottom-[420px] -left-[420px] text-[#a63655]/6 blur-3xl" variant={1} />
	          <OrganicBlob className="w-[560px] h-[560px] -top-[360px] -right-[360px] text-[#c86b79]/10 blur-3xl" variant={2} />
	          <FlowingCurve className="top-20 left-0 w-56 text-[#a63655]/14" direction="right" />
	          <FlowingCurve className="bottom-24 right-0 w-56 text-[#a63655]/14" direction="left" />

            {/* Fertility-themed decorations */}
            <div className="animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <FloatingHearts className="left-[8%] top-1/3 w-20 h-20 text-[#a63655] opacity-35" />
            </div>
            <div className="animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
              <FloatingHearts className="right-[8%] bottom-1/3 w-16 h-16 text-[#c86b79] opacity-25" />
            </div>
            <div className="animate-gentle-pulse hidden xl:block">
              <BloomingFlower className="left-[5%] bottom-24 w-16 h-16 text-[#a63655] opacity-20" />
            </div>

	          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center">
	            <span className="font-serif italic text-[26px] text-[#a63655]">
              {isEn ? "We're here when you're ready" : '随时在此，等您准备好'}
            </span>
            <h2 className="text-[36px] leading-[1.2] text-[#212529]">
              {isEn ? 'Choose the next step' : '选择下一步'}
            </h2>
            <p className="max-w-xl text-[18px] leading-[1.75] text-[#495057]">
              {isEn
                ? 'Whether you\'re ready to book or want to learn more, we\'re here to support you.'
                : '无论您准备预约还是想了解更多，我们都在这里为您提供支持。'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
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
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
