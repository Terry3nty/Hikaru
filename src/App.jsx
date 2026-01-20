import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Products from './components/Products'
import Skills from './components/Skills'
import Tools from './components/Tools'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='mx-5 md:mx-16 lg:mx-32 xl:mx-64 noselect'>
      <Navbar />
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
  )
}

export default App