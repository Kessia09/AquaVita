import { MapPin, Mail, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import RisingParticles from './RisingParticles'

const navTabs = [
  { id: 'home', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'impact', label: 'Impact' },
  { id: 'team', label: 'Team' },
  { id: 'get-involved', label: 'Get Involved' },
]

export default function Footer({ onSelectTab }) {
  const handleTabClick = (id) => {
    if (onSelectTab) {
      onSelectTab(id)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-footer text-footer-text font-body">
      {/* Rising water motes / bubbles */}
      <RisingParticles count={14} />

      {/* Ambient motion glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary-mid/30 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <button onClick={() => handleTabClick('home')} className="inline-block mb-3 text-left focus:outline-none">
              <Logo size="lg" light />
            </button>
            <p className="mt-2 text-sm text-footer-text/75 leading-relaxed max-w-xs">
              A student-led initiative at Rwanda Coding Academy, turning school greywater into
              fresh herbs and vegetables through bio-filtration.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div>
            <h4 className="font-heading font-bold text-footer-text text-xs uppercase tracking-widest mb-4 text-accent-mid">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navTabs.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleTabClick(id)}
                    className="text-sm text-footer-text/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 focus:outline-none"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-footer-text text-xs uppercase tracking-widest mb-4 text-accent-mid">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-footer-text/75">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-mid" />
                Rwanda Coding Academy
              </li>
              <li>
                <a
                  href="mailto:aquavita.teams@gmail.com"
                  className="flex items-start gap-2.5 text-sm text-footer-text/75 hover:text-white transition-colors duration-200"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-accent-mid" />
                  aquavita.teams@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AquaVita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-footer-text/75 hover:text-white transition-colors duration-200"
                >
                  <Github size={16} className="mt-0.5 shrink-0 text-accent-mid" />
                  github.com/AquaVita
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-text/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-footer-text/60">
          <p>© 2025 AquaVita · Rwanda Coding Academy</p>
          <p>Special thanks to our teachers and local mentors for guidance.</p>
        </div>
      </div>
    </footer>
  )
}



