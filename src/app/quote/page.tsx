'use client';

import { motion } from 'framer-motion';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { trackGoogleAdsEvent } from '@/lib/googleAds';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: '',
    quantity: '',
    specifications: '',
    deliveryDate: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Organization: ${formData.company}\nProduct: ${formData.productType}\nQuantity: ${formData.quantity}\nDetails: ${formData.specifications}\nNeeded By: ${formData.deliveryDate}\n\nMessage: ${formData.message}`,
        }),
      });

      if (response.ok) {
        trackGoogleAdsEvent('generate_lead', {
          event_category: 'engagement',
          event_label: 'medicine_request_submit',
        });
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', productType: '', quantity: '', specifications: '', deliveryDate: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting medicine request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      <Header1 />

      <section className="relative w-full py-8 md:py-20 bg-gradient-to-r from-slate-800 via-emerald-700 to-slate-800 text-white px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-5xl font-bold mb-3 md:mb-6">
            Request Medicine
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-emerald-50">
            Share your medicine or healthcare requirement and we will confirm availability.
          </motion.p>
        </div>
      </section>

      <section className="py-8 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white border border-gray-200 p-3 md:p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 00000 00000" className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Doctor/Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Optional" className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Product Type *</label>
                  <select name="productType" value={formData.productType} onChange={handleChange} required className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition">
                    <option value="">Select a product</option>
                    <option value="Prescription Medicine">Prescription Medicine</option>
                    <option value="OTC Medicine">OTC Medicine</option>
                    <option value="Wellness Product">Wellness Product</option>
                    <option value="Health Device">Health Device</option>
                    <option value="Baby Care">Baby Care</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Quantity *</label>
                  <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} required placeholder="Example: 2 strips, 1 bottle" className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Medicine/Product Details</label>
                <textarea name="specifications" value={formData.specifications} onChange={handleChange} placeholder="Enter medicine name, strength, brand, prescription details, or health product requirement" rows={3} className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none" />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Needed By</label>
                <input type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-slate-800 mb-2">Additional Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any extra details or special request" rows={4} className="w-full px-3 py-2 md:px-4 md:py-3 text-sm bg-white text-slate-800 placeholder-gray-400 rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 outline-none transition resize-none" />
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading} className="w-full bg-emerald-600 text-white py-2 md:py-3 text-sm md:text-base rounded font-bold hover:bg-emerald-700 transition disabled:opacity-50">
                {loading ? 'Submitting...' : 'Submit Request'}
              </motion.button>

              {submitted && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 border border-green-200 text-green-700 p-3 rounded text-center">
                  Request submitted successfully. We will contact you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
