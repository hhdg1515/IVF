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
    textEn: 'I have felt cheerful and in good spirits',
    textZh: '我感到愉快，心情很好',
  },
  {
    id: 2,
    textEn: 'I have felt calm and relaxed',
    textZh: '我感到平静和放松',
  },
  {
    id: 3,
    textEn: 'I have felt active and vigorous',
    textZh: '我感到精力充沛、活力十足',
  },
  {
    id: 4,
    textEn: 'I woke up feeling fresh and rested',
    textZh: '我醒来时感到清新和休息充足',
  },
  {
    id: 5,
    textEn: 'My daily life has been filled with things that interest me',
    textZh: '我的日常生活充满了令我感兴趣的事情',
  },
]

const options = [
  { value: 5, labelEn: 'All of the time', labelZh: '所有时间' },
  { value: 4, labelEn: 'Most of the time', labelZh: '大部分时间' },
  { value: 3, labelEn: 'More than half of the time', labelZh: '超过一半时间' },
  { value: 2, labelEn: 'Less than half of the time', labelZh: '少于一半时间' },
  { value: 1, labelEn: 'Some of the time', labelZh: '部分时间' },
  { value: 0, labelEn: 'At no time', labelZh: '从不' },
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

function getResultInterpretation(score: number, percentage: number): ResultInterpretation {
  if (percentage >= 68) {
    return {
      level: 'Good Well-Being',
      levelZh: '良好的幸福感',
      color: 'text-green-700',
      bgColor: 'bg-green-50 border-green-200',
      descriptionEn: 'Your well-being score suggests you are experiencing good mental health and quality of life.',
      descriptionZh: '您的幸福感评分表明您正在体验良好的心理健康和生活质量。',
      recommendationEn: 'Continue maintaining your current lifestyle and wellness practices. The breathing exercises and gratitude practices on this site can help sustain your positive well-being during your fertility journey.',
      recommendationZh: '继续保持您当前的生活方式和健康习惯。本站的呼吸练习和感恩练习可以帮助您在生育旅程中保持积极的幸福感。',
    }
  } else if (percentage >= 52) {
    return {
      level: 'Moderate Well-Being',
      levelZh: '中等幸福感',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50 border-yellow-200',
      descriptionEn: 'Your well-being score suggests moderate mental health. There is room for improvement in your overall quality of life.',
      descriptionZh: '您的幸福感评分表明心理健康状况中等。您的整体生活质量有改善空间。',
      recommendationEn: 'Consider incorporating more wellness activities into your daily routine. Our guided breathing practices, especially gratitude breathing and body-mind balance exercises, may help improve your overall well-being. If you\'re undergoing fertility treatment, discuss stress management strategies with your care team.',
      recommendationZh: '建议在日常生活中加入更多健康活动。我们的引导式呼吸练习，尤其是感恩呼吸和身心平衡练习，可能有助于提高您的整体幸福感。如果您正在接受生育治疗，请与护理团队讨论压力管理策略。',
    }
  } else {
    return {
      level: 'Low Well-Being',
      levelZh: '较低幸福感',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50 border-orange-200',
      descriptionEn: 'Your well-being score suggests lower than optimal mental health. This may indicate you could benefit from additional support.',
      descriptionZh: '您的幸福感评分表明心理健康状况低于最佳水平。这可能表明您需要额外的支持。',
      recommendationEn: 'We recommend discussing these results with your IVY care team. They can connect you with our integrative wellness specialists who provide personalized support for fertility patients. Consider taking the anxiety assessment if you haven\'t already, and explore our mind-body practices like loving-breath meditation and bedtime relaxation.',
      recommendationZh: '我们建议您与 IVY 护理团队讨论这些结果。他们可以为您联系我们的整合健康专家，为生育患者提供个性化支持。如果您还没有进行焦虑评估，请考虑进行，并探索我们的身心练习，如爱的呼吸冥想和睡前放松。',
    }
  }
}

export function WHO5Assessment() {
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif text-[#2f2b33]">
            {isEn ? 'WHO-5 Well-Being Index' : 'WHO-5 幸福感指数'}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#5a555d]">
            <p>
              {isEn
                ? 'The WHO-5 Well-Being Index is a short, globally recognized questionnaire developed by the World Health Organization to measure your current mental well-being and quality of life.'
                : 'WHO-5 幸福感指数是世界卫生组织开发的简短、全球公认的问卷，用于衡量您当前的心理健康和生活质量。'}
            </p>
            <p>
              {isEn
                ? 'This assessment takes about 1 minute and asks about your feelings over the past two weeks. Your responses are completely private and are not stored or shared.'
                : '此评估大约需要 1 分钟，询问您过去两周的感受。您的回答完全私密，不会被存储或分享。'}
            </p>
            <div className="bg-[#f7ebe5] border border-[#e2d0c1] rounded-lg p-4 text-left">
              <p className="font-medium text-[#a63655]">
                {isEn ? 'Why measure well-being?' : '为什么要测量幸福感？'}
              </p>
              <p className="mt-2 text-[14px]">
                {isEn
                  ? 'Understanding your overall well-being helps identify areas where you might benefit from additional support during your fertility journey. Higher well-being is associated with better treatment outcomes and quality of life.'
                  : '了解您的整体幸福感有助于确定在生育旅程中您可能需要额外支持的领域。更高的幸福感与更好的治疗结果和生活质量相关。'}
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
    const percentage = (score / 25) * 100
    const interpretation = getResultInterpretation(score, percentage)

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
              {isEn ? 'Your Well-Being Results' : '您的幸福感结果'}
            </h2>
          </div>

          {/* Score Display */}
          <div className="text-center">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl font-serif text-[#a63655]">{score}</span>
              <span className="text-2xl text-[#5a555d]">/ 25</span>
            </div>
            <div className="mt-2 text-lg text-[#5a555d]">
              ({percentage.toFixed(0)}%)
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
              {isEn ? 'Resources to Boost Your Well-Being:' : '提升幸福感的资源：'}
            </h3>
            <div className="space-y-3">
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
                      {isEn ? 'Cultivate appreciation and positive emotions' : '培养感恩和积极情绪'}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="/practice/body-mind-balance" className="block group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f7ebe5] transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f7ebe5] flex items-center justify-center group-hover:bg-white">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? 'Body-Mind Balance Practice' : '身心平衡练习'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Integrate physical and mental wellness' : '整合身体和心理健康'}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="/practice/loving-breath" className="block group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f7ebe5] transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f7ebe5] flex items-center justify-center group-hover:bg-white">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? 'Loving-Kindness Meditation' : '爱的呼吸冥想'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Develop compassion for yourself and others' : '培养对自己和他人的关爱'}
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
                ? 'This assessment is for informational purposes only and does not constitute medical advice. Scores below 13 may indicate poor well-being and warrant further evaluation by a healthcare professional.'
                : '此评估仅供参考，不构成医疗建议。得分低于 13 可能表明幸福感较差，需要医疗专业人员进一步评估。'}
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
            ? 'Over the last 2 weeks, how much of the time:'
            : '在过去的 2 周里，有多少时间：'}
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
