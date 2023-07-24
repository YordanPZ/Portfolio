function Main() {
  const proyects = [
    {
      name: "Weather",
      description: "Design & Development",
      url: "https://yordanluli.netlify.app/"
    },
    {
      name: "RickAndMorty",
      description: "Design & Development",
      url: "https://rickaandmortyy.netlify.app/"
    },
    {
      name: "FortuneCookie",
      description: "Design & Development",
      url: "https://yordanfortune.netlify.app/"
    },
    {
      name: "CrudUsuarios",
      description: "Design & Development",
      url: "https://crudyordan.netlify.app/"
    }
  ]
  return (
    <main className="main">
      <section className="main__container">
        <div className="main__container--title">
          <h2>
            Hi! I'm Yordani. I'm passionate about development. In this digital
            space I'm sharing my work and projects. It's a reflection of my
            creativity, dedication and professional growth.
          </h2>
        </div>
        <div className="main__container--description">
          <p>¡Welcome to my digital space of work and projects!</p>
        </div>
      </section>
      <section className="main__container--projects">
        <p className="main__container--projects--title">Recent Projects</p>
        <ul>
          {proyects.map((proyect) => {
            return (
              <li key={proyect.name} className="project-item">
                <div className="main__container--projects--card">
                  <div
                    className={"main__container--projects--card--img "}
                  ></div>
                  <h4>{proyect.name}</h4>
                  <span>{proyect.description}</span>
                  <a
                    href={proyect.url}
                    target="_blank"
                    className={`project-link ${proyect.name}`}
                    rel="noreferrer"
                  ></a>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main
