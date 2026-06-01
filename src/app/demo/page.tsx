'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Jay Ambey Medical Store
          </motion.h1>
          <p className="text-xl text-emerald-50 mb-10">
            Medicines, wellness essentials, and healthcare support for everyday needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-bold">
              Browse Products
            </Link>
            <Link href="/quote" className="bg-white/20 border border-white text-white px-8 py-3 rounded-lg font-bold">
              Request Medicine
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
