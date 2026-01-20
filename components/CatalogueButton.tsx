'use client';

import { FaFilePdf } from 'react-icons/fa';

export default function CatalogueButton() {
  return (
    <a
      href="/catalogue.PDF"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-6 z-40 group"
      aria-label="Download our catalogue"
    >
      
      {/* Main button */}
      <div className="relative bg-red-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-float border-2 border-red-400">
        
        {/* PDF icon */}
        <FaFilePdf className="relative w-8 h-8 transform group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse border-2 border-white"></div>
      </div>
      
      {/* Hover tooltip */}
      <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Download Catalogue
        <div className="absolute top-0 right-4 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
      </div>
    </a>
  );
}
