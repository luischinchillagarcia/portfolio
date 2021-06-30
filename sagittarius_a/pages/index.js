import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

import BlackHole from '../components/BlackHole'
import AddStaticStars from '../components/AddStaticStars'
import AddMovingStars from '../components/AddMovingStars'
import { DataGraph, Planet, Neuron, Database } from '../components/Icons'


const staticStarsConfig = {
  numStars: 50, gapLo: 45, gapHi: 55, size: 20, sizeVar: 10, opacity: 0.5, opacityVar: 0.3, classes: '', minAnimDuration: 0.0, maxAnimDuration: 2.5,
}

const movingStarsConfig = {
  numStars: 5, initX: -3, xVar: 5, initY: -20, yVar: 5, size: 35, sizeVar: 15, opacity: 0.8, opacityVar: 0.2, delay: 1, delayVar: 1, duration: 4, durationVar: 0.4, initAngle: 0, initAngleVar: 1, endAngle: 180, endAngleVar: 1
}


const labelsConfig = [
  {
    component: Database,
    descr: 'a Data Engineer',
    delay: 'wigglw',
  },
  {
    component: DataGraph,
    descr: 'a Data Scientist',
    delay: 'pulse-2',
  },
  {
    component: Neuron,
    descr: 'a Machine Learning Engineer',
    delay: 'pulse-3',
  },
  {
    component: Planet,
    descr: 'an Astrophysicist',
    delay: 'pulse-4',
  },
]

function AddLabels() {
  return (
    <ul>
      {
        labelsConfig.map((config, index) => (
          <li className={'flex gap-3 py-3 pl-3 text-lg duration-75 md:py-3 ' + config.delay} key={'blackHoleBullet-' + index}>
            <div className="w-1/12 h-full lg:w-12">
              <config.component />
            </div>
            <p className="h-full text-white"> { config.descr } </p>
          </li>
        ))
      }
    </ul>
  )
}

function TextContainer() {

  return (
    <div className="p-5 text-xl text-white bg-white border border-white rounded-lg bg-opacity-10 lg:w-7/12">
      <p>
        Luis Chinchilla-Garcia, and I am:
      </p>
      <div className="md:pl-8">
        <AddLabels />
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <div className="w-full">
        
        {/* <AddMovingStars {...movingStarsConfig} /> */}
        <div className="w-full pb-8 mx-auto font-custom1">
          <div className="relative w-full">
            
            {/* <BlackHole size={850} cssUnit="px" classes="m-auto w-1/2" /> */}
            
            <div className="w-full max-w-md pl-40">
              <p className="pb-6 text-3xl text-white">Luis Chinchilla-Garcia, and I am: </p>
              { AddLabels() }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default function Home2() {
  
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

  const bhSize = (windowSize && windowSize > 700) ? 700 : windowSize

  return (
    <>
    <AddStaticStars {...staticStarsConfig} />
    <div className="">
      <BlackHole size={bhSize || 400} cssUnit="px" classes="m-auto w-1/2" /> 
      <div className="flex justify-center w-full text-white min-h-64 font-custom1 px-auto">
        <div className="max-w-5xl py-3 md:py-10 md:w-6/12">
          <TextContainer />
        </div>
      </div>
    </div>
    </>
  )
}
