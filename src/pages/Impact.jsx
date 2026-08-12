import { TrendingUp, Users, Droplets, BookOpen, Sprout } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import StatCard from '../components/StatCard'
import ImagePlaceholder from '../components/ImagePlaceholder'

const stats = [
  { value: '800 L+', label: 'greywater recycled per week', delay: 0 },
  { value: '~35 kg', label: 'produce harvested to date', delay: 0.1 },
  { value: '30+', label: 'students directly involved', delay: 0.2 },
  { value: '5', label: 'community workshops run', delay: 0.3 },
]

const pillars = [
  {
    icon: Droplets,
    color: 'bg-blue-50 text-blue-500',
    title: 'Water Conservation',
    body: "By treating and reusing greywater on-site, we reduce the school's freshwater consumption for irrigation to almost zero. Over a typical school term, this saves an estimated 10,000 litres of potable water.",
  },
  {
    icon: Sprout,
    color: 'bg-green-50 text-green-600',
    title: 'Food Production',
    body: "Our grow beds supply leafy greens and herbs that supplement school meals. We've harvested lettuce, spinach, kale, basil, and mint — fresh, organic, and grown metres from where they're eaten.",
  },
  {
    icon: BookOpen,
    color: 'bg-amber-50 text-amber-600',
    title: 'Education & STEM',
    body: 'Students learn biology, chemistry, hydrology, and engineering by maintaining a real system. The project has become an integrated part of science and technology classes at RCA.',
  },
  {
    icon: Users,
    color: 'bg-purple-50 text-purple-500',
    title: 'Community Outreach',
    body: "We've run workshops with local schools and farming communities, sharing our filtration designs and materials lists so others can replicate the system at low cost.",
  },
  {
    icon: TrendingUp,
    color: 'bg-rose-50 text-rose-500',
    title: 'Scalability',
    body: "The modular design means new filter columns and grow beds can be added as the school grows. We're already planning an expansion to the school kitchen's wastewater output.",
  },
]

const timeline = [
  { date: 'Sep 2023', event: 'Project idea proposed and approved by school administration.' },
  { date: 'Nov 2023', event: 'First prototype bio-filter column built and tested with tap water.' },
  { date: 'Jan 2024', event: 'Collection tank and pipe system installed. First greywater tests conducted.' },
  { date: 'Mar 2024', event: 'Grow beds constructed and first seedlings planted.' },
  { date: 'May 2024', event: 'First harvest — lettuce and basil — served at school lunch.' },
  { date: 'Jul 2024', event: 'Community workshop held with 3 neighbouring schools.' },
  { date: 'Sep 2024', event: 'System expansion: second filter column added, doubling capacity.' },
  { date: 'Ongoing', event: 'Weekly monitoring, data collection, and continuous improvements.' },
]

export default function Impact() {
  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-bg-light via-bg-soft to-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-5">
            Impact
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary-dark leading-tight mb-5">
            Real numbers,<br />
            <span className="gradient-text">real change</span>
          </h1>
          <p className="font-body text-base text-primary-mid/80 leading-relaxed max-w-xl mx-auto">
            Every litre filtered, every gram harvested, and every student who learns — it adds up.
            Here's what AquaVita has achieved since we started.
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
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
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="bg-white rounded-3xl p-7 border border-border-light shadow-card h-full">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-primary-dark mb-2">{title}</h3>
                  <p className="font-body text-sm text-primary-mid/80 leading-relaxed">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo grid ───────────────────────────────────────── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="In the Field"
            title="See it in action"
            subtitle="Photos from our installation, maintenance sessions, and harvest days."
          />
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <section className="bg-bg-soft py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="Timeline" title="Our journey so far" />
          <ol className="relative border-l-2 border-border ml-4 space-y-10">
            {timeline.map(({ date, event }, i) => (
              <RevealOnScroll key={date + i} delay={i * 0.06} className="relative pl-8">
                <li>
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm" />
                  <span className="font-body text-xs font-semibold text-accent uppercase tracking-wide">
                    {date}
                  </span>
                  <p className="font-body text-sm text-primary-dark mt-1 leading-relaxed">
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
