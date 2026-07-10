import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { services } from '../lib/data'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>الخدمات | ريتز كارلتون جدة</title>
        <meta name="description" content="خدمات فندق ريتز كارلتون جدة - سبا، مطاعم، حمام سباحة، شاطئ خاص، مركز لياقة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">تجارب فريدة</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">خدماتنا</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              <p className="text-luxury/60 font-light mt-6 font-arabic">استمتع بأفضل الخدمات والمرافق في فندق ريتز كارلتون جدة</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white hover-lift">
                  <div className="overflow-hidden aspect-[16/9]">
                    <img src={service.image} alt={service.nameAr} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <div className="text-3xl text-gold mb-3">{service.icon}</div>
                    <h3 className="font-arabicSerif text-xl text-dark mb-1">{service.nameAr}</h3>
                    <p className="text-luxury/40 text-sm mb-3 english-text">{service.nameEn}</p>
                    <p className="text-luxury/60 font-light mb-4 font-arabic">{service.descriptionAr}</p>
                    <p className="text-gold font-arabicSerif text-sm">{service.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16 bg-dark p-12">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">احجز تجربتك الآن</h2>
              <p className="text-cream/50 font-light mb-8 font-arabic">تواصل معنا لحجز أي من خدماتنا الفاخرة</p>
              <Link href="/contact" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">اتصل بنا</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
