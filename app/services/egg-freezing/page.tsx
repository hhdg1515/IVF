'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { eggFreezingService } from '@/lib/services-data'
import Link from 'next/link'

export default function EggFreezingPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const service = eggFreezingService

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Fertility Preservation' : '生育力保存'}
        backgroundImage={service.heroImageUrl}
        title={isEn ? service.titleEn : service.titleZh}
        subtitle={isEn ? service.taglineEn : service.taglineZh}
        primaryCtaText={isEn ? service.ctaTextEn : service.ctaTextZh}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Download Guide (PDF)' : '下载指南（PDF）'}
        secondaryCtaHref="#"
        stats={[
          { value: '95-97%', label: isEn ? 'Egg survival rate' : '卵子存活率' },
          { value: '$7.5K+', label: isEn ? 'Starting price' : '起始价格' },
          { value: '10-14', label: isEn ? 'Days per cycle' : '周期天数' },
        ]}
        priority
      />

      {/* Who It's For Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Who benefits from egg freezing?' : '谁适合冻卵？'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Preserve your options, expand your timeline' : '保留选择，延长时间表'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            {service.whoItsFor.map((item, idx) => (
              <ScrollInView key={item.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-[#2f2b33] mb-2">
                        {isEn ? item.titleEn : item.titleZh}
                      </h3>
                      {item.ageRange && (
                        <p className="text-sm text-[#a63655] font-medium mb-2">{item.ageRange}</p>
                      )}
                      <p className="text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? item.descEn : item.descZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'The complete process' : '完整流程'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'What to expect from start to storage' : '从开始到存储的全程'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {service.processSteps.map((step, idx) => (
              <ScrollInView key={step.step} delay={idx * 0.1}>
                <Card className="px-8 py-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#a63655] text-white text-xl font-semibold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-medium text-[#2f2b33]">
                          {isEn ? step.titleEn : step.titleZh}
                        </h3>
                        <span className="text-sm text-[#a63655] font-medium">
                          {isEn ? step.durationEn : step.durationZh}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? step.descriptionEn : step.descriptionZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Safety */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Gold-standard technology' : '金标准技术'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'How we protect your future' : '我们如何保护您的未来'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollInView>
              <Card className="px-8 py-8 h-full">
                <h3 className="text-2xl font-medium text-[#2f2b33] mb-4">
                  {isEn ? service.technology.method : service.technology.methodZh}
                </h3>
                <div className="space-y-4 text-[15px] text-[#5a555d]">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold text-[#a63655]">{service.technology.survivalRate}</span>
                    <span>{isEn ? 'Survival rate' : '存活率'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-semibold text-[#a63655]">{service.technology.storageTemp}</span>
                    <span>{isEn ? 'Storage temperature' : '存储温度'}</span>
                  </div>
                  <p className="pt-4 leading-relaxed">
                    {isEn ? service.technology.detailsEn : service.technology.detailsZh}
                  </p>
                </div>
              </Card>
            </ScrollInView>

            <ScrollInView delay={0.1}>
              <Card className="px-8 py-8 h-full bg-[#f7ebe5]">
                <h3 className="text-2xl font-medium text-[#2f2b33] mb-4">
                  {isEn ? 'Certifications & Standards' : '认证与标准'}
                </h3>
                <div className="space-y-3">
                  {service.technology.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[15px] text-[#2f2b33] font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#e8d5d0] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Transparent pricing' : '透明价格'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {service.pricing.currencySymbol}{service.pricing.basePriceMin.toLocaleString()} - {service.pricing.currencySymbol}{service.pricing.basePriceMax.toLocaleString()}
              </h2>
              <p className="mt-4 text-[17px] text-[#5a555d]">
                {isEn ? 'Egg freezing cycle with first year storage' : '冻卵周期含首年存储'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollInView>
              <Card className="px-8 py-8">
                <h3 className="text-xl font-medium text-[#2f2b33] mb-6">
                  ✓ {isEn ? 'What\'s Included' : '包含内容'}
                </h3>
                <ul className="space-y-3">
                  {(isEn ? service.pricing.includedEn : service.pricing.includedZh).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#5a555d]">
                      <svg className="h-5 w-5 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollInView>

            <ScrollInView delay={0.1}>
              <Card className="px-8 py-8">
                <h3 className="text-xl font-medium text-[#2f2b33] mb-6">
                  + {isEn ? 'Additional Costs' : '额外费用'}
                </h3>
                <ul className="space-y-3">
                  {(isEn ? service.pricing.notIncludedEn : service.pricing.notIncludedZh).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#5a555d]">
                      <span className="text-[#a63655] font-bold flex-shrink-0 mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </ScrollInView>
          </div>

          <ScrollInView delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="inline-flex">
                <Button variant="outline" size="lg">
                  {isEn ? 'View full pricing details' : '查看完整价格详情'}
                </Button>
              </Link>
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
                {isEn ? 'Everything you need to know' : '您需要了解的一切'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
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

          <ScrollInView delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 text-[#a63655] hover:text-[#8b2a45] font-medium">
                <span>{isEn ? 'View all FAQs' : '查看所有常见问题'}</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to take the next step?' : '准备迈出下一步？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your free egg freezing consultation' : '预约免费冻卵咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with a fertility specialist to discuss your goals, review your fertility potential, and create a personalized plan.'
              : '与生育专家会面，讨论您的目标，审查您的生育潜力，并制定个性化计划。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Book consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/our-team">
              <Button variant="outline" size="lg">
                {isEn ? 'Meet our team' : '认识我们的团队'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
