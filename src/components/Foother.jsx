import { useEffect, useState } from "react"

function Foother() {
  const [horaBuenosAires, setHoraBuenosAires] = useState("")

  useEffect(() => {
    const obtenerHoraBuenosAires = () => {
      const horaActual = new Date()
      const opcionesHora = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Argentina/Buenos_Aires"
      }
      const horaBuenosAires = horaActual.toLocaleTimeString(
        "es-AR",
        opcionesHora
      )
      setHoraBuenosAires(horaBuenosAires)
    }
    obtenerHoraBuenosAires()
  }, [])

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h4 className="footer__logo--title">
            <span>Let’s work</span> <span>together</span>
          </h4>
        </div>
        <hr className="footer__line" />
        <div className="footer__contact">
          <div className="footer__contact--email">yordanpz@hotmail.com</div>
          <div className="footer__contact--phone">+54 11 2380 7219</div>
        </div>
      </div>
      <div className="footer__container--info">
        <div className="footer__container--info--address">
          <h5>Local Time</h5>
          <p>{horaBuenosAires} UTC-3</p>
        </div>
        <div className="footer__container--info--socials">
          <h5>Socials</h5>
          <div className="footer__container--info--socials--links">
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Foother
