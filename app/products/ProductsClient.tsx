'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import QuoteModal from '@/components/QuoteModal';
import { products } from '@/data/products';
import { BUSINESS_INFO } from '@/lib/constants';

export default function ProductsClient() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/product-hero.webp"
            alt="Products"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-10 text-white z-10">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] mb-4 text-sky-200 font-light">Our Products</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Premium <span className="text-sky-300">Water Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-sky-100 max-w-2xl mb-8 leading-relaxed font-light">
              Explore our comprehensive range of RO water purifiers, vacuum cleaners, water softeners, and accessories. Quality products for residential and commercial use.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105"
              >
                Get Quote
              </button>
              <Link href="/gallery">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-white hover:text-sky-900 transition-all">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>

          {/* Side Image */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img
                src="/images/products/kent-ace-ro-water-purifier.webp"
                alt="Kent RO Water Purifier"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">All Products</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive range of water purification and cleaning solutions designed to meet the diverse needs of homes and businesses
            </p>
          </div>

          {/* Category: RO Water Purifiers */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">RO Water Purifiers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'ro-purifier')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Commercial Purifiers */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Commercial Solutions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'commercial-purifier')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Water Softeners */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Water Softeners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'water-softener')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Vacuum Cleaners */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Vacuum Cleaners</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'vacuum-cleaner')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Installation Services */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Installation & Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'installation-service')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Category: Accessories */}
          <div className="mb-24">
            <div className="flex items-center mb-8">
              <div className="w-16 h-1 bg-cyan-600 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Accessories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(p => p.category === 'accessories')
                .map((product, index) => (
                  <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <a
                href={`https://wa.me/91${BUSINESS_INFO.phones.whatsapp}?text=Hi!%20I%27m%20interested%20in%20your%20products`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 8c0 3.23-1.51 4.5-4.5 4.5-4.5S19.5 3.23 16 8c0-3.23 1.51-4.5 4.5-4.5 4.5S12.5 8.77 16 8c0 3.23 1.51 4.5 4.5 4.5S8.5 12.77 16 8z" />
                </svg>
                Contact Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  );
}
