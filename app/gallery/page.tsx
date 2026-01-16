'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { galleryImages, categories } from '@/data/gallery';

// Dynamic import for lightbox (heavy component)
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});
import 'yet-another-react-lightbox/styles.css';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

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
      <section className="bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-primary-800)] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100">
            Explore our installations, products, and happy customers
          </p>
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
    </div>
  );
}
