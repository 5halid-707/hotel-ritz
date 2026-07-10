import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import Link from 'next/link'

export default function EventsPage() {
  const venues = [
    { name: 'قاعة الاحتفالات الكبرى', capacity: '500 ضيف', size: '500 م²', desc: 'قاعة فخمة مع إطلالة على البحر الأحمر، مثالية للمؤتمرات وحفلات الزفاف.' },
    { name: 'قاعة الاجتماعات', capacity: '50 ضيف', size: '100 م²', desc: 'مساحة متعددة الاستخدامات مجهزة بأحدث التقنيات للاجتماعات والعروض التقديمية.' },
    { name: 'صالة كراميل', capacity: '80 ضيف', size: '150 م²', desc: 'صالة أنيقة مناسبة للاستقبالات والحفلات الصغيرة.' },
    { name: 'الحديقة الخارجية', capacity: '200 ضيف', size: '300 م²', desc: 'مساحة خارجية خلابة على البحر لإقامة المناسبات في الهواء الطلق.' },
  ]

  return (
    <>
      <Head>
        <title>الاجتماعات والفعاليات | ريتز كارلتون جدة</title>
        <meta name="description" content="الاجتماعات والفعاليات وحفلات الزفاف في فندق ريتز كارلتون جدة" />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">فعاليات لا تُنسى</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">الاجتماعات والفعاليات</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
              <p className="text-luxury/60 font-light max-w-2xl mx-auto font-arabic">استضف اجتماعاتك ومناسبتك في أحد أرقى العناوين في جدة على البحر الأحمر</p>
            </div>

            <Reveal type="slide-section" className="grid md:grid-cols-2 gap-12 mb-16">
              <Reveal type="fade-left">
                <img src="https://cache.marriott.com/is/image/marriotts7prod/rz-jedrj-ballroom-1-42126:Feature-Hor?wid=700&fit=constrain" alt="قاعة الاحتفالات" className="w-full object-cover aspect-[4/3]" />
              </Reveal>
              <Reveal type="fade-right">
                <div className="flex flex-col justify-center">
                  <h2 className="font-arabicSerif text-3xl text-dark mb-6">مساحات اجتماعات استثنائية</h2>
                  <p className="text-luxury/60 font-light leading-relaxed font-arabic">
                    يمكنك استضافة الاجتماعات والمؤتمرات والاحتفالات الاستثنائية في أحد أرقى العناوين في جدة. يتميز الفندق بقاعات احتفالات أنيقة ومساحات اجتماعات متعددة الاستخدامات وأكبر مرافق المؤتمرات في المدينة، حيث يقدم خدمة سلسة وتجارب راقية مصممة خصيصاً لكل مناسبة.
                  </p>
                </div>
              </Reveal>
            </Reveal>

            <Reveal type="stagger" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {venues.map((venue) => (
                <div key={venue.name} className="bg-white p-6 luxury-shadow">
                  <h3 className="font-arabicSerif text-xl text-dark mb-3">{venue.name}</h3>
                  <div className="flex gap-4 mb-3 text-sm">
                    <span className="text-luxury/50 font-arabic">{venue.capacity}</span>
                    <span className="text-luxury/30">|</span>
                    <span className="text-luxury/50 font-arabic">{venue.size}</span>
                  </div>
                  <p className="text-luxury/60 text-sm font-light font-arabic">{venue.desc}</p>
                </div>
              ))}
            </Reveal>

            <Reveal type="slide-section" className="bg-white p-8 luxury-shadow mb-16">
              <h2 className="font-arabicSerif text-2xl text-dark mb-6">حفلات الزفاف</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-luxury/60 font-light leading-relaxed font-arabic">
                    احتفل بيومك الخاص في أجواء محيطة فخمة تطل على البحر الأحمر. من حفلات الاستقبال الكبرى إلى مراسم الحفلات الصغيرة، يوفر الفندق حفلات زفاف لا تُنسى مع خدمات تقديم الطعام الرائعة والخدمة المخصصة حسب الطلب وطابع الأناقة الخالدة.
                  </p>
                </div>
                <div className="bg-dark p-6">
                  <h3 className="text-gold font-arabicSerif text-lg mb-4">عرض الزفاف الصيفي</h3>
                  <p className="text-cream/60 text-sm font-light mb-4 font-arabic">خصم يصل إلى 15% على احتفالك أو إقامة مجانية في أحد الفنادق الشقيقة المشاركة على البحر الأحمر.</p>
                  <p className="text-cream/40 text-xs font-light font-arabic">تُطبق الشروط والأحكام</p>
                </div>
              </div>
            </Reveal>

            <Reveal type="slide-section" className="bg-white p-8 luxury-shadow mb-16">
              <h2 className="font-arabicSerif text-2xl text-dark mb-6">خدمات تقديم الطعام خارج الفندق</h2>
              <p className="text-luxury/60 font-light leading-relaxed mb-6 font-arabic">
                انقل كرم الضيافة الشهير وفنون الطهي الاستثنائية لريتز كارلتون جدة إلى وجهتك المفضلة. بدءاً من الاحتفالات الخاصة وفعاليات الشركات إلى اللقاءات الاجتماعية الكبرى.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['حفلات زفاف', 'فعاليات شركات', 'لقاءات اجتماعية', 'معارض'].map((s) => (
                  <div key={s} className="bg-cream p-4 text-center">
                    <p className="text-dark font-arabic">{s}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal type="fade-up" className="bg-dark p-12 text-center">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">خطط لفعاليتك القادمة</h2>
              <p className="text-cream/50 font-light mb-8 font-arabic">تواصل مع فريق التخطيط لدينا للبدء في تنظيم فعاليتك</p>
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
