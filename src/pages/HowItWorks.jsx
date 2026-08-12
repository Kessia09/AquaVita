import { ArrowDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import RevealOnScroll from '../components/RevealOnScroll'
import ImagePlaceholder from '../components/ImagePlaceholder'

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
      <section className="bg-gradient-to-br from-bg-light via-bg-soft to-white pt-20 pb-16 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-5">
            The Process
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary-dark leading-tight mb-5">
            From wastewater to<br />
            <span className="gradient-text">fresh vegetables</span>
          </h1>
          <p className="font-body text-base text-primary-mid/80 leading-relaxed max-w-xl mx-auto">
            Our five-stage system was designed entirely by students using locally available
            materials. Here's exactly how dirty water becomes clean enough to grow food.
          </p>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────── */}
      <section className="bg-bg-soft py-20 px-5">
        <div className="max-w-5xl mx-auto space-y-16">
          {steps.map(({ number, title, body, image }, i) => (
            <RevealOnScroll key={number} delay={0.05}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Text */}
                <div className="flex-1">
                  <span className="font-heading font-bold text-5xl text-bg-card leading-none select-none">
                    {number}
                  </span>
                  <h2 className="font-heading font-bold text-2xl text-primary-dark mt-1 mb-3">
                    {title}
                  </h2>
                  <p className="font-body text-sm text-primary-mid/80 leading-relaxed max-w-lg">
                    {body}
                  </p>
                </div>
                {/* Image */}
                <div className="flex-1 w-full">
                  <ImagePlaceholder label={image} aspectClass="aspect-[4/3]" className="w-full" />
                </div>
              </div>

              {/* Arrow connector (not after last step) */}
              {i < steps.length - 1 && (
                <div className="flex justify-center mt-10">
                  <div className="w-10 h-10 rounded-full bg-bg-card border border-border flex items-center justify-center">
                    <ArrowDown size={16} className="text-accent" />
                  </div>
                </div>
              )}
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Materials ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Materials"
            title="Built from local resources"
            subtitle="We deliberately chose materials that are affordable, locally available, and easy to maintain — so the system can be replicated anywhere."
          />
          <RevealOnScroll>
            <div className="overflow-hidden rounded-3xl border border-border-light shadow-card">
              <table className="w-full text-sm font-body">
                <thead>
                  <tr className="bg-bg-card border-b border-border">
                    <th className="text-left px-6 py-4 font-semibold text-primary-dark">Material</th>
                    <th className="text-left px-6 py-4 font-semibold text-primary-dark">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map(({ item, source }, i) => (
                    <tr
                      key={item}
                      className={`border-b border-border-light last:border-0 ${
                        i % 2 === 0 ? 'bg-white' : 'bg-bg-soft'
                      }`}
                    >
                      <td className="px-6 py-4 text-primary-dark font-medium">{item}</td>
                      <td className="px-6 py-4 text-primary-mid/75">{source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Science note ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-bg-light to-bg-soft py-16 px-5">
        <RevealOnScroll className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-border shadow-card">
          <h3 className="font-heading font-bold text-xl text-primary-dark mb-3">
            Why biochar?
          </h3>
          <p className="font-body text-sm text-primary-mid/80 leading-relaxed mb-4">
            Biochar is a porous charcoal produced by heating organic material (like wood or
            crop residue) in a low-oxygen environment — a process called pyrolysis. Its
            highly porous surface area hosts billions of beneficial microbes that break down
            organic pollutants in greywater.
          </p>
          <p className="font-body text-sm text-primary-mid/80 leading-relaxed">
            Unlike commercial activated carbon, biochar can be produced locally from
            agricultural by-products at very low cost. Our batch is made from wood waste
            collected around the RCA campus, making it essentially a zero-cost input.
          </p>
        </RevealOnScroll>
      </section>
    </PageTransition>
  )
}
