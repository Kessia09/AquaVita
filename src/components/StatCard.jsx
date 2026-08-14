import { useRef, useEffect, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'
import TiltCard from './TiltCard'

function parseValueString(raw) {
  if (typeof raw !== 'string') return { prefix: '', number: null, suffix: '' }
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', number: null, suffix: raw }
  return {
    prefix: match[1],
    number: parseFloat(match[2].replace(/,/g, '')),
    suffix: match[3],
  }
}

export default function StatCard({ value, label, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const { prefix, number, suffix } = parseValueString(value)
  const [displayNum, setDisplayNum] = useState(number !== null ? 0 : null)

  useEffect(() => {
    if (!isInView || number === null) return

    let startTime = null
    const duration = 750 // Fast & snappy under 1s

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Overshoot spring easing
      const eased = Math.min(1.05 * Math.sin(progress * Math.PI * 0.5), 1)
      setDisplayNum(Math.floor(eased * number))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayNum(number)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, number])

  const formattedDisplay =
    number !== null
      ? `${prefix}${displayNum !== null ? displayNum : 0}${suffix}`
      : value

  return (
    <RevealOnScroll delay={delay}>
      <TiltCard maxTilt={10}>
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="group relative overflow-hidden bg-white/95 backdrop-blur-sm rounded-3xl px-5 py-6 text-center shadow-card border border-border-light hover:border-accent/50 transition-all duration-300 h-full flex flex-col justify-center"
        >
          <div className="pointer-events-none absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-accent/10 blur-xl group-hover:bg-accent/20 transition-all duration-300" />
          <motion.p
            animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
            transition={{ duration: 0.5, delay: delay + 0.1, type: 'spring', bounce: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl gradient-text leading-none mb-2 tracking-tight"
          >
            {formattedDisplay}
          </motion.p>
          <p className="font-body text-xs sm:text-sm font-bold text-primary-mid/85 leading-snug">
            {label}
          </p>
        </motion.div>
      </TiltCard>
    </RevealOnScroll>
  )
}


