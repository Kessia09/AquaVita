import RevealOnScroll from './RevealOnScroll'

export default function StatCard({ value, label, delay = 0 }) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="bg-white rounded-3xl px-6 py-5 text-center shadow-card border border-border-light">
        <p className="font-heading font-bold text-3xl gradient-text leading-none mb-1">
          {value}
        </p>
        <p className="font-body text-sm font-medium text-primary-mid/80">{label}</p>
      </div>
    </RevealOnScroll>
  )
}
