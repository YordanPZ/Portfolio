import { useEffect, useState, useRef } from "react"
import { obtenerHoraBuenosAires } from "../TimeCalculator"
import { applyHoverEffect } from "../hoverEffects"
import { useTranslation } from "react-i18next"
import { useForm, ValidationError } from "@formspree/react"
import { Toaster, toast } from "sonner"

function Footer() {
  const [horaBuenosAires, setHoraBuenosAires] = useState("")
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const social1Ref = useRef(null)
  const social2Ref = useRef(null)
  const social3Ref = useRef(null)
  const submitRef = useRef(null)
  const { t } = useTranslation()

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    organization: "",
    menssage: ""
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }))
  }
  const resetForm = () => {
    setInputs({
      name: "",
      email: "",
      organization: "",
      menssage: ""
    })
  }

  const [state, handleSubmit] = useForm("xpzgdwnn")
  const onSubmitSuccess = () => {
    toast.success(t("translation.emailsent"))
    resetForm()
  }
  const sendEmail = () => {
    handleSubmit(inputs)
    onSubmitSuccess()
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()
    sendEmail()
  }
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
      applyHoverEffect(submitRef.current)
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
      <Toaster richColors />
      <div className="footer__container">
        <div className="footer__logo">
          <h4 className="footer__logo--title">
            <div className="footer__logo--img--container">
              <div className="footer__logo--img"></div>
              {t("translation.together")}
            </div>{" "}
            <span>{t("translation.together1")}</span>
          </h4>
        </div>
        <hr className="footer__line" />
      </div>
      <div className="footer__contact">
        <div
          className="footer__contact--email"
          ref={emailRef}
          onClick={handleEmailClick}
        >
          <p>yordanpz@hotmail.com</p>
        </div>
        <div
          className="footer__contact--phone"
          ref={phoneRef}
          onClick={handlePhoneClick}
        >
          <p>+54 11 2380 7219</p>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmitForm} className="footer__form" action="">
          <div className="form__list">
            <h3 className="form__list--title">{t("translation.formtitle")}</h3>
            <div className="form__list--item">
              <h5>01</h5>
              <label className="label" htmlFor="name">
                {t("translation.formname")}
              </label>
              <input
                className="footer__input"
                placeholder="John Doe *"
                name="name"
                value={inputs.name}
                required
                type="text"
                autoComplete="off"
                id="name"
                onChange={handleInputChange}
              />
              <ValidationError
                className="error"
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form__list--item">
              <h5>02</h5>
              <label htmlFor="email">{t("translation.formemail")}</label>
              <input
                className="footer__input"
                placeholder="john@doe.com *"
                name="email"
                type="text"
                value={inputs.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                id="email"
              />
              <ValidationError
                className="error"
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form__list--item">
              <h5>03</h5>
              <label htmlFor="organization">
                {t("translation.formcompany")}
              </label>
              <input
                className="footer__input"
                name="organization"
                placeholder="John & Doe ®"
                type="text"
                value={inputs.organization}
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>

            <div className="form__list--item2">
              <h5>04</h5>
              <label htmlFor="menssage">{t("translation.formmessage")}</label>
              <textarea
                className="footer__textarea"
                required
                name="menssage"
                id="menssage"
                value={inputs.menssage}
                onChange={handleInputChange}
                cols="30"
                rows="10"
                placeholder={t("translation.formmessageph")}
              ></textarea>
              <ValidationError
                className="error"
                prefix="Message"
                field="menssage"
                errors={state.errors}
              />
            </div>
            <div className="form__list--item2btn">
              <button
                type="submit"
                disabled={state.submitting}
                ref={submitRef}
                className="btn-submit"
              >
                {t("translation.send")}
              </button>
            </div>
          </div>
        </form>
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
