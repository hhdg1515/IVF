'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'

interface TimelineStep {
  step: number
  title: string
  duration: string
  description: string
}

interface ProcessTimelineProps {
  steps: TimelineStep[]
  className?: string
}

function TimelineItem({
  step,
  idx,
  isEven,
}: {
  step: TimelineStep
  idx: number
  isEven: boolean
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const hasEntered = useInView(ref, { amount: 0.2, once: true })
  const isActive = useInView(ref, { amount: 0.35 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: idx * 0.08 }}
    >
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-12">
        <div className="absolute left-6 top-1 z-10 md:left-1/2 md:-translate-x-1/2">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-[#a63655]/3 animate-gentle-pulse" />
            <div
              className={cn(
                'relative flex h-12 w-12 items-center justify-center rounded-full bg-[#a63655] text-white text-lg font-semibold',
                isActive
                  ? 'shadow-[0_8px_18px_rgba(166,54,85,0.14)]'
                  : 'shadow-[0_4px_14px_rgba(166,54,85,0.1)]'
              )}
            >
              {step.step}
            </div>
          </div>
        </div>

        <div className={cn('pl-20 md:pl-0', isEven ? 'md:pr-10' : 'md:col-start-2 md:pl-10')}>
          <Card
            className={cn(
              'px-6 py-6 md:px-8 md:py-8 transition-shadow',
              isActive && 'shadow-[0_16px_30px_rgba(166,54,85,0.08)] ring-1 ring-[rgba(166,54,85,0.08)]'
            )}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f7ebe5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a63655]">
              <span>{`Step ${step.step}`}</span>
              <span className="h-1 w-1 rounded-full bg-[#a63655]/50" />
              <span>{step.duration}</span>
            </div>
            <h3 className="mt-4 text-2xl font-medium text-[#2f2b33]">
              {step.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5a555d]">
              {step.description}
            </p>
          </Card>
        </div>

        {isEven ? (
          <div className="hidden md:block" />
        ) : (
          <div className="hidden md:block md:col-start-1 md:row-start-1" />
        )}
      </div>
    </motion.div>
  )
}

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  return (
    <div className={cn('relative', className)}>
      <div
        className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#c86b79]/10 via-[#a63655]/20 to-[#c86b79]/10 md:left-1/2 md:-translate-x-px"
        aria-hidden="true"
      />

      <div className="space-y-12 md:space-y-16">
        {steps.map((step, idx) => (
          <TimelineItem key={step.step} step={step} idx={idx} isEven={idx % 2 === 0} />
        ))}
      </div>
    </div>
  )
}
