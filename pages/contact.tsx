import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <Head>
        <title>اتصل بنا | ريتز كارلتون جدة</title>
        <meta name="description" content="تواصل مع فندق ريتز كارلتون جدة. الهاتف، البريد الإلكتروني، العنوان." />
      </Head>
      <div dir="rtl">
        <Header />
        <main className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-wider mb-4 font-light font-arabic">تواصل معنا</p>
              <h1 className="font-arabicSerif text-5xl text-dark mb-4">اتصل بنا</h1>
              <div className="w-16 h-[2px] bg-gold mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="bg-white p-8 luxury-shadow">
                  <h2 className="font-arabicSerif text-2xl text-dark mb-6">معلومات الاتصال</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-gold font-arabic text-sm mb-1">العنوان</h3>
                      <p className="text-luxury/70 font-arabic">طريق الكورنيش، جدة 21432</p>
                      <p className="text-luxury/40 text-sm english-text">Al Corniche Road, Jeddah 21432</p>
                    </div>
                    <div>
                      <h3 className="text-gold font-arabic text-sm mb-1">الهاتف</h3>
                      <p className="text-luxury/70 font-arabic" dir="ltr">+966 12 333 1234</p>
                    </div>
                    <div>
                      <h3 className="text-gold font-arabic text-sm mb-1">البريد الإلكتروني</h3>
                      <p className="text-luxury/70" dir="ltr">info@ritzcarlton-jeddah.com</p>
                    </div>
                    <div>
                      <h3 className="text-gold font-arabic text-sm mb-1">ساعات العمل</h3>
                      <p className="text-luxury/70 font-arabic">على مدار 24 ساعة، طوال أيام الأسبوع</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-arabicSerif text-2xl text-dark mb-6">أرسل لنا رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="الاسم" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white font-arabic" required />
                    <input type="email" placeholder="البريد الإلكتروني" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white font-arabic" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="tel" placeholder="رقم الجوال" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white font-arabic" />
                    <input type="text" placeholder="الموضوع" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white font-arabic" required />
                  </div>
                  <textarea rows={5} placeholder="رسالتك" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-luxury/20 px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors bg-white resize-none font-arabic" required></textarea>
                  <button type="submit" className="bg-gold text-dark px-10 py-4 text-sm tracking-wider font-medium hover:bg-gold-dark transition-all duration-300 font-arabic">
                    {submitted ? '✓ تم الإرسال' : 'إرسال الرسالة'}
                  </button>
                </form>
                {submitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200">
                    <p className="text-green-700 text-sm font-arabic">✓ تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
