/**
 * Decorative corner accents for premium feel
 */
export default function DecorativeCorner({ position = 'all', size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const sizeClass = sizes[size] || sizes.md

  const showTopLeft = position === 'all' || position === 'top-left'
  const showTopRight = position === 'all' || position === 'top-right'
  const showBottomLeft = position === 'all' || position === 'bottom-left'
  const showBottomRight = position === 'all' || position === 'bottom-right'

  return (
    <>
      {showTopLeft && (
        <div className={`absolute top-0 left-0 ${sizeClass} border-t-2 border-l-2 border-accent/30 rounded-tl-lg ${className}`} />
      )}
      {showTopRight && (
        <div className={`absolute top-0 right-0 ${sizeClass} border-t-2 border-r-2 border-accent/30 rounded-tr-lg ${className}`} />
      )}
      {showBottomLeft && (
        <div className={`absolute bottom-0 left-0 ${sizeClass} border-b-2 border-l-2 border-accent/30 rounded-bl-lg ${className}`} />
      )}
      {showBottomRight && (
        <div className={`absolute bottom-0 right-0 ${sizeClass} border-b-2 border-r-2 border-accent/30 rounded-br-lg ${className}`} />
      )}
    </>
  )
}
