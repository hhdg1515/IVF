export interface PracticeData {
  slug: string
  titleEn: string
  titleZh: string
  durationMinutes: number
  descriptionEn: string
  descriptionZh: string
  benefitsEn: string[]
  benefitsZh: string[]
  breathPattern: {
    inhale: number
    hold?: number
    exhale: number
  }
  totalCycles: number
  instructionsEn: string[]
  instructionsZh: string[]
}

export const practices: Record<string, PracticeData> = {
  'calm-breathing': {
    slug: 'calm-breathing',
    titleEn: 'Calm Breathing',
    titleZh: '平静呼吸',
    durationMinutes: 3,
    descriptionEn: 'Quick anxiety relief for stressful moments',
    descriptionZh: '快速缓解压力时刻的焦虑',
    benefitsEn: [
      'Reduces anxiety within 3 minutes',
      'Lowers cortisol levels',
      'Activates relaxation response',
      'Can be done anywhere'
    ],
    benefitsZh: [
      '3分钟内减少焦虑',
      '降低皮质醇水平',
      '激活放松反应',
      '随时随地可做'
    ],
    breathPattern: {
      inhale: 4,
      exhale: 6
    },
    totalCycles: 10,
    instructionsEn: [
      'Sit or lie comfortably',
      'Place one hand on your chest, one on your belly',
      'Breathe in slowly through your nose (4 counts)',
      'Breathe out slowly through your mouth (6 counts)',
      'Let your belly rise and fall naturally'
    ],
    instructionsZh: [
      '舒适地坐着或躺下',
      '一只手放在胸前，一只手放在腹部',
      '通过鼻子缓慢吸气（4下）',
      '通过嘴巴缓慢呼气（6下）',
      '让腹部自然起伏'
    ]
  },
  'gratitude-breathing': {
    slug: 'gratitude-breathing',
    titleEn: 'Gratitude Breathing',
    titleZh: '感恩呼吸',
    durationMinutes: 5,
    descriptionEn: 'Start your day with positive intention',
    descriptionZh: '用积极的意图开始新的一天',
    benefitsEn: [
      'Cultivates positive mindset',
      'Reduces depression symptoms',
      'Improves emotional resilience',
      'Perfect for morning practice'
    ],
    benefitsZh: [
      '培养积极心态',
      '减少抑郁症状',
      '提升情绪韧性',
      '适合晨间练习'
    ],
    breathPattern: {
      inhale: 4,
      hold: 2,
      exhale: 6
    },
    totalCycles: 12,
    instructionsEn: [
      'Find a quiet space to sit',
      'Close your eyes gently',
      'With each inhale, think of something you\'re grateful for',
      'With each exhale, release any negativity',
      'Let gratitude fill your heart'
    ],
    instructionsZh: [
      '找一个安静的空间坐下',
      '轻轻闭上眼睛',
      '每次吸气时，想一件您感恩的事',
      '每次呼气时，释放任何负面情绪',
      '让感恩充满您的心'
    ]
  },
  'loving-breath': {
    slug: 'loving-breath',
    titleEn: 'Loving-Breath Meditation',
    titleZh: '爱的呼吸法',
    durationMinutes: 7,
    descriptionEn: 'Connect with hope during the waiting period',
    descriptionZh: '在等待期间与希望连接',
    benefitsEn: [
      'Reduces transfer anxiety',
      'Promotes emotional connection',
      'Supports peaceful waiting',
      'Ideal for post-transfer period'
    ],
    benefitsZh: [
      '减少移植焦虑',
      '促进情感连接',
      '支持平和等待',
      '适合移植后时期'
    ],
    breathPattern: {
      inhale: 5,
      hold: 2,
      exhale: 5
    },
    totalCycles: 15,
    instructionsEn: [
      'Sit or lie in a comfortable position',
      'Place both hands gently on your lower abdomen',
      'Breathe in warmth, light, and love',
      'Hold gently, feeling warmth fill you',
      'Breathe out worry and tension'
    ],
    instructionsZh: [
      '舒适地坐着或躺下',
      '双手轻轻放在下腹部',
      '吸入温暖、光明和爱',
      '轻轻屏息，感受温暖充满您',
      '呼出担忧和紧张'
    ]
  },
  'bedtime-relaxation': {
    slug: 'bedtime-relaxation',
    titleEn: 'Bedtime Relaxation',
    titleZh: '睡前放松',
    durationMinutes: 20,
    descriptionEn: 'Progressive relaxation for deep sleep',
    descriptionZh: '渐进式放松促进深度睡眠',
    benefitsEn: [
      'Improves sleep quality',
      'Reduces insomnia',
      'Releases physical tension',
      'Perfect before bed'
    ],
    benefitsZh: [
      '改善睡眠质量',
      '减少失眠',
      '释放身体紧张',
      '适合睡前练习'
    ],
    breathPattern: {
      inhale: 4,
      exhale: 6
    },
    totalCycles: 20,
    instructionsEn: [
      'Lie in bed, ready for sleep',
      'Close your eyes',
      'Breathe slowly and deeply',
      'Let each exhale release the day\'s tension',
      'Allow yourself to drift into sleep'
    ],
    instructionsZh: [
      '躺在床上，准备睡眠',
      '闭上眼睛',
      '缓慢深呼吸',
      '让每次呼气释放一天的紧张',
      '允许自己进入睡眠'
    ]
  },
  'focused-breathing': {
    slug: 'focused-breathing',
    titleEn: 'Focused Breathing',
    titleZh: '专注呼吸',
    durationMinutes: 10,
    descriptionEn: 'Build concentration and mental clarity',
    descriptionZh: '建立专注力和心理清晰度',
    benefitsEn: [
      'Improves focus and concentration',
      'Calms racing thoughts',
      'Enhances mental clarity',
      'Strengthens mindfulness'
    ],
    benefitsZh: [
      '提升专注力和集中力',
      '平静混乱思绪',
      '增强心理清晰度',
      '加强正念'
    ],
    breathPattern: {
      inhale: 4,
      hold: 4,
      exhale: 4
    },
    totalCycles: 20,
    instructionsEn: [
      'Sit in a comfortable upright position',
      'Keep your spine straight',
      'Focus all attention on your breath',
      'Count each breath cycle',
      'Gently return focus when mind wanders'
    ],
    instructionsZh: [
      '舒适地直立坐着',
      '保持脊柱挺直',
      '将全部注意力集中在呼吸上',
      '数每个呼吸循环',
      '思绪游离时温柔地将注意力带回'
    ]
  },
  'body-mind-balance': {
    slug: 'body-mind-balance',
    titleEn: 'Body-Mind Balance',
    titleZh: '身心调适',
    durationMinutes: 15,
    descriptionEn: 'Harmonize body and mind for overall wellness',
    descriptionZh: '协调身心达到整体健康',
    benefitsEn: [
      'Balances nervous system',
      'Reduces stress and tension',
      'Improves body awareness',
      'Supports holistic wellness'
    ],
    benefitsZh: [
      '平衡神经系统',
      '减少压力和紧张',
      '提升身体觉察',
      '支持整体健康'
    ],
    breathPattern: {
      inhale: 5,
      hold: 5,
      exhale: 5
    },
    totalCycles: 18,
    instructionsEn: [
      'Sit comfortably with good posture',
      'Scan your body for areas of tension',
      'Breathe into areas of tightness',
      'Release tension with each exhale',
      'Feel balance returning to your system'
    ],
    instructionsZh: [
      '舒适地坐着，保持良好姿势',
      '扫描身体找到紧张区域',
      '向紧张区域呼吸',
      '每次呼气时释放紧张',
      '感受平衡回归您的系统'
    ]
  }
}
