'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

const clients = [
  {
    name: 'Indian Railways',
    category: 'Government',
    description: 'Official water purification solutions provider',
  },
  {
    name: 'RBI Bank',
    category: 'Banking',
    description: 'Reserve Bank of India, Bhopal Regional Office',
  },
  {
    name: 'Sagar Public School',
    category: 'Education',
    description: 'Leading educational institution in Bhopal',
  },
  {
    name: 'Narayana School',
    category: 'Education',
    description: 'Premier educational establishment',
  },
  {
    name: 'AU Bank',
    category: 'Banking',
    description: 'AU Small Finance Bank, Bhopal Branch',
  },
  {
    name: 'Sagar Group',
    category: 'Corporate',
    description: 'Leading business conglomerate in Bhopal',
  },
  {
    name: 'SIS Tech',
    category: 'Technology',
    description: 'Technology solutions provider',
  }
];

export default function ClientsSection({ onOpenQuoteModal }: { onOpenQuoteModal: () => void }) {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted <span className="text-cyan-600">Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proud to serve prestigious institutions across Bhopal with reliable water purification solutions
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredClient(client.name)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8 text-center">
                {/* Client Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {client.name}
                </h3>
                
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full mb-3">
                  {client.category}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {client.description}
                </p>
                
                {/* Location Indicator */}
                <div className="flex items-center justify-center text-gray-500 text-sm mb-6">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Bhopal, Madhya Pradesh
                </div>

                {/* CTA Button */}
                <button 
                  onClick={onOpenQuoteModal}
                  className="relative z-10 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 text-center"
                >
                  Get Quote for Similar Solution
                </button>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-cyan-500 rounded-xl transition-opacity duration-300 ${
                hoveredClient === client.name ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-cyan-50 border border-cyan-200 rounded-full">
            <svg className="w-5 h-5 text-cyan-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-cyan-700 font-medium">
              Serving 2000+ clients across Bhopal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
