import { useState } from 'react'

interface LightboxProps {
  images: { src: string; altAr: string; altEn: string }[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 left-6 text-cream text-3xl hover:text-gold transition-colors z-10">✕</button>
      <button onClick={(e) => { e.stopPropagation(); onPrev() }} className="absolute right-6 top-1/2 -translate-y-1/2 text-cream text-4xl hover:text-gold transition-colors z-10">‹</button>
      <button onClick={(e) => { e.stopPropagation(); onNext() }} className="absolute left-6 top-1/2 -translate-y-1/2 text-cream text-4xl hover:text-gold transition-colors z-10">›</button>
      <div className="max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex].src} alt={images[currentIndex].altAr} className="w-full h-full object-contain" />
        <p className="text-cream text-center mt-4 font-arabic">{images[currentIndex].altAr}</p>
      </div>
    </div>
  )
}
