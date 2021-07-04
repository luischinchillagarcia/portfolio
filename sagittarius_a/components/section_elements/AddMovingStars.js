import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import StaticStar from './StaticStar'


function AnimationWrapper({ children, windowWidth, windowHeight, initAngle=0, endAngle=360, duration=2, delay=0.5 }) {

  return (
    <motion.div 
      animate={{ 
        opacity: [0, 1, 1, 0],
        translateX: [0 + 'px', 0 + 'px', windowWidth/2 + 'px', windowWidth/2 + 'px'],
        translateY: [0 + 'px', 0+ 'px', windowHeight/4 + 'px', windowHeight/4 + 'px'],
        rotate: [initAngle, initAngle, endAngle, endAngle],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        times: [0, .10, .90, 1],
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      { children }
    </motion.div>
  )
}


function AddMovingStars({ numStars, windowWidth, windowHeight, initX=0, xVar=5, initY=-20, yVar=5, size=35, sizeVar=15, opacity=0.8, opacityVar=0.2, delay=1, 
    delayVar=1, duration=4, durationVar=0.4, initAngle=0, initAngleVar=1, endAngle=180, endAngleVar=1 }) {

  const [positions, setPositions] = useState([])

  const randNumRange = (min, max) => Math.random() * (max - min) + min

  const xyPositions = () => ({
    initX: initX + randNumRange(-xVar, xVar),
    initY: initY + randNumRange(-yVar, yVar),
    size: size + randNumRange(-sizeVar, sizeVar),
    opacity: opacity + randNumRange(-opacity, opacityVar),
    delay: delay + randNumRange(-delayVar, delayVar),
    duration: duration + randNumRange(-durationVar, durationVar),
    initAngle: initAngle + randNumRange(initAngle, initAngleVar),
    endAngle: endAngle + randNumRange(endAngle, endAngleVar),
  })

  useEffect(() => {
    let pos = []
    for (let s = 0; s < numStars; s++) {
      let {initX, initY, size, opacity, delay, duration, initAngle, endAngle} = xyPositions()
      pos.push({initX, initY, size, opacity, delay, duration, initAngle, endAngle})
    }
    setPositions(pos)
  }, [])

  const animationConfig = (config) => { 
    const { initX, initY, initAngle, endAngle, duration, delay } = config
    return { initX, initY, initAngle, endAngle, duration, delay }
  }

  return (
    <div className="absolute">
      <div className="relative w-full h-full">
      { 
        positions.map((pos, index) => (
          <AnimationWrapper {...animationConfig(pos)} windowWidth={windowWidth} windowHeight={windowHeight} key={index}>
            <StaticStar 
              key={index} cssUnit="px" classes="absolute" size={pos.size} left={0} top={0} opacity={pos.opacity}
            />
          </AnimationWrapper>
        ))
      }
      </div>
    </div>
  )
}

export default AddMovingStars
