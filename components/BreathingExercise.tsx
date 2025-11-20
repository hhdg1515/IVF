'use client'

import { useState, useEffect, useCallback } from 'react'
import { useLanguage } from '@/lib/context'
import { Button } from '@/components/ui/Button'
import type { PracticeData } from '@/lib/practice-data'

interface BreathingExerciseProps {
  practice: PracticeData
}

type Phase = 'inhale' | 'hold' | 'exhale'

export function BreathingExercise({ practice }: BreathingExerciseProps) {
  const { currentLanguage } = useLanguage()
  const isEn = currentLanguage === 'en'

  const [isActive, setIsActive] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [currentCycle, setCurrentCycle] = useState(0)
  const [phase, setPhase] = useState<Phase>('inhale')
  const [phaseProgress, setPhaseProgress] = useState(0)
  const [totalElapsed, setTotalElapsed] = useState(0)

  const totalDuration = practice.durationMinutes * 60

  const getCurrentPhaseDuration = useCallback(() => {
    if (phase === 'inhale') return practice.breathPattern.inhale
    if (phase === 'hold') return practice.breathPattern.hold || 0
    return practice.breathPattern.exhale
  }, [phase, practice.breathPattern])

  const getPhaseText = () => {
    if (phase === 'inhale') return isEn ? 'Breathe In' : '吸气'
    if (phase === 'hold') return isEn ? 'Hold' : '屏息'
    return isEn ? 'Breathe Out' : '呼气'
  }

  const getPhaseInstruction = () => {
    const duration = getCurrentPhaseDuration()
    if (phase === 'inhale') {
      return isEn
        ? `Breathe in slowly through your nose... ${duration} seconds`
        : `通过鼻子缓慢吸气... ${duration} 秒`
    }
    if (phase === 'hold') {
      return isEn
        ? `Hold your breath gently... ${duration} seconds`
        : `轻轻屏息... ${duration} 秒`
    }
    return isEn
      ? `Breathe out slowly through your mouth... ${duration} seconds`
      : `通过嘴巴缓慢呼气... ${duration} 秒`
  }

  const getCircleScale = () => {
    const progress = phaseProgress / getCurrentPhaseDuration()
    if (phase === 'inhale') {
      return 0.5 + (progress * 0.5) // Scale from 0.5 to 1.0
    }
    if (phase === 'exhale') {
      return 1.0 - (progress * 0.5) // Scale from 1.0 to 0.5
    }
    return 1.0 // Hold at full size
  }

  useEffect(() => {
    if (!isActive || isCompleted) return

    const interval = setInterval(() => {
      setPhaseProgress(prev => {
        const newProgress = prev + 0.1
        const phaseDuration = getCurrentPhaseDuration()

        if (newProgress >= phaseDuration) {
          // Move to next phase
          if (phase === 'inhale') {
            setPhase(practice.breathPattern.hold ? 'hold' : 'exhale')
          } else if (phase === 'hold') {
            setPhase('exhale')
          } else {
            // Completed one cycle
            const nextCycle = currentCycle + 1
            if (nextCycle >= practice.totalCycles) {
              setIsCompleted(true)
              setIsActive(false)
              savePracticeCompletion()
            } else {
              setCurrentCycle(nextCycle)
              setPhase('inhale')
            }
          }
          return 0
        }

        return newProgress
      })

      setTotalElapsed(prev => {
        const newElapsed = prev + 0.1
        if (newElapsed >= totalDuration) {
          setIsCompleted(true)
          setIsActive(false)
          savePracticeCompletion()
        }
        return newElapsed
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isActive, isCompleted, phase, currentCycle, practice, getCurrentPhaseDuration, totalDuration])

  const savePracticeCompletion = () => {
    try {
      const logs = JSON.parse(localStorage.getItem('ivf_practice_logs') || '[]')
      logs.push({
        id: Date.now().toString(),
        practiceType: practice.slug,
        duration: practice.durationMinutes * 60,
        completedAt: new Date().toISOString()
      })
      localStorage.setItem('ivf_practice_logs', JSON.stringify(logs))
    } catch (error) {
      // Silent fail if localStorage is not available
    }
  }

  const handleStart = () => {
    setIsActive(true)
    setIsCompleted(false)
    setCurrentCycle(0)
    setPhase('inhale')
    setPhaseProgress(0)
    setTotalElapsed(0)
  }

  const handlePause = () => {
    setIsActive(false)
  }

  const handleResume = () => {
    setIsActive(true)
  }

  const handleReset = () => {
    setIsActive(false)
    setIsCompleted(false)
    setCurrentCycle(0)
    setPhase('inhale')
    setPhaseProgress(0)
    setTotalElapsed(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const circleScale = getCircleScale()

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f7ebe5] via-[#f3e0d8] to-[#f7ebe5] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-3xl font-semibold text-[#2f2b33] mb-4">
            {isEn ? 'Practice Complete!' : '练习完成！'}
          </h2>
          <p className="text-[17px] text-[#5a555d] mb-6">
            {isEn
              ? `You completed ${practice.durationMinutes} minutes of ${practice.titleEn}.`
              : `您完成了 ${practice.durationMinutes} 分钟的${practice.titleZh}练习。`}
          </p>
          <p className="text-[15px] text-[#8b858d] mb-8">
            {isEn
              ? 'How do you feel now?'
              : '此刻您感觉如何？'}
          </p>
          <div className="flex gap-3 justify-center mb-8">
            <button className="px-6 py-3 rounded-full bg-green-50 border-2 border-green-200 text-green-800 hover:bg-green-100 transition text-lg">
              😊
            </button>
            <button className="px-6 py-3 rounded-full bg-blue-50 border-2 border-blue-200 text-blue-800 hover:bg-blue-100 transition text-lg">
              😌
            </button>
            <button className="px-6 py-3 rounded-full bg-gray-50 border-2 border-gray-200 text-gray-800 hover:bg-gray-100 transition text-lg">
              😐
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={handleReset} className="flex-1">
              {isEn ? 'Practice Again' : '再练一次'}
            </Button>
            <Button variant="primary" onClick={() => window.location.href = '/blog'} className="flex-1">
              {isEn ? 'Explore More' : '探索更多'}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (!isActive && currentCycle === 0) {
    // Initial state - show introduction
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f7ebe5] via-[#f3e0d8] to-[#f7ebe5] flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-semibold text-[#2f2b33] mb-4">
            {isEn ? practice.titleEn : practice.titleZh}
          </h1>
          <p className="text-[18px] text-[#5a555d] mb-6">
            {isEn ? practice.descriptionEn : practice.descriptionZh}
          </p>

          <div className="bg-[#f7eee7] rounded-xl p-6 mb-6">
            <h3 className="text-[18px] font-semibold text-[#2f2b33] mb-4">
              {isEn ? '✓ Benefits' : '✓ 练习效果'}
            </h3>
            <ul className="space-y-2">
              {(isEn ? practice.benefitsEn : practice.benefitsZh).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[15px] text-[#5a555d]">
                  <span className="text-[#c86b79] mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-[#c86b79] pl-6 mb-8">
            <h3 className="text-[18px] font-semibold text-[#2f2b33] mb-4">
              {isEn ? '📝 Instructions' : '📝 练习步骤'}
            </h3>
            <ol className="space-y-2">
              {(isEn ? practice.instructionsEn : practice.instructionsZh).map((instruction, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15px] text-[#5a555d]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#a63655] text-white flex items-center justify-center text-[13px] font-semibold">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" onClick={handleStart} className="flex-1 text-lg py-4">
              {isEn ? '▶ Start Practice' : '▶ 开始练习'}
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()} className="flex-1">
              {isEn ? 'Back' : '返回'}
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[14px] text-[#8b858d]">
              {isEn ? `Duration: ${practice.durationMinutes} minutes` : `时长：${practice.durationMinutes} 分钟`}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Active practice state
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7ebe5] via-[#f3e0d8] to-[#f7ebe5] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-[14px] text-[#5a555d] mb-2">
            <span>{isEn ? 'Progress' : '进度'}</span>
            <span>{formatTime(totalElapsed)} / {formatTime(totalDuration)}</span>
          </div>
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#a63655] transition-all duration-300"
              style={{ width: `${(totalElapsed / totalDuration) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-[14px] text-[#5a555d]">
            {isEn ? 'Cycle' : '循环'} {currentCycle + 1} / {practice.totalCycles}
          </div>
        </div>

        {/* Breathing circle */}
        <div className="relative flex items-center justify-center mb-8" style={{ height: '400px' }}>
          <div
            className="absolute rounded-full bg-gradient-to-br from-[#a63655] to-[#c86b79] transition-transform duration-1000 ease-in-out"
            style={{
              width: '300px',
              height: '300px',
              transform: `scale(${circleScale})`,
              boxShadow: `0 0 ${40 * circleScale}px rgba(166, 54, 85, ${0.3 * circleScale})`
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="text-6xl font-bold text-white mb-4">
              {Math.ceil(getCurrentPhaseDuration() - phaseProgress)}
            </div>
            <div className="text-2xl font-semibold text-white mb-2">
              {getPhaseText()}
            </div>
            <div className="text-[15px] text-white/90 max-w-xs">
              {getPhaseInstruction()}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          {isActive ? (
            <>
              <Button variant="outline" onClick={handlePause} className="flex-1">
                {isEn ? '⏸ Pause' : '⏸ 暂停'}
              </Button>
              <Button variant="outline" onClick={handleReset} className="flex-1">
                {isEn ? '↺ Reset' : '↺ 重置'}
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={handleResume} className="flex-1">
                {isEn ? '▶ Resume' : '▶ 继续'}
              </Button>
              <Button variant="outline" onClick={handleReset} className="flex-1">
                {isEn ? '↺ Reset' : '↺ 重置'}
              </Button>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[13px] text-[#8b858d]">
            {isEn
              ? 'Close your eyes and focus on your breath'
              : '闭上眼睛，专注于您的呼吸'}
          </p>
        </div>
      </div>
    </div>
  )
}
