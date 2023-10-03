import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { ExperienceItem, ExperienceItems, SeeMoreText } from '@/types'
import { SeeMore } from '@/components/carousel/seeMore'
import { GithubIcon, ArticleIcon } from '@/components/icons/icons'


type CardWrapper = {
  children: React.ReactNode
}

function CardUIWrapper({ children }: CardWrapper) {
  return (
    <div className="shadow-xl card lg:card-side bg-base-100">
      <div className="card-body w-80">
        { children }
      </div>
    </div>
  )
}


function CardContent({ src, alt, title, url, githubURL, content, seeMoreThreshold}: ExperienceItem & SeeMoreText) {
  return (
    <>
      <figure>
        <Image src={ src } className="rounded-box" alt={ alt } width={200} height={200}/>
      </figure>
      <h2 className="text-lg font-semibold text-center"> { title } </h2>
      <SeeMore text={ content } threshold={seeMoreThreshold} /> 

      <Link href={ githubURL } className='w-full'>
        <button className="w-full btn btn-outline">
          <GithubIcon className='px-1' />
          <span className='hidden sm:flex'>Github</span>
        </button>
      </Link>

      <Link href={ url } className='w-full'>
        <button className="w-full btn btn-outline">
          <ArticleIcon className='px-1' />
          <span className='hidden sm:flex'>Article</span>
        </button>
      </Link>
    </>
  )
}


function Carousel({ items, seeMoreThreshold, className }: ExperienceItems & SeeMoreText & { className: string }) {
  return (
    <div className={twMerge(className, "relative flex flex-col max-w-full")}>
      <div className="max-w-full p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
        {
          items.map((item) => (
            <CardUIWrapper key={ item.alt }>
              <CardContent
                src={ item.src } 
                alt={ item.alt } 
                title={ item.title } 
                url={ item.url }
                githubURL={ item.githubURL }
                content={ item.content }
                seeMoreThreshold={seeMoreThreshold} 
              />
            </CardUIWrapper>
            ))
        }

      </div>
    </div>
  )
}

export { Carousel }
