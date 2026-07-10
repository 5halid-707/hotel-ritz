import { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  type?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale' | 'slide-section' | 'stagger'
  as?: 'div' | 'section' | 'article'
}

export default function Reveal({ children, className = '', type = 'fade-up', as: Tag = 'div' }: RevealProps) {
  const { ref, isVisible } = useReveal()

  const typeClass =
    type === 'fade-up' ? 'reveal' :
    type === 'fade-left' ? 'reveal-left' :
    type === 'fade-right' ? 'reveal-right' :
    type === 'fade-scale' ? 'reveal-scale' :
    type === 'slide-section' ? 'slide-section' :
    type === 'stagger' ? 'stagger' : 'reveal'

  return (
    <Tag ref={ref} className={`${typeClass}${isVisible ? ' visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}