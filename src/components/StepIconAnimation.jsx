import { motion, useReducedMotion } from 'framer-motion'
import { Droplets, Filter, Layers, Sprout, HeartHandshake } from 'lucide-react'

export default function StepIconAnimation({ stepNumber }) {
  const shouldReduceMotion = useReducedMotion()

  switch (stepNumber) {
    case '01': // Collection - Water Filling Animation
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
          {!shouldReduceMotion && (
            <motion.div
              animate={{ y: ['80%', '20%', '80%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 bottom-0 bg-accent/25 rounded-t-lg"
            />
          )}
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.12, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 text-accent"
          >
            <Droplets size={24} />
          </motion.div>
        </div>
      )

    case '02': // Pre-Filtration - Particle capture screen
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
          {!shouldReduceMotion && (
            <>
              <motion.div
                animate={{ y: [-12, 16], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                className="absolute w-2 h-2 rounded-full bg-accent/60 top-2"
              />
              <motion.div
                animate={{ y: [-12, 16], opacity: [0, 1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.6, ease: 'linear' }}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 top-2 left-4"
              />
            </>
          )}
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 text-accent"
          >
            <Filter size={24} />
          </motion.div>
        </div>
      )

    case '03': // Bio-Filtration - Multi-layer flow
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
          {!shouldReduceMotion && (
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/15 to-transparent"
            />
          )}
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 text-accent"
          >
            <Layers size={24} />
          </motion.div>
        </div>
      )

    case '04': // Irrigation - Water drip loop
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
          {!shouldReduceMotion && (
            <motion.div
              animate={{ y: [-10, 14], opacity: [0, 1, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeIn' }}
              className="absolute w-2 h-2 rounded-full bg-accent text-accent top-2"
            />
          )}
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 text-accent"
          >
            <Sprout size={24} />
          </motion.div>
        </div>
      )

    case '05': // Harvest - Bouncy harvest pop
      return (
        <div className="relative w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -6, 0],
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10 text-accent"
          >
            <HeartHandshake size={24} />
          </motion.div>
        </div>
      )

    default:
      return null
  }
}
