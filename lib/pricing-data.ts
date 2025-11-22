export interface PriceItem {
  serviceName: string
  serviceNameZh: string
  priceMin: number
  priceMax?: number
  unit?: string
  unitZh?: string
  description?: string
  descriptionZh?: string
}

export interface PriceCategory {
  categoryName: string
  categoryNameZh: string
  items: PriceItem[]
}

export const pricingCategories: PriceCategory[] = [
  {
    categoryName: 'Egg Freezing',
    categoryNameZh: '卵子冷冻',
    items: [
      {
        serviceName: 'Egg Freezing Cycle',
        serviceNameZh: '冻卵周期',
        priceMin: 7500,
        priceMax: 9500,
        description: 'Includes consultation, monitoring, retrieval, vitrification, and first year storage',
        descriptionZh: '包含咨询、监测、取卵、玻璃化冷冻和首年存储',
      },
      {
        serviceName: 'Medications',
        serviceNameZh: '药物',
        priceMin: 3000,
        priceMax: 5000,
        description: 'Ovarian stimulation medications (protocol-dependent)',
        descriptionZh: '促排卵药物（取决于方案）',
      },
      {
        serviceName: 'Annual Storage',
        serviceNameZh: '年度存储',
        priceMin: 650,
        unit: 'per year',
        unitZh: '每年',
        description: 'Secure cryogenic storage with 24/7 monitoring',
        descriptionZh: '带24/7监控的安全低温存储',
      },
      {
        serviceName: 'Second Cycle Discount',
        serviceNameZh: '第二周期折扣',
        priceMin: -2250,
        priceMax: -2850,
        description: '30% off second egg freezing cycle',
        descriptionZh: '第二个冻卵周期享30%折扣',
      },
    ]
  },

  {
    categoryName: 'IVF Treatment',
    categoryNameZh: 'IVF治疗',
    items: [
      {
        serviceName: 'IVF Single Cycle',
        serviceNameZh: 'IVF单周期',
        priceMin: 12000,
        priceMax: 15000,
        description: 'Includes stimulation, retrieval, fertilization, embryo culture, and one fresh/frozen transfer',
        descriptionZh: '包含促排、取卵、受精、胚胎培养和一次鲜胚/冻胚移植',
      },
      {
        serviceName: 'IVF Medications',
        serviceNameZh: 'IVF药物',
        priceMin: 3000,
        priceMax: 6000,
        description: 'Stimulation and support medications',
        descriptionZh: '促排和支持药物',
      },
      {
        serviceName: 'ICSI (if needed)',
        serviceNameZh: 'ICSI（如需要）',
        priceMin: 2000,
        description: 'Intracytoplasmic sperm injection for male factor',
        descriptionZh: '男性因素的卵胞浆内单精子注射',
      },
      {
        serviceName: 'Assisted Hatching',
        serviceNameZh: '辅助孵化',
        priceMin: 500,
        description: 'Laser-assisted embryo hatching',
        descriptionZh: '激光辅助胚胎孵化',
      },
      {
        serviceName: 'Frozen Embryo Transfer (FET)',
        serviceNameZh: '冻胚移植（FET）',
        priceMin: 3500,
        priceMax: 4500,
        description: 'Thaw, preparation, and transfer of frozen embryo',
        descriptionZh: '冻胚解冻、准备和移植',
      },
    ]
  },

  {
    categoryName: 'Genetic Testing',
    categoryNameZh: '遗传检测',
    items: [
      {
        serviceName: 'PGT-A (Embryo Screening)',
        serviceNameZh: 'PGT-A（胚胎筛查）',
        priceMin: 3500,
        priceMax: 5000,
        description: 'Preimplantation genetic testing for aneuploidy (up to 8 embryos)',
        descriptionZh: '胚胎植入前非整倍体遗传检测（最多8个胚胎）',
      },
      {
        serviceName: 'PGT-M (Single Gene)',
        serviceNameZh: 'PGT-M（单基因）',
        priceMin: 6000,
        priceMax: 8000,
        description: 'Testing for specific inherited conditions',
        descriptionZh: '特定遗传病检测',
      },
      {
        serviceName: 'Carrier Screening',
        serviceNameZh: '携带者筛查',
        priceMin: 250,
        priceMax: 400,
        description: 'Genetic carrier panel for common disorders',
        descriptionZh: '常见遗传病携带者筛查',
      },
    ]
  },

  {
    categoryName: 'Additional Services',
    categoryNameZh: '附加服务',
    items: [
      {
        serviceName: 'Semen Analysis',
        serviceNameZh: '精液分析',
        priceMin: 150,
        priceMax: 250,
        description: 'Comprehensive sperm evaluation',
        descriptionZh: '全面精子评估',
      },
      {
        serviceName: 'Sperm DNA Fragmentation',
        serviceNameZh: '精子DNA碎片检测',
        priceMin: 350,
        description: 'Advanced sperm quality assessment',
        descriptionZh: '先进精子质量评估',
      },
      {
        serviceName: 'Hysteroscopy',
        serviceNameZh: '宫腔镜检查',
        priceMin: 2500,
        priceMax: 3500,
        description: 'Diagnostic or operative procedure',
        descriptionZh: '诊断性或手术性操作',
      },
      {
        serviceName: 'Endometrial Biopsy',
        serviceNameZh: '子宫内膜活检',
        priceMin: 450,
        priceMax: 650,
        description: 'ERA or pathology testing',
        descriptionZh: 'ERA或病理检测',
      },
    ]
  },
]

export interface PaymentOption {
  name: string
  nameZh: string
  description: string
  descriptionZh: string
  iconPath: string
  details?: string[]
  detailsZh?: string[]
}

export const paymentOptions: PaymentOption[] = [
  {
    name: 'Insurance Coverage',
    nameZh: '保险覆盖',
    description: 'We accept most major insurance plans and will verify your benefits before treatment.',
    descriptionZh: '我们接受大多数主要保险计划，并将在治疗前验证您的福利。',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    details: [
      'Aetna, Cigna, UnitedHealthcare, BlueCross BlueShield',
      'Pre-authorization assistance',
      'Dedicated insurance coordinator',
      'Appeals support if claim denied',
    ],
    detailsZh: [
      'Aetna、Cigna、UnitedHealthcare、BlueCross BlueShield',
      '预授权协助',
      '专属保险协调员',
      '如果索赔被拒绝，提供上诉支持',
    ],
  },
  {
    name: 'Financing & Payment Plans',
    nameZh: '融资与分期付款',
    description: 'Flexible financing options with 0% APR for 12-24 months through our partners.',
    descriptionZh: '通过我们的合作伙伴提供灵活的融资选项，12-24个月0% APR。',
    iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    details: [
      'Prosper Healthcare Lending - 0% APR for 12 months',
      'FertilityIQ Lending - Up to $50,000',
      'In-house payment plans available',
      'HSA/FSA accepted',
    ],
    detailsZh: [
      'Prosper Healthcare Lending - 12个月0% APR',
      'FertilityIQ Lending - 最高$50,000',
      '提供内部分期付款计划',
      '接受HSA/FSA',
    ],
  },
  {
    name: 'Multi-Cycle Packages',
    nameZh: '多周期套餐',
    description: 'Save 15-20% with our bundled IVF packages that include multiple cycles.',
    descriptionZh: '通过我们包含多个周期的捆绑IVF套餐节省15-20%。',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    details: [
      '2-Cycle Package: 15% savings',
      '3-Cycle Package: 20% savings',
      'Shared risk programs available',
      'Money-back guarantee options',
    ],
    detailsZh: [
      '2周期套餐：节省15%',
      '3周期套餐：节省20%',
      '提供风险共担计划',
      '退款保证选项',
    ],
  },
  {
    name: 'Financial Assistance',
    nameZh: '财务援助',
    description: 'Special programs for military families, cancer patients, and LGBTQ+ community.',
    descriptionZh: '为军人家庭、癌症患者和LGBTQ+社区提供特殊计划。',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    details: [
      'Military families: 10% discount',
      'Cancer patients: Free egg/embryo freezing',
      'LGBTQ+ family building grants',
      'Scholarship programs available',
    ],
    detailsZh: [
      '军人家庭：10%折扣',
      '癌症患者：免费卵子/胚胎冷冻',
      'LGBTQ+家庭组建补助',
      '提供奖学金计划',
    ],
  },
]

export interface PricingFAQ {
  question: string
  questionZh: string
  answer: string
  answerZh: string
}

export const pricingFAQs: PricingFAQ[] = [
  {
    question: 'What if my insurance denies coverage?',
    questionZh: '如果我的保险拒绝覆盖怎么办？',
    answer: 'Our financial team will help you appeal the decision. We provide detailed medical documentation and work with your HR benefits team. Many denials are overturned with proper documentation. We also offer financing options if needed.',
    answerZh: '我们的财务团队将帮助您对决定提出上诉。我们提供详细的医疗文件，并与您的人力资源福利团队合作。许多拒绝通过适当的文件可以被推翻。如有需要，我们还提供融资选项。',
  },
  {
    question: 'Can I use HSA or FSA funds?',
    questionZh: '我可以使用HSA或FSA资金吗？',
    answer: 'Yes! Fertility treatments including IVF, egg freezing, and related medications are HSA/FSA eligible expenses. You can use these pre-tax funds to pay for all qualified services.',
    answerZh: '可以！包括IVF、冻卵和相关药物在内的生育治疗都是HSA/FSA合格费用。您可以使用这些税前资金支付所有合格服务。',
  },
  {
    question: 'Are medications included in the price?',
    questionZh: '药物包含在价格中吗？',
    answer: 'Medications are typically not included in the base package price because the type and amount vary significantly by individual. We provide a medication estimate during your consultation. Medications typically cost $3,000-$6,000 depending on your protocol.',
    answerZh: '药物通常不包含在基本套餐价格中，因为类型和数量因人而异。我们会在咨询期间提供药物估算。药物费用通常为$3,000-$6,000，取决于您的方案。',
  },
  {
    question: 'What happens if a cycle is cancelled?',
    questionZh: '如果周期被取消会怎样？',
    answer: 'If a cycle is cancelled before egg retrieval (due to poor response or medical reasons), you are only charged for services received (monitoring visits, medications used). If we recommend cancellation for medical reasons, we do not charge the retrieval or lab fees.',
    answerZh: '如果周期在取卵前被取消（由于反应不佳或医疗原因），您只需为接受的服务付费（监测访视、使用的药物）。如果我们出于医疗原因建议取消，我们不收取取卵或实验室费用。',
  },
  {
    question: 'Do you offer payment plans?',
    questionZh: '你们提供分期付款计划吗？',
    answer: 'Yes, we offer several options: 0% APR financing for 12 months through Prosper Healthcare, extended payment plans through FertilityIQ Lending, and in-house payment plans. Our financial coordinator will help you find the best option for your situation.',
    answerZh: '是的，我们提供几种选项：通过Prosper Healthcare提供12个月0% APR融资，通过FertilityIQ Lending提供延长付款计划，以及内部分期付款计划。我们的财务协调员将帮助您找到最适合您情况的选项。',
  },
]
