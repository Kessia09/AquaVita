import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import TeamCard from '../components/TeamCard'
import SectionDivider from '../components/SectionDivider'
import DecorativeCorner from '../components/DecorativeCorner'
import AmbientFloaters from '../components/AmbientFloaters'

// ── Team data ────────────────────────────────────────────────────────────────
// Images are resolved from /images/ (public folder via Vite)
const coreTeam = [
  { name: 'Irasubiza Saly Nelson', role: 'CEO & Project Lead', image: '/images/nelson.jpg' },
  { name: 'Iradukunda Joyeuse', role: 'CTO — Sensors & Software', image: '/images/joyeuse.png' },
  { name: 'Simbi Kelia', role: 'COO — Garden Operations', image: '/images/Kelia.jpg' },
  { name: 'Cyizere Happy', role: 'Head of Engineering — Filtration Systems', image: '/images/happy.jpg' },
  { name: 'Ganwa Anne Laure', role: 'Head of Product — Health & Herbs', image: '/images/Laure.jpg' },
  { name: 'Ngabo Oreste', role: 'Head of Data & Analytics', image: '/images/oreste.jpg' },
  { name: 'Rukundo Bahati Samuel', role: 'Head of Infrastructure', image: '/images/bahati.jpg' },
  { name: 'Manene Junior', role: 'Head of Marketing & Communications', image: '/images/manene.jpeg' },
  { name: 'Irasubiza Ntwari Gloria', role: 'Head of Partnerships', image: '/images/gloria.png' },
  { name: 'Kirenga Kenny', role: 'Head of Education & Training', image: '/images/KIRENGA_Kenny.png' },
  { name: 'Agasaro Ndinda Kessia', role: 'Head of People & Wellness', image: '/images/kessia.png' },
  { name: 'Twarimitswe Aaron', role: 'Head of Community Outreach', image: '/images/aaron.png' },
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
      <section className="bg-white grid-bg pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="pill-badge mb-6">
            The Team
          </span>
          <h1 className="heading-serif-bold text-4xl sm:text-5xl text-primary-dark mb-5">
            Students behind<br />
            AquaVita
          </h1>
          <p className="font-body text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            We're a group of 12+ students from Rwanda Coding Academy who believe technology and
            biology can solve real problems. Every person on this team built, tested, and
            maintains a part of the system.
          </p>
        </div>
      </section>

      {/* ── Core team ────────────────────────────────────────── */}
      <section className="bg-gray-50 grid-bg py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Core Team"
            title="Meet the builders"
            subtitle="12+ students, each owning a different slice of the project."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {coreTeam.map(({ name, role, image }, i) => (
              <RevealOnScroll key={name} delay={i * 0.04}>
                <TeamCard name={name} role={role} image={image} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisors ─────────────────────────────────────────── */}
      <section className="bg-white grid-bg py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Advisors & Support"
            title="We didn't do it alone"
            subtitle="Grateful acknowledgment to the mentors and community members who guided us."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {advisors.map(({ name, role, note }, i) => (
              <RevealOnScroll key={name} delay={i * 0.1}>
                <div className="card-clean h-full">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <span className="heading-serif font-bold text-accent text-sm">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="heading-serif font-bold text-primary-dark mb-1">
                    {name}
                  </h3>
                  <p className="font-body text-sm text-accent font-medium mb-3">{role}</p>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{note}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="bg-primary-dark py-20 px-5">
        <RevealOnScroll className="max-w-4xl mx-auto text-center">
          <h2 className="heading-serif-bold text-3xl sm:text-4xl text-white mb-8">
            Our guiding principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mt-10">
            {[
              { label: 'Learn by doing', body: 'Every design decision was made and tested by students, not just described in a textbook.' },
              { label: 'Local first', body: 'We use materials and knowledge available in Rwanda — no expensive imports, no dependency on foreign supply chains.' },
              { label: 'Open source', body: "Our designs, data, and findings are freely shared so any school can replicate or improve on what we've built." },
            ].map(({ label, body }) => (
              <div key={label} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h4 className="heading-serif font-bold text-white text-lg mb-3">{label}</h4>
                <p className="font-body text-white/80 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}


