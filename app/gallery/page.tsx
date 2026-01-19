'use client';

import { useState, useEffect } from 'react';
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'RBI',
      role: 'Regional Office, Bhopal',
      initial: 'RBI',
      content:
        'Reliable installation and prompt service support. The team maintained excellent hygiene standards and ensured consistent water quality.',
    },
    {
      name: 'Railway',
      role: 'Division Office, Bhopal',
      initial: 'RW',
      content:
        'Professional team and smooth execution. Their after-sales support is responsive and dependable.',
    },
    {
      name: 'Sagar Public School',
      role: 'Educational Institution, Bhopal',
      initial: 'S',
      content:
        'The installation was completed on time and the maintenance support has been excellent. Students and staff now have access to safe drinking water.',
    },
    {
      name: 'Narayana School',
      role: 'Educational Institution, Bhopal',
      initial: 'N',
      content:
        'Great service quality and quick resolution whenever support is needed. Overall a very smooth experience.',
    },
    {
      name: 'AU Bank',
      role: 'Corporate Office, Bhopal',
      initial: 'AU',
      content:
        'Consistent service and professional installation. We appreciate timely follow-ups and dependable support.',
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 text-white z-10 min-h-[50vh] lg:min-h-[60vh]">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-sky-200 font-light">Our Gallery</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Explore Our <span className="text-sky-300">Project Gallery</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light">
              Browse through our completed installations, product showcases, and satisfied customer stories. See the quality and craftsmanship we bring to every water treatment project.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2000+</div>
                <div className="text-xs sm:text-sm text-sky-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">30+</div>
                <div className="text-xs sm:text-sm text-sky-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-xs sm:text-sm text-sky-200">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-sky-200">Support Available</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
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
                src="/images/gallery/Our Bhopal Showroom.jpeg" 
                alt="Our Bhopal Showroom" 
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
                    ? 'bg-sky-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Project Highlights</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              From residential installations to large-scale commercial projects, we deliver quality water treatment solutions across Central India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-semibold text-slate-900 mb-2">Residential Projects</h3>
              <p className="text-sm text-slate-600">Home RO systems, water softeners, and vacuum cleaners for families and apartments</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-slate-900 mb-2">Commercial Projects</h3>
              <p className="text-sm text-slate-600">Office complexes, restaurants, and institutional water treatment solutions</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="font-semibold text-slate-900 mb-2">Industrial Projects</h3>
              <p className="text-sm text-slate-600">Large-scale RO plants and water treatment systems for manufacturing units</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sky-100">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-semibold text-slate-900 mb-2">Service & Maintenance</h3>
              <p className="text-sm text-slate-600">AMC services, filter replacements, and emergency support for all installations</p>
            </div>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Don't just take our word for it. Here's what our satisfied customers have to say about our water treatment solutions and services.
            </p>
          </div>
          
          {/* Auto-rotating Testimonial Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-sky-50 rounded-2xl p-8 shadow-sm border border-sky-100 transition-all duration-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[currentTestimonial].initial}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-xl">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-slate-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed text-lg">
                "{testimonials[currentTestimonial].content}"
              </p>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-sky-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started with Your Water Treatment Solution?
            </h2>
            <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
              Join hundreds of satisfied customers across Central India. Get expert consultation, professional installation, and reliable after-sales service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="bg-white text-sky-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105"
              >
                Get Free Quote
              </button>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-sky-900 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">5000+</div>
                <div className="text-sm text-sky-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">30+</div>
                <div className="text-sm text-sky-200">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm text-sky-200">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">99%</div>
                <div className="text-sm text-sky-200">Satisfaction</div>
              </div>
            </div>
          </div>
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
