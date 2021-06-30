import React, { useState, useEffect } from "react"
import { Transition } from "react-transition-group"
import { motion } from "framer-motion"


function ContainersWrapper({ title, container1, container2 }) {

  const outerSizing = 'flex flex-col justify-center h-full font-custom1'
  
  const wrapperClasses = {
    setup: 'flex flex-col sm:flex-row justify-center ',
    heights: 'h-96 my-6 ',
    widths: 'w-10/12 sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 max-w-screen-lg ',
  }
  
  const container1Classes = {
    setup: ' ',
    widths: `w-full sm:w-3/12 lg:w-2/12 `,
    heights: 'h-6 sm:h-5/6 ',
  }
  const container2Classes = {
    setup: ' ',
    widths: `w-full sm:w-9/12 `,
    heights: 'h-full sm:h-full overflow-y-auto ',
  }

  const titleContainer = (
    <div className="flex flex-col justify-center">
      <p className="text-3xl text-white">
          { title }
      </p>
      <div className="flex justify-center mt-2">
        <div className="w-16 h-1 bg-gray-400 animate-bounce" />
      </div>
    </div>
  )

  return (
    <>
      <div className={outerSizing}>
        <div className="flex justify-center">
          { titleContainer }
        </div>
        <div className="flex justify-center">
          <div className={wrapperClasses.setup + wrapperClasses.heights + wrapperClasses.widths}>
            <div className={container1Classes.setup + container1Classes.widths + container1Classes.heights}>
              { container1 }
            </div>
            <div className={container2Classes.setup + container2Classes.widths + container2Classes.heights}>
              { container2 }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Container1({ openTab, setOpenTab, configTabs }) {

  const buttonSetup = 'text-white '
  const buttonHeights = 'h-full '
  const buttonWidths = 'w-1/4 sm:w-full '

  return (
    <ul className="flex flex-row justify-center h-full sm:flex-col ">
      {
        configTabs.map((config, index) => {
          return (
            <li key={'tab-' + index} className={buttonSetup + buttonHeights + buttonWidths}>
              <Container1Tab openTab={openTab} tabNum={index + 1} tabName={config.tabName} setOpenTab={setOpenTab} tabText={config.tabText} />
            </li>
          )
        })
      }
    </ul>
  )
}

function Container1Tab({ openTab, tabNum, tabName, setOpenTab, tabText }) {
  
    const isActiveHandler = e => {
      e.preventDefault();
      setOpenTab(tabNum)
    }
  
    const href = `#${tabName}${tabNum}`

    const wrapperClasses = {
      size: 'w-full h-full ',
      flex: 'flex justify-center items-center ', 
      shape: 'shadow-lg leading-normal sm:rounded-l-xl block ', 
      text: 'text-center text-xs text-white invisible sm:visible ', 
      animation: 'transition duration-500 ease-in-out hover:bg-green-100 hover:bg-opacity-10 transform hover:-translate-y-1 hover:scale-110 '
    }
    const activeClasses = {
      general: 'bg-green-100 bg-opacity-10 ',
      border: 'border-2 sm:border-r-2 sm:border-t-0 sm:border-l-0 sm:border-b-0 border-green-300 ',
    }
    const inactiveClasses = {
      general: ' ',
      border: 'border-2 sm:border-r-2 sm:border-t-0 sm:border-l-0 sm:border-b-0 border-gray-500 ',
    }
    const isActiveClasses = (openTab === tabNum) ? activeClasses : inactiveClasses
    
    const textClasses = 'text-center text-xs text-white invisible sm:visible '
  
    return (
      <a
        className={
          wrapperClasses.size + wrapperClasses.flex + wrapperClasses.shape + wrapperClasses.animation
          + isActiveClasses.general + isActiveClasses.border
        }
        onClick={isActiveHandler}
        data-toggle="tab"
        href={href}
        role="tablist"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <p className={textClasses}>
            { tabText }
          </p>
        </motion.button>
      </a>
    )
}

function Container2({ openTab, configTabs }) {

  const sizeClasses = 'w-4/5 min-w-0 mb-6 '
  const textClasses = 'text-white break-words '
  const generalClasses = 'relative flex flex-col '

  const container2Content = configTabs.map((config, index) => {
    return (
      <Container2Content key={'cont2Text-' + index} openTab={openTab} tabNum={index + 1} tabName={config.tabName} text={config.text} />
    )
  })

  return (
    <div className={generalClasses + sizeClasses + textClasses}>
      <div className="flex-auto px-4 py-5">
        <div className="tab-content tab-space">
          { container2Content }
        </div>
      </div>
    </div>
  )
}

function Container2Content({ openTab, tabNum, tabName, text }) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible((openTab === tabNum))
  }, [openTab])

  const wrapperClasses = {
    setup: 'overflow-y-auto ',
    visibility: (openTab === tabNum) ? 'block opacity-100 ' : 'hidden opacity-0  ',
    animation: 'transition-all duration-1000 ease-out '
  }

  const href = `#${tabName}${tabNum}`
  const bulletPoints = text.body.map((bullet, index) => (
    <li key={'bullet-' + index} className="ml-12 font-custom1 "> 
      {bullet} 
    </li>
  ))

  const tags = text.tags.map((tag, index) => (
    <Tooltip key={'tags-' + index} name={tag.name} title={tag.title} body={tag.body} show={tag.show} />
  ))

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
          <div className={wrapperClasses.setup + wrapperClasses.visibility} id={href} style={{...defaultStyle, ...transitionStyles[state]}}>
            <p className="pb-3" > 
              { text.head }
            </p>
            <ul style={{listStyle: 'circle'}} >
              { bulletPoints }
            </ul>
            <div className="flex flex-wrap justify-center gap-3 mt-7">
              { tags }
            </div>
          </div>
        )}
      </Transition>
  )
}

function Tooltip({ name, title, body, show }) {

  const [tooltipStatus, setTooltipStatus] = useState(0)

  const hoverEnterHandler = () => setTooltipStatus(3)
  const hoverLeaveHandler = () => setTooltipStatus(0)

  const tooltipWrapper = (
    <svg className="absolute top-0 bottom-0 left-0 h-full -ml-2" width="9px" height="16px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#2D3748">
                <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                    <g id="Group-2" transform="translate(24.000000, 0.000000)">
                    </g>
                </g>
            </g>
        </g>
    </svg>
  )

  const tooltipClasses = {
    setup: 'absolute z-60 w-64 p-4 ml-8 -mt-20 rounded shadow-lg font-custom1 bg-green-800 bg-opacity-90 overflow-auto ',
    animation: 'transition duration-150 ease-in-out  ',
    position: '-left-28 -top-1 '
  }
  const tooltipContent = (
    <div role="tooltip" className={tooltipClasses.setup + tooltipClasses.animation + tooltipClasses.position}>
        { tooltipWrapper }
        <p className="pb-1 text-sm font-bold text-white">
          { title }
        </p>
        <p className="pb-3 text-xs leading-4 text-white">
          { body }
        </p>
      </div>
  )

  const tagClasses = {
    setup: 'px-4 py-1 rounded-xl border bg-opacity-10 bg-green-200 ',
    text: 'text-sm font-medium text-white font-custom1  ',
    animation: show ? 'hover:bg-green-800 active:bg-green-900 focus:outline-none focus:border-green-200 transition-all ' : ' '
  }
  const tag = (
    <div className="mb-2">
      <div className={ tagClasses.setup + tagClasses.text + tagClasses.animation }>
        { name }
      </div>
    </div>
  )

  return (
    <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-center">
      <div className="relative" onMouseEnter={hoverEnterHandler} onMouseLeave={hoverLeaveHandler}>
          { tag }
          { (tooltipStatus == 3) && show && tooltipContent }
      </div>
    </div>
  )
}

const configTabs = {
  title: 'Skills and Experience',
  tabs: [
    {
      tabName: 'link',
      tabText: 'Machine Learning Engineering',
      text: {
        head: 'For Machine Learning Engineering, some of my responsibilities have included:', 
        body: [
          'Actively researching and prototyping machine learning models to personalize product recommendations', 
          'Deploying machine learning models on cloud services as part of an end-to- end machine learning workflow',
          'Developing & maintaining end-to-end machine learning pipelines that are scalable and cost effective',
        ],
        tags: [
          {name: 'Tensorflow', title: '', body: '', show: false}, 
          {name: 'Scikit-Learn', title: '', body: '', show: false},
          {name: 'Tensorflow Probability', title: '', body: '', show: false},
          {name: 'Numpy', title: '', body: '', show: false},
          {name: 'Pandas', title: '', body: '', show: false},
        ],
      },
    },
    {
      tabName: 'link',
      tabText: 'Data Engineering',
      text: {
        head: 'For Data Engineering, some of my responsibilities have included:', 
        body: [
          'Deploying machine learning models on cloud services as part of an end-to- end machine learning workflow', 
          'Collaborating with back-end engineers to integrate APIs and micro-services with the platforms',
          'Creating efficient and scalable ETL pipelines for machine learning models',
        ],
        tags: [
          {name: 'SQL', title: '', body: 'blah', show: false}, 
          {name: 'BigQuery', title: '', body: 'blah', show: false},
          {name: 'Python', title: '', body: 'blah', show: false},
          {name: 'Pandas', title: '', body: 'blah', show: false},
          {name: 'Tensorflow', title: '', body: 'blah', show: false},
          {name: 'Tensorflow-Extended', title: '', body: 'blah', show: false},
          {name: 'GCP', title: '', body: 'blah', show: false},
          {name: 'Docker', title: '', body: 'blah', show: false},
        ],
      },
    },
    {
      tabName: 'link',
      tabText: 'Data Science',
      text: {
        head: 'For Data Analysis, some of my responsibilities have included:', 
        body: [
          'Creating repeatable exploratory data analysis in Jupyter notebooks, with visualizations to aid the story-telling process of data', 
          'Integrating model analysis using rigorous mathematical methods',
          'Analyzing machine learning performance',
        ],
        tags: [
          {name: 'Python', title: '', body: 'blah', show: false}, 
          {name: 'Pandas', title: '', body: 'blah', show: false}, 
          {name: 'Tensorflow', title: '', body: 'blah', show: false}, 
          {name: 'SQL', title: '', body: 'blah', show: false}, 
          {name: 'Apache Beam', title: '', body: 'blah', show: false},
          {name: 'LaTex', title: '', body: 'blah', show: false},
        ],
      },
    },
    {
      tabName: 'link',
      tabText: 'Web Development',
      text: {
        head: 'For Web Development, some of my responsibilities have included:', 
        body: [
          'Implementing major features that increased scalability while reducing latency', 
          'Researching and integrating machine learning models to personalize UI'
        ],
        tags: [
          {name: 'Javascript', title: '', body: 'blah', show: false}, 
          {name: 'Typescript', title: '', body: 'blah', show: false},
          {name: 'HTML/Haml', title: '', body: 'blah', show: false},
          {name: 'CSS/SCSS', title: '', body: 'blah', show: false},
          {name: 'Vue', title: '', body: 'blah', show: false},
          {name: 'Nuxt', title: '', body: 'blah', show: false},
          {name: 'ReactJS', title: '', body: 'blah', show: false},
          {name: 'NextJS', title: '', body: 'blah', show: false},
        ],
      },
    },
  ]
}

export default function Hello() {

  const [openTab, setOpenTab] = useState(1)

  return (
    <div className="">
      <ContainersWrapper
        title={configTabs.title}
        container1={<Container1 openTab={openTab} setOpenTab={setOpenTab} configTabs={configTabs.tabs} />} 
        container2={<Container2 openTab={openTab} configTabs={configTabs.tabs} />} 
      />

      <br />

      {/* <Tooltip /> */}
    </div>
  )
}


