import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
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
  specialRequests?: string
}

export default function BookingConfirm() {
  const router = useRouter()
  const { id } = router.query
  const [booking, setBooking] = useState<BookingData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`/api/bookings/${id}`)
        .then(res => res.json())
        .then(data => { setBooking(data); setLoading(false) })
        .catch(() => setLoading(false))
    }
  }, [id])

  return (
    <>
      <Head>
        <title>تأكيد الحجز | ريتز كارلتون جدة</title>
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-2xl mx-auto px-6">
            {loading ? (
              <div className="text-center py-20">
                <div className="animate-spin text-4xl text-gold mb-4">◈</div>
                <p className="text-luxury/50 font-arabic">جاري تحميل معلومات الحجز...</p>
              </div>
            ) : booking ? (
              <div className="text-center fade-in">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h1 className="font-arabicSerif text-4xl text-dark mb-2">تم تأكيد الحجز!</h1>
                <p className="text-luxury/60 font-light mb-8 font-arabic">شكراً لك {booking.guestName}. تم حجز غرفتك بنجاح.</p>
                <div className="bg-white p-8 luxury-shadow text-right mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-luxury/5">
                      <span className="text-gold font-arabicSerif text-lg">{booking.id}</span>
                      <span className="text-luxury/40 text-xs font-arabic">رقم الحجز</span>
                    </div>
                    {[
                      { label: 'الغرفة', value: booking.roomNameAr },
                      { label: 'تاريخ الوصول', value: booking.checkIn },
                      { label: 'تاريخ المغادرة', value: booking.checkOut },
                      { label: 'عدد الضيوف', value: `${booking.guests} ضيوف` },
                      { label: 'الحالة', value: 'مؤكد' },
                    ].map((f) => (
                      <div key={f.label} className="flex justify-between">
                        <span className="text-dark font-arabic">{f.value}</span>
                        <span className="text-luxury/40 text-sm font-arabic">{f.label}</span>
                      </div>
                    ))}
                    {booking.specialRequests && (
                      <div className="flex justify-between">
                        <span className="text-dark font-arabic">{booking.specialRequests}</span>
                        <span className="text-luxury/40 text-sm font-arabic">طلبات خاصة</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-4 border-t border-luxury/5">
                      <span className="text-gold font-arabicSerif text-2xl">{booking.totalPrice.toLocaleString()} ريال</span>
                      <span className="text-luxury/40 text-sm font-arabic">المجموع الكلي</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Link href="/" className="border border-gold text-gold px-8 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">العودة للرئيسية</Link>
                  <Link href="/my-bookings" className="bg-gold text-dark px-8 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 font-arabic">عرض حجوزاتي</Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-luxury/50 font-arabic mb-4">عذراً، لم يتم العثور على الحجز</p>
                <Link href="/booking" className="text-gold font-arabic">← العودة إلى الحجز</Link>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
