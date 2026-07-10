import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'الغرف', href: '/rooms' },
    { label: 'الحجز', href: '/booking' },
    { label: 'المطاعم', href: '/dining' },
    { label: 'العروض', href: '/offers' },
    { label: 'السبا', href: '/spa' },
    { label: 'الفعاليات', href: '/events' },
    { label: 'الألبوم', href: '/gallery' },
    { label: 'اتصل بنا', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-gold text-xl md:text-2xl font-arabicSerif tracking-widest whitespace-nowrap">
          ريتز كارلتون
        </Link>
        <nav className="hidden lg:flex items-center gap-3 xl:gap-4 overflow-x-auto">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-cream/70 hover:text-gold text-xs xl:text-sm font-arabic font-light transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ))}
          <Link href="/my-bookings" className="border border-gold text-gold px-3 xl:px-4 py-1.5 text-xs xl:text-sm font-arabic hover:bg-gold hover:text-dark transition-all duration-300 whitespace-nowrap">
            حجوزاتي
          </Link>
        </nav>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-cream text-2xl">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-dark/95 backdrop-blur-md max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-cream/70 hover:text-gold text-sm font-arabic font-light transition-colors py-1">
                {item.label}
              </Link>
            ))}
            <Link href="/my-bookings" onClick={() => setMobileOpen(false)} className="border border-gold text-gold px-4 py-2 text-sm font-arabic hover:bg-gold hover:text-dark transition-all duration-300 inline-block text-center mt-2">
              حجوزاتي
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
