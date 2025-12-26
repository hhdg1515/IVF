'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { ProcessTimeline } from '@/components/ui/ProcessTimeline'
import { SoftBackdrop, SoftDivider } from '@/components/ui/Decorations'
import { embryoFreezingService } from '@/lib/services-data'
import Link from 'next/link'

export default function EmbryoFreezingPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const service = embryoFreezingService

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Embryo Freezing' : '胚胎冷冻'}
        backgroundImage={service.heroImageUrl}
        title={isEn ? service.titleEn : service.titleZh}
        subtitle={isEn ? service.taglineEn : service.taglineZh}
        primaryCtaText={isEn ? service.ctaTextEn : service.ctaTextZh}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Download Embryo Banking Guide (PDF)' : '下载胚胎储存指南（PDF）'}
        secondaryCtaHref="#"
        stats={[
          { value: '98%+', label: isEn ? 'Embryo survival rate' : '胚胎存活率' },
          { value: '$650', label: isEn ? 'Annual storage' : '年度存储费' },
          { value: '60%', label: isEn ? 'FET live birth rate <35' : '<35岁FET活产率' },
        ]}
        priority
      />

      {/* Who It's For Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Who freezes embryos?' : '谁冷冻胚胎？'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'The highest success rates in fertility preservation' : '生育力保存中最高的成功率'}
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
        <SoftDivider className="mx-auto mt-16 max-w-5xl" />
      </section>

      {/* Process Steps */}
      <section className="relative bg-[#f7eee7] py-24 overflow-hidden">
        <SoftBackdrop intensity="whisper" />
        <div className="relative mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'From IVF to storage' : '从IVF到存储'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? '5 steps to freeze and bank embryos' : '冷冻和储存胚胎的5个步骤'}
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[#5a555d]">
                {isEn
                  ? 'A step-by-step path from IVF to storage, with clear checkpoints along the way.'
                  : '从 IVF 到存储，步骤清晰、节点明确。'}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-semibold text-[#a63655]">
                    {service.processSteps.length}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#6c757d]">
                    {isEn ? 'steps' : '步骤'}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-semibold text-[#a63655]">
                    {isEn ? service.processSteps[0]?.durationEn ?? '2-3 weeks' : service.processSteps[0]?.durationZh ?? '2-3周'}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#6c757d]">
                    {isEn ? 'IVF cycle' : 'IVF 周期'}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl font-semibold text-[#a63655]">
                    {isEn ? service.processSteps[2]?.durationEn ?? '15 min' : service.processSteps[2]?.durationZh ?? '15分钟'}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#6c757d]">
                    {isEn ? 'freeze' : '冷冻'}
                  </span>
                </div>
              </div>
            </div>
          </ScrollInView>

          <ProcessTimeline
            steps={service.processSteps.map((step) => ({
              step: step.step,
              title: isEn ? step.titleEn : step.titleZh,
              duration: isEn ? step.durationEn : step.durationZh,
              description: isEn ? step.descriptionEn : step.descriptionZh,
            }))}
          />
          <SoftDivider className="mx-auto mt-16 max-w-4xl" />
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Gold-standard vitrification' : '金标准玻璃化冷冻'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Kitazato Cryotop® method: 98%+ survival' : 'Kitazato Cryotop®方法：98%以上存活率'}
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
            <Link href="/our-lab" className="inline-flex items-center gap-2 text-[#a63655] hover:text-[#8b2a45] font-medium">
              <span>{isEn ? 'Learn more about our storage facility' : '了解更多关于我们的存储设施'}</span>
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
                {isEn ? 'FET success rates by age' : '按年龄划分的FET成功率'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Our 2023 frozen embryo transfer outcomes' : '我们2023年冷冻胚胎移植结果'}
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
                        {isEn ? 'Age Range' : '年龄范围'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Survival Rate' : '存活率'}
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
                            {group.survivalRate}%
                          </span>
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
                    ? 'Success rates reflect age at time of embryo creation, not transfer. Embryos frozen at age 32 retain that age\'s success rates even if transferred at age 40. PGT-A tested embryos have 70%+ live birth rates across all age groups.'
                    : '成功率反映胚胎创建时的年龄，而非移植时的年龄。在32岁时冷冻的胚胎即使在40岁时移植也保持该年龄的成功率。PGT-A检测的胚胎在所有年龄组中的活产率超过70%。'}
                </p>
              </Card>
            </div>
          </ScrollInView>
        </div>
        <SoftDivider className="mx-auto mt-16 max-w-5xl" />
      </section>

      {/* Pricing */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Transparent pricing' : '透明价格'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Included in your IVF cycle' : '包含在您的IVF周期中'}
              </h2>
              <p className="mt-4 text-[17px] text-[#5a555d]">
                {isEn ? 'First year storage included, then $650/year' : '包含首年存储，之后每年$650'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollInView>
              <Card className="px-8 py-8 h-full">
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
                {isEn ? 'Your embryo freezing questions answered' : '您的胚胎冷冻问题解答'}
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
            {isEn ? 'Ready to preserve your embryos?' : '准备保存您的胚胎？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your embryo banking consultation' : '预约胚胎储存咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with a fertility specialist to discuss your embryo banking options, storage protocols, and future family planning strategies.'
              : '与生育专家会面，讨论您的胚胎储存选项、存储协议和未来的家庭规划策略。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Book consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/services/ivf-treatment">
              <Button variant="outline" size="lg">
                {isEn ? 'Learn about IVF' : '了解IVF'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
