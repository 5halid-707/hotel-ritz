import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { attractions, hotelInfo } from '../lib/data'
import Link from 'next/link'

export default function ExperiencesPage() {
  return (
    <>
      <Head>
        <title>الوجهة والأنشطة | ريتز كارلتون جدة</title>
        <meta name="description" content="استكشف وجهة جدة والأنشطة القريبة من فندق ريتز كارلتون جدة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">اكتشف جدة</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">الوجهة والأنشطة</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-luxury/60 font-light max-w-2xl mx-auto font-arabic">اكتشف أفضل ما تقدمه وجهتنا - من سحر البلد التاريخي إلى المعالم العصرية</p>
            </div>

            <Reveal type="slide-section" className="grid md:grid-cols-2 gap-12 mb-16">
              <Reveal type="fade-left">
                <div className="flex flex-col justify-center">
                  <h2 className="font-arabicSerif text-3xl text-dark mb-6">الرفاهية على طول البحر الأحمر</h2>
                  <p className="text-luxury/60 font-light leading-relaxed font-arabic">
                    يطل فندق ريتز كارلتون جدة على البحر الأحمر، ويجمع بين الأناقة الفخمة وإمكانية الوصول إلى التجارب الأكثر شهرة في المدينة، من سحر "البلد" التاريخي إلى عالم تيم لاب بوردليس جدة الغامر. ينعم النزلاء بأجواء الراحة في الغرف والأجنحة الفسيحة المطلة على البحر.
                  </p>
                </div>
              </Reveal>
              <Reveal type="fade-right">
                <img src="https://cache.marriott.com/is/image/marriotts7prod/50500489-jedrj_2018_0172:Classic-Hor?wid=700&fit=constrain" alt="إطلالة على البحر" className="w-full object-cover aspect-[4/3]" />
              </Reveal>
            </Reveal>

            <Reveal type="slide-section" className="mb-16">
              <h2 className="font-arabicSerif text-3xl text-dark mb-8 text-center">ماذا يوجد بالقرب من هنا؟</h2>
              <Reveal type="stagger" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {attractions.map((a) => (
                  <div key={a.nameAr} className="bg-white hover-lift">
                    <div className="overflow-hidden aspect-[4/3]">
                      <img src={a.image} alt={a.nameAr} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-arabicSerif text-lg text-dark mb-1">{a.nameAr}</h3>
                      <p className="text-luxury/40 text-sm english-text mb-2">{a.nameEn}</p>
                      <p className="text-luxury/60 text-sm font-light font-arabic">{a.descriptionAr}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </Reveal>

            <Reveal type="fade-up" className="bg-dark p-12 text-center">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">دع فريقنا يخطط لرحلتك</h2>
              <p className="text-cream/50 font-light mb-8 font-arabic">فريق الكونسيرج لدينا جاهز لمساعدتك في تنظيم جميع أنشطتك</p>
              <Link href="/contact" className="inline-block border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">
                تواصل مع فريق الكونسيرج
              </Link>
            </Reveal>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
