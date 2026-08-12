/**
 * AquaVita Logo — SVG icon (water droplet + sprout) + wordmark.
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
      {/* SVG Icon: droplet with leaf sprout inside */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Droplet shape */}
        <path
          d="M22 4C22 4 8 18 8 27C8 34.7 14.3 41 22 41C29.7 41 36 34.7 36 27C36 18 22 4 22 4Z"
          fill={light ? '#389e73' : '#2b7a57'}
          opacity="0.18"
        />
        <path
          d="M22 6C22 6 10 19.5 10 27C10 33.6 15.4 39 22 39C28.6 39 34 33.6 34 27C34 19.5 22 6 22 6Z"
          fill="url(#dropletGrad)"
        />
        {/* Stem */}
        <line
          x1="22"
          y1="32"
          x2="22"
          y2="22"
          stroke={light ? '#c0dfd1' : 'white'}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Left leaf */}
        <path
          d="M22 28 C18 26 15 22 17 19 C19 17 22 20 22 23"
          fill={light ? '#c0dfd1' : 'white'}
          opacity="0.9"
        />
        {/* Right leaf */}
        <path
          d="M22 25 C26 23 29 19 27 16 C25 14 22 17 22 20"
          fill={light ? '#c0dfd1' : 'white'}
          opacity="0.75"
        />
        <defs>
          <linearGradient id="dropletGrad" x1="14" y1="8" x2="32" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1f704b" />
            <stop offset="1" stopColor="#159e6b" />
          </linearGradient>
        </defs>
      </svg>

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
