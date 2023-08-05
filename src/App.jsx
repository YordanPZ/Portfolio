import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Foother from "./components/Foother"

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Main />
      <Foother />
    </>
  )
}

export default App
