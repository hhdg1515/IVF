'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context'
import { useParams } from 'next/navigation'
import { HeroSection } from '@/components/ui/HeroSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ScrollInView } from '@/components/ui/ScrollInView'

interface ServiceDetail {
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  longDescEn: string
  longDescZh: string
  processEn: string[]
  processZh: string[]
  successRateEn: string
  successRateZh: string
  priceRange: string
}

const serviceData: Record<string, ServiceDetail> = {
  'egg-freezing': {
    titleEn: 'Egg Freezing',
    titleZh: '冻卵',
    descEn: 'Preserve your fertility and extend your family planning options.',
    descZh: '保存您的生育能力，延长您的家庭规划选择。',
    longDescEn: 'Egg freezing allows women to preserve their eggs for future use. This is ideal for women who wish to delay childbearing due to career, personal reasons, or medical conditions.',
    longDescZh: '卵母细胞冷冻保存允许女性保存卵子供将来使用。这对于想因事业、个人原因或医疗条件而推迟生育的女性来说是理想的。',
    processEn: ['Initial consultation and fertility testing', 'Hormone stimulation to produce multiple eggs', 'Egg retrieval under ultrasound guidance', 'Vitrification (flash freezing) of mature eggs', 'Storage in secure cryogenic facility', 'Future thawing and fertilization when ready'],
    processZh: ['初始咨询和生育检测', '激素刺激以产生多个卵子', '在超声引导下取卵', '成熟卵子的玻璃化(快速冷冻)', '在安全的低温储存设施中储存', '准备好时的未来解冻和受精'],
    successRateEn: 'Egg survival rate: 90-95% | Fertilization rate: 70-80%',
    successRateZh: '卵母细胞存活率：90-95% | 受精率：70-80%',
    priceRange: '$8,000 - $12,000'
  },
  'ivf': {
    titleEn: 'In Vitro Fertilization (IVF)',
    titleZh: '体外受精(IVF)',
    descEn: 'Complete IVF treatment with personalized protocols.',
    descZh: '完整的体外受精治疗，采用个性化方案。',
    longDescEn: 'In vitro fertilization (IVF) is a fertility treatment where eggs and sperm are combined outside the body to form embryos. The best embryos are then transferred into the uterus to establish pregnancy.',
    longDescZh: '体外受精(IVF)是一种生育治疗，卵子和精子在体外结合形成胚胎。最佳胚胎随后被转移到子宫以建立妊娠。',
    processEn: ['Comprehensive fertility evaluation', 'Ovarian stimulation with injectable medications', 'Transvaginal ultrasound monitoring', 'Egg retrieval procedure', 'Fertilization in the laboratory', 'Embryo development and monitoring', 'Embryo transfer to the uterus', 'Pregnancy confirmation and support'],
    processZh: ['全面的生育评估', '使用可注射药物的卵巢刺激', '经阴道超声监测', '取卵程序', '实验室受精', '胚胎发育和监测', '胚胎转移到子宫', '妊娠确认和支持'],
    successRateEn: 'Fertilization rate: 75-80% | Clinical pregnancy rate: 50-65% (varies by age)',
    successRateZh: '受精率：75-80% | 临床妊娠率：50-65%（因年龄而异）',
    priceRange: '$12,000 - $18,000'
  },
  'embryo-freezing': {
    titleEn: 'Embryo Freezing',
    titleZh: '冻胚胎',
    descEn: 'Store healthy embryos for future use.',
    descZh: '储存健康的胚胎供将来使用。',
    longDescEn: 'Embryo freezing allows patients to preserve extra embryos from their IVF cycle for future use. This can reduce costs for future attempts and allows for family planning flexibility.',
    longDescZh: '胚胎冷冻允许患者从其IVF周期中保存额外胚胎供将来使用。这可以减少未来尝试的成本，并允许家庭规划的灵活性。',
    processEn: ['Embryo development monitoring', 'Selection of high-quality embryos for freezing', 'Vitrification of embryos', 'Secure storage in cryogenic tanks', 'Regular monitoring and reports', 'Thawing when ready for transfer'],
    processZh: ['胚胎发育监测', '选择高质量胚胎进行冷冻', '胚胎的玻璃化', '在低温罐中的安全储存', '定期监测和报告', '准备转移时的解冻'],
    successRateEn: 'Embryo survival rate: 90%+ | Pregnancy rate from frozen embryo transfer: 45-60%',
    successRateZh: '胚胎存活率：90%+ | 冷冻胚胎转移妊娠率：45-60%',
    priceRange: '$2,000 - $3,000 per year storage'
  },
  'pgt-testing': {
    titleEn: 'PGT Genetic Testing',
    titleZh: 'PGT遗传检测',
    descEn: 'Comprehensive genetic screening of embryos.',
    descZh: '胚胎综合遗传学检测。',
    longDescEn: 'Preimplantation Genetic Testing (PGT) allows us to screen embryos for genetic abnormalities before transfer. This improves success rates and reduces the risk of genetic disorders in your baby.',
    longDescZh: '植入前遗传学检测(PGT)允许我们在转移前筛查胚胎的遗传异常。这提高了成功率，降低了您的宝宝患遗传疾病的风险。',
    processEn: ['Embryo biopsy on day 5 or 6', 'Cell sample preparation', 'Genetic analysis (PGT-A, PGT-M, or PGT-SR)', 'Results report generation', 'Selection of healthy embryos for transfer', 'Transfer of genetically healthy embryo'],
    processZh: ['第5或6天胚胎活检', '细胞样本准备', '遗传学分析(PGT-A、PGT-M或PGT-SR)', '结果报告生成', '选择健康胚胎进行转移', '转移遗传学健康的胚胎'],
    successRateEn: 'Detection accuracy: 99%+ | Implantation rate: 70-80%',
    successRateZh: '检测准确率：99%+ | 植入率：70-80%',
    priceRange: '$3,500 - $5,000 per cycle'
  },
  'donor-services': {
    titleEn: 'Egg & Sperm Donation',
    titleZh: '卵子和精子捐献',
    descEn: 'Access to carefully screened donor gametes.',
    descZh: '获得经过仔细筛查的捐献配子。',
    longDescEn: 'Our donor program provides access to carefully selected and thoroughly tested egg and sperm donors. All donors undergo extensive screening, genetic testing, and health evaluations.',
    longDescZh: '我们的捐献计划提供获得精心挑选和彻底测试的卵子和精子捐献者的机会。所有捐献者都经过广泛筛查、遗传学检测和健康评估。',
    processEn: ['Donor selection and matching', 'Comprehensive screening and testing', 'Legal and consent documentation', 'Coordination of donor cycle', 'Fertilization with donor gametes', 'Embryo transfer', 'Ongoing support and counseling'],
    processZh: ['捐献者选择和匹配', '综合筛查和测试', '法律和同意文件', '捐献者周期的协调', '与捐献配子的受精', '胚胎转移', '持续支持和咨询'],
    successRateEn: 'Pregnancy rate with egg donor: 60-70% | Pregnancy rate with sperm donor: 40-50%',
    successRateZh: '卵子捐献妊娠率：60-70% | 精子捐献妊娠率：40-50%',
    priceRange: '$15,000 - $25,000'
  },
  'surrogacy': {
    titleEn: 'Gestational Surrogacy',
    titleZh: '代孕',
    descEn: 'Comprehensive surrogacy program with full support.',
    descZh: '全面的代孕计划，提供全面支持。',
    longDescEn: 'Gestational surrogacy is an option for individuals or couples who are unable to carry a pregnancy themselves. Our program provides comprehensive support for intended parents throughout the process.',
    longDescZh: '代孕对于无法自己怀孕的个人或夫妇来说是一个选择。我们的计划为预期父母在整个过程中提供全面支持。',
    processEn: ['Initial consultation and evaluation', 'Legal and contractual agreements', 'Surrogate mother matching and screening', 'IVF with intended parents\' or donor gametes', 'Embryo transfer to surrogate', 'Medical and emotional support throughout pregnancy', 'Birth and post-partum care'],
    processZh: ['初始咨询和评估', '法律和合同协议', '代孕母亲的匹配和筛查', '与预期父母或捐献配子的体外受精', '胚胎转移给代孕母亲', '怀孕期间的医疗和情感支持', '分娩和产后护理'],
    successRateEn: 'Pregnancy rate: 55-70% | Birth rate: 50-65%',
    successRateZh: '妊娠率：55-70% | 出生率：50-65%',
    priceRange: '$100,000 - $150,000'
  },
  'icsi': {
    titleEn: 'ICSI - Intracytoplasmic Sperm Injection',
    titleZh: 'ICSI卵胞质内单精子注射',
    descEn: 'Advanced treatment for male factor infertility.',
    descZh: '针对男性因素不孕症的先进治疗。',
    longDescEn: 'ICSI is a specialized IVF technique where a single sperm is injected directly into each egg. This is the most effective treatment for severe male factor infertility.',
    longDescZh: 'ICSI是一种专门的体外受精技术，将单个精子直接注射到每个卵子中。这是严重男性因素不孕症的最有效治疗。',
    processEn: ['Semen analysis and evaluation', 'Ovarian stimulation in female partner', 'Egg retrieval', 'Single sperm selection and injection', 'Embryo monitoring', 'Embryo transfer', 'Pregnancy support'],
    processZh: ['精液分析和评估', '女性伴侣的卵巢刺激', '取卵', '单个精子选择和注射', '胚胎监测', '胚胎转移', '妊娠支持'],
    successRateEn: 'Fertilization rate: 50-70% | Clinical pregnancy rate: 45-55%',
    successRateZh: '受精率：50-70% | 临床妊娠率：45-55%',
    priceRange: '$10,000 - $15,000'
  },
  'fertility-preservation': {
    titleEn: 'Fertility Preservation',
    titleZh: '生育能力保存',
    descEn: 'Preserve your reproductive options.',
    descZh: '保存您的生育选择。',
    longDescEn: 'Fertility preservation is important for patients facing medical treatments like cancer therapy that may affect their fertility. We offer egg, sperm, and tissue preservation options.',
    longDescZh: '对于面临可能影响其生育能力的医疗治疗(如癌症治疗)的患者来说，生育能力保存很重要。我们提供卵子、精子和组织保存选项。',
    processEn: ['Consultation before medical treatment', 'Rapid ovarian stimulation if needed', 'Egg or sperm collection and freezing', 'Secure cryogenic storage', 'Regular monitoring and updates', 'Future use when ready'],
    processZh: ['医疗治疗前的咨询', '如需要进行快速卵巢刺激', '卵子或精子收集和冷冻', '安全的低温储存', '定期监测和更新', '准备好时的未来使用'],
    successRateEn: 'Egg survival rate: 85-90% | Sperm survival rate: 90-95%',
    successRateZh: '卵子存活率：85-90% | 精子存活率：90-95%',
    priceRange: '$5,000 - $10,000 + annual storage'
  }
}

export default function ServiceDetailPage() {
  const { currentLanguage } = useLanguage()
  const params = useParams()
  const serviceId = params.id as string
  const service = serviceData[serviceId]

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-[#32373c] mb-4">Service Not Found</h1>
          <p className="text-[#495057] mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button variant="primary" size="lg">
              Back to Services
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80"
        title={currentLanguage === 'en' ? service.titleEn : service.titleZh}
        subtitle={currentLanguage === 'en' ? service.descEn : service.descZh}
        primaryCtaText={currentLanguage === 'en' ? 'Book Consultation' : '预约咨询'}
        primaryCtaHref="/contact"
        secondaryCtaText={currentLanguage === 'en' ? 'Back to Services' : '返回服务'}
        secondaryCtaHref="/services"
        showScrollIndicator={true}
      />

      {/* About This Service */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-[#32373c] mb-6">
                {currentLanguage === 'en' ? 'About This Service' : '关于此项服务'}
              </h2>
              <p className="text-lg text-[#495057] leading-relaxed">
                {currentLanguage === 'en' ? service.longDescEn : service.longDescZh}
              </p>
            </div>
          </ScrollInView>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 md:py-28 bg-[#fff4ee]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollInView>
            <h2 className="text-4xl font-serif font-bold text-[#32373c] mb-4 text-center">
              {currentLanguage === 'en' ? 'Treatment Process' : '治疗流程'}
            </h2>
            <p className="text-lg text-[#495057] text-center max-w-2xl mx-auto mb-12">
              {currentLanguage === 'en' ? 'A step-by-step breakdown of your treatment journey' : '您的治疗之旅的分步说明'}
            </p>
          </ScrollInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(currentLanguage === 'en' ? service.processEn : service.processZh).map((step, idx) => (
              <ScrollInView key={idx} delay={idx * 0.1}>
                <Card colorAccent="#531e44">
                  <div className="p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#531e44] text-white flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-[#495057] self-center">{step}</p>
                    </div>
                  </div>
                </Card>
              </ScrollInView>
            ))}
          </div>
        </div>
      </section>

      {/* Success Rates & Pricing */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollInView>
              <Card colorAccent="#e33479">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-[#32373c] mb-4">
                    {currentLanguage === 'en' ? 'Success Rates' : '成功率'}
                  </h3>
                  <p className="text-lg text-[#e33479] font-semibold">
                    {currentLanguage === 'en' ? service.successRateEn : service.successRateZh}
                  </p>
                </div>
              </Card>
            </ScrollInView>

            <ScrollInView delay={0.2}>
              <Card colorAccent="#9a442c">
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-serif font-bold text-[#32373c] mb-4">
                    {currentLanguage === 'en' ? 'Investment Range' : '投资范围'}
                  </h3>
                  <p className="text-lg text-[#9a442c] font-semibold">
                    {service.priceRange}
                  </p>
                </div>
              </Card>
            </ScrollInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#531e44] to-[#37272a] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {currentLanguage === 'en' ? 'Ready to Learn More?' : '准备好了解更多？'}
          </h2>

          <p className="text-xl text-white/90 mb-10">
            {currentLanguage === 'en'
              ? 'Schedule a consultation with our specialists to discuss if this treatment is right for you.'
              : '与我们的专家预约咨询，讨论这项治疗是否适合您。'}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {currentLanguage === 'en' ? 'Book Consultation' : '预约咨询'}
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline-light" size="lg">
                {currentLanguage === 'en' ? 'View All Services' : '查看所有服务'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
