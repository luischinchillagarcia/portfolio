import fs from "fs"

import { HomeSection, AboutMeSection, ExperienceSection, ContactMeSection } from '@/components/sections/sectionComponents'
import { EmailIcon, LinkedInIcon, GithubIcon, ResumeIcon } from '@/components/icons/icons'
import { ArticleDropdown } from '@/components/ui-sections/articleDropdown'
import { SectionContent } from '@/components/wrappers/sectionWrapper'
import { BreadCrumbsUI } from '@/components/ui-sections/breadcrumbs'
import { IconsWithLinks } from '@/components/icons/iconLinksWrapper'
import { NavBar } from '@/components/ui-sections/navbar'
import { Carousel } from '@/components/carousel/carouselItems'
import { Gallery } from '@/components/gallery/gallery'

import { IconAttributes, Config } from '@/types'
import { config, generalConfig } from '@/config'


export default function Home() {

  const postsDirectory = `${process.cwd()}/posts`
  const projectNames = fs.readdirSync(postsDirectory)

  const sectionConfig: Config = config


  const iconExternalLinks: IconAttributes[] = [
    {IconUI: <EmailIcon className="scale-75 md:scale-100"/>, link: generalConfig.email, useATag: true},
    {IconUI: <LinkedInIcon className="scale-75 md:scale-100"/>, link: generalConfig.linkedin, useATag: true},
    {IconUI: <GithubIcon className="scale-75 md:scale-100"/>, link: generalConfig.github, useATag: true},
    {IconUI: <ResumeIcon className="scale-75 md:scale-100" />, link: generalConfig.resume, useATag: false},
  ]

  return (
    <main className="relative flex flex-col items-center justify-between w-full min-h-screen text-primary">

      <NavBar 
        left={<ArticleDropdown fileNames={ projectNames } className="scale-75 md:scale-100" />}
        middle={<BreadCrumbsUI />} 
        right={<IconsWithLinks icons={ iconExternalLinks } />}
      />
      
      <SectionContent section={'Home'} scrollToSection={'About Me'} className='scroll-mt-8 md:scroll-mt-64'>
        <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"> 
          <HomeSection 
            suptitle={sectionConfig['Home'].suptitle} 
            title={sectionConfig['Home'].title} 
            body={sectionConfig['Home'].body} 
            lowerBody={<BreadCrumbsUI />}
          />
        </div>
      </SectionContent>
      
      <SectionContent section={'About Me'} scrollToSection={'Experience'} className='scroll-mt-8 md:scroll-mt-64'>
        <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"> 
          <AboutMeSection 
            title={sectionConfig['About Me'].title} 
            body={sectionConfig['About Me'].body} 
          />
        </div>
      </SectionContent>
      
      <SectionContent section={'Experience'} scrollToSection={'Contact Me'} className='scroll-mt-8'>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"> 
          <ExperienceSection 
            title={sectionConfig['Experience'].title} 
            body={sectionConfig['Experience'].body} 
            lowerBody={ 
              <>
                <Gallery 
                  items={ sectionConfig['Experience'].items } 
                  className='hidden sm:block' 
                />
                <Carousel 
                  items={ sectionConfig['Experience'].items } 
                  className='block sm:hidden' 
                  seeMoreThreshold={ sectionConfig['Experience'].seeMoreThreshold } 
                />
              </>
            }
          />
        </div>
      </SectionContent>
      
      <SectionContent section={'Contact Me'} scrollToSection={'Home'} className='scroll-mt-8 md:scroll-mt-64' isUpArrow>
        <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"> 
          <ContactMeSection 
            title={sectionConfig['Contact Me'].title} 
            body={sectionConfig['Contact Me'].body} 
            lowerBody={
              <>
                <IconsWithLinks icons={ iconExternalLinks } />
                <div className="py-6"/>
                <BreadCrumbsUI />
              </>
            }
          />
        </div>
      </SectionContent>
      
    </main>
  )
}
