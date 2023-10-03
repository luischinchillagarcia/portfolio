import { config } from '@/config'

// Icon Types
type IconAttributes = {
  IconUI: JSX.Element
  link: string
  useATag?: boolean
}

type Icons = {
  icons: IconAttributes[]
}

export type { IconAttributes, Icons }


// Experience Config Types
type ExperienceItem = {
  src: string
  alt: string
  title: string
  url: string
  githubURL: string
  content: string
}

type SeeMoreThreshold = number

type SeeMoreText = {
  seeMoreThreshold: SeeMoreThreshold
}

type ExperienceItems = {
  items: ExperienceItem[]
}

export type { ExperienceItem, ExperienceItems, SeeMoreText, SeeMoreThreshold }


// Config Types
type BaseConfig = {
  title: string
  body: string 
}

type HomeConfig = {
  suptitle: string
} & BaseConfig

type AboutMeConfig = {
} & BaseConfig

type ExperienceConfig = {
} & BaseConfig & ExperienceItems & SeeMoreText

type ContactMeConfig = {
} & BaseConfig


export type { HomeConfig, AboutMeConfig, ExperienceConfig, ContactMeConfig }

type Config = {
  'Home': HomeConfig
  'About Me': AboutMeConfig
  'Contact Me': ContactMeConfig
  'Experience': ExperienceConfig
}

type Sections = keyof typeof config

export type { Config, Sections }


const configSections = Object.keys(config) as Sections[]
export { configSections }


type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX

type GeneralConfig = {
  iconColor: Color
  bgColor: Color
  
}

export type { GeneralConfig, Color }

type Card = `card_${number}`

export type { Card }
