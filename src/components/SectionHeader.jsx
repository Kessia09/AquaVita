import RevealOnScroll from './RevealOnScroll'

export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <RevealOnScroll className={`text-center max-w-2xl mx-auto mb-16 ${className}`}>
      {eyebrow && (
        <div className="mb-6">
          <span className="pill-badge">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="heading-serif-bold text-4xl sm:text-5xl text-primary-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-gray-600 leading-relaxed">{subtitle}</p>
      )}
    </RevealOnScroll>
  )
}
