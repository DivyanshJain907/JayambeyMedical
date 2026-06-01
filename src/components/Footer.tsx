'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const settings = {
    shopName: 'Jay Ambey Medical Store',
    phone: '+91 9368555196',
  };

  return (
    <motion.footer
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-t border-slate-700 text-white py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <Image src="/medical-logo.jpg" alt="Jay Ambey Medical Store logo" width={80} height={80} className="w-16 md:w-24 h-auto mb-3 md:mb-4" />
            <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">{settings.shopName}</h3>
            <p className="text-xs md:text-sm text-gray-200">
              Genuine medicines, wellness essentials, health devices, and helpful pharmacy support for everyday care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-200">
              <li><a href="/products" className="hover:text-amber-300 transition">Products</a></li>
              <li><a href="/services" className="hover:text-amber-300 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-amber-300 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <p className="text-xs md:text-sm text-gray-200">
              Phone: {settings.phone}<br />
              Owner: Jitadra Saini
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Address</h4>
            <p className="text-xs md:text-sm text-gray-200 mb-3">
              <span className="font-semibold">Store:</span><br />
              Manpur Narayanpur, Linepar,<br />
              Moradabad, Uttar Pradesh 244001
            </p>
            <p className="text-xs md:text-sm text-gray-200">
              Monday - Saturday: 9:00 AM - 9:00 PM<br />
              Sunday: Limited hours
            </p>
          </div>
        </div>

        <div className="border-t border-emerald-700 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-300">
          <p>&copy; 2026 {settings.shopName}. All rights reserved.</p>
          <p className="mt-2">
            Developed by <a href="https://www.thejainagency.shop" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Jain Agency</a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
