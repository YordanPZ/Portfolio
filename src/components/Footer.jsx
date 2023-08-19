import { useEffect, useState, useRef } from "react"
import { obtenerHoraBuenosAires } from "../TimeCalculator"
import { applyHoverEffect } from "../hoverEffects"
import { useTranslation } from "react-i18next"

function Footer() {
  const [horaBuenosAires, setHoraBuenosAires] = useState("")
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const social1Ref = useRef(null)
  const social2Ref = useRef(null)
  const social3Ref = useRef(null)
  const { t } = useTranslation()

  useEffect(() => {
    setHoraBuenosAires(obtenerHoraBuenosAires())
  }, [])

  useEffect(() => {
    if (innerWidth > 500) {
      applyHoverEffect(emailRef.current)
      applyHoverEffect(phoneRef.current)
      applyHoverEffect(social1Ref.current)
      applyHoverEffect(social2Ref.current)
      applyHoverEffect(social3Ref.current)
    }
  }, [])

  const handleEmailClick = () => {
    const email = "yordanpz@hotmail.com"
    window.location.href = `mailto:${email}`
  }

  const handlePhoneClick = () => {
    const phoneNumber = "+541123807219"
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__logo">
          <h4 className="footer__logo--title">
            <div className="footer__logo--img--container">
              <div className="footer__logo--img"></div>{t("translation.together")}
            </div>{" "}
            <span>{t("translation.together1")}</span>
          </h4>
        </div>
        <hr className="footer__line" />
        <div className="footer__contact">
          <div
            className="footer__contact--email"
            ref={emailRef}
            onClick={handleEmailClick}
          >
            yordanpz@hotmail.com
          </div>
          <div
            className="footer__contact--phone"
            ref={phoneRef}
            onClick={handlePhoneClick}
          >
            +54 11 2380 7219
          </div>
        </div>
      </div>
      <div className="footer__container--info">
        <div className="footer__container--info--address">
          <h5> {t("translation.time")}</h5>
          <p>{horaBuenosAires} UTC-3</p>
        </div>
        <div className="footer__container--info--socials">
          <h5> {t("translation.socials")}</h5>
          <div className="footer__container--info--socials--links">
            <a
              href="https://www.linkedin.com/in/yordan-jimenez/"
              target="blank"
            >
              <p ref={social1Ref}>LinkedIn</p>
            </a>
            <a href="https://wa.link/r4ng1k" target="blank">
              <p ref={social2Ref}>WhatsApp</p>
            </a>
            <a
              href="https://github.com/YordanPZ?tab=repositories"
              target="blank"
            >
              <p ref={social3Ref}>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
