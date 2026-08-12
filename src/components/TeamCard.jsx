import { motion } from 'framer-motion'

export default function TeamCard({ name, role, image }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-white border border-border-light rounded-3xl px-4 py-6 shadow-card cursor-default"
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(27,90,66,0.13)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <motion.div
        className="w-20 h-20 rounded-full overflow-hidden bg-bg-card border-2 border-border mb-4"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.25 }}
      >
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </motion.div>
      <h3 className="font-heading font-bold text-sm text-primary-dark leading-snug mb-1">
        {name}
      </h3>
      <p className="font-body text-xs text-accent-mid font-medium">{role}</p>
    </motion.div>
  )
}
