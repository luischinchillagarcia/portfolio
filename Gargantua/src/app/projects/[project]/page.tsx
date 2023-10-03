import path from 'path'
import fs from "fs"

import Image from 'next/image'
import { compileMDX } from 'next-mdx-remote/rsc'
import { Suspense } from 'react'

import { HomeIcon, EmailIcon, LinkedInIcon, GithubIcon, ResumeIcon } from '@/components/icons/icons'
import { Loading } from '@/components/loading/loadingSkeleton'
import { ArticleDropdown } from '@/components/ui-sections/articleDropdown'
import { NavBar } from '@/components/ui-sections/navbar'
import { IconsWithLinks } from '@/components/icons/iconLinksWrapper'
import { IconAttributes } from '@/types'
import { generalConfig } from '@/config'

const iconExternalLinks: IconAttributes[] = [
  {IconUI: <EmailIcon className="scale-75 md:scale-100"/>, link: generalConfig.email, useATag: true},
  {IconUI: <LinkedInIcon className="scale-75 md:scale-100"/>, link: generalConfig.linkedin, useATag: true},
  {IconUI: <GithubIcon className="scale-75 md:scale-100"/>, link: generalConfig.github, useATag: true},
  {IconUI: <ResumeIcon className="scale-75 md:scale-100" />, link: generalConfig.resume, useATag: false},
]

const homeLink: IconAttributes[] = [
  {IconUI: <HomeIcon />, link: '/', useATag: false},
]

interface MarkdownMetadata {
  title: string
  suptitle: string
}


function TitleSection<T extends MarkdownMetadata>({ frontmatter }: { frontmatter: T }) {
  return (
    <div className='pt-32'>
      <h1 className="flex flex-col items-center text-center">
        <span className="font-semibold tracking-wide uppercase text-primary-200">
          { frontmatter.suptitle }
        </span>
        <span className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
          { frontmatter.title }
        </span>
      </h1>
      <hr className="w-20 mx-auto mt-8 border-t-2 border-accent" />
    </div>
  )
}


function ContentWrapper({ className, children }: { className: string, children: React.ReactNode }) {
  return (
    <div className={ className }>
      <Suspense fallback={<Loading />}>
        { children }
      </Suspense>
    </div>
  )
}


export default async function Page({ params }: { params: { project: string }}) {
  
  const postsDirectory = `${process.cwd()}/posts`
  
  const projectNames = fs.readdirSync(postsDirectory)

  const fullPath = path.join(postsDirectory, `${params.project}.md`)
  const markdownString = fs.readFileSync(fullPath, 'utf8')

  const { content, frontmatter } = await compileMDX<MarkdownMetadata>({
    source: markdownString,
    options: { parseFrontmatter: true },
    components: { Image: ({ alt, src, width, height, className, ...props }: { alt: string, src: string, width: number, height: number, className: string, props: typeof Image }) => <Image src={src} alt={alt} width={width} height={height} className={className} /> }
  })

  return (
    <div className="bg-base-200">
      <NavBar 
        left={<ArticleDropdown fileNames={ projectNames } />}
        middle={<IconsWithLinks icons={ homeLink } />} 
        right={<IconsWithLinks icons={ iconExternalLinks } />}
      />
      <ContentWrapper className="relative flex flex-col items-center max-w-sm mx-auto justify-stretch sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <TitleSection<typeof frontmatter> frontmatter={ frontmatter } />
        <div className="max-w-full px-5 py-32 prose">
          { content }
        </div>
      </ContentWrapper>
    </div>
  )
}
