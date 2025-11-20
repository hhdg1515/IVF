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
    textEn: 'I have so much in life to be thankful for',
    textZh: '我的生活中有很多值得感恩的事',
  },
  {
    id: 2,
    textEn: 'If I had to list everything that I felt grateful for, it would be a very long list',
    textZh: '如果让我列出所有感恩的事，那会是一个很长的清单',
  },
  {
    id: 3,
    textEn: 'When I look at the world, I don\'t see much to be grateful for',
    textZh: '当我看这个世界时，我看不到太多值得感恩的东西',
  },
  {
    id: 4,
    textEn: 'I am grateful to a wide variety of people',
    textZh: '我对各种各样的人心怀感激',
  },
  {
    id: 5,
    textEn: 'As I get older I find myself more able to appreciate the people, events, and situations that have been part of my life history',
    textZh: '随着年龄增长，我发现自己更能欣赏生命中出现过的人、事和情境',
  },
  {
    id: 6,
    textEn: 'Long amounts of time can go by before I feel grateful to something or someone',
    textZh: '很长时间过去我才会对某事或某人感到感激',
  },
]

const options = [
  { value: 7, labelEn: 'Strongly agree', labelZh: '非常同意' },
  { value: 6, labelEn: 'Agree', labelZh: '同意' },
  { value: 5, labelEn: 'Slightly agree', labelZh: '有点同意' },
  { value: 4, labelEn: 'Neutral', labelZh: '中立' },
  { value: 3, labelEn: 'Slightly disagree', labelZh: '有点不同意' },
  { value: 2, labelEn: 'Disagree', labelZh: '不同意' },
  { value: 1, labelEn: 'Strongly disagree', labelZh: '非常不同意' },
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
  if (score >= 35) {
    return {
      level: 'High Gratitude',
      levelZh: '高感恩倾向',
      color: 'text-green-700',
      bgColor: 'bg-green-50 border-green-200',
      descriptionEn: 'You have a strong sense of gratitude and appreciation for life. This is a powerful protective factor for mental health.',
      descriptionZh: '您有很强的感恩意识和对生活的欣赏能力。这是心理健康的强大保护因素。',
      recommendationEn: 'Your gratitude orientation is a valuable strength during your fertility journey. Continue cultivating this positive mindset through our gratitude breathing practice, which can help you maintain resilience during challenging moments. Consider keeping a gratitude journal to deepen this practice.',
      recommendationZh: '您的感恩倾向是生育旅程中的宝贵优势。通过我们的感恩呼吸练习继续培养这种积极心态，可以帮助您在困难时刻保持韧性。建议写感恩日记来深化这种练习。',
    }
  } else if (score >= 30) {
    return {
      level: 'Moderate Gratitude',
      levelZh: '中等感恩倾向',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50 border-yellow-200',
      descriptionEn: 'You experience gratitude at a moderate level. There is opportunity to strengthen this valuable emotional skill.',
      descriptionZh: '您的感恩水平处于中等程度。有机会加强这种宝贵的情感技能。',
      recommendationEn: 'Building your gratitude practice can significantly improve your well-being during fertility treatment. Try our guided gratitude breathing exercise daily for 2 weeks and notice the shifts in your perspective. Small daily practices like noting three things you\'re grateful for can make a meaningful difference.',
      recommendationZh: '培养感恩练习可以显著改善您在生育治疗期间的幸福感。尝试每天进行我们的引导式感恩呼吸练习，持续2周，注意视角的转变。每天记下三件感恩的事等小练习可以带来有意义的改变。',
    }
  } else {
    return {
      level: 'Lower Gratitude',
      levelZh: '较低感恩倾向',
      color: 'text-orange-700',
      bgColor: 'bg-orange-50 border-orange-200',
      descriptionEn: 'Your gratitude score suggests this is an area where focused practice could be particularly beneficial for your well-being.',
      descriptionZh: '您的感恩评分表明，在这个领域进行针对性练习可能对您的幸福感特别有益。',
      recommendationEn: 'Gratitude is a skill that can be developed with practice. Start small with our 5-minute gratitude breathing exercise. During fertility treatment, it\'s normal to feel overwhelmed by challenges, but intentionally noticing small positive moments can help shift your emotional balance. Consider discussing gratitude practices with your IVY wellness specialist.',
      recommendationZh: '感恩是一种可以通过练习培养的技能。从我们的5分钟感恩呼吸练习开始。在生育治疗期间，感到被挑战压倒是正常的，但有意识地注意小的积极时刻可以帮助转变情绪平衡。建议与您的 IVY 健康专家讨论感恩练习。',
    }
  }
}

export function GQ6Assessment() {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateScore = () => {
    let total = 0
    // Items 3 and 6 are reverse-scored
    Object.entries(answers).forEach(([id, value]) => {
      const questionId = parseInt(id)
      if (questionId === 3 || questionId === 6) {
        total += 8 - value // Reverse scoring
      } else {
        total += value
      }
    })
    return total
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif text-[#2f2b33]">
            {isEn ? 'GQ-6 Gratitude Assessment' : 'GQ-6 感恩量表'}
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#5a555d]">
            <p>
              {isEn
                ? 'The Gratitude Questionnaire (GQ-6) is a scientifically validated tool that measures your tendency to experience gratitude in daily life. Research shows that people with higher gratitude levels report better mental health, stronger relationships, and greater life satisfaction.'
                : '感恩问卷（GQ-6）是一个经科学验证的工具，用于测量您在日常生活中体验感恩的倾向。研究表明，感恩水平较高的人心理健康状况更好、人际关系更牢固、生活满意度更高。'}
            </p>
            <p>
              {isEn
                ? 'This assessment takes about 2 minutes and helps you understand your current gratitude orientation. Your responses are completely private and are not stored or shared.'
                : '此评估大约需要 2 分钟，帮助您了解当前的感恩倾向。您的回答完全私密，不会被存储或分享。'}
            </p>
            <div className="bg-[#f7ebe5] border border-[#e2d0c1] rounded-lg p-4 text-left">
              <p className="font-medium text-[#a63655]">
                {isEn ? 'Why gratitude matters in fertility care:' : '感恩在生育护理中的重要性：'}
              </p>
              <p className="mt-2 text-[14px]">
                {isEn
                  ? 'Fertility treatment can be emotionally demanding. Cultivating gratitude has been shown to reduce stress, improve emotional resilience, and enhance overall treatment experience. Understanding your gratitude baseline can help you identify opportunities for growth.'
                  : '生育治疗可能对情绪要求很高。培养感恩已被证明可以减轻压力、提高情绪韧性并改善整体治疗体验。了解您的感恩基线可以帮助您识别成长机会。'}
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
              {isEn ? 'Your Gratitude Results' : '您的感恩评估结果'}
            </h2>
          </div>

          {/* Score Display */}
          <div className="text-center">
            <div className="inline-flex items-baseline gap-2">
              <span className="text-6xl font-serif text-[#a63655]">{score}</span>
              <span className="text-2xl text-[#5a555d]">/ 42</span>
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

          {/* Gratitude Building Tips */}
          <div className="bg-[#f7ebe5] border-2 border-[#e2d0c1] rounded-lg p-6">
            <h3 className="text-lg font-medium text-[#2f2b33] mb-4">
              {isEn ? 'Evidence-Based Gratitude Practices:' : '基于证据的感恩练习：'}
            </h3>
            <div className="space-y-4 text-[14px] text-[#5a555d]">
              <div className="flex gap-3">
                <span className="text-[#a63655] mt-1">✓</span>
                <div>
                  <span className="font-medium text-[#2f2b33]">
                    {isEn ? 'Daily Three Good Things:' : '每日三件好事：'}
                  </span>{' '}
                  {isEn
                    ? 'Each evening, write down three things that went well and why they happened.'
                    : '每天晚上，写下三件顺利的事情以及它们发生的原因。'}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#a63655] mt-1">✓</span>
                <div>
                  <span className="font-medium text-[#2f2b33]">
                    {isEn ? 'Gratitude Letter:' : '感恩信：'}
                  </span>{' '}
                  {isEn
                    ? 'Write a letter to someone who has positively impacted your life (you don\'t have to send it).'
                    : '给对您生活产生积极影响的人写一封信（不一定要寄出）。'}
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-[#a63655] mt-1">✓</span>
                <div>
                  <span className="font-medium text-[#2f2b33]">
                    {isEn ? 'Mindful Appreciation:' : '正念欣赏：'}
                  </span>{' '}
                  {isEn
                    ? 'During daily activities, pause to notice and appreciate small positive details.'
                    : '在日常活动中，暂停片刻，注意并欣赏小的积极细节。'}
                </div>
              </div>
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="bg-white border-2 border-[#e2d0c1] rounded-lg p-6">
            <h3 className="text-lg font-medium text-[#2f2b33] mb-4">
              {isEn ? 'Gratitude Practices on This Site:' : '本站的感恩练习：'}
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
                      {isEn ? 'Gratitude Breathing (5 min)' : '感恩呼吸（5分钟）'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Guided practice to cultivate appreciation' : '引导式练习培养感恩心'}
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
                      {isEn ? 'Loving-Kindness Meditation (8 min)' : '爱的呼吸冥想（8分钟）'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Develop compassion and appreciation' : '培养关爱和感恩'}
                    </div>
                  </div>
                  <svg className="h-5 w-5 text-[#c86b79]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a href="/blog/gratitude-practice" className="block group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f7ebe5] transition-colors">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#f7ebe5] flex items-center justify-center group-hover:bg-white">
                    <svg className="h-5 w-5 text-[#a63655]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[15px] font-medium text-[#a63655]">
                      {isEn ? 'Gratitude Practice Guide' : '感恩练习指南'}
                    </div>
                    <div className="text-[13px] text-[#5a555d]">
                      {isEn ? 'Learn the science and techniques' : '学习科学原理和技巧'}
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
                ? 'This assessment is for informational and self-reflection purposes. Gratitude is a skill that can be developed through regular practice, regardless of your starting point.'
                : '此评估仅用于信息和自我反思目的。无论起点如何，感恩都是一种可以通过定期练习培养的技能。'}
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
            ? 'Using the scale below, indicate how much you agree with each statement:'
            : '使用以下量表，表明您对每个陈述的同意程度：'}
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
