import { IconsGallery } from "./IconsGallery"
import { motion, useInView } from "framer-motion"
import ContactWpp from "./ContactWpp"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

function Main() {
  const whatsappRef = useRef(null)
  const { t } = useTranslation()
  const isInView = useInView(whatsappRef)
  const proyects = [
    {
      name: "Ecommerce",
      description: t("translation.project1Description"),
      url: "https://ecomerceahy.netlify.app/",
      technologies: [
        "/react.svg",
        "/redux.svg",
        "/html5.svg",
        "/css3.svg",
        "/javascript.svg"
      ]
    },
    {
      name: "Pokedex",
      description: t("translation.project2Description"),
      url: "https://pokedexhya.netlify.app/",
      technologies: [
        "/react.svg",
        "/redux.svg",
        "/html5.svg",
        "/css3.svg",
        "/javascript.svg",
        "/materialui.svg"
      ]
    },
    {
      name: "CrudUsers",
      description: t("translation.project3Description"),
      url: "https://crudyordan.netlify.app/",
      technologies: [
        "/react.svg",
        "/typescript.svg",
        "/html5.svg",
        "/css3.svg",
        "/javascript.svg",
        "/tailwindcss.svg"
      ]
    },
    {
      name: "RickAndMorty",
      description: t("translation.project4Description"),
      url: "https://rickaandmortyy.netlify.app/",
      technologies: [
        "/react.svg",
        "/html5.svg",
        "/css3.svg",
        "/javascript.svg",
        "/tailwindcss.svg"
      ]
    },
    {
      name: "Weather",
      description: t("translation.project5Description"),
      url: "https://yordanluli.netlify.app/",
      technologies: ["/react.svg", "/html5.svg", "/css3.svg", "/javascript.svg"]
    }
  ]

  const renderProjects = proyects.map((project, index) => {
    return (
      <li key={project.name} className="project-item">
        <div className="main__container--projects--card">
          <h4 className="project-name">{project.name}</h4>
          <div>
            <span>{project.description}</span>
            <div className="project-technologies">
              {project.technologies.map((technology, index) => {
                return (
                  <img
                    key={technology}
                    src={technology}
                    className="technologies"
                    alt={technology}
                  />
                )
              })}
            </div>
          </div>
          <a
            href={project.url}
            target="_blank"
            className={`project-link ${project.name}`}
            rel="noreferrer"
          ></a>
        </div>
      </li>
    )
  })

  return (
    <main className="main" ref={whatsappRef}>
      <section className="main__container" id="about">
        {isInView && <ContactWpp />}
        <div className="main__container--title">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {t("translation.description")}
          </motion.h2>
        </div>
        <div className="main__container--description">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("translation.welcome")}
          </motion.h3>
        </div>
      </section>
      <section className="main__container--skills">
        <h3 className="main__container--skills--title">
          {" "}
          {t("translation.skills")}
        </h3>
        <IconsGallery />
      </section>
      <section className="main__container--projects">
        <h3 className="main__container--projects--title" id="work">
          {t("translation.projects")}
        </h3>
        <ul>{renderProjects}</ul>
      </section>
    </main>
  )
}

export default Main
