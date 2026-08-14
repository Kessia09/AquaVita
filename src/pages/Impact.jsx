import { TrendingUp, Users, Droplets, BookOpen, Sprout, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import StatCard from '../components/StatCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import AmbientFloaters from '../components/AmbientFloaters'
import TiltCard from '../components/TiltCard'

const stats = [
  { value: '~40%', label: 'greywater reused', delay: 0 },
  { value: '~8kg/mo', label: 'herbs & veggies harvested', delay: 0.1 },
  { value: '12+', label: 'students directly involved', delay: 0.2 },
  { value: 'Weekly', label: 'harvest shared in school kitchen', delay: 0.3 },
]

const pillars = [
  {
    icon: Droplets,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    title: 'Water Conservation',
    body: "By treating and reusing greywater on-site, we redirect ~40% of school wastewater into irrigation, drastically reducing fresh water consumption for food production.",
  },
  {
    icon: Sprout,
    color: 'bg-green-50 text-green-700 border-green-100',
    title: 'Food Production',
    body: "Our grow beds supply ~8kg of fresh leafy greens and herbs per month. We harvest lettuce, spinach, kale, basil, and mint — fresh, organic, and served directly at school lunches.",
  },
  {
    icon: BookOpen,
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    title: 'Education & STEM',
    body: '12+ RCA students learn biology, chemistry, hydrology, and engineering by building and maintaining the real bio-filtration system as part of their coursework.',
  },
  {
    icon: Users,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    title: 'Community Outreach',
    body: 'We conduct workshops with local schools and farming communities, sharing our bio-filtration designs and low-cost material lists so others can replicate the system.',
  },
  {
    icon: TrendingUp,
    color: 'bg-rose-50 text-rose-600 border-rose-100',
    title: 'Scalability',
    body: "The modular design allows new filter columns and grow beds to be added easily. We're actively planning an expansion to connect additional school kitchen outlets.",
  },
]

const timeline = [
  { date: 'Sep 2023', event: 'Project idea proposed and approved by RCA administration.' },
  { date: 'Nov 2023', event: 'First prototype bio-filter column built and tested with tap water.' },
  { date: 'Jan 2024', event: 'Collection tank and pipe system installed; first greywater tests conducted.' },
  { date: 'Mar 2024', event: 'Grow beds constructed and first seedlings planted.' },
  { date: 'May 2024', event: 'First harvest of fresh lettuce and basil served at school lunch.' },
  { date: 'Jul 2024', event: 'Community workshop held with neighbouring school representatives.' },
  { date: 'Sep 2024', event: 'System expansion: second filter column added, boosting greywater throughput.' },
  { date: 'Ongoing', event: 'Weekly harvests shared in school kitchen with ongoing data collection.' },
]

export default function Impact() {
  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg-light via-bg-card/40 to-white pt-24 pb-20 px-5 border-b border-border/60">
        <AmbientFloaters theme="light" variant="impact" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-5 shadow-sm">
            Impact
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary-dark leading-tight mb-5 tracking-tight">
            Real numbers,<br />
            <span className="gradient-text">real change</span>
          </h1>
          <p className="font-body text-base text-primary-mid/85 leading-relaxed max-w-xl mx-auto">
            Every litre filtered, every gram harvested, and every student who learns — it adds up.
            Here's what AquaVita has achieved since we started.
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-5 border-y border-border-light/60">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── Asymmetric Spotlight Section ─────────────────────── */}
      <section className="bg-gradient-to-br from-bg-light via-white to-bg-pale py-20 px-5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <RevealOnScroll direction="scale">
            <TiltCard maxTilt={5}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-primary-dark text-white rounded-3xl p-8 sm:p-10 border border-primary-mid shadow-card-hover relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                <div className="md:col-span-7 space-y-4 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-mid bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                    <Award size={14} className="animate-spin" style={{ animationDuration: '8s' }} /> Key Metric Highlight
                  </span>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-snug">
                    ~40% School Greywater Reused for Organic Produce
                  </h2>
                  <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                    By recirculating wastewater into closed-loop bio-filtration grow beds, AquaVita turns everyday school greywater into ~8kg of fresh herbs and vegetables per month for the school kitchen.
                  </p>
                </div>
                <div className="md:col-span-5 w-full relative z-10">
                  <ImagePlaceholder
                    label="AquaVita bio-filtration system at Rwanda Coding Academy"
                    aspectClass="aspect-[4/3]"
                    className="w-full shadow-lg"
                  />
                </div>
              </div>
            </TiltCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Impact pillars ───────────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Areas of Impact"
            title="Five ways AquaVita makes a difference"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, color, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08} direction="up">
                <TiltCard maxTilt={8}>
                  <div className="bg-white rounded-3xl p-7 border border-border-light shadow-card h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 4, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${color}`}
                      >
                        <Icon size={22} />
                      </motion.div>
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


      {/* ── Photo grid ───────────────────────────────────────── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="In the Field"
            title="See it in action"
            subtitle="Photos from our installation, maintenance sessions, and harvest days."
          />
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ImagePlaceholder label="Bio-filter column close-up" aspectClass="aspect-square" />
              <ImagePlaceholder label="Students checking water pH" aspectClass="aspect-square" />
              <ImagePlaceholder label="Grow beds with lettuce" aspectClass="aspect-square" />
              <ImagePlaceholder label="Harvesting day" aspectClass="aspect-square" />
              <ImagePlaceholder label="Community workshop session" aspectClass="aspect-square" />
              <ImagePlaceholder label="Team working on expansion" aspectClass="aspect-square" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="Timeline" title="Our journey so far" />
          <ol className="relative border-l-2 border-border ml-4 space-y-10">
            {timeline.map(({ date, event }, i) => (
              <RevealOnScroll key={date + i} delay={i * 0.06} className="relative pl-8" direction="up">
                <li>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white shadow-md ring-4 ring-accent/20"
                  />
                  <span className="font-body text-xs font-bold text-accent uppercase tracking-wider bg-bg-card px-2.5 py-1 rounded-md border border-border inline-block mb-1">
                    {date}
                  </span>
                  <p className="font-body text-sm font-medium text-primary-dark mt-1 leading-relaxed">
                    {event}
                  </p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>
    </PageTransition>
  )
}


