import { BreathingExercise } from '@/components/BreathingExercise'
import { practices } from '@/lib/practice-data'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Gratitude Breathing Practice - IVY Fertility',
  description: 'A 5-minute breathing practice to cultivate gratitude and positive mindset during fertility treatment.'
}

export default function GratitudeBreathingPage() {
  const practice = practices['gratitude-breathing']

  if (!practice) {
    notFound()
  }

  return <BreathingExercise practice={practice} />
}
