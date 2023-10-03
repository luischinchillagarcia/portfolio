"use client"

import { useState } from 'react'
import { SeeMoreThreshold } from '@/types'


interface ViewMore {
  text: string
  threshold: SeeMoreThreshold
}

function SeeMore({ text, threshold }: ViewMore) {
  const [seeMore, setSeeMore] = useState(true)

  const bodyText = seeMore ? text.slice(0, threshold) + '...' : text
  const buttonText = seeMore ? 'See More...' : 'See Less...'
  const viewMoreHandler = () => { setSeeMore(prev => !prev) }

  return (
    <>
      <p className='text-sm text-left'> 
        { bodyText } 
      </p>
      <button className='text-sm text-left' onClick={viewMoreHandler}> 
        { buttonText } 
      </button>
    </>
  )
}

export { SeeMore }