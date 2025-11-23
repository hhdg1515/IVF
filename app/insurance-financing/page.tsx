'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import {
  insurancePlans,
  financingOptions,
  discountPrograms,
  verificationSteps,
  stateMandates,
  financialPolicies,
} from '@/lib/insurance-data'
import Link from 'next/link'

export default function InsuranceFinancingPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Insurance & Financing' : '保险与融资'}
        backgroundImage="/images/service.jpg"
        title={isEn ? 'Making Fertility Care Affordable' : '让生育诊疗触手可及'}
        subtitle={isEn ? 'We accept most major insurance plans and offer flexible financing options' : '我们接受大多数主要保险计划并提供灵活的融资选项'}
        primaryCtaText={isEn ? 'Verify My Insurance' : '验证我的保险'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Explore Financing' : '探索融资'}
        secondaryCtaHref="#financing"
        stats={[
          { value: '15+', label: isEn ? 'Insurance plans accepted' : '接受的保险计划' },
          { value: '0%', label: isEn ? 'Interest payment plans' : '利息分期付款' },
          { value: '24hr', label: isEn ? 'Verification turnaround' : '验证周转时间' },
        ]}
        priority
      />

      {/* Insurance Verification Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Simple verification process' : '简单的验证流程'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Know your coverage before you start' : '开始前了解您的覆盖'}
              </h2>
              <p className="mt-6 text-[17px] text-[#5a555d]">
                {isEn
                  ? 'Our insurance specialists handle the entire verification process, so you understand exactly what\'s covered and what you\'ll owe out-of-pocket.'
                  : '我们的保险专员处理整个验证流程，因此您可以确切了解覆盖内容和自付费用。'}
              </p>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {verificationSteps.map((step, idx) => (
              <ScrollInView key={step.step} delay={idx * 0.1}>
                <Card className="px-8 py-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#a63655] text-white text-xl font-semibold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-[#2f2b33] mb-3">
                        {isEn ? step.titleEn : step.titleZh}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? step.descriptionEn : step.descriptionZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>

          <ScrollInView delay={0.6}>
            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  {isEn ? 'Start Insurance Verification' : '开始保险验证'}
                </Button>
              </Link>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* Insurance Plans Accepted */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Major insurance carriers' : '主要保险公司'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'We accept 15+ insurance plans' : '我们接受15+保险计划'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insurancePlans.map((plan, idx) => (
              <ScrollInView key={plan.name} delay={idx * 0.1}>
                <Card className="px-6 py-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#2f2b33]">
                      {isEn ? plan.name : plan.nameZh}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {(isEn ? plan.coverageEn : plan.coverageZh).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#5a555d]">
                        <svg className="h-4 w-4 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollInView>
            ))}
          </div>

          <ScrollInView delay={0.7}>
            <div className="mt-12">
              <Card className="px-6 py-4 bg-[#fff9f5] border-2 border-[#e2d0c1]">
                <p className="text-[14px] text-[#5a555d] text-center">
                  <span className="font-semibold text-[#2f2b33]">{isEn ? 'Don\'t see your plan?' : '没看到您的计划？'}</span>{' '}
                  {isEn
                    ? 'We work with many other carriers including Medicare, Medicaid, and regional plans. Contact us to verify your specific coverage.'
                    : '我们与许多其他承保公司合作，包括Medicare、Medicaid和区域计划。联系我们以验证您的具体覆盖。'}
                </p>
              </Card>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* State Mandates */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'State insurance mandates' : '州保险强制要求'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Your state may require IVF coverage' : '您所在的州可能要求IVF覆盖'}
              </h2>
              <p className="mt-6 text-[17px] text-[#5a555d]">
                {isEn
                  ? 'Several states mandate that insurance companies cover fertility treatments. Check if your state provides coverage.'
                  : '几个州要求保险公司覆盖生育治疗。检查您所在的州是否提供覆盖。'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2">
            {stateMandates.map((mandate, idx) => (
              <ScrollInView key={mandate.stateEn} delay={idx * 0.1}>
                <Card className="px-8 py-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#2f2b33]">
                      {isEn ? mandate.stateEn : mandate.stateZh}
                    </h3>
                    <span className="px-3 py-1 bg-[#f7ebe5] text-[#a63655] text-sm font-medium rounded-full">
                      {isEn ? mandate.mandateEn : mandate.mandateZh}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {(isEn ? mandate.coverageDetailsEn : mandate.coverageDetailsZh).map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#5a555d]">
                        <svg className="h-4 w-4 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section id="financing" className="bg-[#e8d5d0] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Flexible payment solutions' : '灵活的付款解决方案'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Financing options for every budget' : '适合每个预算的融资选项'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2">
            {financingOptions.map((option, idx) => (
              <ScrollInView key={option.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={option.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2f2b33] mb-2">
                        {isEn ? option.titleEn : option.titleZh}
                      </h3>
                      <p className="text-[15px] text-[#5a555d] mb-3">
                        {isEn ? option.descriptionEn : option.descriptionZh}
                      </p>
                      <p className="text-[13px] text-[#a63655] font-medium">
                        {isEn ? option.termsEn : option.termsZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Programs */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Save on treatment costs' : '节省治疗费用'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Discount programs & refund guarantees' : '折扣计划与退款保证'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            {discountPrograms.map((program, idx) => (
              <ScrollInView key={program.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-[#2f2b33]">
                      {isEn ? program.titleEn : program.titleZh}
                    </h3>
                    <span className="px-4 py-2 bg-[#a63655] text-white text-sm font-semibold rounded-full whitespace-nowrap ml-4">
                      {isEn ? program.savingsEn : program.savingsZh}
                    </span>
                  </div>
                  <p className="text-[15px] text-[#5a555d] mb-4">
                    {isEn ? program.descriptionEn : program.descriptionZh}
                  </p>
                  <div className="border-t border-[#f0e6db] pt-4">
                    <p className="text-sm font-medium text-[#2f2b33] mb-2">
                      {isEn ? 'Eligibility:' : '资格要求：'}
                    </p>
                    <ul className="space-y-1">
                      {(isEn ? program.eligibilityEn : program.eligibilityZh).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-[#5a555d]">
                          <svg className="h-3 w-3 text-[#a63655] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Policies */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Clear policies' : '明确的政策'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Financial policies & terms' : '财务政策与条款'}
              </h2>
              <p className="mt-6 text-[17px] text-[#5a555d]">
                {isEn
                  ? 'We believe in complete transparency about payment terms, refund policies, and deadlines so you can plan with confidence.'
                  : '我们相信对付款条款、退款政策和截止日期的完全透明，以便您能够放心计划。'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            {financialPolicies.map((policy, idx) => (
              <ScrollInView key={policy.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={policy.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2f2b33]">
                        {isEn ? policy.titleEn : policy.titleZh}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {(isEn ? policy.contentEn : policy.contentZh).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[#5a555d]">
                        <svg className="h-4 w-4 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollInView>
            ))}
          </div>

          <ScrollInView delay={0.5}>
            <div className="mt-12">
              <Card className="px-6 py-4 bg-[#fff9f5] border-2 border-[#e2d0c1]">
                <p className="text-[14px] text-[#5a555d] text-center">
                  <span className="font-semibold text-[#2f2b33]">{isEn ? 'Have questions about our policies?' : '对我们的政策有疑问？'}</span>{' '}
                  {isEn
                    ? 'Our financial coordinators are here to explain all terms and answer your questions. Contact us for a detailed consultation.'
                    : '我们的财务协调员将解释所有条款并回答您的问题。联系我们进行详细咨询。'}
                </p>
              </Card>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <div className="text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Common questions' : '常见问题'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Insurance & financing FAQ' : '保险与融资常见问题'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {[
              {
                questionEn: 'Does my insurance cover IVF?',
                questionZh: '我的保险覆盖IVF吗？',
                answerEn: 'Coverage varies widely by plan and state. Some states mandate IVF coverage, while others don\'t. Your benefits depend on: (1) State mandates, (2) Employer plan design, (3) Diagnosis (medical vs. elective). We verify your specific benefits at no charge before you start treatment.',
                answerZh: '覆盖因计划和州而异。一些州强制要求IVF覆盖，而其他州则没有。您的福利取决于：(1) 州强制要求，(2) 雇主计划设计，(3) 诊断（医疗vs.选择性）。在您开始治疗前，我们免费验证您的具体福利。',
              },
              {
                questionEn: 'What if I don\'t have insurance coverage?',
                questionZh: '如果我没有保险覆盖怎么办？',
                answerEn: 'We offer multiple solutions: (1) 0% interest payment plans over 6-24 months, (2) Healthcare lending with low APR, (3) Multi-cycle discounts (save up to 20%), (4) Shared Risk refund programs, (5) Medication discount programs. Our financial team will find the best option for your budget.',
                answerZh: '我们提供多种解决方案：(1) 0%利息分期付款6-24个月，(2) 低年利率的医疗贷款，(3) 多周期折扣（节省高达20%），(4) 共享风险退款计划，(5) 药物折扣计划。我们的财务团队将为您的预算找到最佳选择。',
              },
              {
                questionEn: 'Can I use my FSA or HSA?',
                questionZh: '我可以使用FSA或HSA吗？',
                answerEn: 'Yes! Fertility treatments are eligible expenses. You can use pre-tax dollars for: IVF, IUI, medications, diagnostic testing, egg/sperm/embryo storage, and even travel costs related to treatment. This can save you 25-35% on taxes.',
                answerZh: '可以！生育治疗是符合条件的费用。您可以使用税前美元支付：IVF、IUI、药物、诊断检测、卵子/精子/胚胎存储，甚至与治疗相关的旅行费用。这可以为您节省25-35%的税款。',
              },
              {
                questionEn: 'How does the Shared Risk program work?',
                questionZh: '共享风险计划如何运作？',
                answerEn: 'Pay one upfront fee ($25,000-$30,000) for up to 6 IVF cycles. If you don\'t achieve a live birth after 6 cycles, you receive a 100% refund. If you get pregnant early (cycle 1 or 2), you save money vs. paying per cycle. Eligibility: age <38, good ovarian reserve, no prior IVF failures.',
                answerZh: '支付一次性预付费用（$25,000-$30,000）最多6个IVF周期。如果在6个周期后未能活产，您将获得100%退款。如果您提前怀孕（周期1或2），与按周期付款相比您可以省钱。资格：年龄<38岁，良好的卵巢储备，无先前IVF失败。',
              },
              {
                questionEn: 'Do you offer military or first responder discounts?',
                questionZh: '你们提供军人或急救人员折扣吗？',
                answerEn: 'Yes! We offer a 10% discount on all fertility services for active duty military, veterans, police officers, firefighters, and EMTs. Simply present your valid credentials when scheduling your consultation.',
                answerZh: '是的！我们为现役军人、退伍军人、警察、消防员和急救人员提供所有生育服务10%的折扣。在安排咨询时出示您的有效证件即可。',
              },
            ].map((faq, idx) => (
              <ScrollInView key={idx} delay={idx * 0.05}>
                <Card className="px-8 py-6">
                  <h3 className="text-lg font-medium text-[#2f2b33] mb-3">
                    {isEn ? faq.questionEn : faq.questionZh}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5a555d]">
                    {isEn ? faq.answerEn : faq.answerZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to understand your costs?' : '准备了解您的费用？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Get a personalized financial plan' : '获得个性化财务计划'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with our insurance and financial specialists to verify your coverage, explore financing options, and create a payment plan that works for you.'
              : '与我们的保险和财务专员会面，验证您的覆盖，探索融资选项，并创建适合您的付款计划。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Schedule consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                {isEn ? 'View pricing guide' : '查看价格指南'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
