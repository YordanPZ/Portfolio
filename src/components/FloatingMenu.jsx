import { useRef, useEffect, useState } from "react"
import { applyHoverEffect } from "../hoverEffects"
import { motion, AnimatePresence } from "framer-motion"
export const FloatingMenu = ({ isInView, openMenu, setOpenMenu }) => {
  const menuRef = useRef(null)
  const workRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const homeRef = useRef(null)
  const social1Ref = useRef(null)
  const social2Ref = useRef(null)
  const social3Ref = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (innerWidth > 500) {
      applyHoverEffect(menuRef.current)
      applyHoverEffect(workRef.current)
      applyHoverEffect(aboutRef.current)
      applyHoverEffect(contactRef.current)
      applyHoverEffect(homeRef.current)
      applyHoverEffect(social1Ref.current)
      applyHoverEffect(social2Ref.current)
      applyHoverEffect(social3Ref.current)
    }
  }, [showMenu])

  const menuVariants = {
    hidden: {
      clipPath: "circle(0.4% at 90% 10%)",
      opacity: 0
    },
    visible: {
      clipPath: "circle(122.3% at 90% 18%)",
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      clipPath: "circle(0% at 90% 10%)",
      transition: {
        duration: 0.5
      }
    }
  }

  useEffect(() => {
    setShowMenu(openMenu)
  }, [openMenu])

  return (
    <>
      {(!isInView || openMenu) && (
        <>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="floating__menu-Main"
                ref={menuRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              </div>
              <motion.div
                className="floating-menu-content"
                initial={{ opacity: 0 }}
                animate={showMenu ? "visible" : "hidden"}
                variants={menuVariants}
              >
                <div className="floating-menu-content-inner">
                  <h3 className="floating-menu-content-title">Navigation</h3>
                  <hr className="floating-menu-content-hr" />
                  <ul className="floating-menu-content-list">
                    <li>
                      <p className="pointer" ref={homeRef}>
                        <a
                          onClick={() => {
                            setShowMenu(!showMenu)
                            setOpenMenu(!showMenu)
                          }}
                          href="#home"
                        >
                          Home
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="pointer" ref={aboutRef}>
                        <a
                          onClick={() => {
                            setShowMenu(!showMenu)
                            setOpenMenu(!showMenu)
                          }}
                          href="#about"
                        >
                          About
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="pointer" ref={workRef}>
                        <a
                          onClick={() => {
                            setShowMenu(!showMenu)
                            setOpenMenu(!showMenu)
                          }}
                          href="#work"
                          ref={workRef}
                        >
                          Work
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="pointer" ref={contactRef}>
                        <a
                          onClick={() => {
                            setShowMenu(!showMenu)
                            setOpenMenu(!showMenu)
                          }}
                          href="#contact"
                        >
                          Contact
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="floating-menu-content-inner">
                  <h3 className="floating-menu-content-title">Socials</h3>
                  <hr className="floating-menu-content-hr" />
                  <ul className="floating-menu-content-list-footer">
                    <li>
                      <p className="pointer" ref={social1Ref}>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/in/yordan-jimenez/"
                        >
                          LinkedIn
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="pointer" ref={social2Ref}>
                        <a
                          target="blank"
                          href="https://github.com/YordanPZ?tab=repositories"
                        >
                          GitHub
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="pointer" ref={social3Ref}>
                        <a
                          target="blank"
                          href="https://www.instagram.com/yordanijimenes/"
                        >
                          Instagram
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  )
}
