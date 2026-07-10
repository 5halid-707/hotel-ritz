import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { rooms } from '../lib/data'
import Link from 'next/link'

export default function RoomsPage() {
  return (
    <>
      <Head>
        <title>الغرف والأجنحة | ريتز كارلتون جدة</title>
        <meta name="description" content="غرف وأجنحة فاخرة في فندق ريتز كارلتون جدة. اختر من غرف ديلوكس، أجنحة كلوب، والأجنحة الملكية." />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">أماكن الإقامة</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">الغرف والأجنحة</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-luxury/60 font-light max-w-2xl mx-auto font-arabic">اختر من بين غرفنا وأجنحتنا الفاخرة لتجربة إقامة لا تُنسى</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room) => (
                <Link key={room.id} href={`/rooms/${room.id}`} className="group hover-lift bg-white">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={room.image} alt={room.nameAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-arabicSerif text-2xl text-dark mb-2">{room.nameAr}</h3>
                    <p className="text-luxury/40 text-sm mb-3 english-text">{room.nameEn}</p>
                    <p className="text-luxury/60 text-sm font-light mb-4 font-arabic">{room.descriptionAr}</p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-xs text-luxury/50 border border-luxury/10 px-3 py-1 font-arabic">{room.size}</span>
                      <span className="text-xs text-luxury/50 border border-luxury/10 px-3 py-1 font-arabic">{room.capacity} ضيوف</span>
                      <span className="text-xs text-luxury/50 border border-luxury/10 px-3 py-1 font-arabic">{room.view}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-luxury/5">
                      <span className="text-gold font-arabicSerif text-xl">{room.price.toLocaleString()} ريال / الليلة</span>
                      <span className="text-gold text-sm font-arabic hover:text-gold-dark transition-colors">احجز الآن ←</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
