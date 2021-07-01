import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import StaticStar from './StaticStar'


function AnimationWrapper({ children, initX=-50, initY=-1, endX=0, endY=0, initAngle=0, endAngle=180, duration=2, delay=0 }) {
  return (
    <motion.div 
      animate={{ 
        opacity: [0, 1, 1, 0],
        translateX: [initX + '%', initX + '%', endX + '50%', endX + '50%'],
        translateY: [initY + 'rem', initY + 'rem', endY + 'rem', endY + '0rem'],
        rotate: [initAngle, initAngle, endAngle, endAngle],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        times: [0, .10, .90, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      { children }
    </motion.div>
  )
}


function AddMovingStars({ numStars, initX=0, xVar=5, initY=-20, yVar=5, size=35, sizeVar=15, opacity=0.8, opacityVar=0.2, delay=1, delayVar=1, duration=4, durationVar=0.4, initAngle=0, initAngleVar=1, endAngle=180, endAngleVar=1 }) {

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
  }, []);

  const animationConfig = (config) => { 
    const { initX, initY, initAngle, endAngle, duration, delay } = config
    return { initX, initY, initAngle, endAngle, duration, delay }
  }

  return (
    <>
      { 
        positions.map((pos, index) => (
          <AnimationWrapper {...animationConfig(pos)} key={index}>
            <StaticStar 
              key={index} cssUnit="px" classes="absolute" size={pos.size} left={0} top={0} opacity={pos.opacity}
            />
          </AnimationWrapper>
        ))
      }
    </>
  )
}

export default AddMovingStars
