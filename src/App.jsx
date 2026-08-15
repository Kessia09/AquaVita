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

  // Holds a pending scroll-to-id request (e.g. 'contact-form') across the tab
  // transition. We don't guess a timeout delay — instead we scroll inside
  // onAnimationComplete below, which Framer Motion fires precisely when the
  // relevant animate/exit transition actually finishes.
  const pendingScrollRef = useRef(null)

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

  const handleSelectTab = (tabId, scrollTarget) => {
    if (!VALID_TABS.includes(tabId)) return

    const isSameTab = tabId === activeTab
    setActiveTab(tabId)
    window.location.hash = `#${tabId}`

    if (scrollTarget) {
      if (isSameTab) {
        // Already on this tab — the element exists right now, no transition to wait for.
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // Switching tabs — stash the target. handleTabAnimationComplete (below)
        // will pick it up once the new panel has actually finished mounting/animating in.
        pendingScrollRef.current = scrollTarget
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Fires once per motion.div whenever ITS OWN animate/exit transition completes.
  // Under AnimatePresence mode="wait", the OUTGOING page's exit fires this first —
  // at that point the new page isn't mounted yet, so the lookup below simply finds
  // nothing and does nothing. Shortly after, the INCOMING page mounts, finishes its
  // enter transition, and fires this again — at which point the target element is
  // guaranteed to exist, so we scroll to it then and clear the pending ref.
  const handleTabAnimationComplete = () => {
    if (!pendingScrollRef.current) return
    const el = document.getElementById(pendingScrollRef.current)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      pendingScrollRef.current = null
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
            onAnimationComplete={handleTabAnimationComplete}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onSelectTab={handleSelectTab} />
    </div>
  )
}