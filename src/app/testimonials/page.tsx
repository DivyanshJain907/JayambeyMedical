'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';
import { Testimonials } from '@/components/Testimonials';

export default function TestimonialsPage() {
  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-12 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Customer Testimonials
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-emerald-50">
            What customers say about Jay Ambey Medical Store.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 md:mb-12 text-center">More Customer Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { name: 'Rajesh Kumar', company: 'Customer', feedback: 'Quick medicine availability support and helpful staff.' },
              { name: 'Priya Singh', company: 'Parent', feedback: 'A dependable place for baby care products and regular medicines.' },
              { name: 'Amit Patel', company: 'Customer', feedback: 'Good range of wellness products with clear communication.' },
              { name: 'Suresh Sharma', company: 'Customer', feedback: 'Polite service and fast help when medicines are needed urgently.' },
            ].map((testimonial, index) => (
              <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">*</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.feedback}&quot;</p>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
