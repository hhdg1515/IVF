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

          {/* What We Measure Box */}
          <ScrollInView>
            <Card className="px-6 py-5 bg-[#fff9f5] border-l-4 border-[#a63655] mb-8">
              <h3 className="text-base font-semibold text-[#2f2b33] mb-2">
                {isEn ? 'Important: Different Services = Different Success Metrics' : '重要提示：不同服务 = 不同成功指标'}
              </h3>
              <p className="text-[14px] text-[#5a555d] leading-relaxed">
                {isEn
                  ? 'Third-party reproduction encompasses distinct pathways, each with unique success factors. Donor egg success reflects the donor\'s young age (not yours). Gestational carrier success depends on embryo quality, not the carrier\'s age. Donor sperm IUI vs. IVF have vastly different per-cycle rates. These services cannot be compared directly—each addresses different medical needs.'
                  : '第三方辅助生殖包含不同的途径，每个途径都有独特的成功因素。捐卵成功反映捐赠者的年轻年龄（而非您的年龄）。妊娠代孕者成功取决于胚胎质量，而非代孕者的年龄。捐精IUI与IVF每周期成功率差异很大。这些服务不能直接比较——每个服务解决不同的医疗需求。'}
              </p>
            </Card>
          </ScrollInView>

          {/* Success Rates Table */}
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

          {/* Why Success Rates Differ */}
          <ScrollInView delay={0.2}>
            <div className="mt-12">
              <h3 className="text-2xl font-medium text-[#2f2b33] mb-6 text-center">
                {isEn ? 'Why Success Rates Differ by Service Type' : '为什么成功率因服务类型而异'}
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="px-6 py-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <span className="text-lg font-semibold text-[#a63655]">1</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2f2b33] mt-0.5">
                      {isEn ? 'Donor Egg Success: Age Reversal' : '捐卵成功：年龄逆转'}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed ml-11">
                    {isEn
                      ? 'Donor eggs come from women under 32 with excellent ovarian reserve. Your age doesn\'t matter—success reflects the donor\'s young, high-quality eggs. A 45-year-old using donor eggs has the same success rate as the 28-year-old donor.'
                      : '捐赠卵子来自32岁以下、卵巢储备良好的女性。您的年龄无关紧要——成功反映捐赠者年轻、高质量的卵子。45岁使用捐赠卵子的成功率与28岁捐赠者相同。'}
                  </p>
                </Card>

                <Card className="px-6 py-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <span className="text-lg font-semibold text-[#a63655]">2</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2f2b33] mt-0.5">
                      {isEn ? 'Gestational Carrier: Embryo Quality Matters' : '妊娠代孕者：胚胎质量至关重要'}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed ml-11">
                    {isEn
                      ? 'Success depends on your embryo quality (your or donor eggs + sperm), NOT the carrier\'s age or fertility. Carriers are pre-screened for healthy uterus and proven successful pregnancies. They carry, but contribute no genetics.'
                      : '成功取决于您的胚胎质量（您的或捐赠卵子+精子），而非代孕者的年龄或生育力。代孕者预先筛查为健康子宫和已证实的成功怀孕。他们携带，但不贡献遗传。'}
                  </p>
                </Card>

                <Card className="px-6 py-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <span className="text-lg font-semibold text-[#a63655]">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2f2b33] mt-0.5">
                      {isEn ? 'IUI vs. IVF: Fundamentally Different' : 'IUI与IVF：根本不同'}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed ml-11">
                    {isEn
                      ? 'IUI (12% per cycle) = sperm placed in uterus, fertilization happens naturally. Lower success but lower cost. IVF (50% per cycle) = eggs retrieved, fertilized in lab, embryo transferred. Higher success but higher cost. Most patients try 3-4 IUI cycles before IVF.'
                      : 'IUI（每周期12%）= 精子放置在子宫内，受精自然发生。成功率较低但成本较低。IVF（每周期50%）= 取卵，在实验室受精，胚胎移植。成功率较高但成本较高。大多数患者在IVF之前尝试3-4个IUI周期。'}
                  </p>
                </Card>

                <Card className="px-6 py-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <span className="text-lg font-semibold text-[#a63655]">4</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#2f2b33] mt-0.5">
                      {isEn ? 'Legal & Screening: Essential Foundation' : '法律与筛查：基本基础'}
                    </h4>
                  </div>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed ml-11">
                    {isEn
                      ? 'All donors/carriers undergo rigorous screening: genetic testing (300+ conditions), psychological evaluation, medical clearance, background checks, and FDA infectious disease testing. Legal contracts protect all parties and establish parental rights before conception.'
                      : '所有捐赠者/代孕者都经过严格筛查：基因检测（300+种疾病）、心理评估、医疗许可、背景调查和FDA传染病检测。法律合同保护所有各方，并在受孕前确立父母权利。'}
                  </p>
                </Card>
              </div>
            </div>
          </ScrollInView>

          {/* Key Factors for Success */}
          <ScrollInView delay={0.3}>
            <div className="mt-12">
              <h3 className="text-2xl font-medium text-[#2f2b33] mb-6 text-center">
                {isEn ? 'Key Factors That Influence Third-Party Success' : '影响第三方成功的关键因素'}
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="px-6 py-6 bg-white text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                    {isEn ? 'Donor/Carrier Selection' : '捐赠者/代孕者选择'}
                  </h4>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed">
                    {isEn
                      ? 'Choosing donors <32 with proven fertility and carriers with successful pregnancy history significantly improves outcomes.'
                      : '选择<32岁、已证实生育力的捐赠者和有成功怀孕历史的代孕者可显著改善结果。'}
                  </p>
                </Card>

                <Card className="px-6 py-6 bg-white text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                    {isEn ? 'PGT-A Testing' : 'PGT-A检测'}
                  </h4>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed">
                    {isEn
                      ? 'Genetic testing of embryos increases live birth rates from 50-60% to 65-70% per transfer by selecting chromosomally normal embryos.'
                      : '胚胎基因检测通过选择染色体正常的胚胎，将每次移植的活产率从50-60%提高到65-70%。'}
                  </p>
                </Card>

                <Card className="px-6 py-6 bg-white text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                    {isEn ? 'Uterine Health' : '子宫健康'}
                  </h4>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed">
                    {isEn
                      ? 'For donor egg recipients: Uterine receptivity, lining thickness, and absence of polyps/fibroids are critical for implantation success.'
                      : '对于捐卵接受者：子宫接受性、内膜厚度以及无息肉/肌瘤对植入成功至关重要。'}
                  </p>
                </Card>
              </div>
            </div>
          </ScrollInView>

          {/* Realistic Expectations */}
          <ScrollInView delay={0.4}>
            <div className="mt-12">
              <Card className="px-8 py-6 bg-white border-2 border-[#a63655]">
                <h3 className="text-xl font-semibold text-[#2f2b33] mb-4 text-center">
                  {isEn ? 'Realistic Expectations & Timelines' : '现实期望与时间表'}
                </h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#a63655] mb-2">4-6 mo</div>
                    <p className="text-sm font-medium text-[#2f2b33] mb-1">
                      {isEn ? 'Donor Egg IVF' : '捐卵IVF'}
                    </p>
                    <p className="text-xs text-[#5a555d]">
                      {isEn ? 'Matching → Cycle → Transfer' : '匹配→周期→移植'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#a63655] mb-2">12-18 mo</div>
                    <p className="text-sm font-medium text-[#2f2b33] mb-1">
                      {isEn ? 'Gestational Surrogacy' : '妊娠代孕'}
                    </p>
                    <p className="text-xs text-[#5a555d]">
                      {isEn ? 'Matching → Legal → IVF → Pregnancy' : '匹配→法律→IVF→怀孕'}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#a63655] mb-2">1-2 mo</div>
                    <p className="text-sm font-medium text-[#2f2b33] mb-1">
                      {isEn ? 'Donor Sperm IUI' : '捐精IUI'}
                    </p>
                    <p className="text-xs text-[#5a555d]">
                      {isEn ? 'Select sperm → Cycle timing' : '选择精子→周期时间'}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-[#5a555d] leading-relaxed mt-6 text-center">
                  {isEn
                    ? 'Third-party reproduction requires patience, legal coordination, and emotional resilience. Most patients succeed, but the journey involves multiple steps and potential delays. We provide dedicated care coordination, legal guidance, and counseling support throughout the entire process.'
                    : '第三方辅助生殖需要耐心、法律协调和情感韧性。大多数患者成功，但旅程涉及多个步骤和潜在延迟。我们在整个过程中提供专门的护理协调、法律指导和咨询支持。'}
                </p>
              </Card>
            </div>
          </ScrollInView>

          {/* Data Transparency Note */}
          <ScrollInView delay={0.5}>
            <div className="mt-8">
              <Card className="px-6 py-4 bg-[#fff9f5] border-l-4 border-[#a63655]">
                <p className="text-[14px] text-[#5a555d] leading-relaxed">
                  <span className="font-semibold text-[#2f2b33]">{isEn ? 'Data Transparency:' : '数据透明度：'}</span>{' '}
                  {isEn
                    ? 'All success rates are reported to SART (Society for Assisted Reproductive Technology) and verified by the CDC. We do not cherry-pick data or exclude unsuccessful cycles. Rates shown are per-transfer averages across all third-party patients in 2023.'
                    : '所有成功率都报告给SART（辅助生殖技术协会）并由CDC验证。我们不挑选数据或排除不成功的周期。显示的比率是2023年所有第三方患者的每次移植平均值。'}
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
