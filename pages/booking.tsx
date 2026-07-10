import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getAllRooms, getRoomById } from '../lib/db'

export default function BookingPage() {
  const router = useRouter()
  const rooms = getAllRooms()
  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    roomId: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    specialRequests: '',
  })

  useEffect(() => {
    if (router.query.roomId) {
      setForm(prev => ({ ...prev, roomId: router.query.roomId as string }))
    }
    if (router.query.checkIn) {
      setForm(prev => ({ ...prev, checkIn: router.query.checkIn as string }))
    }
    if (router.query.checkOut) {
      setForm(prev => ({ ...prev, checkOut: router.query.checkOut as string }))
    }
    if (router.query.guests) {
      setForm(prev => ({ ...prev, guests: Number(router.query.guests) }))
    }
  }, [router.query])

  const selectedRoom = getRoomById(form.roomId)
  const nights = form.checkIn && form.checkOut
    ? Math.max(1, (new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / (1000 * 60 * 60 * 24))
    : 0
  const total = selectedRoom ? nights * selectedRoom.price : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      const data = await res.json()
      router.push(`/booking/confirm/${data.id}`)
    }
  }

  return (
    <>
      <Head>
        <title>الحجز | ريتز كارلتون جدة</title>
        <meta name="description" content="احجز غرفتك في فندق ريتز كارلتون جدة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">حجز الغرفة</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
            </div>

            {/* Steps */}
            <div className="flex justify-center gap-4 mb-12">
              {['اختر الغرفة', 'معلومات الحجز', 'تأكيد'].map((label, i) => (
                <div key={label} className={`flex items-center gap-2 ${step === i + 1 ? 'text-gold' : i < step ? 'text-green-500' : 'text-luxury/30'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border-2 ${
                    step === i + 1 ? 'border-gold bg-gold/10 text-gold' :
                    i < step ? 'border-green-500 bg-green-50 text-green-500' : 'border-luxury/20'
                  }`}>{i < step ? '✓' : i + 1}</div>
                  <span className="text-sm font-arabic">{label}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="font-arabicSerif text-2xl text-dark mb-6">اختر نوع الغرفة</h2>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {rooms.map((room) => (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setForm({ ...form, roomId: room.id })}
                        className={`text-right p-6 border-2 transition-all duration-300 bg-white ${
                          form.roomId === room.id ? 'border-gold luxury-shadow' : 'border-luxury/10 hover:border-gold/50'
                        }`}
                      >
                        <img src={room.image} alt={room.nameAr} className="w-full aspect-[4/3] object-cover mb-4" />
                        <h3 className="font-arabicSerif text-lg text-dark mb-1">{room.nameAr}</h3>
                        <p className="text-luxury/40 text-sm mb-2 english-text">{room.nameEn}</p>
                        <p className="text-luxury/60 text-sm mb-2 font-arabic">{room.size} · {room.capacity} ضيوف</p>
                        <p className="text-gold font-arabicSerif text-lg">{room.price.toLocaleString()} ريال / الليلة</p>
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-start">
                    <button type="button" onClick={() => setStep(2)} disabled={!form.roomId} className="bg-gold text-dark px-10 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-arabic">
                      التالي ←
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-arabicSerif text-2xl text-dark mb-6">معلومات الحجز</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">تاريخ الوصول</label>
                      <input type="date" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">تاريخ المغادرة</label>
                      <input type="date" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">عدد الضيوف</label>
                      <select value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white">
                        {[1,2,3,4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'ضيف' : 'ضيوف'}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">الاسم الكامل</label>
                      <input type="text" value={form.guestName} onChange={(e) => setForm({ ...form, guestName: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">البريد الإلكتروني</label>
                      <input type="email" value={form.guestEmail} onChange={(e) => setForm({ ...form, guestEmail: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white" required />
                    </div>
                    <div>
                      <label className="block text-sm text-luxury/60 mb-2 font-arabic">رقم الجوال</label>
                      <input type="tel" value={form.guestPhone} onChange={(e) => setForm({ ...form, guestPhone: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white" required />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm text-luxury/60 mb-2 font-arabic">طلبات خاصة (اختياري)</label>
                    <textarea rows={3} value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white resize-none"></textarea>
                  </div>
                  {nights > 0 && selectedRoom && (
                    <div className="bg-white p-6 luxury-shadow mb-8">
                      <h3 className="font-arabicSerif text-lg text-dark mb-4">ملخص الحجز</h3>
                      <div className="space-y-3">
                        <p className="flex justify-between text-luxury/70 font-arabic"><span>الغرفة</span><span>{selectedRoom.nameAr}</span></p>
                        <p className="flex justify-between text-luxury/70 font-arabic"><span>المدة</span><span>{nights} {nights === 1 ? 'ليلة' : 'ليالي'}</span></p>
                        <p className="flex justify-between text-luxury/70 font-arabic"><span>السعر لليلة</span><span>{selectedRoom.price.toLocaleString()} ريال</span></p>
                        <div className="border-t border-luxury/10 pt-3 mt-3">
                          <p className="flex justify-between text-gold font-arabicSerif text-xl"><span>المجموع الكلي</span><span>{total.toLocaleString()} ريال</span></p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="border border-luxury/20 text-luxury/60 px-8 py-4 text-sm font-arabic hover:border-luxury/50 transition-colors">→ السابق</button>
                    <button type="button" onClick={() => setStep(3)} disabled={!form.checkIn || !form.checkOut || !form.guestName || !form.guestEmail || !form.guestPhone} className="bg-gold text-dark px-10 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-arabic">
                      التالي ←
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-arabicSerif text-2xl text-dark mb-6">تأكيد الحجز</h2>
                  <div className="bg-white p-8 luxury-shadow mb-8">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { label: 'الغرفة', value: selectedRoom?.nameAr },
                          { label: 'تاريخ الوصول', value: form.checkIn },
                          { label: 'تاريخ المغادرة', value: form.checkOut },
                          { label: 'عدد الضيوف', value: `${form.guests} ضيوف` },
                          { label: 'الاسم', value: form.guestName },
                          { label: 'البريد الإلكتروني', value: form.guestEmail },
                          { label: 'الجوال', value: form.guestPhone },
                        ].map((f) => (
                          <div key={f.label}>
                            <p className="text-luxury/40 text-xs font-arabic">{f.label}</p>
                            <p className="text-dark font-arabic">{f.value}</p>
                          </div>
                        ))}
                      </div>
                      {form.specialRequests && (
                        <div>
                          <p className="text-luxury/40 text-xs font-arabic">طلبات خاصة</p>
                          <p className="text-dark font-arabic">{form.specialRequests}</p>
                        </div>
                      )}
                      <div className="border-t border-luxury/10 pt-4">
                        <p className="flex justify-between text-gold font-arabicSerif text-2xl"><span>المجموع الكلي</span><span>{total.toLocaleString()} ريال</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(2)} className="border border-luxury/20 text-luxury/60 px-8 py-4 text-sm font-arabic hover:border-luxury/50 transition-colors">→ السابق</button>
                    <button type="submit" className="bg-gold text-dark px-10 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 font-arabic">
                      تأكيد الحجز
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
