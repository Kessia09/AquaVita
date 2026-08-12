import { Link } from 'react-router-dom'
import { MapPin, Mail, Github } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/impact', label: 'Impact' },
  { to: '/team', label: 'Team' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-text font-body">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Logo size="lg" light />
            <p className="mt-4 text-sm text-footer-text/70 leading-relaxed max-w-xs">
              A student-led initiative at Rwanda Coding Academy, turning school greywater into
              fresh herbs and vegetables through bio-filtration.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-bold text-footer-text text-sm uppercase tracking-widest mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-footer-text/70 hover:text-footer-text transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-footer-text text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-footer-text/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent-mid" />
                Rwanda Coding Academy
              </li>
              <li>
                <a
                  href="mailto:aquavita.teams@gmail.com"
                  className="flex items-start gap-2.5 text-sm text-footer-text/70 hover:text-footer-text transition-colors duration-200"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-accent-mid" />
                  aquavita.teams@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AquaVita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-footer-text/70 hover:text-footer-text transition-colors duration-200"
                >
                  <Github size={15} className="mt-0.5 shrink-0 text-accent-mid" />
                  github.com/AquaVita
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-footer-text/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-footer-text/50">
          <p>© 2025 AquaVita · Rwanda Coding Academy</p>
          <p>Special thanks to our teachers and local mentors for guidance.</p>
        </div>
      </div>
    </footer>
  )
}
