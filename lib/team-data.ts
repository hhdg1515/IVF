export interface TeamMember {
  id: string
  name: string
  nameZh: string
  role: string
  roleZh: string
  credentials: string
  photoUrl: string

  bio: {
    education: string[]
    educationZh: string[]
    specialties: string[]
    specialtiesZh: string[]
    experience: string
    experienceZh: string
    philosophy: string
    philosophyZh: string
  }

  achievements?: {
    publications?: number
    yearsOfPractice?: number
    patientsHelped?: number
    languages?: string[]
  }

  featured: boolean
  order: number
}

export const teamMembers: TeamMember[] = [
  {
    id: 'dr-lisa-chen',
    name: 'Dr. Lisa Chen, MD, FACOG',
    nameZh: '陈丽莎医生',
    role: 'Medical Director & REI Specialist',
    roleZh: '医学主任 & 生殖内分泌与不孕症专家',
    credentials: 'MD, FACOG, Board Certified in Reproductive Endocrinology & Infertility',
    photoUrl: '/images/team/default-doctor.jpg',

    bio: {
      education: [
        'MD, Johns Hopkins University School of Medicine',
        'Residency in Obstetrics & Gynecology, Massachusetts General Hospital',
        'Fellowship in Reproductive Endocrinology & Infertility, Stanford University Medical Center',
      ],
      educationZh: [
        '医学博士，约翰霍普金斯大学医学院',
        '妇产科住院医师，麻省总医院',
        '生殖内分泌与不孕症专科医师，斯坦福大学医学中心',
      ],
      specialties: [
        'Complex IVF cases & poor responders',
        'Fertility preservation for cancer patients',
        'Recurrent pregnancy loss',
        'Diminished ovarian reserve treatment',
        'PCOS and endometriosis management',
      ],
      specialtiesZh: [
        '复杂IVF病例与低反应患者',
        '癌症患者生育力保存',
        '复发性流产',
        '卵巢储备减少治疗',
        'PCOS和子宫内膜异位症管理',
      ],
      experience: 'Dr. Chen has over 15 years of experience in reproductive medicine and has helped more than 2,000 families achieve their dream of parenthood. She is particularly known for her expertise in treating challenging cases and her compassionate, patient-centered approach.',
      experienceZh: '陈医生在生殖医学领域拥有超过15年的经验，已帮助2,000多个家庭实现为人父母的梦想。她尤其以治疗挑战性病例的专业知识和富有同情心、以患者为中心的方法而闻名。',
      philosophy: 'I believe every patient\'s journey is unique. My role is not just to provide medical treatment, but to partner with you in understanding your body, your goals, and the best path forward. Fertility medicine is as much art as science—it requires listening, adapting, and supporting you holistically.',
      philosophyZh: '我相信每位患者的旅程都是独特的。我的角色不仅是提供医疗治疗，而是与您合作，了解您的身体、目标和最佳前进路径。生育医学既是艺术也是科学——需要倾听、适应并全面支持您。',
    },

    achievements: {
      publications: 35,
      yearsOfPractice: 15,
      patientsHelped: 2000,
      languages: ['English', 'Mandarin', 'Cantonese'],
    },

    featured: true,
    order: 1,
  },

  {
    id: 'dr-michael-roberts',
    name: 'Dr. Michael Roberts, MD, PhD',
    nameZh: '迈克尔·罗伯茨医生',
    role: 'Clinical Director & Andrology Specialist',
    roleZh: '临床主任 & 男科学专家',
    credentials: 'MD, PhD, Board Certified in Urology & Male Reproductive Medicine',
    photoUrl: '/images/team/default-doctor.jpg',

    bio: {
      education: [
        'MD & PhD in Molecular Biology, Harvard Medical School',
        'Residency in Urology, UCSF Medical Center',
        'Fellowship in Male Infertility & Microsurgery, Cornell',
      ],
      educationZh: [
        '医学博士 & 分子生物学博士，哈佛医学院',
        '泌尿科住院医师，加州大学旧金山分校医学中心',
        '男性不育与显微外科专科医师，康奈尔大学',
      ],
      specialties: [
        'Male factor infertility evaluation',
        'Sperm DNA fragmentation analysis',
        'Varicocele repair & microsurgical procedures',
        'Testicular sperm extraction (TESE)',
        'Hormonal optimization for men',
      ],
      specialtiesZh: [
        '男性因素不育评估',
        '精子DNA断裂分析',
        '精索静脉曲张修复与显微外科手术',
        '睾丸取精术（TESE）',
        '男性激素优化',
      ],
      experience: 'Dr. Roberts brings cutting-edge research and clinical expertise to male fertility care. His PhD research focused on sperm chromatin integrity, and he has pioneered techniques for optimizing sperm quality in challenging cases.',
      experienceZh: '罗伯茨医生将前沿研究和临床专业知识带入男性生育护理。他的博士研究专注于精子染色质完整性，并在优化挑战性病例中的精子质量方面开创了技术。',
      philosophy: 'Male fertility is too often overlooked. I\'m committed to comprehensive male evaluation as an equal partner in the fertility journey. Optimizing sperm health can dramatically improve IVF outcomes.',
      philosophyZh: '男性生育力经常被忽视。我致力于将全面的男性评估作为生育旅程中的平等伙伴。优化精子健康可以显著改善IVF结果。',
    },

    achievements: {
      publications: 28,
      yearsOfPractice: 12,
      languages: ['English', 'Spanish'],
    },

    featured: true,
    order: 2,
  },

  {
    id: 'emily-nguyen',
    name: 'Emily Nguyen, MS, HCLD',
    nameZh: '艾米莉·阮',
    role: 'Senior Embryologist & Lab Director',
    roleZh: '高级胚胎学家 & 实验室主任',
    credentials: 'MS in Embryology, HCLD (High Complexity Lab Director)',
    photoUrl: '/images/team/default-staff.jpg',

    bio: {
      education: [
        'MS in Clinical Embryology, Eastern Virginia Medical School',
        'BS in Biology, UC Berkeley',
        'HCLD Certification, American Association of Bioanalysts',
      ],
      educationZh: [
        '临床胚胎学硕士，东弗吉尼亚医学院',
        '生物学学士，加州大学伯克利分校',
        'HCLD认证，美国生物分析师协会',
      ],
      specialties: [
        'Vitrification & cryopreservation',
        'Time-lapse embryo monitoring',
        'Laser-assisted hatching',
        'ICSI & advanced fertilization techniques',
        'Embryo biopsy for PGT-A',
      ],
      specialtiesZh: [
        '玻璃化冷冻与低温保存',
        '延时胚胎监测',
        '激光辅助孵化',
        'ICSI及先进受精技术',
        'PGT-A胚胎活检',
      ],
      experience: 'Emily has overseen more than 5,000 IVF cycles and maintains one of the highest embryo survival rates in the region. Her meticulous attention to quality control ensures every sample receives gold-standard care.',
      experienceZh: 'Emily 监督了5,000多个IVF周期，并保持了该地区最高的胚胎存活率之一。她对质量控制的细致关注确保每个样本都接受金标准护理。',
      philosophy: 'Your embryos are as precious to me as they are to you. Every detail matters—from the moment we receive your eggs to the day of transfer.',
      philosophyZh: '您的胚胎对我来说和对您一样珍贵。每个细节都很重要——从我们接收您的卵子到移植的那一天。',
    },

    achievements: {
      yearsOfPractice: 10,
      languages: ['English', 'Vietnamese'],
    },

    featured: false,
    order: 3,
  },

  {
    id: 'sarah-martinez',
    name: 'Sarah Martinez, RN, BSN',
    nameZh: '莎拉·马丁内斯',
    role: 'IVF Nurse Coordinator',
    roleZh: 'IVF护士协调员',
    credentials: 'Registered Nurse, BSN, IVF Specialty Certification',
    photoUrl: '/images/team/default-staff.jpg',

    bio: {
      education: [
        'BSN, Nursing, UCLA',
        'IVF Nursing Specialty Certification',
      ],
      educationZh: [
        '护理学士，加州大学洛杉矶分校',
        'IVF护理专业认证',
      ],
      specialties: [
        'Medication teaching & injection training',
        'Cycle monitoring & coordination',
        'Patient education & emotional support',
        'Post-retrieval & post-transfer care',
      ],
      specialtiesZh: [
        '药物教学与注射培训',
        '周期监测与协调',
        '患者教育与情感支持',
        '取卵后与移植后护理',
      ],
      experience: 'Sarah is the compassionate voice patients hear during their treatment. She provides 24/7 support, answers medication questions, and celebrates every milestone with you.',
      experienceZh: 'Sarah 是患者在治疗期间听到的富有同情心的声音。她提供24/7支持，回答药物问题，并与您一起庆祝每个里程碑。',
      philosophy: 'I\'m here to make sure you never feel alone. No question is too small, and your concerns are always valid.',
      philosophyZh: '我在这里确保您永远不会感到孤单。没有问题太小，您的担忧始终有效。',
    },

    achievements: {
      yearsOfPractice: 8,
      languages: ['English', 'Spanish'],
    },

    featured: false,
    order: 4,
  },

  {
    id: 'dr-amanda-kim',
    name: 'Dr. Amanda Kim, PhD',
    nameZh: '金阿曼达博士',
    role: 'Genetic Counselor',
    roleZh: '遗传咨询师',
    credentials: 'PhD in Human Genetics, Board Certified Genetic Counselor',
    photoUrl: '/images/team/default-staff.jpg',

    bio: {
      education: [
        'PhD in Human Genetics, Stanford University',
        'MS in Genetic Counseling, UC Irvine',
      ],
      educationZh: [
        '人类遗传学博士，斯坦福大学',
        '遗传咨询硕士，加州大学尔湾分校',
      ],
      specialties: [
        'PGT-A/PGT-M interpretation',
        'Carrier screening & risk assessment',
        'Family history analysis',
        'Genetic disorder counseling',
      ],
      specialtiesZh: [
        'PGT-A/PGT-M解读',
        '携带者筛查与风险评估',
        '家族史分析',
        '遗传病咨询',
      ],
      experience: 'Dr. Kim helps patients understand complex genetic information and make informed decisions about testing options.',
      experienceZh: '金博士帮助患者理解复杂的遗传信息，并就检测选项做出明智的决定。',
      philosophy: 'Genetic information can be overwhelming. I\'m here to translate the science into clear, actionable guidance.',
      philosophyZh: '遗传信息可能令人不知所措。我在这里将科学转化为清晰、可操作的指导。',
    },

    achievements: {
      publications: 12,
      yearsOfPractice: 6,
      languages: ['English', 'Korean'],
    },

    featured: false,
    order: 5,
  },
]

export const featuredTeamMembers = teamMembers.filter(m => m.featured)
export const allTeamMembers = [...teamMembers].sort((a, b) => a.order - b.order)
