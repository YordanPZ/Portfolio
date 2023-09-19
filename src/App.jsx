import React, { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.css"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslations from "./enTranslations.json" // Archivo con las traducciones en inglés
import esTranslations from "./esTranslations.json" // Archivo con las traducciones en

import { useForm } from "@formspree/react"
export const AppContext = createContext()

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations }
  },
  fallbackLng: "es", // Idioma por defecto
  interpolation: {
    escapeValue: false // No escapar valores HTML
  }
})

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, handleSubmit] = useForm("xpzgdwnn")
  const [openMenu, setOpenMenu] = useState(false)
  const [language, setLanguage] = useState("spanish")

  useEffect(() => {
    handleSubmit({
      // usar handleSubmit aquí
      message: "Alguien está viendo tu portfolio!"
    })
  }, [])

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Main />
      <Footer />
    </AppContext.Provider>
  )
}

export default App
