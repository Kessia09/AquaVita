import { motion } from 'framer-motion'

/**
 * Wraps children with a scroll-triggered fade + rise animation.
 * delay: stagger delay in seconds (default 0)
 */
export default function RevealOnScroll({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
