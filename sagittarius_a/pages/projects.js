function HeadContainer({ headConfig }) {

  return (
    <div className="mx-auto text-center text-white">
      <h1 className="mb-5 text-5xl font-bold md:text-6xl">
        { headConfig.head }
      </h1>
      <h3 className="mb-10 text-xl font-medium">
        { headConfig.body }
      </h3>
    </div>
  )
}

function Card({ cardConfig }) {

  const paragraphs = cardConfig.paragraphs.map((paragraph, index) => (
    <li key={'proj-card-' + index} className="leading-tight">
      { paragraph }
    </li>
  ))

  return (
    <div className="w-full px-8 py-8 mx-auto mb-3 bg-gray-200 rounded-md shadow-lg lg:w-1/3 md:max-w-none md:px-10 md:py-10 md:-mx-3 md:mb-4 shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
      <div className="flex-grow w-full">
          <h2 className="mb-4 font-bold text-center uppercase">
            { cardConfig.subtitle }
          </h2>
          <h3 className="mb-5 overflow-y-auto text-xl font-bold text-center md:text-2xl xl:text-3xl">
            { cardConfig.title }
          </h3>
          <ul className="mb-8 text-sm">
            { paragraphs }
          </ul>
      </div>
      <div className="w-full">
          <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-700">
            { cardConfig.button }
          </button>
      </div>
  </div>
  )
}

function CardsWrapper({ cardsConfig }) {

  const cards = cardsConfig.map((config, index) => (
    <Card key={'proj-card-wrapper-' + index} cardConfig={config} />
  ))

  return (
    <div className="justify-center max-w-4xl gap-8 mx-auto md:flex">
      { cards }
    </div>
  )
}

function ProjectsSection() {

  return (
  <div className="flex justify-center w-full font-custom1">
    <div className="w-9/12 max-w-screen-xl">
      <div className="min-h-screen px-5 py-5 max-w">
        <div className="w-full px-5 py-10 mx-auto mb-10 text-gray-600 bg-white bg-opacity-10">
          <HeadContainer headConfig={projectsConfig.headConfig} />
          <CardsWrapper cardsConfig={projectsConfig.cardsConfig} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectsSection


const projectsConfig = {
  headConfig: {
    head: 'Pricing',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos laboriosam odit accusamus porro', 
  },
  cardsConfig: [
    {
      subtitle: 'Machine Learning',
      title: 'Name of Proj1',
      paragraphs: [
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
      ],
      button: 'Learn More'
    },
    {
      subtitle: 'Project 2',
      title: 'Name of Proj1',
      paragraphs: [
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
      ],
      button: 'Learn More'
    },
    {
      subtitle: 'Project 3',
      title: 'Name of Proj1',
      paragraphs: [
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
        'Creating a model with hf sdfh Probabilistic PCA',
      ],
      button: 'Learn More'
    },
  ]
}
