import React, { useRef } from "react"
import { motion } from "framer-motion"

export const IconsGallery = () => {
  const constraintsRef = useRef(null)
  const Icons = [
    "/typescript.svg",
    "/react.svg",
    "/css3.svg",
    "/git.svg",
    "/github.svg",
    "/html5.svg",
    "/javascript.svg",
    "/tailwindcss.svg",
    "/redux.svg",
    "/bootstrap.svg",
    "/materialui.svg",
    "/handlebars.svg",
    "/jest.svg",
    "/postgresql.svg",
    "/sequelize.svg",
    "/nodejs.svg",
    "/express.svg"
  ]
  const renderIcons = Icons.map((icon) => {
    return (
      <motion.img
        key={icon}
        className="skill"
        drag
        dragConstraints={constraintsRef}
        src={icon}
        whileHover={{ scale: 1.1 }} // Escala los iconos al hacer hover
        whileTap={{ scale: 1.2 }} // Escala los iconos al arrastrar
        dragElastic={0.3} // Hace que el ícono sea más "pegajoso" mientras se arrastra
        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }} // Añade un efecto de rebote al arrastrar
      />
    )
  })
  return (
    <motion.div className="skill__container" ref={constraintsRef}>
      {renderIcons}
    </motion.div>
  )
}
