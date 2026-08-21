/**
 * Sophisticated section dividers with curves, gradients, and layered depth
 */
export default function SectionDivider({ variant = 'wave', color = 'soft', flip = false }) {
  const colorMap = {
    soft: '#fafef9',
    light: '#f1f9f4',
    white: '#ffffff',
    card: '#e4f3ec'
  }

  const fill = colorMap[color] || colorMap.soft

  if (variant === 'wave') {
    return (
      <div className={`absolute left-0 w-full h-16 ${flip ? 'top-0 rotate-180' : 'bottom-0'} pointer-events-none z-10`}>
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
            fill={fill}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'curve') {
    return (
      <div className={`absolute left-0 w-full h-20 ${flip ? 'top-0 rotate-180' : 'bottom-0'} pointer-events-none z-10`}>
        <svg
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 L0,40 Q600,80 1200,40 L1200,0 Z"
            fill={fill}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'tilt') {
    return (
      <div className={`absolute left-0 w-full h-12 ${flip ? 'top-0' : 'bottom-0'} pointer-events-none z-10`}>
        <svg
          viewBox="0 0 1200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d={flip ? "M0,60 L1200,0 L1200,60 Z" : "M0,0 L1200,60 L0,60 Z"}
            fill={fill}
          />
        </svg>
      </div>
    )
  }

  return null
}
