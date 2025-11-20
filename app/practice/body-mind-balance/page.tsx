import { BreathingExercise } from '@/components/BreathingExercise'
import { practices } from '@/lib/practice-data'
import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Body-Mind Balance Practice - IVY Fertility',
  description: 'A 15-minute practice to harmonize body and mind for overall wellness during fertility treatment.'
}

export default function BodyMindBalancePage() {
  const practice = practices['body-mind-balance']

  if (!practice) {
    notFound()
  }

  return <BreathingExercise practice={practice} />
}
