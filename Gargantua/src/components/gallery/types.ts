import { ExperienceItem } from '@/types'

type CardData = {
  content: React.ReactNode,
} & Omit<ExperienceItem, 'content'>

export type { CardData }