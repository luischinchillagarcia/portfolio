const timelineConfig = {
  container1: {
    superTitle: 'blahblah',
    title: 'blahblah',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde perspiciatis debitis nisi pariatur doloremque aliquam dolor similique eum delectus eos.',
    button: 'Explore'
  },
  container2: [
    {
      date: '(09-09-21)',
      title: 'title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim fuga, tenetur voluptas fugiat velit porro similique reiciendis molestiae sit.',
    },
    {
      date: '(09-09-21)',
      title: 'title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim fuga, tenetur voluptas fugiat velit porro similique reiciendis molestiae sit.',
    },
    {
      date: '(09-09-21)',
      title: 'title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim fuga, tenetur voluptas fugiat velit porro similique reiciendis molestiae sit.',
    },
    {
      date: '(09-09-21)',
      title: 'title',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim fuga, tenetur voluptas fugiat velit porro similique reiciendis molestiae sit.',
    },
  ],
}

function Container1({ container1Config }) {

  const classes = {
    setup: 'sticky flex flex-col px-8 mt-2 md:top-36 md:mt-12 ', 
    widths: 'w-full sm:w-3/12 md:w-6/12 ',
  }

  return (
    <div className={ classes.setup + classes.widths }>
      <p className="text-green-400 uppercase tracking-loose">
        { container1Config.superTitle }
      </p>
      <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
        { container1Config.title }
      </p>
      <p className="mb-4 text-sm md:text-base text-gray-50">
        { container1Config.text }
      </p>
      <a href="#"
        className="px-4 py-2 mr-auto text-green-400 bg-transparent border border-green-400 rounded shadow hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent">
        { container1Config.button }
      </a>
    </div>
  )
}

function Container2({ container2Config }) {

  const baseCard = (date, title, body, direction) => {
    const textSide = (direction === 'right') ? 'text-left' : 'text-right'
    
    return (
      <>
        <div className="order-1 w-5/12" />
        <div className={'order-1 w-5/12 px-1 py-4 ' + textSide}>
          <p className="mb-3 text-base text-green-400">
            { date }
          </p>
          <h4 className="mb-3 text-lg font-bold md:text-2xl">
            { title }
          </h4>
          <p className="text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
            { body }
          </p>
        </div>
      </>
  )}

  const leftCard = (date, title, body, key) => (
    <div key={key} className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
      { baseCard(date, title, body, 'left') }
    </div>
  )

  const rightCard = (date, title, body, key) => (
    <div key={key} className="flex items-center justify-between w-full mb-8 right-timeline">
      { baseCard(date, title, body, 'right') }
    </div>
  )

  const cardDivider = ( 
    <>
      <div 
        className="absolute h-full border border-2-2 border-green-555"
        style={{right: 50 + '%', border: '2px solid #34D399', borderRadius: 1 + '%'}} 
      />
      <div 
        className="absolute h-full border border-2-2 border-green-555"
        style={{left: 50 + '%', border: '2px solid #34D399', borderRadius: 1 + '%'}} 
      />
    </>
  )

  const container2 = container2Config.map((config, index) => {
    if (index % 2 === 0) {
      return leftCard(config.date, config.title, config.body, 'card-' + index) 
    }
    else {
      return rightCard(config.date, config.title, config.body, 'card-' + index)
    }
  })

  return (
    <div className="sticky ml-0 md:ml-12 sm:w-9/12 md:w-6/12">
      <div className="container w-full h-full mx-auto">
        <div className="relative h-full p-10 overflow-hidden wrap">
          { cardDivider }  
          { container2 }
        </div>
        <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
      </div>
    </div>
  )
}

function Timeline() {

  return (
    <div className="py-8 text-white">
      <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
        <Container1 container1Config={timelineConfig.container1} />
        <Container2 container2Config={timelineConfig.container2} />
      </div>
    </div>
  )

}

export default Timeline