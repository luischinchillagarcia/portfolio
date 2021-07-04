import { Link } from 'react-scroll'


function DownArrow({ scrollSection, numArrows=['0ms', '50ms', '100ms'] }) {
  
  return (
    <>
      <div className="relative flex flex-col justify-center w-20 h-20 mx-auto align-center">
        <div className="absolute w-full h-full">
          <Link activeClass="active" className={scrollSection} to={scrollSection} spy={true} smooth={true} duration={500} >
            <div className="w-full h-full hover:animate-downArrow active:animate-downArrowClick">
              {
                numArrows.map((duration, index) => (
                  <svg className="absolute down-arrow" style={{animationDelay: duration, paddingTop: (numArrows.length - index) * 8 + 'px', top: index * 10 + 'px'}} key={'down-arrow-' + index} width="63" height="55" viewBox="0 0 63 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 26L31.6719 52.7188" stroke="white" strokeWidth="1.61871" strokeLinecap="round"/>
                    <path d="M61.2031 26L31.9531 53" stroke="white" strokeWidth="1.61871" strokeLinecap="round"/>
                  </svg>
                ))
              }
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DownArrow