import "./App.css"

import React from "react"

import ToDo from "./containers/ToDo"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const App = () => {
  return (
    <div className="App">
      <ToDo />
    </div>
  )
}

export default App
