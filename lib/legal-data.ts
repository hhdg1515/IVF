// Legal Documents and Consent Forms Data
// This file contains information about all legal documents, consent forms,
// patient rights, and sample disposition agreements

export interface LegalDocument {
  id: string
  categoryEn: string
  categoryZh: string
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  whenRequired: string
  whenRequiredZh: string
  keyPointsEn: string[]
  keyPointsZh: string[]
  downloadUrl?: string
}

export interface PatientRight {
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  iconPath: string
}

export interface DispositionOption {
  option: string
  optionZh: string
  descriptionEn: string
  descriptionZh: string
  requirementsEn: string[]
  requirementsZh: string[]
}

// Legal Documents Required for Treatment
export const legalDocuments: LegalDocument[] = [
  {
    id: 'informed-consent-ivf',
    categoryEn: 'Treatment Consent',
    categoryZh: '治疗同意书',
    titleEn: 'IVF Treatment Informed Consent',
    titleZh: 'IVF 治疗知情同意书',
    descriptionEn:
      'Comprehensive consent form explaining the IVF process, risks, benefits, alternatives, and expected outcomes. Required before starting any IVF cycle.',
    descriptionZh:
      '全面的同意书，解释 IVF 过程、风险、益处、替代方案和预期结果。在开始任何 IVF 周期之前必需。',
    whenRequired: 'Before starting IVF stimulation',
    whenRequiredZh: '在开始 IVF 促排之前',
    keyPointsEn: [
      'Ovarian stimulation risks (OHSS, ovarian torsion)',
      'Egg retrieval procedure risks (bleeding, infection, anesthesia)',
      'Fertilization methods (conventional IVF vs. ICSI)',
      'Embryo culture and development timeline',
      'Transfer procedure and pregnancy rates by age',
      'Multiple pregnancy risks',
      'Costs and insurance coverage limitations',
      'No guarantee of pregnancy or live birth',
    ],
    keyPointsZh: [
      '促排卵风险（OHSS、卵巢扭转）',
      '取卵手术风险（出血、感染、麻醉）',
      '受精方法（常规 IVF vs. ICSI）',
      '胚胎培养和发育时间表',
      '按年龄划分的移植和妊娠率',
      '多胎妊娠风险',
      '费用和保险覆盖限制',
      '无法保证怀孕或活产',
    ],
  },
  {
    id: 'informed-consent-egg-freezing',
    categoryEn: 'Treatment Consent',
    categoryZh: '治疗同意书',
    titleEn: 'Egg Freezing Informed Consent',
    titleZh: '卵子冷冻知情同意书',
    descriptionEn:
      'Consent for oocyte cryopreservation explaining the egg freezing process, vitrification technology, storage, and future use options.',
    descriptionZh:
      '卵母细胞冷冻保存同意书，解释冻卵过程、玻璃化冷冻技术、存储和未来使用选项。',
    whenRequired: 'Before starting egg freezing cycle',
    whenRequiredZh: '在开始冻卵周期之前',
    keyPointsEn: [
      'Age-related egg quality and quantity expectations',
      'Stimulation and retrieval risks',
      'Vitrification technology and survival rates (95-97%)',
      'Storage duration and annual fees',
      'Future thaw, fertilization, and transfer process',
      'No guarantee of future pregnancy',
      'Options if eggs are never used (donate, discard, research)',
      'Sample ownership and disposition upon death or divorce',
    ],
    keyPointsZh: [
      '年龄相关的卵子质量和数量预期',
      '促排和取卵风险',
      '玻璃化冷冻技术和存活率（95-97%）',
      '存储期限和年度费用',
      '未来解冻、受精和移植过程',
      '无法保证未来怀孕',
      '如果从未使用卵子的选项（捐赠、丢弃、研究）',
      '样本所有权以及死亡或离婚时的处置',
    ],
  },
  {
    id: 'storage-agreement',
    categoryEn: 'Storage Agreement',
    categoryZh: '存储协议',
    titleEn: 'Cryopreservation Storage Agreement',
    titleZh: '冷冻保存存储协议',
    descriptionEn:
      'Legal agreement governing long-term storage of frozen eggs, sperm, or embryos. Outlines fees, renewal process, and disposition options.',
    descriptionZh:
      '管理冷冻卵子、精子或胚胎长期存储的法律协议。概述费用、续订流程和处置选项。',
    whenRequired: 'At time of initial cryopreservation',
    whenRequiredZh: '在首次冷冻保存时',
    keyPointsEn: [
      'Annual storage fee ($650/year) and payment schedule',
      'Automatic renewal vs. manual renewal options',
      'Grace period (30 days) for late payment',
      'Notification process (email, SMS, certified mail)',
      'What happens if payment lapses (60-day hold, then disposition)',
      'Sample transfer to another facility (process and fees)',
      'Disposition options (discard, donate, research)',
      'Legal ownership in case of death, divorce, or incapacity',
      'Facility relocation policy (we cover all costs)',
    ],
    keyPointsZh: [
      '年度存储费（每年 $650）和付款时间表',
      '自动续订 vs. 手动续订选项',
      '逾期付款宽限期（30 天）',
      '通知流程（电子邮件、短信、挂号信）',
      '如果付款失效会发生什么（60 天保留，然后处置）',
      '样本转移到另一个设施（流程和费用）',
      '处置选项（丢弃、捐赠、研究）',
      '死亡、离婚或丧失行为能力情况下的法律所有权',
      '设施搬迁政策（我们承担所有费用）',
    ],
  },
  {
    id: 'embryo-disposition',
    categoryEn: 'Embryo Specific',
    categoryZh: '胚胎特定',
    titleEn: 'Embryo Disposition Agreement',
    titleZh: '胚胎处置协议',
    descriptionEn:
      'Directive specifying what should happen to frozen embryos in various scenarios. Both partners must sign if embryos are created with a partner.',
    descriptionZh:
      '指定在各种情况下冷冻胚胎应该如何处理的指令。如果胚胎是与伴侣一起创建的，双方都必须签署。',
    whenRequired: 'Before embryo freezing',
    whenRequiredZh: '在胚胎冷冻之前',
    keyPointsEn: [
      'Disposition in case of divorce or separation',
      'Disposition if one partner dies',
      'Disposition if both partners die',
      'Disposition if relationship ends (for unmarried couples)',
      'Authority to use embryos for pregnancy',
      'Embryo donation to another couple (requires screening)',
      'Embryo donation to research (IRB-approved studies only)',
      'Compassionate discard procedure',
      'Dispute resolution process (mediation required before litigation)',
    ],
    keyPointsZh: [
      '离婚或分居情况下的处置',
      '如果一方去世的处置',
      '如果双方都去世的处置',
      '如果关系结束的处置（未婚夫妇）',
      '使用胚胎怀孕的授权',
      '将胚胎捐赠给另一对夫妇（需要筛查）',
      '将胚胎捐赠给研究（仅限 IRB 批准的研究）',
      '人道丢弃程序',
      '争议解决流程（诉讼前需要调解）',
    ],
  },
  {
    id: 'genetic-testing-consent',
    categoryEn: 'Genetic Testing',
    categoryZh: '基因检测',
    titleEn: 'PGT-A/PGT-M Genetic Testing Consent',
    titleZh: 'PGT-A/PGT-M 基因检测同意书',
    descriptionEn:
      'Consent for preimplantation genetic testing of embryos. Explains technology, accuracy, limitations, and implications of results.',
    descriptionZh:
      '胚胎植入前基因检测同意书。解释技术、准确性、局限性和结果含义。',
    whenRequired: 'If opting for PGT-A or PGT-M testing',
    whenRequiredZh: '如果选择 PGT-A 或 PGT-M 检测',
    keyPointsEn: [
      'Biopsy procedure (trophectoderm biopsy on day 5/6)',
      'Risk of embryo damage (< 1%)',
      'Test accuracy (98-99% for aneuploidy detection)',
      'Possibility of mosaic results (unclear findings)',
      'Cannot detect all genetic conditions',
      'Ethical considerations of embryo selection',
      'Additional cost ($3,500-$5,000)',
      'Results turnaround time (7-14 days)',
      'Confidentiality and data storage',
    ],
    keyPointsZh: [
      '活检程序（第 5/6 天滋养层活检）',
      '胚胎损伤风险（< 1%）',
      '检测准确性（非整倍体检测 98-99%）',
      '嵌合体结果的可能性（不明确的发现）',
      '无法检测所有遗传疾病',
      '胚胎选择的伦理考虑',
      '额外费用（$3,500-$5,000）',
      '结果周转时间（7-14 天）',
      '保密性和数据存储',
    ],
  },
  {
    id: 'sperm-donor-agreement',
    categoryEn: 'Third-Party Reproduction',
    categoryZh: '第三方生殖',
    titleEn: 'Sperm Donor Agreement',
    titleZh: '精子捐赠者协议',
    descriptionEn:
      'Legal agreement between recipient and known or anonymous sperm donor. Establishes parental rights and relinquishes donor parental claims.',
    descriptionZh:
      '接受者与已知或匿名精子捐赠者之间的法律协议。确立父母权利并放弃捐赠者的父母权利主张。',
    whenRequired: 'Before using donor sperm',
    whenRequiredZh: '在使用捐赠精子之前',
    keyPointsEn: [
      'Donor relinquishes all parental rights and responsibilities',
      'Recipient(s) assume all parental rights',
      'Donor medical and genetic screening requirements',
      'Infectious disease testing (FDA mandates 6-month quarantine)',
      'Anonymous vs. known vs. open-identity donation',
      'Future contact agreements (if open-identity)',
      'Financial compensation (if applicable)',
      'Independent legal counsel required for both parties',
    ],
    keyPointsZh: [
      '捐赠者放弃所有父母权利和责任',
      '接受者承担所有父母权利',
      '捐赠者医学和基因筛查要求',
      '传染病检测（FDA 要求 6 个月隔离期）',
      '匿名 vs. 已知 vs. 开放身份捐赠',
      '未来联系协议（如果是开放身份）',
      '经济补偿（如适用）',
      '双方都需要独立法律顾问',
    ],
  },
  {
    id: 'egg-donor-agreement',
    categoryEn: 'Third-Party Reproduction',
    categoryZh: '第三方生殖',
    titleEn: 'Egg Donor Agreement',
    titleZh: '卵子捐赠者协议',
    descriptionEn:
      'Comprehensive legal contract between egg donor and recipient(s). Covers medical risks, compensation, parental rights, and future contact.',
    descriptionZh:
      '卵子捐赠者和接受者之间的全面法律合同。涵盖医疗风险、补偿、父母权利和未来联系。',
    whenRequired: 'Before egg donor cycle begins',
    whenRequiredZh: '在卵子捐赠周期开始之前',
    keyPointsEn: [
      'Donor compensation ($8,000-$15,000 depending on experience)',
      'Medical and psychological screening requirements',
      'Donor commits to medication protocol and monitoring',
      'Risks of ovarian stimulation and retrieval',
      'Donor relinquishes all parental rights to resulting children',
      'Recipient(s) assume all parental rights',
      'Anonymity vs. known arrangement',
      'Future medical updates (genetic conditions discovered later)',
      'Both parties must have independent legal representation',
    ],
    keyPointsZh: [
      '捐赠者补偿（根据经验 $8,000-$15,000）',
      '医学和心理筛查要求',
      '捐赠者承诺遵守药物方案和监测',
      '促排卵和取卵的风险',
      '捐赠者放弃对所生子女的所有父母权利',
      '接受者承担所有父母权利',
      '匿名 vs. 已知安排',
      '未来医疗更新（稍后发现的遗传疾病）',
      '双方都必须有独立的法律代表',
    ],
  },
  {
    id: 'gestational-carrier-agreement',
    categoryEn: 'Third-Party Reproduction',
    categoryZh: '第三方生殖',
    titleEn: 'Gestational Carrier (Surrogacy) Agreement',
    titleZh: '代孕者（代孕）协议',
    descriptionEn:
      'Complex legal contract between intended parents and gestational carrier. Must comply with state law. Covers medical care, compensation, parental rights, and responsibilities.',
    descriptionZh:
      '预期父母和代孕者之间的复杂法律合同。必须符合州法律。涵盖医疗护理、补偿、父母权利和责任。',
    whenRequired: 'Before embryo transfer to carrier',
    whenRequiredZh: '在胚胎移植给代孕者之前',
    keyPointsEn: [
      'Carrier compensation ($50,000-$80,000 base + expenses)',
      'Medical expenses coverage (prenatal care, delivery)',
      'Carrier screening (medical, psychological, background)',
      'Intended parents\' responsibilities (support, insurance)',
      'Pregnancy and delivery medical decisions',
      'Selective reduction and termination policies',
      'Post-birth parental rights establishment',
      'Life insurance and disability coverage for carrier',
      'Both parties must have independent legal counsel',
      'Court pre-birth order or post-birth adoption (state-dependent)',
    ],
    keyPointsZh: [
      '代孕者补偿（基础 $50,000-$80,000 + 费用）',
      '医疗费用覆盖（产前护理、分娩）',
      '代孕者筛查（医疗、心理、背景）',
      '预期父母的责任（支持、保险）',
      '怀孕和分娩医疗决策',
      '选择性减胎和终止政策',
      '出生后父母权利的确立',
      '代孕者的人寿保险和伤残保险',
      '双方都必须有独立的法律顾问',
      '出生前法院命令或出生后收养（取决于州）',
    ],
  },
  {
    id: 'financial-agreement',
    categoryEn: 'Financial',
    categoryZh: '财务',
    titleEn: 'Financial Responsibility Agreement',
    titleZh: '财务责任协议',
    descriptionEn:
      'Contract outlining payment terms, refund policies, multi-cycle packages, and what happens if treatment is cancelled.',
    descriptionZh:
      '合同概述付款条款、退款政策、多周期套餐以及如果治疗被取消会发生什么。',
    whenRequired: 'Before treatment starts',
    whenRequiredZh: '在治疗开始之前',
    keyPointsEn: [
      'Itemized fee breakdown (medical, lab, anesthesia)',
      'Payment schedule and due dates',
      'Accepted payment methods and financing options',
      'Cancellation policy and refund terms',
      'Insurance verification and pre-authorization process',
      'Patient responsibility for denied claims',
      'Multi-cycle discount programs',
      'Medication costs (separate from clinic fees)',
      'Additional fees (PGT-A, ICSI, assisted hatching)',
      'Late payment penalties',
    ],
    keyPointsZh: [
      '逐项费用明细（医疗、实验室、麻醉）',
      '付款时间表和截止日期',
      '接受的付款方式和融资选项',
      '取消政策和退款条款',
      '保险验证和预授权流程',
      '被拒绝索赔的患者责任',
      '多周期折扣计划',
      '药物费用（与诊所费用分开）',
      '额外费用（PGT-A、ICSI、辅助孵化）',
      '逾期付款罚款',
    ],
  },
  {
    id: 'hipaa-authorization',
    categoryEn: 'Privacy',
    categoryZh: '隐私',
    titleEn: 'HIPAA Authorization and Privacy Consent',
    titleZh: 'HIPAA 授权和隐私同意书',
    descriptionEn:
      'Authorization to share medical information with specified individuals and acknowledgment of privacy practices.',
    descriptionZh:
      '授权与指定个人共享医疗信息，并确认隐私实践。',
    whenRequired: 'At first appointment',
    whenRequiredZh: '在首次就诊时',
    keyPointsEn: [
      'Notice of Privacy Practices (how we use your health information)',
      'Authorization to share information with partner/family members',
      'Release of records to outside providers (OB, PCP)',
      'Photography and video consent for education (de-identified)',
      'Testimonial and success story consent (optional)',
      'Right to revoke authorization at any time',
      'How we secure electronic medical records',
      'Data breach notification procedures',
    ],
    keyPointsZh: [
      '隐私实践通知（我们如何使用您的健康信息）',
      '授权与伴侣/家庭成员共享信息',
      '向外部提供者（产科医生、主治医生）发布记录',
      '用于教育的摄影和视频同意（去识别化）',
      '推荐和成功案例同意（可选）',
      '随时撤销授权的权利',
      '我们如何保护电子医疗记录',
      '数据泄露通知程序',
    ],
  },
]

// Patient Rights and Protections
export const patientRights: PatientRight[] = [
  {
    titleEn: 'Right to Informed Consent',
    titleZh: '知情同意权',
    descriptionEn:
      'You have the right to receive complete, understandable information about your treatment before giving consent. You may ask questions, request second opinions, and withdraw consent at any time before the procedure.',
    descriptionZh:
      '您有权在同意之前获得关于您治疗的完整、易懂的信息。您可以提出问题、要求第二意见，并在手术前随时撤回同意。',
    iconPath:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    titleEn: 'Right to Privacy and Confidentiality',
    titleZh: '隐私和保密权',
    descriptionEn:
      'Your medical information is protected under HIPAA. We will not share your information without your written authorization, except as required by law. All staff sign confidentiality agreements.',
    descriptionZh:
      '您的医疗信息受 HIPAA 保护。未经您的书面授权，我们不会共享您的信息，除非法律要求。所有员工都签署保密协议。',
    iconPath:
      'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    titleEn: 'Right to Access Your Medical Records',
    titleZh: '访问医疗记录权',
    descriptionEn:
      'You may request copies of your medical records, lab results, and imaging at any time. Records are available through our patient portal within 24 hours, or paper copies within 5 business days.',
    descriptionZh:
      '您可以随时要求您的医疗记录、实验室结果和影像的副本。记录可通过我们的患者门户在 24 小时内获得，或在 5 个工作日内获得纸质副本。',
    iconPath:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    titleEn: 'Right to Second Opinion',
    titleZh: '第二意见权',
    descriptionEn:
      'You have the right to seek a second opinion from another fertility specialist at any point in your care. We will provide all necessary records to the consulting physician upon your request.',
    descriptionZh:
      '您有权在护理的任何时候向另一位生育专家寻求第二意见。我们会根据您的要求向咨询医生提供所有必要的记录。',
    iconPath:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    titleEn: 'Right to Refuse or Discontinue Treatment',
    titleZh: '拒绝或中止治疗权',
    descriptionEn:
      'You may decline any recommended treatment or discontinue care at any time. If you cancel a cycle, you will receive a prorated refund for services not yet rendered, minus non-refundable lab fees.',
    descriptionZh:
      '您可以拒绝任何推荐的治疗或随时中止护理。如果您取消周期，您将获得尚未提供服务的按比例退款，减去不可退还的实验室费用。',
    iconPath:
      'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
  },
  {
    titleEn: 'Right to File a Complaint',
    titleZh: '投诉权',
    descriptionEn:
      'If you have concerns about your care, you may file a complaint with our Patient Relations department. You may also contact state licensing boards or accreditation organizations (CAP, SART) without fear of retaliation.',
    descriptionZh:
      '如果您对护理有疑虑，可以向我们的患者关系部门投诉。您也可以联系州执照委员会或认证组织（CAP、SART），无需担心报复。',
    iconPath:
      'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
  },
  {
    titleEn: 'Right to Control Your Samples',
    titleZh: '样本控制权',
    descriptionEn:
      'You retain full ownership and decision-making authority over your frozen eggs, sperm, or embryos. You may transfer them to another facility, donate them, or have them discarded at any time per your signed disposition agreement.',
    descriptionZh:
      '您保留对冷冻卵子、精子或胚胎的完全所有权和决策权。根据您签署的处置协议，您可以随时将它们转移到另一个设施、捐赠它们或丢弃它们。',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]

// Sample Disposition Options
export const dispositionOptions: DispositionOption[] = [
  {
    option: 'Continue Storage',
    optionZh: '继续存储',
    descriptionEn:
      'Renew your annual storage agreement to keep your samples preserved indefinitely. Samples remain viable for decades with no degradation in quality.',
    descriptionZh:
      '续订年度存储协议，无限期保存您的样本。样本可保持数十年的活力，质量不会下降。',
    requirementsEn: [
      'Annual storage fee payment ($650/year)',
      'Updated contact information on file',
      'Renewal confirmation (automatic or manual)',
    ],
    requirementsZh: [
      '年度存储费支付（每年 $650）',
      '文件中的更新联系信息',
      '续订确认（自动或手动）',
    ],
  },
  {
    option: 'Compassionate Discard',
    optionZh: '人道丢弃',
    descriptionEn:
      'Your samples are thawed and discarded in a dignified manner with documentation. This is the most common choice when patients complete their family building.',
    descriptionZh:
      '您的样本以有尊严的方式解冻并丢弃，并记录在案。这是患者完成家庭组建后最常见的选择。',
    requirementsEn: [
      'Written request from all legal owners',
      'Notarized consent form',
      'Cooling-off period (30 days to change your mind)',
      'Certificate of discard provided for your records',
    ],
    requirementsZh: [
      '所有法定所有者的书面申请',
      '经公证的同意书',
      '冷静期（30 天改变主意）',
      '为您的记录提供的丢弃证明',
    ],
  },
  {
    option: 'Donate to Research',
    optionZh: '捐赠给研究',
    descriptionEn:
      'Donate your samples to IRB-approved scientific research studying embryo development, genetic conditions, or fertility preservation techniques. Samples are de-identified.',
    descriptionZh:
      '将您的样本捐赠给 IRB 批准的科学研究，研究胚胎发育、遗传疾病或生育力保存技术。样本是去识别化的。',
    requirementsEn: [
      'Written informed consent for research use',
      'Eligibility screening (some studies have criteria)',
      'Understanding that samples will not be returned',
      'No compensation provided for donation',
    ],
    requirementsZh: [
      '研究使用的书面知情同意书',
      '资格筛查（一些研究有标准）',
      '理解样本将不会被退回',
      '捐赠不提供补偿',
    ],
  },
  {
    option: 'Donate to Another Patient',
    optionZh: '捐赠给其他患者',
    descriptionEn:
      'Embryo donation allows another individual or couple to use your embryos for family building. Similar to adoption, but pre-birth. Requires legal agreement and screening.',
    descriptionZh:
      '胚胎捐赠允许另一个人或夫妇使用您的胚胎来组建家庭。类似于收养，但在出生前。需要法律协议和筛查。',
    requirementsEn: [
      'Legal agreement relinquishing parental rights',
      'Infectious disease screening (FDA required)',
      'Psychological evaluation and counseling',
      'Decision on anonymity vs. open donation',
      'Recipient matching through agency or known arrangement',
      'Both donor and recipient must have legal counsel',
    ],
    requirementsZh: [
      '放弃父母权利的法律协议',
      '传染病筛查（FDA 要求）',
      '心理评估和咨询',
      '匿名 vs. 开放捐赠的决定',
      '通过机构或已知安排进行接受者匹配',
      '捐赠者和接受者都必须有法律顾问',
    ],
  },
  {
    option: 'Transfer to Another Facility',
    optionZh: '转移到另一个设施',
    descriptionEn:
      'If you relocate or choose to continue treatment elsewhere, we will transfer your samples to another certified fertility clinic or storage facility.',
    descriptionZh:
      '如果您搬迁或选择在其他地方继续治疗，我们会将您的样本转移到另一个认证的生育诊所或存储设施。',
    requirementsEn: [
      'Written request 30 days in advance',
      'Destination facility information and shipping instructions',
      'Transfer fee ($500 covers specialized container and courier)',
      'Signed release of liability',
      'Receiving facility must be CAP/CLIA certified',
      'Samples shipped via certified medical courier only',
    ],
    requirementsZh: [
      '提前 30 天书面申请',
      '目的地设施信息和运输说明',
      '转移费（$500 涵盖专用容器和快递）',
      '签署的责任豁免',
      '接收设施必须是 CAP/CLIA 认证',
      '样本仅通过认证医疗快递运输',
    ],
  },
]

// Legal Resources and Support
export interface LegalResource {
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  contactInfo?: string
}

export const legalResources: LegalResource[] = [
  {
    titleEn: 'In-House Legal Consultation',
    titleZh: '内部法律咨询',
    descriptionEn:
      'Our patient coordinators can explain all required documents and answer general questions. Complimentary 30-minute consultation included with treatment.',
    descriptionZh:
      '我们的患者协调员可以解释所有必需的文件并回答一般问题。治疗包括免费 30 分钟咨询。',
  },
  {
    titleEn: 'Independent Legal Counsel',
    titleZh: '独立法律顾问',
    descriptionEn:
      'For third-party reproduction (donor, surrogacy), both parties MUST have their own attorney. We provide a referral list of experienced reproductive law attorneys.',
    descriptionZh:
      '对于第三方生殖（捐赠者、代孕），双方都必须有自己的律师。我们提供经验丰富的生殖法律师的推荐名单。',
    contactInfo: 'Request referral list from your patient coordinator',
  },
  {
    titleEn: 'RESOLVE - National Infertility Association',
    titleZh: 'RESOLVE - 全国不孕症协会',
    descriptionEn:
      'Provides education on legal aspects of fertility treatment and family building options. Free resources and support groups.',
    descriptionZh:
      '提供有关生育治疗和家庭组建选项的法律方面的教育。免费资源和支持小组。',
    contactInfo: 'www.resolve.org',
  },
  {
    titleEn: 'American Society for Reproductive Medicine (ASRM) Ethics Opinions',
    titleZh: '美国生殖医学学会 (ASRM) 伦理意见',
    descriptionEn:
      'Publishes guidance on ethical issues in reproductive medicine including embryo disposition, donor anonymity, and gestational carriers.',
    descriptionZh:
      '发布有关生殖医学伦理问题的指南，包括胚胎处置、捐赠者匿名和代孕者。',
    contactInfo: 'www.asrm.org/ethics',
  },
]
