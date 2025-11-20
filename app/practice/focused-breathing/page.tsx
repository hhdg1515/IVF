import { BreathingExercise } from '@/components/BreathingExercise'
import { practices } from '@/lib/practice-data'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Focused Breathing Practice - IVY Fertility',
  description: 'A 10-minute breathing practice to build concentration and mental clarity during fertility treatment.'
}

export default function FocusedBreathingPage() {
  const practice = practices['focused-breathing']

  if (!practice) {
    notFound()
  }

  return <BreathingExercise practice={practice} />
}
