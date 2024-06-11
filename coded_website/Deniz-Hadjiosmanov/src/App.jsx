import React from "react";
import { useState } from 'react'
import Home from './components/Homepage'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
