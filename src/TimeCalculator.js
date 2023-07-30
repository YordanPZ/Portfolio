export const obtenerHoraBuenosAires = () => {
  const horaActual = new Date()
  const opcionesHora = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires"
  }

  return horaActual.toLocaleTimeString("es-AR", opcionesHora)
}
