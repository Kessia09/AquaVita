import { useState, useRef } from 'react'
import { ArrowRight, Droplets, Leaf, Recycle, Sparkles, Utensils } from 'lucide-react'
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
  const shouldReduceMotion = useReducedMotion()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

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
        className="relative overflow-hidden bg-gradient-to-br from-bg-light via-bg-soft to-white py-16 sm:py-20 lg:py-24 px-5"
      >
        {/* Continuous Floating Ambient Shapes & Water/Leaf Motifs with Mouse Parallax */}
        <AmbientFloaters theme="light" variant="hero" mouseX={mousePos.x} mouseY={mousePos.y} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[600px]">
            
            {/* Left: Content */}
            <motion.div
              className="flex flex-col justify-center h-full"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', bounce: 0.4, duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 self-start font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card/90 backdrop-blur-sm border border-border px-4 py-1.5 rounded-full mb-6 shadow-sm"
              >
                <Sparkles size={13} className="text-accent animate-spin" style={{ animationDuration: '6s' }} />
                Rwanda Coding Academy · Student Initiative
              </motion.span>

              {/* Bouncy Spring Word-Split Headline */}
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-dark leading-[1.15] mb-6 tracking-tight flex flex-wrap gap-x-3 gap-y-2">
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
                    className={word === 'greywater' ? 'gradient-text inline-block' : 'inline-block'}
                  >
                    {word}
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
                    className={word === 'fresh' || word === 'greens' ? 'gradient-text inline-block' : 'inline-block'}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="font-body text-base sm:text-lg text-primary-mid/85 leading-relaxed mb-10 max-w-xl"
              >
                AquaVita is a student-led project at Rwanda Coding Academy. We built a
                bio-filtration system that recycles school wastewater to grow vegetables
                and herbs — closing the loop between water, food, and sustainability.
              </motion.p>

              {/* Magnetic Pulsing CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 items-start"
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
            </motion.div>

            {/* Right: Stunning Image Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 h-full auto-rows-fr"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              style={{ minHeight: '600px' }}
            >
              {/* Large Featured Image - Top Spanning */}
              <motion.div
                className="col-span-2 relative rounded-3xl overflow-hidden shadow-card-hover ring-1 ring-border group"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
                animate={{ y: [0, -8, 0] }}
                style={{
                  animationDuration: '6s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out',
                }}
              >
                <ImagePlaceholder
                  label="AquaVita bio-filtration system"
                  aspectClass="aspect-[16/9]"
                  showCaption={false}
                />
                
                {/* Floating badge overlay */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 border border-white/60 shadow-lg flex items-center gap-2.5 pointer-events-none"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center">
                    <Droplets size={16} className="text-accent animate-pulse" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-sm text-primary-dark">~40% Reused</p>
                    <p className="font-body text-xs text-primary-mid/70">School Greywater</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Left - Square */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-border bg-white group"
                whileHover={{ scale: 1.08, rotate: -2 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                <ImagePlaceholder
                  label="Fresh greens growing"
                  aspectClass="aspect-square"
                  showCaption={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Bottom Right - Square */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-border bg-white group"
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                <ImagePlaceholder
                  label="Students at work"
                  aspectClass="aspect-square"
                  showCaption={false}
                />
                
                {/* Floating badge on this image too */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-3 right-3 z-10 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 border border-white/60 shadow-lg flex items-center gap-2 pointer-events-none"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                    <Utensils size={14} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-bold text-xs text-primary-dark">~8kg/mo</p>
                    <p className="font-body text-[10px] text-primary-mid/70">Harvests</p>
                  </div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-5 relative z-10 border-y border-border-light/60">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── How it works preview ─────────────────────────────── */}
      <section className="bg-bg-soft py-20 sm:py-24 px-5 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            eyebrow="The System"
            title="Simple science, real results"
            subtitle="Three pillars make AquaVita work — each one designed and built by students."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1} direction="up">
                <TiltCard maxTilt={8}>
                  <div className="bg-white rounded-3xl p-7 sm:p-8 border border-border-light shadow-card h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        animate={{ scale: [1, 1.12, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                        className="w-12 h-12 rounded-2xl bg-bg-card border border-border flex items-center justify-center mb-6 text-accent"
                      >
                        <Icon size={22} />
                      </motion.div>
                      <h3 className="font-heading font-bold text-xl text-primary-dark mb-3">{title}</h3>
                      <p className="font-body text-sm text-primary-mid/80 leading-relaxed">{body}</p>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll className="text-center mt-12" delay={0.3}>
            <button
              onClick={() => handleTabClick('how-it-works')}
              className="inline-flex items-center gap-2 text-accent font-bold font-body text-sm hover:text-accent-mid group focus:outline-none"
            >
              Full process breakdown{' '}
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-footer py-24 px-5">
        <AmbientFloaters theme="dark" variant="cta" />
        <RisingParticles count={16} />

        <RevealOnScroll className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight">
            Want to support AquaVita?
          </h2>
          <p className="font-body text-base text-white/80 mb-9 leading-relaxed max-w-xl mx-auto">
            Whether you're a mentor, donor, researcher, or just curious — we'd love to hear from you.
          </p>
          <MagneticButton pulse strength={0.35}>
            {({ onClick }) => (
              <button
                onClick={() => {
                  if (onClick) onClick()
                  handleTabClick('get-involved')
                }}
                className="inline-flex items-center gap-2.5 bg-white hover:bg-bg-light transition-all duration-200 text-primary-dark font-bold font-body px-9 py-4 rounded-full shadow-lg focus:outline-none"
              >
                Get Involved <ArrowRight size={18} className="text-accent" />
              </button>
            )}
          </MagneticButton>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}



