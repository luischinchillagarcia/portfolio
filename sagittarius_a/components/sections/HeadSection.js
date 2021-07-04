import React, { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import BlackHole from '../section_elements/BlackHole'
import AddStaticStars from '../section_elements/AddStaticStars'
import DownArrow from '../section_elements/DownArrow'
import AddMovingStars from '../section_elements/AddMovingStars'


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
  )
}


function TextContainer({ textConfig }) {

  return (
    <div className="flex justify-center w-full text-white min-h-64 font-custom1 px-auto min-w-32">
      <div className="max-w-2xl py-3 md:py-10 md:w-6/12">
        <div className="h-32 p-5 text-xl text-white bg-white rounded-md opacity-0 bg-opacity-10 lg:w-7/12 startup-anim" style={{animationDelay: 1 + 's'}}>
          <p>
            { textConfig.titleText }
          </p> 
          <div className="pt-2 pl-8 opacity-0 startup-anim" style={{animationDelay: 1.5 + 's'}}>
            <AddLabelsLoop texts={textConfig.labels}/>
          </div>
        </div>
      </div>
    </div>
  )
}


function HeadSection({ headSectionConfig }) {
  
  const [windowWidth, setWindowWidth] = useState(null)
  const [windowHeight, setWindowHeight] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResizeWidth = () => setWindowWidth(window.innerWidth)
      const handleResizeHeight = () => setWindowHeight(window.innerWidth)
      
      window.addEventListener("resize", handleResizeWidth)
      window.addEventListener("resize", handleResizeHeight)

      handleResizeWidth()
      handleResizeHeight()

      const listenerCleanup = () => {
        window.removeEventListener("resize", handleResizeWidth)
        window.removeEventListener("resize", handleResizeHeight)
      }
      
      return listenerCleanup
    }
  }, [])

  const bhSize = (windowWidth && windowWidth > 700) ? 700 : windowWidth - 150

  const textContainerShow = <TextContainer textConfig={headSectionConfig.text} />
  const downArrrow = <DownArrow scrollSection={headSectionConfig.scrollSection} />

  return (
    <>
      <AddStaticStars {...headSectionConfig.staticStars} />
      <AddMovingStars numStars={5} windowWidth={windowWidth} windowHeight={windowHeight} />
      <div className="min-h-screen">
        <BlackHole size={bhSize || 300} classes="m-auto w-1/2" textContainer={textContainerShow} downArrow={downArrrow} cssUnit="px"/>
      </div>
    </>
  )
}


export default HeadSection
