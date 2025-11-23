export interface FertilityTest {
  id: string
  nameEn: string
  nameZh: string
  categoryEn: string
  categoryZh: string
  descriptionEn: string
  descriptionZh: string
  whatItMeasuresEn: string
  whatItMeasuresZh: string
  whenPerformedEn: string
  whenPerformedZh: string
  normalRangeEn: string
  normalRangeZh: string
  costRange: string
  insuranceCovered: boolean
  interpretationEn: {
    title: string
    items: { range: string; meaning: string }[]
  }
  interpretationZh: {
    title: string
    items: { range: string; meaning: string }[]
  }
  iconPath: string
}

export const fertilityTests: FertilityTest[] = [
  {
    id: 'amh',
    nameEn: 'AMH (Anti-Müllerian Hormone)',
    nameZh: 'AMH（抗苗勒氏管激素）',
    categoryEn: 'Ovarian Reserve Testing',
    categoryZh: '卵巢储备检测',
    descriptionEn: 'AMH is produced by developing follicles in the ovaries and provides the most accurate estimate of your remaining egg supply (ovarian reserve). This single blood test can be done any day of your cycle.',
    descriptionZh: 'AMH由卵巢中发育的卵泡产生，提供您剩余卵子供应（卵巢储备）的最准确估计。这项单一的血液检查可以在您周期的任何一天进行。',
    whatItMeasuresEn: 'The quantity (not quality) of eggs remaining in your ovaries. Higher AMH = more eggs available for fertility treatment.',
    whatItMeasuresZh: '卵巢中剩余卵子的数量（非质量）。更高的AMH =更多可用于生育治疗的卵子。',
    whenPerformedEn: 'Any day of your menstrual cycle (does not fluctuate)',
    whenPerformedZh: '月经周期的任何一天（不会波动）',
    normalRangeEn: '1.5-4.0 ng/mL (optimal for IVF)',
    normalRangeZh: '1.5-4.0 ng/mL（IVF的最佳值）',
    costRange: '$70-$150',
    insuranceCovered: true,
    interpretationEn: {
      title: 'AMH Interpretation',
      items: [
        { range: '<0.5 ng/mL', meaning: 'Very low reserve - IVF difficult, may need donor eggs' },
        { range: '0.5-1.0 ng/mL', meaning: 'Low reserve - expect 3-5 eggs per IVF cycle' },
        { range: '1.0-2.0 ng/mL', meaning: 'Normal-low reserve - expect 5-10 eggs per cycle' },
        { range: '2.0-4.0 ng/mL', meaning: 'Normal reserve - expect 10-15 eggs per cycle' },
        { range: '4.0-7.0 ng/mL', meaning: 'High reserve - good prognosis, monitor for OHSS' },
        { range: '>7.0 ng/mL', meaning: 'Very high - possible PCOS, high OHSS risk' },
      ],
    },
    interpretationZh: {
      title: 'AMH解读',
      items: [
        { range: '<0.5 ng/mL', meaning: '极低储备 - IVF困难，可能需要捐卵' },
        { range: '0.5-1.0 ng/mL', meaning: '低储备 - 每个IVF周期预期3-5颗卵子' },
        { range: '1.0-2.0 ng/mL', meaning: '正常偏低储备 - 每周期预期5-10颗卵子' },
        { range: '2.0-4.0 ng/mL', meaning: '正常储备 - 每周期预期10-15颗卵子' },
        { range: '4.0-7.0 ng/mL', meaning: '高储备 - 良好预后，监测OHSS' },
        { range: '>7.0 ng/mL', meaning: '极高 - 可能PCOS，高OHSS风险' },
      ],
    },
    iconPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
  {
    id: 'fsh-estradiol',
    nameEn: 'FSH & Estradiol (Day 3 Testing)',
    nameZh: 'FSH与雌二醇（第3天检测）',
    categoryEn: 'Ovarian Reserve Testing',
    categoryZh: '卵巢储备检测',
    descriptionEn: 'FSH (follicle-stimulating hormone) and estradiol are measured on day 2-4 of your menstrual cycle. High FSH indicates the ovaries are working harder to recruit follicles, suggesting diminished reserve.',
    descriptionZh: 'FSH（促卵泡激素）和雌二醇在月经周期的第2-4天测量。高FSH表明卵巢更努力地募集卵泡，暗示储备减少。',
    whatItMeasuresEn: 'How hard your pituitary gland is working to stimulate the ovaries. High FSH = ovaries need more stimulation = fewer eggs.',
    whatItMeasuresZh: '您的垂体有多努力地刺激卵巢。高FSH =卵巢需要更多刺激=更少的卵子。',
    whenPerformedEn: 'Day 2-4 of menstrual cycle (first day of full flow = Day 1)',
    whenPerformedZh: '月经周期第2-4天（完全流量的第一天=第1天）',
    normalRangeEn: 'FSH <10 mIU/mL, Estradiol <80 pg/mL',
    normalRangeZh: 'FSH <10 mIU/mL，雌二醇<80 pg/mL',
    costRange: '$50-$100',
    insuranceCovered: true,
    interpretationEn: {
      title: 'FSH Interpretation',
      items: [
        { range: 'FSH <6 mIU/mL', meaning: 'Excellent ovarian reserve' },
        { range: 'FSH 6-9 mIU/mL', meaning: 'Normal ovarian reserve' },
        { range: 'FSH 10-15 mIU/mL', meaning: 'Diminished reserve - IVF still possible' },
        { range: 'FSH 15-25 mIU/mL', meaning: 'Significantly diminished - lower success rates' },
        { range: 'FSH >25 mIU/mL', meaning: 'Severely diminished - donor eggs recommended' },
        { range: 'Estradiol >80 pg/mL', meaning: 'May artificially suppress FSH - repeat test' },
      ],
    },
    interpretationZh: {
      title: 'FSH解读',
      items: [
        { range: 'FSH <6 mIU/mL', meaning: '优秀的卵巢储备' },
        { range: 'FSH 6-9 mIU/mL', meaning: '正常卵巢储备' },
        { range: 'FSH 10-15 mIU/mL', meaning: '储备减少 - IVF仍可行' },
        { range: 'FSH 15-25 mIU/mL', meaning: '显著减少 - 成功率较低' },
        { range: 'FSH >25 mIU/mL', meaning: '严重减少 - 建议捐卵' },
        { range: '雌二醇>80 pg/mL', meaning: '可能人为抑制FSH - 重复检测' },
      ],
    },
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    id: 'afc',
    nameEn: 'AFC (Antral Follicle Count)',
    nameZh: 'AFC（窦卵泡计数）',
    categoryEn: 'Ovarian Reserve Testing',
    categoryZh: '卵巢储备检测',
    descriptionEn: 'Transvaginal ultrasound performed on day 2-5 of your cycle to count the number of small (2-10mm) follicles visible in both ovaries. More follicles = better response to IVF stimulation.',
    descriptionZh: '在周期第2-5天进行的经阴道超声检查，计数两个卵巢中可见的小（2-10mm）卵泡数量。更多卵泡=对IVF刺激的更好反应。',
    whatItMeasuresEn: 'Visual count of resting follicles that can be recruited for IVF. Each follicle potentially contains one egg.',
    whatItMeasuresZh: '可以为IVF募集的静息卵泡的视觉计数。每个卵泡可能包含一个卵子。',
    whenPerformedEn: 'Day 2-5 of menstrual cycle via transvaginal ultrasound',
    whenPerformedZh: '通过经阴道超声在月经周期第2-5天',
    normalRangeEn: '10-20 total follicles (both ovaries)',
    normalRangeZh: '10-20个总卵泡（两个卵巢）',
    costRange: '$150-$300',
    insuranceCovered: true,
    interpretationEn: {
      title: 'AFC Interpretation',
      items: [
        { range: '<5 follicles', meaning: 'Very low - poor IVF response expected' },
        { range: '5-7 follicles', meaning: 'Low - may need high-dose stimulation' },
        { range: '8-12 follicles', meaning: 'Normal-low - moderate IVF response' },
        { range: '13-20 follicles', meaning: 'Normal - good IVF candidate' },
        { range: '21-30 follicles', meaning: 'High - excellent response, monitor OHSS' },
        { range: '>30 follicles', meaning: 'Very high - likely PCOS, high OHSS risk' },
      ],
    },
    interpretationZh: {
      title: 'AFC解读',
      items: [
        { range: '<5个卵泡', meaning: '极低 - 预期IVF反应差' },
        { range: '5-7个卵泡', meaning: '低 - 可能需要高剂量刺激' },
        { range: '8-12个卵泡', meaning: '正常偏低 - 中等IVF反应' },
        { range: '13-20个卵泡', meaning: '正常 - 良好的IVF候选者' },
        { range: '21-30个卵泡', meaning: '高 - 优秀反应，监测OHSS' },
        { range: '>30个卵泡', meaning: '极高 - 可能PCOS，高OHSS风险' },
      ],
    },
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    id: 'semen-analysis',
    nameEn: 'Semen Analysis',
    nameZh: '精液分析',
    categoryEn: 'Male Fertility Testing',
    categoryZh: '男性生育检测',
    descriptionEn: 'Comprehensive evaluation of sperm count, motility (movement), morphology (shape), and volume. Critical for determining whether IUI is sufficient or IVF with ICSI is needed.',
    descriptionZh: '对精子计数、活力（运动）、形态（形状）和体积的综合评估。对于确定IUI是否足够或需要IVF与ICSI至关重要。',
    whatItMeasuresEn: 'Sperm count, percentage of moving sperm, percentage of normally-shaped sperm, semen volume, and pH.',
    whatItMeasuresZh: '精子计数、运动精子百分比、正常形状精子百分比、精液量和pH值。',
    whenPerformedEn: 'After 2-5 days of abstinence (no ejaculation)',
    whenPerformedZh: '在禁欲2-5天后（无射精）',
    normalRangeEn: 'Count >15M/mL, Motility >40%, Morphology >4%',
    normalRangeZh: '计数>15M/mL，活力>40%，形态>4%',
    costRange: '$100-$200',
    insuranceCovered: true,
    interpretationEn: {
      title: 'Semen Analysis Interpretation',
      items: [
        { range: 'Count >15M/mL, Motility >40%', meaning: 'Normal - IUI or IVF suitable' },
        { range: 'Count 5-15M/mL', meaning: 'Mild oligospermia - IUI possible, IVF recommended' },
        { range: 'Count 1-5M/mL', meaning: 'Moderate oligospermia - IVF with ICSI required' },
        { range: 'Count <1M/mL', meaning: 'Severe oligospermia - ICSI mandatory' },
        { range: 'Motility <32%', meaning: 'Asthenospermia - ICSI recommended' },
        { range: 'Morphology <4%', meaning: 'Teratospermia - ICSI recommended' },
      ],
    },
    interpretationZh: {
      title: '精液分析解读',
      items: [
        { range: '计数>15M/mL，活力>40%', meaning: '正常 - IUI或IVF适用' },
        { range: '计数5-15M/mL', meaning: '轻度少精 - IUI可行，推荐IVF' },
        { range: '计数1-5M/mL', meaning: '中度少精 - 需要IVF与ICSI' },
        { range: '计数<1M/mL', meaning: '严重少精 - ICSI强制' },
        { range: '活力<32%', meaning: '弱精 - 推荐ICSI' },
        { range: '形态<4%', meaning: '畸精 - 推荐ICSI' },
      ],
    },
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 'hsg',
    nameEn: 'HSG (Hysterosalpingogram)',
    nameZh: 'HSG（子宫输卵管造影）',
    categoryEn: 'Structural Testing',
    categoryZh: '结构检测',
    descriptionEn: 'X-ray procedure where contrast dye is injected through the cervix to visualize the uterine cavity and fallopian tubes. Identifies blockages, polyps, fibroids, and tubal patency.',
    descriptionZh: 'X射线程序，通过宫颈注射造影剂以可视化子宫腔和输卵管。识别阻塞、息肉、肌瘤和输卵管通畅性。',
    whatItMeasuresEn: 'Uterine shape, cavity abnormalities, and whether both fallopian tubes are open (patent).',
    whatItMeasuresZh: '子宫形状、腔异常以及两条输卵管是否通畅。',
    whenPerformedEn: 'Day 6-12 of cycle (after period ends, before ovulation)',
    whenPerformedZh: '周期第6-12天（经期结束后，排卵前）',
    normalRangeEn: 'Both tubes patent, normal uterine cavity',
    normalRangeZh: '两条输卵管通畅，正常子宫腔',
    costRange: '$500-$1,000',
    insuranceCovered: true,
    interpretationEn: {
      title: 'HSG Results',
      items: [
        { range: 'Both tubes patent', meaning: 'Normal - IUI or natural conception possible' },
        { range: 'One tube blocked', meaning: 'Reduced fertility - IUI or IVF' },
        { range: 'Both tubes blocked', meaning: 'IVF required (bypasses tubes)' },
        { range: 'Hydrosalpinx (fluid in tube)', meaning: 'Surgery recommended before IVF' },
        { range: 'Uterine septum', meaning: 'May require surgical correction' },
        { range: 'Polyps or fibroids', meaning: 'Hysteroscopy for removal may improve outcomes' },
      ],
    },
    interpretationZh: {
      title: 'HSG结果',
      items: [
        { range: '两条输卵管通畅', meaning: '正常 - IUI或自然受孕可能' },
        { range: '一条输卵管阻塞', meaning: '生育力降低 - IUI或IVF' },
        { range: '两条输卵管阻塞', meaning: '需要IVF（绕过输卵管）' },
        { range: '输卵管积水', meaning: 'IVF前建议手术' },
        { range: '子宫纵隔', meaning: '可能需要手术矫正' },
        { range: '息肉或肌瘤', meaning: '宫腔镜切除可改善结果' },
      ],
    },
    iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    id: 'genetic-screening',
    nameEn: 'Genetic Carrier Screening',
    nameZh: '遗传携带者筛查',
    categoryEn: 'Genetic Testing',
    categoryZh: '基因检测',
    descriptionEn: 'Blood test screening for 100-300+ genetic conditions including cystic fibrosis, sickle cell disease, Tay-Sachs, and spinal muscular atrophy. Both partners should be tested.',
    descriptionZh: '血液检测筛查100-300+种遗传疾病，包括囊性纤维化、镰状细胞病、Tay-Sachs和脊髓性肌萎缩。两个伴侣都应该接受检测。',
    whatItMeasuresEn: 'Whether you carry genes for recessive genetic conditions that could be passed to your child if both partners are carriers.',
    whatItMeasuresZh: '您是否携带隐性遗传疾病的基因，如果两个伴侣都是携带者，可能会传递给您的孩子。',
    whenPerformedEn: 'Any time (one-time test, results valid for lifetime)',
    whenPerformedZh: '任何时候（一次性检测，结果终身有效）',
    normalRangeEn: 'No pathogenic variants detected',
    normalRangeZh: '未检测到致病性变异',
    costRange: '$250-$400',
    insuranceCovered: false,
    interpretationEn: {
      title: 'Carrier Screening Results',
      items: [
        { range: 'Both partners negative', meaning: 'Very low risk - proceed with treatment' },
        { range: 'One partner carrier', meaning: 'Low risk - child cannot be affected' },
        { range: 'Both partners carriers (same condition)', meaning: '25% risk - PGT-M testing recommended' },
        { range: 'Ashkenazi Jewish ancestry', meaning: 'Extended panel recommended (Tay-Sachs, etc.)' },
        { range: 'Consanguineous (related)', meaning: 'Comprehensive panel essential' },
      ],
    },
    interpretationZh: {
      title: '携带者筛查结果',
      items: [
        { range: '两个伴侣均阴性', meaning: '极低风险 - 继续治疗' },
        { range: '一个伴侣携带者', meaning: '低风险 - 孩子不会受影响' },
        { range: '两个伴侣携带者（相同疾病）', meaning: '25%风险 - 推荐PGT-M检测' },
        { range: '德系犹太人血统', meaning: '推荐扩展面板（Tay-Sachs等）' },
        { range: '近亲（相关）', meaning: '全面面板必不可少' },
      ],
    },
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
]

// Testing Process Steps
export interface TestingStep {
  step: number
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
}

export const testingProcess: TestingStep[] = [
  {
    step: 1,
    titleEn: 'Schedule Initial Consultation',
    titleZh: '预约初诊咨询',
    descriptionEn: 'Meet with your fertility specialist to review your medical history, discuss your goals, and determine which tests are necessary for your specific situation. We\'ll create a customized testing plan.',
    descriptionZh: '与您的生育专家会面，回顾您的病史，讨论您的目标，并确定哪些检测对您的具体情况是必要的。我们将创建定制的检测计划。',
  },
  {
    step: 2,
    titleEn: 'Complete Blood Work',
    titleZh: '完成血液检查',
    descriptionEn: 'Most blood tests (AMH, TSH, prolactin) can be done any day. FSH/estradiol must be done on day 2-4 of your cycle. You can have blood drawn at our clinic or any LabCorp location.',
    descriptionZh: '大多数血液检查（AMH、TSH、催乳素）可以在任何一天进行。FSH/雌二醇必须在周期第2-4天进行。您可以在我们的诊所或任何LabCorp地点抽血。',
  },
  {
    step: 3,
    titleEn: 'Ultrasound & Imaging',
    titleZh: '超声与成像',
    descriptionEn: 'Baseline ultrasound (AFC) scheduled for day 2-5 of your cycle. HSG scheduled for day 6-12. Saline sonogram or hysteroscopy if abnormalities detected. All performed in our office.',
    descriptionZh: '基线超声（AFC）安排在周期第2-5天。HSG安排在第6-12天。如果检测到异常，则进行盐水超声或宫腔镜检查。所有检查都在我们的办公室进行。',
  },
  {
    step: 4,
    titleEn: 'Partner Testing',
    titleZh: '伴侣检测',
    descriptionEn: 'Semen analysis after 2-5 days abstinence. Genetic carrier screening for both partners. Additional male testing (hormone panel, DNA fragmentation) if initial results abnormal.',
    descriptionZh: '禁欲2-5天后进行精液分析。两个伴侣的遗传携带者筛查。如果初始结果异常，则进行额外的男性检测（激素面板、DNA碎裂）。',
  },
  {
    step: 5,
    titleEn: 'Results Review & Treatment Plan',
    titleZh: '结果审查与治疗计划',
    descriptionEn: 'Follow-up appointment to review all test results, discuss diagnoses, and create your personalized treatment plan. We\'ll recommend IUI, IVF, or other interventions based on your complete fertility picture.',
    descriptionZh: '后续预约审查所有检测结果，讨论诊断，并制定您的个性化治疗计划。我们将根据您完整的生育情况推荐IUI、IVF或其他干预措施。',
  },
]
