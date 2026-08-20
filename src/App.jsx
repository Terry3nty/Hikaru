import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Products from './components/Products'
import Skills from './components/Skills'
import Tools from './components/Tools'
import About from './components/About'
import Contact from './components/Contact'
import MouseTracker from './components/MouseTracker'

const App = () => {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    delete root.dataset.accent
    root.dataset.theme = isLight ? 'light' : 'dark'
  }, [isLight])

  return (
    <>
      <MouseTracker />
      <div className='mx-5 md:mx-16 lg:mx-32 xl:mx-64 noselect'>
        <Navbar isLight={isLight} onToggleTheme={() => setIsLight((current) => !current)} />
        <Hero />
        <Routes>
          <Route path="/" element={
            <>
              <Project />
            </>
          } />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Skills />
        <Tools />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App