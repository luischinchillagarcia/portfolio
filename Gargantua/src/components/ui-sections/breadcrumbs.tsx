"use client"

import { useAtomValue } from 'jotai'
import { scrollingRefs } from '@/store'


function BreadCrumbsUI() {

  const refHandlers = useAtomValue(scrollingRefs)

  return (
    <div className="flex items-center justify-center">
      <div className="text-sm breadcrumbs">
        <ul>
          {
            Object.keys(refHandlers).map(id => (
              <li key={id}><a onClick={ refHandlers[id as keyof typeof refHandlers] }> { id } </a></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}


export { BreadCrumbsUI }
