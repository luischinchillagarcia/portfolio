import { DownArrowIcon, UpArrowIcon } from '@/components/icons/icons'
import { ScrollWrapper, ScrollTo } from '@/components/wrappers/scrollToSections'
import { Sections } from '@/types'


type SectionWrapper = {
  children: React.ReactNode,
  section: Sections,
  scrollToSection?: Sections,
  isUpArrow?: boolean,
  className: string
}

function SectionContent({ children, section, scrollToSection, isUpArrow, className }: SectionWrapper) {
  const arrowType = isUpArrow 
    ? <UpArrowIcon className='stroke-0' /> 
    : <DownArrowIcon className='stroke-0' /> 

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="w-full text-center hero-content">
        <ScrollWrapper section={ section } className={className}>
          { children }
          { scrollToSection && <ScrollTo to={ scrollToSection }> { arrowType } </ScrollTo> }
        </ScrollWrapper>
      </div>
    </div>
  )
}

export { SectionContent }
