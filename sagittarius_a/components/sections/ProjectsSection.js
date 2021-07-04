import Link from 'next/link'
import { useState, useEffect } from "react"
import { Transition } from "react-transition-group"
import { motion } from "framer-motion"

import DownArrow from '../section_elements/DownArrow'


function ProjectsSection({ projectsConfig }) {

  const [openTab, setOpenTab] = useState(1)

  return (
    <>
      <div className="flex justify-center w-full font-custom1">
        <div className="w-9/12 max-w-screen-lg">
          <div className="min-h-screen py-5 sm:px-5 max-w">
            <div className="w-full py-10 mx-auto mb-10 text-gray-600 sm:px-5">
              <HeadContainer headConfig={projectsConfig.headConfig} />
              <TabButtonsContainer 
                configTabs={projectsConfig.configTabs} openTab={openTab} setOpenTab={setOpenTab} 
              />
              <TabsContentContainer configTabs={projectsConfig.configTabs} openTab={openTab} />
              <DownArrow scrollSection={projectsConfig.scrollSection} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function HeadContainer({ headConfig }) {

  return (
    <div className="mx-auto text-center text-white">
      <h1 className="mb-5 text-2xl md:text-4xl">
        { headConfig.head }
      </h1>
      <h3 className="mb-10 text-xl font-medium">
        { headConfig.body }
      </h3>
    </div>
  )
}


function TabButtonsContainer({ openTab, setOpenTab, configTabs }) {

  const buttonSetup = 'text-white '
  const buttonHeights = 'h-full '
  const buttonWidths = 'w-full sm:w-1/4 '

  return (
    <ul className="flex flex-col justify-center h-full sm:flex-row ">
      {
        configTabs.map((configTab, index) => (
          <li key={'project-tab-' + index} className={buttonSetup + buttonHeights + buttonWidths}>
            <TabButtonContainer 
              openTab={openTab} setOpenTab={setOpenTab} tabNum={index + 1} 
              tabText={configTab.tabText} tabName={configTab.tabName} 
              configCards={configTab.configCards}
            />
          </li>
        ))
      }
    </ul>
  )
}


function TabButtonContainer({ openTab, setOpenTab, tabNum, tabText, tabName }) {
  
    const isActiveHandler = e => {
      e.preventDefault()
      setOpenTab(tabNum)
    }
  
    const tabNameRef = `#${tabName}${tabNum}`

    const wrapperClasses = {
      size: 'w-full h-full ',
      flex: 'flex justify-center items-center ', 
      shape: 'shadow-lg leading-normal rounded-sm block ', 
      text: 'text-center text-xs text-white invisible sm:visible ', 
      animation: 'transition duration-500 ease-in-out hover:bg-green-100 hover:bg-opacity-10 transform '
    }
    const activeClasses = {
      general: 'bg-green-100 bg-opacity-10 ',
      border: 'border-2 sm:border border-white ',
    }
    const inactiveClasses = {
      general: ' ',
      border: 'border-2 sm:border border-gray-500 ',
    }
    const isActiveClasses = (openTab === tabNum) ? activeClasses : inactiveClasses
    
    const textClasses = 'text-center text-xs text-white invisible sm:visible py-1 '
  
    return (
      <motion.button
        whileHover={{ scale: 1.05, transition: { duration: 0.008 }, }}
        whileTap={{ scale: 0.9, transition: { duration: 0.008 }, }}
        onClick={isActiveHandler}
        className={
          wrapperClasses.size + wrapperClasses.flex + wrapperClasses.shape + wrapperClasses.animation
          + isActiveClasses.general + isActiveClasses.border
        }
      >
        <a href={tabNameRef} >
          <p className={textClasses}>
            { tabText }
          </p>
        </a>
      </motion.button>
    )
}


function TabsContentContainer({ openTab, configTabs }) {

  const sizeClasses = 'w-full '
  const textClasses = 'text-white break-words '
  const generalClasses = 'relative flex justify-center '

  return (
    <div className={generalClasses + sizeClasses + textClasses}>
      <div className="flex-auto py-5">
        <div className="tab-content tab-space">
          { 
            configTabs.map((configTab, index) => (
              <TabContentContainer 
                key={'projects-tab-' + index} openTab={openTab} 
                tabName={configTab.tabName} tabNum={index + 1} 
                configCards={configTab.configCards} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}


function TabContentContainer({ openTab, tabNum, tabName, configCards }) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible((openTab === tabNum))
  }, [openTab])

  const wrapperClasses = {
    setup: 'overflow-y-auto ',
    visibility: (openTab === tabNum) ? 'block opacity-100 ' : 'hidden opacity-0  ',
    animation: 'transition-all duration-1000 ease-out '
  }

  const tabNameRef = `#${tabName}${tabNum}`


  const duration = 500
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
  }

  return (
    <Transition in={isVisible} timeout={500}>
      {state => (
        <div 
          className={wrapperClasses.setup + wrapperClasses.visibility} id={tabNameRef} style={{...defaultStyle, ...transitionStyles[state]}}
        >
          <CardsContainer configCards={configCards} />
        </div>
      )}
    </Transition> 
  )
}


function CardsContainer({ configCards }) {

  return (
    <div className="flex flex-col justify-center w-full gap-6 sm:gap-2 lg:flex-row">
        { 
          configCards.map((cardConfig, index) => (
            <Card key={'proj-card-wrapper-' + index} cardConfig={cardConfig} />
          ))
        }
    </div>
  )
}


function AddLink({ isExternal, route, text }) {

  let link = null
  if (isExternal) {
    link = <a href={route}>{text}</a>
    }
  else {
    link = <Link href={route}><a> {text} </a></Link>
  }

  return (
    <>
      { 
        link
      }
    </>
  )
}


function Card({ cardConfig }) {

  const paragraphs = cardConfig.paragraphs.map((paragraph, index) => (
    <li key={'proj-card-' + index} className="leading-tight">
      { paragraph }
    </li>
  ))

  return (
    <div className="w-full mx-auto text-white bg-white rounded-md shadow-lg bg-opacity-10 lg:w-1/3 md:max-w-none md:px-10 md:py-10 md:relative md:z-50 md:flex md:flex-col hover:bg-gray-600">
      <div className="flex-grow w-full">
          <h3 className="pt-3 mb-5 overflow-y-auto text-lg font-bold text-center">
            { cardConfig.title }
          </h3>
          <ul className="px-3 mb-8 text-sm">
            { paragraphs }
          </ul>
          <div className="flex flex-wrap gap-2 px-3 pb-4">
            {
              cardConfig.tags.map((tag, index) => (
                <div key={'projects-tags-' + index} className="p-1 px-3 text-sm bg-green-800 border border-white rounded-lg bg-opacity-10">
                  { tag }
                </div>
              ))
            }
          </div>
      </div>
      <div className="w-10/12 px-3 mx-auto my-3 sm:w-full">
          <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-700">
            <AddLink isExternal={cardConfig.button.isRouteExternal} route={cardConfig.button.route} text={cardConfig.button.text} > 
            </AddLink>
          </button>
      </div>
  </div>
  )
}


export default ProjectsSection
