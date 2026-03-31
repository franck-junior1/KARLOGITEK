import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WaFab from './components/WaFab'
import Home from './pages/Home'
import Smartphones from './pages/Smartphones'
import SmartphoneCat from './pages/SmartphoneCat'
import AccessoriesCat from './pages/AccessoriesCat'
import Reparation from './pages/Reparation'
import Services from './pages/Services'
import Packs from './pages/Packs'
import Livraison from './pages/Livraison'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

function Layout({ dark, setDark, children }) {
  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar dark={dark} setDark={setDark} />
        <main>{children}</main>
        <Footer />
        <WaFab />
      </div>
    </div>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout dark={dark} setDark={setDark}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/smartphones/:brand" element={<SmartphoneCat />} />
          <Route path="/accessoires" element={<AccessoriesCat />} />
          <Route path="/accessoires/:type" element={<AccessoriesCat />} />
          <Route path="/reparation" element={<Reparation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/packs" element={<Packs />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
