'use client';

import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

 function IconX(props: { className?: string }) {
   return (
     <svg
       className={props.className}
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
     >
       <path d="M18 6 6 18" />
       <path d="m6 6 12 12" />
     </svg>
   );
 }

 function IconPhone(props: { className?: string }) {
   return (
     <svg
       className={props.className}
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
     >
       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.09a2 2 0 0 1 2.11-.45c.83.25 1.7.45 2.6.57A2 2 0 0 1 22 16.92Z" />
     </svg>
   );
 }

 function IconMail(props: { className?: string }) {
   return (
     <svg
       className={props.className}
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
     >
       <path d="M4 4h16v16H4z" />
       <path d="m22 6-10 7L2 6" />
     </svg>
   );
 }

 function IconChat(props: { className?: string }) {
   return (
     <svg
       className={props.className}
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
     >
       <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
       <path d="M8 10h8" />
       <path d="M8 14h5" />
     </svg>
   );
 }

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm sm:max-w-md relative overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-slate-700 hover:text-slate-900 transition-colors bg-white/90 backdrop-blur rounded-full p-2 shadow-lg"
          aria-label="Close"
        >
          <IconX className="w-4 h-4" />
        </button>

        {/* Modal Content */}
        <div className="p-4 sm:p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="w-11 h-11 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <IconChat className="w-5 h-5 text-sky-700" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Get a Free Quote</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Share your requirement — we’ll call you back.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="bg-sky-50 rounded-xl px-3 py-2 mb-4">
            <div className="flex items-center justify-center gap-4 text-xs sm:text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                className="flex items-center gap-2 text-sky-700 hover:text-sky-900"
              >
                <IconPhone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <span className="text-slate-300">|</span>
              <a
                href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                className="flex items-center gap-2 text-sky-700 hover:text-sky-900"
              >
                <IconMail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 placeholder-slate-400 text-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 placeholder-slate-400 text-sm"
                placeholder="Phone number"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 placeholder-slate-400 text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Product Interest</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 text-sm bg-white"
              >
                <option value="">Select a product</option>
                <option value="ro-purifier">RO Water Purifier</option>
                <option value="vacuum-cleaner">Vacuum Cleaner</option>
                <option value="water-softener">Water Softener</option>
                <option value="commercial-purifier">Commercial Purifier</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-900 placeholder-slate-400 text-sm resize-none"
                placeholder="Your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-2.5 rounded-lg font-semibold hover:bg-sky-700 transition-colors text-sm"
            >
              Get Free Quote
            </button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
              <div className="flex items-center gap-1">
                <span>✓</span>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✓</span>
                <span>Expert Advice</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✓</span>
                <span>Best Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
