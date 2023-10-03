import fs from "fs"

import { HomeIcon, EmailIcon, LinkedInIcon, GithubIcon, ResumeIcon } from '@/components/icons/icons'
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

export default function PreviewFile() {

  const postsDirectory = `${process.cwd()}/posts`
  const projectNames = fs.readdirSync(postsDirectory)
  
  return (
    <div className="flex flex-col bg-base-200">
      <NavBar 
        left={<ArticleDropdown fileNames={ projectNames } />}
        middle={<IconsWithLinks icons={ homeLink } />} 
        right={<IconsWithLinks icons={ iconExternalLinks } />}
      />
      <button className="mx-auto text-xs btn bg-base-200 md:text-md sm:text-sm lg:text-lg">
        <a href='/resume.pdf' className="flex items-center justify-center gap-2">
          <ResumeIcon className="scale-75 md:scale-100" /> Download Resume
        </a>
      </button>
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="w-full h-screen"
      />
    </div>
  )
}
