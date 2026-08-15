import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const tabs = [
  { id: 'home', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'impact', label: 'Impact' },
  { id: 'team', label: 'Team' },
  { id: 'get-involved', label: 'Get Involved' },
]

export default function Navbar({ activeTab = 'home', onSelectTab }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleTabClick = (tabId, scrollTarget) => {
    if (onSelectTab) {
      onSelectTab(tabId, scrollTarget)
    }
    setOpen(false)
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/85 backdrop-blur-sm border-b border-border/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleTabClick('home')}
            className="text-left focus:outline-none"
            aria-label="AquaVita overview"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Logo size="sm" />
            </motion.div>
          </button>

          {/* Desktop Tab buttons */}
          <div className="hidden md:flex items-center gap-7">
            {tabs.map(({ id, label }) => {
              const isActive = activeTab === id
              return (
                <button
                  key={id}
                  onClick={() => handleTabClick(id)}
                  className={`text-sm font-semibold font-body transition-colors duration-200 relative py-1.5 focus:outline-none ${
                    isActive ? 'text-accent font-bold' : 'text-primary-mid hover:text-accent'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={() => handleTabClick('get-involved', 'contact-form')}
                className="ml-2 bg-primary hover:bg-primary-mid transition-all duration-200 text-white text-sm font-semibold font-body px-6 py-2.5 rounded-full shadow-sm hover:shadow-md focus:outline-none"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Mobile burger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-xl text-primary-mid hover:bg-bg-card transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-border bg-white/98 backdrop-blur-md overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {tabs.map(({ id, label }) => {
                const isActive = activeTab === id
                return (
                  <button
                    key={id}
                    onClick={() => handleTabClick(id)}
                    className={`font-body font-semibold text-sm px-3.5 py-3 rounded-xl text-left transition-colors focus:outline-none ${
                      isActive
                        ? 'text-accent bg-bg-card font-bold'
                        : 'text-primary-mid hover:text-accent hover:bg-bg-light'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
              <button
                onClick={() => handleTabClick('get-involved', 'contact-form')}
                className="mt-2 bg-primary hover:bg-primary-mid transition-colors duration-200 text-white text-sm font-semibold font-body px-5 py-3 rounded-full text-center shadow-sm focus:outline-none"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}