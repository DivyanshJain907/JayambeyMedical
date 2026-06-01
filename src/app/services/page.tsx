'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    { title: 'Medicine Availability', description: 'Quick checks for prescription and routine medicines.', features: ['Prescription medicines', 'Generic options', 'Availability support', 'Order assistance'] },
    { title: 'OTC & First Aid', description: 'Everyday healthcare essentials for common needs.', features: ['Cold and fever care', 'Pain relief', 'Bandages', 'ORS and antiseptics'] },
    { title: 'Wellness Guidance', description: 'Support for vitamins, supplements, and nutrition choices.', features: ['Vitamins', 'Immunity care', 'Protein products', 'Daily wellness'] },
    { title: 'Health Devices', description: 'Home health monitoring products and basic device support.', features: ['BP monitors', 'Glucometers', 'Thermometers', 'Vaporizers'] },
    { title: 'Family Care', description: 'Baby, mother, hygiene, and personal-care essentials.', features: ['Baby care', 'Skin care', 'Oral care', 'Sanitizers'] },
    { title: 'Request Support', description: 'Share your requirement and receive a quick response.', features: ['Medicine requests', 'Bulk needs', 'Phone support', 'WhatsApp inquiry'] },
  ];

  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-12 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-emerald-50">
            Practical pharmacy support for medicines, wellness, and daily healthcare needs.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-lg md:text-2xl font-bold text-emerald-700 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-emerald-700 font-bold">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-8 md:mb-12 text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: 'Dependable', description: 'Focused support for medicine and healthcare availability.' },
              { title: 'Approachable', description: 'A team that keeps communication simple and useful.' },
              { title: 'Convenient', description: 'One place for medicines, wellness, family care, and devices.' },
              { title: 'Responsive', description: 'Quick help through store visit, phone, or WhatsApp inquiry.' },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white p-6 rounded-lg border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
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
