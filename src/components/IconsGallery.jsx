import React, { useRef } from "react"
import { motion } from "framer-motion"

export const IconsGallery = () => {
  const constraintsRef = useRef(null)
  const Icons = [
    "/logos/typescript.svg",
    "/logos/react.svg",
    "/logos/css3.svg",
    "/logos/git.svg",
    "/logos/github.svg",
    "/logos/html5.svg",
    "/logos/javascript.svg",
    "/logos/tailwindcss.svg",
    "/logos/redux.svg",
    "/logos/bootstrap.svg",
    "/logos/materialui.svg",
    "/logos/handlebars.svg",
    "/logos/jest.svg",
    "/logos/postgresql.svg",
    "/logos/sequelize.svg",
    "/logos/nodejs.svg",
    "/logos/express.svg",
    "/logos/docker.svg",
    "/logos/mongodb.svg",
    "/logos/jira.svg",
    "/logos/vuejs.svg",
    "/logos/nextjs.svg",
    "/logos/mysql.svg",
    "/logos/nestjs.svg",
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
