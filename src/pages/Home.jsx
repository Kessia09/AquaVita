import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Leaf, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionHeader from '../components/SectionHeader'
import StatCard from '../components/StatCard'
import ImagePlaceholder from '../components/ImagePlaceholder'

const highlights = [
  {
    icon: Recycle,
    title: 'Bio-Filtration System',
    body: 'We collect greywater from sinks and cleaning stations, then filter it through layers of gravel, sand, and biochar before it reaches our grow beds.',
  },
  {
    icon: Droplets,
    title: 'Water Reuse',
    body: "Every litre of filtered water irrigates our herb and vegetable garden, cutting the school's fresh-water demand for food production to near zero.",
  },
  {
    icon: Leaf,
    title: 'Fresh Produce',
    body: 'Lettuce, spinach, basil, and other greens grown on-site supplement school meals while showing students that sustainability is tangible and delicious.',
  },
]

const stats = [
  { value: '800 L+', label: 'greywater recycled per week', delay: 0 },
  { value: '12+', label: 'plant species growing', delay: 0.1 },
  { value: '30+', label: 'students involved', delay: 0.2 },
  { value: '0 pesticides', label: 'fully organic system', delay: 0.3 },
]

export default function Home() {
  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg-light via-bg-soft to-white pt-24 pb-20 sm:pt-32 sm:pb-28 px-5">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rwanda Coding Academy · Student Initiative
          </motion.span>

          <motion.h1
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-primary-dark leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Turning{' '}
            <span className="gradient-text">greywater</span>
            <br />
            into{' '}
            <span className="gradient-text">fresh greens</span>
          </motion.h1>

          <motion.p
            className="font-body text-base sm:text-lg text-primary-mid/80 max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            AquaVita is a student-led project at Rwanda Coding Academy. We built a
            bio-filtration system that recycles school wastewater to grow vegetables
            and herbs — closing the loop between water, food, and sustainability.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-mid transition-colors duration-200 text-white font-semibold font-body px-7 py-3.5 rounded-full shadow-md hover:shadow-lg"
            >
              See How It Works <ArrowRight size={16} />
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 bg-white hover:bg-bg-light transition-colors duration-200 text-primary-dark font-semibold font-body px-7 py-3.5 rounded-full border border-border shadow-card hover:shadow-card-hover"
            >
              Our Impact
            </Link>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          className="relative max-w-3xl mx-auto mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-card-hover ring-1 ring-border">
            <ImagePlaceholder label="AquaVita bio-filtration system at Rwanda Coding Academy" aspectClass="aspect-video" />
          </div>
        </motion.div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── How it works preview ─────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The System"
            title="Simple science, real results"
            subtitle="Three pillars make AquaVita work — each one designed and built by students."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-7 border border-border-light shadow-card h-full">
                  <div className="w-11 h-11 rounded-2xl bg-bg-card flex items-center justify-center mb-5">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-dark mb-2">{title}</h3>
                  <p className="font-body text-sm text-primary-mid/80 leading-relaxed">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll className="text-center mt-10" delay={0.3}>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-accent font-semibold font-body text-sm hover:underline"
            >
              Full process breakdown <ArrowRight size={15} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 px-5">
        <RevealOnScroll className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Want to support AquaVita?
          </h2>
          <p className="font-body text-white/75 mb-8 leading-relaxed">
            Whether you're a mentor, donor, researcher, or just curious — we'd love to hear from you.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-white hover:bg-bg-light transition-colors duration-200 text-primary-dark font-semibold font-body px-8 py-3.5 rounded-full shadow-md"
          >
            Get Involved <ArrowRight size={16} />
          </Link>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}
