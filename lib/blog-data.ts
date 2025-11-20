export interface BlogPost {
  slug: string
  titleEn: string
  titleZh: string
  excerptEn: string
  excerptZh: string
  category: string
  categoryLabelEn: string
  categoryLabelZh: string
  image: string
  dateEn: string
  dateZh: string
  readTimeEn: string
  readTimeZh: string
  authorEn: string
  authorZh: string
  authorTitleEn: string
  authorTitleZh: string
}

export const blogPosts: Record<string, BlogPost> = {
  'jennifer-michael-twin-success': {
    slug: 'jennifer-michael-twin-success',
    titleEn: 'Jennifer & Michael: Our Journey to Twin Boys',
    titleZh: '詹妮弗与迈克尔:我们的双胞胎男孩之旅',
    excerptEn:
      'After three years of trying and two failed IVF cycles elsewhere, we found hope at IVY.',
    excerptZh:
      '经历三年尝试和两次失败的体外受精后,我们在 IVY 找到了希望。',
    category: 'patient-stories',
    categoryLabelEn: 'Patient Stories',
    categoryLabelZh: '患者故事',
    image: '/images/mother0.jpg',
    dateEn: 'January 15, 2025',
    dateZh: '2025年1月15日',
    readTimeEn: '5 min read',
    readTimeZh: '阅读时间 5 分钟',
    authorEn: 'Jennifer & Michael',
    authorZh: '詹妮弗与迈克尔',
    authorTitleEn: 'IVY Fertility Patients',
    authorTitleZh: 'IVY 生育中心患者'
  },
  'sarah-chen-frozen-embryo-success': {
    slug: 'sarah-chen-frozen-embryo-success',
    titleEn: 'Sarah Chen: Finding Confidence Through Integrative Care',
    titleZh: '陈莎拉:通过整合疗法重拾信心',
    excerptEn:
      'The nutritional counseling and hormone balancing protocol helped me prepare my body naturally.',
    excerptZh:
      '营养咨询与激素平衡方案帮助我自然地调理身体。',
    category: 'patient-stories',
    categoryLabelEn: 'Patient Stories',
    categoryLabelZh: '患者故事',
    image: '/images/mother1.jpg',
    dateEn: 'January 10, 2025',
    dateZh: '2025年1月10日',
    readTimeEn: '4 min read',
    readTimeZh: '阅读时间 4 分钟',
    authorEn: 'Sarah Chen',
    authorZh: '陈莎拉',
    authorTitleEn: 'IVY Fertility Patient',
    authorTitleZh: 'IVY 生育中心患者'
  },
  'david-lisa-icsi-immune-protocol': {
    slug: 'david-lisa-icsi-immune-protocol',
    titleEn: 'David & Lisa: Our ICSI Success Story',
    titleZh: '大卫与丽莎:我们的 ICSI 成功故事',
    excerptEn:
      'We were not just a number. The bilingual team understood our cultural values and created a treatment plan that honored our family\'s needs.',
    excerptZh:
      '我们不只是一个病例编号。双语团队理解我们的文化价值观,并制定了尊重我们家庭需求的治疗方案。',
    category: 'patient-stories',
    categoryLabelEn: 'Patient Stories',
    categoryLabelZh: '患者故事',
    image: '/images/mother2.jpg',
    dateEn: 'January 5, 2025',
    dateZh: '2025年1月5日',
    readTimeEn: '6 min read',
    readTimeZh: '阅读时间 6 分钟',
    authorEn: 'David & Lisa',
    authorZh: '大卫与丽莎',
    authorTitleEn: 'IVY Fertility Patients',
    authorTitleZh: 'IVY 生育中心患者'
  },
  'ivf-preparation-6-weeks': {
    slug: 'ivf-preparation-6-weeks',
    titleEn: 'How to Prepare Your Body for IVF in 6 Weeks',
    titleZh: '六周内调理身体迎接 IVF 的完整指南',
    excerptEn:
      'Implement the same evidence-based plan our physicians use with patients before ovarian stimulation.',
    excerptZh:
      '采用与我们的医生一致、基于循证医学的调理计划,为卵巢刺激做好准备。',
    category: 'clinical',
    categoryLabelEn: 'Clinical Insights',
    categoryLabelZh: '临床洞见',
    image: '/images/mother3.jpg',
    dateEn: 'December 28, 2024',
    dateZh: '2024年12月28日',
    readTimeEn: '8 min read',
    readTimeZh: '阅读时间 8 分钟',
    authorEn: 'Dr. Maria Chen, MD, FACOG',
    authorZh: '陈玛丽亚医生,医学博士,FACOG',
    authorTitleEn: 'Reproductive Endocrinologist',
    authorTitleZh: '生殖内分泌专家'
  },
  'fertility-nutrition-implantation': {
    slug: 'fertility-nutrition-implantation',
    titleEn: 'The Fertility Plate: Nutrition That Supports Implantation',
    titleZh: '助力胚胎着床的营养餐盘指南',
    excerptEn:
      'Discover the micronutrients and meal structure our nutritionists recommend throughout the OvuMethod.',
    excerptZh:
      '了解我们的营养师在 OvuMethod 中推荐的微量营养素与膳食结构。',
    category: 'nutrition',
    categoryLabelEn: 'Nutrition',
    categoryLabelZh: '营养指导',
    image: '/images/mother4.jpg',
    dateEn: 'December 20, 2024',
    dateZh: '2024年12月20日',
    readTimeEn: '7 min read',
    readTimeZh: '阅读时间 7 分钟',
    authorEn: 'Emma Rodriguez, RD',
    authorZh: '艾玛·罗德里格斯,注册营养师',
    authorTitleEn: 'Fertility Nutrition Specialist',
    authorTitleZh: '生育营养专家'
  },
  'emotional-resilience-during-treatment': {
    slug: 'emotional-resilience-during-treatment',
    titleEn: 'Staying Grounded Emotionally During Treatment',
    titleZh: '治疗期间保持情绪稳定的实用方式',
    excerptEn:
      'Emotional resilience practices from our licensed counselors to help you stay centered between appointments.',
    excerptZh:
      '来自执照心理咨询师的情绪韧性练习,帮助您在治疗间隙保持平衡。',
    category: 'mind-body',
    categoryLabelEn: 'Mind-Body',
    categoryLabelZh: '身心健康',
    image: '/images/mother5.jpg',
    dateEn: 'December 15, 2024',
    dateZh: '2024年12月15日',
    readTimeEn: '6 min read',
    readTimeZh: '阅读时间 6 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  },
  'calm-breathing-3min': {
    slug: 'calm-breathing-3min',
    titleEn: 'Calm Breathing: 3-Minute Anxiety Relief for IVF',
    titleZh: '平静呼吸法：3分钟缓解IVF焦虑',
    excerptEn:
      'A simple, science-backed breathing exercise you can do anywhere to quickly reduce anxiety during fertility treatment.',
    excerptZh:
      '一个简单且有科学依据的呼吸练习，您可以随时随地进行，快速缓解生育治疗期间的焦虑。',
    category: 'mind-body',
    categoryLabelEn: 'Mind-Body',
    categoryLabelZh: '身心健康',
    image: '/images/mother5.jpg',
    dateEn: 'November 20, 2025',
    dateZh: '2025年11月20日',
    readTimeEn: '5 min read',
    readTimeZh: '阅读时间 5 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  },
  'bedtime-relaxation': {
    slug: 'bedtime-relaxation',
    titleEn: 'Sleep Better During IVF: Bedtime Relaxation Practice',
    titleZh: '睡前放松练习：改善试管期间的睡眠质量',
    excerptEn:
      'A 20-minute guided relaxation routine to help you overcome insomnia and sleep anxiety during fertility treatment.',
    excerptZh:
      '一个20分钟的引导式放松流程，帮助您克服生育治疗期间的失眠和睡眠焦虑。',
    category: 'mind-body',
    categoryLabelEn: 'Mind-Body',
    categoryLabelZh: '身心健康',
    image: '/images/mother4.jpg',
    dateEn: 'November 20, 2025',
    dateZh: '2025年11月20日',
    readTimeEn: '8 min read',
    readTimeZh: '阅读时间 8 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  },
  'gratitude-practice': {
    slug: 'gratitude-practice',
    titleEn: 'The Gratitude Practice: Building Resilience During Treatment',
    titleZh: '感恩练习：在治疗期间培养心理韧性',
    excerptEn:
      'Learn how a daily 5-minute gratitude practice can improve emotional well-being and support positive treatment outcomes.',
    excerptZh:
      '学习如何通过每日5分钟的感恩练习来改善情绪健康，支持积极的治疗结果。',
    category: 'mind-body',
    categoryLabelEn: 'Mind-Body',
    categoryLabelZh: '身心健康',
    image: '/images/mother3.jpg',
    dateEn: 'November 20, 2025',
    dateZh: '2025年11月20日',
    readTimeEn: '6 min read',
    readTimeZh: '阅读时间 6 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  },
  'loving-breath': {
    slug: 'loving-breath',
    titleEn: 'Loving-Breath Meditation: Connecting with Your Future Baby',
    titleZh: '爱的呼吸法：与未来宝宝建立心灵连接',
    excerptEn:
      'A gentle 7-minute visualization practice designed for the post-transfer waiting period to nurture hope and connection.',
    excerptZh:
      '一个温和的7分钟可视化练习，专为移植后等待期设计，培养希望和连接感。',
    category: 'mind-body',
    categoryLabelEn: 'Mind-Body',
    categoryLabelZh: '身心健康',
    image: '/images/mother2.jpg',
    dateEn: 'November 20, 2025',
    dateZh: '2025年11月20日',
    readTimeEn: '5 min read',
    readTimeZh: '阅读时间 5 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  },
  'anxiety-assessment-gad7': {
    slug: 'anxiety-assessment-gad7',
    titleEn: 'Understanding Your Anxiety: The GAD-7 Assessment Guide',
    titleZh: '了解你的焦虑：GAD-7自我评估指南',
    excerptEn:
      'Learn about the GAD-7 anxiety scale, how to assess your mental health, and when to seek professional support during IVF.',
    excerptZh:
      '了解GAD-7焦虑量表，如何评估您的心理健康状态，以及在IVF期间何时寻求专业支持。',
    category: 'mind-body',
    categoryLabelEn: 'Mind-Body',
    categoryLabelZh: '身心健康',
    image: '/images/mother1.jpg',
    dateEn: 'November 20, 2025',
    dateZh: '2025年11月20日',
    readTimeEn: '7 min read',
    readTimeZh: '阅读时间 7 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  }
}
