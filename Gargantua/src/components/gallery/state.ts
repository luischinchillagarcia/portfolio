import { atom } from 'jotai'
import { CardData } from '@/components/gallery/types'

const experienceAtom = atom<CardData | null>(null)

export { experienceAtom }
