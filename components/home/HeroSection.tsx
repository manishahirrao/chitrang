'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import InquiryModal from '../InquiryModal';
import { BUSINESS_INFO } from '@/lib/constants';
import Link from 'next/link';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/home-hero.jpg',
    '/images/home-hero1.jpg',
    '/images/home-hero2.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <section className="relative overflow-hidden bg-sky-900">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 text-white z-10 min-h-[60vh] lg:min-h-[70vh]">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-sky-200 font-light">Chitransh Agency</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Pure Water for a <span className="text-sky-300">Healthy Bhopal</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light">
              Promoting enhanced healthcare & safe water across Bhopal under the trusted banner of
              Chitransh Agency. We offer pure RO solutions across all sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105"
              >
                Get a Quote
              </button>
              <Link href="/products">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-white hover:text-sky-900 transition-all">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
          
          {/* Side Image */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img 
                src="/images/products/water-softening-systems.webp" 
                alt="Water Softening Systems" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
