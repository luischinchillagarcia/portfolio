import { motion } from "framer-motion"
import { Link } from 'react-scroll'

import DownArrow from '../section_elements/DownArrow'
import SlideShow from '../section_elements/SlideShow'


function IntroSection({ introConfig, sectionRef, scrollHandler }) {
  return (
    <div className="container mx-auto font-custom1 IntroSection">
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        <IntroLeft images={introConfig.images} />
        <IntroRight textConfig={ introConfig.text } sectionRef={sectionRef} scrollHandler={scrollHandler} />
      </div>
      <DownArrow scrollSection={introConfig.scrollSection} />
    </div>
  )
}


function IntroLeft({ images }) {
  return (
    <div className="relative flex items-center content-center justify-center w-full my-auto h-1/2">
      <SlideShow images={images} />
    </div>
  )
}


function IntroRight({ textConfig }) {

  const subtitles = textConfig.subtitles.map((subtitle, index) => {
    return (
      <span 
        key={index}
        className="px-2 m-1 text-sm font-bold leading-loose bg-transparent border border-gray-500 rounded cursor-pointer opacity-3 hover:bg-gray-700"
      >
        { subtitle }
      </span>
    )
  })

  return (
    <div className="flex p-10 overflow-y-scroll font-serif text-white bg-transparent animate-startAnim">
      <div className="max-w-lg mt-auto mb-auto">
        <h1 className="mb-3 text-3xl uppercase">
          { textConfig.title }
        </h1>
        <div className="flex flex-wrap pb-5">
          { subtitles }
        </div>
        {
          textConfig.text.map((paragraph, index) => (
            <p key={'intro-par-' + index} className="mt-5"> { paragraph } </p>
          ))
        }
        <AnimatedButtonWithScroll scrollSection={textConfig.button.scroll}>
          <p className="py-3 mt-6 text-white border border-white rounded-md hover:bg-green-700 hover:bg-opacity-20 px-7">
            { textConfig.button.text }
          </p>
        </AnimatedButtonWithScroll>
      </div>
    </div>
  )
}


function AddAnimationButton({ children }) {
  
  return (
    <motion.button
      whileHover={{ scale: 0.92 }}
      whileTap={{ scale: 0.92 }}
      onMouseDown={e => e.preventDefault()}
    >
      { children }
    </motion.button>
  )
}


function AddAnimationScroll({ scrollSection, children }) {
  return (
    <Link activeClass="active" className={scrollSection} to={scrollSection} spy={true} smooth={true} duration={500}>
      { children }
    </Link>
  )
}


function AnimatedButtonWithScroll({ scrollSection, children  }) {

  return (
    <AddAnimationButton> 
      <AddAnimationScroll scrollSection={scrollSection}>
        { children }
      </AddAnimationScroll>
    </AddAnimationButton>
  )
}


export default IntroSection
