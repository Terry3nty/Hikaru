import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Products from './components/Products'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <div className='mx-5 md:mx-72'>
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
      <About />
      <Contact />
    </div>
    </>
  )
}

export default App