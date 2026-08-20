import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import Products from './components/Products'
import Skills from './components/Skills'
import Tools from './components/Tools'
import About from './components/About'
import Contact from './components/Contact'
import MouseTracker from './components/MouseTracker'
import SEO from './components/SEO'
import { absoluteUrl, SITE_DESCRIPTION, SITE_NAME } from './site'

const HomePage = () => (
  <>
    <SEO title={SITE_NAME} description={SITE_DESCRIPTION} path="/" />
    <Hero />
    <Project />
    <Skills />
    <Tools />
    <About />
    <Contact />
  </>
)

const ProductsPage = () => (
  <>
    <SEO
      title="Projects by Trinity Adeleye | Web, Mobile & Web3 Work"
      description="Explore software projects, Web3 products, collaborations, and technical experiments built or supported by Trinity Adeleye."
      path="/products"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/products') + '#page',
        url: absoluteUrl('/products'),
        name: 'Projects by Trinity Adeleye',
        description:
          'A collection of software projects, Web3 products, collaborations, and technical experiments.',
        isPartOf: { '@id': absoluteUrl('/') + '#website' },
        author: { '@id': absoluteUrl('/') + '#person' },
      }}
    />
    <Products />
  </>
)

const RouteTransition = ({ children }) => {
  const location = useLocation()
  const previousPath = useRef(location.pathname)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (previousPath.current === location.pathname) return undefined

    previousPath.current = location.pathname
    setIsTransitioning(true)
    const timeout = window.setTimeout(() => setIsTransitioning(false), 600)
    return () => window.clearTimeout(timeout)
  }, [location.pathname])

  return (
    <div className="relative">
      <div
        className={'page-transition' + (isTransitioning ? ' page-transition--active' : '')}
        aria-hidden="true"
      />
      <div key={location.pathname} className="route-view">
        {children}
      </div>
    </div>
  )
}

const App = () => {
  const [isLight, setIsLight] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const root = document.documentElement
    delete root.dataset.accent
    root.dataset.theme = isLight ? 'light' : 'dark'
  }, [isLight])
  useEffect(() => {
    const hash = window.location.hash.slice(1)

    if (hash) {
      window.requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])


  return (
    <>
      <MouseTracker />
      <div className='mx-5 md:mx-16 lg:mx-32 xl:mx-64 noselect'>
        <Navbar isLight={isLight} onToggleTheme={() => setIsLight((current) => !current)} />
        <RouteTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </RouteTransition>
      </div>
    </>
  )
}

export default App