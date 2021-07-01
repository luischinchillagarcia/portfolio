import { Link } from 'react-scroll'

function Container1({ container1Config }) {

  return (
    <>
      <p className="text-green-400 uppercase tracking-loose">
        { container1Config.superTitle }
      </p>
      <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
        { container1Config.title }
      </p>
      <p className="mb-4 text-sm md:text-base text-gray-50">
        { container1Config.text }
      </p>
      <Link activeClass="active" className={'px-4 py-2 mr-auto text-green-400 bg-transparent border border-green-400 rounded shadow hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent ' + container1Config.button.scroll} to={container1Config.button.scroll} spy={true} smooth={true} duration={500}>
          { container1Config.button.text }
      </Link>
    </>
  )
}

function Container2({ container2Config }) {

  const baseCard = (date, title, body, direction) => {
    const textSide = (direction === 'right') ? 'text-left' : 'text-right'
    
    return (
      <>
        <div className="order-1 w-5/12 " />
        <div className={'order-1 w-5/12 px-2 py-4 bg-white bg-opacity-10 rounded-xl ' + textSide}>
          <p className="px-2 mb-3 text-base text-green-400">
            { date }
          </p>
          <h4 className="px-2 mb-3 text-lg md:text-xl">
            { title }
          </h4>
          <p className="px-2 text-sm leading-snug text-opacity-100 md:text-base text-gray-50">
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
        className="absolute h-full border border-green-555"
        style={{right: 50 + '%', border: '2px solid #34D399', borderRadius: 1 + '%'}} 
      />
      <div 
        className="absolute h-full border border-green-555"
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
    <div className="container w-full h-full mx-auto">
      <div className="relative h-full p-0 overflow-hidden wrap">
        { cardDivider }  
        { container2 }
      </div>
      <img className="mx-auto " src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
    </div>
  )
}

function Timeline({ timelineConfig }) {

  return (
    <div className="py-8 text-white font-custom1">
      <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
        <div className="sticky flex flex-col w-full px-8 mt-2 md:top-36 md:mt-12 sm:w-3/12 md:w-6/12 lg:w-4/12">
          <Container1 container1Config={timelineConfig.container1} />
        </div>
        <div className="sticky ml-0 md:ml-12 sm:w-9/12 md:w-6/12">
          <Container2 container2Config={timelineConfig.container2} />
        </div>
      </div>
    </div>
  )

}

export default Timeline