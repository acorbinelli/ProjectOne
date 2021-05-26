import React, { Fragment } from "react"

import Navbar from "./components/layout/Navbar"
import Hero from "./components/hero/Hero"

import GlobalStyles from "./globalStyles"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <main id='main'>
        <Navbar />
        <Hero />
      </main>
    </Fragment>
  )
}

export default App
