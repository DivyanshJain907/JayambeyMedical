'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Header1 } from '@/components/ui/header';

const galleryItems = [
  {
    title: 'Prescription Medicines',
    category: 'Medicines',
    image: '/gallery/med1.jpg',
  },
  {
    title: 'OTC & First Aid',
    category: 'Healthcare',
    image: '/gallery/med2.jpg',
  },
  {
    title: 'Wellness & Nutrition',
    category: 'Wellness',
    image: '/gallery/med3.jpg',
  },
  {
    title: 'Health Devices',
    category: 'Devices',
    image: '/gallery/med4.jpg',
  },
  {
    title: 'Baby & Mother Care',
    category: 'Family Care',
    image: '/gallery/med5.jpg',
  },
  {
    title: 'Personal Care Essentials',
    category: 'Daily Care',
    image: '/gallery/med6.jpg',
  },
  {
    title: 'Pharmacy Support',
    category: 'Service',
    image: '/gallery/med7.jpg',
  },
  {
    title: 'Home Healthcare',
    category: 'Essentials',
    image: '/gallery/med8.jpg',
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-12 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-emerald-50"
          >
            A quick look at our medicines, wellness products, health devices, and everyday care essentials.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={`${item.title} at Jay Ambey Medical Store`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">{item.category}</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-800">{item.title}</h2>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            Need a specific medicine or product?
          </h2>
          <p className="text-slate-700 mb-8 md:text-lg">
            Share the medicine name, prescription, or product requirement and our team will help confirm availability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote" className="rounded-lg bg-amber-400 px-8 py-3 font-bold text-slate-900 transition hover:bg-amber-500">
              Request Medicine
            </Link>
            <Link href="/contact" className="rounded-lg bg-slate-800 px-8 py-3 font-bold text-white transition hover:bg-emerald-700">
              Contact Store
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
