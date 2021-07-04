import { Link } from 'react-scroll'


function Timeline({ timelineConfig }) {

  return (
    <div className="py-8 text-white font-custom1">
      <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
        <div className="sticky flex flex-col w-full px-8 mt-2 md:top-36 md:mt-12 md:w-6/12 lg:w-4/12">
          <DescriptionContainer descriptionConfig={timelineConfig.descriptionConfig} />
        </div>
        <div className="sticky w-full ml-0 md:ml-12 md:w-6/12">
          <CardsContainer cardsConfig={timelineConfig.cardsConfig} />
        </div>
      </div>
    </div>
  )
}


function DescriptionContainer({ descriptionConfig }) {

  return (
    <>
      <p className="text-green-400 uppercase tracking-loose">
        { descriptionConfig.superTitle }
      </p>
      <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
        { descriptionConfig.title }
      </p>
      <p className="mb-4 text-sm md:text-base text-gray-50">
        { descriptionConfig.text }
      </p>
      <Link 
        activeClass="active" 
        className={'px-4 py-2 mr-auto text-green-400 bg-transparent border border-green-400 rounded shadow hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent ' + descriptionConfig.button.scroll} 
        to={descriptionConfig.button.scroll} spy={true} smooth={true} duration={500}
      >
          { descriptionConfig.button.text }
      </Link>
    </>
  )
}


function CardsContainer({ cardsConfig }) {

  const cardDivider = ( 
    <>
      <div 
        className="absolute hidden h-full border border-green-555 md:block"
        style={{right: 50 + '%', border: '2px solid #34D399', borderRadius: 1 + '%'}} 
      />
      <div 
        className="absolute hidden h-full border border-green-555 md:block"
        style={{left: 50 + '%', border: '2px solid #34D399', borderRadius: 1 + '%'}} 
      />
    </>
  )

  return (
    <div className="container w-full h-full pt-3 mx-auto md:pt-0">
      <div className="relative h-full p-0 overflow-hidden wrap">
        { cardDivider }  
        <CardsContentContainer cardsConfig={cardsConfig}  />
      </div>
      <img className="mx-auto " src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
    </div>
  )
}


function CardsContentContainer({ cardsConfig }) {
  return (
    <>
      {
        cardsConfig.map((config, index) => (
          (index % 2 === 0) ? 
            <LeftCard key={'timeline-card-' + index} date={config.date} title={config.title} body={config.body} />
            :
            <RightCard key={'timeline-card-' + index} date={config.date} title={config.title} body={config.body} />
          )
        )
      }
    </>
  )
}


function LeftCard({ date, title, body }) {
  return (
    <div className="flex flex-row-reverse items-center justify-between w-full px-1 mb-8 left-timeline">
      <BaseCard date={date} title={title} body={body} />
    </div>
  )
}


function RightCard({ date, title, body }) {
  return (
    <div className="flex items-center justify-between w-full px-1 mb-8 right-timeline">
      <BaseCard date={date} title={title} body={body} />
    </div>
  )
}


function BaseCard({ date, title, body }) {
  const textSide = 'text-left'
    
  return (
    <>
      <div className="order-1 w-0 md:w-5/12 " />
      <div className={'order-1 w-full md:w-5/12 px-3 py-4 bg-white bg-opacity-10 rounded-md hover:bg-gray-600 ' + textSide}>
        <p className="px-2 mb-3 text-base text-green-400">
          { date }
        </p>
        <h4 className="px-2 mb-3 text-lg md:text-xl">
          { title }
        </h4>
        <p className="px-2 text-sm leading-snug text-opacity-100 text-gray-50">
          { body }
        </p>
      </div>
    </>
  )
}


export default Timeline
