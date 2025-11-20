import { BreathingExercise } from '@/components/BreathingExercise'
import { practices } from '@/lib/practice-data'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Bedtime Relaxation Practice - IVY Fertility',
  description: 'A 20-minute progressive relaxation routine to improve sleep quality during fertility treatment.'
}

export default function BedtimeRelaxationPage() {
  const practice = practices['bedtime-relaxation']

  if (!practice) {
    notFound()
  }

  return <BreathingExercise practice={practice} />
}
