'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import { pricingCategories, paymentOptions, pricingFAQs } from '@/lib/pricing-data'
import Link from 'next/link'

export default function PricingPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Transparent Pricing' : '透明价格'}
        backgroundImage="/images/service.jpg"
        title={isEn ? 'Clear, honest pricing for every service' : '每项服务的清晰、诚实价格'}
        subtitle={isEn ? 'No hidden fees. Payment plans available. Insurance support included.' : '无隐藏费用。提供分期付款。包含保险支持。'}
        primaryCtaText={isEn ? 'Schedule financial consultation' : '预约财务咨询'}
        primaryCtaHref="/contact"
        highlight={{
          title: isEn ? 'Financial transparency is part of our care' : '财务透明是我们护理的一部分',
          description: isEn
            ? 'You\'ll receive a detailed cost breakdown before treatment begins. Our financial team helps verify insurance, explore financing, and answer all billing questions.'
            : '治疗开始前，您将收到详细的费用明细。我们的财务团队帮助验证保险、探索融资并回答所有账单问题。',
        }}
        priority
      />

      {/* Price Tables */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Service pricing' : '服务价格'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'What you can expect to invest' : '您的预期投资'}
              </h2>
            </div>
          </ScrollInView>

          {pricingCategories.map((category, catIdx) => (
            <ScrollInView key={category.categoryName} delay={catIdx * 0.1}>
              <div className="mb-16">
                <h3 className="text-2xl font-semibold text-[#2f2b33] mb-6">
                  {isEn ? category.categoryName : category.categoryNameZh}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#e2d0c1]">
                        <th className="text-left py-4 px-4 text-sm font-semibold text-[#2f2b33] uppercase tracking-wide">
                          {isEn ? 'Service' : '服务'}
                        </th>
                        <th className="text-right py-4 px-4 text-sm font-semibold text-[#2f2b33] uppercase tracking-wide">
                          {isEn ? 'Price Range' : '价格区间'}
                        </th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-[#2f2b33] uppercase tracking-wide">
                          {isEn ? 'Notes' : '备注'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, idx) => (
                        <tr key={idx} className="border-b border-[#f0e6db]">
                          <td className="py-4 px-4 text-[15px] text-[#2f2b33] font-medium">
                            {isEn ? item.serviceName : item.serviceNameZh}
                          </td>
                          <td className="py-4 px-4 text-right text-[15px] text-[#a63655] font-semibold whitespace-nowrap">
                            {item.priceMin < 0 ? '-' : ''}${Math.abs(item.priceMin).toLocaleString()}
                            {item.priceMax && ` - $${item.priceMax.toLocaleString()}`}
                            {item.unit && ` ${isEn ? item.unit : item.unitZh}`}
                          </td>
                          <td className="py-4 px-4 text-[14px] text-[#5a555d]">
                            {isEn ? item.description : item.descriptionZh}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollInView>
          ))}

          <ScrollInView>
            <Card className="px-8 py-6 bg-[#f7ebe5] border-[#e2d0c1]">
              <p className="text-[14px] text-[#5a555d] leading-relaxed">
                <span className="font-semibold text-[#2f2b33]">{isEn ? 'Note:' : '注意：'}</span>{' '}
                {isEn
                  ? 'Prices listed are estimates and may vary based on individual medical needs. You will receive a personalized cost breakdown during your consultation. All prices are in USD.'
                  : '列出的价格为估算值，可能会根据个人医疗需求而有所不同。您将在咨询期间收到个性化的费用明细。所有价格均以美元计。'}
              </p>
            </Card>
          </ScrollInView>
        </div>
      </section>

      {/* Payment Options */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Payment options' : '支付选项'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Flexible ways to manage costs' : '灵活的费用管理方式'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            {paymentOptions.map((option, idx) => (
              <ScrollInView key={option.name} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg className="h-6 w-6 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={option.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2f2b33] mb-2">
                        {isEn ? option.name : option.nameZh}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#5a555d] mb-4">
                    {isEn ? option.description : option.descriptionZh}
                  </p>
                  {option.details && (
                    <ul className="space-y-2 mt-4">
                      {(isEn ? option.details : option.detailsZh!).map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-start gap-2 text-[14px] text-[#5a555d]">
                          <span className="text-[#a63655] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <div className="text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Pricing FAQ' : '价格常见问题'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Your billing questions answered' : '您的账单问题解答'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {pricingFAQs.map((faq, idx) => (
              <ScrollInView key={idx} delay={idx * 0.05}>
                <Card className="px-8 py-6">
                  <h3 className="text-lg font-medium text-[#2f2b33] mb-3">
                    {isEn ? faq.question : faq.questionZh}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5a555d]">
                    {isEn ? faq.answer : faq.answerZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8d5d0] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Questions about costs?' : '关于费用的问题？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn ? 'Schedule a free financial consultation' : '预约免费财务咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'Our financial coordinators will review your insurance benefits, explain all costs, and help you explore financing options.'
              : '我们的财务协调员将审查您的保险福利，解释所有费用，并帮助您探索融资选项。'}
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              {isEn ? 'Get your cost estimate' : '获取费用估算'}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
