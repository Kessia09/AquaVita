import { ArrowDown, Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import ImagePlaceholder from '../components/ImagePlaceholder'
import AmbientFloaters from '../components/AmbientFloaters'
import TiltCard from '../components/TiltCard'
import StepIconAnimation from '../components/StepIconAnimation'

const steps = [
  {
    number: '01',
    title: 'Greywater Collection',
    body: "Wastewater from sinks, hand-washing stations, and cleaning activities is channelled into a collection tank rather than going straight to the drain. We installed simple PVC pipes to redirect this flow without disrupting the school's normal plumbing.",
    image: 'Collection tank and pipe inlet',
  },
  {
    number: '02',
    title: 'Pre-Filtration',
    body: "Larger debris, food particles, and solids are removed by a mesh screen at the tank inlet. This first stage protects the biological layers below and extends the system's maintenance intervals.",
    image: 'Mesh screen pre-filter',
  },
  {
    number: '03',
    title: 'Bio-Filtration Layers',
    body: 'Water flows down through three distinct layers: coarse gravel breaks up solids, medium sand captures fine particles, and crushed biochar (made from agricultural waste) adsorbs contaminants and hosts beneficial bacteria that break down organic matter.',
    image: 'Cross-section of gravel, sand, and biochar layers',
  },
  {
    number: '04',
    title: 'Irrigation to Grow Beds',
    body: 'Filtered water is collected at the bottom of the filter column and gravity-fed into raised grow beds. Overflow returns to the collection tank for a second pass, ensuring maximum water reuse and near-zero runoff.',
    image: 'Grow bed drip irrigation',
  },
  {
    number: '05',
    title: 'Harvest',
    body: 'Lettuce, spinach, basil, kale, and other leafy greens are ready for harvest within 3–6 weeks of planting. The produce supplements school meals, and excess is shared with nearby community members.',
    image: 'Harvesting greens from grow beds',
  },
]

const materials = [
  { item: 'PVC pipes & fittings', source: 'Local hardware store, Kigali' },
  { item: 'Coarse gravel', source: 'Sourced from local construction suppliers' },
  { item: 'Fine sand', source: 'Riverbank sand, locally collected' },
  { item: 'Biochar', source: 'Self-produced from agricultural wood waste' },
  { item: 'Raised grow beds (timber)', source: 'Built by students in the school workshop' },
  { item: 'Mesh screens', source: 'Repurposed from discarded window screens' },
  { item: 'Seeds & seedlings', source: 'Donated by local farmers and teachers' },
]

export default function HowItWorks() {
  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-bg-pale via-bg-card/40 to-bg-soft pt-24 pb-20 px-5 border-b border-border/60">
        <AmbientFloaters theme="light" variant="process" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-primary-dark bg-bg-card border border-border px-4 py-1.5 rounded-full mb-5 shadow-sm">
            The Process
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-primary-dark leading-tight mb-5 tracking-tight">
            From wastewater to<br />
            <span className="gradient-text">fresh vegetables</span>
          </h1>
          <p className="font-body text-base text-primary-mid/85 leading-relaxed max-w-xl mx-auto">
            Our five-stage system was designed entirely by students using locally available
            materials. Here's exactly how dirty water becomes clean enough to grow food.
          </p>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────── */}
      <section className="bg-bg-pale/80 py-20 px-5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 relative z-10">
          {steps.map(({ number, title, body, image }, i) => (
            <RevealOnScroll key={number} delay={0.05} direction="up">
              <TiltCard maxTilt={6}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 md:gap-12 items-center bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-t-4 border-t-accent border-x border-b border-border-light shadow-card hover:shadow-card-hover transition-all duration-300`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="font-heading font-extrabold text-4xl sm:text-5xl gradient-text leading-none select-none"
                      >
                        {number}
                      </motion.span>
                      {/* Meaningful Custom Motion Icon for each step */}
                      <StepIconAnimation stepNumber={number} />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-primary-dark mb-3">
                      {title}
                    </h2>
                    <p className="font-body text-sm text-primary-mid/85 leading-relaxed max-w-lg">
                      {body}
                    </p>
                  </div>
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <ImagePlaceholder
                      label={image}
                      aspectClass="aspect-[4/3]"
                      className="w-full shadow-md"
                    />
                  </div>
                </div>
              </TiltCard>

              {/* Sequential connector line & animated arrow icon */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center justify-center my-6">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-0.5 bg-gradient-to-b from-accent to-accent-mid rounded-full"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center shadow-sm"
                  >
                    <ArrowDown size={16} className="text-accent animate-bounce" />
                  </motion.div>
                </div>
              )}
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Materials ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-5 relative">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Materials"
            title="Built from local resources"
            subtitle="We deliberately chose materials that are affordable, locally available, and easy to maintain — so the system can be replicated anywhere."
          />
          <RevealOnScroll>
            <div className="overflow-hidden rounded-3xl border border-border-light shadow-card bg-white">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-bg-card border-b border-border">
                    <th className="text-left px-6 py-4 font-bold text-primary-dark uppercase tracking-wider text-xs">Material</th>
                    <th className="text-left px-6 py-4 font-bold text-primary-dark uppercase tracking-wider text-xs">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map(({ item, source }, i) => (
                    <tr
                      key={item}
                      className={`border-b border-border-light last:border-0 hover:bg-bg-light/60 transition-colors duration-150 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-bg-soft/70'
                      }`}
                    >
                      <td className="px-6 py-4 text-primary-dark font-medium">{item}</td>
                      <td className="px-6 py-4 text-primary-mid/80">{source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Science note ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-bg-light via-bg-soft to-white py-20 px-5 relative overflow-hidden">
        <RevealOnScroll className="max-w-3xl mx-auto">
          <TiltCard maxTilt={6}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [-8, 8, -8] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-2xl bg-bg-card border border-border flex items-center justify-center text-accent shrink-0"
                >
                  <Flame size={20} />
                </motion.div>
                <h3 className="font-heading font-extrabold text-2xl text-primary-dark">
                  Why biochar?
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base text-primary-mid/85 leading-relaxed mb-4">
                Biochar is a porous charcoal produced by heating organic material (like wood or
                crop residue) in a low-oxygen environment — a process called pyrolysis. Its
                highly porous surface area hosts billions of beneficial microbes that break down
                organic pollutants in greywater.
              </p>
              <p className="font-body text-sm sm:text-base text-primary-mid/85 leading-relaxed">
                Unlike commercial activated carbon, biochar can be produced locally from
                agricultural by-products at very low cost. Our batch is made from wood waste
                collected around the RCA campus, making it essentially a zero-cost input.
              </p>
            </div>
          </TiltCard>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}



