
import { Element } from 'react-scroll'

import HeadSection from "../components/sections/HeadSection"
import IntroSection from "../components/sections/IntroSection"
import ExperienceSection from "../components/sections/ExperienceSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import TimelineSection from "../components/sections/TimelineSection"
import ContactSection from "../components/sections/ContactSection"
import { DataGraph, Planet, Neuron, Database } from '../components/section_elements/Icons'


const headSectionConfig = {
  scrollSection: 'IntroSection',
  staticStars: {
    numStars: 50, gapLo: 45, gapHi: 55, size: 12, sizeVar: 5, opacity: 0.5, opacityVar: 0.3, classes: '', minAnimDuration: 0.0, maxAnimDuration: 2.5,
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
  scrollSection: 'ExperienceSection',
  text: {
    title: 'Luis G. Chinchilla-Garcia',
    subtitle: 'Data Engineer | Machine Learning Engineer | Data Science',
    subtitles: ['Data Engineer', 'Machine Learning Engineer', 'Data Science'],
    text:[ 
      `I am a Machine Learning Engineer who also delves into the worlds of Data Engineering and Web Development. 
      Currently, I am a Data Engineer at Red Bull, where I focus on creating scalable end-to-end machine learning 
      models for Recommender Systems.`,
      `I graduated from the University of California, Los Angeles with a BS in Astrophysics. During that time, I 
      completed four years of research as part of a research fellowship and was also a co author in a paper 
      (details below).`
    ],
    button: {text: 'See Experience', scroll: 'ExperienceSection'},
  },
  images: [
    '/planet.svg',
    '/data_graph.svg',
    '/database.svg',
    '/neuron.svg',
  ]
}

const experienceSectionConfig = {
  scrollSection: 'ProjectsSection',
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
          {name: 'Recommender Systems', title: '', body: '', show: false},
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
        head: 'For Data Science, some of my responsibilities have included:', 
        body: [
          'Creating repeatable exploratory data analysis in Jupyter notebooks, with visualizations to aid the story-telling process of data', 
          'Integrating model analysis using rigorous mathematical methods using tools like Pandas, NumPy, Tensorflow',
          'Analyzing machine learning performance, with visualizations and statistically-based conclusions',
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
          'Created internal tools for recommender systems using Vue/Nuxt',
          'Implementing major features that increased scalability while reducing latency with TypeScript/ReactJS', 
          'Researching and integrating machine learning models to personalize UI',
        ],
        tags: [
          {name: 'Javascript', title: '', body: 'blah', show: false}, 
          {name: 'Typescript', title: '', body: 'blah', show: false},
          {name: 'HTML/Haml', title: '', body: 'blah', show: false},
          {name: 'CSS/SCSS', title: '', body: 'blah', show: false},
          {name: 'Tailwind', title: '', body: 'blah', show: false},
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
  scrollSection: 'TimelineSection',
  headConfig: {
    head: 'Projects',
    body: 'Below are some of the most recent projects I have been working on', 
  },
  configTabs: [
    { 
      tabText: 'Machine Learning',
      tabName: 'project',
      configCards: [
        {
          title: 'Probabilistic PCA',
          paragraphs: [
            'Extending Principal Component Analysis(PCA) to use a probabilistic approach.',
            'In doing so, it is possible to push the use of PCA and generate new outputs.',
          ],
          tags: ['Python', 'Tensorflow', 'Tensorflow Probability'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
        {
          title: 'Extending Probabilistic Linear Regression',
          paragraphs: [
            'Linear regression is a foundational part of mathematics that provides the foundation to machine learning.',
            'This project revolves around extending linear regression with probability and its practical uses.'
          ],
          tags: ['Mathematics', 'Probability', 'Linear Regression'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
        {
          title: 'Music Chord Progressions',
          paragraphs: [
            'Utilizing both Sequence and Attention based models to generate a sequence of chords.',
            'Data from this project is personally taken using MIDI files or transcriptions of chord progressions in musical pieces.',
            'This section is focused on crating the model itself using Tensorflow.'
          ],
          tags: ['Python', 'Tensorflow', 'NumPy'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
      ],
    }, 
    { 
      tabText: 'Data Science',
      tabName: 'project',
      configCards: [
        {
          title: 'Probabilistic PCA',
          paragraphs: [
            'Extending Principal Component Analysis(PCA) to use a probabilistic approach.',
            'In doing so, it is possible to push the use of PCA and generate new outputs.',
            'This is the background of the mathematics and analysis of this project.'
          ],
          tags: ['Python', 'Tensorflow', 'Tensorflow Probability', 'Jupyter', 'Matplotlib'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
        {
          title: 'Cognitio',
          paragraphs: [
            'Set of mathematical articles with the purpose of diving deeper into the mathematics behind ML/Data Science topics.',
          ],
          tags: ['Mathematics', 'Probability','Statistics'],
          button: {text: 'Learn More', isRouteExternal: true, route: 'https://luisgc2116.github.io/cognitio.io/'}
        },
        {
          title: 'Music Chord Progressions',
          paragraphs: [
            'Utilizing both Sequence and Attention based models to generate a sequence of chords.',
            'Data from this project is personally taken using MIDI files or transcriptions of chord progressions in musical pieces.',
          ],
          tags: ['Seq-to-seq', 'Attention Models', 'Transformers'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
      ],
    }, 
    { 
      tabText: 'Data Engineering',
      tabName: 'project',
      configCards: [
        {
          title: 'Probabilistic PCA',
          paragraphs: [
            'Creating an API endpoint to access the Probabilistic PCA model.',
            'Still in development and coming soon...',
          ],
          tags: ['Python', 'FastAPI'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
        {
          title: 'Extending TFX',
          paragraphs: [
            'Expanding the base template of TFX while extending it to use different kinds of data with various models.',
          ],
          tags: ['Python', 'Tensorflow', 'TFX', 'Apache Beam'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
        {
          title: 'Music Chord Progressions',
          paragraphs: [
            'Utilizing both Sequence and Attention based models to generate a sequence of chords.',
            'This part of the project will focus on deploying the model using an API.',
          ],
          tags: ['Seq-to-seq', 'Attention Models', 'Transformers', 'FastAPI'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
      ],
    }, 
    { 
      tabText: 'Web Development',
      tabName: 'project',
      configCards: [
        {
          title: 'Portfolio V2',
          paragraphs: [
            'Created a personal portfolio website using ReactJS/NextJS with Tailwind.',
            'Animations are largely done using the Framer Motion framework.',
            'The intention was to share it as a template for others to be able to use.'
          ],
          tags: ['JavaScript', 'ReactJs', 'NextJS', 'HTML', 'TailwindCSS'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/'}
        },
        {
          title: 'Portfolio V1',
          paragraphs: [
            'Created a personal portfolio website using Vue/Nuxt.',
            'The intention was to share it as a template for others to be able to use.',
          ],
          tags: ['JavaScript', 'Vue', 'Nuxt', 'HTML', 'SCSS'],
          button: {text: 'Learn More', isRouteExternal: true, route: 'https://luisgc2116.github.io/Portfolio/'}
        },
        {
          title: 'Planetary Simulation',
          paragraphs: [
            'Created a simplified black hole static simulation.',
            'Motion and physics was done using the React-Three-Fiber framework with ReactJS and NextJS.',
          ],
          tags: ['JavaScript', 'ReactJs', 'NextJS', 'React-Three-Fiber', 'React-Spring', 'HTML', 'CSS'],
          button: {text: 'Learn More', isRouteExternal: false, route: '/in-progress'}
        },
      ],
    },
  ],
}

const timelineConfig = {
  descriptionConfig: {
    superTitle: '(2015-Now)',
    title: 'Timeline',
    text: `
      Here are a few notable professional events that include Astrophysics research, and experience in Machine Learning/Data Engineering.
    `,
    button: {text: 'Contact Me', scroll: 'ContactSection'}
  },
  cardsConfig: [
    {
      date: '(2015-2018)',
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
      body: 'Research, prototype, and deploy machine learning models on cloud services to personalize product recommendations as part of an end-to-end machine learning workflow. Furthermore, created a webapp internal tool to be able to observe recommendations from deployed models with their respective metadata.',
    },
  ],
}

const contactConfig = {
  button1: {text: 'Email', href: 'mailto:luisgc2116@gmail.com'},
  button2: {text: 'Resume', href: '/resume.pdf'},
  title: 'Contact Me',
  body: 'I\'m always open for discussions, so feel free to contact me!',
}


function HeadContainer() {
  
  return (
    <>
      <Element name="HeadSection" className="pb-32 HeadSection">
        <HeadSection headSectionConfig={headSectionConfig}  />
      </Element>
      <Element name="IntroSection" className="py-32 IntroSection">
        <IntroSection introConfig={introSectionConfig} />
      </Element>
      <Element name="ExperienceSection" className="py-32 ExperienceSection">
        <ExperienceSection experienceConfig={experienceSectionConfig}  />
      </Element>
      <Element name="ProjectsSection" className="py-32 ProjectsSection">
        <ProjectsSection projectsConfig={projectsConfig}  />
      </Element>
      <Element name="TimelineSection" className="py-32 TimelineSection">
        <TimelineSection timelineConfig={timelineConfig}  />
      </Element>
      <Element name="ContactSection" className="py-64 pb-64 ContactSection">
        <ContactSection contactConfig={contactConfig} />
      </Element>
      <div className="pb-64" />
    </>
  )
}


export default HeadContainer
