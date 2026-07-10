import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

interface BookingData {
  id: string
  roomNameAr: string
  roomNameEn: string
  guestName: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  status: string
  createdAt: string
}

export default function MyBookings() {
  const [email, setEmail] = useState('')
  const [bookings, setBookings] = useState<BookingData[]>([])
  const [searched, setSearched] = useState(false)
  const [loading, setLoading] = useState(false)

  const searchBookings = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSearched(true)
    const res = await fetch(`/api/bookings?email=${encodeURIComponent(email)}`)
    if (res.ok) {
      const data = await res.json()
      setBookings(data)
    }
    setLoading(false)
  }

  const cancelBooking = async (id: string) => {
    if (!confirm('هل أنت متأكد من إلغاء هذا الحجز؟')) return
    const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setBookings(bookings.map(b => b.id === id ? { ...b, status: 'cancelled' } : b))
    }
  }

  return (
    <>
      <Head>
        <title>حجوزاتي | ريتز كارلتون جدة</title>
        <meta name="description" content="عرض وإدارة حجوزاتك في فندق ريتز كارلتون جدة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">حجوزاتي</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
            </div>

            <div className="bg-white p-8 luxury-shadow mb-8">
              <h2 className="font-arabicSerif text-2xl text-dark mb-6">البحث عن حجوزاتي</h2>
              <form onSubmit={searchBookings}>
                <div className="flex gap-4">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="أدخل بريدك الإلكتروني" className="flex-1 border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors font-arabic" required />
                  <button type="submit" disabled={loading} className="bg-gold text-dark px-8 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 disabled:opacity-60 font-arabic whitespace-nowrap">
                    {loading ? '...جاري البحث' : 'بحث'}
                  </button>
                </div>
              </form>
            </div>

            {searched && (
              <div>
                {bookings.length === 0 ? (
                  <div className="bg-white p-8 luxury-shadow text-center">
                    <p className="text-luxury/50 font-arabic mb-4">لا توجد حجوزات بهذا البريد الإلكتروني</p>
                    <Link href="/booking" className="text-gold font-arabic">← احجز الآن</Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="bg-white p-6 luxury-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-arabicSerif text-xl text-dark">{booking.roomNameAr}</h3>
                            <p className="text-luxury/40 text-sm english-text">{booking.roomNameEn}</p>
                          </div>
                          <span className={`px-4 py-2 text-sm ${
                            booking.status === 'confirmed' ? 'bg-green-50 text-green-600' :
                            booking.status === 'cancelled' ? 'bg-red-50 text-red-500' : 'bg-orange-400/10 text-orange-400'
                          } font-arabic`}>
                            {booking.status === 'confirmed' ? 'مؤكد' : booking.status === 'cancelled' ? 'ملغي' : 'قيد الانتظار'}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-luxury/40 font-arabic">رقم الحجز</p>
                            <p className="text-dark font-arabic">{booking.id}</p>
                          </div>
                          <div>
                            <p className="text-luxury/40 font-arabic">تاريخ الوصول</p>
                            <p className="text-dark font-arabic">{booking.checkIn}</p>
                          </div>
                          <div>
                            <p className="text-luxury/40 font-arabic">تاريخ المغادرة</p>
                            <p className="text-dark font-arabic">{booking.checkOut}</p>
                          </div>
                          <div>
                            <p className="text-luxury/40 font-arabic">المجموع</p>
                            <p className="text-gold font-arabicSerif">{booking.totalPrice.toLocaleString()} ريال</p>
                          </div>
                        </div>
                        {booking.status === 'confirmed' && (
                          <div className="mt-4 pt-4 border-t border-luxury/5">
                            <button onClick={() => cancelBooking(booking.id)} className="text-red-500 hover:text-red-600 text-sm font-arabic transition-colors">إلغاء الحجز</button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
