'use client'

import { useLanguage } from '@/lib/context'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { ScrollInView } from '@/components/ui/ScrollInView'
import { Button } from '@/components/ui/Button'
import {
  labCertifications,
  labEquipment,
  storageFacilities,
  sampleManagement,
  qualityControlProcesses,
  labStats
} from '@/lib/lab-data'
import Link from 'next/link'

export default function OurLabPage() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  return (
    <main className="bg-[#fdf7f2]">
      <HeroSection
        eyebrow={isEn ? 'Our Laboratory & Facilities' : '我们的实验室和设施'}
        backgroundImage="/images/service.jpg"
        title={
          isEn
            ? 'State-of-the-art embryology lab with gold-standard safety'
            : '采用金标准安全的最先进胚胎学实验室'
        }
        subtitle={
          isEn
            ? 'CAP-accredited, ISO-certified facility with 24/7 monitoring, dual backup systems, and zero sample mix-ups since 2015.'
            : 'CAP 认证、ISO 认证的设施，配备 24/7 监控、双备份系统，自 2015 年以来零样本混淆。'
        }
        primaryCtaText={isEn ? 'Schedule virtual lab tour' : '预约虚拟实验室参观'}
        primaryCtaHref="/contact"
        secondaryCtaText={isEn ? 'View certifications' : '查看认证'}
        secondaryCtaHref="#certifications"
        stats={[
          { value: '98%+', label: isEn ? 'Embryo survival rate' : '胚胎存活率' },
          { value: 'Zero', label: isEn ? 'Sample mix-ups' : '样本混淆' },
          { value: '24/7', label: isEn ? 'Temperature monitoring' : '温度监控' },
        ]}
        priority
      />

      {/* Certifications Section */}
      <section id="certifications" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Accreditations & certifications' : '认证与证书'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Independently verified excellence'
                  : '独立验证的卓越标准'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {labCertifications.map((cert, idx) => (
              <ScrollInView key={cert.name} delay={idx * 0.1}>
                <Card className="px-6 py-8 h-full text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#f7ebe5] flex items-center justify-center">
                      <svg
                        className="h-8 w-8 text-[#a63655]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#2f2b33] mb-3">
                    {isEn ? cert.name : cert.nameZh}
                  </h3>
                  <p className="text-[14px] text-[#5a555d] leading-relaxed">
                    {isEn ? cert.description : cert.descriptionZh}
                  </p>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Facilities Section */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Cryopreservation facilities' : '冷冻保存设施'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'How we protect your future family'
                  : '我们如何保护您的未来家庭'}
              </h2>
              <p className="mt-6 text-[16px] text-[#5a555d] leading-relaxed">
                {isEn
                  ? 'Your eggs, sperm, and embryos are stored in separate, monitored tanks with multiple redundant safety systems. Temperature maintained at -196°C with 24/7 alarm monitoring.'
                  : '您的卵子、精子和胚胎存储在独立的、受监控的罐中，配备多个冗余安全系统。温度保持在 -196°C，配备 24/7 警报监控。'}
              </p>
            </div>
          </ScrollInView>

          <div className="space-y-8">
            {storageFacilities.map((facility, idx) => (
              <ScrollInView key={facility.type} delay={idx * 0.1}>
                <Card className="overflow-hidden">
                  <div className="px-8 py-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-[#a63655]">
                        <svg
                          className="h-7 w-7 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-[#2f2b33]">
                          {isEn ? facility.titleEn : facility.titleZh}
                        </h3>
                        <p className="text-sm text-[#a63655] font-medium mt-1">
                          {isEn ? facility.technology : facility.technologyZh}
                        </p>
                      </div>
                    </div>

                    {/* Temperature */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-[#a63655]">
                          {facility.temperature}
                        </span>
                        <span className="text-[15px] text-[#5a555d]">
                          {isEn ? 'Storage temperature' : '存储温度'}
                        </span>
                      </div>
                    </div>

                    {/* Monitoring */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#2f2b33] uppercase tracking-wide mb-3">
                        {isEn ? 'Monitoring System' : '监控系统'}
                      </h4>
                      <p className="text-[15px] text-[#5a555d] leading-relaxed">
                        {isEn ? facility.monitoringEn : facility.monitoringZh}
                      </p>
                    </div>

                    {/* Backup Systems */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#2f2b33] uppercase tracking-wide mb-3">
                        {isEn ? 'Safety & Backup Systems' : '安全与备份系统'}
                      </h4>
                      <ul className="space-y-2">
                        {(isEn
                          ? facility.backupSystemsEn
                          : facility.backupSystemsZh
                        ).map((system, sysIdx) => (
                          <li
                            key={sysIdx}
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
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{system}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Capacity */}
                    <div className="bg-[#f7ebe5] p-4 rounded-lg">
                      <p className="text-[14px] text-[#2f2b33]">
                        <span className="font-semibold">
                          {isEn ? 'Capacity:' : '容量：'}
                        </span>{' '}
                        {isEn ? facility.capacityEn : facility.capacityZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Management Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Sample tracking & management' : '样本追踪与管理'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'How we keep your samples safe and accessible'
                  : '我们如何确保您的样本安全且可访问'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-8 md:grid-cols-2">
            {sampleManagement.map((item, idx) => (
              <ScrollInView key={item.titleEn} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
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
                          d={item.iconPath}
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2f2b33] mb-3">
                        {isEn ? item.titleEn : item.titleZh}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn ? item.descriptionEn : item.descriptionZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Equipment Section */}
      <section className="bg-[#e8d5d0] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Advanced equipment' : '先进设备'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Industry-leading technology for optimal outcomes'
                  : '行业领先技术，确保最佳结果'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2">
            {labEquipment.map((equipment, idx) => (
              <ScrollInView key={equipment.name} delay={idx * 0.1}>
                <Card className="px-8 py-8 h-full">
                  <h3 className="text-xl font-semibold text-[#2f2b33] mb-2">
                    {equipment.name}
                  </h3>
                  <p className="text-sm text-[#a63655] mb-4">
                    {equipment.manufacturer}
                  </p>
                  <p className="text-[15px] text-[#5a555d] mb-4 italic">
                    {isEn ? equipment.purpose : equipment.purposeZh}
                  </p>
                  <ul className="space-y-2">
                    {(isEn ? equipment.features : equipment.featuresZh).map(
                      (feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-[14px] text-[#5a555d]"
                        >
                          <span className="text-[#a63655] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Quality assurance' : '质量保证'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn
                  ? 'Continuous monitoring and improvement'
                  : '持续监控与改进'}
              </h2>
            </div>
          </ScrollInView>

          <div className="space-y-6">
            {qualityControlProcesses.map((process, idx) => (
              <ScrollInView key={process.step} delay={idx * 0.05}>
                <Card className="px-8 py-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#a63655] text-white text-lg font-semibold">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-[#2f2b33]">
                          {isEn ? process.titleEn : process.titleZh}
                        </h3>
                        <span className="text-sm text-[#a63655] font-medium whitespace-nowrap ml-4">
                          {isEn ? process.frequency : process.frequencyZh}
                        </span>
                      </div>
                      <p className="text-[15px] leading-relaxed text-[#5a555d]">
                        {isEn
                          ? process.descriptionEn
                          : process.descriptionZh}
                      </p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Statistics */}
      <section className="bg-[#f7eee7] py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-0">
          <ScrollInView>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="font-serif italic text-3xl text-[#c86b79]">
                {isEn ? 'Our track record' : '我们的业绩记录'}
              </span>
              <h2 className="mt-4 text-[42px] text-[#2f2b33]">
                {isEn ? 'Results that speak for themselves' : '结果不言自明'}
              </h2>
            </div>
          </ScrollInView>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {labStats.map((stat, idx) => (
              <ScrollInView key={stat.metricEn} delay={idx * 0.1}>
                <Card className="px-6 py-8 text-center h-full">
                  <div className="text-4xl font-bold text-[#a63655] mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2f2b33] mb-3">
                    {isEn ? stat.metricEn : stat.metricZh}
                  </h3>
                  <p className="text-[14px] text-[#5a555d]">
                    {isEn ? stat.context : stat.contextZh}
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
            {isEn ? 'See our lab in action' : '看看我们的实验室'}
          </span>
          <h2 className="text-[40px] leading-tight text-[#2f2b33]">
            {isEn
              ? 'Schedule a virtual lab tour with our embryology team'
              : '与我们的胚胎学团队预约虚拟实验室参观'}
          </h2>
          <p className="max-w-3xl text-[16px] leading-relaxed text-[#5a555d]">
            {isEn
              ? 'We offer virtual tours where you can meet our embryologists, see our equipment, and ask questions about how we protect your samples.'
              : '我们提供虚拟参观，您可以见到我们的胚胎学家，查看我们的设备，并询问我们如何保护您的样本。'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {isEn ? 'Request lab tour' : '申请实验室参观'}
              </Button>
            </Link>
            <Link href="/our-team">
              <Button variant="outline" size="lg">
                {isEn ? 'Meet our embryologists' : '认识我们的胚胎学家'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
