'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context'

interface ServiceItem {
  id: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  icon: string
}

export default function ServicesPage() {
  const { currentLanguage } = useLanguage()

  const services: ServiceItem[] = [
    {
      id: 'egg-freezing',
      titleEn: 'Egg Freezing',
      titleZh: '冻卵',
      descEn: 'Preserve your fertility and extend your family planning options. Our advanced egg freezing technology ensures maximum viability.',
      descZh: '保存您的生育能力，延长您的家庭规划选择。我们先进的冻卵技术确保最大的活力。',
      icon: '❄️'
    },
    {
      id: 'ivf',
      titleEn: 'In Vitro Fertilization',
      titleZh: '体外受精(IVF)',
      descEn: 'Complete IVF treatment with personalized protocols. Our success rates are among the highest in the region.',
      descZh: '完整的体外受精治疗，采用个性化方案。我们的成功率在该地区处于领先水平。',
      icon: '🧬'
    },
    {
      id: 'embryo-freezing',
      titleEn: 'Embryo Freezing',
      titleZh: '冻胚胎',
      descEn: 'Store healthy embryos for future use. Perfect for patients who wish to space their pregnancies.',
      descZh: '储存健康的胚胎供将来使用。适合希望间隔怀孕的患者。',
      icon: '🧫'
    },
    {
      id: 'pgt-testing',
      titleEn: 'PGT Genetic Testing',
      titleZh: 'PGT遗传检测',
      descEn: 'Comprehensive genetic screening of embryos to identify chromosomal abnormalities before transfer.',
      descZh: '移植前胚胎综合遗传学检测，以识别染色体异常。',
      icon: '🔬'
    },
    {
      id: 'donor-services',
      titleEn: 'Egg & Sperm Donation',
      titleZh: '卵子和精子捐献',
      descEn: 'Access to carefully screened and evaluated donor gametes for patients who need them.',
      descZh: '获得经过仔细筛查和评估的捐献配子，供需要的患者使用。',
      icon: '💝'
    },
    {
      id: 'surrogacy',
      titleEn: 'Gestational Surrogacy',
      titleZh: '代孕',
      descEn: 'Comprehensive surrogacy program with support for intended parents throughout the process.',
      descZh: '全面的代孕计划，在整个过程中为预期父母提供支持。',
      icon: '👶'
    },
    {
      id: 'icsi',
      titleEn: 'ICSI - Intracytoplasmic Sperm Injection',
      titleZh: 'ICSI卵胞质内单精子注射',
      descEn: 'Advanced treatment for male factor infertility with exceptional fertilization and pregnancy rates.',
      descZh: '针对男性因素不孕症的先进治疗，受精率和妊娠率异常高。',
      icon: '💪'
    },
    {
      id: 'fertility-preservation',
      titleEn: 'Fertility Preservation',
      titleZh: '生育能力保存',
      descEn: 'Preserve your reproductive options before medical treatments or life transitions.',
      descZh: '在医疗治疗或人生转变前保存您的生育选择。',
      icon: '⏰'
    }
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? 'Our Services' : '我们的服务'}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {currentLanguage === 'en'
              ? 'Comprehensive fertility care solutions tailored to your unique needs. From preservation to treatment, we have you covered.'
              : '根据您独特需求量身定制的综合生育诊疗解决方案。从保存到治疗，我们全程为您服务。'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#e33479] transition">
                  {currentLanguage === 'en' ? service.titleEn : service.titleZh}
                </h3>
                <p className="text-slate-600 text-sm">
                  {currentLanguage === 'en' ? service.descEn : service.descZh}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {currentLanguage === 'en' ? 'Why Our Services Stand Out' : '为什么我们的服务脱颖而出'}
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'World-Class Facilities' : '世界级设施'}
                </h3>
                <p className="text-slate-600">
                  {currentLanguage === 'en'
                    ? 'Our laboratory is equipped with the latest technology and equipment to ensure optimal conditions for your care.'
                    : '我们的实验室配备最新的技术和设备，确保为您提供最佳照护条件。'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'Expert Medical Team' : '专业医疗团队'}
                </h3>
                <p className="text-slate-600">
                  {currentLanguage === 'en'
                    ? 'Our board-certified fertility specialists have years of experience helping patients achieve their dreams.'
                    : '我们的认证生育专家拥有多年的经验，帮助患者实现梦想。'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'Personalized Care' : '个性化护理'}
                </h3>
                <p className="text-slate-600">
                  {currentLanguage === 'en'
                    ? 'Each treatment plan is customized based on your specific diagnosis and circumstances.'
                    : '每个治疗计划都根据您的具体诊断和情况量身定制。'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? 'Comprehensive Support' : '全面支持'}
                </h3>
                <p className="text-slate-600">
                  {currentLanguage === 'en'
                    ? 'From initial consultation through pregnancy confirmation, we support you every step of the way.'
                    : '从初始咨询到妊娠确认，我们在每一步都支持您。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#e33479] to-[#d01e6d] text-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {currentLanguage === 'en' ? 'Find Your Path to Parenthood' : '找到您成为父母的道路'}
          </h2>
          <p className="text-white/90 mb-8">
            {currentLanguage === 'en'
              ? 'Schedule a consultation with our specialists to discuss the best treatment option for you.'
              : '与我们的专家预约咨询，讨论最适合您的治疗选择。'}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-[#e33479] font-semibold rounded-lg hover:bg-slate-100 transition duration-300"
          >
            {currentLanguage === 'en' ? 'Book Consultation' : '预约咨询'}
          </Link>
        </div>
      </section>
    </main>
  )
}
