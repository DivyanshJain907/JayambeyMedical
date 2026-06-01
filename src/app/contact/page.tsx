'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-12 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-emerald-50">
            Reach Jay Ambey Medical Store for medicine availability, wellness products, and store support.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about medicines, health devices, or wellness essentials? Contact our team and we will help you quickly.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Address', text: 'Manpur Narayanpur, Linepar, Moradabad, Uttar Pradesh 244001' },
                { icon: '☎', title: 'Phone', text: '+91 9368555196' },
                { icon: '✚', title: 'Owner', text: 'Jitadra Saini' },
                { icon: '⏰', title: 'Business Hours', text: 'Monday - Saturday: 9:00 AM - 9:00 PM\nSunday: Limited hours' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Location</h2>
            <p className="text-gray-600">Visit our medical store or contact us for product availability.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Manpur%20Narayanpur%20Linepar%20Moradabad%20Uttar%20Pradesh%20244001&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
