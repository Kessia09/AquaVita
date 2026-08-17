import { useState } from 'react'
import { Mail, MapPin, Github, Send, Heart, Wrench, BookOpen, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import AmbientFloaters from '../components/AmbientFloaters'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'
import RisingParticles from '../components/RisingParticles'

const ways = [
  {
    icon: Heart,
    title: 'Donate or Sponsor',
    body: 'Help us buy seeds, pipes, tools, and biochar to expand the system. Even small contributions go a long way — a $10 donation can buy enough seed packets for a full grow bed.',
  },
  {
    icon: Wrench,
    title: 'Volunteer Expertise',
    body: "Are you an engineer, biologist, agronomist, or educator? We'd love to learn from you. Remote or in-person mentorship opportunities are available.",
  },
  {
    icon: BookOpen,
    title: 'Research & Collaboration',
    body: 'We collect water quality data, plant growth measurements, and system performance logs. Researchers are welcome to collaborate or use our data for academic work.',
  },
  {
    icon: Github,
    title: 'Open Source Contributions',
    body: 'Our system designs and this website are open source. Fork the repo, improve the filtration specs, or contribute to the codebase — all contributions are welcome.',
  },
]

export default function GetInvolved({ onSelectTab }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Build a mailto link as a simple no-backend contact mechanism
    const body = encodeURIComponent(
      `Name: ${form.name}\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject || 'AquaVita enquiry')
    window.location.href = `mailto:aquavita.teams@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-footer to-primary-dark text-white pt-24 pb-20 px-5 border-b border-primary-mid/40">
        <AmbientFloaters theme="dark" variant="contact" />
        <RisingParticles count={14} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent-mid bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5 shadow-sm">
            Get Involved
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-5 tracking-tight">
            Join the mission
          </h1>
          <p className="font-body text-base text-white/80 leading-relaxed max-w-xl mx-auto">
            AquaVita is bigger than one school. Whether you want to donate, collaborate,
            replicate the system, or just say hello — we'd love to connect.
          </p>
        </div>
      </section>

      {/* ── Ways to help ─────────────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5 relative">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="How You Can Help"
            title="Four ways to get involved"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ways.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08} direction="up">
                <TiltCard maxTilt={8}>
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border-t-4 border-t-accent border-x border-b border-border-light shadow-card h-full flex gap-5">
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
                      className="w-12 h-12 shrink-0 rounded-2xl bg-bg-card border border-border flex items-center justify-center text-accent"
                    >
                      <Icon size={22} />
                    </motion.div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-primary-dark mb-2">{title}</h3>
                      <p className="font-body text-sm text-primary-mid/85 leading-relaxed">{body}</p>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form + info ──────────────────────────────── */}
      <section id="contact-form" className="bg-white py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Contact"
            title="Send us a message"
            subtitle="We read every message and do our best to reply within a few days."
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
            {/* Form */}
            <RevealOnScroll className="md:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-bg-card rounded-3xl p-10 text-center border border-border shadow-card"
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle size={24} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-dark text-xl mb-2">
                    Message sent!
                  </h3>
                  <p className="font-body text-sm text-primary-mid/85">
                    Your mail client should have opened. If not, email us directly at{' '}
                    <a
                      href="mailto:aquavita.teams@gmail.com"
                      className="text-accent hover:underline font-semibold"
                    >
                      aquavita.teams@gmail.com
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-bg-soft/70 backdrop-blur-sm rounded-3xl p-8 border border-border-light shadow-card space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="font-body text-xs font-bold text-primary-dark block mb-1.5 uppercase tracking-wider">
                        Name <span className="text-accent">*</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
                      />
                    </label>
                    <label className="block">
                      <span className="font-body text-xs font-bold text-primary-dark block mb-1.5 uppercase tracking-wider">
                        Email <span className="text-accent">*</span>
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="font-body text-xs font-bold text-primary-dark block mb-1.5 uppercase tracking-wider">
                      Subject
                    </span>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Collaboration enquiry"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
                    />
                  </label>

                  <label className="block">
                    <span className="font-body text-xs font-bold text-primary-dark block mb-1.5 uppercase tracking-wider">
                      Message <span className="text-accent">*</span>
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us who you are and how you'd like to get involved…"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200 resize-none"
                    />
                  </label>

                  <MagneticButton pulse strength={0.3}>
                    {() => (
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-mid transition-all duration-200 text-white font-bold font-body px-8 py-3.5 rounded-full shadow-md hover:shadow-lg focus:outline-none"
                      >
                        Send Message <Send size={16} />
                      </button>
                    )}
                  </MagneticButton>
                </form>
              )}
            </RevealOnScroll>

            {/* Contact info */}
            <RevealOnScroll delay={0.15} className="md:col-span-2 space-y-5">
              <TiltCard maxTilt={6}>
                <div className="bg-bg-soft/70 backdrop-blur-sm rounded-3xl p-7 border border-border-light shadow-card">
                  <h3 className="font-heading font-bold text-primary-dark text-lg mb-5">Contact details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 text-accent">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-primary-dark uppercase tracking-wider">Location</p>
                        <p className="font-body text-sm text-primary-mid/85 mt-0.5">
                          Rwanda Coding Academy<br />
                          Musanze, Rwanda
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 text-accent">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-primary-dark uppercase tracking-wider">Email</p>
                        <a
                          href="mailto:aquavita.teams@gmail.com"
                          className="font-body text-sm text-accent hover:underline font-semibold mt-0.5 block"
                        >
                          aquavita.teams@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 mt-0.5 text-accent">
                        <Github size={16} />
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-primary-dark uppercase tracking-wider">GitHub</p>
                        <a
                          href="https://github.com/AquaVita"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-sm text-accent hover:underline font-semibold mt-0.5 block"
                        >
                          github.com/AquaVita
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </TiltCard>

              <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-7 shadow-card">
                <div className="absolute top-0 right-0 w-28 h-28 bg-accent/20 rounded-full blur-xl pointer-events-none" />
                <h4 className="font-heading font-extrabold text-white text-lg mb-2">Replicate the system</h4>
                <p className="font-body text-sm text-white/80 leading-relaxed mb-5">
                  Want to build an AquaVita system at your school? We'll share our full
                  materials list, construction guide, and data templates for free.
                </p>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="mailto:aquavita.teams@gmail.com?subject=Replication%20kit%20request"
                  className="inline-flex items-center gap-1.5 text-sm font-bold font-body text-white underline underline-offset-4 hover:text-accent-mid transition-colors"
                >
                  Request the replication kit →
                </motion.a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}



