'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { productCategoryDetails } from '@/lib/seo';

const medicalProducts = [
  {
    _id: 'rx-medicines',
    name: 'Prescription Medicines',
    category: 'Medicines',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85',
    description: 'Branded and generic medicines supplied with prescription-aware support and availability checks.',
    featured: true,
  },
  {
    _id: 'otc-care',
    name: 'OTC & First Aid',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=900&q=85',
    description: 'Pain relief, cold care, antiseptics, bandages, ORS, and everyday first-aid essentials.',
    featured: true,
  },
  {
    _id: 'wellness',
    name: 'Wellness & Nutrition',
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=85',
    description: 'Vitamins, supplements, protein, immunity support, and daily nutrition products.',
  },
  {
    _id: 'devices',
    name: 'Health Devices',
    category: 'Devices',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=85',
    description: 'BP monitors, glucometers, thermometers, vaporizers, masks, and home-care devices.',
  },
  {
    _id: 'baby-care',
    name: 'Baby & Mother Care',
    category: 'Family Care',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=900&q=85',
    description: 'Baby hygiene, feeding support, skin care, and mother-care essentials.',
  },
  {
    _id: 'personal-care',
    name: 'Personal Care',
    category: 'Daily Essentials',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85',
    description: 'Hygiene products, skin care, oral care, sanitizers, and daily health essentials.',
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-8 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-5xl font-bold mb-3 md:mb-6">
            Medical Products
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-sm md:text-xl text-emerald-50 max-w-3xl mx-auto">
            Browse common categories available at Jay Ambey Medical Store. For exact medicine availability, share your prescription or product name.
          </motion.p>
        </div>
      </section>

      <section className="py-8 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {medicalProducts.map((product, index) => (
              <motion.div key={product._id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <nav aria-label="Product categories" className="mt-10 flex flex-wrap justify-center gap-3">
            {productCategoryDetails.map((category) => (
              <Link
                key={category.slug}
                href={`/products/category/${category.slug}`}
                className="rounded-lg border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-500 hover:bg-emerald-50"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            Looking for a Specific Medicine?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-emerald-50 mb-8 md:mb-10">
            Send the medicine name, prescription, or required quantity and our team will confirm availability.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link href="/quote">
              <button className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold transition transform hover:scale-105 text-base md:text-lg w-full md:w-auto shadow-lg">
                Request Medicine
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold transition border-2 border-white text-base md:text-lg w-full md:w-auto shadow-lg">
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
