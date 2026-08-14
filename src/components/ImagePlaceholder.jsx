import { useState } from 'react'
import { motion } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'

// Map of predefined label subjects to curated, high-definition public photo URLs
const photoMap = {
  // Hero
  'AquaVita bio-filtration system at Rwanda Coding Academy': {
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=80',
    alt: 'AquaVita vertical bio-filtration hydroponic system at Rwanda Coding Academy',
    fallback: 'https://picsum.photos/seed/aquavita-hero/1600/900',
  },
  // How it works steps
  'Collection tank and pipe inlet': {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Greywater collection tank and PVC pipe inlet plumbing',
    fallback: 'https://picsum.photos/seed/aquavita-step1/1200/900',
  },
  'Mesh screen pre-filter': {
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Stainless steel mesh screen pre-filter for capturing solids',
    fallback: 'https://picsum.photos/seed/aquavita-step2/1200/900',
  },
  'Cross-section of gravel, sand, and biochar layers': {
    src: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Multi-stage bio-filtration media with coarse gravel, sand, and biochar layers',
    fallback: 'https://picsum.photos/seed/aquavita-step3/1200/900',
  },
  'Grow bed drip irrigation': {
    src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gravity-fed drip irrigation supplying filtered greywater to raised grow beds',
    fallback: 'https://picsum.photos/seed/aquavita-step4/1200/900',
  },
  'Harvesting greens from grow beds': {
    src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Students harvesting fresh organic spinach and basil from grow beds',
    fallback: 'https://picsum.photos/seed/aquavita-step5/1200/900',
  },
  // Impact gallery photos
  'Bio-filter column close-up': {
    src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
    alt: 'Close-up of the bio-filter column system',
    fallback: 'https://picsum.photos/seed/aquavita-gallery1/1000/1000',
  },
  'Students checking water pH': {
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    alt: 'RCA students performing water quality and pH testing',
    fallback: 'https://picsum.photos/seed/aquavita-gallery2/1000/1000',
  },
  'Grow beds with lettuce': {
    src: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=1000&q=80',
    alt: 'Lush organic lettuce growing in raised beds',
    fallback: 'https://picsum.photos/seed/aquavita-gallery3/1000/1000',
  },
  'Harvesting day': {
    src: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=1000&q=80',
    alt: 'Fresh basil harvest ready for the school kitchen',
    fallback: 'https://picsum.photos/seed/aquavita-gallery4/1000/1000',
  },
  'Community workshop session': {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    alt: 'Community workshop with neighboring schools on sustainable greywater reuse',
    fallback: 'https://picsum.photos/seed/aquavita-gallery5/1000/1000',
  },
  'Team working on expansion': {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Student engineering team collaborating on system expansion',
    fallback: 'https://picsum.photos/seed/aquavita-gallery6/1000/1000',
  },
}

/**
 * High-quality photographic image component replacing generic grey boxes.
 * Includes smooth loading skeleton, hover zoom effect, and fallback handling.
 */
export default function ImagePlaceholder({
  label,
  src: customSrc,
  alt: customAlt,
  className = '',
  aspectClass = 'aspect-video',
  showCaption = true,
}) {
  const matched = photoMap[label] || {}
  const imageSrc = customSrc || matched.src || `https://picsum.photos/seed/${encodeURIComponent(label || 'aquavita')}/1200/800`
  const fallbackSrc = matched.fallback || `https://picsum.photos/seed/${encodeURIComponent(label || 'aquavita-fb')}/1200/800`
  const altText = customAlt || matched.alt || label || 'AquaVita project photo'

  const [currentSrc, setCurrentSrc] = useState(imageSrc)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  const handleImageError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    } else {
      setFailed(true)
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl bg-bg-card border border-border-light shadow-card transition-all duration-300 hover:shadow-card-hover ${aspectClass} ${className}`}
    >
      {/* Loading Skeleton */}
      {!loaded && !failed && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-bg-card via-bg-light to-bg-card" />
      )}

      {/* Image */}
      {!failed ? (
        <motion.img
          src={currentSrc}
          alt={altText}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={handleImageError}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-bg-card text-primary-mid/60">
          <ImageIcon size={28} strokeWidth={1.5} />
          <span className="px-3 text-center font-body text-xs font-medium">{label}</span>
        </div>
      )}

      {/* Subtle overlay gradient on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Optional Caption badge at bottom */}
      {showCaption && label && (
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="inline-block rounded-xl bg-primary-dark/85 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-sm">
            {label}
          </div>
        </div>
      )}
    </div>
  )
}

