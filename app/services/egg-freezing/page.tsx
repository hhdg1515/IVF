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

      {/* Success Rates & Outcomes */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'What to expect' : '预期结果'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Success rates for frozen eggs' : '冷冻卵子的成功率'}
              </h2>
              <p className="mt-6 text-[15px] text-[#5a555d]">
                {isEn ? service.successData.dataSource : service.successData.dataSourceZh}
              </p>
            </div>
          </ScrollInView>

          {/* What We Measure - Important! */}
          <ScrollInView>
            <div className="mb-8">
              <Card className="px-6 py-5 bg-[#fff9f5] border-l-4 border-[#a63655]">
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 text-[#a63655] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'Important: Egg Freezing ≠ Guaranteed Pregnancy' : '重要提示：冻卵 ≠ 保证怀孕'}
                    </h3>
                    <p className="text-[14px] text-[#5a555d] leading-relaxed">
                      {isEn
                        ? 'Egg freezing preserves your fertility potential, but does not guarantee a future pregnancy. Success depends on egg quality at time of freezing, number of eggs stored, and your age when using them. The rates below show survival and fertilization, not pregnancy rates.'
                        : '冻卵保留您的生育潜力，但不保证未来怀孕。成功取决于冷冻时的卵子质量、存储的卵子数量以及使用时的年龄。以下比率显示存活和受精率，而非妊娠率。'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* Survival & Fertilization Rates Table */}
          <ScrollInView delay={0.1}>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f7ebe5]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Age at Freezing' : '冷冻时年龄'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Thaw Survival Rate' : '解冻存活率'}
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-[#2f2b33]">
                        {isEn ? 'Fertilization Rate (ICSI)' : '受精率（ICSI）'}
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
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-semibold text-[#5cb88a]">
                              {group.survivalRate}%
                            </span>
                            <span className="text-xs text-[#5a555d] mt-1">
                              {isEn ? 'eggs survive thaw' : '卵子解冻存活'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-semibold text-[#a63655]">
                              {group.fertilizationRate}%
                            </span>
                            <span className="text-xs text-[#5a555d] mt-1">
                              {isEn ? 'fertilize with ICSI' : '通过ICSI受精'}
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

          {/* How Many Eggs Do You Need */}
          <ScrollInView delay={0.2}>
            <div className="mt-8">
              <Card className="px-8 py-8">
                <h3 className="text-xl font-semibold text-[#2f2b33] mb-4 flex items-center gap-2">
                  <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  {isEn ? 'How Many Eggs Should You Freeze?' : '应该冷冻多少颗卵子？'}
                </h3>
                <p className="text-[14px] text-[#5a555d] mb-6">
                  {isEn
                    ? 'Research shows that freezing 15-20 mature eggs gives you a good chance (70-80%) of at least one live birth in the future. Here\'s a typical breakdown:'
                    : '研究表明，冷冻15-20颗成熟卵子可为您提供良好的机会（70-80%）至少一次未来活产。以下是典型分解：'}
                </p>

                <div className="bg-[#fdfbf9] border-2 border-[#e8d5d0] rounded-lg p-6">
                  <div className="grid gap-6 md:grid-cols-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-[#a63655] mb-2">20</div>
                      <p className="text-xs text-[#2f2b33] font-medium mb-1">
                        {isEn ? 'Eggs Frozen' : '冷冻卵子'}
                      </p>
                      <p className="text-xs text-[#5a555d]">{isEn ? 'Starting point' : '起点'}</p>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg className="h-8 w-8 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-[#5cb88a] mb-2">19</div>
                      <p className="text-xs text-[#2f2b33] font-medium mb-1">
                        {isEn ? 'Survive Thaw' : '解冻存活'}
                      </p>
                      <p className="text-xs text-[#5a555d]">{isEn ? '95% survival' : '95%存活率'}</p>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg className="h-8 w-8 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-4 text-center mt-6">
                    <div>
                      <div className="text-3xl font-bold text-[#a63655] mb-2">14</div>
                      <p className="text-xs text-[#2f2b33] font-medium mb-1">
                        {isEn ? 'Fertilize (ICSI)' : '受精（ICSI）'}
                      </p>
                      <p className="text-xs text-[#5a555d]">{isEn ? '75% fertilization' : '75%受精率'}</p>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg className="h-8 w-8 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>

                    <div>
                      <div className="text-3xl font-bold text-[#5cb88a] mb-2">7-8</div>
                      <p className="text-xs text-[#2f2b33] font-medium mb-1">
                        {isEn ? 'Reach Blastocyst' : '达到囊胚'}
                      </p>
                      <p className="text-xs text-[#5a555d]">{isEn ? '50-60% develop' : '50-60%发育'}</p>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg className="h-8 w-8 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-4 text-center mt-6">
                    <div className="md:col-start-2">
                      <div className="text-3xl font-bold text-[#a63655] mb-2">70-80%</div>
                      <p className="text-xs text-[#2f2b33] font-medium mb-1">
                        {isEn ? 'Chance of Live Birth' : '活产机会'}
                      </p>
                      <p className="text-xs text-[#5a555d]">{isEn ? 'With 7-8 blastocysts' : '有7-8个囊胚'}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* Age Matters Most */}
          <ScrollInView delay={0.3}>
            <div className="mt-8">
              <Card className="px-8 py-8 bg-[#fff9f5] border-2 border-[#e2d0c1]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4f0] border-2 border-[#5cb88a]">
                    <svg className="h-6 w-6 text-[#5cb88a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'Age at Freezing is Most Important' : '冷冻时的年龄最重要'}
                    </h3>
                    <p className="text-[14px] text-[#5a555d] leading-relaxed mb-3">
                      {isEn
                        ? 'The younger you are when freezing eggs, the better the quality and quantity. Eggs frozen at age 32 will have the same quality when used at age 42—they don\'t age in storage. However, your uterus and overall health at the time of pregnancy still matter.'
                        : '冷冻卵子时年龄越小，质量和数量越好。32岁冷冻的卵子在42岁使用时质量相同——它们在存储中不会老化。然而，怀孕时您的子宫和整体健康状况仍然很重要。'}
                    </p>
                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                      <div className="p-3 bg-white rounded-lg">
                        <div className="font-semibold text-[#2f2b33] mb-1">{isEn ? 'Under 35' : '35岁以下'}</div>
                        <div className="text-[#5cb88a] font-semibold">{isEn ? 'Best outcomes' : '最佳结果'}</div>
                        <div className="text-xs text-[#5a555d] mt-1">{isEn ? '15-20 eggs/cycle' : '15-20颗卵子/周期'}</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg">
                        <div className="font-semibold text-[#2f2b33] mb-1">{isEn ? 'Age 35-38' : '35-38岁'}</div>
                        <div className="text-[#d19807] font-semibold">{isEn ? 'Good outcomes' : '良好结果'}</div>
                        <div className="text-xs text-[#5a555d] mt-1">{isEn ? '10-15 eggs/cycle' : '10-15颗卵子/周期'}</div>
                      </div>
                      <div className="p-3 bg-white rounded-lg">
                        <div className="font-semibold text-[#2f2b33] mb-1">{isEn ? 'Over 38' : '38岁以上'}</div>
                        <div className="text-[#a63655] font-semibold">{isEn ? 'Still beneficial' : '仍然有益'}</div>
                        <div className="text-xs text-[#5a555d] mt-1">{isEn ? 'May need 2-3 cycles' : '可能需要2-3个周期'}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>

          {/* Realistic Expectations */}
          <ScrollInView delay={0.4}>
            <div className="mt-8">
              <Card className="px-6 py-4 bg-white border border-[#e8d5d0]">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="flex-1">
                    <p className="text-[13px] text-[#5a555d] leading-relaxed">
                      <span className="font-semibold text-[#2f2b33]">{isEn ? 'Setting Realistic Expectations:' : '设定现实期望：'}</span>{' '}
                      {isEn
                        ? 'Egg freezing is an insurance policy, not a guarantee. About 1 in 3 women who freeze eggs never use them (due to natural conception or other reasons). When used, frozen eggs result in pregnancy rates similar to fresh IVF for the same age. Schedule a consultation to assess your individual fertility potential and create a personalized plan.'
                        : '冻卵是一种保险政策，而非保证。约三分之一冷冻卵子的女性从未使用它们（由于自然受孕或其他原因）。使用时，冷冻卵子的妊娠率与同龄新鲜IVF相似。预约咨询以评估您的个人生育潜力并制定个性化计划。'}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollInView>
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
            <Link href="/about">
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
