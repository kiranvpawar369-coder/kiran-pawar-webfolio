import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Check stored preference or default to dark mode
    const stored = localStorage.getItem('theme-mode')
    if (stored === 'light') {
      setIsDarkMode(false)
      document.body.classList.add('light-mode')
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.add('light-mode')
      localStorage.setItem('theme-mode', 'light')
    } else {
      document.body.classList.remove('light-mode')
      localStorage.setItem('theme-mode', 'dark')
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark/light mode">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

