import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getRoomById } from '../../lib/db'
import { useState } from 'react'
import Link from 'next/link'

export default function RoomDetail() {
  const router = useRouter()
  const { id } = router.query
  const room = getRoomById(id as string)
  const [selectedImage, setSelectedImage] = useState(0)
  const [booking, setBooking] = useState({ checkIn: '', checkOut: '', guests: 1 })

  if (!room) {
    return (
      <div dir="rtl">
        <Header />
        <main className="pt-32 min-h-screen bg-cream flex items-center justify-center">
          <div className="text-center">
            <p className="text-luxury/50 font-arabic">الغرفة غير موجودة</p>
            <Link href="/rooms" className="text-gold font-arabic mt-4 inline-block">← العودة إلى الغرف</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const nights = booking.checkIn && booking.checkOut
    ? Math.max(1, (new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / (1000 * 60 * 60 * 24))
    : 0
  const total = nights * room.price

  const handleBook = () => {
    const params = new URLSearchParams({
      roomId: room.id,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      guests: String(booking.guests),
    })
    router.push(`/booking?${params}`)
  }

  return (
    <>
      <Head>
        <title>{room.nameAr} | ريتز كارلتون جدة</title>
        <meta name="description" content={room.descriptionAr} />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/rooms" className="text-gold hover:text-gold-dark font-arabic mb-8 inline-block">← العودة إلى الغرف</Link>
            <div className="grid md:grid-cols-2 gap-12 mt-4">
              <div>
                <div className="overflow-hidden mb-4">
                  <img src={room.images[selectedImage]} alt={room.nameAr} className="w-full object-cover" />
                </div>
                <div className="flex gap-2">
                  {room.images.map((img, i) => (
                    <button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-20 overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-gold' : 'border-transparent'}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="font-arabicSerif text-4xl text-dark mb-2">{room.nameAr}</h1>
                <p className="text-luxury/40 text-lg mb-4 english-text">{room.nameEn}</p>
                <p className="text-gold font-arabicSerif text-2xl mb-6">{room.price.toLocaleString()} ريال / الليلة</p>
                <p className="text-luxury/60 font-light leading-relaxed mb-8 font-arabic">{room.descriptionAr}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'المساحة', value: room.size },
                    { label: 'السعة', value: `${room.capacity} ضيوف` },
                    { label: 'الإطلالة', value: room.view },
                    { label: 'الأسرة', value: room.beds },
                  ].map((f) => (
                    <div key={f.label} className="p-4 bg-white">
                      <p className="text-luxury/40 text-xs font-arabic">{f.label}</p>
                      <p className="text-dark font-arabic mt-1">{f.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <h3 className="font-arabicSerif text-xl text-dark mb-4">المرافق والخدمات</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((a) => (
                      <span key={a} className="bg-gold/10 text-gold px-4 py-2 text-sm font-arabic">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 luxury-shadow">
                  <h3 className="font-arabicSerif text-xl text-dark mb-4">احجز هذه الغرفة</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">تاريخ الوصول</label>
                      <input type="date" value={booking.checkIn} onChange={(e) => setBooking({ ...booking, checkIn: e.target.value })} className="w-full border border-luxury/20 px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">تاريخ المغادرة</label>
                      <input type="date" value={booking.checkOut} onChange={(e) => setBooking({ ...booking, checkOut: e.target.value })} className="w-full border border-luxury/20 px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-luxury/60 mb-2 font-arabic">عدد الضيوف</label>
                    <select value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: Number(e.target.value) })} className="w-full border border-luxury/20 px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors">
                      {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'ضيف' : 'ضيوف'}</option>)}
                    </select>
                  </div>
                  {nights > 0 && (
                    <div className="p-4 bg-cream mb-4">
                      <p className="flex justify-between text-dark font-arabic"><span>السعر لـ {nights} ليلة</span><span>{room.price.toLocaleString()} ريال × {nights}</span></p>
                      <p className="flex justify-between text-gold font-arabicSerif text-xl mt-2"><span>المجموع</span><span>{total.toLocaleString()} ريال</span></p>
                    </div>
                  )}
                  <button onClick={handleBook} disabled={!booking.checkIn || !booking.checkOut} className="w-full bg-gold text-dark py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-arabic">
                    احجز الآن
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
