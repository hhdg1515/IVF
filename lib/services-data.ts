export interface WhoItsForItem {
  iconPath: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  ageRange?: string
}

export interface ProcessStep {
  step: number
  titleEn: string
  titleZh: string
  durationEn: string
  durationZh: string
  descriptionEn: string
  descriptionZh: string
  costInfo?: string
}

export interface TechnologyInfo {
  method: string
  methodZh: string
  survivalRate?: string
  storageTemp?: string
  certifications: string[]
  detailsEn: string
  detailsZh: string
}

export interface PricingInfo {
  basePriceMin: number
  basePriceMax: number
  currencySymbol: string
  includedEn: string[]
  includedZh: string[]
  notIncludedEn: string[]
  notIncludedZh: string[]
  medicationCostMin?: number
  medicationCostMax?: number
  annualStorageFee?: number
  secondCycleDiscount?: number
  financingAvailable: boolean
}

export interface SuccessData {
  dataSource: string
  dataSourceZh: string
  ageGroups: Array<{
    ageRange: string
    ageRangeZh: string
    survivalRate?: number
    fertilizationRate?: number
    clinicalPregnancyRate?: number
    liveBirthRate?: number
  }>
}

export interface FAQItem {
  questionEn: string
  questionZh: string
  answerEn: string
  answerZh: string
}

export interface ServiceDetail {
  slug: string
  titleEn: string
  titleZh: string
  heroImageUrl: string
  taglineEn: string
  taglineZh: string
  descriptionEn: string
  descriptionZh: string

  whoItsFor: WhoItsForItem[]
  processSteps: ProcessStep[]
  technology: TechnologyInfo
  pricing: PricingInfo
  successData?: SuccessData
  faqs: FAQItem[]

  relatedServices?: string[]
  ctaTextEn: string
  ctaTextZh: string
}

// ===== EGG FREEZING SERVICE =====
export const eggFreezingService: ServiceDetail = {
  slug: 'egg-freezing',
  titleEn: 'Egg Freezing',
  titleZh: '卵子冷冻',
  heroImageUrl: '/images/service.jpg',
  taglineEn: 'Preserve Your Fertility, Expand Your Choices',
  taglineZh: '保存您的生育力，扩展您的选择',
  descriptionEn: 'Egg freezing (oocyte cryopreservation) allows you to preserve your fertility by freezing unfertilized eggs for future use. Whether you\'re prioritizing your career, haven\'t found the right partner, or facing medical treatment that could affect fertility, egg freezing gives you control over your reproductive timeline.',
  descriptionZh: '卵子冷冻（卵母细胞冷冻保存）允许您通过冷冻未受精卵子来保存生育力以供将来使用。无论您是优先考虑职业发展、尚未找到合适的伴侣，还是面临可能影响生育力的医疗治疗，卵子冷冻都能让您掌控自己的生育时间表。',

  whoItsFor: [
    {
      iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      titleEn: 'Career-Focused Women',
      titleZh: '职业导向女性',
      descEn: 'You want to focus on your career and educational goals now while preserving your fertility for when you\'re ready to start a family.',
      descZh: '您希望现在专注于职业和教育目标，同时为准备好组建家庭时保存生育力。',
      ageRange: '25-38 years old'
    },
    {
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      titleEn: 'Single or LGBTQ+ Individuals',
      titleZh: '单身或LGBTQ+人群',
      descEn: 'You haven\'t found the right partner yet or are exploring alternative family-building options.',
      descZh: '您尚未找到合适的伴侣，或正在探索其他的家庭组建方式。',
    },
    {
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      titleEn: 'Medical Preservation',
      titleZh: '医学保存',
      descEn: 'You\'re facing cancer treatment, autoimmune therapy, or surgery that could impact your ovarian reserve.',
      descZh: '您面临癌症治疗、自身免疫治疗或可能影响卵巢储备的手术。',
    },
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleEn: 'Family History Concerns',
      titleZh: '家族史担忧',
      descEn: 'You have a family history of early menopause or diminished ovarian reserve and want to be proactive.',
      descZh: '您有早期绝经或卵巢储备减少的家族史，希望主动预防。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Initial Consultation & Testing',
      titleZh: '初诊咨询与检测',
      durationEn: '1 visit',
      durationZh: '1次就诊',
      descriptionEn: 'Meet with your fertility specialist for a comprehensive review of your medical history and fertility goals. We\'ll perform blood work (AMH, FSH, estradiol) and transvaginal ultrasound to assess your ovarian reserve and antral follicle count. You\'ll receive a personalized treatment plan and cost estimate.',
      descriptionZh: '与您的生育专家会面，全面回顾您的病史和生育目标。我们将进行血液检查（AMH、FSH、雌二醇）和经阴道超声检查，以评估您的卵巢储备和窦卵泡计数。您将收到个性化的治疗方案和费用估算。',
      costInfo: 'Included in package'
    },
    {
      step: 2,
      titleEn: 'Ovarian Stimulation',
      titleZh: '促排卵',
      durationEn: '10-14 days',
      durationZh: '10-14天',
      descriptionEn: 'You\'ll self-administer hormone injections daily to stimulate your ovaries to produce multiple eggs. Our nurses provide detailed injection training and are available 24/7 for questions. You\'ll have 4-6 monitoring visits for blood work and ultrasounds to track follicle development.',
      descriptionZh: '您将每天自行注射激素以刺激卵巢产生多个卵子。我们的护士提供详细的注射培训，并全天候解答问题。您将进行4-6次监测访视，进行血液检查和超声检查以跟踪卵泡发育。',
    },
    {
      step: 3,
      titleEn: 'Egg Retrieval Procedure',
      titleZh: '取卵手术',
      durationEn: '15-20 minutes',
      durationZh: '15-20分钟',
      descriptionEn: 'A minimally invasive procedure performed under IV sedation. Using ultrasound guidance, your physician gently aspirates the eggs from your ovarian follicles. The procedure is done in our state-of-the-art facility, and you\'ll rest in our recovery suite for 1-2 hours before going home the same day.',
      descriptionZh: '在静脉镇静下进行的微创手术。您的医生在超声引导下轻柔地从卵巢卵泡中抽取卵子。手术在我们最先进的设施中进行，您将在我们的康复套房休息1-2小时，然后当天回家。',
    },
    {
      step: 4,
      titleEn: 'Vitrification & Cryopreservation',
      titleZh: '玻璃化冷冻与低温保存',
      durationEn: 'Same day',
      durationZh: '当天',
      descriptionEn: 'Our embryologists immediately assess and freeze your mature eggs using vitrification—a rapid freezing technique that prevents ice crystal formation. Your eggs are stored in individually labeled, temperature-monitored cryogenic tanks at -196°C with 24/7 alarm systems and backup generators.',
      descriptionZh: '我们的胚胎学家立即评估并使用玻璃化冷冻技术冷冻您的成熟卵子——这是一种快速冷冻技术，可防止冰晶形成。您的卵子存储在单独标记的、温度监控的低温罐中，温度为-196°C，配有24/7警报系统和备用发电机。',
    },
    {
      step: 5,
      titleEn: 'Long-Term Storage & Future Use',
      titleZh: '长期存储与未来使用',
      durationEn: 'Unlimited',
      durationZh: '无限期',
      descriptionEn: 'Your eggs remain viable indefinitely. Annual storage fee covers secure monitoring, maintenance, and insurance. When you\'re ready to use your eggs, we\'ll thaw them, perform ICSI fertilization with sperm, culture embryos, and transfer to your uterus or a gestational carrier.',
      descriptionZh: '您的卵子可无限期保持活力。年度存储费涵盖安全监控、维护和保险。当您准备使用卵子时，我们将解冻它们，用精子进行ICSI受精，培养胚胎，并移植到您的子宫或代孕者的子宫。',
    },
  ],

  technology: {
    method: 'Vitrification (Ultra-Rapid Freezing)',
    methodZh: '玻璃化冷冻（超快速冷冻）',
    survivalRate: '95-97%',
    storageTemp: '-196°C',
    certifications: ['CAP Accredited', 'CLIA Certified', 'ISO 9001:2015'],
    detailsEn: 'We use the gold-standard Kitazato Cryotop® vitrification method, which achieves survival rates of 95-97% compared to 70-80% with slow-freezing. Our laboratory features: Dual backup liquid nitrogen tanks with independent alarm systems, Daily temperature monitoring and logging, Witness verification system (barcode scanning) to prevent sample mix-ups, Emergency backup power to maintain uninterrupted storage, Annual equipment calibration and quality audits.',
    detailsZh: '我们使用金标准的 Kitazato Cryotop® 玻璃化冷冻方法，存活率达到95-97%，而慢速冷冻仅为70-80%。我们的实验室特点包括：配有独立警报系统的双备份液氮罐，每日温度监控和记录，见证验证系统（条形码扫描）以防止样本混淆，紧急备用电源以维持不间断存储，年度设备校准和质量审核。',
  },

  pricing: {
    basePriceMin: 7500,
    basePriceMax: 9500,
    currencySymbol: '$',
    includedEn: [
      'Initial consultation and fertility testing (AMH, FSH, ultrasound)',
      'Treatment planning and cycle coordination',
      'All monitoring visits during stimulation (4-6 visits)',
      'Egg retrieval procedure under sedation',
      'Anesthesia services',
      'Vitrification and initial year of storage',
      '24/7 nursing support and emergency line'
    ],
    includedZh: [
      '初诊咨询和生育力检测（AMH、FSH、超声）',
      '治疗计划和周期协调',
      '促排期间的所有监测访视（4-6次）',
      '镇静下的取卵手术',
      '麻醉服务',
      '玻璃化冷冻和首年存储',
      '24/7护理支持和紧急热线'
    ],
    notIncludedEn: [
      'Medications ($3,000-$5,000 depending on protocol)',
      'Pre-cycle infectious disease screening ($250)',
      'Genetic carrier screening (optional, $250-$400)',
      'Annual storage fees after first year ($650/year)'
    ],
    notIncludedZh: [
      '药物费用（根据方案$3,000-$5,000）',
      '周期前传染病筛查（$250）',
      '遗传携带者筛查（可选，$250-$400）',
      '首年后的年度存储费（每年$650）'
    ],
    medicationCostMin: 3000,
    medicationCostMax: 5000,
    annualStorageFee: 650,
    secondCycleDiscount: 0.3,
    financingAvailable: true,
  },

  successData: {
    dataSource: 'Based on 1,200+ egg thaw cycles at IVY Fertility (2020-2024)',
    dataSourceZh: '基于 IVY Fertility 2020-2024年间1,200+卵子解冻周期',
    ageGroups: [
      { ageRange: '<35', ageRangeZh: '<35岁', survivalRate: 97, fertilizationRate: 75 },
      { ageRange: '35-37', ageRangeZh: '35-37岁', survivalRate: 95, fertilizationRate: 72 },
      { ageRange: '38-40', ageRangeZh: '38-40岁', survivalRate: 93, fertilizationRate: 68 },
      { ageRange: '>40', ageRangeZh: '>40岁', survivalRate: 90, fertilizationRate: 60 },
    ]
  },

  faqs: [
    {
      questionEn: 'How many eggs should I freeze?',
      questionZh: '我应该冷冻多少颗卵子？',
      answerEn: 'Research suggests freezing 15-20 mature eggs gives you a 70-80% chance of at least one live birth. For women under 35, this may be achievable in one cycle. Women 35-38 may need 1-2 cycles, and women over 38 may need 2-3 cycles. Your physician will recommend a personalized plan based on your AMH, AFC, and age.',
      answerZh: '研究表明，冷冻15-20颗成熟卵子可为您提供70-80%的至少一次活产机会。对于35岁以下的女性，这可能在一个周期内实现。35-38岁的女性可能需要1-2个周期，38岁以上的女性可能需要2-3个周期。您的医生将根据您的AMH、AFC和年龄推荐个性化计划。',
    },
    {
      questionEn: 'What is the best age to freeze eggs?',
      questionZh: '冻卵的最佳年龄是多少？',
      answerEn: 'The ideal age is under 35, when egg quality and quantity are highest. However, egg freezing can still be beneficial into your early 40s. We recommend scheduling a consultation to assess your individual ovarian reserve regardless of age.',
      answerZh: '理想年龄是35岁以下，此时卵子质量和数量最高。然而，冻卵在40岁出头仍然有益。我们建议无论年龄如何都安排咨询以评估您的个人卵巢储备。',
    },
    {
      questionEn: 'How long can eggs be stored?',
      questionZh: '卵子可以存储多久？',
      answerEn: 'Eggs can be stored indefinitely. Studies show no decrease in quality or viability even after 10+ years of storage. You can renew your storage annually, and we\'ll send renewal reminders 60 days before your anniversary date.',
      answerZh: '卵子可以无限期存储。研究表明，即使经过10年以上的存储，质量或活力也不会下降。您可以每年续订存储，我们会在您的周年日期前60天发送续订提醒。',
    },
    {
      questionEn: 'What if I never use my frozen eggs?',
      questionZh: '如果我从未使用冷冻卵子怎么办？',
      answerEn: 'You have several options: continue annual storage, donate to research, donate to another patient (if you meet criteria), or have them compassionately discarded. We\'ll discuss all options with you when the time comes.',
      answerZh: '您有几个选择：继续年度存储、捐赠给研究、捐赠给其他患者（如果您符合标准）或人道销毁。到时候我们会与您讨论所有选项。',
    },
    {
      questionEn: 'Does insurance cover egg freezing?',
      questionZh: '保险是否覆盖冻卵费用？',
      answerEn: 'Coverage varies widely. Some employers (Google, Apple, Meta) offer egg freezing benefits. Medical egg freezing (before cancer treatment) is often covered. Elective freezing is rarely covered but may qualify for HSA/FSA funds. Our financial team will verify your benefits before you start.',
      answerZh: '覆盖范围差异很大。一些雇主（Google、Apple、Meta）提供冻卵福利。医疗冻卵（癌症治疗前）通常有覆盖。选择性冻卵很少被覆盖，但可能符合HSA/FSA资金资格。我们的财务团队会在您开始前验证您的福利。',
    },
  ],

  relatedServices: ['ivf-treatment', 'embryo-freezing', 'fertility-preservation'],
  ctaTextEn: 'Schedule Free Egg Freezing Consultation',
  ctaTextZh: '预约免费冻卵咨询',
}

// ===== SERVICE DIRECTORY (for services index page) =====
export interface ServiceCardInfo {
  slug: string
  titleEn: string
  titleZh: string
  descEn: string
  descZh: string
  iconPath: string
  priceRange?: string
  priceRangeZh?: string
}

export const serviceDirectory: ServiceCardInfo[] = [
  {
    slug: 'egg-freezing',
    titleEn: 'Egg Freezing',
    titleZh: '卵子冷冻',
    descEn: 'Preserve your fertility for future family building with advanced vitrification technology.',
    descZh: '使用先进的玻璃化冷冻技术为未来的家庭组建保存生育力。',
    iconPath: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    priceRange: '$7,500 - $9,500',
    priceRangeZh: '$7,500 - $9,500',
  },
  {
    slug: 'ivf-treatment',
    titleEn: 'IVF Treatment',
    titleZh: '试管婴儿治疗',
    descEn: 'Comprehensive in vitro fertilization with personalized protocols and in-house embryology.',
    descZh: '采用个性化方案和院内胚胎学的综合体外受精。',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    priceRange: '$12,000 - $15,000',
    priceRangeZh: '$12,000 - $15,000',
  },
  {
    slug: 'embryo-freezing',
    titleEn: 'Embryo Freezing',
    titleZh: '胚胎冷冻',
    descEn: 'Freeze embryos for future transfer with PGT-A genetic screening options.',
    descZh: '冷冻胚胎以供将来移植，可选PGT-A遗传筛查。',
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    priceRange: 'Included in IVF',
    priceRangeZh: 'IVF中包含',
  },
  {
    slug: 'fertility-preservation',
    titleEn: 'Fertility Preservation',
    titleZh: '生育力保存',
    descEn: 'Urgent fertility preservation before cancer treatment or surgery with expedited protocols.',
    descZh: '在癌症治疗或手术前通过快速方案进行紧急生育力保存。',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    priceRange: 'Contact for pricing',
    priceRangeZh: '请联系咨询',
  },
]

export const allServices: Record<string, ServiceDetail> = {
  'egg-freezing': eggFreezingService,
  // Future services will be added here
}
