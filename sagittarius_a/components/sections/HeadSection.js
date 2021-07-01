import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import BlackHole from '../section_elements/BlackHole'
import AddStaticStars from '../section_elements/AddStaticStars'
// import AddMovingStars from '../section_elements/AddMovingStars'


const variants = {
  enter: direction => {
    return {
      y: -20,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      opacity: 0
    }
  }
}

function AddLabelsLoop({ texts }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let timer = setTimeout(() => {
      let next = index + 1
      if (next === texts.length) {
        next = 0
      }
      setIndex(next)
    }, 3 * 1000)
    let timeCleanup = () => clearTimeout(timer)

    return timeCleanup
    
  }, [index, setIndex])

  return (
    <AnimatePresence>
      <motion.span
        style={{ position: "absolute" }}
        variants={variants}
        key={index}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          y: { type: "spring", stiffness: 300, damping: 200 },
          opacity: { duration: 0.5 }
        }}
      >
        <div className="flex gap-2">
          <div className="">{ texts[index].component('') }</div>
          <div className="">{ texts[index].text          }</div>
        </div>
        
      </motion.span>
    </AnimatePresence>
  );
};


function AddLabels({ labelsConfig }) {
  return (
    <ul>
      {
        labelsConfig.map((config, index) => (
          <li 
            key={'blackHoleBullet-' + index}
            className={'flex gap-3 py-3 pl-3 text-lg md:py-3 animate-wiggle ' + config.delay} 
            style={{animationDelay: (index % 4)*1000 + 'ms', animationDuration: 5 + 's'}}
          >
            <div className="w-1/12 h-full lg:w-12">
              <config.component />
            </div>
            <p className="h-full text-white"> 
              { config.text } 
            </p>
          </li>
        ))
      }
    </ul>
  )
}


function TextContainer({ textConfig }) {

  return (
    <div className="flex justify-center w-full text-white min-h-64 font-custom1 px-auto min-w-32">
      <div className="max-w-2xl py-3 md:py-10 md:w-6/12">
        <div className="h-32 p-5 text-xl text-white bg-white rounded-lg bg-opacity-10 lg:w-7/12">
          <p>
            { textConfig.titleText }
          </p>
          <div className="pt-2 pl-8">
            <AddLabelsLoop texts={textConfig.labels}/>
          </div>
          {/* <div className="md:pl-8">
            <AddLabels labelsConfig={textConfig.labels} />
          </div> */}
        </div>
      </div>
    </div>
  )
}


function HeadSection({ headSectionConfig }) {
  
  const [windowSize, setWindowSize] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowSize(window.innerWidth)
      
      window.addEventListener("resize", handleResize)
      handleResize()
      const listenerCleanup = () => window.removeEventListener("resize", handleResize)
      
      return listenerCleanup
    }
  }, [])

  const bhSize = (windowSize && windowSize > 700) ? 700 : windowSize - 150

  return (
    <>
      <AddStaticStars {...headSectionConfig.staticStars} />
      <div className="min-h-screen">
        <BlackHole size={bhSize || 300} cssUnit="px" classes="m-auto w-1/2">
          <TextContainer textConfig={headSectionConfig.text} />
        </BlackHole> 
      </div>
    </>
  )
}


export default  HeadSection
