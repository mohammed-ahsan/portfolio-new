import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type TabItem = {
  id: string
  label: string
  icon: string
}

type Props = {
  visible: boolean
}

function BottomTabNav({ visible }: Props) {
  const [activeTab, setActiveTab] = useState('about')

  const tabs: TabItem[] = [
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🚀' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('main')
      if (!scrollContainer) return

      const sections = tabs.map(tab => document.getElementById(tab.id))
      const scrollPosition = scrollContainer.scrollTop + scrollContainer.clientHeight / 2

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(tabs[index].id)
          }
        }
      })
    }

    const scrollContainer = document.getElementById('main')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    const scrollContainer = document.getElementById('main')
    
    if (element && scrollContainer) {
      const offsetTop = element.offsetTop
      scrollContainer.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setActiveTab(sectionId)
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 right-0 left-0 md:left-auto md:bottom-2 md:right-5 z-[9999] mx-[1.3%] mb-[1.3%] md:mb-0 md:mx-0"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Navigation container */}
          <div className="relative border border-[#F7AB0A]/40 rounded-lg bg-gray-900 p-2 md:pr-2">
            <div className="flex flex-row md:flex-col justify-around md:justify-center items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className="relative flex flex-col md:flex-col items-center justify-center min-w-0 flex-1 md:flex-none px-2 md:px-[0.9vw] py-2 my-0 md:my-2 group rounded-lg transition-all"
                >
                  {/* Active indicator */}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 border-2 border-[#F7AB0A]/40 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Icon - hidden on mobile, shown on desktop */}
                  <motion.div
                    className={`relative text-xl hidden md:block mb-1 transition-all duration-200 ${
                      activeTab === tab.id ? 'scale-110 text-[#F7AB0A]/90' : 'text-gray-500 group-hover:text-[#F7AB0A]/40'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.icon}
                  </motion.div>
                  
                  {/* Label */}
                  <span
                    className={`relative text-xs font-medium uppercase tracking-widest transition-all duration-200 truncate max-w-full ${
                      activeTab === tab.id
                        ? 'text-[#F7AB0A]/90'
                        : 'text-gray-500 group-hover:text-[#F7AB0A]/40'
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default BottomTabNav
