/**
 * AquaVita Logo — PNG icon + wordmark.
 * size="sm"  → compact navbar version
 * size="lg"  → hero / footer version
 * light      → light variant for dark backgrounds
 */
export default function Logo({ size = 'sm', light = false }) {
  const isLg = size === 'lg'
  const iconSize = isLg ? 44 : 32
  const wordmarkClass = isLg
    ? 'text-2xl tracking-tight'
    : 'text-lg tracking-tight'
  const tagClass = isLg ? 'text-xs mt-0.5' : 'hidden'

  return (
    <div className="flex items-center gap-2 select-none">
      {/* PNG Icon */}
      <img 
        src="/favicon.png" 
        alt="AquaVita logo" 
        width={iconSize} 
        height={iconSize}
        className="object-contain"
      />

      {/* Wordmark */}
      <div>
        <span
          className={`font-heading font-bold leading-none ${wordmarkClass} ${
            light ? 'gradient-text-light' : 'gradient-text'
          }`}
        >
          AquaVita
        </span>
        {isLg && (
          <p className={`${tagClass} ${light ? 'text-footer-text' : 'text-accent-mid'} font-body font-medium`}>
            greywater → greens
          </p>
        )}
      </div>
    </div>
  )
}
