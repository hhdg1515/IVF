'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { fertilityTests, testingProcess } from '@/lib/testing-data'
import Link from 'next/link'

export default function FertilityTestingPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const [selectedTest, setSelectedTest] = useState<string | null>(null)

  const selectedTestData = fertilityTests.find(test => test.id === selectedTest)

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Fertility Testing' : '生育检测'}
        backgroundImage="/images/service.jpg"
        title={isEn ? 'Understanding Your Fertility' : '了解您的生育力'}
        subtitle={isEn ? 'Comprehensive diagnostic testing to create your personalized treatment plan' : '综合诊断检测创建您的个性化治疗计划'}
        primaryCtaText={isEn ? 'Schedule Testing' : '预约检测'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Download Testing Guide (PDF)' : '下载检测指南（PDF）'}
        secondaryCtaHref="#"
        stats={[
          { value: '6', label: isEn ? 'Core fertility tests' : '核心生育检测' },
          { value: '$500-2K', label: isEn ? 'Total testing cost' : '总检测费用' },
          { value: '2-3wks', label: isEn ? 'Complete workup time' : '完整检查时间' },
        ]}
        priority
      />

      {/* Testing Overview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Knowledge is power' : '知识就是力量'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Why fertility testing matters' : '为什么生育检测很重要'}
              </h2>
              <p className="mt-6 text-[17px] text-[#5a555d] leading-relaxed">
                {isEn
                  ? 'Comprehensive fertility testing provides critical insights into your reproductive health. These tests help us understand your ovarian reserve, hormone levels, uterine health, and male factor contributions—allowing us to create a personalized treatment plan with the highest chance of success.'
                  : '全面的生育检测提供对您生殖健康的关键见解。这些检测帮助我们了解您的卵巢储备、激素水平、子宫健康和男性因素贡献——使我们能够创建成功机会最高的个性化治疗计划。'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                titleEn: 'Accurate Diagnosis',
                titleZh: '准确诊断',
                descEn: 'Identify the specific cause of infertility—whether hormonal, structural, male factor, or unexplained.',
                descZh: '识别不孕的具体原因——无论是激素、结构、男性因素还是不明原因。',
                iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              },
              {
                titleEn: 'Personalized Treatment',
                titleZh: '个性化治疗',
                descEn: 'Choose the right treatment path—IUI vs. IVF, medication protocols, or surgical interventions.',
                descZh: '选择正确的治疗路径——IUI vs. IVF、药物方案或手术干预。',
                iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
              },
              {
                titleEn: 'Realistic Expectations',
                titleZh: '现实期望',
                descEn: 'Understand your prognosis, expected timelines, and success rates based on your specific test results.',
                descZh: '根据您的具体检测结果了解您的预后、预期时间表和成功率。',
              },
            ].map((item, idx) => (
              <ScrollInView key={item.titleEn} delay={idx * 0.1}>
                <Card className="px-6 py-6 h-full text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg className="h-7 w-7 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath || 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2f2b33] mb-3">
                    {isEn ? item.titleEn : item.titleZh}
                  </h3>
                  <p className="text-[15px] text-[#5a555d]">
                    {isEn ? item.descEn : item.descZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Core Fertility Tests */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Essential diagnostic tests' : '基本诊断检测'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? '6 core fertility tests explained' : '6项核心生育检测详解'}
              </h2>
              <p className="mt-6 text-[17px] text-[#5a555d]">
                {isEn ? 'Click on any test to learn more about what it measures, when it\'s performed, and how to interpret results.' : '点击任何检测以了解更多关于它测量什么、何时进行以及如何解读结果。'}
              </p>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fertilityTests.map((test, idx) => (
              <ScrollInView key={test.id} delay={idx * 0.1}>
                <Card
                  className={`px-6 py-6 h-full cursor-pointer transition-all ${
                    selectedTest === test.id ? 'ring-2 ring-[#a63655] bg-white' : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedTest(selectedTest === test.id ? null : test.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={test.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-[#2f2b33]">
                          {isEn ? test.nameEn : test.nameZh}
                        </h3>
                        {test.insuranceCovered && (
                          <span className="text-xs px-2 py-1 bg-[#a63655] text-white rounded-full whitespace-nowrap">
                            {isEn ? 'Covered' : '覆盖'}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#a63655] font-medium mb-2">
                        {isEn ? test.categoryEn : test.categoryZh}
                      </p>
                      <p className="text-[14px] text-[#5a555d] mb-3">
                        {isEn ? test.descriptionEn : test.descriptionZh}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#2f2b33] font-medium">{test.costRange}</span>
                        <button className="text-[#a63655] font-medium flex items-center gap-1">
                          {selectedTest === test.id ? (isEn ? 'Hide details' : '隐藏详情') : (isEn ? 'Learn more' : '了解更多')}
                          <svg className={`h-4 w-4 transition-transform ${selectedTest === test.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>

          {/* Expanded Test Details */}
          {selectedTestData && (
            <ScrollInView delay={0.2}>
              <Card className="mt-8 px-8 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-[#2f2b33] mb-4">
                      {isEn ? 'What It Measures' : '测量内容'}
                    </h4>
                    <p className="text-[15px] text-[#5a555d] mb-6">
                      {isEn ? selectedTestData.whatItMeasuresEn : selectedTestData.whatItMeasuresZh}
                    </p>

                    <h4 className="text-xl font-semibold text-[#2f2b33] mb-3">
                      {isEn ? 'When Performed' : '何时进行'}
                    </h4>
                    <p className="text-[15px] text-[#5a555d] mb-6">
                      {isEn ? selectedTestData.whenPerformedEn : selectedTestData.whenPerformedZh}
                    </p>

                    <h4 className="text-xl font-semibold text-[#2f2b33] mb-3">
                      {isEn ? 'Normal Range' : '正常范围'}
                    </h4>
                    <p className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? selectedTestData.normalRangeEn : selectedTestData.normalRangeZh}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-[#2f2b33] mb-4">
                      {isEn ? selectedTestData.interpretationEn.title : selectedTestData.interpretationZh.title}
                    </h4>
                    <div className="space-y-3">
                      {(isEn ? selectedTestData.interpretationEn.items : selectedTestData.interpretationZh.items).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-[#fff9f5] rounded-lg">
                          <span className="text-sm font-semibold text-[#a63655] whitespace-nowrap mt-0.5">
                            {item.range}
                          </span>
                          <span className="text-sm text-[#5a555d]">{item.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollInView>
          )}
        </div>
      </section>

      {/* Testing Process */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Your testing journey' : '您的检测之旅'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? '5 steps to complete fertility workup' : '完成生育检查的5个步骤'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {testingProcess.map((step, idx) => (
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
                {isEn ? 'Fertility testing FAQ' : '生育检测常见问题'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {[
              {
                questionEn: 'How much does fertility testing cost?',
                questionZh: '生育检测费用是多少？',
                answerEn: 'Basic testing (AMH, FSH, AFC, semen analysis) costs $500-$800. Comprehensive workup including HSG and genetic screening costs $1,500-$2,000. Most diagnostic testing is covered by insurance, but we recommend verification. We offer bundled testing packages at discounted rates.',
                answerZh: '基本检测（AMH、FSH、AFC、精液分析）费用为$500-$800。包括HSG和基因筛查的综合检查费用为$1,500-$2,000。大多数诊断检测由保险覆盖，但我们建议验证。我们以折扣价格提供捆绑检测套餐。',
              },
              {
                questionEn: 'How long does testing take?',
                questionZh: '检测需要多长时间？',
                answerEn: 'Blood tests: Results in 2-5 days. Semen analysis: Results same day or next day. AFC ultrasound: Results immediately. HSG: Results immediately. Genetic screening: 2-3 weeks. Complete fertility workup typically takes 2-3 weeks from initial consultation to treatment plan.',
                answerZh: '血液检查：2-5天内结果。精液分析：当天或次日结果。AFC超声：立即结果。HSG：立即结果。基因筛查：2-3周。从初诊咨询到治疗计划的完整生育检查通常需要2-3周。',
              },
              {
                questionEn: 'Do I need all these tests?',
                questionZh: '我需要所有这些检测吗？',
                answerEn: 'Not necessarily. Your doctor will recommend tests based on: (1) Your age and symptoms, (2) Duration of infertility, (3) Previous pregnancies or treatments, (4) Male or female factor concerns. Basic workup includes AMH, FSH, AFC, and semen analysis. Additional tests ordered as needed.',
                answerZh: '不一定。您的医生将根据以下因素推荐检测：(1) 您的年龄和症状，(2) 不孕持续时间，(3) 既往怀孕或治疗，(4) 男性或女性因素担忧。基本检查包括AMH、FSH、AFC和精液分析。根据需要订购额外检测。',
              },
              {
                questionEn: 'What if my test results are abnormal?',
                questionZh: '如果我的检测结果异常怎么办？',
                answerEn: 'Abnormal results don\'t mean you can\'t have a baby—they guide treatment. Low AMH: May need higher medication doses or donor eggs. Blocked tubes: IVF bypasses tubes. Poor sperm quality: ICSI solves most male factor issues. We create solutions tailored to your specific results.',
                answerZh: '异常结果并不意味着您不能生育——它们指导治疗。低AMH：可能需要更高的药物剂量或捐卵。输卵管阻塞：IVF绕过输卵管。精子质量差：ICSI解决大多数男性因素问题。我们创建针对您具体结果的解决方案。',
              },
              {
                questionEn: 'Can I do testing at my regular doctor?',
                questionZh: '我可以在我的常规医生那里做检测吗？',
                answerEn: 'Basic blood work can be done anywhere (LabCorp, Quest). However, specialized tests (AFC, HSG, semen analysis) should be done at a fertility clinic for accurate interpretation. We accept outside lab results if recent (within 6 months for AMH/FSH, within 3 months for semen analysis).',
                answerZh: '基本血液检查可以在任何地方进行（LabCorp、Quest）。然而，专门检测（AFC、HSG、精液分析）应在生育诊所进行以获得准确解读。如果是最近的（AMH/FSH在6个月内，精液分析在3个月内），我们接受外部实验室结果。',
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
            {isEn ? 'Ready to understand your fertility?' : '准备了解您的生育力？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule your comprehensive fertility evaluation' : '预约您的综合生育评估'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Meet with a fertility specialist to discuss which tests are right for you, review results, and create a personalized treatment plan based on your complete fertility picture.'
              : '与生育专家会面讨论哪些检测适合您，审查结果，并根据您完整的生育情况制定个性化治疗计划。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Schedule consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/insurance-financing">
              <Button variant="outline" size="lg">
                {isEn ? 'Check insurance coverage' : '检查保险覆盖'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
