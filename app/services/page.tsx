'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuoteModal from '@/components/QuoteModal';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';

export default function ServicesPage() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phones.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hi! I want to know more about your services. Please guide me.\n\nSent from: ${BUSINESS_INFO.name} Website`
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/service-hero.webp"
            alt="Services"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 text-white z-10 min-h-[50vh] lg:min-h-[60vh]">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-sky-200 font-light">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              Professional <span className="text-sky-300">Installation & Maintenance</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light">
              We provide complete solutions—right product selection, clean installation, and dependable after-sales service for RO water purifiers, commercial RO plants, water softeners, and vacuum cleaners.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105"
              >
                Get Quote
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-white hover:text-sky-900 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
          
          {/* Side Image */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img 
                src="/images/products/industrial-ro-plant-installation-service.webp" 
                alt="Industrial RO Plant Installation Service" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our service team helps you from start to finish—water check, correct recommendation, neat installation, testing & demo, and ongoing service support.
            </p>

            {/* Installation & Commissioning */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">1</span>
                Installation & Commissioning
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-slate-600 mb-4">
                    Professional installation services for all types of water treatment systems with proper plumbing, electrical connections, and thorough testing.
                  </p>
                  
                  <div className="bg-sky-50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">What's Included:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Site assessment and location planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Professional plumbing & electrical work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>System mounting and secure installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Water quality testing and system calibration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Customer training and operation demo</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-green-800 font-semibold text-sm mb-1">Domestic Systems</p>
                      <p className="text-green-600 text-xs">RO purifiers, water softeners, UV systems</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-blue-800 font-semibold text-sm mb-1">Commercial Systems</p>
                      <p className="text-blue-600 text-xs">50 LPH to 50,000 LPH RO plants</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img 
                    src="/images/Installation & Commissioning.jpg" 
                    alt="Professional Installation Service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* AMC & Preventive Maintenance */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">2</span>
                AMC & Preventive Maintenance
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-slate-600 mb-4">
                    Comprehensive maintenance plans to keep your water treatment systems running efficiently and extend their lifespan.
                  </p>
                  
                  <div className="bg-sky-50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">AMC Benefits:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Regular scheduled service visits (quarterly/half-yearly)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Priority service for AMC customers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Discounted spare parts and consumables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Extended equipment life and performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Comprehensive service reports and records</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="text-purple-800 font-semibold text-sm mb-1">Basic AMC</p>
                      <p className="text-purple-600 text-xs">Starting from ₹3,000/year</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <p className="text-indigo-800 font-semibold text-sm mb-1">Comprehensive AMC</p>
                      <p className="text-indigo-600 text-xs">All parts and labor included</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img 
                    src="/images/AMC & Preventive Maintenance.jpg" 
                    alt="AMC and Maintenance Service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Filter & Membrane Replacement */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">3</span>
                Filter & Membrane Replacement
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-slate-600 mb-4">
                    Genuine spare parts replacement with water quality testing to maintain optimal system performance.
                  </p>
                  
                  <div className="bg-sky-50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Replacement Services:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>RO membrane replacement (all brands)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Sediment, carbon, and post-carbon filters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>UV lamp replacement and testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Water softener resin and salt refill</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Pre and post replacement water quality testing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 rounded-lg p-3">
                    <p className="text-amber-800 font-semibold text-sm mb-1">Genuine Parts Guarantee</p>
                    <p className="text-amber-600 text-xs">100% original manufacturer spares with warranty</p>
                  </div>
                </div>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img 
                    src="/images/Filter & Membrane Replacement.jpeg" 
                    alt="Filter and Membrane Replacement" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Repairs & Troubleshooting */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">4</span>
                Repairs & Troubleshooting
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-slate-600 mb-4">
                    Expert diagnosis and repair services for all types of water treatment system issues.
                  </p>
                  
                  <div className="bg-sky-50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Common Issues We Fix:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Low water flow or pressure issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Water taste, odor, or color problems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Leakage and pipe connection issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>Pump, motor, and electrical faults</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 mt-1">•</span>
                        <span>System not starting or unusual noises</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="bg-red-50 rounded-lg p-3">
                      <p className="text-red-800 font-semibold text-sm mb-1">Emergency Service</p>
                      <p className="text-red-600 text-xs">24/7 support for AMC customers</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-orange-800 font-semibold text-sm mb-1">Quick Diagnosis</p>
                      <p className="text-orange-600 text-xs">Same-day service available</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img 
                    src="/images/Repairs & Troubleshooting.jpeg" 
                    alt="Repair and Troubleshooting Service" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Get answers about our services, installation, maintenance, and support
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">How long does installation take?</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Domestic RO systems typically take 2-3 hours. Commercial installations may take 4-8 hours depending on complexity.
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Do you provide warranty on installation?</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Yes, we provide 1-year service warranty on all installation work in addition to manufacturer product warranty.
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What's included in AMC service?</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Regular service visits, filter changes, system cleaning, performance checks, and priority support.
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Do you use genuine spare parts?</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Absolutely! We only use 100% genuine manufacturer parts with warranty to ensure optimal performance.
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">What areas do you service?</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We serve Bhopal, Sehore, Raisen, Vidisha and nearby areas. On-site visits available for all locations.
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">How quickly can you respond to emergencies?</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    AMC customers get 24/7 emergency support. Non-AMC customers get same-day service for urgent issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-700 text-white p-6">
              <h3 className="text-xl font-bold mb-2">Need urgent service?</h3>
              <p className="text-sky-100 mb-5">
                Call us and our team will guide you quickly. For faster response, share your issue on WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                  className="bg-white text-sky-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-sky-50 transition-all"
                >
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-sky-900 transition-all"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/products" className="block text-sky-700 hover:text-sky-800 font-medium">
                  View Products
                </Link>
                <Link href="/gallery" className="block text-sky-700 hover:text-sky-800 font-medium">
                  See Our Work
                </Link>
                <Link href="/contact" className="block text-sky-700 hover:text-sky-800 font-medium">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Service Coverage</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Bhopal and nearby areas. On-site visits available for domestic and commercial setups.
              </p>
              <div className="space-y-2 text-sm text-slate-600">
                <p>• Bhopal City</p>
                <p>• Sehore</p>
                <p>• Raisen</p>
                <p>• Vidisha</p>
                <p>• Nearby areas (on request)</p>
              </div>
              <div className="mt-4">
                <Button
                  variant="primary"
                  className="bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-lg font-semibold w-full"
                  onClick={() => setShowQuoteModal(true)}
                >
                  Request a Visit
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Service Hours</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-slate-900">Monday - Saturday</p>
                <p className="text-slate-600">9:00 AM - 7:00 PM</p>
                <p className="font-semibold text-slate-900 mt-3">Emergency Support</p>
                <p className="text-slate-600">24/7 for AMC customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  );
}
