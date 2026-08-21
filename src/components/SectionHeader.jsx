import RevealOnScroll from './RevealOnScroll'
import DecorativeCorner from './DecorativeCorner'

export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <RevealOnScroll className={`relative text-center max-w-2xl mx-auto mb-12 ${className}`}>
      {eyebrow && (
        <div className="relative inline-block mb-4">
          <span className="inline-flex items-center font-body font-semibold text-xs uppercase tracking-widest text-accent glass-effect px-4 py-1.5 rounded-full shadow-sm">
            {eyebrow}
          </span>
        </div>
      )}
      <div className="relative">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary-dark mb-3 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-body text-base text-primary-mid/80 leading-relaxed">{subtitle}</p>
        )}
        
        {/* Subtle decorative line */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
    </RevealOnScroll>
  )
}
