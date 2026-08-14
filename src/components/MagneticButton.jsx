import { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function MagneticButton({
  children,
  className = '',
  onClick,
  pulse = false,
  strength = 0.3,
}) {
  const buttonRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = (e.clientX - centerX) * strength
    const distanceY = (e.clientY - centerY) * strength

    setPosition({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      className={`inline-block ${pulse ? 'shadow-pulse' : ''} ${className}`}
    >
      {typeof children === 'function' ? children({ onClick }) : children}
    </motion.div>
  )
}
