'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { ivfTreatmentService } from '@/lib/services-data'
import Link from 'next/link'

export default function IVFTreatmentPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const service = ivfTreatmentService

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'IVF Treatment' : 'IVF 治疗'}
        backgroundImage={service.heroImageUrl}
        title={isEn ? service.titleEn : service.titleZh}
        subtitle={isEn ? service.taglineEn : service.taglineZh}
        primaryCtaText={isEn ? service.ctaTextEn : service.ctaTextZh}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Download IVF Guide (PDF)' : '下载IVF指南（PDF）'}
        secondaryCtaHref="#"
        stats={[
          { value: '55%', label: isEn ? 'Live birth rate <35' : '<35岁活产率' },
          { value: '$12-15K', label: isEn ? 'Per cycle' : '每周期' },
          { value: '6-8', label: isEn ? 'Weeks per cycle' : '每周期周数' },
        ]}
        priority
      />

      {/* Who It's For Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Who benefits from IVF?' : '谁适合IVF？'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'IVF is the gold standard for many fertility challenges' : 'IVF是许多生育挑战的金标准'}
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
                {isEn ? 'The complete IVF process' : '完整的IVF流程'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? '7 steps from stimulation to pregnancy' : '从促排到怀孕的7个步骤'}
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

      {/* Technology Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Advanced reproductive technology' : '先进的生殖技术'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'ICSI, PGT-A, and state-of-the-art embryology' : 'ICSI、PGT-A和最先进的胚胎学'}
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
              <span>{isEn ? 'Learn more about our embryology lab' : '了解更多关于我们的胚胎学实验室'}</span>
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
                {isEn ? 'Success rates by age' : '按年龄划分的成功率'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Our 2023 SART-reported outcomes' : '我们2023年SART报告的结果'}
              </h2>
              <p className="mt-6 text-[15px] text-[#5a555d]">
                {isEn ? service.successData.dataSource : service.successData.dataSourceZh}
              </p>
            </div>
          </ScrollInView>

          {/* What We Measure Box */}
          <ScrollInView>
            <div className="mb-8">
              <Card className="px-6 py-5 bg-[#fff9f5] border-l-4 border-[#a63655]">
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 text-[#a63655] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'What We Measure: Live Birth Rate' : '我们衡量的指标：活产率'}
                    </h3>
                    <p className="text-[14px] text-[#5a555d] leading-relaxed">
                      {isEn
                        ? 'Live birth rate = Taking home a healthy baby, not just a positive pregnancy test. This is the most meaningful success metric. Rates shown are per embryo transfer for fresh or frozen single embryo transfers.'
                        : '活产率 = 带回家一个健康的婴儿，而不仅仅是阳性妊娠测试。这是最有意义的成功指标。显示的比率是新鲜或冷冻单胚胎移植的每次胚胎移植率。'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* Success Rates Table */}
          <ScrollInView delay={0.1}>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f7ebe5]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Age Range' : '年龄范围'}
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
                      <tr key={idx} className="border-b border-[#f0e6db] last:border-b-0">
                        <td className="px-6 py-4 text-[#2f2b33] font-medium">
                          {isEn ? group.ageRange : group.ageRangeZh}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-semibold text-[#a63655]">
                            {group.clinicalPregnancyRate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-semibold text-[#a63655]">
                              {group.liveBirthRate}%
                            </span>
                            <span className="text-xs text-[#5a555d] mt-1">
                              {isEn ? 'per transfer' : '每次移植'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </ScrollInView>

          {/* Factors That Influence Success */}
          <ScrollInView delay={0.2}>
            <div className="mt-8">
              <Card className="px-8 py-8">
                <h3 className="text-xl font-semibold text-[#2f2b33] mb-4 flex items-center gap-2">
                  <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {isEn ? 'Factors That Influence Your Success Rate' : '影响您成功率的因素'}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#f7ebe5] text-[#a63655] text-sm font-bold">1</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2f2b33] mb-1">
                        {isEn ? 'Age & Ovarian Reserve' : '年龄和卵巢储备'}
                      </h4>
                      <p className="text-[13px] text-[#5a555d]">
                        {isEn
                          ? 'Younger age and higher AMH levels correlate with more eggs retrieved and better embryo quality.'
                          : '年龄越小、AMH水平越高，取卵数量越多，胚胎质量越好。'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#f7ebe5] text-[#a63655] text-sm font-bold">2</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2f2b33] mb-1">
                        {isEn ? 'Embryo Quality & PGT-A' : '胚胎质量和PGT-A'}
                      </h4>
                      <p className="text-[13px] text-[#5a555d]">
                        {isEn
                          ? 'High-grade blastocysts have 50-60% success rates. PGT-A tested euploid embryos: 60-70% success.'
                          : '高等级囊胚成功率为50-60%。PGT-A检测的整倍体胚胎：60-70%成功率。'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#f7ebe5] text-[#a63655] text-sm font-bold">3</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2f2b33] mb-1">
                        {isEn ? 'Diagnosis & Medical History' : '诊断和病史'}
                      </h4>
                      <p className="text-[13px] text-[#5a555d]">
                        {isEn
                          ? 'Tubal factor and male factor have better outcomes than DOR or endometriosis.'
                          : '输卵管因素和男性因素的结果优于卵巢储备减少或子宫内膜异位症。'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#f7ebe5] text-[#a63655] text-sm font-bold">4</span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2f2b33] mb-1">
                        {isEn ? 'Lifestyle & BMI' : '生活方式和BMI'}
                      </h4>
                      <p className="text-[13px] text-[#5a555d]">
                        {isEn
                          ? 'BMI 18-30, non-smoking, and moderate exercise optimize implantation rates.'
                          : 'BMI 18-30、不吸烟和适度运动可优化着床率。'}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* Cumulative Success Rates */}
          <ScrollInView delay={0.3}>
            <div className="mt-8">
              <Card className="px-8 py-8 bg-[#fdfbf9]">
                <h3 className="text-xl font-semibold text-[#2f2b33] mb-4 flex items-center gap-2">
                  <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {isEn ? 'Cumulative Success Rates Across Multiple Cycles' : '多个周期的累积成功率'}
                </h3>
                <p className="text-[14px] text-[#5a555d] mb-6">
                  {isEn
                    ? 'Most patients don\'t succeed on the first try. Here\'s your likelihood of success after multiple attempts:'
                    : '大多数患者第一次尝试不会成功。以下是多次尝试后的成功可能性：'}
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-5 bg-white border-2 border-[#e8d5d0] rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#a63655] mb-2">72%</div>
                    <p className="text-sm font-medium text-[#2f2b33] mb-1">
                      {isEn ? 'After 2 Cycles' : '2个周期后'}
                    </p>
                    <p className="text-xs text-[#5a555d]">
                      {isEn ? 'Age <35' : '年龄<35岁'}
                    </p>
                  </div>
                  <div className="p-5 bg-white border-2 border-[#e8d5d0] rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#a63655] mb-2">85%</div>
                    <p className="text-sm font-medium text-[#2f2b33] mb-1">
                      {isEn ? 'After 3 Cycles' : '3个周期后'}
                    </p>
                    <p className="text-xs text-[#5a555d]">
                      {isEn ? 'Age <35' : '年龄<35岁'}
                    </p>
                  </div>
                  <div className="p-5 bg-white border-2 border-[#e8d5d0] rounded-lg text-center">
                    <div className="text-3xl font-bold text-[#a63655] mb-2">65%</div>
                    <p className="text-sm font-medium text-[#2f2b33] mb-1">
                      {isEn ? 'After 3 Cycles' : '3个周期后'}
                    </p>
                    <p className="text-xs text-[#5a555d]">
                      {isEn ? 'Age 35-40' : '年龄35-40岁'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* PGT-A Impact */}
          <ScrollInView delay={0.4}>
            <div className="mt-8">
              <Card className="px-8 py-8 bg-[#fff9f5] border-2 border-[#e2d0c1]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4f0] border-2 border-[#5cb88a]">
                    <svg className="h-6 w-6 text-[#5cb88a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'PGT-A Genetic Testing Improves Outcomes' : 'PGT-A基因检测提高结果'}
                    </h3>
                    <p className="text-[14px] text-[#5a555d] leading-relaxed mb-3">
                      {isEn
                        ? 'Transferring a PGT-A tested euploid (chromosomally normal) embryo increases live birth rates by 10-15 percentage points and reduces miscarriage risk by 60-70%.'
                        : '移植PGT-A检测的整倍体（染色体正常）胚胎可将活产率提高10-15个百分点，并将流产风险降低60-70%。'}
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="font-semibold text-[#2f2b33]">{isEn ? 'Untested embryo:' : '未测试胚胎：'}</span>
                        <span className="ml-2 text-[#a63655] font-semibold">45-55%</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#2f2b33]">{isEn ? 'PGT-A normal embryo:' : 'PGT-A正常胚胎：'}</span>
                        <span className="ml-2 text-[#5cb88a] font-semibold">60-70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* Data Source Note */}
          <ScrollInView delay={0.5}>
            <div className="mt-8">
              <Card className="px-6 py-4 bg-white border border-[#e8d5d0]">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-[13px] text-[#5a555d] leading-relaxed">
                      <span className="font-semibold text-[#2f2b33]">{isEn ? 'Data Transparency:' : '数据透明度：'}</span>{' '}
                      {isEn
                        ? 'All data reported to SART (Society for Assisted Reproductive Technology) and verified by CDC. Our outcomes are updated annually. Individual results may vary based on your unique medical situation. Schedule a consultation for a personalized success estimate.'
                        : '所有数据报告给SART（辅助生殖技术学会）并由CDC验证。我们的结果每年更新。个人结果可能因您独特的医疗情况而异。预约咨询以获得个性化成功估计。'}
                    </p>
                  </div>
                </div>
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
                {isEn ? 'Transparent pricing' : '透明价格'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {service.pricing.currencySymbol}{service.pricing.basePriceMin.toLocaleString()} - {service.pricing.currencySymbol}{service.pricing.basePriceMax.toLocaleString()}
              </h2>
              <p className="mt-4 text-[17px] text-[#5a555d]">
                {isEn ? 'Complete IVF cycle with first year embryo storage' : '完整IVF周期含首年胚胎存储'}
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
                {isEn ? 'Your IVF questions answered' : '您的IVF问题解答'}
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
            {isEn ? 'Ready to start your IVF journey?' : '准备开始您的IVF旅程？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your free IVF consultation' : '预约免费IVF咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with a fertility specialist to review your medical history, discuss your diagnosis, and create a personalized IVF treatment plan.'
              : '与生育专家会面，回顾您的病史，讨论您的诊断，并制定个性化的IVF治疗计划。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Book consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                {isEn ? 'Meet our physicians' : '认识我们的医生'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
