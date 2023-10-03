import { twMerge } from 'tailwind-merge'
import { compileMDX } from 'next-mdx-remote/rsc'

import { ShrunkenCard } from '@/components/gallery/shrunkenCard'
import { ExpandedCard } from '@/components/gallery/expandedCard'
import { ExperienceItem }  from '@/types'


async function Gallery({ items, className }: { items: ExperienceItem[], className: string }) {

  const itemsSerialized = await Promise.all(items.map(async item => {
    const { content: mdxSource, } = await compileMDX({
      source: item.content,
    }) 
    return {...item, content: (mdxSource as React.ReactNode)}
  }))
  
  return (
    <>
      <div className={twMerge(className, "px-4 py-4 mx-auto sm:py-8 max-w-7xl")}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
          {
            itemsSerialized.map(item => <ShrunkenCard key={item.src} item={item} />)
          }
        </div>
      </div>
      <ExpandedCard />
    </>
  )
}

export { Gallery } 
