import BlackHole from '../components/BlackHole'
import AddStaticStars from '../components/AddStaticStars'
import AddMovingStars from '../components/AddMovingStars'
import { DataGraph, Planet, Neuron, Database } from '../components/Icons'
import { motion } from "framer-motion"


const staticStarsConfig = {
  numStars: 50, gapLo: 45, gapHi: 55, size: 20, sizeVar: 10, opacity: 0.5, opacityVar: 0.3, classes: '', minAnimDuration: 0.0, maxAnimDuration: 2.5,
}

const movingStarsConfig = {
  numStars: 5, initX: -3, xVar: 5, initY: -20, yVar: 5, size: 35, sizeVar: 15, opacity: 0.8, opacityVar: 0.2, delay: 1, delayVar: 1, duration: 4, durationVar: 0.4, initAngle: 0, initAngleVar: 1, endAngle: 180, endAngleVar: 1
}


const labelsConfig = [
  {
    component: Database,
    descr: 'a Data Engineer'
  },
  {
    component: DataGraph,
    descr: 'a Data Scientist'
  },
  {
    component: Neuron,
    descr: 'a Machine Learning Engineer'
  },
  {
    component: Planet,
    descr: 'an Astrophysicist'
  },
]

function AddLabels() {
  return (
    <>
      {
        labelsConfig.map((config, index) => (
          <div className="flex h-8 pb-12 pl-10" key={index}>
            <config.component />
            <p className="pb-8 pl-4 text-2xl text-white"> { config.descr } </p>
          </div>
        ))
      }
    </>
  )
}

export default function Home() {
  return (
    <>
      <div className="w-screen pb-8 mx-auto font-serif" style={{maxWidth: 1400 + 'px'}}>
        <AddStaticStars {...staticStarsConfig} />
        <div className="relative w-full">
          
          <BlackHole size={850} cssUnit="px" classes="m-auto w-1/2" />
          <AddMovingStars {...movingStarsConfig} />
          
          <div className="pl-40">
            <p className="pb-3 text-3xl text-white">Luis Chinchilla-Garcia, and I am: </p>
            { AddLabels() }
          </div>
        </div>
      </div>
    </>
  )
}
