import { TrendingUp, Users, Droplets, BookOpen, Sprout, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import StatCard from '../components/StatCard'
import ImagePlaceholder from '../components/ImagePlaceholder'

const stats = [
  { value: '~40%', label: 'greywater reused', delay: 0 },
  { value: '~8kg/mo', label: 'herbs & veggies harvested', delay: 0.1 },
  { value: '12+', label: 'students directly involved', delay: 0.2 },
  { value: 'Weekly', label: 'harvest shared in school kitchen', delay: 0.3 },
]

const pillars = [
  {
    icon: Droplets,
    title: 'Water Conservation',
    body: "By treating and reusing greywater on-site, we redirect ~40% of school wastewater into irrigation, drastically reducing fresh water consumption for food production.",
  },
  {
    icon: Sprout,
    title: 'Food Production',
    body: "Our grow beds supply ~8kg of fresh leafy greens and herbs per month. We harvest lettuce, spinach, kale, basil, and mint — fresh, organic, and served directly at school lunches.",
  },
  {
    icon: BookOpen,
    title: 'Education & STEM',
    body: '12+ RCA students learn biology, chemistry, hydrology, and engineering by building and maintaining the real bio-filtration system as part of their coursework.',
  },
  {
    icon: Users,
    title: 'Community Outreach',
    body: 'We conduct workshops with local schools and farming communities, sharing our bio-filtration designs and low-cost material lists so others can replicate the system.',
  },
  {
    icon: TrendingUp,
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
      <section className="bg-white grid-bg pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="pill-badge mb-6">
            Impact
          </span>
          <h1 className="heading-serif-bold text-4xl sm:text-5xl text-primary-dark mb-5">
            Real numbers,<br />
            real change
          </h1>
          <p className="font-body text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
            Every litre filtered, every gram harvested, and every student who learns — it adds up.
            Here's what AquaVita has achieved since we started.
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className="bg-gray-50 grid-bg py-16 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ── Key Metric Spotlight ─────────────────────────────── */}
      <section className="bg-white grid-bg py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="card-clean">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <span className="pill-badge">
                    Key Metric
                  </span>
                  <h2 className="heading-serif-bold text-3xl sm:text-4xl text-primary-dark">
                    ~40% School Greywater Reused for Organic Produce
                  </h2>
                  <p className="font-body text-gray-600 leading-relaxed">
                    By recirculating wastewater into closed-loop bio-filtration grow beds, AquaVita turns everyday school greywater into ~8kg of fresh herbs and vegetables per month for the school kitchen.
                  </p>
                </div>
                <div className="md:col-span-5 w-full">
                  <ImagePlaceholder
                    label="AquaVita bio-filtration system at Rwanda Coding Academy"
                    aspectClass="aspect-[4/3]"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Impact pillars ───────────────────────────────────── */}
      <section className="bg-gray-50 grid-bg py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Areas of Impact"
            title="Five ways AquaVita makes a difference"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className="card-clean h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                    <Icon size={24} />
                  </div>
                  <h3 className="heading-serif font-bold text-lg text-primary-dark mb-2">{title}</h3>
                  <p className="font-body text-gray-600 leading-relaxed">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>


      {/* ── Photo grid ───────────────────────────────────────── */}
      <section className="bg-white grid-bg py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="In the Field"
            title="See it in action"
            subtitle="Photos from our installation, maintenance sessions, and harvest days."
          />
          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-clean aspect-square flex items-center justify-center">
                <ImagePlaceholder label="Bio-filter column close-up" aspectClass="aspect-square" className="w-full" />
              </div>
              <div className="card-clean aspect-square flex items-center justify-center">
                <ImagePlaceholder label="Students checking water pH" aspectClass="aspect-square" className="w-full" />
              </div>
              <div className="card-clean aspect-square flex items-center justify-center">
                <ImagePlaceholder label="Grow beds with lettuce" aspectClass="aspect-square" className="w-full" />
              </div>
              <div className="card-clean aspect-square flex items-center justify-center">
                <ImagePlaceholder label="Harvesting day" aspectClass="aspect-square" className="w-full" />
              </div>
              <div className="card-clean aspect-square flex items-center justify-center">
                <ImagePlaceholder label="Community workshop session" aspectClass="aspect-square" className="w-full" />
              </div>
              <div className="card-clean aspect-square flex items-center justify-center">
                <ImagePlaceholder label="Team working on expansion" aspectClass="aspect-square" className="w-full" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="bg-gray-50 grid-bg py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader eyebrow="Timeline" title="Our journey so far" />
          <div className="card-clean">
            <ol className="relative border-l-2 border-gray-200 ml-4 space-y-8">
              {timeline.map(({ date, event }, i) => (
                <RevealOnScroll key={date + i} delay={i * 0.06} className="relative pl-8">
                  <li>
                    <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm" />
                    <span className="pill-badge !text-xs !py-1 !px-3 mb-2">
                      {date}
                    </span>
                    <p className="font-body text-gray-600 leading-relaxed">
                      {event}
                    </p>
                  </li>
                </RevealOnScroll>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}


