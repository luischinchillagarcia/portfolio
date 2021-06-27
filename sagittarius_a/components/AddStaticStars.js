import React, { useState, useEffect } from "react"
import StaticStar from './StaticStar'

import { motion } from "framer-motion"

function AnimationWrapper({ children, duration=2, delay=0 }) {
  return (
    <motion.div 
      animate={{ 
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        direction: 'alternate',
        ease: "linear",
        times: [0, .8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      { children }
    </motion.div>
  )
}


function AddStaticStars({ numStars, gapLo=45, gapHi=55, size=20, sizeVar=10, opacity=0.6, opacityVar=0.4, duration=3.5, durationVar=1.5, classes='' }) {

  const [configs, setConfigs] = useState([])

  const randNumRange = (min, max) => Math.random() * (max - min) + min
  const randNum = (lo, hi) => {
    let lowerRange = randNumRange(0, lo)
    let upperRange = randNumRange(hi, 100)

    let randRange = (Math.random() > 0.5) ? 1 : 0
    let chooseRandRange = (randRange === 0) ? lowerRange : upperRange

    return chooseRandRange
  }

  const xyPositions = (lo, hi) => ({
    left: randNum(lo, hi), 
    top: randNum(lo, hi), 
    size: size + randNumRange(-sizeVar, sizeVar),
    opacity: opacity + randNumRange(-opacityVar, opacityVar),
    duration: duration + randNumRange(-durationVar, durationVar),
  })

  useEffect(() => {
    let confs = []
    for (let s = 0; s < numStars; s++) {
      let {left, top, size, opacity, duration} = xyPositions(gapLo, gapHi)
      confs.push({left, top, size, opacity, duration})
    }
    setConfigs(confs)
  }, []);

  const allClasses = 'absolute stars-twinkle ' + classes
  const wrapperStyles = (config) => ({duration: config.duration, delay: config.delay})

  return (
    <>
      { 
        configs.map((conf, index) => (
          <AnimationWrapper key={index} {...wrapperStyles(conf)} >
            <StaticStar 
              cssUnit="px" classes={allClasses} size={conf.size} left={conf.left} top={conf.top} opacity={conf.opacity}
              style={{ animationDuration: conf.duration }}
            />
          </AnimationWrapper>
        ))
      }
    </>
  )
}

export default AddStaticStars