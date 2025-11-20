import { BreathingExercise } from '@/components/BreathingExercise'
import { practices } from '@/lib/practice-data'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Loving-Breath Meditation - IVY Fertility',
  description: 'A 7-minute meditation practice for the post-transfer waiting period to nurture hope and connection.'
}

export default function LovingBreathPage() {
  const practice = practices['loving-breath']

  if (!practice) {
    notFound()
  }

  return <BreathingExercise practice={practice} />
}
