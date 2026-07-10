import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { galleryImages } from '../lib/data'
import Lightbox from '../components/Lightbox'

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (i: number) => {
    setCurrentIndex(i)
    setLightboxOpen(true)
  }

  return (
    <>
      <Head>
        <title>الألبوم | ريتز كارلتون جدة</title>
        <meta name="description" content="معرض صور فندق ريتز كارلتون جدة - الغرف والأجنحة والمطاعم والمرافق" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">معرض الصور</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">ألبوم الفندق</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              <p className="text-luxury/60 font-light mt-6 font-arabic">تصفحوا معرض صور فندق ريتز كارلتون جدة</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <button key={i} onClick={() => openLightbox(i)} className="group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img.src} alt={img.altAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-luxury/60 text-sm mt-2 font-arabic">{img.altAr}</p>
                </button>
              ))}
            </div>
          </div>
        </main>
        <Footer />
        {lightboxOpen && (
          <Lightbox
            images={galleryImages}
            currentIndex={currentIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length)}
            onNext={() => setCurrentIndex((currentIndex + 1) % galleryImages.length)}
          />
        )}
      </div>
    </>
  )
}
