import React, { Fragment } from "react"

import Navbar from "./components/layout/Navbar"

import GlobalStyles from "./globalStyles"

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <div className='App'>
        <Navbar></Navbar>
      </div>
    </Fragment>
  )
}

export default App
