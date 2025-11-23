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

      {/* Storage Renewal Process */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Storage renewal & management' : '存储续费和管理'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'How to renew and manage your sample storage'
                  : '如何续费和管理您的样本存储'}
              </h2>
              <p className="mt-6 text-[16px] text-[#5a555d] leading-relaxed">
                {isEn
                  ? 'Your frozen eggs, sperm, or embryos are stored securely in our state-of-the-art cryopreservation facility. Here\'s everything you need to know about renewal, transfer, and long-term management.'
                  : '您的冷冻卵子、精子或胚胎安全存储在我们最先进的冷冻保存设施中。以下是您需要了解的关于续费、转移和长期管理的所有信息。'}
              </p>
            </div>
          </ScrollInView>

          <div className="space-y-8">
            {/* Renewal Timeline Card */}
            <ScrollInView>
              <Card className="px-8 py-8">
                <h3 className="text-2xl font-semibold text-[#2f2b33] mb-6 flex items-center gap-3">
                  <svg className="h-7 w-7 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {isEn ? 'Annual Renewal Timeline' : '年度续费时间表'}
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f4f0] border-2 border-[#5cb88a]">
                      <span className="text-lg font-bold text-[#5cb88a]">1</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                        {isEn ? '60 Days Before Anniversary' : '周年日前60天'}
                      </h4>
                      <p className="text-[14px] text-[#5a555d]">
                        {isEn
                          ? 'First renewal reminder sent via email and SMS. Invoice available in patient portal.'
                          : '通过电子邮件和短信发送第一次续费提醒。发票可在患者门户中查看。'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3cd] border-2 border-[#f8ce6b]">
                      <span className="text-lg font-bold text-[#d19807]">2</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                        {isEn ? '30 Days Before Anniversary' : '周年日前30天'}
                      </h4>
                      <p className="text-[14px] text-[#5a555d]">
                        {isEn
                          ? 'Payment due date. Annual storage fee of $650 must be paid to continue storage.'
                          : '付款截止日期。必须支付$650年度存储费以继续存储。'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe4e4] border-2 border-[#f8a5a5]">
                      <span className="text-lg font-bold text-[#d1232a]">3</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                        {isEn ? 'Anniversary Date' : '周年日'}
                      </h4>
                      <p className="text-[14px] text-[#5a555d]">
                        {isEn
                          ? 'If unpaid, grace period begins. Second notice sent via certified mail. Samples remain safely stored.'
                          : '如果未付款，宽限期开始。通过挂号信发送第二次通知。样本继续安全存储。'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0e6db] border-2 border-[#a63655]">
                      <span className="text-lg font-bold text-[#a63655]">4</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                        {isEn ? '60 Days After Anniversary' : '周年日后60天'}
                      </h4>
                      <p className="text-[14px] text-[#5a555d]">
                        {isEn
                          ? 'Grace period ends. Final notice sent. You must respond within 30 days with payment or disposition instructions.'
                          : '宽限期结束。发送最终通知。您必须在30天内回复付款或处置指示。'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-[#fff9f5] border-l-4 border-[#a63655] rounded">
                  <p className="text-[14px] text-[#5a555d] leading-relaxed">
                    <span className="font-semibold text-[#2f2b33]">{isEn ? 'Important:' : '重要提示：'}</span>{' '}
                    {isEn
                      ? 'If no payment or response is received within 90 days after anniversary date, samples will be disposed of according to your signed storage agreement. We make every effort to contact you before this happens.'
                      : '如果在周年日后90天内未收到付款或回复，样本将根据您签署的存储协议进行处置。在此之前，我们会尽一切努力与您联系。'}
                  </p>
                </div>
              </Card>
            </ScrollInView>

            {/* Payment Options */}
            <ScrollInView delay={0.1}>
              <Card className="px-8 py-8">
                <h3 className="text-2xl font-semibold text-[#2f2b33] mb-6 flex items-center gap-3">
                  <svg className="h-7 w-7 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  {isEn ? 'Renewal Payment Options' : '续费付款选项'}
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-5 bg-[#fdfbf9] border border-[#e8d5d0] rounded-lg">
                    <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'Auto-Renewal' : '自动续费'}
                    </h4>
                    <p className="text-[13px] text-[#5a555d] mb-3">
                      {isEn
                        ? 'Credit card on file is automatically charged 30 days before anniversary. Recommended for peace of mind.'
                        : '文件中的信用卡在周年日前30天自动扣款。建议使用以获得安心。'}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#e8f4f0] text-[#5cb88a] text-xs font-semibold rounded-full">
                      {isEn ? 'Recommended' : '推荐'}
                    </span>
                  </div>

                  <div className="p-5 bg-[#fdfbf9] border border-[#e8d5d0] rounded-lg">
                    <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'Patient Portal' : '患者门户'}
                    </h4>
                    <p className="text-[13px] text-[#5a555d] mb-3">
                      {isEn
                        ? 'Log into your account, view invoice, and pay online with credit/debit card or HSA/FSA card.'
                        : '登录您的账户，查看发票，并使用信用卡/借记卡或HSA/FSA卡在线支付。'}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#f0e6db] text-[#a63655] text-xs font-semibold rounded-full">
                      {isEn ? 'Most Common' : '最常见'}
                    </span>
                  </div>

                  <div className="p-5 bg-[#fdfbf9] border border-[#e8d5d0] rounded-lg">
                    <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                      {isEn ? 'Phone or Mail' : '电话或邮寄'}
                    </h4>
                    <p className="text-[13px] text-[#5a555d] mb-3">
                      {isEn
                        ? 'Call our billing department or mail a check. Allow 5-7 business days for check processing.'
                        : '致电我们的账单部门或邮寄支票。支票处理需要5-7个工作日。'}
                    </p>
                    <span className="inline-block px-3 py-1 bg-[#fff3cd] text-[#d19807] text-xs font-semibold rounded-full">
                      {isEn ? 'Alternative' : '替代方案'}
                    </span>
                  </div>
                </div>
              </Card>
            </ScrollInView>

            {/* Updating Contact Info */}
            <ScrollInView delay={0.2}>
              <Card className="px-8 py-8">
                <h3 className="text-2xl font-semibold text-[#2f2b33] mb-4 flex items-center gap-3">
                  <svg className="h-7 w-7 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {isEn ? 'Keep Your Contact Information Current' : '保持联系信息更新'}
                </h3>
                <p className="text-[15px] text-[#5a555d] mb-4 leading-relaxed">
                  {isEn
                    ? 'It is critical to maintain current contact information so we can reach you about renewals, facility updates, or emergencies. Update your information immediately if you:'
                    : '保持最新的联系信息至关重要，以便我们能够就续费、设施更新或紧急情况与您联系。如果您有以下情况，请立即更新您的信息：'}
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      en: 'Change your email address or phone number',
                      zh: '更改电子邮件地址或电话号码',
                    },
                    {
                      en: 'Move to a new address',
                      zh: '搬到新地址',
                    },
                    {
                      en: 'Get married, divorced, or change your legal name',
                      zh: '结婚、离婚或更改法定姓名',
                    },
                    {
                      en: 'Want to add or remove authorized contacts',
                      zh: '想要添加或删除授权联系人',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-[#a63655] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[14px] text-[#5a555d]">
                        {isEn ? item.en : item.zh}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button variant="outline" size="md">
                      {isEn ? 'Update contact information' : '更新联系信息'}
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScrollInView>

            {/* Sample Transfer Process */}
            <ScrollInView delay={0.3}>
              <Card className="px-8 py-8">
                <h3 className="text-2xl font-semibold text-[#2f2b33] mb-4 flex items-center gap-3">
                  <svg className="h-7 w-7 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  {isEn ? 'Transferring Samples to Another Facility' : '将样本转移到另一个设施'}
                </h3>
                <p className="text-[15px] text-[#5a555d] mb-6 leading-relaxed">
                  {isEn
                    ? 'If you relocate or choose to continue treatment at another clinic, we fully support your right to transfer your frozen samples. Here\'s the process:'
                    : '如果您搬迁或选择在另一家诊所继续治疗，我们完全支持您转移冷冻样本的权利。以下是流程：'}
                </p>

                <div className="space-y-4">
                  {[
                    {
                      stepEn: 'Submit Transfer Request',
                      stepZh: '提交转移申请',
                      detailEn:
                        'Complete transfer request form at least 30 days before desired transfer date. Specify receiving facility name, address, and contact.',
                      detailZh:
                        '至少在所需转移日期前30天完成转移申请表格。指定接收设施名称、地址和联系方式。',
                    },
                    {
                      stepEn: 'Receiving Facility Verification',
                      stepZh: '接收设施验证',
                      detailEn:
                        'We verify the receiving facility is CAP/CLIA certified and equipped to handle cryopreserved samples. They must provide shipping instructions.',
                      detailZh:
                        '我们验证接收设施是否获得CAP/CLIA认证并具备处理冷冻保存样本的能力。他们必须提供运输说明。',
                    },
                    {
                      stepEn: 'Payment & Documentation',
                      stepZh: '付款和文件',
                      detailEn:
                        'Transfer fee of $500 (covers specialized dry shipper container, courier service, and coordination). Sign release of liability.',
                      detailZh:
                        '转移费用$500（包括专用干式运输容器、快递服务和协调）。签署责任豁免。',
                    },
                    {
                      stepEn: 'Secure Transport',
                      stepZh: '安全运输',
                      detailEn:
                        'Samples packed in liquid nitrogen dry shipper and transported via certified medical courier with real-time GPS tracking and temperature monitoring.',
                      detailZh:
                        '样本装入液氮干式运输容器，通过认证医疗快递运输，具有实时GPS跟踪和温度监控。',
                    },
                    {
                      stepEn: 'Delivery Confirmation',
                      stepZh: '交付确认',
                      detailEn:
                        'Receiving facility confirms receipt and condition of samples. We provide you with transfer completion certificate and documentation.',
                      detailZh:
                        '接收设施确认收到样本及其状态。我们为您提供转移完成证书和文件。',
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-[#fdfbf9] rounded-lg">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#a63655] text-white font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-[#2f2b33] mb-2">
                          {isEn ? step.stepEn : step.stepZh}
                        </h4>
                        <p className="text-[14px] text-[#5a555d] leading-relaxed">
                          {isEn ? step.detailEn : step.detailZh}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#e8f4f0] border border-[#5cb88a] rounded">
                  <p className="text-[14px] text-[#5a555d]">
                    <span className="font-semibold text-[#2f2b33]">{isEn ? 'Transfer Timeframe:' : '转移时间：'}</span>{' '}
                    {isEn
                      ? 'The entire process typically takes 2-4 weeks from initial request to delivery confirmation. Samples remain safely frozen throughout transport with no quality degradation.'
                      : '从最初申请到交付确认，整个过程通常需要2-4周。样本在整个运输过程中保持安全冷冻，质量不会下降。'}
                  </p>
                </div>
              </Card>
            </ScrollInView>
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
