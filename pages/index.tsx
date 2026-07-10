import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { rooms, services, testimonials, offers, faqs, attractions, hotelInfo } from '../lib/data'
import Link from 'next/link'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>ريتز كارلتون جدة | Ritz-Carlton Jeddah</title>
        <meta name="description" content="فندق ريتز كارلتون جدة - الفخامة العربية على شواطئ البحر الأحمر. غرف فاخرة، مطاعم راقية، سبا عالمي." />
      </Head>
      <div dir="rtl">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop')" }}>
              <div className="absolute inset-0 bg-gradient-to-l from-dark/70 via-dark/50 to-dark/80"></div>
            </div>
            <div className="relative z-10 text-center px-6 fade-in">
              <p className="text-gold text-sm tracking-wider mb-6 font-light font-arabic">مرحباً بكم في</p>
              <h1 className="font-arabicSerif text-5xl md:text-7xl lg:text-8xl text-cream mb-4 leading-tight">ريتز كارلتون</h1>
              <h2 className="font-arabicSerif text-3xl md:text-5xl text-gold/80 mb-4">جدة</h2>
              <p className="text-gold/60 text-lg md:text-xl font-light mb-4 english-text">The Ritz-Carlton — Jeddah</p>
              <p className="text-cream/50 text-lg max-w-2xl mx-auto mb-10 font-light font-arabic">حيث تلتقي الضيافة العربية بالفخامة العالمية على شواطئ البحر الأحمر</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/booking" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">احجز الآن</Link>
                <Link href="/rooms" className="border-2 border-cream/30 text-cream px-10 py-4 text-sm tracking-wider hover:border-cream transition-all duration-300 font-arabic">استعرض الغرف</Link>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">قصتنا</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">فخامة استثنائية</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-luxury/70 font-light leading-relaxed mb-6 font-arabic">
                    يقع فندق ريتز كارلتون على طول كورنيش جدة البكر، ويقدم ملاذاً لا مثيل له من الأناقة العربية والخدمة العالمية. يمزج فندقنا بين العمارة السعودية التقليدية والفخامة المعاصرة.
                  </p>
                  <p className="text-luxury/50 font-light leading-relaxed font-arabic">
                    تم تصميم كل التفاصيل لتخلق تجربة تتجاوز المألوف، من منتجعنا الصحي الرائع إلى أماكن تناول الطعام الحائزة على جوائز.
                  </p>
                </div>
                <div className="relative">
                  <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=534&fit=crop" alt="ريتز كارلتون جدة" className="w-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {[
                  { number: '300+', label: 'غرفة فاخرة' },
                  { number: '15+', label: 'مطعم ومقهى' },
                  { number: '5★', label: 'التقييم' },
                  { number: '25+', label: 'سنوات من التميز' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-gold font-arabicSerif text-3xl md:text-4xl mb-2">{stat.number}</div>
                    <div className="text-luxury/60 text-sm tracking-wider font-light font-arabic">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Offers */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">عروض حصرية</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">العروض والباقات</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {offers.map((offer) => (
                  <div key={offer.id} className="relative group overflow-hidden luxury-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={offer.image} alt={offer.titleAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 flex flex-col justify-end p-6">
                      <span className="self-start text-xs tracking-wider text-gold border border-gold px-2 py-0.5 mb-2 font-arabic">{offer.badge}</span>
                      <h3 className="text-cream font-arabicSerif text-xl mb-1">{offer.titleAr}</h3>
                      <p className="text-cream/60 text-sm font-light font-arabic">{offer.descriptionAr.slice(0, 80)}...</p>
                    </div>
                    <Link href="/offers" className="absolute inset-0 z-10"><span className="sr-only">{offer.titleAr}</span></Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/offers" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">عرض جميع العروض</Link>
              </div>
            </div>
          </section>

          {/* Rooms */}
          <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">أماكن الإقامة</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">الغرف والأجنحة</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {rooms.map((room) => (
                  <Link key={room.id} href={`/rooms/${room.id}`} className="group hover-lift bg-white">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img src={room.image} alt={room.nameAr} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-arabicSerif text-xl text-dark mb-1">{room.nameAr}</h3>
                      <p className="text-luxury/40 text-sm mb-2 english-text">{room.nameEn}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold font-arabicSerif">{room.price.toLocaleString()} ريال / الليلة</span>
                        <span className="text-gold text-sm font-arabic">احجز الآن ←</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/rooms" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">عرض جميع الغرف</Link>
              </div>
            </div>
          </section>

          {/* Dining */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">تذوق أفضل المأكولات</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">تجارب الطعام</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'مطعم ريحانة', desc: 'مأكولات إقليمية طوال اليوم', img: 'https://images.pexels.com/photos/3493570/pexels-photo-3493570.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop' },
                  { name: 'صالة كراميل', desc: 'شاي بعد الظهيرة ومعجنات', img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop' },
                  { name: 'سوق المأكولات البحرية', desc: 'ليلة جمعة مع أطباق بحرية', img: 'https://images.pexels.com/photos/2405647/pexels-photo-2405647.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop' },
                  { name: 'تناول الطعام في الغرفة', desc: 'خدمة غرف على مدار الساعة', img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop' },
                ].map((d) => (
                  <Link key={d.name} href="/dining" className="group overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-3 bg-cream">
                      <h3 className="font-arabicSerif text-dark">{d.name}</h3>
                      <p className="text-luxury/50 text-sm font-light font-arabic">{d.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/dining" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">استكشف المطاعم</Link>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="py-12 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {['مطعم', 'سبا', 'مركز لياقة', 'مسبح', 'شاطئ خاص', 'خدمة غرف 24 ساعة', 'واي فاي مجاني', 'مواقف مجانية', 'مركز أعمال', 'كونسيرج'].map((a) => (
                  <div key={a} className="text-cream/60 hover:text-gold transition-colors font-arabic">✦ {a}</div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">تجارب فريدة</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-cream mb-4">خدمات الفندق</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link key={service.id} href={service.id === 'spa' ? '/spa' : service.id === 'dining' ? '/dining' : '/services'} className="text-center p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    <div className="text-3xl mb-3 text-gold">{service.icon}</div>
                    <h3 className="text-cream font-arabicSerif text-lg mb-1">{service.nameAr}</h3>
                    <p className="text-cream/50 text-xs mb-1 english-text">{service.nameEn}</p>
                    <p className="text-cream/40 text-sm font-light leading-relaxed font-arabic">{service.descriptionAr}</p>
                    <p className="text-gold text-xs mt-2 font-arabic">{service.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">آراء النزلاء</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">ماذا يقولون عنا</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-white p-5 luxury-shadow">
                    <div className="text-gold mb-2">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                    <p className="text-luxury/60 font-light leading-relaxed mb-3 font-arabic">"{t.text}"</p>
                    <p className="text-dark font-arabic font-medium">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ritz Kids */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">عائلة ريتز كارلتون</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">ريتز كيدز</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'وجبات الأطفال بأسعار مخفضة', desc: 'يتناول الأطفال أقل من 6 سنوات الطعام مجاناً، والآطفال من 6-12 عاماً بخصم 50% في المطاعم المشاركة.' },
                  { title: 'مغامرات الطهي أيام السبت', desc: 'حصص طهي أسبوعية للأطفال كل يوم سبت. تشمل تحضير المعكرونة وإعداد البيتزا وتزيين الفطائر.' },
                  { title: 'لمسات خاصة لنزلائنا الصغار', desc: 'حقيبة ترحيبية من نادي ريتز كيدز ومستلزمات ممتعة داخل الغرفة وقوائم طعام مخصصة للأطفال.' },
                ].map((item) => (
                  <div key={item.title} className="bg-cream p-6 hover-lift">
                    <h3 className="font-arabicSerif text-xl text-dark mb-3">{item.title}</h3>
                    <p className="text-luxury/60 text-sm font-light font-arabic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-20 bg-cream">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">معرض الصور</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">لحظات من الفندق</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop',
                  'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop',
                  'https://images.pexels.com/photos/3493570/pexels-photo-3493570.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop',
                  'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400&h=267&fit=crop',
                ].map((src, i) => (
                  <Link key={i} href="/gallery" className="overflow-hidden group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/gallery" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">عرض الألبوم كاملاً</Link>
              </div>
            </div>
          </section>

          {/* Bonvoy */}
          <section className="py-16 bg-dark">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="font-arabicSerif text-3xl text-cream mb-4">Marriott Bonvoy</h2>
              <p className="text-cream/50 font-light max-w-2xl mx-auto mb-6 font-arabic">
                انضم إلى برنامج Marriott Bonvoy® واحصل على أفضل الأسعار في آلاف الفنادق الاستثنائية. سفر لا حدود لفوائده ويمنحك نقاطاً أيضاً.
              </p>
              <a href="https://www.joinmarriottbonvoy.com/emeaqr/s/EN/ch/JEDRJ" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">
                انضم إلى Marriott Bonvoy
              </a>
            </div>
          </section>

          {/* Nearby Attractions */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">اكتشف جدة</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">ماذا يوجد بالقرب من هنا؟</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {attractions.map((a) => (
                  <div key={a.nameAr} className="bg-cream hover-lift overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={a.image} alt={a.nameAr} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-arabicSerif text-dark">{a.nameAr}</h3>
                      <p className="text-luxury/50 text-xs english-text">{a.nameEn}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/experiences" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">استكشف الوجهة</Link>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="py-12 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-8">
                <h2 className="font-arabicSerif text-2xl text-cream mb-2">موقعنا</h2>
                <p className="text-cream/50 font-light font-arabic">{hotelInfo.addressAr}</p>
              </div>
              <div className="aspect-[21/7] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.5!2d39.1516916!3d21.5247892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMxJzI5LjIiTiAzOcKwMDknMDYuMCJF!5e0!3m2!1sar!2ssa!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '250px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-cream">
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">استفسارات</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-dark mb-4">الأسئلة الشائعة</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="space-y-2">
                {faqs.slice(0, 5).map((faq, i) => (
                  <div key={i} className="bg-white border border-luxury/10">
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
              <div className="text-center mt-8">
                <Link href="/hotel-info" className="border-2 border-gold text-gold px-10 py-4 text-sm tracking-wider hover:bg-gold hover:text-dark transition-all duration-300 font-arabic">مزيد من المعلومات</Link>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">تواصل معنا</p>
                <h2 className="font-arabicSerif text-4xl md:text-5xl text-cream mb-4">اتصل بنا</h2>
                <div className="w-16 h-[2px] bg-gold mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-gold font-arabic text-sm mb-1">العنوان</h4>
                    <p className="text-cream/60 font-light font-arabic">{hotelInfo.addressAr}</p>
                    <p className="text-cream/40 text-sm font-light english-text">Al Corniche Road, Jeddah</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-arabic text-sm mb-1">الهاتف</h4>
                    <p className="text-cream/60 font-light">{hotelInfo.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-arabic text-sm mb-1">البريد الإلكتروني</h4>
                    <p className="text-cream/60 font-light">{hotelInfo.email}</p>
                  </div>
                </div>
                <div>
                  <Link href="/contact" className="bg-gold text-dark px-10 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 font-arabic inline-block">
                    أرسل رسالة
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
