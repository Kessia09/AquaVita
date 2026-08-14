import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import TeamCard from '../components/TeamCard'
import AmbientFloaters from '../components/AmbientFloaters'

// ── Team data ────────────────────────────────────────────────────────────────
// Images are resolved from /images/ (public folder via Vite)
const coreTeam = [
  { name: 'Kenny Kirenga', role: 'Project Lead & Systems Design', image: '/images/KIRENGA_Kenny.png' },
  { name: 'Gloria', role: 'Biology & Water Quality', image: '/images/gloria.png' },
  { name: 'Kessia', role: 'Engineering & Construction', image: '/images/kessia.png' },
  { name: 'Joyeuse', role: 'Data & Research', image: '/images/joyeuse.png' },
  { name: 'Aaron', role: 'Community Outreach', image: '/images/aaron.png' },
  { name: 'Oreste', role: 'Plant Science & Harvesting', image: '/images/oreste.jpg' },
  { name: 'Nelson', role: 'Maintenance & Documentation', image: '/images/nelson.jpg' },
  { name: 'Bahati', role: 'Design & Communication', image: '/images/bahati.jpg' },
  { name: 'Manene', role: 'Biochar Production', image: '/images/manene.jpeg' },
  { name: 'Kelia', role: 'Web Development', image: '/images/Kelia.jpg' },
  { name: 'Laure', role: 'Photography & Media', image: '/images/Laure.jpg' },
  { name: 'Happy', role: 'Budget & Procurement', image: '/images/happy.jpg' },
]

const advisors = [
  {
    name: 'School Administration',
    role: 'RCA — Institutional Support',
    note: 'Provided space, materials budget, and access to school infrastructure.',
  },
  {
    name: 'Science & Technology Teachers',
    role: 'RCA Faculty',
    note: 'Guided the bio-filtration design and water quality testing protocols.',
  },
  {
    name: 'Local Farming Community',
    role: 'Musanze Region',
    note: 'Shared practical knowledge on growing greens in Rwandan conditions.',
  },
]

export default function Team() {
  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg-soft via-bg-light to-white pt-24 pb-20 px-5 border-b border-border/60">
        <AmbientFloaters theme="light" variant="team" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-5 shadow-sm">
            The Team
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary-dark leading-tight mb-5 tracking-tight">
            Students behind<br />
            <span className="gradient-text">AquaVita</span>
          </h1>
          <p className="font-body text-base text-primary-mid/85 leading-relaxed max-w-xl mx-auto">
            We're a group of 12+ students from Rwanda Coding Academy who believe technology and
            biology can solve real problems. Every person on this team built, tested, and
            maintains a part of the system.
          </p>
        </div>
      </section>

      {/* ── Core team ────────────────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            eyebrow="Core Team"
            title="Meet the builders"
            subtitle="12+ students, each owning a different slice of the project."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {coreTeam.map(({ name, role, image }, i) => (
              <RevealOnScroll key={name} delay={i * 0.04} direction="up">
                <TeamCard name={name} role={role} image={image} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisors ─────────────────────────────────────────── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Advisors & Support"
            title="We didn't do it alone"
            subtitle="Grateful acknowledgment to the mentors and community members who guided us."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {advisors.map(({ name, role, note }, i) => (
              <RevealOnScroll key={name} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(27, 90, 66, 0.12)' }}
                  transition={{ duration: 0.25 }}
                  className="bg-bg-soft/80 backdrop-blur-sm rounded-3xl p-7 border-t-4 border-t-accent border-x border-b border-border-light shadow-card h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-bg-card border border-border mb-4 flex items-center justify-center shadow-sm">
                    <span className="font-heading font-extrabold text-accent text-base">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-primary-dark text-base mb-1">
                    {name}
                  </h3>
                  <p className="font-body text-xs text-accent font-semibold mb-3">{role}</p>
                  <p className="font-body text-xs text-primary-mid/80 leading-relaxed">{note}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-footer to-primary-dark py-24 px-5">
        <AmbientFloaters theme="dark" variant="values" />

        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center" direction="up">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-6 tracking-tight">
            Our guiding principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-10">
            {[
              { label: 'Learn by doing', body: 'Every design decision was made and tested by students, not just described in a textbook.' },
              { label: 'Local first', body: 'We use materials and knowledge available in Rwanda — no expensive imports, no dependency on foreign supply chains.' },
              { label: 'Open source', body: "Our designs, data, and findings are freely shared so any school can replicate or improve on what we've built." },
            ].map(({ label, body }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.14)' }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 transition-all duration-200"
              >
                <h4 className="font-heading font-bold text-white text-lg mb-2">{label}</h4>
                <p className="font-body text-sm text-white/80 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}


