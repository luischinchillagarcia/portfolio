"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useAtom } from 'jotai'

import { GithubIcon, ArticleIcon } from '@/components/icons/icons'
import { motion } from 'framer-motion'
import { CardData } from '@/components/gallery/types'
import { experienceAtom } from '@/components/gallery/state'


function CardUIWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-xl bg-base-200 card lg:card-side">
      <div className="card-body">
        { children }
      </div>
    </div>
  )
}

function CardContent({ src, alt, title, url, githubURL, content}: CardData) {
  return (
    <CardUIWrapper>
      <figure>
        <Image src={ src } className="mx-auto rounded-box" alt={ alt } width={200} height={200}/>
      </figure>
      <h2 className="pt-2 text-lg font-semibold text-center"> { title } </h2>
      <p className='pt-2 pb-4 text-sm prose text-left'> 
        { content }
      </p>
      
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
    </CardUIWrapper>
  )
}

function ExpandedCard() {

  const [selected, setSelected] = useAtom(experienceAtom)

  if (!selected) {
    return <></>
  }
  
  return (
    <div className="fixed inset-0 z-50 flex items-center overflow-y-scroll bg-black/50" onClick={() => setSelected(null)}>
      <div className="items-center w-full max-w-2xl mx-auto">
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
          >
            <div className="w-11/12 mx-auto sm:w-3/4" onClick={(e) => e.stopPropagation()}>
              <CardContent src={selected.src} alt={selected.alt} title={selected.title} url={selected.url} githubURL={selected.githubURL} content={selected.content} />
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export { ExpandedCard } 
