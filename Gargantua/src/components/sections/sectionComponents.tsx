import { twMerge } from 'tailwind-merge'

type SectionType = {
  suptitle?: string
  title: string
  body: string
  lowerBody?: React.ReactNode
}

const textSm = 'text-sm sm:text-md md:text-lg lg:text-xl'
const textMd = 'text-md sm:text-xl md:text-xl lg:text-2xl'
const textLg = 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl'

const TextSizes = {
  textSm: 'text-sm sm:text-md md:text-lg lg:text-xl',
  textMd: 'text-md sm:text-xl md:text-xl lg:text-2xl',
  textLg: 'text-3xl sm:text-4xl md:text-4xl lg:text-5xl',
  textSmProse: 'prose-sm sm:prose-md md:prose-lg lg:prose-xl',
  textMdProse: 'prose-md sm:prose-xl md:prose-xl lg:prose-2xl',
  textLgProse: 'prose-3xl sm:prose-4xl md:prose-4xl lg:prose-5xl',
} as const


type Text = {
  text: string, 
  size: string, 
  weights: string,
  spacings: string,
  isProse?: boolean,
}
const TextBlock = ({text, size, weights, spacings, isProse}: Text) => (
  <div className={ twMerge(size, weights, spacings, isProse ? 'prose' : '')}>
    { isProse ? <p>{ text }</p> : text } 
  </div>
)


type Complete<T> = {
  [K in keyof T]-?: T[K];
}
function HomeSection({ suptitle, title, body, lowerBody }: Complete<SectionType>) {
  return (
    <>
      <TextBlock text={suptitle} size={TextSizes.textMd} weights='font-bold text-accent' spacings='py-1 sm:py-2' />
      <TextBlock text={title} size={TextSizes.textLg} weights='font-bold tracking-wide leading-loose' spacings='py-1 sm:py-2' />
      <TextBlock text={body} size={TextSizes.textSm} weights='font-thin' spacings='py-4 pt-8 sm:py-7 sm:pb-16' />
      <div className="py-4"/>
      { lowerBody }
      <div className="py-6"/>
    </>
  )
}

function AboutMeSection({ title, body }: SectionType) {

  return (
    <>
      <TextBlock text={title} size={TextSizes.textMd} weights='font-bold text-accent' spacings='sm:py-4 sm:pb-8 py-8' />
      <TextBlock text={body} size={TextSizes.textSmProse} isProse weights='prose-p:font-thin prose-p:leading-normal prose-p:text-primary' spacings='pb-1 sm:pb-8' />
      <div className="py-6"/>
    </>
  )
}

function ExperienceSection({ title, body, lowerBody }: SectionType ) {  
  return (
    <>
      <div className="sm:py-20">
      <TextBlock text={title} size={textMd} weights='font-bold text-accent' spacings='' />
      <TextBlock text={body} size={TextSizes.textSmProse} isProse weights='prose-p:font-thin prose-p:leading-normal prose-p:text-primary' spacings='pb-1 sm:py-4 sm:pb-8' />
        { lowerBody }
      </div>
    </>
  )
}

function ContactMeSection({ title, body, lowerBody }: SectionType) {
  return (
    <>
      <TextBlock text={title} size={textMd} weights='font-bold text-accent' spacings='' />
      <TextBlock text={body} size={textSm} isProse weights='prose-p:font-light prose-p:leading-normal prose-p:text-primary' spacings='py-4 sm:py-4 sm:pb-8' />
      { lowerBody }
      <div className="py-6"/>
    </>
  )
}

export { HomeSection, AboutMeSection, ExperienceSection, ContactMeSection }
