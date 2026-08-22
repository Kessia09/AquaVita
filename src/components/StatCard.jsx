import { useRef, useEffect, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import RevealOnScroll from './RevealOnScroll'

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
    const duration = 750

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
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
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="card-clean text-center h-full flex flex-col justify-center group"
      >
        <motion.p
          animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
          transition={{ duration: 0.5, delay: delay + 0.1, type: 'spring', bounce: 0.5 }}
          className="heading-serif-bold text-3xl sm:text-4xl text-primary-dark mb-2"
        >
          {formattedDisplay}
        </motion.p>
        <p className="font-body text-sm font-medium text-gray-600 leading-tight">
          {label}
        </p>
      </motion.div>
    </RevealOnScroll>
  )
}
