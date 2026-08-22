import { useState } from 'react'
import { Mail, MapPin, Github, Send, Heart, Wrench, BookOpen, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'

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

export default function GetInvolved() {
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
      <section className="bg-primary-dark py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="pill-badge !bg-white/10 !text-white mb-6">
            Get Involved
          </span>
          <h1 className="heading-serif-bold text-4xl sm:text-5xl text-white mb-5">
            Join the mission
          </h1>
          <p className="font-body text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            AquaVita is bigger than one school. Whether you want to donate, collaborate,
            replicate the system, or just say hello — we'd love to connect.
          </p>
        </div>
      </section>

      {/* ── Ways to help ─────────────────────────────────────── */}
      <section className="bg-white grid-bg py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="How You Can Help"
            title="Four ways to get involved"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ways.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="card-clean h-full flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="heading-serif font-bold text-lg text-primary-dark mb-2">{title}</h3>
                    <p className="font-body text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form + info ──────────────────────────────── */}
      <section id="contact-form" className="bg-white grid-bg py-20 px-5 scroll-mt-20">
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
                  className="card-clean text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="heading-serif font-bold text-primary-dark text-xl mb-2">
                    Message sent!
                  </h3>
                  <p className="font-body text-sm text-gray-600">
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
                  className="card-clean space-y-5"
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
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
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
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
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
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200"
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
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-200 resize-none"
                    />
                  </label>

                  <MagneticButton pulse strength={0.3}>
                    {() => (
                      <button
                        type="submit"
                        className="btn-primary inline-flex items-center gap-2"
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
                <div className="card-clean">
                  <h3 className="heading-serif font-bold text-primary-dark text-lg mb-5">Contact details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="font-body text-xs font-bold text-primary-dark uppercase tracking-wider">Location</p>
                        <p className="font-body text-sm text-gray-600 mt-0.5">
                          Rwanda Coding Academy<br />
                          Musanze, Rwanda
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent">
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
                      <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 text-accent">
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

              <div className="card-clean bg-primary-dark text-white">
                <h4 className="heading-serif font-bold text-white text-lg mb-2">Replicate the system</h4>
                <p className="font-body text-sm text-white/80 leading-relaxed mb-5">
                  Want to build an AquaVita system at your school? We'll share our full
                  materials list, construction guide, and data templates for free.
                </p>
                <motion.a
                  whileHover={{ x: 3 }}
                  href="mailto:aquavita.teams@gmail.com?subject=Replication%20kit%20request"
                  className="inline-flex items-center gap-1.5 text-sm font-bold font-body text-white underline underline-offset-4 hover:text-white/80 transition-colors"
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