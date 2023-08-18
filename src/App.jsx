import React, { useState, createContext } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.css"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslations from "./enTranslations.json" // Archivo con las traducciones en inglés
import esTranslations from "./esTranslations.json"
export const AppContext = createContext() // Archivo con las traducciones en español

i18n
  .use(initReactI18next)
  .init({
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
  const [openMenu, setOpenMenu] = useState(false)
  const [language, setLanguage] = useState("spanish")

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Main />
      <Footer />
    </AppContext.Provider>
  )
}

export default App
