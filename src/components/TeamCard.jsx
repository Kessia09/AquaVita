import { motion } from 'framer-motion'

export default function TeamCard({ name, role, image }) {
  return (
    <motion.div
      className="card-clean flex flex-col items-center text-center group cursor-default h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <motion.div
        className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 mb-4 shadow-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
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
      <h3 className="heading-serif font-bold text-base text-primary-dark mb-1">
        {name}
      </h3>
      <p className="font-body text-sm text-gray-600">{role}</p>
    </motion.div>
  )
}


