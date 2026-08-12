import { useState } from 'react'
import { Mail, MapPin, Github, Send, Heart, Wrench, BookOpen } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'

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
      <section className="bg-gradient-to-br from-bg-light via-bg-soft to-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-5">
            Get Involved
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary-dark leading-tight mb-5">
            Join the mission
          </h1>
          <p className="font-body text-base text-primary-mid/80 leading-relaxed max-w-xl mx-auto">
            AquaVita is bigger than one school. Whether you want to donate, collaborate,
            replicate the system, or just say hello — we'd love to connect.
          </p>
        </div>
      </section>

      {/* ── Ways to help ─────────────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="How You Can Help"
            title="Four ways to get involved"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ways.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="bg-white rounded-3xl p-7 border border-border-light shadow-card h-full flex gap-5">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-bg-card flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary-dark mb-2">{title}</h3>
                    <p className="font-body text-sm text-primary-mid/80 leading-relaxed">{body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form + info ──────────────────────────────── */}
      <section className="bg-white py-20 px-5">
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
                <div className="bg-bg-card rounded-3xl p-10 text-center border border-border">
                  <div className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center mx-auto mb-4">
                    <Send size={22} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-dark text-xl mb-2">
                    Message sent!
                  </h3>
                  <p className="font-body text-sm text-primary-mid/80">
                    Your mail client should have opened. If not, email us directly at{' '}
                    <a
                      href="mailto:aquavita.teams@gmail.com"
                      className="text-accent hover:underline"
                    >
                      aquavita.teams@gmail.com
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-bg-soft rounded-3xl p-8 border border-border-light space-y-5"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="font-body text-xs font-semibold text-primary-dark block mb-1.5">
                        Name <span className="text-accent">*</span>
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </label>
                    <label className="block">
                      <span className="font-body text-xs font-semibold text-primary-dark block mb-1.5">
                        Email <span className="text-accent">*</span>
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="font-body text-xs font-semibold text-primary-dark block mb-1.5">
                      Subject
                    </span>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Collaboration enquiry"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </label>

                  <label className="block">
                    <span className="font-body text-xs font-semibold text-primary-dark block mb-1.5">
                      Message <span className="text-accent">*</span>
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us who you are and how you'd like to get involved…"
                      className="w-full rounded-xl border border-border bg-white px-4 py-3 font-body text-sm text-primary-dark placeholder-primary-mid/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-mid transition-colors duration-200 text-white font-semibold font-body px-7 py-3 rounded-full shadow-sm hover:shadow-md"
                  >
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </RevealOnScroll>

            {/* Contact info */}
            <RevealOnScroll delay={0.15} className="md:col-span-2 space-y-5">
              <div className="bg-bg-soft rounded-3xl p-7 border border-border-light">
                <h3 className="font-heading font-bold text-primary-dark mb-5">Contact details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={14} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-primary-dark">Location</p>
                      <p className="font-body text-sm text-primary-mid/80 mt-0.5">
                        Rwanda Coding Academy<br />
                        Musanze, Rwanda
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={14} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-primary-dark">Email</p>
                      <a
                        href="mailto:aquavita.teams@gmail.com"
                        className="font-body text-sm text-accent hover:underline mt-0.5 block"
                      >
                        aquavita.teams@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 mt-0.5">
                      <Github size={14} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-xs font-semibold text-primary-dark">GitHub</p>
                      <a
                        href="https://github.com/AquaVita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-accent hover:underline mt-0.5 block"
                      >
                        github.com/AquaVita
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-7">
                <h4 className="font-heading font-bold text-white mb-2">Replicate the system</h4>
                <p className="font-body text-sm text-white/75 leading-relaxed mb-4">
                  Want to build an AquaVita system at your school? We'll share our full
                  materials list, construction guide, and data templates for free.
                </p>
                <a
                  href="mailto:aquavita.teams@gmail.com?subject=Replication%20kit%20request"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-white underline underline-offset-2"
                >
                  Request the replication kit →
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
