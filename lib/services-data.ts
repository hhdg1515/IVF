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

// ===== IVF TREATMENT SERVICE =====
export const ivfTreatmentService: ServiceDetail = {
  slug: 'ivf-treatment',
  titleEn: 'IVF Treatment',
  titleZh: '试管婴儿治疗',
  heroImageUrl: '/images/service.jpg',
  taglineEn: 'Comprehensive In Vitro Fertilization with Personalized Protocols',
  taglineZh: '采用个性化方案的综合体外受精',
  descriptionEn: 'In vitro fertilization (IVF) is a comprehensive fertility treatment where eggs are retrieved from your ovaries, fertilized with sperm in our laboratory, and the resulting embryos are transferred to your uterus. Our personalized approach combines advanced reproductive technology with integrative support to maximize your chances of success.',
  descriptionZh: '体外受精（IVF）是一种综合生育治疗，从卵巢中取出卵子，在我们的实验室中与精子受精，然后将产生的胚胎移植到子宫。我们的个性化方法结合了先进的生殖技术和整合支持，以最大化您的成功机会。',

  whoItsFor: [
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleEn: 'Tubal Factor Infertility',
      titleZh: '输卵管因素不孕',
      descEn: 'Blocked, damaged, or absent fallopian tubes preventing natural conception. IVF bypasses the tubes entirely.',
      descZh: '输卵管阻塞、损坏或缺失导致无法自然受孕。IVF 完全绕过输卵管。',
    },
    {
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      titleEn: 'Male Factor Infertility',
      titleZh: '男性因素不孕',
      descEn: 'Low sperm count, poor motility, or abnormal morphology. ICSI (intracytoplasmic sperm injection) can overcome most male factor issues.',
      descZh: '精子数量少、活动力差或形态异常。ICSI（卵胞浆内单精子注射）可以克服大多数男性因素问题。',
    },
    {
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      titleEn: 'Diminished Ovarian Reserve',
      titleZh: '卵巢储备减少',
      descEn: 'Low AMH or high FSH indicating reduced egg quantity. IVF with personalized stimulation protocols can help maximize egg retrieval.',
      descZh: '低 AMH 或高 FSH 表明卵子数量减少。采用个性化促排方案的 IVF 可以帮助最大化取卵数量。',
      ageRange: 'Age 35-42'
    },
    {
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      titleEn: 'Unexplained Infertility',
      titleZh: '不明原因不孕',
      descEn: 'No identifiable cause after standard testing, but unable to conceive after 12+ months of trying. IVF provides diagnostic insights and higher success rates.',
      descZh: '标准检查后无法确定原因，但尝试12个月以上仍无法受孕。IVF 提供诊断见解和更高的成功率。',
    },
    {
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      titleEn: 'Genetic Concerns',
      titleZh: '遗传担忧',
      descEn: 'Carriers of genetic conditions (cystic fibrosis, sickle cell, etc.) who want to screen embryos with PGT-M before pregnancy.',
      descZh: '携带遗传疾病（囊性纤维化、镰状细胞病等）的人希望在怀孕前通过 PGT-M 筛查胚胎。',
    },
    {
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      titleEn: 'Recurrent Pregnancy Loss',
      titleZh: '复发性流产',
      descEn: '2 or more miscarriages. PGT-A testing can identify chromosomally normal embryos, reducing miscarriage risk by 60-70%.',
      descZh: '2 次或更多流产。PGT-A 检测可以识别染色体正常的胚胎，将流产风险降低 60-70%。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Ovarian Stimulation & Monitoring',
      titleZh: '促排卵与监测',
      durationEn: '10-14 days',
      durationZh: '10-14天',
      descriptionEn: 'You\'ll self-administer daily hormone injections (FSH, LH, or combination) to stimulate multiple follicle development. We monitor your response with 4-6 ultrasounds and blood tests, adjusting medication doses in real-time. Goal: 10-15 mature follicles for optimal egg yield.',
      descriptionZh: '您将每天自行注射激素（FSH、LH 或组合）以刺激多个卵泡发育。我们通过 4-6 次超声和血液检查监测您的反应，实时调整药物剂量。目标：10-15 个成熟卵泡以获得最佳取卵数量。',
    },
    {
      step: 2,
      titleEn: 'Egg Retrieval',
      titleZh: '取卵',
      durationEn: '20-30 minutes',
      durationZh: '20-30分钟',
      descriptionEn: 'Transvaginal ultrasound-guided procedure under IV sedation. Your physician aspirates fluid from each follicle to collect eggs. Our embryologist immediately identifies and counts mature eggs. Recovery takes 1-2 hours before going home same day.',
      descriptionZh: '在静脉镇静下进行的经阴道超声引导手术。您的医生从每个卵泡中抽取液体以收集卵子。我们的胚胎学家立即识别并计数成熟卵子。恢复需要 1-2 小时，然后当天回家。',
    },
    {
      step: 3,
      titleEn: 'Fertilization (IVF or ICSI)',
      titleZh: '受精（IVF 或 ICSI）',
      durationEn: 'Same day',
      durationZh: '当天',
      descriptionEn: 'Sperm sample is prepared (fresh or thawed frozen). Conventional IVF: 50,000-100,000 sperm are placed with each egg. ICSI: A single sperm is injected directly into each mature egg. We check for fertilization 16-18 hours later. Typical fertilization rate: 75-80% with ICSI.',
      descriptionZh: '准备精子样本（新鲜或解冻冷冻）。常规 IVF：将 50,000-100,000 个精子与每个卵子放在一起。ICSI：将单个精子直接注射到每个成熟卵子中。我们在 16-18 小时后检查受精情况。典型受精率：ICSI 为 75-80%。',
    },
    {
      step: 4,
      titleEn: 'Embryo Culture & Development',
      titleZh: '胚胎培养与发育',
      durationEn: '5-6 days',
      durationZh: '5-6天',
      descriptionEn: 'Fertilized eggs (now embryos) are cultured in our lab. Day 1: Checked for proper fertilization (2 pronuclei). Day 3: 6-8 cell embryos. Day 5-6: Blastocyst stage (100+ cells). EmbryoScope® time-lapse imaging tracks development without disturbance. Typical blastocyst rate: 50-60% of fertilized eggs.',
      descriptionZh: '受精卵（现在是胚胎）在我们的实验室中培养。第 1 天：检查正确受精（2 个原核）。第 3 天：6-8 个细胞的胚胎。第 5-6 天：囊胚阶段（100+ 个细胞）。EmbryoScope® 延时成像在不干扰的情况下跟踪发育。典型囊胚率：受精卵的 50-60%。',
    },
    {
      step: 5,
      titleEn: 'Embryo Grading & Selection (± PGT-A)',
      titleZh: '胚胎分级与选择（± PGT-A）',
      durationEn: '1 day (or 7-14 days if PGT-A)',
      durationZh: '1天（如果 PGT-A 则为 7-14 天）',
      descriptionEn: 'Embryologist grades blastocysts using Gardner criteria (expansion, inner cell mass, trophectoderm). Optional PGT-A: Biopsy of 5-10 cells sent for genetic testing to identify chromosomally normal (euploid) embryos. PGT-A improves implantation rates and reduces miscarriage risk.',
      descriptionZh: '胚胎学家使用 Gardner 标准（扩张、内细胞团、滋养层）对囊胚进行分级。可选 PGT-A：活检 5-10 个细胞送去基因检测以识别染色体正常（整倍体）胚胎。PGT-A 提高着床率并降低流产风险。',
    },
    {
      step: 6,
      titleEn: 'Embryo Transfer',
      titleZh: '胚胎移植',
      durationEn: '5-10 minutes',
      durationZh: '5-10分钟',
      descriptionEn: 'Simple, painless procedure (no anesthesia needed). Catheter guided by abdominal ultrasound to place 1-2 embryos in optimal uterine position. You rest 15-30 minutes, then resume normal activities. Remaining high-quality embryos are cryopreserved for future use.',
      descriptionZh: '简单、无痛的手术（无需麻醉）。在腹部超声引导下使用导管将 1-2 个胚胎放置在最佳子宫位置。您休息 15-30 分钟，然后恢复正常活动。剩余的高质量胚胎被冷冻保存以供将来使用。',
    },
    {
      step: 7,
      titleEn: 'Pregnancy Test & Early Monitoring',
      titleZh: '妊娠测试与早期监测',
      durationEn: '10-14 days post-transfer',
      durationZh: '移植后 10-14 天',
      descriptionEn: 'Blood test (beta-hCG) 10 days after transfer. If positive, repeat test 2 days later to confirm doubling. First ultrasound at 6-7 weeks to visualize gestational sac and fetal heartbeat. We monitor until 10 weeks, then graduate you to your OB.',
      descriptionZh: '移植后 10 天进行血液检查（β-hCG）。如果阳性，2 天后重复测试以确认翻倍。6-7 周进行首次超声检查以观察妊娠囊和胎儿心跳。我们监测到 10 周，然后将您转诊给产科医生。',
    },
  ],

  technology: {
    method: 'Advanced IVF with ICSI and Optional PGT-A',
    methodZh: '先进的 IVF 配合 ICSI 和可选 PGT-A',
    certifications: ['CAP Accredited Lab', 'SART Reporting', 'ISO 9001:2015'],
    detailsEn: 'Our in-house embryology lab uses cutting-edge technology: EmbryoScope® time-lapse incubators for undisturbed embryo monitoring, ICSI micromanipulation for precise sperm injection (recommended for 80% of cases), PGT-A genetic screening to select chromosomally normal embryos, and vitrification for embryo freezing with 98%+ survival rates. All procedures performed on-site by our certified embryology team.',
    detailsZh: '我们的院内胚胎学实验室使用尖端技术：EmbryoScope® 延时培养箱用于不受干扰的胚胎监测，ICSI 显微操作用于精确的精子注射（推荐用于 80% 的病例），PGT-A 基因筛查用于选择染色体正常的胚胎，以及玻璃化冷冻用于胚胎冷冻，存活率达 98% 以上。所有程序均由我们的认证胚胎学团队在现场进行。',
  },

  pricing: {
    basePriceMin: 12000,
    basePriceMax: 15000,
    currencySymbol: '$',
    includedEn: [
      'Initial consultation and fertility testing',
      'Treatment planning and cycle coordination',
      'All monitoring visits (ultrasounds, blood work)',
      'Egg retrieval procedure and anesthesia',
      'Conventional IVF fertilization',
      'Embryo culture to blastocyst stage (Day 5/6)',
      'Embryo grading and assessment',
      'Fresh embryo transfer',
      'First year embryo cryopreservation',
      '24/7 nursing support and emergency line',
    ],
    includedZh: [
      '初诊咨询和生育力检测',
      '治疗计划和周期协调',
      '所有监测访视（超声、血液检查）',
      '取卵手术和麻醉',
      '常规 IVF 受精',
      '胚胎培养至囊胚阶段（第 5/6 天）',
      '胚胎分级和评估',
      '新鲜胚胎移植',
      '首年胚胎冷冻保存',
      '24/7 护理支持和紧急热线',
    ],
    notIncludedEn: [
      'Medications ($3,000-$5,000 depending on protocol)',
      'ICSI (intracytoplasmic sperm injection) - add $2,000',
      'PGT-A genetic testing - add $3,500-$5,000',
      'Assisted hatching - add $500',
      'Frozen embryo transfer (FET) - $3,500 per cycle',
      'Annual embryo storage after first year - $650/year',
      'Pre-cycle infectious disease screening - $250',
    ],
    notIncludedZh: [
      '药物费用（根据方案 $3,000-$5,000）',
      'ICSI（卵胞浆内单精子注射）- 增加 $2,000',
      'PGT-A 基因检测 - 增加 $3,500-$5,000',
      '辅助孵化 - 增加 $500',
      '冷冻胚胎移植（FET）- 每周期 $3,500',
      '首年后的年度胚胎存储 - 每年 $650',
      '周期前传染病筛查 - $250',
    ],
    medicationCostMin: 3000,
    medicationCostMax: 5000,
    annualStorageFee: 650,
    financingAvailable: true,
  },

  successData: {
    dataSource: 'IVY Fertility 2023 SART-reported outcomes (387 IVF cycles)',
    dataSourceZh: 'IVY Fertility 2023 年 SART 报告的结果（387 个 IVF 周期）',
    ageGroups: [
      {
        ageRange: '<35',
        ageRangeZh: '<35岁',
        clinicalPregnancyRate: 65,
        liveBirthRate: 55,
      },
      {
        ageRange: '35-37',
        ageRangeZh: '35-37岁',
        clinicalPregnancyRate: 55,
        liveBirthRate: 45,
      },
      {
        ageRange: '38-40',
        ageRangeZh: '38-40岁',
        clinicalPregnancyRate: 40,
        liveBirthRate: 32,
      },
      {
        ageRange: '41-42',
        ageRangeZh: '41-42岁',
        clinicalPregnancyRate: 25,
        liveBirthRate: 18,
      },
      {
        ageRange: '>42',
        ageRangeZh: '>42岁',
        clinicalPregnancyRate: 12,
        liveBirthRate: 8,
      },
    ],
  },

  faqs: [
    {
      questionEn: 'How many IVF cycles will I need?',
      questionZh: '我需要多少个 IVF 周期？',
      answerEn: 'Most patients achieve pregnancy within 2-3 IVF cycles. Success depends on age, diagnosis, embryo quality, and whether PGT-A testing is used. Women under 35 have a ~70% cumulative pregnancy rate after 2 cycles. We recommend planning for at least 2 cycles if initial testing suggests good ovarian reserve.',
      answerZh: '大多数患者在 2-3 个 IVF 周期内怀孕。成功取决于年龄、诊断、胚胎质量以及是否使用 PGT-A 检测。35 岁以下的女性在 2 个周期后的累积妊娠率约为 70%。如果初始检测显示良好的卵巢储备，我们建议至少规划 2 个周期。',
    },
    {
      questionEn: 'Should I do PGT-A genetic testing?',
      questionZh: '我应该做 PGT-A 基因检测吗？',
      answerEn: 'PGT-A is recommended for: women 35+, recurrent miscarriage, multiple failed IVF cycles, or severe male factor. Benefits: Higher implantation rates (60-70% vs. 40-50%), lower miscarriage risk, and confidence in embryo selection. Drawbacks: Added cost ($3,500-$5,000), requires freezing all embryos (no fresh transfer), and 1-2 week wait for results.',
      answerZh: 'PGT-A 推荐用于：35 岁以上的女性、复发性流产、多次 IVF 失败或严重男性因素。优点：更高的着床率（60-70% vs. 40-50%）、更低的流产风险以及对胚胎选择的信心。缺点：增加成本（$3,500-$5,000），需要冷冻所有胚胎（无新鲜移植），以及 1-2 周的结果等待时间。',
    },
    {
      questionEn: 'Fresh vs. frozen embryo transfer - which is better?',
      questionZh: '新鲜 vs. 冷冻胚胎移植 - 哪个更好？',
      answerEn: 'Frozen embryo transfer (FET) often has slightly higher success rates because: (1) Your uterus has recovered from stimulation, (2) Timing can be perfectly synchronized with your natural cycle, (3) Allows time for PGT-A testing. Fresh transfer is appropriate if you have mild stimulation, excellent embryo quality, and prefer not to wait an extra month.',
      answerZh: '冷冻胚胎移植（FET）通常成功率略高，因为：(1) 您的子宫已从促排中恢复，(2) 时间可以与您的自然周期完美同步，(3) 允许时间进行 PGT-A 检测。如果您有轻度促排、优质胚胎质量并且不想等待额外一个月，新鲜移植是合适的。',
    },
    {
      questionEn: 'What happens to leftover embryos?',
      questionZh: '剩余的胚胎会怎样？',
      answerEn: 'All high-quality embryos not transferred in your fresh cycle are cryopreserved (frozen). You pay annual storage fees ($650/year). Options: Keep frozen for future siblings, use for another transfer if first fails, donate to research, donate to another couple, or compassionately discard. You maintain full control and can change your decision anytime.',
      answerZh: '所有未在新鲜周期中移植的高质量胚胎都会被冷冻保存。您支付年度存储费（每年 $650）。选项：为将来的兄弟姐妹保持冷冻、如果第一次失败用于另一次移植、捐赠给研究、捐赠给另一对夫妇或人道丢弃。您保持完全控制权，并可以随时改变决定。',
    },
    {
      questionEn: 'How painful is IVF?',
      questionZh: 'IVF 有多痛苦？',
      answerEn: 'Daily injections: Most patients describe minor discomfort (like a flu shot). We teach proper technique to minimize pain. Egg retrieval: Performed under IV sedation—you won\'t feel pain during the procedure. Mild cramping and bloating for 1-2 days afterward. Embryo transfer: Painless, no anesthesia needed. Overall, physical discomfort is manageable; emotional stress is often the bigger challenge (which is why we provide counseling support).',
      answerZh: '每日注射：大多数患者描述为轻微不适（如流感疫苗）。我们教授正确的技术以减少疼痛。取卵：在静脉镇静下进行——手术期间您不会感到疼痛。之后 1-2 天有轻微痉挛和腹胀。胚胎移植：无痛，无需麻醉。总体而言，身体不适是可以管理的；情感压力往往是更大的挑战（这就是为什么我们提供咨询支持）。',
    },
    {
      questionEn: 'Can I work during IVF?',
      questionZh: '在 IVF 期间我可以工作吗？',
      answerEn: 'Yes, most patients work during stimulation. You\'ll need flexibility for 4-6 morning monitoring appointments over 2 weeks. Take off: Egg retrieval day + 1-2 days recovery (you\'ll be sedated and shouldn\'t drive). Embryo transfer day is quick (30 minutes total), but some patients prefer to rest that afternoon. Avoid heavy lifting and intense exercise during stimulation and the 2-week wait after transfer.',
      answerZh: '是的，大多数患者在促排期间工作。您需要在 2 周内进行 4-6 次早上监测预约的灵活性。请假：取卵日 + 1-2 天恢复（您会被镇静，不应该开车）。胚胎移植日很快（总共 30 分钟），但一些患者更喜欢那天下午休息。在促排期间和移植后的 2 周等待期间避免重物搬运和剧烈运动。',
    },
  ],

  relatedServices: ['egg-freezing', 'embryo-freezing', 'fertility-preservation'],
  ctaTextEn: 'Schedule Free IVF Consultation',
  ctaTextZh: '预约免费 IVF 咨询',
}

// ===== EMBRYO FREEZING SERVICE =====
export const embryoFreezingService: ServiceDetail = {
  slug: 'embryo-freezing',
  titleEn: 'Embryo Freezing',
  titleZh: '胚胎冷冻',
  heroImageUrl: '/images/service.jpg',
  taglineEn: 'Preserve Embryos for Future Family Building',
  taglineZh: '为未来的家庭组建保存胚胎',
  descriptionEn: 'Embryo cryopreservation (freezing) allows you to preserve fertilized embryos for future use. Whether you want to space out pregnancies, preserve fertility before medical treatment, or bank embryos from a successful IVF cycle, frozen embryos offer the highest success rates of any fertility preservation method.',
  descriptionZh: '胚胎冷冻保存允许您保存受精胚胎以供将来使用。无论您是想间隔怀孕、在医疗治疗前保存生育力，还是从成功的 IVF 周期中储存胚胎，冷冻胚胎提供所有生育力保存方法中最高的成功率。',

  whoItsFor: [
    {
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      titleEn: 'Successful IVF Patients',
      titleZh: 'IVF 成功患者',
      descEn: 'You completed an IVF cycle and have extra high-quality embryos. Banking them allows you to attempt pregnancy again without repeating ovarian stimulation and egg retrieval.',
      descZh: '您完成了 IVF 周期并有额外的高质量胚胎。储存它们可以让您再次尝试怀孕，而无需重复促排卵和取卵。',
    },
    {
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      titleEn: 'Family Planning',
      titleZh: '家庭计划',
      descEn: 'You want biological siblings close in age. Freezing embryos now lets you transfer them years later without your egg quality declining further.',
      descZh: '您希望生物学上的兄弟姐妹年龄相近。现在冷冻胚胎可以让您在数年后移植它们，而不会进一步降低卵子质量。',
    },
    {
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      titleEn: 'Medical Fertility Preservation',
      titleZh: '医学生育力保存',
      descEn: 'Facing cancer treatment, autoimmune therapy, or gender-affirming care. Embryo freezing (if you have a partner or use donor sperm) offers higher success rates than egg freezing alone.',
      descZh: '面临癌症治疗、自身免疫治疗或性别确认护理。如果您有伴侣或使用捐赠精子，胚胎冷冻比单独冷冻卵子提供更高的成功率。',
    },
    {
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      titleEn: 'PGT-A Tested Embryos',
      titleZh: 'PGT-A 检测胚胎',
      descEn: 'You opted for genetic testing. All embryos are frozen while awaiting PGT-A results, then only chromosomally normal embryos are transferred.',
      descZh: '您选择了基因检测。所有胚胎在等待 PGT-A 结果时被冷冻，然后只移植染色体正常的胚胎。',
    },
    {
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      titleEn: 'Suboptimal Uterine Lining',
      titleZh: '子宫内膜欠佳',
      descEn: 'Your endometrial lining isn\'t ideal for fresh transfer due to high progesterone or overstimulation. Freezing all embryos and transferring in a later cycle improves success rates.',
      descZh: '由于高孕激素或过度刺激，您的子宫内膜不适合新鲜移植。冷冻所有胚胎并在稍后的周期中移植可以提高成功率。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'IVF Cycle & Embryo Creation',
      titleZh: 'IVF 周期与胚胎创建',
      durationEn: '2-3 weeks',
      durationZh: '2-3周',
      descriptionEn: 'Complete standard IVF process: ovarian stimulation, egg retrieval, fertilization (IVF or ICSI), and embryo culture to blastocyst stage (Day 5-6). Your embryologist grades embryos using the Gardner system (expansion, inner cell mass quality, trophectoderm quality).',
      descriptionZh: '完成标准 IVF 流程：促排卵、取卵、受精（IVF 或 ICSI）以及胚胎培养至囊胚阶段（第 5-6 天）。您的胚胎学家使用 Gardner 系统对胚胎进行分级（扩张、内细胞团质量、滋养层质量）。',
    },
    {
      step: 2,
      titleEn: 'Embryo Grading & Selection',
      titleZh: '胚胎分级与选择',
      durationEn: '1 day',
      durationZh: '1天',
      descriptionEn: 'Embryos are graded as AA, AB, BA, BB (high quality), or lower grades. Only embryos meeting minimum quality standards are frozen. Optional: PGT-A biopsy performed on Day 5-6, embryos frozen while awaiting genetic results (7-14 days).',
      descriptionZh: '胚胎被评为 AA、AB、BA、BB（高质量）或更低等级。只有达到最低质量标准的胚胎才会被冷冻。可选：第 5-6 天进行 PGT-A 活检，在等待基因结果期间冷冻胚胎（7-14 天）。',
    },
    {
      step: 3,
      titleEn: 'Vitrification (Ultra-Rapid Freezing)',
      titleZh: '玻璃化冷冻（超快速冷冻）',
      durationEn: '15 minutes per embryo',
      durationZh: '每个胚胎15分钟',
      descriptionEn: 'Embryos are treated with cryoprotectant, placed on specialized Cryotop® devices, and plunged into liquid nitrogen at -196°C in seconds. Vitrification prevents ice crystal formation that could damage cells. Survival rate post-thaw: 98%+.',
      descriptionZh: '胚胎用冷冻保护剂处理，放置在专用的 Cryotop® 设备上，在几秒钟内浸入 -196°C 的液氮中。玻璃化冷冻可防止可能损坏细胞的冰晶形成。解冻后存活率：98% 以上。',
    },
    {
      step: 4,
      titleEn: 'Long-Term Storage',
      titleZh: '长期存储',
      durationEn: 'Indefinite',
      durationZh: '无限期',
      descriptionEn: 'Embryos stored in individually labeled cryogenic tanks at -196°C. 24/7 temperature monitoring with backup systems. Annual storage fee ($650/year) includes: tank maintenance, alarm systems, insurance, and quarterly status reports sent to you.',
      descriptionZh: '胚胎存储在单独标记的低温罐中，温度为 -196°C。24/7 温度监控，配备备份系统。年度存储费（每年 $650）包括：罐维护、警报系统、保险以及发送给您的季度状态报告。',
    },
    {
      step: 5,
      titleEn: 'Frozen Embryo Transfer (FET)',
      titleZh: '冷冻胚胎移植（FET）',
      durationEn: '3-4 weeks prep',
      durationZh: '3-4周准备',
      descriptionEn: 'When ready for pregnancy: Prepare uterine lining with estrogen (10-14 days), add progesterone (5-6 days). Embryo thawed 2-3 hours before transfer. Transfer procedure identical to fresh cycle (5-10 minutes, painless). Pregnancy test 10 days later.',
      descriptionZh: '准备怀孕时：用雌激素准备子宫内膜（10-14 天），添加孕激素（5-6 天）。胚胎在移植前 2-3 小时解冻。移植过程与新鲜周期相同（5-10 分钟，无痛）。10 天后进行妊娠测试。',
    },
  ],

  technology: {
    method: 'Vitrification (Flash Freezing) with Cryotop® System',
    methodZh: 'Cryotop® 系统玻璃化冷冻（闪速冷冻）',
    certifications: ['CAP Accredited Lab', 'SART Reporting', 'ISO 9001:2015'],
    detailsEn: 'We use the Kitazato Cryotop® Method, the gold standard for embryo vitrification. This ultra-rapid freezing technique achieves cooling rates of 23,000°C per minute, preventing ice crystal damage. Our lab maintains: Dedicated embryo storage tanks (separate from eggs/sperm), Dual temperature monitoring with independent alarms, Backup liquid nitrogen supply, Biometric access control (fingerprint + keycard), and Electronic witnessing system (barcode verification at every step).',
    detailsZh: '我们使用 Kitazato Cryotop® 方法，这是胚胎玻璃化冷冻的金标准。这种超快速冷冻技术实现每分钟 23,000°C 的冷却速率，防止冰晶损伤。我们的实验室维护：专用胚胎存储罐（与卵子/精子分开）、配备独立警报的双温度监控、备用液氮供应、生物识别访问控制（指纹+钥匙卡）以及电子见证系统（每一步的条形码验证）。',
  },

  pricing: {
    basePriceMin: 0,
    basePriceMax: 0,
    currencySymbol: '$',
    includedEn: [
      'Embryo cryopreservation (included in IVF cycle)',
      'First year embryo storage',
      'Individual embryo labeling and tracking',
      'Quarterly storage status reports',
    ],
    includedZh: [
      '胚胎冷冻保存（包含在 IVF 周期中）',
      '首年胚胎存储',
      '单个胚胎标记和追踪',
      '季度存储状态报告',
    ],
    notIncludedEn: [
      'Annual storage fees after first year - $650/year',
      'Frozen embryo transfer (FET) cycle - $3,500',
      'Embryo thaw and assessment - included in FET',
      'PGT-A genetic testing (if desired) - $3,500-$5,000',
    ],
    notIncludedZh: [
      '首年后的年度存储费 - 每年 $650',
      '冷冻胚胎移植（FET）周期 - $3,500',
      '胚胎解冻和评估 - 包含在 FET 中',
      'PGT-A 基因检测（如需要）- $3,500-$5,000',
    ],
    annualStorageFee: 650,
    financingAvailable: true,
  },

  successData: {
    dataSource: 'IVY Fertility 2023 FET outcomes (245 frozen embryo transfers)',
    dataSourceZh: 'IVY Fertility 2023 年 FET 结果（245 次冷冻胚胎移植）',
    ageGroups: [
      {
        ageRange: '<35',
        ageRangeZh: '<35岁',
        survivalRate: 99,
        clinicalPregnancyRate: 70,
        liveBirthRate: 60,
      },
      {
        ageRange: '35-37',
        ageRangeZh: '35-37岁',
        survivalRate: 98,
        clinicalPregnancyRate: 62,
        liveBirthRate: 52,
      },
      {
        ageRange: '38-40',
        ageRangeZh: '38-40岁',
        survivalRate: 98,
        clinicalPregnancyRate: 50,
        liveBirthRate: 40,
      },
      {
        ageRange: '41-42',
        ageRangeZh: '41-42岁',
        survivalRate: 97,
        clinicalPregnancyRate: 35,
        liveBirthRate: 25,
      },
      {
        ageRange: '>42',
        ageRangeZh: '>42岁',
        survivalRate: 97,
        clinicalPregnancyRate: 18,
        liveBirthRate: 12,
      },
    ],
  },

  faqs: [
    {
      questionEn: 'Embryo freezing vs. egg freezing - which is better?',
      questionZh: '胚胎冷冻 vs. 卵子冷冻 - 哪个更好？',
      answerEn: 'Embryo freezing offers higher success rates (60% live birth vs. 40-50% for frozen eggs in women <35) because embryos have already survived fertilization and early development. However, embryo freezing requires a committed partner or sperm donor NOW. Egg freezing preserves your flexibility to choose a partner later.',
      answerZh: '胚胎冷冻提供更高的成功率（<35 岁女性的活产率为 60% vs. 冷冻卵子的 40-50%），因为胚胎已经经历了受精和早期发育。但是，胚胎冷冻需要现在就有承诺的伴侣或精子捐赠者。卵子冷冻保留了您稍后选择伴侣的灵活性。',
    },
    {
      questionEn: 'How long can embryos be frozen?',
      questionZh: '胚胎可以冷冻多久？',
      answerEn: 'Indefinitely. The oldest successfully thawed embryo was frozen for 27 years. Studies show no decline in survival rates, implantation rates, or baby health after 10+ years of storage. Your embryos are "paused in time" at -196°C.',
      answerZh: '无限期。最古老成功解冻的胚胎冷冻了 27 年。研究表明，在 10 年以上的存储后，存活率、着床率或婴儿健康没有下降。您的胚胎在 -196°C 下"暂停时间"。',
    },
    {
      questionEn: 'What is the Gardner grading system?',
      questionZh: '什么是 Gardner 分级系统？',
      answerEn: 'Embryos are graded on 3 criteria: (1) Expansion (1-6, higher is better), (2) Inner cell mass/ICM quality (A, B, C - becomes the baby), (3) Trophectoderm/TE quality (A, B, C - becomes the placenta). Example: A "5AA" embryo (expanded, excellent ICM, excellent TE) has ~70% pregnancy potential. We typically freeze embryos graded 3BB or better.',
      answerZh: '胚胎根据 3 个标准分级：(1) 扩张（1-6，越高越好），(2) 内细胞团/ICM 质量（A、B、C - 成为婴儿），(3) 滋养层/TE 质量（A、B、C - 成为胎盘）。示例："5AA"胚胎（扩张、优质 ICM、优质 TE）的妊娠潜力约为 70%。我们通常冷冻评级为 3BB 或更高的胚胎。',
    },
    {
      questionEn: 'FET success rates vs. fresh embryo transfer?',
      questionZh: 'FET 成功率 vs. 新鲜胚胎移植？',
      answerEn: 'FET often has HIGHER success rates than fresh transfer because: (1) Uterus has fully recovered from stimulation hormones, (2) Timing can be perfectly synchronized to your natural cycle, (3) Allows time for PGT-A testing. At IVY, our FET live birth rate for women <35 is 60% vs. 55% for fresh transfers.',
      answerZh: 'FET 的成功率通常高于新鲜移植，因为：(1) 子宫已从促排激素中完全恢复，(2) 时间可以与您的自然周期完美同步，(3) 允许时间进行 PGT-A 检测。在 IVY，我们 <35 岁女性的 FET 活产率为 60% vs. 新鲜移植的 55%。',
    },
    {
      questionEn: 'What if my embryos don\'t survive thawing?',
      questionZh: '如果我的胚胎在解冻后无法存活怎么办？',
      answerEn: 'With modern vitrification, survival rates are 97-99%. If an embryo doesn\'t survive thaw (rare), we thaw additional embryos at no extra charge until we have at least one viable embryo for transfer. Your FET fee ($3,500) covers the entire cycle regardless of how many embryos we thaw.',
      answerZh: '使用现代玻璃化冷冻技术，存活率为 97-99%。如果胚胎在解冻后无法存活（罕见），我们会免费解冻额外的胚胎，直到我们至少有一个可存活的胚胎用于移植。您的 FET 费用（$3,500）涵盖整个周期，无论我们解冻多少胚胎。',
    },
    {
      questionEn: 'Can I transport embryos to another clinic?',
      questionZh: '我可以将胚胎转移到另一家诊所吗？',
      answerEn: 'Yes. Embryo transport requires: (1) Written request 30 days in advance, (2) Destination clinic credentials (must be CAP/CLIA certified), (3) Transport fee ($500 covers specialized shipping container and certified medical courier). Embryos remain frozen during transport in a liquid nitrogen dry shipper.',
      answerZh: '可以。胚胎转移需要：(1) 提前 30 天书面申请，(2) 目的地诊所证书（必须是 CAP/CLIA 认证），(3) 运输费（$500 涵盖专用运输容器和认证医疗快递）。胚胎在运输过程中保持冷冻，使用液氮干式运输器。',
    },
  ],

  relatedServices: ['ivf-treatment', 'egg-freezing', 'fertility-preservation'],
  ctaTextEn: 'Schedule Embryo Freezing Consultation',
  ctaTextZh: '预约胚胎冷冻咨询',
}

// ===== THIRD-PARTY REPRODUCTION SERVICE =====
export const thirdPartyService: ServiceDetail = {
  slug: 'third-party',
  titleEn: 'Third-Party Reproduction',
  titleZh: '第三方辅助生殖',
  heroImageUrl: '/images/service.jpg',
  taglineEn: 'Surrogacy, Donor Eggs, and Donor Sperm Programs',
  taglineZh: '代孕、捐卵和捐精项目',
  descriptionEn: 'Third-party reproduction involves using donor eggs, donor sperm, or a gestational carrier (surrogate) to help you build your family. Our comprehensive program provides medical coordination, legal guidance, and emotional support throughout your journey.',
  descriptionZh: '第三方辅助生殖涉及使用捐赠卵子、捐赠精子或妊娠代孕者（代孕母亲）来帮助您建立家庭。我们的综合项目在整个过程中提供医疗协调、法律指导和情感支持。',

  whoItsFor: [
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleEn: 'Gestational Surrogacy',
      titleZh: '妊娠代孕',
      descEn: 'You can produce embryos but cannot carry a pregnancy safely due to medical conditions (uterine abnormalities, recurrent pregnancy loss, serious health risks). Your embryo is carried by a gestational carrier who has no genetic relationship to the baby.',
      descZh: '您可以产生胚胎，但由于医疗状况（子宫异常、复发性流产、严重健康风险）无法安全怀孕。您的胚胎由与婴儿没有遗传关系的妊娠代孕者携带。',
    },
    {
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      titleEn: 'Same-Sex Male Couples',
      titleZh: '男性同性伴侣',
      descEn: 'Male couples require both donor eggs and a gestational carrier. We coordinate the entire process: selecting an egg donor, creating embryos via IVF, and matching you with a qualified surrogate.',
      descZh: '男性伴侣需要捐赠卵子和妊娠代孕者。我们协调整个过程：选择卵子捐赠者、通过IVF创建胚胎，并为您匹配合格的代孕者。',
    },
    {
      iconPath: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
      titleEn: 'Donor Egg IVF',
      titleZh: '捐卵IVF',
      descEn: 'You have diminished ovarian reserve, premature ovarian failure, poor egg quality, or genetic concerns. Using donor eggs dramatically improves IVF success rates, with 65-75% live birth rates per transfer.',
      descZh: '您有卵巢储备减少、早发性卵巢功能衰竭、卵子质量差或遗传担忧。使用捐赠卵子可显著提高IVF成功率，每次移植的活产率为65-75%。',
      ageRange: 'Age 40+'
    },
    {
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      titleEn: 'Donor Sperm IUI/IVF',
      titleZh: '捐精IUI/IVF',
      descEn: 'Single women, same-sex female couples, or couples with severe male factor infertility. We work with reputable sperm banks providing extensive donor profiles, genetic screening, and FDA-compliant testing.',
      descZh: '单身女性、女性同性伴侣或有严重男性因素不孕的夫妇。我们与信誉良好的精子库合作，提供广泛的捐赠者档案、基因筛查和FDA合规检测。',
    },
    {
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      titleEn: 'Genetic Disease Prevention',
      titleZh: '遗传疾病预防',
      descEn: 'Both partners carry serious genetic conditions that cannot be screened via PGT-M. Using donor eggs or sperm eliminates the genetic risk while allowing at least one partner to have a biological connection.',
      descZh: '双方伴侣都携带无法通过PGT-M筛查的严重遗传疾病。使用捐赠卵子或精子可消除遗传风险，同时允许至少一方保持生物学联系。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Initial Consultation & Program Selection',
      titleZh: '初诊咨询与项目选择',
      durationEn: '1-2 visits',
      durationZh: '1-2次就诊',
      descriptionEn: 'Meet with our third-party reproduction coordinator and physician. Review your medical history and discuss whether you need donor eggs, donor sperm, gestational carrier, or combination. We\'ll explain the legal process, timeline (6-18 months), costs, and agency partnerships. Receive referrals to reproductive attorneys.',
      descriptionZh: '与我们的第三方生殖协调员和医生会面。回顾您的病史并讨论您是否需要捐赠卵子、捐赠精子、妊娠代孕者或组合。我们将解释法律流程、时间表（6-18个月）、费用和机构合作伙伴关系。获得生殖律师推荐。',
    },
    {
      step: 2,
      titleEn: 'Donor/Surrogate Matching & Screening',
      titleZh: '捐赠者/代孕者匹配与筛查',
      durationEn: '1-3 months',
      durationZh: '1-3个月',
      descriptionEn: 'For donors: Review anonymous or known donor profiles, including photos, medical history, genetic screening, education, and personal essays. For surrogates: Match with pre-screened carriers who have passed medical, psychological, and background checks. All parties undergo FDA-required infectious disease testing.',
      descriptionZh: '对于捐赠者：审查匿名或已知捐赠者档案，包括照片、病史、基因筛查、教育和个人文章。对于代孕者：匹配已通过医疗、心理和背景检查的预筛查携带者。所有各方都进行FDA要求的传染病检测。',
    },
    {
      step: 3,
      titleEn: 'Legal Contracts & Agreements',
      titleZh: '法律合同与协议',
      durationEn: '1-2 months',
      durationZh: '1-2个月',
      descriptionEn: 'Execute legal agreements drafted by reproductive attorneys. Donor agreements cover compensation, anonymity, parental rights termination, and future contact. Surrogacy contracts (40-60 pages) detail medical procedures, compensation, insurance, termination clauses, and custody transfer. Both parties have independent legal counsel.',
      descriptionZh: '执行由生殖律师起草的法律协议。捐赠者协议涵盖补偿、匿名性、父母权利终止和未来联系。代孕合同（40-60页）详细说明医疗程序、补偿、保险、终止条款和监护权转移。双方都有独立的法律顾问。',
    },
    {
      step: 4,
      titleEn: 'IVF Cycle & Embryo Creation',
      titleZh: 'IVF周期与胚胎创建',
      durationEn: '3-4 weeks',
      durationZh: '3-4周',
      descriptionEn: 'For donor eggs: Egg donor undergoes ovarian stimulation and retrieval. Eggs fertilized with partner or donor sperm. For donor sperm: Thawed sperm used for IUI or IVF with your eggs. Embryos cultured to blastocyst, PGT-A testing recommended. High-quality embryos cryopreserved.',
      descriptionZh: '对于捐赠卵子：卵子捐赠者进行促排卵和取卵。卵子与伴侣或捐赠精子受精。对于捐赠精子：解冻精子用于IUI或与您的卵子进行IVF。胚胎培养至囊胚，建议进行PGT-A检测。冷冻保存高质量胚胎。',
    },
    {
      step: 5,
      titleEn: 'Embryo Transfer & Pregnancy',
      titleZh: '胚胎移植与怀孕',
      durationEn: '10 months',
      durationZh: '10个月',
      descriptionEn: 'Gestational carrier\'s uterus prepared with estrogen and progesterone. Embryo transfer performed (you can attend). Pregnancy test 10 days later. If positive, carrier receives prenatal care from OB, with intended parents attending key appointments. Delivery at hospital of your choice.',
      descriptionZh: '用雌激素和孕激素准备妊娠代孕者的子宫。进行胚胎移植（您可以参加）。10天后进行妊娠测试。如果阳性，代孕者从产科医生那里接受产前护理，预期父母参加关键预约。在您选择的医院分娩。',
    },
    {
      step: 6,
      titleEn: 'Birth & Legal Parentage',
      titleZh: '出生与法定父母身份',
      durationEn: 'Immediate',
      durationZh: '立即',
      descriptionEn: 'Pre-birth or post-birth orders establish your legal parentage (varies by state). Your names appear on birth certificate. For surrogacy: Surrogate has no parental rights. For donors: Donors have no parental rights or obligations. You leave the hospital with your baby as legal parents.',
      descriptionZh: '出生前或出生后命令确立您的法定父母身份（因州而异）。您的名字出现在出生证明上。对于代孕：代孕者没有父母权利。对于捐赠者：捐赠者没有父母权利或义务。您作为法定父母带着婴儿离开医院。',
    },
  ],

  technology: {
    method: 'Comprehensive Donor & Surrogate Screening',
    methodZh: '全面的捐赠者和代孕者筛查',
    certifications: ['FDA Compliant', 'ASRM Guidelines', 'Background Verified'],
    detailsEn: 'All egg donors undergo: AMH and antral follicle count assessment, genetic carrier screening (300+ conditions), psychological evaluation, criminal background check, drug screening, and FDA infectious disease panel. All gestational carriers undergo: Medical clearance by OB/GYN, uterine cavity evaluation, psychological screening by licensed therapist, background check, and home visit. Sperm donors (through accredited banks): Genetic testing, infectious disease screening, semen analysis, and 6-month quarantine.',
    detailsZh: '所有卵子捐赠者都要经过：AMH和窦卵泡计数评估、遗传携带者筛查（300+种疾病）、心理评估、犯罪背景调查、药物筛查和FDA传染病检测。所有妊娠代孕者都要经过：产科医生医疗许可、子宫腔评估、持证治疗师心理筛查、背景调查和家访。精子捐赠者（通过认可的精子库）：基因检测、传染病筛查、精液分析和6个月隔离。',
  },

  pricing: {
    basePriceMin: 25000,
    basePriceMax: 150000,
    currencySymbol: '$',
    includedEn: [
      'Initial consultation and program coordination',
      'Medical screening and testing',
      'IVF cycle (egg retrieval, fertilization, embryo culture)',
      'Embryo transfer procedure',
      'First year embryo storage',
      '24/7 care coordination',
    ],
    includedZh: [
      '初诊咨询和项目协调',
      '医疗筛查和检测',
      'IVF周期（取卵、受精、胚胎培养）',
      '胚胎移植手术',
      '首年胚胎存储',
      '24/7护理协调',
    ],
    notIncludedEn: [
      'Donor egg agency fees - $8,000-$15,000',
      'Egg donor compensation - $8,000-$15,000',
      'Donor sperm (per vial) - $800-$1,500',
      'Gestational carrier agency fees - $25,000-$35,000',
      'Gestational carrier compensation - $50,000-$70,000',
      'Surrogate medical expenses & insurance - $15,000-$30,000',
      'Legal fees (attorneys for both parties) - $10,000-$20,000',
      'Newborn expenses and delivery - $5,000-$15,000',
    ],
    notIncludedZh: [
      '捐卵机构费用 - $8,000-$15,000',
      '卵子捐赠者补偿 - $8,000-$15,000',
      '捐赠精子（每管）- $800-$1,500',
      '妊娠代孕者机构费用 - $25,000-$35,000',
      '妊娠代孕者补偿 - $50,000-$70,000',
      '代孕医疗费用和保险 - $15,000-$30,000',
      '法律费用（双方律师）- $10,000-$20,000',
      '新生儿费用和分娩 - $5,000-$15,000',
    ],
    financingAvailable: true,
  },

  successData: {
    dataSource: 'IVY Fertility third-party reproduction outcomes (2023)',
    dataSourceZh: 'IVY Fertility 第三方辅助生殖结果（2023年）',
    ageGroups: [
      {
        ageRange: 'Donor eggs (<35)',
        ageRangeZh: '捐赠卵子（<35岁）',
        clinicalPregnancyRate: 75,
        liveBirthRate: 65,
      },
      {
        ageRange: 'Donor eggs (any age)',
        ageRangeZh: '捐赠卵子（任何年龄）',
        clinicalPregnancyRate: 70,
        liveBirthRate: 60,
      },
      {
        ageRange: 'Gestational carrier',
        ageRangeZh: '妊娠代孕者',
        clinicalPregnancyRate: 72,
        liveBirthRate: 65,
      },
      {
        ageRange: 'Donor sperm IUI',
        ageRangeZh: '捐精IUI',
        clinicalPregnancyRate: 15,
        liveBirthRate: 12,
      },
      {
        ageRange: 'Donor sperm IVF',
        ageRangeZh: '捐精IVF',
        clinicalPregnancyRate: 60,
        liveBirthRate: 50,
      },
    ],
  },

  faqs: [
    {
      questionEn: 'What is the total cost of surrogacy?',
      questionZh: '代孕的总费用是多少？',
      answerEn: 'Total surrogacy costs range from $120,000-$200,000+ including: IVF cycle ($15,000), surrogate compensation ($50,000-$70,000), agency fees ($25,000-$35,000), medical expenses ($15,000-$30,000), legal fees ($10,000-$20,000), and miscellaneous costs. Costs vary based on whether you need donor eggs/sperm, number of IVF cycles, insurance coverage, and complications.',
      answerZh: '代孕总费用范围为$120,000-$200,000+，包括：IVF周期（$15,000）、代孕者补偿（$50,000-$70,000）、机构费用（$25,000-$35,000）、医疗费用（$15,000-$30,000）、法律费用（$10,000-$20,000）和杂项费用。费用因您是否需要捐赠卵子/精子、IVF周期数量、保险覆盖和并发症而异。',
    },
    {
      questionEn: 'Is surrogacy legal? What are the legal risks?',
      questionZh: '代孕合法吗？法律风险是什么？',
      answerEn: 'Gestational surrogacy is legal in most U.S. states including California, Illinois, and New York. "Surrogacy-friendly" states allow pre-birth parentage orders, meaning your names go directly on the birth certificate. Some states prohibit surrogacy or make it legally complex. We only work in states with clear legal frameworks. Risks are minimal with proper contracts: surrogates cannot keep the baby (no genetic relationship), and pre-birth orders eliminate custody disputes.',
      answerZh: '妊娠代孕在大多数美国州都是合法的，包括加利福尼亚、伊利诺伊和纽约。"代孕友好"州允许出生前父母身份命令，这意味着您的名字直接出现在出生证明上。一些州禁止代孕或使其在法律上复杂。我们只在有明确法律框架的州工作。有适当合同的风险最小：代孕者不能保留婴儿（没有遗传关系），出生前命令消除监护权争议。',
    },
    {
      questionEn: 'How are egg donors screened and selected?',
      questionZh: '如何筛查和选择卵子捐赠者？',
      answerEn: 'All donors are 21-32 years old with proven fertility. Screening includes: Comprehensive medical history, Genetic carrier testing (Ashkenazi Jewish panel, cystic fibrosis, sickle cell, etc.), Psychological evaluation by licensed therapist, Drug and nicotine testing, FDA infectious disease panel (HIV, hepatitis, syphilis), Ovarian reserve testing (AMH, AFC). You review profiles with photos (baby photos and adult), personal essays, family medical history, and educational background.',
      answerZh: '所有捐赠者都是21-32岁，具有经证实的生育能力。筛查包括：全面的病史、遗传携带者检测（德系犹太人小组、囊性纤维化、镰状细胞等）、持证治疗师的心理评估、药物和尼古丁检测、FDA传染病检测（HIV、肝炎、梅毒）、卵巢储备检测（AMH、AFC）。您审查带照片（婴儿照片和成人照片）的档案、个人文章、家族病史和教育背景。',
    },
    {
      questionEn: 'Can I meet the surrogate? What is our relationship?',
      questionZh: '我可以见代孕者吗？我们的关系是什么？',
      answerEn: 'Yes, most intended parents meet their surrogate before signing contracts. Relationships vary: Some maintain close contact throughout pregnancy and beyond (attending appointments, texting updates, forming friendships). Others prefer a more professional relationship managed through the agency. You decide the level of involvement—attending embryo transfer, ultrasounds, and delivery is common. Post-birth contact is negotiated in the contract.',
      answerZh: '是的，大多数预期父母在签署合同前会见他们的代孕者。关系各不相同：有些人在整个怀孕期间及以后保持密切联系（参加预约、发短信更新、建立友谊）。其他人更喜欢通过机构管理的更专业的关系。您决定参与程度——参加胚胎移植、超声检查和分娩很常见。出生后的联系在合同中协商。',
    },
    {
      questionEn: 'Anonymous vs. known egg donors - which is better?',
      questionZh: '匿名vs.已知卵子捐赠者 - 哪个更好？',
      answerEn: 'Anonymous donors: More options available, lower cost ($8,000-$12,000 compensation), donor cannot contact your child. Known donors: Often a friend or family member, may reduce costs (still need legal contracts), allows medical history updates, child can know genetic origins. Open-ID donors: Anonymous initially but child can contact donor at age 18. We recommend consulting a therapist to decide what\'s best for your family.',
      answerZh: '匿名捐赠者：更多选择、成本较低（补偿$8,000-$12,000）、捐赠者不能联系您的孩子。已知捐赠者：通常是朋友或家庭成员、可能降低成本（仍需要法律合同）、允许医疗史更新、孩子可以知道遗传起源。开放身份捐赠者：最初匿名，但孩子18岁时可以联系捐赠者。我们建议咨询治疗师以决定什么对您的家庭最好。',
    },
    {
      questionEn: 'How long does the third-party process take?',
      questionZh: '第三方流程需要多长时间？',
      answerEn: 'Timelines vary by service: Donor sperm IUI: 1-2 months (immediate if using frozen sperm). Donor egg IVF: 4-6 months (matching, screening, IVF cycle). Gestational surrogacy: 12-18 months total (3-4 months matching/legal, 2-3 months IVF, 9 months pregnancy). Delays can occur from failed matches, legal complexities, or unsuccessful transfers. Realistic planning prevents frustration.',
      answerZh: '时间表因服务而异：捐精IUI：1-2个月（如果使用冷冻精子则立即）。捐卵IVF：4-6个月（匹配、筛查、IVF周期）。妊娠代孕：总共12-18个月（3-4个月匹配/法律，2-3个月IVF，9个月怀孕）。延迟可能由于匹配失败、法律复杂性或转移失败而发生。现实的规划可以防止挫折。',
    },
  ],

  relatedServices: ['ivf-treatment', 'egg-freezing', 'embryo-freezing'],
  ctaTextEn: 'Schedule Third-Party Consultation',
  ctaTextZh: '预约第三方咨询',
}

export const allServices: Record<string, ServiceDetail> = {
  'egg-freezing': eggFreezingService,
  'ivf-treatment': ivfTreatmentService,
  'embryo-freezing': embryoFreezingService,
  'third-party': thirdPartyService,
}
