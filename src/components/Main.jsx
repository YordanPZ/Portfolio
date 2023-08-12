import { IconsGallery } from "./IconsGallery"
import { motion } from "framer-motion"
function Main() {
  const proyects = [
    {
      name: "Ecommerce",
      description: "Design & Development",
      url: "https://ecomerceahy.netlify.app/"
    },
    {
      name: "Pokedex",
      description: "Design & Development",
      url: "https://pokedexhya.netlify.app/"
    },
    {
      name: "CrudUsers",
      description: "Design & Development",
      url: "https://crudyordan.netlify.app/"
    },
    {
      name: "RickAndMorty",
      description: "Design & Development",
      url: "https://rickaandmortyy.netlify.app/"
    },
    {
      name: "Weather",
      description: "Design & Development",
      url: "https://yordanluli.netlify.app/"
    }
  ]

  const renderProjects = proyects.map((project) => {
    return (
      <li key={project.name} className="project-item">
        <div className="main__container--projects--card">
          <h4>{project.name}</h4>
          <span>{project.description}</span>
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
    <main className="main">
      <section className="main__container" id="about">
        <div className="main__container--title">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Hi! I'm Yordani. I'm passionate about development. In this digital
            space I'm sharing my work and projects. It's a reflection of my
            creativity, dedication and professional growth.
          </motion.h2>
        </div>
        <div className="main__container--description">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to my digital space!
          </motion.h3>
        </div>
      </section>
      <section className="main__container--skills">
        <h3 className="main__container--skills--title">Skills</h3>
        <IconsGallery />
      </section>
      <section className="main__container--projects">
        <h3 className="main__container--projects--title" id="work">
          Recent Projects
        </h3>
        <ul>{renderProjects}</ul>
      </section>
    </main>
  )
}

export default Main
