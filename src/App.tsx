import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import TokenExplorer from './pages/TokenExplorer'
import TokenDetail from './pages/TokenDetail'
import News from './pages/News'
import RisingCommunities from './pages/RisingCommunities'
import Contact from './pages/Contact'
import CursorEffect from './components/CursorEffect'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tokens" element={<TokenExplorer />} />
            <Route path="/tokens/:id" element={<TokenDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/communities" element={<RisingCommunities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CursorEffect position={cursorPosition} />
      </div>
    </Router>
  )
}

export default App