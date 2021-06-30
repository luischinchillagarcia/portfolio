import Show from '../components/SlideShow'

const textConfig = {
  title: 'Luis G. Chinchilla-Garcia',
  subtitle: 'Data Engineer | Machine Learning Engineer | Data Science',
  subtitles: ['Data Engineer', 'Machine Learning Engineer', 'Data Science'],
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae omnis ullam, voluptatem debitis quasi? Obcaecati corporis fugit quod autem.',
  button: 'Experience'
}


function IntroLeft() {
  return (
    <div className="relative flex items-center justify-center w-full align-middle md:h-screen">
      <Show></Show>
    </div>
  )
}

function IntroRight({ textConfig }) {

  const subtitles = textConfig.subtitles.map((subtitle, index) => {
    return (
      <span 
        key={index}
        className="px-2 m-1 text-sm font-bold leading-loose bg-transparent border border-gray-500 rounded cursor-pointer opacity-3 hover:bg-gray-600">
        <a href="">{ subtitle }</a>
      </span>
    )
  })

  return (
    <div className="flex p-10 font-serif text-white bg-transparent">
      <div className="max-w-lg mt-auto mb-auto">
        <h1 className="mb-3 text-3xl uppercase">
          { textConfig.title }
        </h1>
        <div className="flex flex-wrap">
          { subtitles }
        </div>
        {/* <p className="mb-5 font-semibold">
          { textConfig.subtitle }
        </p> */}
        <p className="mt-10">
          { textConfig.text }
        </p>
        <button className="py-3 mt-6 text-black bg-white rounded-md px-7">
          { textConfig.button }
        </button>
      </div>
    </div>
  )
}

function Intro() {
  return (
    <div className="container mx-auto">
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        <IntroLeft />
        <IntroRight textConfig={textConfig} />
      </div>
    </div>
  )
}

export default Intro