"use client"

import { MouseEventHandler } from 'react'
import Image from 'next/image'
import { useSetAtom } from 'jotai'
import { motion } from 'framer-motion'

import { experienceAtom } from '@/components/gallery/state'
import { CardData } from '@/components/gallery/types'


function CardContent({ item }: { item: CardData }) {
  return (
    <>
      <figure>
        <Image
          src={ item.src }
          width={500} height={500}
          alt={ item.alt }
        />
      </figure>
      <p className='py-2 text-xs font-thin sm:text-lg'> { item.title } </p>
    </>
  )
}

function AnimationWrapper({ children, handler }: { children: React.ReactNode, handler: MouseEventHandler}) {
  return (
    <motion.div 
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          }
        }}
        whileTap={{scale: 0.95}}
        onClick={handler}
      >
        { children }
      </motion.div>
  )
}

function ShrunkenCard({ item }: { item: CardData }) {
  const setSelected = useSetAtom(experienceAtom)

  return (
    <div className="inline-block w-full mg-4 card bg-neutral">
      <AnimationWrapper handler={() => setSelected(item)}>
        <CardContent item={ item } />
      </AnimationWrapper>
    </div>
  )
}

export { ShrunkenCard }
