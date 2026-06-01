'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Timeline } from '@/components/Timeline';

const categoryImages = [
  {
    title: 'Prescription Medicines',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85',
    text: 'Genuine medicines sourced from trusted distributors.',
  },
  {
    title: 'Wellness & Nutrition',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=85',
    text: 'Supplements, immunity care, and daily health essentials.',
  },
  {
    title: 'Baby & Mother Care',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=900&q=85',
    text: 'Gentle, reliable products for families and new parents.',
  },
  {
    title: 'Health Devices',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85',
    text: 'Thermometers, BP monitors, glucometers, and more.',
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <Header1 />

      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-16"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15, 23, 42, 0.42), rgba(15, 118, 110, 0.45)), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-lg"
          >
            Jay Ambey Medical Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-white mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-semibold"
          >
            Your neighborhood medical store for genuine medicines, wellness essentials, health devices, and caring guidance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Link href="/quote">
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold transition transform hover:scale-105 text-lg md:text-xl w-full md:w-auto shadow-lg">
                Request Medicine
              </button>
            </Link>
            <Link href="/products">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold transition border-2 border-white text-lg md:text-xl w-full md:w-auto shadow-lg">
                Browse Essentials
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4">Healthcare Categories</h2>
            <p className="text-gray-600 text-base md:text-lg">Everyday care, urgent needs, and family wellness in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {categoryImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <span className="text-emerald-700 font-semibold text-sm md:text-base uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-6">Reliable pharmacy care for your family.</h2>
              <p className="text-slate-700 mb-4 text-base md:text-lg">
                Jay Ambey Medical Store helps customers find genuine medicines, health products, and everyday essentials with clear guidance and quick service.
              </p>
              <p className="text-slate-700 mb-6 text-base md:text-lg">
                From prescription support to wellness products and basic health devices, our team keeps the store organized, accessible, and focused on patient convenience.
              </p>
              <Link href="/about">
                <button className="bg-slate-800 hover:bg-emerald-700 text-white px-6 md:px-8 py-3 rounded-lg font-bold transition">
                  Learn More
                </button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-slate-800 p-8 md:p-10 rounded-lg text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Customers Trust Us</h3>
              <ul className="space-y-4">
                {[
                  'Genuine medicines and healthcare products',
                  'Prescription and dosage guidance support',
                  'Fast assistance for urgent medicine needs',
                  'Wellness, baby care, and personal care range',
                  'Polite staff and transparent communication',
                  'Local store convenience with dependable service',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base md:text-lg">
                    <span className="text-amber-300 text-2xl">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Timeline />

      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6">
            Medical Store in Moradabad for Medicines, Wellness Products and Health Essentials
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
            Jay Ambey Medical Store serves local families in Manpur Narayanpur, Linepar, Moradabad with prescription medicines, over-the-counter care, baby products,
            hygiene essentials, nutrition support, and basic medical devices.
          </p>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
            Our focus is simple: genuine products, helpful service, and quick support when customers need medicines
            or healthcare essentials without confusion.
          </p>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            If you are searching for a medical store near me, pharmacy in Moradabad, medicine shop, or wellness products
            nearby, our team is ready to help with availability and order assistance.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            Need Medicine Availability?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-emerald-50 mb-8 md:mb-10">
            Share your requirement and our team will get back to you quickly.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/quote">
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold transition text-base md:text-lg w-full sm:w-auto">
                Request Medicine
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold transition border-2 border-white text-base md:text-lg w-full sm:w-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
