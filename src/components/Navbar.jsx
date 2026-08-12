import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/impact', label: 'Impact' },
  { to: '/team', label: 'Team' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBase =
    'text-sm font-semibold font-body transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-200'

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/80 backdrop-blur-sm border-b border-border/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} aria-label="AquaVita home">
            <Logo size="sm" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${navBase} ${
                    isActive
                      ? 'text-accent after:w-full'
                      : 'text-primary-mid hover:text-accent after:w-0 hover:after:w-full'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              className="ml-2 bg-primary hover:bg-primary-mid transition-colors duration-200 text-white text-sm font-semibold font-body px-5 py-2 rounded-full shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-xl text-primary-mid hover:bg-bg-card transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white/98 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-body font-semibold text-sm px-3 py-2.5 rounded-xl transition-colors ${
                    isActive
                      ? 'text-accent bg-bg-card'
                      : 'text-primary-mid hover:text-accent hover:bg-bg-light'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-2 bg-primary text-white text-sm font-semibold font-body px-5 py-2.5 rounded-full text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
