export interface InsurancePlan {
  name: string
  nameZh: string
  coverageEn: string[]
  coverageZh: string[]
  icon: string
}

export interface FinancingOption {
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  termsEn: string
  termsZh: string
  iconPath: string
}

export interface DiscountProgram {
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  savingsEn: string
  savingsZh: string
  eligibilityEn: string[]
  eligibilityZh: string[]
}

export interface VerificationStep {
  step: number
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
}

export interface FinancialPolicy {
  titleEn: string
  titleZh: string
  contentEn: string[]
  contentZh: string[]
  iconPath: string
}

// Insurance Plans Accepted
export const insurancePlans: InsurancePlan[] = [
  {
    name: 'Blue Cross Blue Shield',
    nameZh: 'Blue Cross Blue Shield',
    coverageEn: [
      'Diagnostic testing (AMH, FSH, ultrasound)',
      'IUI procedures (may require prior authorization)',
      'Fertility medications (with pharmacy rider)',
      'IVF coverage varies by plan (some states mandate)',
    ],
    coverageZh: [
      '诊断检测（AMH、FSH、超声）',
      'IUI手术（可能需要事先授权）',
      '生育药物（需药房附加条款）',
      'IVF覆盖因计划而异（某些州强制要求）',
    ],
    icon: 'shield-check',
  },
  {
    name: 'UnitedHealthcare',
    nameZh: 'UnitedHealthcare',
    coverageEn: [
      'Diagnostic fertility workup',
      'IUI procedures',
      'IVF coverage for certain plans',
      'Egg freezing for medical reasons',
    ],
    coverageZh: [
      '生育诊断检查',
      'IUI手术',
      '某些计划的IVF覆盖',
      '医疗原因的卵子冷冻',
    ],
    icon: 'shield-check',
  },
  {
    name: 'Aetna',
    nameZh: 'Aetna',
    coverageEn: [
      'Comprehensive fertility testing',
      'IUI and IVF (plan-dependent)',
      'Medications through CVS Specialty Pharmacy',
      'Preimplantation genetic testing (PGT)',
    ],
    coverageZh: [
      '综合生育检测',
      'IUI和IVF（取决于计划）',
      '通过CVS专科药房的药物',
      '胚胎植入前遗传检测（PGT）',
    ],
    icon: 'shield-check',
  },
  {
    name: 'Cigna',
    nameZh: 'Cigna',
    coverageEn: [
      'Diagnostic services',
      'Fertility preservation for medical reasons',
      'IVF coverage (varies by employer)',
      'Donor services (limited coverage)',
    ],
    coverageZh: [
      '诊断服务',
      '医疗原因的生育力保存',
      'IVF覆盖（因雇主而异）',
      '捐赠服务（有限覆盖）',
    ],
    icon: 'shield-check',
  },
  {
    name: 'Kaiser Permanente',
    nameZh: 'Kaiser Permanente',
    coverageEn: [
      'In-network fertility services',
      'Referral required from primary care',
      'IVF coverage in certain regions',
      'Coordinated care with Kaiser providers',
    ],
    coverageZh: [
      '网络内生育服务',
      '需要初级护理转诊',
      '某些地区的IVF覆盖',
      '与Kaiser提供者的协调护理',
    ],
    icon: 'shield-check',
  },
  {
    name: 'Progyny',
    nameZh: 'Progyny',
    coverageEn: [
      'Smart Cycle® coverage model',
      'Comprehensive IVF benefits',
      'Medication coverage included',
      'Dedicated patient care advocates',
    ],
    coverageZh: [
      'Smart Cycle®覆盖模式',
      '综合IVF福利',
      '包含药物覆盖',
      '专门的患者护理倡导者',
    ],
    icon: 'shield-check',
  },
]

// Financing Options
export const financingOptions: FinancingOption[] = [
  {
    titleEn: '0% Interest Payment Plans',
    titleZh: '0%利息分期付款',
    descriptionEn: 'Break down your treatment costs into manageable monthly payments with no interest charges. Pay over 6, 12, or 24 months.',
    descriptionZh: '将您的治疗费用分解为可管理的每月付款，无利息费用。可分6、12或24个月支付。',
    termsEn: 'No credit check required • Approval in 24 hours • Automatic payments',
    termsZh: '无需信用检查 • 24小时内批准 • 自动付款',
    iconPath: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    titleEn: 'Capexmd Healthcare Lending',
    titleZh: 'Capexmd医疗贷款',
    descriptionEn: 'Low-interest loans specifically designed for fertility treatment. Borrow $5,000 to $100,000 with terms up to 7 years.',
    descriptionZh: '专为生育治疗设计的低息贷款。可借$5,000至$100,000，期限最长7年。',
    termsEn: 'APR as low as 5.99% • Same-day approval • Flexible terms',
    termsZh: '年利率低至5.99% • 当天批准 • 灵活条款',
    iconPath: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    titleEn: 'FSA/HSA Accounts',
    titleZh: 'FSA/HSA账户',
    descriptionEn: 'Use pre-tax dollars from your Flexible Spending Account or Health Savings Account to pay for fertility treatments, medications, and related procedures.',
    descriptionZh: '使用灵活支出账户或健康储蓄账户的税前美元支付生育治疗、药物和相关程序。',
    termsEn: 'Eligible services: IVF, IUI, medications, testing, storage fees',
    termsZh: '符合条件的服务：IVF、IUI、药物、检测、存储费',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    titleEn: 'Fertility Bridge Loan',
    titleZh: '生育过渡贷款',
    descriptionEn: 'Short-term loan to cover costs while waiting for insurance reimbursement or employer benefits. Repay within 6-12 months.',
    descriptionZh: '在等待保险报销或雇主福利期间用于支付费用的短期贷款。6-12个月内偿还。',
    termsEn: 'Up to $30,000 • Quick approval • Ideal for reimbursement situations',
    termsZh: '高达$30,000 • 快速批准 • 适合报销情况',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

// Discount Programs
export const discountPrograms: DiscountProgram[] = [
  {
    titleEn: 'Multi-Cycle IVF Discount',
    titleZh: '多周期IVF折扣',
    descriptionEn: 'Save up to 20% when you prepay for 2 or 3 IVF cycles. Your unused cycles can be refunded or transferred if you achieve pregnancy early.',
    descriptionZh: '预付2或3个IVF周期可节省高达20%。如果您提前怀孕，未使用的周期可以退款或转让。',
    savingsEn: 'Save $3,000-$8,000',
    savingsZh: '节省$3,000-$8,000',
    eligibilityEn: [
      'Good ovarian reserve (AMH >1.5)',
      'Age <40',
      'First or second IVF cycle',
    ],
    eligibilityZh: [
      '良好的卵巢储备（AMH >1.5）',
      '年龄<40岁',
      '第一或第二个IVF周期',
    ],
  },
  {
    titleEn: 'Shared Risk Refund Program',
    titleZh: '共享风险退款计划',
    descriptionEn: '100% refund guarantee if you don\'t achieve a live birth after up to 6 IVF cycles. Pay one upfront fee ($25,000-$30,000) and receive comprehensive coverage.',
    descriptionZh: '如果在最多6个IVF周期后未能活产，100%退款保证。支付一次性预付费用（$25,000-$30,000）并获得综合覆盖。',
    savingsEn: 'Risk-free investment',
    savingsZh: '无风险投资',
    eligibilityEn: [
      'Age <38 (some programs <40)',
      'AMH >1.2 ng/mL',
      'No previous failed IVF cycles',
      'BMI <40',
    ],
    eligibilityZh: [
      '年龄<38岁（某些计划<40岁）',
      'AMH >1.2 ng/mL',
      '无先前失败的IVF周期',
      'BMI <40',
    ],
  },
  {
    titleEn: 'Military & First Responder Discount',
    titleZh: '军人和急救人员折扣',
    descriptionEn: 'We honor those who serve with a 10% discount on all fertility services for active military, veterans, police, firefighters, and EMTs.',
    descriptionZh: '我们向现役军人、退伍军人、警察、消防员和急救人员提供所有生育服务10%的折扣，以表敬意。',
    savingsEn: '10% off all services',
    savingsZh: '所有服务10%折扣',
    eligibilityEn: [
      'Active duty or veteran status',
      'Police, fire, or EMS credentials',
      'Valid ID required',
    ],
    eligibilityZh: [
      '现役或退伍军人身份',
      '警察、消防或急救证件',
      '需要有效身份证明',
    ],
  },
  {
    titleEn: 'Medication Discount Programs',
    titleZh: '药物折扣计划',
    descriptionEn: 'Access manufacturer discounts, compassionate care programs, and bulk purchasing savings. We help you find the lowest medication prices.',
    descriptionZh: '访问制造商折扣、同情护理计划和批量购买节省。我们帮助您找到最低的药物价格。',
    savingsEn: 'Save 15-40% on medications',
    savingsZh: '药物节省15-40%',
    eligibilityEn: [
      'Income-based assistance available',
      'EMD Serono Heart Program',
      'Ferring Caring Hearts Program',
    ],
    eligibilityZh: [
      '基于收入的援助',
      'EMD Serono Heart计划',
      'Ferring Caring Hearts计划',
    ],
  },
]

// Insurance Verification Process
export const verificationSteps: VerificationStep[] = [
  {
    step: 1,
    titleEn: 'Submit Your Insurance Information',
    titleZh: '提交您的保险信息',
    descriptionEn: 'Provide your insurance card (front and back) and complete our insurance verification form. You can upload documents through our patient portal or email them securely.',
    descriptionZh: '提供您的保险卡（正面和背面）并完成我们的保险验证表格。您可以通过我们的患者门户上传文档或安全地通过电子邮件发送。',
  },
  {
    step: 2,
    titleEn: 'We Contact Your Insurance',
    titleZh: '我们联系您的保险公司',
    descriptionEn: 'Our dedicated insurance specialist contacts your carrier to verify benefits, understand coverage limits, and identify any prior authorization requirements. This typically takes 3-5 business days.',
    descriptionZh: '我们专门的保险专员联系您的承保公司以验证福利、了解覆盖限制并识别任何事先授权要求。这通常需要3-5个工作日。',
  },
  {
    step: 3,
    titleEn: 'Receive Your Benefits Summary',
    titleZh: '收到您的福利摘要',
    descriptionEn: 'We provide a detailed breakdown of what\'s covered, your copays, deductibles, out-of-pocket maximum, and any lifetime maximums. You\'ll know exactly what to expect before starting treatment.',
    descriptionZh: '我们提供详细的覆盖内容、您的共付额、免赔额、自付最高额和任何终身最高额的明细。您在开始治疗前会确切知道期望什么。',
  },
  {
    step: 4,
    titleEn: 'Obtain Prior Authorization (If Needed)',
    titleZh: '获得事先授权（如需要）',
    descriptionEn: 'If your plan requires prior authorization for treatments like IVF or IUI, we handle the entire submission process, including medical necessity documentation and appeals if needed.',
    descriptionZh: '如果您的计划需要IVF或IUI等治疗的事先授权，我们处理整个提交流程，包括医疗必要性文件和必要时的申诉。',
  },
  {
    step: 5,
    titleEn: 'Create Your Financial Plan',
    titleZh: '制定您的财务计划',
    descriptionEn: 'Meet with our financial coordinator to discuss payment options, financing, and discount programs. We\'ll create a customized payment plan that fits your budget.',
    descriptionZh: '与我们的财务协调员会面讨论付款选项、融资和折扣计划。我们将创建适合您预算的定制付款计划。',
  },
]

// State Mandate Information
export interface StateMandateInfo {
  stateEn: string
  stateZh: string
  mandateEn: string
  mandateZh: string
  coverageDetailsEn: string[]
  coverageDetailsZh: string[]
}

export const stateMandates: StateMandateInfo[] = [
  {
    stateEn: 'California',
    stateZh: '加利福尼亚',
    mandateEn: 'Coverage Mandate',
    mandateZh: '覆盖强制要求',
    coverageDetailsEn: [
      'Employers with 50+ employees must cover IVF',
      'Unlimited IVF cycles',
      'No age restrictions',
      'Includes egg/embryo freezing for medical reasons',
    ],
    coverageDetailsZh: [
      '拥有50+员工的雇主必须覆盖IVF',
      '无限IVF周期',
      '无年龄限制',
      '包括医疗原因的卵子/胚胎冷冻',
    ],
  },
  {
    stateEn: 'New York',
    stateZh: '纽约',
    mandateEn: 'Large Group Coverage',
    mandateZh: '大型团体覆盖',
    coverageDetailsEn: [
      'Groups with 100+ employees',
      '3 IVF cycles covered',
      'Egg freezing for medical reasons',
      'Fertility preservation before cancer treatment',
    ],
    coverageDetailsZh: [
      '100+员工的团体',
      '覆盖3个IVF周期',
      '医疗原因的卵子冷冻',
      '癌症治疗前的生育力保存',
    ],
  },
  {
    stateEn: 'Illinois',
    stateZh: '伊利诺伊',
    mandateEn: 'Comprehensive Mandate',
    mandateZh: '综合强制要求',
    coverageDetailsEn: [
      'All group policies must cover',
      '4 completed egg retrievals (IVF)',
      'Unlimited embryo transfers',
      'Includes ICSI, PGT-A, and cryopreservation',
    ],
    coverageDetailsZh: [
      '所有团体保单必须覆盖',
      '4次完整取卵（IVF）',
      '无限胚胎移植',
      '包括ICSI、PGT-A和冷冻保存',
    ],
  },
  {
    stateEn: 'Massachusetts',
    stateZh: '马萨诸塞',
    mandateEn: 'Oldest Mandate (1987)',
    mandateZh: '最早的强制要求（1987）',
    coverageDetailsEn: [
      'Diagnosis and treatment covered',
      'Applies to most group plans',
      'Lifetime maximum $15,000 (varies by plan)',
      'Some plans exceed minimum requirements',
    ],
    coverageDetailsZh: [
      '诊断和治疗覆盖',
      '适用于大多数团体计划',
      '终身最高$15,000（因计划而异）',
      '某些计划超过最低要求',
    ],
  },
]

// Financial Policies
export const financialPolicies: FinancialPolicy[] = [
  {
    titleEn: 'Cancellation & Refund Policy',
    titleZh: '取消和退款政策',
    contentEn: [
      'Before starting medication: 100% refund minus $500 administrative fee',
      'After medication start, before egg retrieval: 50% refund of remaining balance',
      'After egg retrieval or embryo transfer: No refund available',
      'Multi-cycle packages: 80% refund of unused cycles if cancelled within 12 months',
      'Shared Risk Program: 100% refund if no live birth after completing up to 6 cycles',
    ],
    contentZh: [
      '开始用药前：100%退款减去$500管理费',
      '开始用药后、取卵前：剩余余额50%退款',
      '取卵或胚胎移植后：不可退款',
      '多周期套餐：如在12个月内取消，未使用周期80%退款',
      '共享风险计划：完成最多6个周期后如未活产，100%退款',
    ],
    iconPath: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
  },
  {
    titleEn: 'Payment Terms & Deadlines',
    titleZh: '付款条款和截止日期',
    contentEn: [
      'IVF Cycle: 50% payment due when starting medications, remaining 50% due 3 days before egg retrieval',
      'FET (Frozen Embryo Transfer): Full payment due 7 days before scheduled transfer',
      'Storage Renewal: Annual fee due 30 days before anniversary date with 60-day grace period',
      'Late Payment: $50 fee applied after 15 days; treatment holds applied after 30 days overdue',
      'Payment Methods: Credit card, debit card, wire transfer, financing plans, FSA/HSA cards',
    ],
    contentZh: [
      'IVF周期：开始用药时支付50%，取卵前3天支付剩余50%',
      'FET（冷冻胚胎移植）：预定移植前7天支付全款',
      '存储续费：周年日前30天支付年费，有60天宽限期',
      '逾期付款：15天后收取$50费用；逾期30天后暂停治疗',
      '付款方式：信用卡、借记卡、电汇、融资计划、FSA/HSA卡',
    ],
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    titleEn: 'Multi-Cycle Package Terms',
    titleZh: '多周期套餐条款',
    contentEn: [
      'Validity Period: All cycles must be completed within 18 months of purchase',
      'Early Success Refund: If pregnancy achieved before using all cycles, 80% of unused cycles refunded',
      'Transferability: Packages are non-transferable to another person',
      'FET Cycles: Frozen embryo transfers are charged separately and not included in multi-cycle packages',
      'Medical Changes: If medical condition changes requiring different treatment, unused cycles may be applied to alternative treatments',
    ],
    contentZh: [
      '有效期：所有周期必须在购买后18个月内完成',
      '提前成功退款：如在使用所有周期前怀孕，未使用周期退还80%',
      '可转让性：套餐不可转让给他人',
      'FET周期：冷冻胚胎移植单独收费，不包含在多周期套餐中',
      '医疗变化：如医疗状况变化需要不同治疗，未使用周期可应用于替代治疗',
    ],
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    titleEn: 'Insurance Reimbursement Assistance',
    titleZh: '保险报销协助',
    contentEn: [
      'Superbills: We provide detailed superbills for all services to submit to out-of-network insurance carriers',
      'Claims Assistance: Our billing team helps with claim submission and follows up on denials or delays',
      'HSA/FSA Eligible: All fertility treatments, testing, medications, and storage fees are HSA/FSA eligible',
      'Pre-Authorization: We handle all prior authorization requests and appeals on your behalf',
      'Payment Timeline: Payment is due at time of service; reimbursement from insurance is processed directly to you',
    ],
    contentZh: [
      '详细账单：我们为所有服务提供详细账单，供您提交给网络外保险公司',
      '理赔协助：我们的账单团队帮助提交理赔并跟进拒绝或延迟情况',
      'HSA/FSA资格：所有生育治疗、检测、药物和存储费用均符合HSA/FSA资格',
      '事先授权：我们代表您处理所有事先授权请求和申诉',
      '付款时间表：服务时需付款；保险报销直接处理给您',
    ],
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]
