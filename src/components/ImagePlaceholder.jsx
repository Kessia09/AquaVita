import { ImageIcon } from 'lucide-react'

/**
 * Clearly-labeled placeholder block for real project photos.
 * Replace with <img> once real photos are available.
 */
export default function ImagePlaceholder({ label, className = '', aspectClass = 'aspect-video' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-bg-card border-2 border-dashed border-border text-primary-mid/50 ${aspectClass} ${className}`}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <ImageIcon size={28} strokeWidth={1.5} />
      <span className="font-body text-xs font-medium text-center px-3">{label}</span>
    </div>
  )
}
