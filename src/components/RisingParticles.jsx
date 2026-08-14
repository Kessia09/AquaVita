import { motion, useReducedMotion } from 'framer-motion'

export default function RisingParticles({ count = 14 }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 12) + 6, // 6px to 18px
    left: `${Math.floor(Math.random() * 92) + 4}%`,
    duration: Math.random() * 5 + 6, // 6s to 11s
    delay: Math.random() * 4,
    sway: Math.random() * 20 - 10, // -10px to 10px
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-mid/30 border border-white/20 backdrop-blur-xs"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '-20px',
          }}
          animate={{
            y: ['0px', '-550px'],
            x: [0, p.sway, 0],
            opacity: [0, 0.7, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
