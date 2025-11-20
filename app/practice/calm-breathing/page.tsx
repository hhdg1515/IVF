import { BreathingExercise } from '@/components/BreathingExercise'
import { practices } from '@/lib/practice-data'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Calm Breathing Practice - IVY Fertility',
  description: 'A 3-minute breathing exercise to quickly reduce anxiety during fertility treatment.'
}

export default function CalmBreathingPage() {
  const practice = practices['calm-breathing']

  if (!practice) {
    notFound()
  }

  return <BreathingExercise practice={practice} />
}
