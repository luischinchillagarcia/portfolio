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

function Card({ cardConfig }) {

  const paragraphs = cardConfig.paragraphs.map((paragraph, index) => (
    <li key={'proj-card-' + index} className="leading-tight">
      { paragraph }
    </li>
  ))

  return (
    <div className="w-full px-8 py-8 mx-auto mb-3 text-white bg-white rounded-md shadow-lg bg-opacity-10 lg:w-1/3 md:max-w-none md:px-10 md:py-10 md:-mx-3 md:mb-4 md:relative md:z-50 md:flex md:flex-col hover:bg-gray-600">
      <div className="flex-grow w-full">
          <h3 className="mb-5 overflow-y-auto text-lg font-bold text-center">
            { cardConfig.title }
          </h3>
          <ul className="mb-8 text-sm">
            { paragraphs }
          </ul>
          <div className="flex flex-wrap gap-2 pb-4">
            {
              cardConfig.tags.map((tag, index) => (
                <div key={'projects-tags-' + index} className="p-1 text-sm bg-green-800 border border-white rounded-lg bg-opacity-10">
                  { tag }
                </div>
              ))
            }
          </div>
      </div>
      <div className="w-full">
          <button className="w-full px-10 py-2 font-bold text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-700">
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
    <div className="justify-center max-w-4xl gap-8 mx-auto md:flex ">
      { cards }
    </div>
  )
}

function ProjectsSection({ projectsConfig }) {

  return (
  <div className="flex justify-center w-full font-custom1">
    <div className="w-9/12 max-w-screen-xl">
      <div className="min-h-screen py-5 sm:px-5 max-w">
        <div className="w-full py-10 mx-auto mb-10 text-gray-600 sm:px-5">
          <HeadContainer headConfig={projectsConfig.headConfig} />
          <CardsWrapper cardsConfig={projectsConfig.cardsConfig} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProjectsSection
