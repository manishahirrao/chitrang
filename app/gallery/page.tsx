'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import QuoteModal from '@/components/QuoteModal';
import { galleryImages, categories } from '@/data/gallery';

// Dynamic import for lightbox (heavy component)
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});
import 'yet-another-react-lightbox/styles.css';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  const lightboxSlides = filteredImages.map(img => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-hero.webp"
            alt="Gallery"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-10 text-white z-10">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] mb-4 text-sky-200 font-light">Our Gallery</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Explore Our <span className="text-sky-300">Work Gallery</span>
            </h1>
            <p className="text-base md:text-lg text-sky-100 max-w-2xl mb-8 leading-relaxed font-light">
              Browse through our installations, product showcases, and satisfied customer stories. See the quality and craftsmanship we bring to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105"
              >
                Get Quote
              </button>
              <Link href="/products">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-white hover:text-sky-900 transition-all">
                  View Products
                </button>
              </Link>
            </div>
          </div>
          
          {/* Side Image */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img 
                src="/images/home-hero2.jpg" 
                alt="Gallery Showcase" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-[var(--color-primary-600)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <GalleryGrid
              images={filteredImages}
              onImageClick={index => setLightboxIndex(index)}
            />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
      />

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  );
}
