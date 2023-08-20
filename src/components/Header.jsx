import { useEffect, useRef, useState } from "react"
import { applyHoverEffect } from "../hoverEffects"
import { FloatingMenu } from "./FloatingMenu"
import { useInView, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import i18n from "i18next"

import BackgroundStars from "../BackgroundStars"
import DownloadCv from "./DownloadCv"

function Header() {
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const logoRef = useRef(null)
  const { t } = useTranslation()

  const navRef = useRef(null)
  const isInView = useInView(navRef)
  const [openMenu, setOpenMenu] = useState(false)

  const [hideNavBar, setHideNavBar] = useState(false)
  useEffect(() => {
    if (innerWidth > 500) {
      setTimeout(() => {
        applyHoverEffect(workRef.current)
        applyHoverEffect(aboutRef.current)
        applyHoverEffect(contactRef.current)
        applyHoverEffect(logoRef.current)
      }, 1000)
    }
  }, [])

  useEffect(() => {
    if (innerWidth <= 770) {
      hideNav()
    } else {
      showNav()
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 770) {
        hideNav()
      } else {
        showNav()
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function hideNav() {
    setHideNavBar(false)
  }
  function showNav() {
    setHideNavBar(true)
  }

  const styles = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.7 }
  }
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language)
  }

  const textNav = (
    <ul>
      <motion.li
        variants={styles}
        initial={"initial"}
        transition={("transition", { delay: 0 })}
        animate={"animate"}
      >
        <a href="#about" className="active" ref={aboutRef}>
          {t("translation.about")}
        </a>
      </motion.li>
      <motion.li
        variants={styles}
        initial={"initial"}
        transition={("transition", { delay: 0.2 })}
        animate={"animate"}
      >
        <a href="#work" className="active" ref={workRef}>
          {t("translation.work")}
        </a>
      </motion.li>
      <motion.li
        variants={styles}
        initial={"initial"}
        transition={("transition", { delay: 0.4 })}
        animate={"animate"}
      >
        <a href="#contact" className="active" ref={contactRef}>
          {t("translation.contact")}
        </a>
      </motion.li>
      <motion.li
        variants={styles}
        initial={"initial"}
        transition={("transition", { delay: 0.6 })}
        animate={"animate"}
      >
        <DownloadCv />
      </motion.li>
    </ul>
  )
  const textNavMobile = (
    <li onClick={() => setOpenMenu(!openMenu)}>{t("translation.menu")}</li>
  )

  return (
    <header className="header" id="home">
      {innerWidth >= 800 && <BackgroundStars />}
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
            {t("translation.code")}
            <span></span>
          </motion.p>
          <div className="container">
            <div className="tabs">
              <input type="radio" id="radio-1" name="tabs" />
              <label
                onClick={() => handleLanguageChange("es")}
                className="tab"
                htmlFor="radio-1"
              >
                {t("translation.spanish")}
              </label>
              <input type="radio" id="radio-2" name="tabs" />
              <label
                onClick={() => handleLanguageChange("en")}
                className="tab"
                htmlFor="radio-2"
              >
                {t("translation.english")}
              </label>
              <input type="radio" id="radio-3" name="tabs" />
              <span className="glider"></span>
            </div>
          </div>
        </div>
        <div className="header nav-bar__links" ref={navRef}>
          <ul>{hideNavBar && !openMenu ? textNav : textNavMobile}</ul>
        </div>
      </nav>
      <FloatingMenu
        isInView={isInView}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <motion.div
        className="header__location"
        variants={styles}
        initial={{ x: -300 }}
        transition={("transition", { delay: 0.2 })}
        animate={"animate"}
      >
        <p>{t("translation.location")}</p>
        <img src="./worldwide.png" alt="worldwide" />
      </motion.div>
      <div className="header__img-container">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          animate={{ opacity: 1, y: 0 }}
          className="header__img"
          src="/bulb.png"
          alt="yordani"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        animate={{ opacity: 1 }}
        className="header__profesion"
      >
        <div>
          <i className="bx bx-arrow-back"></i>
        </div>
        <p>{t("translation.profession")}</p>
        <hr className="hr" />
        <p>{t("translation.profession1")}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        animate={{ opacity: 1, y: 0 }}
        className="header__name"
      >
        <h1>
          {t("translation.name")}
          <span>{t("translation.separator")}</span>
        </h1>
        <h1>
          {t("translation.name")}
          <span>{t("translation.separator")}</span>
        </h1>
      </motion.div>
    </header>
  )
}

export default Header
