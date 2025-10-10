'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolling, setIsScrolling] = useState(false)

  const sections = [
    { id: 'hero', name: 'Início', icon: '🏠' },
    { id: 'achievements', name: 'Conquistas', icon: '🏆' },
    { id: 'experience', name: 'Experiência', icon: '💼' },
    { id: 'skills', name: 'Habilidades', icon: '⚡' },
    { id: 'projects', name: 'Projetos', icon: '🚀' },
    { id: 'contact', name: 'Contato', icon: '📧' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(window.scrollTimeout)
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 150)

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-full p-2 border border-gray-700/50">
          <div className="flex flex-col space-y-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative p-3 rounded-full transition-all duration-300 group
                  ${activeSection === section.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={section.name}
              >
                <span className="text-lg">{section.icon}</span>
                
                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-gray-700">
                    {section.name}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div 
          className="bg-gray-800/95 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex space-x-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative p-2 rounded-full transition-all duration-300
                  ${activeSection === section.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={section.name}
              >
                <span className="text-sm">{section.icon}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
          style={{
            scaleX: 0,
            transformOrigin: 'left',
          }}
          animate={{
            scaleX: activeSection === 'hero' ? 0.16 : 
                   activeSection === 'achievements' ? 0.33 :
                   activeSection === 'experience' ? 0.5 :
                   activeSection === 'skills' ? 0.66 :
                   activeSection === 'projects' ? 0.83 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </>
  )
}

export default Navigation
