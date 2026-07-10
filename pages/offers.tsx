import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { offers } from '../lib/data'
import Link from 'next/link'

export default function OffersPage() {
  return (
    <>
      <Head>
        <title>العروض والباقات | ريتز كارلتون جدة</title>
        <meta name="description" content="عروض وباقات فندق ريتز كارلتون جدة - عروض صيفية، عائلية، زفاف، والمزيد" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">عروض حصرية</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">العروض والباقات</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-luxury/60 font-light max-w-2xl mx-auto font-arabic">استمتع بتجارب استثنائية مع عروضنا وباقاتنا المميزة</p>
            </div>

            <div className="space-y-8">
              {offers.map((offer) => (
                <div key={offer.id} className="grid md:grid-cols-2 gap-8 bg-white luxury-shadow overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={offer.image} alt={offer.titleAr} className="w-full h-full object-cover aspect-[4/3] md:aspect-auto" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="self-start text-xs tracking-wider text-gold border border-gold/30 px-3 py-1 font-arabic">{offer.badge}</span>
                    <h2 className="font-arabicSerif text-2xl text-dark mt-4 mb-2">{offer.titleAr}</h2>
                    <p className="text-luxury/40 text-sm mb-3 english-text">{offer.titleEn}</p>
                    <p className="text-luxury/60 font-light leading-relaxed mb-6 font-arabic">{offer.descriptionAr}</p>
                    <Link href="/contact" className="self-start border border-gold text-gold px-8 py-3 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">
                      احجز الآن
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 bg-dark p-12">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">تابع عروضنا الحصرية</h2>
              <p className="text-cream/50 font-light mb-8 font-arabic">اشترك في النشرة البريدية لتصلك أحدث العروض والتحديثات</p>
              <div className="max-w-md mx-auto flex border border-gold/30">
                <input type="email" placeholder="بريدك الإلكتروني" className="bg-transparent px-4 py-3 text-sm text-cream flex-1 focus:outline-none placeholder:text-cream/30 font-arabic" />
                <button className="bg-gold text-dark px-6 text-sm font-arabic font-medium hover:bg-gold-dark transition-colors whitespace-nowrap">اشتراك</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
