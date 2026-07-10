import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { faqs, hotelAmenities, hotelInfo, socialLinks } from '../lib/data'

export default function HotelInfoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>معلومات الفندق | ريتز كارلتون جدة</title>
        <meta name="description" content="معلومات فندق ريتز كارلتون جدة - تسجيل الوصول، السياسات، وسائل الراحة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">كل ما تريد معرفته</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">معلومات الفندق</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 luxury-shadow">
                <h2 className="font-arabicSerif text-xl text-dark mb-6">معلومات عامة</h2>
                <div className="space-y-4">
                  {[
                    { label: 'تسجيل الوصول', value: hotelInfo.checkIn },
                    { label: 'تسجيل المغادرة', value: hotelInfo.checkOut },
                    { label: 'الحد الأدنى للعمر', value: `${hotelInfo.minAge} عاماً` },
                    { label: 'مواقف السيارات', value: hotelInfo.parking },
                    { label: 'خدمة صف السيارات', value: hotelInfo.valet },
                    { label: 'اللغات', value: hotelInfo.languages },
                    { label: 'طرق الدفع', value: hotelInfo.payment },
                  ].map((info) => (
                    <div key={info.label} className="flex justify-between py-2 border-b border-luxury/5 last:border-0">
                      <span className="text-luxury/60 text-sm font-arabic">{info.label}</span>
                      <span className="text-dark text-sm font-arabic">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 luxury-shadow">
                <h2 className="font-arabicSerif text-xl text-dark mb-6">وسائل الراحة</h2>
                <div className="grid grid-cols-2 gap-2">
                  {hotelAmenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm">
                      <span className="text-gold">✓</span>
                      <span className="text-luxury/70 font-arabic">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 luxury-shadow mb-12">
              <h2 className="font-arabicSerif text-xl text-dark mb-6">سياسة الحيوانات الأليفة</h2>
              <p className="text-luxury/60 font-light font-arabic">{hotelInfo.petPolicy}</p>
            </div>

            <div className="bg-white p-6 luxury-shadow mb-12">
              <h2 className="font-arabicSerif text-xl text-dark mb-6">الأسئلة الشائعة</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-luxury/10">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-right px-6 py-4 flex justify-between items-center hover:bg-cream/50 transition-colors">
                      <span className="text-dark font-arabic">{faq.questionAr}</span>
                      <span className={`text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 py-4 border-t border-luxury/5 bg-cream/30">
                        <p className="text-luxury/60 font-light font-arabic">{faq.answerAr}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 luxury-shadow mb-12">
              <h2 className="font-arabicSerif text-xl text-dark mb-6">الموقع</h2>
              <div className="aspect-[21/9] bg-dark/5 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.5!2d39.1516916!3d21.5247892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzI5LjIiTiAzOcKwMDknMDYuMCJF!5e0!3m2!1sar!2ssa!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <p className="text-dark font-arabic">{hotelInfo.addressAr}</p>
                <p className="text-luxury/40 text-sm english-text">{hotelInfo.addressEn}</p>
                <p className="text-luxury/60 text-sm mt-2 font-arabic">المطار: {hotelInfo.airport} - {hotelInfo.airportDistance}</p>
                <p className="text-luxury/60 text-sm font-arabic">الهاتف: {hotelInfo.phone}</p>
              </div>
            </div>

            <div className="text-center bg-white p-6 luxury-shadow">
              <h2 className="font-arabicSerif text-xl text-dark mb-4">تابعنا</h2>
              <div className="flex justify-center gap-6">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-luxury/40 hover:text-gold text-2xl transition-colors">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
