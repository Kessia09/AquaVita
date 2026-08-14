import { motion } from 'framer-motion'

/**
 * Wraps children with a scroll-triggered fade + rise/scale animation.
 * delay: stagger delay in seconds (default 0)
 * direction: 'up' | 'down' | 'scale'
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
      scale: direction === 'scale' ? 0.94 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

