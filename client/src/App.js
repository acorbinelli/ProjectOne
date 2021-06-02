import React, { Fragment, useContext } from "react"

import Navbar from "./components/layout/Navbar"
import Hero from "./components/hero/Hero"

import GlobalStyles from "./globalStyles"
import { LanguageProvider } from "./LanguageContext"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <LanguageProvider>
        <main id='main'>
          <Navbar />
          <Hero />
        </main>
      </LanguageProvider>
    </Fragment>
  )
}

export default App
