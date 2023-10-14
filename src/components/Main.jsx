import { IconsGallery } from "./IconsGallery"
import { motion, useInView } from "framer-motion"
import ContactWpp from "./ContactWpp"
import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"

function Main() {
  const whatsappRef = useRef(null)
  const { t } = useTranslation()
  const isInView = useInView(whatsappRef)
  const proyects = [
    {
      name: "LoginWeb",
      description: "FrontEnd & BackEnd",
      url: "https://verifyapp.netlify.app/auth/login",
      technologies: [
        "/nodejs.svg",
        "/express.svg",
        "/sequelize.svg",
        "/postgresql.svg",
        "/react.svg",
        "/bootstrap.svg"
      ],
      extract:
        "LoginApp es una aplicación web full-stack que permite a los usuarios registrarse e iniciar sesión. El frontend está desarrollado con React y Bootstrap para una interfaz intuitiva y responsive. El backend utiliza Node.js, Express y Sequelize para conectarse a una base de datos PostgreSQL. Al registrarse, los usuarios reciben un email de confirmación para verificar su cuenta. Luego pueden iniciar sesión y restablecer su contraseña a través de un email de recuperación. Este proyecto demuestra mis habilidades en desarrollo full-stack, manejo de autenticación y autorización de usuarios, envío de emails transaccionales, y uso de tecnologías populares como React, Node.js y PostgreSQL para construir aplicaciones web seguras y escalables."
    },
    {
      name: "MovieApp",
      description: "FrontEnd & BackEnd",
      url: "https://moviesappyordan.netlify.app",
      technologies: [
        "/nodejs.svg",
        "/express.svg",
        "/sequelize.svg",
        "/postgresql.svg",
        "/react.svg",
        "/bootstrap.svg"
      ],
      extract:
        "MovieApp es una aplicación web full-stack que permite administrar una base de datos de películas. El frontend hecho con React y Bootstrap ofrece una interfaz para agregar, modificar y eliminar películas, directores, actores e imágenes. El backend desarrollado con Node.js, Express y Sequelize se conecta a una base de datos PostgreSQL para almacenar los datos. Este proyecto demuestra mis habilidades para construir un sistema completo de administración de contenidos, desde el frontend hasta la base de datos, utilizando tecnologías como React, Node.js y PostgreSQL. Las capacidades que exhibe incluyen CRUD de datos, ruteo y navegación en el frontend, conexión a bases de datos relacionales en el backend, y despliegue de la aplicación full-stack."
    },
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
      ],
      extract:
        "Ecommerce es una aplicación web full-stack de comercio electrónico. El frontend está desarrollado con React y Redux. Los usuarios pueden registrarse, autenticarse, navegar el catálogo de productos, agregar al carrito y completar una compra. El backend utiliza Node.js, Express y Sequelize para la lógica del servidor e integrar una base de datos PostgreSQL donde se almacenan los productos, órdenes, usuarios, etc. El proyecto demuestra mis habilidades para construir aplicaciones web full-stack seguras y escalables, con un frontend moderno y atractivo con React, y un backend robusto con Node.js y PostgreSQL. Las capacidades exhibidas incluyen autenticación y autorización, lógica de negocios, y CRUD de datos con una base de datos relacional."
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
      ],
      extract:
        "Pokedex es una aplicación web desarrollada con React, Redux y Material UI que consume la API de PokeAPI para mostrar datos de diferentes Pokémon. Los usuarios pueden ver una lista completa de Pokémon o buscar por nombre para encontrar información específica como estadísticas, movimientos, tipos y debilidades. Implementé paginación y filtros para mejorar la experiencia de usuario. Los detalles de cada Pokémon se muestran en una tarjeta con un diseño limpio y moderno gracias a Material UI. Este proyecto demuestra mis habilidades consumiendo y trabajando con APIs externas en el frontend, además de crear interfaces atractivas y dinámicas con React y Redux."
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
      ],
      extract:
        "CrudUsers es una aplicación web desarrollada con React, TypeScript y Tailwind CSS que permite administrar usuarios con operaciones CRUD (crear, leer, actualizar, eliminar). La interfaz permite ver una lista de usuarios, agregar nuevos, editar la información y eliminar. Los datos se almacenan temporalmente en el estado de React con hooks y TypeScript aporta tipado estático. El proyecto demuestra mis habilidades en el desarrollo de aplicaciones web con React y TypeScript, creando interfaces responsive con Tailwind CSS. Las capacidades mostradas incluyen operaciones CRUD, manejo de estado con hooks, validaciones en los formularios, y uso de tipado estático para mejorar el maintainability."
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
      ],
      extract:
        "RickAndMorty es una aplicación web desarrollada con React y TailwindCSS que consume la API de Rick and Morty para mostrar información de los personajes. Los usuarios pueden explorar los distintos personajes, ver detalles como su especie, origen y episodios en los que aparecen. También se muestran capturas de los personajes. La interfaz está diseñada responsivamente con TailwindCSS. La información se obtiene dinámicamente desde la API con fetches y se renderiza con componentes reutilizables. Este proyecto demuestra mis habilidades consumiendo APIs externas, creando interfaces dinámicas con React, y construyendo un diseño moderno y adaptable con TailwindCSS."
    },
    {
      name: "Weather",
      description: t("translation.project5Description"),
      url: "https://yordanluli.netlify.app/",
      technologies: [
        "/react.svg",
        "/html5.svg",
        "/css3.svg",
        "/javascript.svg"
      ],
      extract:
        "Weather es una aplicación web desarrollada con React que consume la API de OpenWeatherMap para obtener datos meteorológicos. Los usuarios pueden buscar por ciudad y ver el clima actual, el pronóstico para el día y la semana con detalles como temperatura, humedad y velocidad del viento. La interfaz muestra iconos representativos del estado del tiempo y gráficos limpios con la información. Los datos se actualizan dinámicamente al cambiar de ubicación. El proyecto demuestra mis habilidades para consumir APIs de terceros, mostrar los datos de forma clara en la interfaz, y actualizar la UI en función de la interacción del usuario en una aplicación web moderna creada con React."
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
              {project.technologies.map((technology, index) => {
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
