'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-16 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            About Jay Ambey Medical Store
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-emerald-50">
            A trusted neighborhood medical store in Manpur Narayanpur, Linepar, Moradabad for genuine medicines and everyday healthcare support.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4">
                Jay Ambey Medical Store was built around a simple promise: make essential healthcare products easier to access, easier to understand, and easier to trust.
              </p>
              <p className="text-gray-600 text-base md:text-lg mb-3 md:mb-4">
                Owner Jitendra Saini and the team support customers with prescription medicines, over-the-counter care, wellness products, health devices, and family essentials while keeping service personal and practical.
              </p>
              <p className="text-gray-600 text-base md:text-lg">
                Our team focuses on genuine products, clear communication, and quick help for urgent medicine needs.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-emerald-700 text-white p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Key Facts</h3>
              <ul className="space-y-3">
                {['Genuine medicines', 'Prescription support', 'Wellness and personal care range', 'Health device availability', 'Fast local assistance'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-12 md:mt-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="border-l-4 border-emerald-500 pl-4 md:pl-6">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-600">
                To provide genuine medicines, helpful guidance, and dependable healthcare essentials with service that feels clear and human.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="border-l-4 border-emerald-500 pl-4 md:pl-6">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-600">
                To be a trusted pharmacy partner for families who need medicines, wellness products, and everyday care without hassle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-emerald-50">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 md:mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { title: 'Genuine Products', description: 'Medicines and healthcare essentials sourced with quality in mind.' },
              { title: 'Helpful Team', description: 'Staff ready to assist with availability and product selection.' },
              { title: 'Quick Support', description: 'Fast response for urgent medicine and wellness needs.' },
              { title: 'Wide Range', description: 'Prescription care, OTC items, devices, baby care, and personal care.' },
              { title: 'Clear Guidance', description: 'Practical information for dosage labels, usage, and purchase decisions.' },
              { title: 'Local Trust', description: 'A neighborhood store focused on family healthcare convenience.' },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-emerald-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
