import { useState, useRef } from 'react'
import { ArrowRight, Droplets, Leaf, Maximize, Recycle, Sparkles, Utensils, Volume2, VolumeX } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionHeader from '../components/SectionHeader'
import StatCard from '../components/StatCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import AmbientFloaters from '../components/AmbientFloaters'
import TiltCard from '../components/TiltCard'
import MagneticButton from '../components/MagneticButton'
import RisingParticles from '../components/RisingParticles'
import SectionDivider from '../components/SectionDivider'
import DecorativeCorner from '../components/DecorativeCorner'

const highlights = [
  {
    icon: Recycle,
    title: 'Bio-Filtration System',
    body: 'We collect greywater from sinks and cleaning stations, then filter it through layers of gravel, sand, and biochar before it reaches our grow beds.',
  },
  {
    icon: Droplets,
    title: 'Water Reuse',
    body: "Every litre of filtered water irrigates our herb and vegetable garden, cutting the school's fresh-water demand for food production significantly.",
  },
  {
    icon: Leaf,
    title: 'Fresh Produce',
    body: 'Lettuce, spinach, basil, and other greens grown on-site supplement school meals while showing students that sustainability is tangible and delicious.',
  },
]

const stats = [
  { value: '~40%', label: 'greywater reused', delay: 0 },
  { value: '~8kg/mo', label: 'herbs & veggies harvested', delay: 0.1 },
  { value: '12+', label: 'students directly involved', delay: 0.2 },
  { value: 'Weekly', label: 'harvest shared in school kitchen', delay: 0.3 },
]

export default function Home({ onSelectTab }) {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMuted, setIsMuted] = useState(true)

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
        videoRef.current.webkitRequestFullscreen()
      } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
        videoRef.current.msRequestFullscreen()
      }
    }
  }

  const handleHeroMouseMove = (e) => {
    if (shouldReduceMotion || !heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  const handleTabClick = (tabId) => {
    if (onSelectTab) onSelectTab(tabId)
  }

  // Word-by-word snappy spring reveal
  const headlineWords1 = ['Turning', 'greywater']
  const headlineWords2 = ['into', 'fresh', 'greens']

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative overflow-hidden h-[100vh] min-h-[500px] w-[95%] mx-auto rounded-3xl flex items-center justify-center px-5 shadow-2xl border border-border/50"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-all border border-white/20 backdrop-blur-sm focus:outline-none"
            aria-label={isMuted ? "Unmute background video" : "Mute background video"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <button
            onClick={handleFullscreen}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-all border border-white/20 backdrop-blur-sm focus:outline-none"
            aria-label="View video full screen"
          >
            <Maximize size={20} />
          </button>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-8">
          <motion.div
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white/85 leading-[1.1] tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
              {headlineWords1.map((word, index) => (
                <motion.span
                  key={word + index}
                  initial={{ opacity: 0, y: 35, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    bounce: 0.45,
                    duration: 0.65,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="inline-block"
                >
                  <span className={word === 'greywater' ? 'text-accent-mid/85 drop-shadow-lg' : 'drop-shadow-lg'}>{word}</span>
                </motion.span>
              ))}
              <span className="w-full" />
              {headlineWords2.map((word, index) => (
                <motion.span
                  key={word + index}
                  initial={{ opacity: 0, y: 35, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: 'spring',
                    bounce: 0.45,
                    duration: 0.65,
                    delay: 0.4 + index * 0.08,
                  }}
                  className="inline-block"
                >
                  <span className={word === 'fresh' || word === 'greens' ? 'text-accent-mid/85 drop-shadow-lg' : 'drop-shadow-lg'}>{word}</span>
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Hero Content Below Video ─────────────────────────────── */}
      <section className="bg-gradient-to-b from-bg-light to-white py-16 sm:py-24 px-5 relative z-10 border-b border-border-light/60">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-6 shadow-sm"
          >
            <Sparkles size={13} className="text-accent animate-spin" style={{ animationDuration: '6s' }} />
            Rwanda Coding Academy · Student Initiative
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-base sm:text-lg text-primary-mid/85 leading-relaxed mb-10"
          >
            AquaVita is a student-led project at Rwanda Coding Academy. We built a
            bio-filtration system that recycles school wastewater to grow vegetables
            and herbs — closing the loop between water, food, and sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <MagneticButton pulse strength={0.35}>
              {({ onClick }) => (
                <button
                  onClick={() => {
                    if (onClick) onClick()
                    handleTabClick('how-it-works')
                  }}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-mid transition-all duration-200 text-white font-bold font-body px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none"
                >
                  See How It Works <ArrowRight size={18} />
                </button>
              )}
            </MagneticButton>

            <MagneticButton strength={0.3}>
              {({ onClick }) => (
                <button
                  onClick={() => {
                    if (onClick) onClick()
                    handleTabClick('impact')
                  }}
                  className="inline-flex items-center gap-2 bg-white hover:bg-bg-light transition-all duration-200 text-primary-dark font-bold font-body px-8 py-4 rounded-full border border-border shadow-card hover:shadow-card-hover hover:scale-105 focus:outline-none"
                >
                  Our Impact
                </button>
              )}
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white grid-bg py-20 px-5">        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works preview ─────────────────────────────── */}
      <section className="bg-gray-50 grid-bg py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The System"
            title="Simple science, real results"
            subtitle="Three pillars make AquaVita work — each one designed and built by students."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {highlights.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className="card-clean h-full">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                    <Icon size={24} />
                  </div>
                  <h3 className="heading-serif text-xl text-primary-dark mb-3">{title}</h3>
                  <p className="font-body text-gray-600 leading-relaxed">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll className="text-center mt-12" delay={0.3}>
            <button
              onClick={() => handleTabClick('how-it-works')}
              className="btn-primary"
            >
              Full process breakdown
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-20 px-5">
        <RevealOnScroll className="max-w-2xl mx-auto text-center">
          <h2 className="heading-serif-bold text-3xl sm:text-4xl text-white mb-4">
            Want to support AquaVita?
          </h2>
          <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
            Whether you're a mentor, donor, researcher, or just curious — we'd love to hear from you.
          </p>
          <button
            onClick={() => handleTabClick('get-involved')}
            className="bg-white hover:bg-gray-100 text-primary-dark font-bold text-sm px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            Get Involved
          </button>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}