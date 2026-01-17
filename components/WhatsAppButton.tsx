'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO } from '@/lib/constants';

export default function WhatsAppButton() {
  const primaryPhone = '9425043613'; // Direct to this number

  return (
    <a
      href={`https://wa.me/${primaryPhone.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      
      {/* Main button */}
      <div className="relative bg-green-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float border-2 border-green-400">
        
        {/* WhatsApp icon */}
        <FaWhatsapp className="relative w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
}
