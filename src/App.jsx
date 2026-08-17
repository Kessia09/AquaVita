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

  // Scrolls to `elementId` as soon as it exists in the DOM. Doesn't depend on
  // any animation/transition timing — watches the page directly and reacts
  // the moment the element actually appears, with a hard timeout as a safety net.
  // Scrolls to `elementId` as soon as it exists in the DOM.
  // Added console logs for debugging the scroll flow.
  const scrollToElementWhenReady = (elementId) => {
    console.log('[Scroll] Requested scroll to elementId:', elementId);
    const existing = document.getElementById(elementId);
    if (existing) {
      console.log('[Scroll] Element found immediately:', existing);
      existing.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    console.log('[Scroll] Element not found, setting up observer...');
    const observer = new MutationObserver(() => {
      const el = document.getElementById(elementId);
      if (el) {
        console.log('[Scroll] Element found via observer:', el);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        observer.disconnect();
        clearTimeout(safety);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const safety = setTimeout(() => observer.disconnect(), 3000);
  }

  

  const handleSelectTab = (tabId, scrollTarget) => {
    if (!VALID_TABS.includes(tabId)) return

    setActiveTab(tabId)
    window.location.hash = `#${tabId}`

    if (scrollTarget) {
      scrollToElementWhenReady(scrollTarget)
    } else {
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