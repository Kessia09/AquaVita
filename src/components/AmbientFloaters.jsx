import { motion, useReducedMotion } from 'framer-motion'

// SVG Droplet Motif
export function DropletIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

// SVG Leaf Motif
export function LeafIcon({ className = '', size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 3C10.5 3 5 8.5 5 15c0 2.2.8 4.2 2.2 5.8L6 22l3.2-1.2C10.8 21.4 12.8 22 15 22c6.5 0 12-5.5 12-12V3h-10zm0 2h8v8c0 5.5-4.5 10-10 10-1.8 0-3.5-.5-5-1.3L7.7 20.7l1-2.3C7.9 17 7.5 15.3 7.5 13.5 7.5 8.3 11.8 4 17 4z" />
    </svg>
  )
}

/**
 * Continuous floating background orbs, droplets, and leaf motifs with mouse parallax response.
 * Animates automatically on page load independent of scroll or user interaction.
 */
export default function AmbientFloaters({
  theme = 'light',
  variant = 'hero',
  mouseX = 0,
  mouseY = 0,
}) {
  const shouldReduceMotion = useReducedMotion()

  const floaters = [
    {
      id: 1,
      type: 'blob',
      size: 'w-72 h-72 sm:w-96 sm:h-96',
      blur: 'blur-3xl',
      color: theme === 'dark' ? 'bg-accent/20' : 'bg-accent/15',
      pos: '-top-20 -left-20',
      parallaxFactor: 18,
      animateY: shouldReduceMotion ? [0, 0] : [0, -25, 0],
      animateX: shouldReduceMotion ? [0, 0] : [0, 15, 0],
      duration: 8,
    },
    {
      id: 2,
      type: 'blob',
      size: 'w-80 h-80 sm:w-96 sm:h-96',
      blur: 'blur-3xl',
      color: theme === 'dark' ? 'bg-primary-mid/25' : 'bg-primary/15',
      pos: '-bottom-24 -right-20',
      parallaxFactor: -25,
      animateY: shouldReduceMotion ? [0, 0] : [0, 30, 0],
      animateX: shouldReduceMotion ? [0, 0] : [0, -20, 0],
      duration: 10,
    },
    {
      id: 3,
      type: 'blob',
      size: 'w-64 h-64',
      blur: 'blur-2xl',
      color: theme === 'dark' ? 'bg-accent-mid/15' : 'bg-bg-card',
      pos: 'top-1/3 right-10',
      parallaxFactor: 12,
      animateY: shouldReduceMotion ? [0, 0] : [0, -18, 0],
      animateX: shouldReduceMotion ? [0, 0] : [0, -15, 0],
      duration: 7,
    },
    // Floating brand icons
    {
      id: 4,
      type: 'droplet',
      iconSize: 32,
      color: theme === 'dark' ? 'text-accent-mid/40' : 'text-accent/35',
      pos: 'top-20 left-12 sm:left-24',
      parallaxFactor: 30,
      animateY: shouldReduceMotion ? [0, 0] : [0, -20, 0],
      animateRotate: shouldReduceMotion ? [0, 0] : [0, 15, 0],
      duration: 6,
    },
    {
      id: 5,
      type: 'leaf',
      iconSize: 36,
      color: theme === 'dark' ? 'text-accent/35' : 'text-primary/30',
      pos: 'top-1/2 left-8 sm:left-16',
      parallaxFactor: -20,
      animateY: shouldReduceMotion ? [0, 0] : [0, 22, 0],
      animateRotate: shouldReduceMotion ? [0, 0] : [-12, 12, -12],
      duration: 9,
    },
    {
      id: 6,
      type: 'droplet',
      iconSize: 26,
      color: theme === 'dark' ? 'text-footer-text/30' : 'text-accent-mid/40',
      pos: 'bottom-20 right-16 sm:right-28',
      parallaxFactor: 22,
      animateY: shouldReduceMotion ? [0, 0] : [0, -16, 0],
      animateRotate: shouldReduceMotion ? [0, 0] : [0, -18, 0],
      duration: 7.5,
    },
    {
      id: 7,
      type: 'leaf',
      iconSize: 28,
      color: theme === 'dark' ? 'text-accent-mid/30' : 'text-accent/25',
      pos: 'top-12 right-24 sm:right-40',
      parallaxFactor: -15,
      animateY: shouldReduceMotion ? [0, 0] : [0, 18, 0],
      animateRotate: shouldReduceMotion ? [0, 0] : [10, -10, 10],
      duration: 8.5,
    },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {floaters.map((f) => {
        const pX = shouldReduceMotion ? 0 : mouseX * f.parallaxFactor
        const pY = shouldReduceMotion ? 0 : mouseY * f.parallaxFactor

        if (f.type === 'blob') {
          return (
            <motion.div
              key={f.id}
              className={`absolute rounded-full ${f.size} ${f.blur} ${f.color} ${f.pos}`}
              animate={{
                y: f.animateY,
                x: f.animateX,
              }}
              style={{
                translateX: pX,
                translateY: pY,
              }}
              transition={{
                duration: f.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
          )
        }

        if (f.type === 'droplet') {
          return (
            <motion.div
              key={f.id}
              className={`absolute ${f.color} ${f.pos}`}
              animate={{
                y: f.animateY,
                rotate: f.animateRotate,
              }}
              style={{
                translateX: pX,
                translateY: pY,
              }}
              transition={{
                duration: f.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <DropletIcon size={f.iconSize} />
            </motion.div>
          )
        }

        if (f.type === 'leaf') {
          return (
            <motion.div
              key={f.id}
              className={`absolute ${f.color} ${f.pos}`}
              animate={{
                y: f.animateY,
                rotate: f.animateRotate,
              }}
              style={{
                translateX: pX,
                translateY: pY,
              }}
              transition={{
                duration: f.duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <LeafIcon size={f.iconSize} />
            </motion.div>
          )
        }

        return null
      })}
    </div>
  )
}

