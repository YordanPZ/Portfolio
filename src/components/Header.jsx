import { useEffect, useRef } from "react"
import { applyHoverEffect } from "../hoverEffects"
import { FloatingMenu } from "./FloatingMenu"
import { useInView, motion } from "framer-motion"

function Header() {
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const logoRef = useRef(null)

  const navRef = useRef(null)
  const isInView = useInView(navRef)

  useEffect(() => {
    applyHoverEffect(workRef.current)
    applyHoverEffect(aboutRef.current)
    applyHoverEffect(contactRef.current)
    applyHoverEffect(logoRef.current)
  }, [])

  const styles = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7 }
  }

  return (
    <header className="header" id="home">
      <nav className="header nav-bar">
        <div className="header nav-bar__logo">
          <motion.p
            ref={logoRef}
            variants={styles}
            initial={{ x: -100 }}
            transition={"transition"}
            animate={"animate"}
            style={{ zIndex: 1 }}
          >
            <span>©</span>Code by Yordani
          </motion.p>
        </div>
        <div className="header nav-bar__links" ref={navRef}>
          <ul>
            <motion.li
              variants={styles}
              initial={"initial"}
              transition={("transition", { delay: 0 })}
              animate={"animate"}
            >
              <a href="#about" className="active" ref={aboutRef}>
                About
              </a>
            </motion.li>
            <motion.li
              variants={styles}
              initial={"initial"}
              transition={("transition", { delay: 0.2 })}
              animate={"animate"}
            >
              <a href="#work" className="active" ref={workRef}>
                Work
              </a>
            </motion.li>
            <motion.li
              variants={styles}
              initial={"initial"}
              transition={("transition", { delay: 0.4 })}
              animate={"animate"}
            >
              <a href="#contact" className="active" ref={contactRef}>
                Contact
              </a>
            </motion.li>
          </ul>
        </div>
      </nav>
      <FloatingMenu isInView={isInView} />
      <motion.div
        className="header__location"
        variants={styles}
        initial={{ x: -300 }}
        transition={("transition", { delay: 0.2 })}
        animate={"animate"}
      >
        <p>Located in the heart of the city of Buenos Aires, Argentina</p>
        <img src="./worldwide.png" alt="worldwide" />
      </motion.div>
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        className="header__img"
        src="/yordan2.png"
        alt="yordani"
      />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        animate={{ opacity: 1 }}
        className="header__profesion"
      >
        <div>
          <i className="bx bx-arrow-back"></i>
        </div>
        <p>Web Developer</p>
        <hr className="hr" />
        <p>Scrum Master</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        className="header__name"
      >
        <h1>
          Yordani Jimenez<span> - </span>
        </h1>
        <h1>
          Yordani Jimenez<span> - </span>
        </h1>
      </motion.div>
    </header>
  )
}

export default Header
