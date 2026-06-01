'use client';

import { motion } from 'framer-motion';

const fallbackTimeline = [
  { _id: 'care', heading: 'Medicine availability support', year: 2026 },
  { _id: 'wellness', heading: 'Expanded wellness and personal care range', year: 2025 },
  { _id: 'devices', heading: 'Added health devices for home monitoring', year: 2024 },
];

export function Timeline() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12 md:mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-emerald-700 font-semibold text-sm md:text-base uppercase tracking-wider">
            Our Journey
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-700 mt-2">Our Care Journey</h2>
          <p className="text-slate-700 text-base md:text-lg">
            A simple look at how Jay Ambey Medical Store supports everyday healthcare needs in Moradabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {fallbackTimeline.map((entry, index) => (
            <motion.div
              key={entry._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-slate-50 p-6 md:p-8 rounded-lg border-l-4 border-emerald-500 hover:shadow-lg transition"
            >
              <div className="text-emerald-700 font-bold text-2xl md:text-3xl mb-2">{entry.year}</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-3">{entry.heading}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
