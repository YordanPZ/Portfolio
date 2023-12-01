import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import ContactWpp from "./ContactWpp"
import { IconsGallery } from "./IconsGallery"

function Main() {
  const whatsappRef = useRef(null)
  const { t } = useTranslation()
  const isInView = useInView(whatsappRef)
  const proyects = [
    {
      name: "MediConnect",
      description: t("translation.project8Description"),
      url: "https://frontend-no-country-actual.onrender.com/",
      technologies: [
        "/logos/nestjs.svg",
        "/logos/docker.svg",
        "/logos/nextjs.svg",
        "/logos/mysql.svg",
        "/logos/typescript.svg",
        "logos/redux.svg"
      ],
      extract: t("translation.extract8")
    },
    {
      name: "Weather",
      description: t("translation.project5Description"),
      url: "https://yordanluli.netlify.app/",
      technologies: [
        "/logos/react.svg",
        "/logos/html5.svg",
        "/logos/css3.svg",
        "/logos/javascript.svg"
      ],
      extract:
      t("translation.extract5")
    },
    {
      name: "LoginWeb",
      description: t("translation.project6Description"),
      url: "https://verifyapp.netlify.app/auth/login",
      technologies: [
        "/logos/nodejs.svg",
        "/logos/express.svg",
        "/logos/sequelize.svg",
        "/logos/postgresql.svg",
        "/logos/react.svg",
        "/logos/bootstrap.svg",
        "/logos/firebase.svg"
      ],
      extract:
      t("translation.extract6")
    },
    {
      name: "MovieApp",
      description: t("translation.project7Description"),
      url: "https://moviesappyordan.netlify.app",
      technologies: [
        "/logos/nodejs.svg",
        "/logos/express.svg",
        "/logos/sequelize.svg",
        "/logos/postgresql.svg",
        "/logos/react.svg",
        "/logos/bootstrap.svg",
        "/logos/firebase.svg"
      ],
      extract:
      t("translation.extract7")
    },
    {
      name: "Ecommerce",
      description: t("translation.project1Description"),
      url: "https://ecomerceahy.netlify.app/",
      technologies: [
        "/logos/react.svg",
        "/logos/redux.svg",
        "/logos/html5.svg",
        "/logos/css3.svg",
        "/logos/javascript.svg"
      ],
      extract:
      t("translation.extract1")
    },
    {
      name: "Pokedex",
      description: t("translation.project2Description"),
      url: "https://pokedexhya.netlify.app/",
      technologies: [
        "/logos/react.svg",
        "/logos/redux.svg",
        "/logos/html5.svg",
        "/logos/css3.svg",
        "/logos/javascript.svg",
        "/logos/materialui.svg"
      ],
      extract:
      t("translation.extract2")
    },
    {
      name: "CrudUsers",
      description: t("translation.project3Description"),
      url: "https://crudyordan.netlify.app/",
      technologies: [
        "/logos/react.svg",
        "/logos/typescript.svg",
        "/logos/html5.svg",
        "/logos/css3.svg",
        "/logos/javascript.svg",
        "/logos/tailwindcss.svg"
      ],
      extract:
      t("translation.extract3")
    },
    {
      name: "RickAndMorty",
      description: t("translation.project4Description"),
      url: "https://rickaandmortyy.netlify.app/",
      technologies: [
        "/logos/react.svg",
        "/logos/html5.svg",
        "/logos/css3.svg",
        "/logos/javascript.svg",
        "/logos/tailwindcss.svg"
      ],
      extract:
      t("translation.extract4")
    }
  ]
  const [openProjects, setOpenProjects] = useState([])
  const handleToggleProject = (index) => {
    setOpenProjects((prevOpenProjects) =>
      prevOpenProjects.includes(index)
        ? prevOpenProjects.filter((item) => item !== index)
        : [...prevOpenProjects, index]
    )
  }
  const isProjectOpen = (index) => openProjects.includes(index)

  const renderProjects = proyects.map((project, index) => {
    const isOpen = isProjectOpen(index)
    return (
      <li key={project.name} className="project-item">
        <div className="main__container--projects--card">
          <h4 className="project-name">{project.name}</h4>
          <div>
            <span>{project.description}</span>
            <div className="project-technologies">
              {project.technologies?.map((technology) => {
                return (
                  <>
                    <img
                      key={technology}
                      src={technology}
                      className="technologies"
                      alt={technology}
                    />
                  </>
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
        <motion.div
          initial={false}
          animate={{
            clipPath: isOpen
              ? "circle(200% at 94.4% 8.5%)"
              : "circle(0% at 94.4% 8.5%)"
          }}
          className="project-info"
        >
          <p>
           {project.extract}
          </p>
        </motion.div>
        <button onClick={() => handleToggleProject(index)} className="info-btn">
          <motion.svg
            className="w-6 h-6 info-icon"
            initial={false}
            animate={{
              color: isOpen ? "#ffffff" : "#000000"
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </motion.svg>
        </button>
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
