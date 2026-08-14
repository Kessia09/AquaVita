import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

export default function TeamCard({ name, role, image }) {
  return (
    <TiltCard maxTilt={12}>
      <motion.div
        className="group flex flex-col items-center text-center bg-white border border-border-light rounded-3xl px-4 py-6 shadow-card hover:border-accent/40 transition-all duration-300 cursor-default h-full"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.div
          className="relative w-20 h-20 rounded-full overflow-hidden bg-bg-card ring-4 ring-border-light group-hover:ring-accent/50 mb-4 transition-all duration-300 shadow-sm"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <img
            src={image}
            alt={`Photo of ${name}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </motion.div>
        <h3 className="font-heading font-bold text-sm text-primary-dark leading-snug mb-1">
          {name}
        </h3>
        <p className="font-body text-xs text-accent font-semibold leading-snug">{role}</p>
      </motion.div>
    </TiltCard>
  )
}


