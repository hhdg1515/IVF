'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import {
  legalDocuments,
  patientRights,
  dispositionOptions,
  legalResources,
} from '@/lib/legal-data'
import Link from 'next/link'
import { useState } from 'react'

export default function LegalDocumentsPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null)

  // Group documents by category
  const documentsByCategory = legalDocuments.reduce(
    (acc, doc) => {
      const category = isEn ? doc.categoryEn : doc.categoryZh
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(doc)
      return acc
    },
    {} as Record<string, typeof legalDocuments>
  )

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Legal Documents & Patient Rights' : '法律文件和患者权利'}
        backgroundImage="/images/service.jpg"
        title={
          isEn
            ? 'Transparency and informed consent at every step'
            : '每一步的透明度和知情同意'
        }
        subtitle={
          isEn
            ? 'Understanding your rights, responsibilities, and the legal agreements that protect you throughout your fertility journey.'
            : '了解您在整个生育旅程中的权利、责任以及保护您的法律协议。'
        }
        primaryCtaText={isEn ? 'Schedule legal consultation' : '预约法律咨询'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'Download forms' : '下载表格'}
        secondaryCtaHref="#documents"
        priority
      />

      {/* Patient Rights Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Your rights as a patient' : '作为患者的权利'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'We are committed to protecting your rights'
                  : '我们致力于保护您的权利'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2">
            {patientRights.map((right, idx) => (
              <ScrollInView key={right.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
                      <svg
                        className="h-6 w-6 text-[#a63655]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={right.iconPath}
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2f2b33] mb-3">
                        {isEn ? right.titleEn : right.titleZh}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? right.descriptionEn : right.descriptionZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section id="documents" className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Required legal documents' : '必需的法律文件'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'What you will sign and why'
                  : '您将签署什么以及为什么'}
              </h2>
              <p className="mt-6 text-[16px] text-[#5a555d] leading-relaxed">
                {isEn
                  ? 'All documents are explained in detail during your consultation. You will have time to review, ask questions, and consult with legal counsel before signing.'
                  : '所有文件都会在咨询期间详细解释。您将有时间审查、提出问题并在签署前咨询法律顾问。'}
              </p>
            </div>
          </ScrollInView>

          <div className="space-y-12">
            {Object.entries(documentsByCategory).map(
              ([category, docs], catIdx) => (
                <div key={category}>
                  <ScrollInView delay={catIdx * 0.1}>
                    <h3 className="text-2xl font-semibold text-[#2f2b33] mb-6">
                      {category}
                    </h3>
                  </ScrollInView>

                  <div className="space-y-4">
                    {docs.map((doc, docIdx) => (
                      <ScrollInView
                        key={doc.id}
                        delay={catIdx * 0.1 + docIdx * 0.05}
                      >
                        <Card className="overflow-hidden">
                          <button
                            onClick={() =>
                              setExpandedDoc(
                                expandedDoc === doc.id ? null : doc.id
                              )
                            }
                            className="w-full px-8 py-6 text-left hover:bg-[#fdf9f7] transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-[#2f2b33] mb-2">
                                  {isEn ? doc.titleEn : doc.titleZh}
                                </h4>
                                <p className="text-sm text-[#a63655] font-medium mb-2">
                                  {isEn
                                    ? `Required: ${doc.whenRequired}`
                                    : `必需时间：${doc.whenRequiredZh}`}
                                </p>
                                <p className="text-[15px] text-[#5a555d]">
                                  {isEn
                                    ? doc.descriptionEn
                                    : doc.descriptionZh}
                                </p>
                              </div>
                              <svg
                                className={`h-6 w-6 text-[#a63655] flex-shrink-0 ml-4 transition-transform ${
                                  expandedDoc === doc.id ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>

                          {expandedDoc === doc.id && (
                            <div className="px-8 pb-6 border-t border-[#f0e6db] pt-6">
                              <h5 className="text-sm font-semibold text-[#2f2b33] uppercase tracking-wide mb-4">
                                {isEn ? 'Key Points Covered:' : '涵盖的关键点：'}
                              </h5>
                              <ul className="space-y-2">
                                {(isEn
                                  ? doc.keyPointsEn
                                  : doc.keyPointsZh
                                ).map((point, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-[15px] text-[#5a555d]"
                                  >
                                    <svg
                                      className="h-5 w-5 text-[#a63655] flex-shrink-0 mt-0.5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                              {doc.downloadUrl && (
                                <div className="mt-6">
                                  <Link
                                    href={doc.downloadUrl}
                                    className="inline-flex items-center gap-2 text-[#a63655] hover:text-[#8b2a45] font-medium"
                                  >
                                    <svg
                                      className="h-5 w-5"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                    <span>
                                      {isEn
                                        ? 'Download sample form (PDF)'
                                        : '下载样本表格 (PDF)'}
                                    </span>
                                  </Link>
                                </div>
                              )}
                            </div>
                          )}
                        </Card>
                      </ScrollInView>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Sample Disposition Options */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Sample disposition options' : '样本处置选项'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'You control what happens to your samples'
                  : '您控制样本的处理方式'}
              </h2>
              <p className="mt-6 text-[16px] text-[#5a555d] leading-relaxed">
                {isEn
                  ? 'At any point, you have full authority to decide what happens to your frozen eggs, sperm, or embryos. Here are your options:'
                  : '在任何时候，您都有完全的权力决定您的冷冻卵子、精子或胚胎的处理方式。以下是您的选择：'}
              </p>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {dispositionOptions.map((option, idx) => (
              <ScrollInView key={option.option} delay={idx * 0.1}>
                <Card className="px-8 py-8">
                  <h3 className="text-2xl font-semibold text-[#2f2b33] mb-4">
                    {isEn ? option.option : option.optionZh}
                  </h3>
                  <p className="text-[15px] text-[#5a555d] leading-relaxed mb-6">
                    {isEn ? option.descriptionEn : option.descriptionZh}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-[#2f2b33] uppercase tracking-wide mb-3">
                      {isEn ? 'Requirements:' : '要求：'}
                    </h4>
                    <ul className="space-y-2">
                      {(isEn
                        ? option.requirementsEn
                        : option.requirementsZh
                      ).map((req, reqIdx) => (
                        <li
                          key={reqIdx}
                          className="flex items-start gap-3 text-[15px] text-[#5a555d]"
                        >
                          <svg
                            className="h-5 w-5 text-[#a63655] flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          <span>{req}</span>
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

      {/* Legal Resources */}
      <section className="bg-[#e8d5d0] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Legal resources & support' : '法律资源和支持'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'We help you navigate the legal aspects'
                  : '我们帮助您了解法律方面'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2">
            {legalResources.map((resource, idx) => (
              <ScrollInView key={resource.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <h3 className="text-xl font-semibold text-[#2f2b33] mb-3">
                    {isEn ? resource.titleEn : resource.titleZh}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5a555d] mb-4">
                    {isEn ? resource.descriptionEn : resource.descriptionZh}
                  </p>
                  {resource.contactInfo && (
                    <p className="text-sm text-[#a63655] font-medium">
                      {resource.contactInfo}
                    </p>
                  )}
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-0">
          <ScrollInView>
            <Card className="px-8 py-8 bg-[#fff9f5] border-2 border-[#e2d0c1]">
              <div className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-[#a63655] flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-[#2f2b33] mb-3">
                    {isEn ? 'Important Legal Disclaimer' : '重要法律免责声明'}
                  </h3>
                  <p className="text-[15px] text-[#5a555d] leading-relaxed mb-3">
                    {isEn
                      ? 'The information on this page is for educational purposes only and does not constitute legal advice. Fertility treatment involves complex legal issues that vary by state and individual circumstances.'
                      : '此页面上的信息仅供教育目的，不构成法律建议。生育治疗涉及复杂的法律问题，因州和个人情况而异。'}
                  </p>
                  <p className="text-[15px] text-[#5a555d] leading-relaxed">
                    {isEn
                      ? 'For third-party reproduction (donor eggs, donor sperm, gestational carriers), both parties MUST have independent legal representation. We will provide attorney referrals but cannot provide legal counsel.'
                      : '对于第三方生殖（捐卵、捐精、代孕），双方都必须有独立的法律代表。我们将提供律师推荐，但不能提供法律建议。'}
                  </p>
                </div>
              </div>
            </Card>
          </ScrollInView>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <span className="font-serif italic text-3xl text-[#c86b79]">
            {isEn ? 'Have questions about legal documents?' : '对法律文件有疑问？'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Schedule a consultation with our patient coordinators'
              : '与我们的患者协调员预约咨询'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'We will walk through all required documents, answer your questions, and connect you with legal counsel if needed.'
              : '我们将详细讲解所有必需的文件，回答您的问题，并在需要时为您联系法律顾问。'}
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              {isEn ? 'Request consultation' : '申请咨询'}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
