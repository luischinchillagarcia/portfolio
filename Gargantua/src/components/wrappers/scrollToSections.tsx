"use client"

import { useRef } from 'react'
import { useAtomValue, useSetAtom } from 'jotai'

import { scrollingRefs } from '@/store'
import { Sections } from '@/types'


interface Scroll {
  children: React.ReactNode
  section: Sections,
  className: string
}

function useCreateHandlers() {
  const ref = useRef<null | HTMLDivElement>(null)
  const clickHandler = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: "start" })
  } 
  return { ref, clickHandler }
}

function ScrollWrapper({ children, section, className }: Scroll) {
  const setRef = useSetAtom(scrollingRefs)
  const { ref, clickHandler } = useCreateHandlers() 

  setRef(prev => ({...prev, [section]: clickHandler}))
  
  return (
    <span ref={ref} className={className}> { children } </span>
  )
}

type ScrollToSection = {
  children: React.ReactNode
  to: Sections
}

function ScrollTo({ children, to }: ScrollToSection) {
  const refHandlers = useAtomValue(scrollingRefs)

  return (
    <button className='animate-bounce' onClick={refHandlers[to as keyof typeof refHandlers]}>
      { children }
    </button>
  )
}


export { ScrollWrapper, ScrollTo }
