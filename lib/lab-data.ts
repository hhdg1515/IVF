// Lab and Facility Data
// This file contains detailed information about laboratory facilities, storage technology,
// certifications, quality control, and sample management

export interface LabCertification {
  name: string
  nameZh: string
  description: string
  descriptionZh: string
  logoUrl?: string
  verificationUrl?: string
}

export interface LabEquipment {
  name: string
  nameZh: string
  manufacturer: string
  purpose: string
  purposeZh: string
  features: string[]
  featuresZh: string[]
}

export interface StorageFacility {
  type: 'egg' | 'sperm' | 'embryo'
  titleEn: string
  titleZh: string
  technology: string
  technologyZh: string
  temperature: string
  monitoringEn: string
  monitoringZh: string
  backupSystemsEn: string[]
  backupSystemsZh: string[]
  capacityEn: string
  capacityZh: string
}

export interface SampleManagement {
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  iconPath: string
}

export interface QualityControlProcess {
  step: number
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  frequency: string
  frequencyZh: string
}

// Laboratory Certifications and Accreditations
export const labCertifications: LabCertification[] = [
  {
    name: 'CAP Accredited',
    nameZh: 'CAP 认证',
    description: 'College of American Pathologists accreditation ensures our lab meets the highest standards for clinical laboratory excellence.',
    descriptionZh: '美国病理学家学会认证确保我们的实验室达到临床实验室卓越的最高标准。',
    verificationUrl: 'https://www.cap.org'
  },
  {
    name: 'CLIA Certified',
    nameZh: 'CLIA 认证',
    description: 'Clinical Laboratory Improvement Amendments certification from CMS for clinical diagnostic testing.',
    descriptionZh: 'CMS 临床实验室改进修正案认证，用于临床诊断测试。',
  },
  {
    name: 'ISO 9001:2015',
    nameZh: 'ISO 9001:2015',
    description: 'International standard for quality management systems, ensuring consistent quality in all laboratory processes.',
    descriptionZh: '质量管理体系国际标准，确保所有实验室流程的一致质量。',
  },
  {
    name: 'ASRM Member',
    nameZh: 'ASRM 成员',
    description: 'American Society for Reproductive Medicine member clinic, adhering to evidence-based practice guidelines.',
    descriptionZh: '美国生殖医学学会成员诊所，遵循循证实践指南。',
  },
  {
    name: 'SART Reporting',
    nameZh: 'SART 报告',
    description: 'Society for Assisted Reproductive Technology member with transparent outcome reporting to CDC.',
    descriptionZh: '辅助生殖技术协会成员，向 CDC 透明报告结果。',
  }
]

// Advanced Laboratory Equipment
export const labEquipment: LabEquipment[] = [
  {
    name: 'EmbryoScope® Time-Lapse Incubator',
    nameZh: 'EmbryoScope® 延时培养箱',
    manufacturer: 'Vitrolife',
    purpose: 'Continuous embryo monitoring without disturbance',
    purposeZh: '无干扰的连续胚胎监测',
    features: [
      'Captures images every 10 minutes',
      'Stable temperature and gas environment',
      'AI-assisted embryo selection',
      'Reduces handling and contamination risk'
    ],
    featuresZh: [
      '每10分钟拍摄图像',
      '稳定的温度和气体环境',
      'AI 辅助胚胎选择',
      '减少处理和污染风险'
    ]
  },
  {
    name: 'Kitazato Cryotop® Vitrification System',
    nameZh: 'Kitazato Cryotop® 玻璃化冷冻系统',
    manufacturer: 'Kitazato Corporation',
    purpose: 'Ultra-rapid freezing for eggs and embryos',
    purposeZh: '卵子和胚胎的超快速冷冻',
    features: [
      '95-97% survival rate',
      'Minimal ice crystal formation',
      'Industry gold standard',
      'Proven safety over 20+ years'
    ],
    featuresZh: [
      '95-97% 存活率',
      '最小化冰晶形成',
      '行业金标准',
      '20多年的安全验证'
    ]
  },
  {
    name: 'ZILOS-tk® Laser System',
    nameZh: 'ZILOS-tk® 激光系统',
    manufacturer: 'Hamilton Thorne',
    purpose: 'Laser-assisted hatching and biopsy',
    purposeZh: '激光辅助孵化和活检',
    features: [
      'Non-contact laser technology',
      'Precise zona pellucida opening',
      'Used for PGT-A biopsy',
      'Improves implantation rates'
    ],
    featuresZh: [
      '非接触式激光技术',
      '精确的透明带开口',
      '用于 PGT-A 活检',
      '提高着床率'
    ]
  },
  {
    name: 'ICSI Micromanipulation System',
    nameZh: 'ICSI 显微操作系统',
    manufacturer: 'Narishige',
    purpose: 'Intracytoplasmic sperm injection',
    purposeZh: '卵胞浆内单精子注射',
    features: [
      'High-precision micromanipulators',
      'Real-time imaging',
      'Temperature-controlled stage',
      'Used for male factor infertility'
    ],
    featuresZh: [
      '高精度显微操作器',
      '实时成像',
      '温度控制平台',
      '用于男性因素不育'
    ]
  },
  {
    name: 'Dual Witness Barcode System',
    nameZh: '双重见证条形码系统',
    manufacturer: 'RI Witness',
    purpose: 'Sample identification and verification',
    purposeZh: '样本识别和验证',
    features: [
      'Electronic witnessing',
      'Prevents sample mix-ups',
      'RFID tracking technology',
      'Comprehensive audit trail'
    ],
    featuresZh: [
      '电子见证',
      '防止样本混淆',
      'RFID 追踪技术',
      '全面审计跟踪'
    ]
  }
]

// Storage Facilities for Different Sample Types
export const storageFacilities: StorageFacility[] = [
  {
    type: 'egg',
    titleEn: 'Egg Cryopreservation Storage',
    titleZh: '卵子冷冻保存存储',
    technology: 'Vitrification (ultra-rapid freezing)',
    technologyZh: '玻璃化冷冻（超快速冷冻）',
    temperature: '-196°C (liquid nitrogen vapor phase)',
    monitoringEn: '24/7 automated temperature monitoring with dual probe sensors. Real-time alerts sent to on-call embryologist if temperature deviates ±2°C.',
    monitoringZh: '24/7 自动温度监控，配备双探头传感器。如果温度偏差±2°C，将实时向值班胚胎学家发送警报。',
    backupSystemsEn: [
      'Dual liquid nitrogen tanks (primary + backup)',
      'Automatic liquid nitrogen refill system',
      'Emergency backup generator (72-hour fuel capacity)',
      'Secondary off-site storage location available',
      'Annual disaster recovery drills'
    ],
    backupSystemsZh: [
      '双液氮罐（主要+备用）',
      '自动液氮补充系统',
      '紧急备用发电机（72小时燃料容量）',
      '可用的二次场外存储位置',
      '年度灾难恢复演习'
    ],
    capacityEn: '10,000+ cryopreserved egg storage capacity',
    capacityZh: '10,000+ 冷冻卵子存储容量'
  },
  {
    type: 'sperm',
    titleEn: 'Sperm Cryopreservation Storage',
    titleZh: '精子冷冻保存存储',
    technology: 'Slow-rate freezing with cryoprotectant',
    technologyZh: '带冷冻保护剂的慢速冷冻',
    temperature: '-196°C (liquid nitrogen)',
    monitoringEn: 'Continuous temperature monitoring with cloud-based logging. Remote monitoring capability for quality assurance team.',
    monitoringZh: '持续温度监控，基于云的日志记录。质量保证团队可远程监控。',
    backupSystemsEn: [
      'Separate tank system from egg/embryo storage',
      'Redundant nitrogen supply lines',
      'Weekly inventory verification',
      'Quarantine storage for FDA-mandated testing',
      'Backup power system'
    ],
    backupSystemsZh: [
      '与卵子/胚胎存储分离的罐系统',
      '冗余氮气供应线',
      '每周库存验证',
      'FDA 强制测试的隔离存储',
      '备用电源系统'
    ],
    capacityEn: '5,000+ vial storage capacity',
    capacityZh: '5,000+ 小瓶存储容量'
  },
  {
    type: 'embryo',
    titleEn: 'Embryo Cryopreservation Storage',
    titleZh: '胚胎冷冻保存存储',
    technology: 'Vitrification for blastocyst-stage embryos',
    technologyZh: '囊胚期胚胎的玻璃化冷冻',
    temperature: '-196°C (liquid nitrogen vapor phase)',
    monitoringEn: 'Triple-redundant temperature monitoring with independent alarm systems. Daily manual verification by certified embryologist.',
    monitoringZh: '三重冗余温度监控，配备独立警报系统。由认证胚胎学家每日手动验证。',
    backupSystemsEn: [
      'Dedicated embryo storage tanks (isolated from eggs)',
      'Color-coded identification system',
      'Dual-witness verification for all movements',
      'Biometric access control (fingerprint + keycard)',
      'Annual third-party quality audit'
    ],
    backupSystemsZh: [
      '专用胚胎存储罐（与卵子隔离）',
      '彩色编码识别系统',
      '所有移动的双重见证验证',
      '生物识别访问控制（指纹+钥匙卡）',
      '年度第三方质量审核'
    ],
    capacityEn: '15,000+ cryopreserved embryo storage capacity',
    capacityZh: '15,000+ 冷冻胚胎存储容量'
  }
]

// Sample Management and Patient Communication
export const sampleManagement: SampleManagement[] = [
  {
    titleEn: 'Unique Identification System',
    titleZh: '唯一识别系统',
    descriptionEn: 'Every sample receives a unique barcode and RFID tag linked to your medical record. Dual-witness verification is required for any sample movement, ensuring zero chance of mix-ups.',
    descriptionZh: '每个样本都会收到一个与您的医疗记录关联的唯一条形码和 RFID 标签。任何样本移动都需要双重见证验证，确保零混淆机会。',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    titleEn: 'Annual Storage Renewal',
    titleZh: '年度存储续订',
    descriptionEn: 'You\'ll receive renewal reminders 60 days and 30 days before your storage anniversary date via email and SMS. Renewal can be completed online through your patient portal with automatic payment options.',
    descriptionZh: '您将在存储周年日期前60天和30天通过电子邮件和短信收到续订提醒。可以通过您的患者门户在线完成续订，并提供自动支付选项。',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    titleEn: 'Quarterly Status Reports',
    titleZh: '季度状态报告',
    descriptionEn: 'Every 3 months, you receive a storage status report confirming: sample location, tank temperature logs, storage duration, and upcoming renewal dates. Available via secure patient portal.',
    descriptionZh: '每3个月，您会收到一份存储状态报告，确认：样本位置、罐温度记录、存储时间和即将到来的续订日期。通过安全的患者门户提供。',
    iconPath: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    titleEn: 'Sample Retrieval Process',
    titleZh: '样本取出流程',
    descriptionEn: 'When ready to use your samples: (1) Schedule thaw cycle consultation, (2) Sign consent forms, (3) We retrieve and thaw samples 2-3 hours before use, (4) Embryologist confirms survival rate, (5) Fertilization or transfer proceeds per your treatment plan.',
    descriptionZh: '准备使用样本时：(1) 安排解冻周期咨询，(2) 签署同意书，(3) 我们在使用前2-3小时取出并解冻样本，(4) 胚胎学家确认存活率，(5) 根据您的治疗计划进行受精或移植。',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    titleEn: 'Sample Transfer Policy',
    titleZh: '样本转移政策',
    descriptionEn: 'You may transfer your samples to another facility at any time. We require: (1) Written request 30 days in advance, (2) Destination facility\'s shipping instructions, (3) Transfer fee ($500 covers transport, documentation, and specialized shipping container). Samples shipped via certified medical courier.',
    descriptionZh: '您可以随时将样本转移到另一个设施。我们要求：(1) 提前30天书面申请，(2) 目的地设施的运输说明，(3) 转移费（$500 涵盖运输、文档和专用运输容器）。样本通过认证医疗快递运输。',
    iconPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  {
    titleEn: 'Disposition Options',
    titleZh: '处置选项',
    descriptionEn: 'If you no longer wish to store your samples, you have four options: (1) Compassionate discard, (2) Donate to research (IRB-approved studies), (3) Donate to another patient (requires screening), (4) Thaw and discard with documentation. All dispositions require written consent and witnessing.',
    descriptionZh: '如果您不再希望存储样本，您有四个选项：(1) 人道销毁，(2) 捐赠给研究（IRB 批准的研究），(3) 捐赠给其他患者（需要筛查），(4) 解冻并记录销毁。所有处置都需要书面同意和见证。',
    iconPath: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
  }
]

// Quality Control Processes
export const qualityControlProcesses: QualityControlProcess[] = [
  {
    step: 1,
    titleEn: 'Daily Equipment Checks',
    titleZh: '每日设备检查',
    descriptionEn: 'Every morning, our embryology team verifies: incubator temperatures and CO₂ levels, liquid nitrogen tank levels, microscope calibration, and all monitoring system functionality. Results logged digitally with staff signatures.',
    descriptionZh: '每天早上,我们的胚胎学团队验证:培养箱温度和 CO₂ 水平、液氮罐水平、显微镜校准和所有监控系统功能。结果以数字方式记录，并有员工签名。',
    frequency: 'Daily (7 days/week)',
    frequencyZh: '每日（每周7天）'
  },
  {
    step: 2,
    titleEn: 'Weekly Inventory Audits',
    titleZh: '每周库存审核',
    descriptionEn: 'Physical verification of all stored samples. Barcode scanning confirms each patient\'s samples are in correct location. Tank-by-tank count reconciled with database. Discrepancies trigger immediate investigation.',
    descriptionZh: '所有存储样本的物理验证。条形码扫描确认每位患者的样本都在正确位置。逐罐计数与数据库对账。差异会触发立即调查。',
    frequency: 'Weekly',
    frequencyZh: '每周'
  },
  {
    step: 3,
    titleEn: 'Monthly Culture Media Testing',
    titleZh: '每月培养基测试',
    descriptionEn: 'Mouse embryo assay (MEA) performed on all culture media batches. Only media that supports >80% blastocyst development is approved for clinical use. Endotoxin testing for sterility confirmation.',
    descriptionZh: '对所有培养基批次进行小鼠胚胎测定 (MEA)。只有支持>80% 囊胚发育的培养基才被批准用于临床使用。内毒素测试确认无菌性。',
    frequency: 'Monthly',
    frequencyZh: '每月'
  },
  {
    step: 4,
    titleEn: 'Quarterly External Proficiency Testing',
    titleZh: '季度外部能力测试',
    descriptionEn: 'Participation in CAP proficiency testing program. Unknown samples sent by external agency are analyzed and reported. Results benchmarked against national peer laboratories to ensure accuracy.',
    descriptionZh: '参与 CAP 能力测试计划。外部机构发送的未知样本被分析和报告。结果与全国同行实验室进行基准测试以确保准确性。',
    frequency: 'Quarterly',
    frequencyZh: '每季度'
  },
  {
    step: 5,
    titleEn: 'Annual Equipment Calibration',
    titleZh: '年度设备校准',
    descriptionEn: 'All incubators, microscopes, and measurement devices undergo third-party calibration. Temperature probes certified against NIST standards. Documentation maintained for regulatory compliance.',
    descriptionZh: '所有培养箱、显微镜和测量设备都要经过第三方校准。温度探头根据 NIST 标准认证。维护文档以符合监管要求。',
    frequency: 'Annually',
    frequencyZh: '每年'
  },
  {
    step: 6,
    titleEn: 'Continuous Staff Training',
    titleZh: '持续员工培训',
    descriptionEn: 'Embryologists complete 20+ hours annual continuing education. Quarterly competency assessments. New techniques validated before clinical implementation. Participation in ASRM and ESHRE conferences.',
    descriptionZh: '胚胎学家每年完成20小时以上的继续教育。季度能力评估。新技术在临床实施前进行验证。参加 ASRM 和 ESHRE 会议。',
    frequency: 'Ongoing',
    frequencyZh: '持续进行'
  }
]

// Lab Statistics and Performance Metrics
export interface LabStats {
  metricEn: string
  metricZh: string
  value: string
  context: string
  contextZh: string
}

export const labStats: LabStats[] = [
  {
    metricEn: 'Fertilization Rate',
    metricZh: '受精率',
    value: '75-80%',
    context: 'ICSI fertilization rate (industry standard: 70-75%)',
    contextZh: 'ICSI 受精率（行业标准：70-75%）'
  },
  {
    metricEn: 'Blastocyst Formation',
    metricZh: '囊胚形成率',
    value: '55-60%',
    context: 'Day 5/6 blastocyst rate from fertilized eggs',
    contextZh: '从受精卵到第5/6天囊胚的形成率'
  },
  {
    metricEn: 'Egg Survival Post-Thaw',
    metricZh: '卵子解冻后存活率',
    value: '95-97%',
    context: 'Vitrified egg survival rate (2020-2024 data)',
    contextZh: '玻璃化冷冻卵子存活率（2020-2024数据）'
  },
  {
    metricEn: 'Embryo Survival Post-Thaw',
    metricZh: '胚胎解冻后存活率',
    value: '98%+',
    context: 'Vitrified blastocyst survival rate',
    contextZh: '玻璃化冷冻囊胚存活率'
  },
  {
    metricEn: 'Lab Incidents (Mix-ups)',
    metricZh: '实验室事故（混淆）',
    value: 'Zero',
    context: 'Since opening in 2015 (verified by CAP inspections)',
    contextZh: '自2015年开业以来（经 CAP 检查验证）'
  }
]
