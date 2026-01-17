'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductCard from '@/components/ProductCard';
import QuoteModal from '@/components/QuoteModal';
import { products } from '@/data/products';
import { BUSINESS_INFO } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const brands = [
    {
      name: "KENT",
      logo: "/images/KENT.webp",
      description: "Advanced RO Systems"
    },
    {
      name: "Aquaguard",
      logo: "/images/Aquaguard.jpeg",
      description: "Advanced Water Purification"
    },
    {
      name: "Aquagrand",
      logo: "/images/Aquagrand.jpeg",
      description: "Advanced Water Purification"
    },
    {
      name: "Dulevo",
      logo: "/images/Dulevo.png",
      description: "Heavy Duty Vacuum Cleaners"
    },
    {
      name: "Eureka Forbes",
      logo: "/images/Eureka Forbes.png",
      description: "Advanced Water Purification"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
    }, 3000); // Rotate every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [brands.length]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Operations Manager, Textile Industry",
      content: "The water softener system has transformed our operations. Water quality has improved significantly, and we've seen a 40% reduction in maintenance costs.",
      rating: 5,
      initial: "R"
    },
    {
      name: "Priya Sharma",
      position: "CEO, Healthcare Facility",
      content: "Exceptional service and quality products. The RO system installation was smooth, and the water quality meets all our medical standards. Highly recommended!",
      rating: 5,
      initial: "P"
    },
    {
      name: "Amit Verma",
      position: "Plant Manager, Manufacturing Unit",
      content: "Chitransh Agency has been our trusted partner for 15+ years. Their prompt service and reliable products keep our operations running smoothly.",
      rating: 5,
      initial: "A"
    },
    {
      name: "Sneha Patel",
      position: "Director, Educational Institute",
      content: "The vacuum cleaners and water purifiers have made a huge difference in our facility. Students and staff both appreciate the clean environment.",
      rating: 5,
      initial: "S"
    },
    {
      name: "Vikram Singh",
      position: "Owner, Restaurant Chain",
      content: "Perfect water quality is crucial for our business. Chitransh Agency delivered exactly what we needed with excellent after-sales support.",
      rating: 5,
      initial: "V"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Show quote modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowQuoteModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-sky-50">
      <HeroSection />
      <FeaturesSection />

      <section className="bg-sky-50 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Clear guidance. Right product. Reliable service.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {BUSINESS_INFO.name} helps you choose the right water purification and cleaning solution based on your usage, water quality, and budget. From domestic RO to commercial systems and water softeners, we focus on correct selection, clean installation, and dependable after-sales support.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-sm">
                  <p className="text-sm text-slate-500 mb-1">Since</p>
                  <p className="text-lg font-semibold text-slate-900">2003</p>
                  <p className="text-sm text-slate-600 mt-2">Serving homes, offices, and institutions in and around Bhopal.</p>
                </div>
                <div className="bg-white rounded-2xl border border-sky-100 p-5 shadow-sm">
                  <p className="text-sm text-slate-500 mb-1">Support</p>
                  <p className="text-lg font-semibold text-slate-900">Installation & AMC</p>
                  <p className="text-sm text-slate-600 mt-2">Timely service, filter changes, and maintenance plans.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about">
                  <Button variant="primary" className="bg-sky-600 hover:bg-sky-700 px-7 py-3 rounded-lg font-semibold">
                    Learn More About Us
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-7 py-3 rounded-lg font-semibold">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-72 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-sky-100">
                <Image
                  src="/images/contact-hero.webp"
                  alt="Water treatment and service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white rounded-2xl border border-sky-100 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Free Consultation</p>
                  <p className="text-sm text-slate-600 mt-1">Share your water issue and requirements.</p>
                </div>
                <div className="bg-white rounded-2xl border border-sky-100 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">Right Fit Solution</p>
                  <p className="text-sm text-slate-600 mt-1">Recommendation based on water type & usage.</p>
                </div>
                <div className="bg-white rounded-2xl border border-sky-100 p-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-900">After-Sales Care</p>
                  <p className="text-sm text-slate-600 mt-1">Service reminders, spares, and AMC support.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-14">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">How It Works</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">A simple, reliable process</h3>
              <p className="text-slate-600 max-w-3xl mx-auto">We keep it straightforward: understand your needs, recommend the correct system, install neatly, and stay available for service.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
                <p className="text-sky-600 text-sm font-semibold mb-2">Step 1</p>
                <p className="text-slate-900 font-semibold mb-2">Requirement Check</p>
                <p className="text-sm text-slate-600 leading-relaxed">We confirm TDS/hardness, daily usage, and installation location.</p>
              </div>
              <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
                <p className="text-sky-600 text-sm font-semibold mb-2">Step 2</p>
                <p className="text-slate-900 font-semibold mb-2">Product Recommendation</p>
                <p className="text-sm text-slate-600 leading-relaxed">We suggest the right RO/softener/plant capacity with clear pricing.</p>
              </div>
              <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
                <p className="text-sky-600 text-sm font-semibold mb-2">Step 3</p>
                <p className="text-slate-900 font-semibold mb-2">Installation & Demo</p>
                <p className="text-sm text-slate-600 leading-relaxed">Professional installation, testing, and guidance for daily use.</p>
              </div>
              <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
                <p className="text-sky-600 text-sm font-semibold mb-2">Step 4</p>
                <p className="text-slate-900 font-semibold mb-2">Service & AMC</p>
                <p className="text-sm text-slate-600 leading-relaxed">Filter changes, repairs, and maintenance plans to keep it running.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-sky-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Installation, AMC & After-Sales Support</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From correct product selection to clean installation and reliable maintenance, our team helps you keep your system performing at its best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
              <h3 className="text-slate-900 font-semibold text-lg mb-2">Professional Installation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Proper plumbing & electrical connections, testing, and demo for RO purifiers, softeners, and commercial plants.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
              <h3 className="text-slate-900 font-semibold text-lg mb-2">AMC & Preventive Maintenance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scheduled service visits, cleaning, and performance checks to reduce breakdowns and increase life.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-sm">
              <h3 className="text-slate-900 font-semibold text-lg mb-2">Filter & Spare Replacement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Genuine filters/membranes and reliable service support to maintain water quality and system health.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="primary" className="bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-lg font-semibold">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Products Preview Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Water Treatment Products</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of water purification and cleaning solutions designed for residential and commercial applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* RO Water Purifiers Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100">
              <div className="relative h-48">
                <Image
                  src="/images/products/kent-ace-ro-water-purifier.webp"
                  alt="RO Water Purifiers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">RO Water Purifiers</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Advanced reverse osmosis systems for pure, safe drinking water with essential minerals</p>
                <Link href="/products">
                  <span className="text-sky-600 font-medium hover:text-sky-700 transition-colors">Explore RO Systems →</span>
                </Link>
              </div>
            </div>

            {/* Vacuum Cleaners Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100">
              <div className="relative h-48">
                <Image
                  src="/images/products/kent-cyclonic-vacuum-cleaner.webp"
                  alt="Vacuum Cleaners"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Vacuum Cleaners</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Powerful cleaning solutions for both residential and commercial spaces</p>
                <Link href="/products">
                  <span className="text-sky-600 font-medium hover:text-sky-700 transition-colors">Explore Cleaners →</span>
                </Link>
              </div>
            </div>

            {/* Water Softeners Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100">
              <div className="relative h-48">
                <Image
                  src="/images/products/kent-automatic-water-softener.webp"
                  alt="Water Softeners"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Water Softeners</h3>
                <p className="text-slate-600 leading-relaxed mb-4">Eliminate hard water problems with our advanced water softening systems</p>
                <Link href="/products">
                  <span className="text-sky-600 font-medium hover:text-sky-700 transition-colors">Explore Softeners →</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="primary" className="bg-sky-600 hover:bg-sky-700 px-8 py-3 rounded-lg font-semibold">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-12 sm:py-16 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sky-500 mb-2 sm:mb-3 font-light">Our Partners</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Trusted Brands We Work With</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              We partner with leading brands to bring you the best in water purification and cleaning solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4">
            {brands.map((brand, index) => (
              <div 
                key={brand.name}
                className={`bg-white p-4 rounded-xl shadow-sm border border-sky-100 transition-all duration-300 ${
                  index === currentBrandIndex ? 'ring-2 ring-sky-500 scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="h-28 flex items-center justify-center mb-3">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={80}
                    className="h-auto max-h-full w-auto max-w-full object-contain"
                  />
                </div>
                <h3 className="text-center font-medium text-slate-800">{brand.name}</h3>
                <p className="text-xs text-center text-slate-500 mt-1">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sky-500 mb-2 sm:mb-3 font-light">Testimonials</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Trusted by leading industries for reliable water treatment solutions and exceptional service
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
            {/* Main Testimonial Card */}
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 sm:p-8 border border-sky-100 shadow-lg transition-all duration-500">
              <div className="flex mb-4 sm:mb-6 justify-center sm:justify-start">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg italic text-center sm:text-left">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sky-700 font-bold text-lg sm:text-xl">{testimonials[currentTestimonial].initial}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-base sm:text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-sky-600 scale-125'
                      : 'bg-sky-300 hover:bg-sky-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-200 hover:border-sky-300 z-10"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-200 hover:border-sky-300 z-10"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Frequently Asked Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Know</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Get answers about our products, services, installation, and support for water purification and cleaning solutions
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "What types of water purifiers do you offer?",
                answer: "We offer a comprehensive range of RO water purifiers including domestic systems (Kent, LG, Aqua Guard), commercial purifiers (100 LPH to 50,000 LPH), and industrial RO plants. All systems feature multi-stage purification with UV, UF, and mineral addition technology."
              },
              {
                question: "Do you provide installation services in Bhopal?",
                answer: `Yes! We provide professional installation services across Bhopal and surrounding areas. Our team handles complete setup including plumbing, electrical connections, and commissioning. Call us at ${BUSINESS_INFO.phones.business[0]} to schedule installation.`
              },
              {
                question: "What is your service area and response time?",
                answer: "We serve all of Bhopal with same-day installation for most products. Our service team covers nearby areas including Sehore, Raisen, and Vidisha. Emergency support is available 24/7 for existing customers with AMC contracts."
              },
              {
                question: "What brands of vacuum cleaners do you offer?",
                answer: "We stock premium vacuum cleaners from Eureka Forbes, Kent, and Dulevo. Our range includes wet & dry vacuums, cyclonic cleaners, upholstery vacuums, and heavy-duty industrial models. All products come with manufacturer warranty."
              },
              {
                question: "Do you offer Annual Maintenance Contracts (AMC)?",
                answer: "Yes, we provide comprehensive AMC packages for all products. Our AMC includes regular servicing, filter replacement, emergency support, and priority service. Starting from ₹3,000/year for domestic systems and customized plans for commercial setups."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, UPI, bank transfers, and all major credit/debit cards. For commercial orders, we also offer NET banking and corporate billing options. EMI facilities are available on select products above ₹10,000."
              },
              {
                question: "How do I contact customer support?",
                answer: `Reach us via phone at ${BUSINESS_INFO.phones.business[0]}, WhatsApp at ${BUSINESS_INFO.phones.support}, or email at ${BUSINESS_INFO.primaryEmail}. Our office is open Monday-Saturday, 9 AM - 7 PM. Emergency support is available 24/7 for AMC customers.`
              },
              {
                question: "Do you have a physical showroom?",
                answer: `Yes! Visit our showroom at ${BUSINESS_INFO.address.full} to see live product demonstrations. Our experts will help you choose the right solution. We're open Monday-Saturday, 10 AM - 7 PM.`
              },
              {
                question: "What warranties do you provide?",
                answer: "All products come with manufacturer warranty (1-3 years depending on model). We also provide service warranty on installation work. Extended warranty options are available for additional peace of mind."
              },
              {
                question: "Can I get a free water test?",
                answer: "Absolutely! We offer complimentary water testing to check TDS, hardness, and contamination levels. Our experts will visit your location, collect samples, and provide detailed analysis with product recommendations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-sky-50 transition-colors"
                >
                  <span className="pr-4 text-slate-800 font-medium text-base">{faq.question}</span>
                  <span 
                    className={`text-slate-500 text-xl font-light transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-slate-600 leading-relaxed border-t border-sky-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>

      
      {/* Contact CTA Section */}
      <section className="bg-gradient-to-br from-sky-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200 mb-3 font-light">Ready to Get Started?</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Get Your Custom Water Solution Today
                </h3>
                <p className="text-sky-100 text-base mb-6 leading-relaxed">
                  Let our experts design the perfect water purification system for your needs. 
                  Contact us today for a personalized consultation and take the first step towards pure water.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${BUSINESS_INFO.phones.business[0]}`} className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 text-white font-bold shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105">
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <button 
                  onClick={() => setShowQuoteModal(true)}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 text-white font-bold shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105"
                >
                  <div className="relative z-10 flex items-center justify-center">
                    <span>Get Quote</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  );
}
