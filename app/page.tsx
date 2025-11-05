'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context'

export default function Home() {
  const { t, currentLanguage } = useLanguage()
  const [currentAdvantage, setCurrentAdvantage] = useState(0)

  const advantages = [
    {
      titleEn: 'Personalized Care',
      titleZh: '个性化关怀',
      descEn: 'Our experienced medical team provides customized treatment plans for every patient',
      descZh: '我们经验丰富的医疗团队为每位患者提供定制化治疗方案'
    },
    {
      titleEn: 'Advanced Technology',
      titleZh: '先进技术',
      descEn: 'State-of-the-art laboratory equipment and latest fertility treatment techniques',
      descZh: '最先进的实验室设备和最新的生育治疗技术'
    },
    {
      titleEn: 'Chinese-Speaking Support',
      titleZh: '中文服务',
      descEn: 'Professional translators and staff fluent in Chinese for full medical support',
      descZh: '专业翻译和中文流利的工作人员提供全面医疗支持'
    },
    {
      titleEn: 'Complete Care',
      titleZh: '全程陪同',
      descEn: 'Dedicated staff accompaniment throughout your entire treatment journey',
      descZh: '专业人员全程陪同您整个治疗过程'
    },
    {
      titleEn: 'Real Medical Institution',
      titleZh: '真实医疗机构',
      descEn: 'Independent clinic with own doctors, facilities, and equipment - not a referral service',
      descZh: '拥有自己的医生、设施和设备的独立诊所 - 不是转介服务'
    }
  ]

  const successStories = [
    {
      nameEn: 'Jennifer & Michael',
      nameZh: '詹妮弗和迈克尔',
      storyEn: 'After 3 years of trying, Jennifer delivered healthy twins through IVF. The personalized care made all the difference.',
      storyZh: '经过3年的尝试后，詹妮弗通过体外受精生了健康的双胞胎。个性化护理让一切都变得不同。',
      resultEn: 'Successful IVF Pregnancy'
    },
    {
      nameEn: 'Sarah',
      nameZh: '莎拉',
      storyEn: 'At age 42, Sarah preserved her fertility through egg freezing. She now has the peace of mind she needed.',
      storyZh: '42岁的莎拉通过冻卵保存了她的生育能力。她现在拥有了她需要的心理平静。',
      resultEn: 'Egg Freezing Success'
    },
    {
      nameEn: 'David & Lisa',
      nameZh: '大卫和丽莎',
      storyEn: 'With male factor infertility and our advanced ICSI techniques, their dream of parenthood came true.',
      storyZh: '在患有男性因素不孕症的情况下，通过我们先进的ICSI技术，他们成为父母的梦想成真了。',
      resultEn: 'Male Factor Infertility Treatment'
    }
  ]

  const services = [
    {
      titleEn: 'Egg Freezing',
      titleZh: '冻卵',
      descEn: 'Preserve your fertility for the future',
      descZh: '为未来保存您的生育能力'
    },
    {
      titleEn: 'IVF',
      titleZh: '体外受精',
      descEn: 'In vitro fertilization treatment',
      descZh: '体外受精治疗'
    },
    {
      titleEn: 'Embryo Freezing',
      titleZh: '冻胚胎',
      descEn: 'Store embryos for future use',
      descZh: '储存胚胎供将来使用'
    },
    {
      titleEn: 'PGT Testing',
      titleZh: 'PGT检测',
      descEn: 'Genetic screening for embryos',
      descZh: '胚胎遗传学检测'
    },
    {
      titleEn: 'Donor Services',
      titleZh: '捐献服务',
      descEn: 'Egg and sperm donation programs',
      descZh: '卵子和精子捐献计划'
    },
    {
      titleEn: 'Surrogacy',
      titleZh: '代孕',
      descEn: 'Gestational surrogacy support',
      descZh: '代孕支持'
    }
  ]

  const nextAdvantage = () => {
    setCurrentAdvantage((prev) => (prev + 1) % advantages.length)
  }

  const prevAdvantage = () => {
    setCurrentAdvantage((prev) => (prev - 1 + advantages.length) % advantages.length)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#1a1a2e] to-slate-900">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#e33479] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {currentLanguage === 'en'
              ? 'Fertility Made Personal'
              : '生育诊疗，个人化护理'}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {currentLanguage === 'en'
              ? 'World-class fertility care with personalized medical services. Our experienced team is dedicated to helping you achieve your dreams of parenthood.'
              : '世界级生育诊疗服务，个性化医疗照护。我们经验丰富的团队致力于帮助您实现为人父母的梦想。'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#e33479] text-white font-semibold rounded-lg hover:bg-[#d01e6d] transition duration-300 text-center"
            >
              {currentLanguage === 'en' ? 'Book Free Consultation' : '预约免费咨询'}
            </Link>
            <Link
              href="/services"
              className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300 text-center"
            >
              {currentLanguage === 'en' ? 'View Services' : '查看服务'}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Advantages Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            {currentLanguage === 'en' ? 'Why Choose IVY Fertility?' : '为什么选择IVY生育中心？'}
          </h2>

          {/* Carousel */}
          <div className="relative bg-gradient-to-br from-[#e33479] to-[#d01e6d] rounded-2xl p-10 sm:p-16 text-white min-h-[300px] flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">
              {currentLanguage === 'en'
                ? advantages[currentAdvantage].titleEn
                : advantages[currentAdvantage].titleZh}
            </h3>
            <p className="text-lg text-white/90 mb-8">
              {currentLanguage === 'en'
                ? advantages[currentAdvantage].descEn
                : advantages[currentAdvantage].descZh}
            </p>

            {/* Navigation dots */}
            <div className="flex gap-2 justify-center mt-8">
              {advantages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentAdvantage(idx)}
                  className={`w-2 h-2 rounded-full transition duration-300 ${
                    idx === currentAdvantage ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Show advantage ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
              <button
                onClick={prevAdvantage}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition duration-300"
                aria-label="Previous advantage"
              >
                ‹
              </button>
              <button
                onClick={nextAdvantage}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition duration-300"
                aria-label="Next advantage"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            {currentLanguage === 'en' ? 'Our Services' : '我们的服务'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href="/services"
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold text-[#e33479] mb-3">
                  {currentLanguage === 'en' ? service.titleEn : service.titleZh}
                </h3>
                <p className="text-slate-600">
                  {currentLanguage === 'en' ? service.descEn : service.descZh}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-[#e33479] text-white font-semibold rounded-lg hover:bg-[#d01e6d] transition duration-300"
            >
              {currentLanguage === 'en' ? 'View All Services' : '查看所有服务'}
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            {currentLanguage === 'en' ? 'Patient Success Stories' : '患者成功案例'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-8 border-l-4 border-[#e33479] hover:shadow-lg transition duration-300"
              >
                <p className="text-[#e33479] font-semibold mb-3">
                  {currentLanguage === 'en' ? story.resultEn : story.resultEn}
                </p>
                <p className="font-bold text-lg text-slate-900 mb-3">
                  {currentLanguage === 'en' ? story.nameEn : story.nameZh}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  "{currentLanguage === 'en' ? story.storyEn : story.storyZh}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e33479] to-[#d01e6d] text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {currentLanguage === 'en'
              ? 'Ready to Start Your Journey?'
              : '准备好开始您的生育之旅了吗？'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {currentLanguage === 'en'
              ? 'Book a free consultation with our fertility specialists today. Your dream of parenthood starts here.'
              : '立即与我们的生育专家预约免费咨询。您为人父母的梦想从这里开始。'}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#e33479] font-semibold rounded-lg hover:bg-slate-100 transition duration-300"
          >
            {currentLanguage === 'en' ? 'Book Your Consultation' : '预约咨询'}
          </Link>
        </div>
      </section>
    </main>
  )
}
