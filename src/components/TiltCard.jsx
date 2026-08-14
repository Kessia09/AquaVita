import { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glare = true,
}) {
  const cardRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Calculate normalized -1 to 1 coords
    const pctX = (mouseX / width - 0.5) * 2
    const pctY = (mouseY / height - 0.5) * 2

    setRotateX(-pctY * maxTilt)
    setRotateY(pctX * maxTilt)
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.15,
    })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlarePos((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div className="perspective-1000 w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        className={`relative preserve-3d h-full ${className}`}
      >
        {children}

        {/* Glare overlay */}
        {glare && !shouldReduceMotion && (
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-20"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
