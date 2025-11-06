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
    image: 'https://www.ovulifemd.com/wp-content/uploads/2022/08/Fertility-Optimization-Guide-resized-e1663926750752.jpg',
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
    image: 'https://www.ovulifemd.com/wp-content/uploads/2019/12/blog_mindfulness.jpg',
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
    image: 'https://www.ovulifemd.com/wp-content/uploads/2019/12/about-us_hero.jpg',
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
    image: 'https://www.ovulifemd.com/wp-content/uploads/2022/08/Fertility-Optimization-Guide-resized-e1663926750752.jpg',
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
    image: 'https://www.ovulifemd.com/wp-content/uploads/2019/12/blog_nutrition.jpg',
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
    image: 'https://www.ovulifemd.com/wp-content/uploads/2019/12/blog_mindfulness.jpg',
    dateEn: 'December 15, 2024',
    dateZh: '2024年12月15日',
    readTimeEn: '6 min read',
    readTimeZh: '阅读时间 6 分钟',
    authorEn: 'Dr. Lisa Thompson, PsyD',
    authorZh: '丽莎·汤普森博士,心理学博士',
    authorTitleEn: 'Licensed Clinical Psychologist',
    authorTitleZh: '执照临床心理学家'
  }
}
