import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { diningItems } from '../lib/data'

export default function DiningPage() {
  return (
    <>
      <Head>
        <title>المطاعم | ريتز كارلتون جدة</title>
        <meta name="description" content="مطاعم فندق ريتز كارلتون جدة - ريحانة، صالة كراميل، سوق المأكولات البحرية، تناول الطعام في الغرفة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">تذوق أفضل المأكولات</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">المطاعم وتجارب الطعام</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-luxury/60 font-light max-w-2xl mx-auto font-arabic">اكتشفوا تشكيلة رائعة من تجارب الطعام الفاخرة في فندق ريتز كارلتون جدة</p>
            </div>

            <div className="space-y-12">
              {diningItems.map((item, i) => (
                <div key={item.id} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:dir-ltr' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img src={item.image} alt={item.nameAr} className="w-full object-cover aspect-[4/3]" />
                  </div>
                  <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <span className="text-gold text-xs tracking-wider border border-gold/30 px-3 py-1 font-arabic">{item.type}</span>
                    <h2 className="font-arabicSerif text-3xl text-dark mt-4 mb-2">{item.nameAr}</h2>
                    <p className="text-luxury/40 text-sm mb-4 english-text">{item.nameEn}</p>
                    <p className="text-luxury/60 font-light leading-relaxed mb-6 font-arabic">{item.descriptionAr}</p>
                    <div className="flex flex-wrap gap-6 text-sm">
                      <div>
                        <p className="text-luxury/40 font-arabic">ساعات العمل</p>
                        <p className="text-dark font-arabic">{item.hours}</p>
                      </div>
                      <div>
                        <p className="text-luxury/40 font-arabic">الأسعار</p>
                        <p className="text-gold font-arabic">{item.pricing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-dark p-12 text-center">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">احجز طاولتك الآن</h2>
              <p className="text-cream/50 font-light mb-8 font-arabic">للاستفسار والحجز، تواصل مع فريق الضيافة لدينا</p>
              <a href="tel:+966122314444" className="inline-block border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">
                اتصل الآن: +966 12-2314444
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
