import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 10 : -10,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 10 : -10,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

function AddAnimationImages({ page, direction, currImage, paginate }) {

  return (
    <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
      <motion.img
        key={page}
        src={currImage}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.5 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}
      />
    </AnimatePresence>
  )
}

function AddMotion({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onMouseDown={e => e.preventDefault()}
    >
      {children}
    </motion.button>
  )
}

function SlideShow({ images }) {

  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="flex flex-col items-center h-full gap-2 align-middle">
        <div className="flex items-center h-full align-middle">
          <AddAnimationImages 
            page={page} direction={direction} 
            currImage={images[imageIndex]} paginate={paginate} 
          />
        </div>
        <div 
          className="flex items-center justify-between gap-2 align-middle h-7" 
          onClick={() => paginate(-1)}
        >
          <AddMotion>
            <div className="flex items-center justify-center h-full text-xl text-white align-middle bg-white rounded-lg w-11 bg-opacity-10">
              <p style={{transform: 'scale(-1) translateY(3px)'}}>{"▶"}</p>
            </div>
          </AddMotion>
          <AddMotion>
            <div className="flex items-center justify-center h-full text-xl text-white align-middle bg-white rounded-lg w-11 bg-opacity-10">
              <p>{"▶"}</p>
            </div>
          </AddMotion>
        </div>
      </div>
    </>
  )
}

export default SlideShow
