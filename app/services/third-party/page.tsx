'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { thirdPartyService } from '@/lib/services-data'
import Link from 'next/link'

export default function ThirdPartyPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const service = thirdPartyService

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Third-Party Reproduction' : '第三方辅助生殖'}
        backgroundImage={service.heroImageUrl}
        title={isEn ? service.titleEn : service.titleZh}
        subtitle={isEn ? service.taglineEn : service.taglineZh}
        primaryCtaText={isEn ? service.ctaTextEn : service.ctaTextZh}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Download Third-Party Guide (PDF)' : '下载第三方指南（PDF）'}
        secondaryCtaHref="#"
        stats={[
          { value: '65%', label: isEn ? 'Donor egg live birth rate' : '捐卵活产率' },
          { value: '12-18', label: isEn ? 'Months (surrogacy)' : '月（代孕）' },
          { value: '$25K-$150K', label: isEn ? 'Total investment' : '总投资' },
        ]}
        priority
      />

      {/* Who It's For Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Who needs third-party services?' : '谁需要第三方服务？'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Surrogacy, donor eggs, and donor sperm pathways' : '代孕、捐卵和捐精途径'}
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
                {isEn ? '6 steps from consultation to bringing baby home' : '从咨询到带宝宝回家的6个步骤'}
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
                        <span className="text-sm text-[#a63655] font-medium whitespace-nowrap ml-4">
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

      {/* Technology/Screening Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Rigorous screening protocols' : '严格的筛查协议'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Ensuring safety, health, and legal compliance' : '确保安全、健康和法律合规'}
              </h2>
            </div>
          </ScrollInView>

          <ScrollInView>
            <Card className="px-8 py-8">
              <h3 className="text-2xl font-medium text-[#2f2b33] mb-4">
                {isEn ? service.technology.method : service.technology.methodZh}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#5a555d] mb-6">
                {isEn ? service.technology.detailsEn : service.technology.detailsZh}
              </p>
              <div className="flex flex-wrap gap-4">
                {service.technology.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-[#f7ebe5] rounded-full">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-medium text-[#2f2b33]">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollInView>

          <div className="mt-8 text-center">
            <Link href="/legal-documents" className="inline-flex items-center gap-2 text-[#a63655] hover:text-[#8b2a45] font-medium">
              <span>{isEn ? 'Review legal documents and patient rights' : '查看法律文件和患者权利'}</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Rates */}
      <section className="bg-[#e8d5d0] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Success rates by service type' : '按服务类型划分的成功率'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Our 2023 third-party reproduction outcomes' : '我们2023年第三方辅助生殖结果'}
              </h2>
              <p className="mt-6 text-[15px] text-[#5a555d]">
                {isEn ? service.successData.dataSource : service.successData.dataSourceZh}
              </p>
            </div>
          </ScrollInView>

          <ScrollInView>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f7ebe5]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Service Type' : '服务类型'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Clinical Pregnancy Rate' : '临床妊娠率'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Live Birth Rate' : '活产率'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.successData.ageGroups.map((group, idx) => (
                      <tr key={idx} className="border-b border-[#f0e6db]">
                        <td className="px-6 py-4 text-[#2f2b33] font-medium">
                          {isEn ? group.ageRange : group.ageRangeZh}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-semibold text-[#a63655]">
                            {group.clinicalPregnancyRate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-semibold text-[#a63655]">
                            {group.liveBirthRate}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </ScrollInView>

          <ScrollInView delay={0.2}>
            <div className="mt-8">
              <Card className="px-6 py-4 bg-[#fff9f5] border-2 border-[#e2d0c1]">
                <p className="text-[14px] text-[#5a555d] leading-relaxed">
                  <span className="font-semibold text-[#2f2b33]">{isEn ? 'Note:' : '注意：'}</span>{' '}
                  {isEn
                    ? 'Donor egg success rates reflect the donor\'s age (typically <32), not the recipient\'s age. Multiple IUI cycles may be needed; IVF offers higher per-cycle success. Gestational carrier rates assume high-quality embryos and healthy carrier.'
                    : '捐卵成功率反映捐赠者的年龄（通常<32岁），而非接受者的年龄。可能需要多个IUI周期；IVF每周期成功率更高。妊娠代孕者率假设高质量胚胎和健康代孕者。'}
                </p>
              </Card>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Investment & financing' : '投资与融资'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {service.pricing.currencySymbol}{service.pricing.basePriceMin.toLocaleString()} - {service.pricing.currencySymbol}{service.pricing.basePriceMax.toLocaleString()}+
              </h2>
              <p className="mt-4 text-[17px] text-[#5a555d]">
                {isEn ? 'Total costs vary by service type and individual needs' : '总费用因服务类型和个人需求而异'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollInView>
              <Card className="px-8 py-8 h-full">
                <h3 className="text-xl font-medium text-[#2f2b33] mb-6">
                  ✓ {isEn ? 'Medical Services Included' : '包含的医疗服务'}
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
              <Card className="px-8 py-8 h-full">
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
            <div className="mt-8">
              <Card className="px-6 py-4 bg-[#fff9f5] border-2 border-[#e2d0c1]">
                <p className="text-[14px] text-[#5a555d] leading-relaxed">
                  <span className="font-semibold text-[#2f2b33]">{isEn ? 'Cost Breakdown Examples:' : '费用明细示例：'}</span>{' '}
                  {isEn
                    ? 'Donor egg IVF: $25,000-$35,000 total. Donor sperm IUI: $2,000-$3,000 per cycle. Gestational surrogacy: $120,000-$200,000+ total. We offer payment plans, financing options, and insurance verification assistance.'
                    : '捐卵IVF：总计$25,000-$35,000。捐精IUI：每周期$2,000-$3,000。妊娠代孕：总计$120,000-$200,000+。我们提供付款计划、融资选项和保险验证协助。'}
                </p>
              </Card>
            </div>
          </ScrollInView>

          <ScrollInView delay={0.3}>
            <div className="mt-8 text-center">
              <Link href="/pricing" className="inline-flex">
                <Button variant="outline" size="lg">
                  {isEn ? 'View complete pricing guide' : '查看完整价格指南'}
                </Button>
              </Link>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <div className="text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Common questions' : '常见问题'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Your third-party reproduction questions answered' : '您的第三方辅助生殖问题解答'}
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
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Ready to explore third-party options?' : '准备探索第三方选项？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your confidential consultation' : '预约您的保密咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with our third-party reproduction coordinator to discuss surrogacy, donor eggs, or donor sperm options. We\'ll review the medical process, legal framework, timeline, and costs tailored to your unique situation.'
              : '与我们的第三方辅助生殖协调员会面，讨论代孕、捐卵或捐精选项。我们将根据您的独特情况审查医疗流程、法律框架、时间表和费用。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Book consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/legal-documents">
              <Button variant="outline" size="lg">
                {isEn ? 'Legal resources' : '法律资源'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
