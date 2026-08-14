import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Impact from './pages/Impact'
import Team from './pages/Team'
import GetInvolved from './pages/GetInvolved'

const VALID_TABS = ['home', 'how-it-works', 'impact', 'team', 'get-involved']

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return VALID_TABS.includes(hash) ? hash : 'home'
  })
  const prevTabRef = useRef(activeTab)

  // Determine slide direction (forward or backward) based on tab index order
  const currentIndex = VALID_TABS.indexOf(activeTab)
  const prevIndex = VALID_TABS.indexOf(prevTabRef.current)
  const slideDirection = currentIndex >= prevIndex ? 1 : -1

  useEffect(() => {
    prevTabRef.current = activeTab
  }, [activeTab])

  // Sync hash deep-linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (VALID_TABS.includes(hash) && hash !== activeTab) {
        setActiveTab(hash)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [activeTab])

  const handleSelectTab = (tabId) => {
    if (VALID_TABS.includes(tabId)) {
      setActiveTab(tabId)
      window.location.hash = `#${tabId}`
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'how-it-works':
        return <HowItWorks key="how-it-works" onSelectTab={handleSelectTab} />
      case 'impact':
        return <Impact key="impact" onSelectTab={handleSelectTab} />
      case 'team':
        return <Team key="team" onSelectTab={handleSelectTab} />
      case 'get-involved':
        return <GetInvolved key="get-involved" onSelectTab={handleSelectTab} />
      case 'home':
      default:
        return <Home key="home" onSelectTab={handleSelectTab} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg-soft text-primary-dark font-body antialiased selection:bg-accent/20 selection:text-primary-dark overflow-x-hidden">
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main className="flex-1">
        <AnimatePresence mode="wait" custom={slideDirection}>
          <motion.div
            key={activeTab}
            custom={slideDirection}
            initial={(dir) => ({
              opacity: 0,
              x: dir * 70,
              scale: 0.98,
            })}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={(dir) => ({
              opacity: 0,
              x: dir * -70,
              scale: 0.98,
            })}
            transition={{
              duration: 0.35,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onSelectTab={handleSelectTab} />
    </div>
  )
}
