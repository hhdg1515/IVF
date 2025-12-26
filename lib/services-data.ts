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
  taglineEn: 'Your Timeline, Your Choice',
  taglineZh: '您的时间，您做主',
  descriptionEn: 'Life doesn\'t always follow a schedule—and neither should your fertility decisions. Egg freezing gives you the freedom to focus on what matters now, knowing that when you\'re ready for the next chapter, your options are still open.',
  descriptionZh: '生活不会总是按计划进行——您的生育决定也不必如此。卵子冷冻让您可以自由专注于眼前重要的事，知道当您准备好迎接下一个人生阶段时，选择依然在您手中。',

  whoItsFor: [
    {
      iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      titleEn: 'Building your career first',
      titleZh: '事业优先的您',
      descEn: 'You\'re in the middle of something important—a degree, a promotion, a dream you\'re chasing. Family can wait, but biology doesn\'t have to rush you.',
      descZh: '您正在追求重要的事业——学位、晋升或梦想。家庭可以等，但生物钟不必催促您。',
      ageRange: '25-38 years old'
    },
    {
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      titleEn: 'Still finding your person',
      titleZh: '还在寻找对的人',
      descEn: 'The right partner hasn\'t come along yet—or you\'re exploring what family looks like for you. Either way, you deserve time without pressure.',
      descZh: '对的人还没出现——或者您正在探索家庭对您意味着什么。无论如何，您值得拥有没有压力的时间。',
    },
    {
      iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      titleEn: 'Facing medical treatment',
      titleZh: '面临医疗治疗',
      descEn: 'Cancer treatment, surgery, or other medical needs shouldn\'t take away your future choices. We can help you preserve your options before treatment begins.',
      descZh: '癌症治疗、手术或其他医疗需求不应该剥夺您未来的选择。我们可以帮您在治疗开始前保留选项。',
    },
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleEn: 'Being proactive about your health',
      titleZh: '主动掌握健康',
      descEn: 'Maybe early menopause runs in your family, or you just want to plan ahead. There\'s nothing wrong with giving yourself more options.',
      descZh: '也许您家族有早期绝经的历史，或者您只是想提前规划。给自己更多选择，没什么不对。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Let\'s Talk First',
      titleZh: '先聊聊',
      durationEn: '1 visit',
      durationZh: '1次就诊',
      descriptionEn: 'We start by getting to know you—your goals, your timeline, your questions. A few simple tests (blood work and ultrasound) help us understand where you\'re starting from, so we can give you honest answers about what to expect.',
      descriptionZh: '我们先了解您——您的目标、时间安排、疑问。几项简单的检查（血液和超声）帮助我们了解您的起点，以便给您关于预期的诚实答复。',
      costInfo: 'Included in package'
    },
    {
      step: 2,
      titleEn: 'Preparing Your Body',
      titleZh: '调理身体',
      durationEn: '10-14 days',
      durationZh: '10-14天',
      descriptionEn: 'For about two weeks, you\'ll take hormone injections to help your ovaries produce more eggs than usual. It sounds intimidating, but we\'ll teach you exactly how to do it—and our nurses are just a call away if you need them.',
      descriptionZh: '大约两周时间，您需要注射激素帮助卵巢产生更多卵子。听起来有点吓人，但我们会手把手教您——护士随时待命解答疑问。',
    },
    {
      step: 3,
      titleEn: 'The Retrieval',
      titleZh: '取卵',
      durationEn: '15-20 minutes',
      durationZh: '15-20分钟',
      descriptionEn: 'A quick, gentle procedure while you\'re comfortably sedated—you won\'t feel a thing. Most people describe it as easier than they expected. You\'ll rest for an hour or two, then head home the same day.',
      descriptionZh: '在舒适的镇静状态下进行的快速、温和的手术——您不会感到任何不适。大多数人说比想象中轻松。休息一两个小时后，当天就可以回家。',
    },
    {
      step: 4,
      titleEn: 'Safe & Secure Freezing',
      titleZh: '安全冷冻',
      durationEn: 'Same day',
      durationZh: '当天',
      descriptionEn: 'Your eggs are flash-frozen using a technique that keeps them in perfect condition. They\'re stored in our lab with round-the-clock monitoring, backup systems, and every safeguard we can think of.',
      descriptionZh: '您的卵子使用快速冷冻技术保存，保持完美状态。它们存储在我们的实验室中，24小时监控、备用系统，我们能想到的所有保障措施都有。',
    },
    {
      step: 5,
      titleEn: 'Ready When You Are',
      titleZh: '等您准备好',
      durationEn: 'Unlimited',
      durationZh: '无限期',
      descriptionEn: 'Your eggs can wait as long as you need them to. When you\'re ready—whether that\'s next year or ten years from now—we\'ll be here to help you take the next step.',
      descriptionZh: '您的卵子可以等您需要的任何时间。当您准备好时——无论是明年还是十年后——我们都会在这里帮您迈出下一步。',
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
      answerEn: 'There\'s no magic number, but 15-20 mature eggs gives you strong odds (70-80% chance of a live birth). Most women under 35 can get there in one cycle. We\'ll look at your specific situation and give you a realistic picture—no guesswork.',
      answerZh: '没有神奇的数字，但15-20颗成熟卵子能给您很好的几率（70-80%的活产机会）。大多数35岁以下的女性可以在一个周期内达到。我们会根据您的具体情况给出真实的预期——不靠猜测。',
    },
    {
      questionEn: 'What is the best age to freeze eggs?',
      questionZh: '冻卵的最佳年龄是多少？',
      answerEn: 'Earlier is generally better—egg quality naturally declines with age. But "best" depends on your life. We\'ve helped women in their late 30s and early 40s freeze eggs successfully. Come talk to us—we\'ll tell you what makes sense for you, not just what\'s "ideal."',
      answerZh: '通常越早越好——卵子质量会随年龄下降。但"最佳"取决于您的生活。我们帮助过30多岁末和40出头的女性成功冻卵。来聊聊——我们会告诉您什么对您有意义，而不只是什么"理想"。',
    },
    {
      questionEn: 'How long can eggs be stored?',
      questionZh: '卵子可以存储多久？',
      answerEn: 'As long as you need. Eggs frozen for 10+ years work just as well as those frozen last month. There\'s no expiration date—they\'ll be ready whenever you are.',
      answerZh: '您需要多久就多久。冻了10多年的卵子和上个月冻的一样好。没有保质期——您准备好的时候，它们就准备好了。',
    },
    {
      questionEn: 'What if I never use my frozen eggs?',
      questionZh: '如果我从未使用冷冻卵子怎么办？',
      answerEn: 'That\'s completely okay—many women freeze eggs as a "just in case" and end up not needing them. You can keep them stored, donate them to research or another family, or have them discarded. Whatever feels right to you.',
      answerZh: '完全没问题——很多女性冻卵只是"以防万一"，最后并不需要使用。您可以继续存储、捐赠给研究或其他家庭，或者销毁。怎么做由您决定。',
    },
    {
      questionEn: 'Does insurance cover egg freezing?',
      questionZh: '保险是否覆盖冻卵费用？',
      answerEn: 'It depends. Some employers cover it (increasingly common in tech), and medical freezing before cancer treatment is usually covered. Our team will check your specific coverage and help you understand your options—including payment plans if needed.',
      answerZh: '看情况。一些雇主会覆盖（在科技行业越来越常见），癌症治疗前的医疗冻卵通常有保障。我们的团队会查询您的具体保险覆盖，帮您了解选项——如果需要，也有分期付款方案。',
    },
  ],

  relatedServices: ['ivf-treatment', 'embryo-freezing', 'fertility-preservation'],
  ctaTextEn: 'Let\'s Talk About Your Options',
  ctaTextZh: '聊聊您的选择',
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
    descEn: 'Give yourself more time to decide. Freeze your eggs now, use them when you\'re ready.',
    descZh: '给自己更多时间决定。现在冷冻卵子，准备好时再使用。',
    iconPath: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    priceRange: '$7,500 - $9,500',
    priceRangeZh: '$7,500 - $9,500',
  },
  {
    slug: 'ivf-treatment',
    titleEn: 'IVF Treatment',
    titleZh: '试管婴儿治疗',
    descEn: 'When you need help getting pregnant, we\'re here with personalized care every step of the way.',
    descZh: '当您需要助孕时，我们会在每一步提供个性化的关怀。',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    priceRange: '$12,000 - $15,000',
    priceRangeZh: '$12,000 - $15,000',
  },
  {
    slug: 'embryo-freezing',
    titleEn: 'Embryo Freezing',
    titleZh: '胚胎冷冻',
    descEn: 'Your embryos are ready and waiting. Use them whenever life says it\'s time.',
    descZh: '您的胚胎已准备好，静静等待。当生活准备好时，它们也准备好了。',
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    priceRange: 'Included in IVF',
    priceRangeZh: 'IVF中包含',
  },
  {
    slug: 'fertility-preservation',
    titleEn: 'Fertility Preservation',
    titleZh: '生育力保存',
    descEn: 'Facing cancer treatment or surgery? We can help protect your fertility options—fast.',
    descZh: '面临癌症治疗或手术？我们可以帮您快速保护生育选项。',
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
  taglineEn: 'When You Need a Little Help',
  taglineZh: '当您需要一点帮助时',
  descriptionEn: 'Sometimes getting pregnant needs more than trying on your own. IVF gives us the ability to bring eggs and sperm together in our lab, choose the healthiest embryos, and give you the best possible chance. It\'s not giving up—it\'s getting smart about what you want most.',
  descriptionZh: '有时怀孕需要的不只是自己努力。IVF让我们能够在实验室中将卵子和精子结合，选择最健康的胚胎，给您最好的机会。这不是放弃——而是为您最想要的东西采取最聪明的方式。',

  whoItsFor: [
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleEn: 'Tubal issues',
      titleZh: '输卵管问题',
      descEn: 'If your tubes are blocked or damaged, IVF bypasses them completely—your eggs go straight from your ovaries to our lab.',
      descZh: '如果您的输卵管阻塞或受损，IVF可以完全绕过它们——卵子直接从卵巢到我们的实验室。',
    },
    {
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      titleEn: 'Sperm challenges',
      titleZh: '精子问题',
      descEn: 'Low count or motility doesn\'t have to stop you. We can work with very few sperm and still get great results with ICSI.',
      descZh: '精子数量少或活力低不必阻止您。我们可以用极少的精子，通过ICSI技术仍然获得很好的结果。',
    },
    {
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      titleEn: 'Fewer eggs than expected',
      titleZh: '卵子数量偏少',
      descEn: 'Age or other factors may mean fewer eggs—but quality matters more than quantity. We\'ll tailor your protocol to get the most from what you have.',
      descZh: '年龄或其他因素可能意味着卵子较少——但质量比数量更重要。我们会定制方案，充分利用您拥有的。',
      ageRange: 'Age 35-42'
    },
    {
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      titleEn: 'No clear reason',
      titleZh: '原因不明',
      descEn: 'Tests came back normal but you\'re still not pregnant? IVF often works when nothing else has—and sometimes helps us figure out what was going wrong.',
      descZh: '检查结果正常但仍未怀孕？IVF经常在其他方法都不奏效时起作用——有时还能帮我们找出问题所在。',
    },
    {
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      titleEn: 'Genetic concerns',
      titleZh: '遗传担忧',
      descEn: 'Carry a genetic condition you don\'t want to pass on? We can test embryos before transfer to give you peace of mind.',
      descZh: '携带不想遗传的基因疾病？我们可以在移植前检测胚胎，让您安心。',
    },
    {
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      titleEn: 'Repeated losses',
      titleZh: '反复流产',
      descEn: 'Miscarriage is heartbreaking. Testing embryos before transfer can significantly reduce the chance of it happening again.',
      descZh: '流产令人心碎。在移植前检测胚胎可以显著降低再次发生的几率。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Preparing Your Body',
      titleZh: '调理身体',
      durationEn: '10-14 days',
      durationZh: '10-14天',
      descriptionEn: 'Daily hormone injections help your ovaries produce multiple eggs instead of the usual one. We\'ll check in every few days to see how you\'re responding and adjust as needed. Most women say this part is more manageable than they expected.',
      descriptionZh: '每日激素注射帮助卵巢产生多个卵子而不是通常的一个。我们每隔几天就会检查您的反应并根据需要调整。大多数女性说这部分比她们预期的更容易应对。',
    },
    {
      step: 2,
      titleEn: 'Egg Retrieval',
      titleZh: '取卵',
      durationEn: '20-30 minutes',
      durationZh: '20-30分钟',
      descriptionEn: 'A quick procedure while you\'re sedated—you\'ll sleep through it and wake up when it\'s done. We collect the eggs, you rest for an hour or two, and then you go home. Most people take the rest of the day off and feel normal by the next day.',
      descriptionZh: '在镇静状态下进行的快速手术——您会在睡眠中度过，醒来时就结束了。我们收集卵子，您休息一两个小时，然后回家。大多数人当天休息，第二天就感觉正常了。',
    },
    {
      step: 3,
      titleEn: 'Fertilization',
      titleZh: '受精',
      durationEn: 'Same day',
      durationZh: '当天',
      descriptionEn: 'This is where the magic happens. We introduce sperm to your eggs—either naturally or by injecting one directly into each egg (ICSI). By the next morning, we know how many have fertilized.',
      descriptionZh: '这是奇迹发生的地方。我们将精子与卵子结合——自然方式或通过将精子直接注入每个卵子（ICSI）。到第二天早上，我们就知道有多少受精了。',
    },
    {
      step: 4,
      titleEn: 'Watching Them Grow',
      titleZh: '看着它们成长',
      durationEn: '5-6 days',
      durationZh: '5-6天',
      descriptionEn: 'Your embryos develop in our lab for about a week. We use time-lapse cameras to watch their progress without disturbing them. It\'s fascinating—and yes, we\'ll share updates with you.',
      descriptionZh: '您的胚胎在我们的实验室中发育约一周。我们使用延时摄像机观察它们的进展而不打扰它们。这很神奇——是的，我们会与您分享进展。',
    },
    {
      step: 5,
      titleEn: 'Choosing the Best Embryo',
      titleZh: '选择最佳胚胎',
      durationEn: '1 day (or 7-14 days with genetic testing)',
      durationZh: '1天（如果做基因检测则为7-14天）',
      descriptionEn: 'Our embryologists carefully evaluate each embryo. If you want extra certainty, we can test them for chromosomal issues—it means waiting a bit longer, but many people find the peace of mind worth it.',
      descriptionZh: '我们的胚胎学家仔细评估每个胚胎。如果您想要更多确定性，我们可以检测染色体问题——这意味着等待更长时间，但很多人觉得这种安心感是值得的。',
    },
    {
      step: 6,
      titleEn: 'The Transfer',
      titleZh: '移植',
      durationEn: '5-10 minutes',
      durationZh: '5-10分钟',
      descriptionEn: 'The gentle part. We place one embryo (sometimes two) into your uterus—no anesthesia needed, just mild cramping at most. Then you rest a bit and go about your life. Any extra embryos are frozen for the future.',
      descriptionZh: '温和的环节。我们将一个胚胎（有时两个）放入您的子宫——不需要麻醉，最多只有轻微痉挛。然后您休息一下，继续正常生活。额外的胚胎会被冷冻保存。',
    },
    {
      step: 7,
      titleEn: 'The Wait (and the News)',
      titleZh: '等待（和结果）',
      durationEn: '10-14 days post-transfer',
      durationZh: '移植后10-14天',
      descriptionEn: 'About 10 days after transfer, a blood test tells us if it worked. If it\'s positive, we\'ll see you a few more times to make sure everything is going well before handing you off to your OB for prenatal care.',
      descriptionZh: '移植后约10天，血液检查会告诉我们是否成功。如果是阳性，我们会再见您几次以确保一切顺利，然后将您转给产科医生进行产前护理。',
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
  ctaTextEn: 'Let\'s Talk About Your Options',
  ctaTextZh: '聊聊您的选择',
}

// ===== EMBRYO FREEZING SERVICE =====
export const embryoFreezingService: ServiceDetail = {
  slug: 'embryo-freezing',
  titleEn: 'Embryo Freezing',
  titleZh: '胚胎冷冻',
  heroImageUrl: '/images/service.jpg',
  taglineEn: 'Keep Your Options Open',
  taglineZh: '为未来保留更多可能',
  descriptionEn: 'You\'ve done the hard part—created embryos. Now they\'re waiting for you, whenever you\'re ready. Maybe you want to try for siblings down the road. Maybe you\'re facing treatment that could affect your fertility. Or maybe life just got complicated and "later" makes more sense than "now." Your embryos don\'t have an expiration date. They\'ll be here when you are.',
  descriptionZh: '您已经完成了最艰难的部分——创造了胚胎。现在它们在等着您，无论何时您准备好了都可以。也许您想以后再要一个孩子。也许您正面临可能影响生育的治疗。或者也许生活变得复杂，"以后"比"现在"更合适。您的胚胎没有保质期。当您准备好时，它们会在这里等您。',

  whoItsFor: [
    {
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      titleEn: 'Extra embryos from IVF',
      titleZh: 'IVF 后有多余胚胎',
      descEn: 'Your IVF cycle went well and you have bonus embryos. Rather than start from scratch next time, they\'re ready and waiting—no more injections, no more retrievals.',
      descZh: '您的 IVF 周期顺利，还有额外的胚胎。下次不用从头开始，它们已经准备好了——不需要再打针，不需要再取卵。',
    },
    {
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      titleEn: 'Planning for siblings',
      titleZh: '计划要第二个孩子',
      descEn: 'One baby now, more later? Your frozen embryos stay young even as time passes. When you\'re ready for the next chapter, they\'ll be ready too.',
      descZh: '现在要一个，以后再要？冷冻的胚胎不会随时间老化。当您准备好迎接下一个宝宝时，它们也准备好了。',
    },
    {
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      titleEn: 'Facing medical treatment',
      titleZh: '即将接受医疗治疗',
      descEn: 'If you have a partner or are using donor sperm, freezing embryos before chemo, radiation, or other treatments gives you the strongest backup plan—with higher success rates than eggs alone.',
      descZh: '如果您有伴侣或使用供体精子，在化疗、放疗或其他治疗前冷冻胚胎是最可靠的后备方案——成功率比单独冷冻卵子更高。',
    },
    {
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      titleEn: 'Waiting for genetic results',
      titleZh: '等待基因检测结果',
      descEn: 'Opted for PGT-A testing? Your embryos stay safely frozen while we wait for results, so we transfer only the healthy ones when you\'re ready.',
      descZh: '选择了 PGT-A 检测？您的胚胎会安全冷冻，等待结果出来后，我们只移植健康的胚胎。',
    },
    {
      iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      titleEn: 'Your body needs time',
      titleZh: '身体需要恢复时间',
      descEn: 'Sometimes your uterus isn\'t quite ready after stimulation. Freezing all embryos and transferring later, when conditions are perfect, can actually improve your chances.',
      descZh: '有时促排后子宫还没准备好。冷冻所有胚胎，等条件最佳时再移植，反而可能提高成功率。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Complete your IVF cycle',
      titleZh: '完成 IVF 周期',
      durationEn: '2-3 weeks',
      durationZh: '2-3周',
      descriptionEn: 'First comes the IVF process—stimulation, retrieval, fertilization. Your embryos develop for 5-6 days until they reach the blastocyst stage. We grade each one so you know exactly what you\'re working with.',
      descriptionZh: '首先是 IVF 流程——促排、取卵、受精。您的胚胎发育 5-6 天直到囊胚阶段。我们会对每个胚胎进行评级，让您清楚了解情况。',
    },
    {
      step: 2,
      titleEn: 'We pick the best ones',
      titleZh: '选择最优胚胎',
      durationEn: '1 day',
      durationZh: '1天',
      descriptionEn: 'Our embryologists select embryos that meet quality standards for freezing. If you\'ve chosen genetic testing, we\'ll take a tiny biopsy first—then freeze everything while we wait for results.',
      descriptionZh: '胚胎学家会选择达到冷冻质量标准的胚胎。如果您选择了基因检测，我们会先取一小块活检样本，然后在等待结果时冷冻所有胚胎。',
    },
    {
      step: 3,
      titleEn: 'Flash-freezing',
      titleZh: '瞬间冷冻',
      durationEn: '15 min per embryo',
      durationZh: '每个胚胎15分钟',
      descriptionEn: 'Vitrification is like hitting pause. Your embryos go from room temperature to -196°C in seconds—so fast that no ice crystals can form. Over 98% survive thawing perfectly.',
      descriptionZh: '玻璃化冷冻就像按下暂停键。您的胚胎在几秒钟内从室温降到 -196°C——快到没有冰晶可以形成。超过 98% 的胚胎完美解冻。',
    },
    {
      step: 4,
      titleEn: 'Safe storage—for as long as you need',
      titleZh: '安全存储——想存多久都可以',
      durationEn: 'Indefinite',
      durationZh: '无限期',
      descriptionEn: 'Your embryos rest in liquid nitrogen tanks with round-the-clock monitoring and backup systems. We\'ll send you updates quarterly. There\'s no expiration date—embryos frozen for 20+ years have produced healthy babies.',
      descriptionZh: '您的胚胎存放在液氮罐中，24 小时监控并配备备用系统。我们每季度会向您发送状态更新。没有保质期——冷冻 20 多年的胚胎也生出了健康宝宝。',
    },
    {
      step: 5,
      titleEn: 'When you\'re ready: transfer',
      titleZh: '当您准备好：移植',
      durationEn: '3-4 weeks prep',
      durationZh: '3-4周准备',
      descriptionEn: 'We\'ll prepare your uterus for a few weeks, thaw your embryo a couple hours before, and transfer it—a quick, painless procedure. Then comes the wait: pregnancy test in 10 days.',
      descriptionZh: '我们会花几周时间准备您的子宫，移植前几小时解冻胚胎，然后进行移植——快速、无痛。接下来是等待：10 天后验孕。',
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
  ctaTextEn: 'Let\'s Discuss Your Options',
  ctaTextZh: '聊聊您的选择',
}

// ===== THIRD-PARTY REPRODUCTION SERVICE =====
export const thirdPartyService: ServiceDetail = {
  slug: 'third-party',
  titleEn: 'Third-Party Reproduction',
  titleZh: '第三方辅助生殖',
  heroImageUrl: '/images/service.jpg',
  taglineEn: 'Many Ways to Build a Family',
  taglineZh: '通往家庭的多条路径',
  descriptionEn: 'Sometimes you need help from someone else to have a baby—and that\'s okay. Whether you\'re considering donor eggs, donor sperm, or a gestational carrier, we\'ll guide you through every step. The path may be different, but the destination is the same: your family.',
  descriptionZh: '有时候，您需要借助他人的帮助来迎接宝宝——这完全没问题。无论您考虑的是捐赠卵子、捐赠精子还是妊娠代孕者，我们都会引导您走过每一步。道路可能不同，但终点相同：您的家庭。',

  whoItsFor: [
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      titleEn: 'Need a carrier',
      titleZh: '需要代孕者',
      descEn: 'You can make embryos but can\'t safely carry a pregnancy—whether due to uterine issues, health risks, or multiple losses. A gestational carrier brings your baby into the world while you stay fully connected.',
      descZh: '您可以创造胚胎，但无法安全怀孕——无论是子宫问题、健康风险还是多次流产。妊娠代孕者帮您把宝宝带到这个世界，而您始终保持紧密联系。',
    },
    {
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      titleEn: 'Same-sex male couples',
      titleZh: '男性同性伴侣',
      descEn: 'Ready to start your family? We\'ll help you find an egg donor, create embryos, and match you with a surrogate. One or both partners can contribute genetically—the choice is yours.',
      descZh: '准备好组建家庭了吗？我们会帮您找到卵子捐赠者、创建胚胎，并为您匹配代孕者。一方或双方都可以提供遗传基因——选择权在您。',
    },
    {
      iconPath: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
      titleEn: 'Considering donor eggs',
      titleZh: '考虑使用捐赠卵子',
      descEn: 'If your own eggs aren\'t an option—low reserve, genetic concerns, or previous unsuccessful cycles—donor eggs can change everything. Success rates jump to 65-75%, regardless of your age.',
      descZh: '如果您自己的卵子不是一个选项——储备低、遗传担忧或之前的周期不成功——捐赠卵子可以改变一切。无论您的年龄如何，成功率都可以达到 65-75%。',
      ageRange: 'Age 40+'
    },
    {
      iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      titleEn: 'Need donor sperm',
      titleZh: '需要捐赠精子',
      descEn: 'Single moms by choice, same-sex female couples, or facing severe male factor—we work with trusted sperm banks so you can browse detailed profiles and find the right fit.',
      descZh: '单身准妈妈、女性同性伴侣或面临严重男性因素——我们与可信赖的精子库合作，您可以浏览详细档案找到合适的捐赠者。',
    },
    {
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      titleEn: 'Avoiding genetic disease',
      titleZh: '避免遗传疾病',
      descEn: 'If both partners carry serious genetic conditions that testing can\'t solve, using donor eggs or sperm lets you eliminate the risk while still having a biological connection to your child.',
      descZh: '如果双方都携带检测无法解决的严重遗传疾病，使用捐赠卵子或精子可以消除风险，同时仍与孩子保持生物学联系。',
    },
  ],

  processSteps: [
    {
      step: 1,
      titleEn: 'Let\'s talk about your options',
      titleZh: '让我们聊聊您的选择',
      durationEn: '1-2 visits',
      durationZh: '1-2次就诊',
      descriptionEn: 'We start with understanding your situation. Do you need donor eggs, sperm, a carrier—or some combination? We\'ll walk through what each path looks like, connect you with trusted agencies and attorneys, and give you a realistic picture of timelines and costs.',
      descriptionZh: '我们首先了解您的情况。您需要捐赠卵子、精子、代孕者——还是某种组合？我们会带您了解每条路径的样子，为您对接可信赖的机构和律师，并给您一个真实的时间和费用预期。',
    },
    {
      step: 2,
      titleEn: 'Finding the right match',
      titleZh: '找到合适的人选',
      durationEn: '1-3 months',
      durationZh: '1-3个月',
      descriptionEn: 'For donors, you\'ll review profiles—photos, backgrounds, personal essays—and choose someone who feels right. For surrogates, you\'ll meet pre-screened carriers who\'ve passed thorough medical and psychological evaluations. This part takes time, and that\'s okay.',
      descriptionZh: '对于捐赠者，您将查看档案——照片、背景、个人文章——选择感觉合适的人。对于代孕者，您将与通过全面医疗和心理评估的预筛选人选见面。这部分需要时间，这没关系。',
    },
    {
      step: 3,
      titleEn: 'The legal stuff',
      titleZh: '法律事务',
      durationEn: '1-2 months',
      durationZh: '1-2个月',
      descriptionEn: 'Contracts protect everyone. You\'ll each have your own attorney to ensure your rights are covered—parentage, compensation, expectations. It sounds complicated, but we\'ve been through this many times and can guide you.',
      descriptionZh: '合同保护每个人。您们各自都有自己的律师确保权益得到保障——亲权、补偿、期望。听起来复杂，但我们经历过很多次，可以引导您。',
    },
    {
      step: 4,
      titleEn: 'Creating your embryos',
      titleZh: '创建您的胚胎',
      durationEn: '3-4 weeks',
      durationZh: '3-4周',
      descriptionEn: 'Whether you\'re using donor eggs, donor sperm, or both—this is when embryos get created through IVF. We can do genetic testing if you\'d like. Then they\'re frozen and ready for transfer when the time is right.',
      descriptionZh: '无论您使用捐赠卵子、捐赠精子还是两者兼有——这是通过 IVF 创建胚胎的时候。如果您愿意，我们可以进行基因检测。然后冷冻保存，等待合适的时机进行移植。',
    },
    {
      step: 5,
      titleEn: 'The pregnancy journey',
      titleZh: '孕期旅程',
      durationEn: '10 months',
      durationZh: '10个月',
      descriptionEn: 'Transfer day arrives. If you\'re using a carrier, you can be there. Then comes the wait, the positive test, and nine months of prenatal care. Most intended parents attend key appointments and ultrasounds—staying connected every step of the way.',
      descriptionZh: '移植日到来。如果您使用代孕者，您可以在场。然后是等待、阳性测试、九个月的产前护理。大多数准父母会参加关键的预约和超声检查——在每一步都保持联系。',
    },
    {
      step: 6,
      titleEn: 'You become parents',
      titleZh: '您成为父母',
      durationEn: 'Birth day',
      durationZh: '出生日',
      descriptionEn: 'Legal paperwork is handled before or right after birth—your names go on the birth certificate. Donors and carriers have no parental rights or obligations. You leave the hospital with your baby, as parents. It\'s really that simple.',
      descriptionZh: '法律文件在出生前或出生后立即处理——您的名字会出现在出生证明上。捐赠者和代孕者没有父母权利或义务。您作为父母带着宝宝离开医院。就是这么简单。',
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
  ctaTextEn: 'Let\'s Explore Your Options',
  ctaTextZh: '探索您的选择',
}

export const allServices: Record<string, ServiceDetail> = {
  'egg-freezing': eggFreezingService,
  'ivf-treatment': ivfTreatmentService,
  'embryo-freezing': embryoFreezingService,
  'third-party': thirdPartyService,
}
