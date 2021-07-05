import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"


function ShowMoreDropdown ({ contentMore }) {

  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            style={{ overflow: "hidden" }}
          >
            { contentMore }
          </motion.section>
        )}
      </AnimatePresence>
      <button
        onClick={() => setExpanded(!expanded)}
        className="p-2 my-2 text-white border border-white"
      >
        {" "}
        {expanded ? "Show Less" : "Show More"}
      </button>
    </>
  )
}

export default ShowMoreDropdown
