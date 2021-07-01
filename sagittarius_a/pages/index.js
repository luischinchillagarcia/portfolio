
import { useRef } from "react"

import HeadSection from "../components/sections/HeadSection"
import IntroSection from "../components/sections/IntroSection"
import ExperienceSection from "../components/sections/ExperienceSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import TimelineSection from "../components/sections/TimelineSection"
import ContactSection from "../components/sections/ContactSection"
import { DataGraph, Planet, Neuron, Database } from '../components/section_elements/Icons'

const headSectionConfig = {
  staticStars: {
    numStars: 50, gapLo: 45, gapHi: 55, size: 20, sizeVar: 10, opacity: 0.5, opacityVar: 0.3, classes: '', minAnimDuration: 0.0, maxAnimDuration: 2.5,
  },
  movingStars: {
    numStars: 5, initX: -3, xVar: 5, initY: -20, yVar: 5, size: 35, sizeVar: 15, opacity: 0.8, opacityVar: 0.2, delay: 1, delayVar: 1, duration: 4, durationVar: 0.4, initAngle: 0, initAngleVar: 1, endAngle: 180, endAngleVar: 1
  },
  text: {
    titleText: 'Luis Chinchilla-Garcia, and I am:',
    labels: [
      {
        component: Database,
        text: 'a Data Engineer',
      },
      {
        component: DataGraph,
        text: 'a Data Scientist',
      },
      {
        component: Neuron,
        text: 'a Machine Learning Engineer',
      },
      {
        component: Planet,
        text: 'an Astrophysicist',
      },
  ]},
}

const introSectionConfig = {
  text: {
    title: 'Luis G. Chinchilla-Garcia',
    subtitle: 'Data Engineer | Machine Learning Engineer | Data Science',
    subtitles: ['Data Engineer', 'Machine Learning Engineer', 'Data Science'],
    text: `I am a Machine Learning Engineer who also delves into the worlds of Data Engineering and Web Development. Currently, I am a Data Engineer at Red Bull, where I focus on creating scalable end-to-end machine learning models for Recommender Systems.

    I graduated from the University of California, Los Angeles with a BS in Astrophysics. During that time, I completed four years of research as part of a research fellowship and was also a co author in a paper (details below).`,
    button: {text: 'See Experience', scroll: 'TimelineSection'},
  },
  images: [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
  ]
}

const experienceSectionConfig = {
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

const projectsConfig = {
  headConfig: {
    head: 'Projects',
    body: 'Below are some of the most recent projects I have worked on or am working on', 
  },
  cardsConfig: [
    {
      subtitle: 'ML Engineering',
      title: 'Probabilistic PCA',
      paragraphs: [
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
      ],
      tags: ['Data Science', 'ML'],
      button: 'Learn More'
    },
    {
      subtitle: 'Data Science',
      title: 'Name of Proj1',
      paragraphs: [
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
      ],
      tags: ['Data Science', 'ML'],
      button: 'Learn More'
    },
    {
      subtitle: 'Data Science',
      title: 'Name of Proj1',
      paragraphs: [
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
      ],
      tags: ['Data Science', 'ML'],
      button: 'Learn More'
    },
  ]
}

const timelineConfig = {
  container1: {
    superTitle: 'wefewf',
    title: 'wefwefwefwr',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde perspiciatis debitis nisi pariatur doloremque aliquam dolor similique eum delectus eos.',
    button: {text: 'Contact Me', scroll: 'ContactSection'}
  },
  container2: [
    {
      date: '(2014-2018)',
      title: 'Study of Filaments Near the Galactic Center',
      subtitle: 'Astrophysics Research: UCLA',
      body: 'Conducted image processing and statistical analysis on data take by space telescopes WISE and SPITZER on gas filaments AFGL-5376 and Double Helix Nebula in the Galactic Center.',
    },
    {
      date: '(Summer 2016)',
      title: 'Radio Transient Classification',
      subtitle: 'Astrophysics Research: UC Berkeley',
      body: 'Used clustering techniques to classify fast radio transients. This work was done under the mentorship of Dr. Casey Law and Dr. Carl Heiles.',
    },
    {
      date: '(2016-2017)',
      title: 'Search for Technosignature in TRAPPIST-1',
      subtitle: 'Astrophysics Research: UCLA',
      body: 'Collected over three terabytes of observational data from the 100m Green Bank telescope to identify possible technosignatures near TRAPPIST-1.',
    },
    {
      date: '(2017-now)',
      title: 'Lead Machine Learning Engineer',
      subtitle: 'Logos',
      body: 'Leading the data science team toward researching, developing & experimenting machine learning models to solve problems in Natural Language Processing, personalized UI/UX, and business-oriented analysis.',
    },
    {
      date: '(2019-now)',
      title: 'Red Bull',
      subtitle: 'Data Engineer',
      body: 'Research, prototype, and deploy machine learning models on cloud services to personalize product recommendations as part of an end-to-end machine learning workflow.',
    },
  ],
}

const contactConfig = {
  button1: 'Email',
  button2: 'Resume',
  title: 'Contact Me',
  body: 'I\'m always open for discussions, so feel free to contact me!',
}


function HeadContainer() {
  
  return (
    <>
      <HeadSection headSectionConfig={headSectionConfig}  class="HeadSection" />
      <div className="pb-64" />
      <IntroSection introConfig={introSectionConfig}  class="IntroSection" />
      <div className="pb-64" />
      <ExperienceSection experienceConfig={experienceSectionConfig}  class="ExperienceSection" />
      <div className="pb-64" />
      <ProjectsSection projectsConfig={projectsConfig}  class="ProjectsSection" />
      <div className="pb-64" />
      <TimelineSection timelineConfig={timelineConfig}  class="TimelineSection" />
      <div className="pb-64" />
      <div className="pb-32" />
      <ContactSection contactConfig={contactConfig} class="ContactSection" />
      <div className="py-64" />
    </>
  )
}


export default HeadContainer
