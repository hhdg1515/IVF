'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface Question {
  id: number
  textEn: string
  textZh: string
}

const questions: Question[] = [
  {
    id: 1,
    textEn: 'Feeling nervous, anxious, or on edge',
    textZh: '感到紧张、焦虑或急躁',
  },
  {
    id: 2,
    textEn: 'Not being able to stop or control worrying',
    textZh: '无法停止或控制担忧',
  },
  {
    id: 3,
    textEn: 'Worrying too much about different things',
    textZh: '对各种各样的事情担忧过多',
  },
  {
    id: 4,
    textEn: 'Trouble relaxing',
    textZh: '难以放松',
  },
  {
    id: 5,
    textEn: 'Being so restless that it is hard to sit still',
    textZh: '烦躁不安，难以静坐',
  },
  {
    id: 6,
    textEn: 'Becoming easily annoyed or irritable',
    textZh: '容易烦恼或易怒',
  },
  {
    id: 7,
    textEn: 'Feeling afraid, as if something awful might happen',
    textZh: '感到害怕，好像可怕的事要发生',
  },
]

const options = [
  { value: 0, labelEn: 'Not at all', labelZh: '完全不会' },
  { value: 1, labelEn: 'Several days', labelZh: '几天' },
  { value: 2, labelEn: 'More than half the days', labelZh: '超过一半的天数' },
  { value: 3, labelEn: 'Nearly every day', labelZh: '几乎每天' },
]

interface ResultInterpretation {
  level: string
  levelZh: string
  color: string
  bgColor: string
  descriptionEn: string
  descriptionZh: string
  recommendationEn: string
  recommendationZh: string
}

function getResultInterpretation(score: number): ResultInterpretation {
  if (score >= 0 && score <= 4) {
    return {
      level: 'Minimal Anxiety',
      levelZh: '轻微焦虑',
      color: 'text-green-700',
      bgColor: 'bg-green-50 border-green-200',
      descriptionEn: 'Your responses suggest minimal anxiety symptoms. This is within the normal range.',
      descriptionZh: '您的回答表明焦虑症状轻微，处于正常范围内。',
      recommendationEn: 'Continue with your current wellness practices. The breathing exercises and relaxation techniques on this site can help maintain your emotional balance during your fertility journey.',
      recommendationZh: '继续保持当前的身心健康习惯。本站的呼吸练习和放松技巧可以帮助您在生育旅程中保持情绪平衡。',
    }
  } else if (score >= 5 && score <= 9) {
    return {
      level: 'Mild Anxiety',
      levelZh: '轻度焦虑',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50 border-yellow-200',
      descriptionEn: 'Your responses suggest mild anxiety symptoms. Many people going through fertility treatment experience this level of anxiety.',
      descriptionZh: '您的回答表明有轻度焦虑症状。许多接受生育治疗的人都会经历这种程度的焦虑。',
      recommendationEn: 'Consider incorporating daily relaxation practices into your routine. Our guided breathing exercises, especially the 3-minute calm breathing and gratitude practices, may be particularly helpful. If symptoms persist or worsen, consider discussing this with your care team.',
      recommendationZh: '建议将日常放松练习纳入您的作息。我们的引导式呼吸练习，尤其是3分钟平静呼吸法和感恩练习，可能会特别有帮助。如果症状持续或恶化，建议与您的护理团队讨论。',
    }
  } else if (score >= 10 && score <= 14) {
    return {
      level: 'Moderate Anxiety',
      levelZh: '中度焦虑',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50 border-orange-200',
      descriptionEn: 'Your responses suggest moderate anxiety symptoms. This level of anxiety can significantly impact your daily life and fertility journey.',
      descriptionZh: '您的回答表明有中度焦虑症状。这种程度的焦虑可能会严重影响您的日常生活和生育旅程。',
      recommendationEn: 'We recommend discussing these feelings with your IVY care team. They can connect you with our integrative wellness specialists who provide counseling and mind-body support specifically designed for fertility patients. Regular practice of our bedtime relaxation and body-mind balance exercises may also provide relief.',
      recommendationZh: '我们建议您与 IVY 护理团队讨论这些感受。他们可以为您联系我们的整合健康专家，提供专为生育患者设计的心理咨询和身心支持。定期练习我们的睡前放松和身心平衡练习也可能会有所帮助。',
    }
  } else {
    return {
      level: 'Severe Anxiety',
      levelZh: '重度焦虑',
      color: 'text-red-700',
      bgColor: 'bg-red-50 border-red-200',
      descriptionEn: 'Your responses suggest severe anxiety symptoms. This level of anxiety requires professional support.',
      descriptionZh: '您的回答表明有重度焦虑症状。这种程度的焦虑需要专业支持。',
      recommendationEn: 'Please reach out to your IVY care team as soon as possible. They can provide immediate support and connect you with mental health professionals who specialize in fertility-related anxiety. You are not alone, and support is available. In the meantime, our loving-breath meditation and focused breathing practices may offer some immediate comfort.',
      recommendationZh: '请尽快联系您的 IVY 护理团队。他们可以提供即时支持，并为您联系专门处理生育相关焦虑的心理健康专家。您并不孤单，我们随时提供支持。同时，我们的爱的呼吸冥想和专注呼吸练习可能会提供一些即时的安慰。',
    }
  }
}

export function GAD7Assessment() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0)
  }

  const allQuestionsAnswered = questions.every((q) => answers[q.id] !== undefined)

  const handleSubmit = () => {
    if (allQuestionsAnswered) {
      setShowResults(true)
    }
  }

  const handleReset = () => {
    setAnswers({})
    setShowResults(false)
    setIsStarted(false)
  }

  const handleRetest = () => {
    setAnswers({})
    setShowResults(false)
  }

  if (!isStarted) {
    return (
      <Card className="max-w-3xl mx-auto px-8 py-10">
        <div className="text-center space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
            <svg className="h-8 w-8 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif text-[#2f2b33]">
            {isEn ? 'GAD-7 Anxiety Assessment' : 'GAD-7 焦虑评估'}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#5a555d]">
            <p>
              {isEn
                ? 'The GAD-7 (Generalized Anxiety Disorder-7) is a validated screening tool used by healthcare professionals to assess anxiety symptoms.'
                : 'GAD-7（广泛性焦虑障碍-7）是医疗专业人员用来评估焦虑症状的经过验证的筛查工具。'}
            </p>
            <p>
              {isEn
                ? 'This assessment takes about 2 minutes and asks about your experiences over the past two weeks. Your responses are completely private and are not stored or shared.'
                : '此评估大约需要 2 分钟，询问您过去两周的经历。您的回答完全私密，不会被存储或分享。'}
            </p>
            <div className="bg-[#f7ebe5] border border-[#e2d0c1] rounded-lg p-4 text-left">
              <p className="font-medium text-[#a63655]">
                {isEn ? 'Important Note:' : '重要提示：'}
              </p>
              <p className="mt-2 text-[14px]">
                {isEn
                  ? 'This is a screening tool, not a diagnostic test. If you have concerns about your mental health, please discuss the results with your IVY care team or a mental health professional.'
                  : '这是一个筛查工具，而不是诊断测试。如果您对自己的心理健康有疑虑，请与您的 IVY 护理团队或心理健康专业人员讨论结果。'}
              </p>
            </div>
          </div>
          <Button onClick={() => setIsStarted(true)} variant="primary" size="lg">
            {isEn ? 'Start Assessment' : '开始评估'}
          </Button>
        </div>
      </Card>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const interpretation = getResultInterpretation(score)

    return (
      <Card className="max-w-3xl mx-auto px-8 py-10">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f7ebe5] border-2 border-[#e2d0c1]">
              <svg className="h-8 w-8 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mt-4 text-3xl font-serif text-[#2f2b33]">
              {isEn ? 'Your Results' : '您的结果'}
            </h2>
          </div>

          {/* Score Display */}
          <div className="text-center">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl font-serif text-[#a63655]">{score}</span>
              <span className="text-2xl text-[#5a555d]">/ 21</span>
            </div>
            <div className={`mt-4 text-2xl font-medium ${interpretation.color}`}>
              {isEn ? interpretation.level : interpretation.levelZh}
            </div>
          </div>

          {/* Interpretation */}
          <div className={`border-2 rounded-lg p-6 ${interpretation.bgColor}`}>
            <h3 className="text-lg font-medium text-[#2f2b33] mb-3">
              {isEn ? 'What this means:' : '这意味着什么：'}
            </h3>
            <p className="text-[15px] leading-relaxed text-[#5a555d] mb-4">
              {isEn ? interpretation.descriptionEn : interpretation.descriptionZh}
            </p>
            <h3 className="text-lg font-medium text-[#2f2b33] mb-3">
              {isEn ? 'Recommended next steps:' : '建议的下一步行动：'}
            </h3>
            <p className="text-[15px] leading-relaxed text-[#5a555d]">
              {isEn ? interpretation.recommendationEn : interpretation.recommendationZh}
            </p>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white border-2 border-[#e2d0c1] rounded-lg p-6">
            <h3 className="text-lg font-medium text-[#2f2b33] mb-4">
              {isEn ? 'Helpful Resources on This Site:' : '本站有用资源：'}
            </h3>
            <div className="space-y-3">
              <a href="/practice/calm-breathing" className="block group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f7ebe5] transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f7ebe5] flex items-center justify-center group-hover:bg-white">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? '3-Minute Calm Breathing' : '3分钟平静呼吸法'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Quick anxiety relief exercise' : '快速缓解焦虑的练习'}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="/practice/gratitude-breathing" className="block group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f7ebe5] transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f7ebe5] flex items-center justify-center group-hover:bg-white">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? 'Gratitude Breathing Practice' : '感恩呼吸练习'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Cultivate positive mindset' : '培养积极心态'}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="/practice/bedtime-relaxation" className="block group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f7ebe5] transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f7ebe5] flex items-center justify-center group-hover:bg-white">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? 'Bedtime Relaxation' : '睡前放松练习'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Improve sleep quality' : '改善睡眠质量'}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={handleRetest} variant="primary" size="lg">
              {isEn ? 'Take Assessment Again' : '重新测试'}
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg">
              {isEn ? 'Back to Start' : '返回开始'}
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-[13px] text-[#5a555d] border-t border-[#e2d0c1] pt-6">
            <p>
              {isEn
                ? 'This assessment is for informational purposes only and does not constitute medical advice. Please consult with your healthcare provider for personalized guidance.'
                : '此评估仅供参考，不构成医疗建议。请咨询您的医疗保健提供者以获得个性化指导。'}
            </p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Progress indicator */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b-2 border-[#e2d0c1] pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#5a555d]">
            {isEn ? 'Progress' : '进度'}
          </span>
          <span className="text-sm font-medium text-[#a63655]">
            {Object.keys(answers).length} / {questions.length}
          </span>
        </div>
        <div className="h-2 bg-[#f7ebe5] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#c86b79] to-[#a63655] transition-all duration-300 ease-out"
            style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Instructions */}
      <Card className="px-6 py-5 bg-[#f7ebe5] border-[#e2d0c1]">
        <p className="text-[15px] text-[#2f2b33] font-medium">
          {isEn
            ? 'Over the last 2 weeks, how often have you been bothered by the following problems?'
            : '在过去的 2 周里，以下问题困扰您的频率如何？'}
        </p>
      </Card>

      {/* Questions */}
      {questions.map((question, idx) => (
        <Card key={question.id} className="px-6 py-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7ebe5] text-[#a63655] font-semibold text-sm">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-medium text-[#2f2b33]">
                  {isEn ? question.textEn : question.textZh}
                </h3>
              </div>
            </div>

            <div className="pl-12 space-y-2">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    answers[question.id] === option.value
                      ? 'border-[#a63655] bg-[#f7ebe5]'
                      : 'border-[#e2d0c1] hover:border-[#c86b79] hover:bg-[#fdf7f2]'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={answers[question.id] === option.value}
                    onChange={() => handleAnswer(question.id, option.value)}
                    className="h-5 w-5 text-[#a63655] border-[#e2d0c1] focus:ring-[#a63655]"
                  />
                  <span className="text-[15px] text-[#2f2b33]">
                    {isEn ? option.labelEn : option.labelZh}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </Card>
      ))}

      {/* Submit Button */}
      <div className="flex justify-center gap-4 pb-12">
        <Button onClick={handleReset} variant="outline" size="lg">
          {isEn ? 'Reset' : '重置'}
        </Button>
        <Button
          onClick={handleSubmit}
          variant="primary"
          size="lg"
          disabled={!allQuestionsAnswered}
        >
          {isEn ? 'View Results' : '查看结果'}
        </Button>
      </div>
    </div>
  )
}
