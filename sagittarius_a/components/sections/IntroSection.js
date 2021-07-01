import { Link } from 'react-scroll'

import SlideShow from '../section_elements/SlideShow'


function IntroLeft({ images }) {
  return (
    <div className="relative flex items-center justify-center w-full align-middle md:h-screen">
      <SlideShow images={images} />
    </div>
  )
}

function IntroRight({ textConfig, sectionRef, scrollHandler }) {

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
    <div className="flex p-10 font-serif text-white bg-transparent">
      <div className="max-w-lg mt-auto mb-auto">
        <h1 className="mb-3 text-3xl uppercase">
          { textConfig.title }
        </h1>
        <div className="flex flex-wrap">
          { subtitles }
        </div>
        <p className="mt-10">
          { textConfig.text }
        </p>
        <Link activeClass="active" className={textConfig.button.scroll} to={textConfig.button.scroll} spy={true} smooth={true} duration={500}>
          <button className="py-3 mt-6 text-black bg-white rounded-md px-7">
            { textConfig.button.text }
          </button>
        </Link>
      </div>
    </div>
  )
}

function Intro({ introConfig, sectionRef, scrollHandler }) {
  return (
    <div className="container mx-auto font-custom1">
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        <IntroLeft images={introConfig.images} />
        <IntroRight textConfig={ introConfig.text } sectionRef={sectionRef} scrollHandler={scrollHandler} />
      </div>
    </div>
  )
}

export default Intro