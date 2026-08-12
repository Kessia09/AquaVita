import RevealOnScroll from './RevealOnScroll'

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span className="inline-block font-body font-semibold text-xs uppercase tracking-widest text-accent bg-bg-card border border-border px-4 py-1.5 rounded-full mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-dark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-primary-mid/80 leading-relaxed">{subtitle}</p>
      )}
    </RevealOnScroll>
  )
}
