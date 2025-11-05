'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context'

interface Doctor {
  nameEn: string
  nameZh: string
  titleEn: string
  titleZh: string
  bioEn: string
  bioZh: string
  specialtiesEn: string[]
  specialtiesZh: string[]
}

export default function AboutPage() {
  const { currentLanguage } = useLanguage()

  const doctors: Doctor[] = [
    {
      nameEn: 'Dr. Sarah Chen',
      nameZh: '陈莎拉医生',
      titleEn: 'Medical Director',
      titleZh: '医疗主任',
      bioEn:
        'Dr. Chen is a board-certified fertility specialist with over 15 years of experience in assisted reproductive technologies. She completed her fellowship at a prestigious fertility center and has helped over 2,000 families achieve their dreams of parenthood.',
      bioZh:
        '陈医生是一位经认证的生育专家，在辅助生殖技术方面拥有超过15年的经验。她在知名生育中心完成了研究员培训，已帮助2000多个家庭实现为人父母的梦想。',
      specialtiesEn: ['IVF', 'ICSI', 'Egg Freezing', 'Genetic Counseling'],
      specialtiesZh: ['体外受精', 'ICSI注射', '冻卵', '遗传咨询']
    },
    {
      nameEn: 'Dr. Michael Rodriguez',
      nameZh: '迈克尔·罗德里格斯医生',
      titleEn: 'Reproductive Surgeon',
      titleZh: '生殖外科医生',
      bioEn:
        'Dr. Rodriguez specializes in surgical reproductive procedures. With 12 years of experience, he has performed thousands of egg retrievals and embryo transfers with exceptional precision and success rates.',
      bioZh:
        '罗德里格斯医生专门从事生殖外科手术。拥有12年的经验，他已进行了数千次取卵和胚胎转移手术，精确度和成功率都很高。',
      specialtiesEn: ['Egg Retrieval', 'Embryo Transfer', 'Surgical Correction', 'Fertility Preservation'],
      specialtiesZh: ['取卵', '胚胎转移', '手术纠正', '生育保存']
    },
    {
      nameEn: 'Dr. Lisa Wang',
      nameZh: '王丽莎医生',
      titleEn: 'Embryologist',
      titleZh: '胚胎学家',
      bioEn:
        'Dr. Wang leads our advanced embryology laboratory. She holds a PhD in reproductive biology and is an expert in embryo culture, freezing technology, and genetic testing. Her work directly contributes to our high success rates.',
      bioZh:
        '王医生领导我们先进的胚胎学实验室。她拥有生殖生物学博士学位，是胚胎培养、冷冻技术和遗传学检测的专家。她的工作直接促进了我们的高成功率。',
      specialtiesEn: ['Embryo Culture', 'Vitrification', 'PGT Testing', 'Lab Management'],
      specialtiesZh: ['胚胎培养', '玻璃化', 'PGT检测', '实验室管理']
    },
    {
      nameEn: 'Dr. James Liu',
      nameZh: '刘詹姆斯医生',
      titleEn: 'Reproductive Endocrinologist',
      titleZh: '生殖内分泌学家',
      bioEn:
        'Dr. Liu specializes in hormone management and treatment protocols. His expertise in personalized medicine ensures each patient receives the optimal treatment plan based on their individual needs and medical history.',
      bioZh:
        '刘医生专门从事激素管理和治疗协议。他在个性化医学方面的专业知识确保每位患者根据其个人需求和医学历史获得最优治疗方案。',
      specialtiesEn: ['Hormone Protocols', 'PCOS Treatment', 'Thyroid Management', 'Personalized Medicine'],
      specialtiesZh: ['激素协议', '多囊卵巢综合症治疗', '甲状腺管理', '个性化医学']
    }
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? 'About IVY Fertility Center' : '关于IVY生育中心'}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {currentLanguage === 'en'
              ? 'A real medical institution dedicated to helping you achieve your dreams of parenthood with personalized care and cutting-edge technology.'
              : '一个真正的医疗机构，致力于通过个性化护理和尖端技术帮助您实现为人父母的梦想。'}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {currentLanguage === 'en' ? 'Our Mission' : '我们的使命'}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {currentLanguage === 'en'
                  ? 'To provide world-class fertility care with personalized medical services, leveraging advanced technology and compassionate support. We believe every person deserves the opportunity to achieve their dreams of parenthood.'
                  : '提供世界级的生育诊疗服务，具有个性化医疗照护，充分利用先进技术和富有同情心的支持。我们相信每个人都有权利实现为人父母的梦想。'}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {currentLanguage === 'en' ? 'Our Vision' : '我们的愿景'}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {currentLanguage === 'en'
                  ? 'To be the leading independent fertility center known for exceptional clinical outcomes, innovative treatments, and commitment to patient satisfaction. We aim to be accessible to all while maintaining the highest standards of care.'
                  : '成为因卓越的临床成果、创新治疗和对患者满意度的承诺而闻名的领先独立生育中心。我们的目标是在保持最高护理标准的同时，对所有人开放。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {currentLanguage === 'en' ? 'Why IVY Fertility is Different' : '为什么IVY生育中心与众不同'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentLanguage === 'en' ? 'Real Medical Institution' : '真实医疗机构'}
              </h3>
              <p className="text-slate-600">
                {currentLanguage === 'en'
                  ? 'We are an independent fertility clinic with our own doctors, facilities, and equipment. We are not a referral service or intermediary.'
                  : '我们是一个拥有自己的医生、设施和设备的独立生育诊所。我们不是转介服务或中介。'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentLanguage === 'en' ? 'State-of-the-Art Facility' : '最先进的设施'}
              </h3>
              <p className="text-slate-600">
                {currentLanguage === 'en'
                  ? 'Our laboratory is equipped with the latest technology and equipment to ensure optimal conditions for successful treatments.'
                  : '我们的实验室配备最新的技术和设备，确保成功治疗的最佳条件。'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentLanguage === 'en' ? 'Experienced Team' : '经验丰富的团队'}
              </h3>
              <p className="text-slate-600">
                {currentLanguage === 'en'
                  ? 'Our board-certified specialists have decades of combined experience and exceptional track records of success.'
                  : '我们的认证专家拥有数十年的综合经验和卓越的成功记录。'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentLanguage === 'en' ? 'Chinese-Speaking Support' : '中文服务'}
              </h3>
              <p className="text-slate-600">
                {currentLanguage === 'en'
                  ? 'Professional translators and Chinese-speaking staff provide comprehensive support throughout your treatment journey.'
                  : '专业翻译和中文工作人员在您整个治疗过程中提供全面支持。'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentLanguage === 'en' ? 'Personalized Care' : '个性化护理'}
              </h3>
              <p className="text-slate-600">
                {currentLanguage === 'en'
                  ? 'Every treatment plan is customized based on your individual needs, diagnosis, and circumstances.'
                  : '每个治疗计划都根据您的个人需求、诊断和情况量身定制。'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {currentLanguage === 'en' ? 'High Success Rates' : '高成功率'}
              </h3>
              <p className="text-slate-600">
                {currentLanguage === 'en'
                  ? 'Our success rates are among the highest in the region, reflecting our expertise and commitment to excellence.'
                  : '我们的成功率在该地区处于领先水平，反映了我们的专业知识和对卓越的承诺。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {currentLanguage === 'en' ? 'Our Medical Team' : '我们的医疗团队'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="bg-slate-50 rounded-xl p-8 border-l-4 border-[#e33479]">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {currentLanguage === 'en' ? doctor.nameEn : doctor.nameZh}
                </h3>
                <p className="text-[#e33479] font-semibold mb-4">
                  {currentLanguage === 'en' ? doctor.titleEn : doctor.titleZh}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {currentLanguage === 'en' ? doctor.bioEn : doctor.bioZh}
                </p>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    {currentLanguage === 'en' ? 'Specialties:' : '专长：'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(currentLanguage === 'en' ? doctor.specialtiesEn : doctor.specialtiesZh).map(
                      (specialty, sidx) => (
                        <span
                          key={sidx}
                          className="inline-block bg-[#e33479]/10 text-[#e33479] px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {specialty}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-r from-[#e33479] to-[#d01e6d] text-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {currentLanguage === 'en' ? 'Our Commitment to You' : '我们对您的承诺'}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {currentLanguage === 'en'
              ? 'Your dreams matter to us. We are committed to providing the highest quality care, innovative treatments, and compassionate support throughout your fertility journey. Every interaction is an opportunity for us to exceed your expectations.'
              : '您的梦想对我们很重要。我们致力于在您的生育之旅中提供最高质量的护理、创新治疗和富有同情心的支持。每次互动都是我们超越您期望的机会。'}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-[#e33479] font-semibold rounded-lg hover:bg-slate-100 transition duration-300"
          >
            {currentLanguage === 'en' ? 'Start Your Journey' : '开始您的旅程'}
          </Link>
        </div>
      </section>
    </main>
  )
}
