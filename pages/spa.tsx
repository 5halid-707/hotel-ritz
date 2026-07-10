import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import Link from 'next/link'

export default function SpaPage() {
  const treatments = [
    { name: 'تدليك سويدي', duration: '60 دقيقة', price: '500 ريال' },
    { name: 'تدليك بالزيوت العطرية', duration: '90 دقيقة', price: '750 ريال' },
    { name: 'علاج للوجه', duration: '60 دقيقة', price: '600 ريال' },
    { name: 'علاج الجسم كاملاً', duration: '120 دقيقة', price: '1,200 ريال' },
    { name: 'جلسة ساونا وبخار', duration: '30 دقيقة', price: '200 ريال' },
  ]

  return (
    <>
      <Head>
        <title>النادي الصحي | ريتز كارلتون جدة</title>
        <meta name="description" content="نادي ريتز كارلتون جدة الصحي - سبا فاخر للرجال مع ساونا وغرفة بخار وعلاجات" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">استرخِ وجدّد نشاطك</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">النادي الصحي</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-luxury/60 font-light max-w-2xl mx-auto font-arabic">مرفق سبا فاخر للرجال مع حوض استحمام وساونا وغرفة بخار وعلاجات فريدة ومجددة للنشاط</p>
            </div>

            <Reveal type="slide-section" className="grid md:grid-cols-2 gap-12 mb-16">
              <Reveal type="fade-left">
                <img src="/api/marriott/jedrj-jeddah-spa-50771598?wid=700&fit=constrain" alt="النادي الصحي" className="w-full object-cover" />
              </Reveal>
              <Reveal type="fade-right">
                <div className="flex flex-col justify-center">
                  <h2 className="font-arabicSerif text-3xl text-dark mb-6">سبا ريتز كارلتون</h2>
                  <p className="text-luxury/60 font-light leading-relaxed mb-6 font-arabic">
                    يضم الفندق ثلاث غرف علاجية في نادي صحي للرجال تقدم علاجات فريدة ومجددة للنشاط. استمتع بتجربة سبا لا تُنسى مع أحدث تقنيات العناية بالجسم والبشرة.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {['ساونا', 'غرفة بخار', 'حوض استحمام', 'غرف علاجية'].map((f) => (
                      <div key={f} className="bg-white p-4 text-center">
                        <p className="text-dark font-arabic">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </Reveal>

            <Reveal type="slide-section" className="bg-white p-8 luxury-shadow mb-16">
              <h2 className="font-arabicSerif text-2xl text-dark mb-6 text-center">قائمة العلاجات</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead>
                    <tr className="border-b border-luxury/10">
                      <th className="py-4 text-gold font-arabic">العلاج</th>
                      <th className="py-4 text-gold font-arabic">المدة</th>
                      <th className="py-4 text-gold font-arabic">السعر</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatments.map((t) => (
                      <tr key={t.name} className="border-b border-luxury/5 hover:bg-cream/50 transition-colors">
                        <td className="py-4 text-dark font-arabic">{t.name}</td>
                        <td className="py-4 text-luxury/60">{t.duration}</td>
                        <td className="py-4 text-gold font-arabicSerif">{t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal type="fade-up" className="text-center bg-dark p-12">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">احجز جلسة سبا</h2>
              <p className="text-cream/50 font-light mb-8 font-arabic">لحجز موعد أو للاستفسار، يرجى الاتصال بنا</p>
              <Link href="/contact" className="inline-block border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">
                تواصل معنا
              </Link>
            </Reveal>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
