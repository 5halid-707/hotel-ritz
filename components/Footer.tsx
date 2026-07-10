import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-gold text-xl font-arabicSerif mb-4">ريتز كارلتون</h4>
            <p className="text-cream/50 font-light leading-relaxed mb-4 font-arabic">
              حيث تلتقي الضيافة العربية بالفخامة العالمية على شواطئ البحر الأحمر.
            </p>
            <p className="text-cream/40 text-sm font-light english-text">
              Where Arabian hospitality meets world-class luxury.
            </p>
          </div>
          <div>
            <h5 className="text-gold text-sm tracking-wider mb-6 font-medium font-arabic">روابط سريعة</h5>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', href: '/' },
                { label: 'الغرف والأجنحة', href: '/rooms' },
                { label: 'الحجز', href: '/booking' },
                { label: 'المطاعم', href: '/dining' },
                { label: 'العروض', href: '/offers' },
                { label: 'السبا', href: '/spa' },
                { label: 'الفعاليات', href: '/events' },
                { label: 'الوجهة', href: '/experiences' },
                { label: 'الألبوم', href: '/gallery' },
                { label: 'معلومات الفندق', href: '/hotel-info' },
                { label: 'اتصل بنا', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-cream/50 hover:text-gold text-sm font-light font-arabic transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-sm tracking-wider mb-6 font-medium font-arabic">خدماتنا</h5>
            <ul className="space-y-3">
              {['سبا', 'مركز اللياقة', 'المسبح', 'الشاطئ الخاص', 'خدمة الكونسيرج', 'مطعم ريحانة', 'صالة كراميل'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-cream/50 hover:text-gold text-sm font-light font-arabic transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold text-sm tracking-wider mb-6 font-medium font-arabic">اتصل بنا</h5>
            <div className="space-y-3 text-sm text-cream/50 font-light">
              <p className="font-arabic">طريق الكورنيش، جدة</p>
              <p dir="ltr">05750515019</p>
              <p className="english-text">grouthhacker@gmail.com</p>
            </div>
            <div className="mt-6">
              <h5 className="text-gold text-sm tracking-wider mb-4 font-medium font-arabic">النشرة البريدية</h5>
              <div className="flex border border-gold/30">
                <input type="email" placeholder="بريدك الإلكتروني" className="bg-transparent px-4 py-3 text-sm text-cream flex-1 focus:outline-none placeholder:text-cream/30 font-arabic" />
                <button className="bg-gold text-dark px-4 text-sm font-arabic font-medium hover:bg-gold-dark transition-colors whitespace-nowrap">اشتراك</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm font-light font-arabic">© 2026 فندق ريتز كارلتون جدة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="https://www.marriott.com/ar/about/privacy.mi" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold text-sm font-light font-arabic transition-colors">سياسة الخصوصية</a>
            <a href="https://www.marriott.com/ar/about/terms-of-use.mi" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold text-sm font-light font-arabic transition-colors">شروط الخدمة</a>
            <a href="#" className="text-cream/40 hover:text-gold text-sm font-light font-arabic transition-colors">إمكانية الوصول</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
