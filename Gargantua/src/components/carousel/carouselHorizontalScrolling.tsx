"use client"

import { useRef } from 'react'
import { useAtomValue, useSetAtom, useAtom, atom } from 'jotai'

import { scrollingRefsCarousel } from '@/store'
import { Card } from '@/types'


interface Scroll {
  children: React.ReactNode
  cardName: `card_${number}`
  className: string
}

function useCreateHandlers() {
  const ref = useRef<null | HTMLDivElement>(null)
  const clickHandler = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: "nearest" })
  } 
  return { ref, clickHandler }
}

function ScrollWrapperCarousel({ children, cardName, className }: Scroll) {
  const setRef = useSetAtom(scrollingRefsCarousel)
  const { ref, clickHandler } = useCreateHandlers() 

  setRef(prev => ({...prev, [cardName]: () => clickHandler() }))

  return (
    <div ref={ref} className={className}> { children } </div>
  )
}

const currentCard = atom(1)

const lenRefs = atom((get) => Object.keys(get(scrollingRefsCarousel)).length)
const useMaxLen = () => useAtomValue(lenRefs)
const useScrollingRefs = () => useAtomValue(scrollingRefsCarousel)
const useScrollArrows = () => useAtom(currentCard)


type ScrollToCard = {
  to: Card
}

function ScrollButton({ to }: ScrollToCard) {
  const [cardNum, setCardNum] = useScrollArrows()
  const refHandlers = useScrollingRefs()
  const toCard = parseInt(to.split('_')[1])

  const styling = (toCard === cardNum) ? ' bg-primary bg-opacity-30' : ''

  const clickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setCardNum(prev => toCard)
    const card = `card_${toCard}` as keyof typeof refHandlers
    const handler = refHandlers[card]
    handler(event)
  }

  return (
    <button className={'border rounded-full btn btn-xs border-primary' + styling} onClick={clickHandler}>
      { toCard }
    </button>
  )
}

function ScrollLeft() {
  const [cardNum, setCardNum] = useScrollArrows()
  const refHandlers = useScrollingRefs()
  const maxNum = useMaxLen()

  const moveLeft = (prev: number) => {
    const curr = prev - 1
    return (curr < 1) ? maxNum : curr
  }

  const cardHandlerLeft = (event: React.MouseEvent<HTMLElement>) => {
    const currPosition = moveLeft(cardNum)
    setCardNum(prev => currPosition)
    const card = `card_${currPosition}` as keyof typeof refHandlers
    const handler = refHandlers[card]
    handler(event)
  }

  return (
    <button className='btn btn-xs' onClick={cardHandlerLeft}>
      { '<' }
    </button>
  )
}

function ScrollRight() {
  const [cardNum, setCardNum] = useScrollArrows()
  const refHandlers = useScrollingRefs()
  const maxNum = useMaxLen()

  const moveRight = (prev: number) => {
    const curr = prev + 1
    return (curr > maxNum) ? 1 : curr
  }

  const cardHandlerRight = (event: React.MouseEvent<HTMLElement>) => {
    const currPosition = moveRight(cardNum)
    setCardNum(prev => currPosition)
    const card = `card_${currPosition}` as keyof typeof refHandlers
    const handler = refHandlers[card]
    handler(event)
  }

  return (
    <button className='btn btn-xs' onClick={cardHandlerRight}>
      { '>' }
    </button>
  )
}

export { ScrollWrapperCarousel, ScrollButton , ScrollLeft, ScrollRight}
