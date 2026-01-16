import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      <HeroSection />
      <FeaturesSection />
      
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
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">RO Water Purifiers</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Advanced reverse osmosis systems for pure, safe drinking water with essential minerals</p>
              <Link href="/products">
                <span className="text-sky-600 font-medium hover:text-sky-700 transition-colors">Explore RO Systems →</span>
              </Link>
            </div>

            {/* Vacuum Cleaners Card */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Vacuum Cleaners</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Powerful cleaning solutions for both residential and commercial spaces</p>
              <Link href="/products">
                <span className="text-sky-600 font-medium hover:text-sky-700 transition-colors">Explore Cleaners →</span>
              </Link>
            </div>

            {/* Water Softeners Card */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Water Softeners</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Eliminate hard water problems with our advanced water softening systems</p>
              <Link href="/products">
                <span className="text-sky-600 font-medium hover:text-sky-700 transition-colors">Explore Softeners →</span>
              </Link>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Trusted by leading industries for reliable water treatment solutions and exceptional service
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 shadow-lg">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg italic">
                "The water softener system has transformed our operations. Water quality has improved significantly, and we've seen a 40% reduction in maintenance costs."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center">
                  <span className="text-sky-700 font-bold text-xl">R</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg">Rajesh Kumar</h4>
                  <p className="text-sm text-slate-600">Operations Manager, Textile Industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Softener FAQ Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Expert Answers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Water Softener FAQs</h2>
            <p className="text-base md:text-lg text-slate-600">
              Get detailed answers about our water softener systems, installation, and maintenance.
            </p>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full text-left px-4 py-3 flex items-center justify-between text-sm hover:bg-sky-50 transition-colors"
              >
                <span className="pr-4 text-slate-800 font-medium">What is the capacity range of your water softener systems?</span>
                <span className="text-slate-500 text-xl font-light">+</span>
              </button>
              <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-sky-100">
                Our water softener systems range from 500 LPH to 50,000 LPH capacity, suitable for small commercial establishments to large industrial plants. We customize systems based on your specific water hardness levels and consumption requirements.
              </div>
            </div>
            <div className="bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full text-left px-4 py-3 flex items-center justify-between text-sm hover:bg-sky-50 transition-colors"
              >
                <span className="pr-4 text-slate-800 font-medium">How often do water softeners need regeneration?</span>
                <span className="text-slate-500 text-xl font-light">+</span>
              </button>
              <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-sky-100">
                Regeneration frequency depends on water hardness and usage. Typically, our systems regenerate automatically every 3-7 days for domestic use and 1-3 days for industrial applications. Our smart controllers optimize regeneration cycles based on actual water consumption.
              </div>
            </div>
            <div className="bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full text-left px-4 py-3 flex items-center justify-between text-sm hover:bg-sky-50 transition-colors"
              >
                <span className="pr-4 text-slate-800 font-medium">Can water softeners handle industrial-scale water treatment?</span>
                <span className="text-slate-500 text-xl font-light">+</span>
              </button>
              <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-sky-100">
                Yes, our industrial water softeners are designed for high-capacity operations up to 50,000 LPH. They feature robust construction, automated controls, and can handle continuous operation in demanding industrial environments like manufacturing, textiles, and power plants.
              </div>
            </div>
            <div className="bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full text-left px-4 py-3 flex items-center justify-between text-sm hover:bg-sky-50 transition-colors"
              >
                <span className="pr-4 text-slate-800 font-medium">What maintenance is required for water softener systems?</span>
                <span className="text-slate-500 text-xl font-light">+</span>
              </button>
              <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-sky-100">
                Regular maintenance includes salt refilling (monthly for domestic, weekly for industrial), resin cleaning quarterly, and annual servicing of valves and controls. Our AMC packages cover all maintenance needs with scheduled visits and emergency support.
              </div>
            </div>
            <div className="bg-white rounded-xl border border-sky-100 shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full text-left px-4 py-3 flex items-center justify-between text-sm hover:bg-sky-50 transition-colors"
              >
                <span className="pr-4 text-slate-800 font-medium">Do you provide installation and AMC services for water softeners?</span>
                <span className="text-slate-500 text-xl font-light">+</span>
              </button>
              <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-sky-100">
                Yes, we provide complete end-to-end services including site survey, system design, installation, commissioning, and annual maintenance contracts. Our team ensures proper setup and offers 24/7 support for all installed systems across Madhya Pradesh.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-sky-600 to-sky-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Industry Leaders</h2>
            <p className="text-sky-100">Delivering excellence in water treatment solutions across Bhopal</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">500+</p>
              <p className="text-sky-100 text-sm">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">1.2k+</p>
              <p className="text-sky-100 text-sm">Products Installed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-3xl md:text-4xl font-bold mb-2">200+</p>
              <p className="text-sky-100 text-sm">AMC Customers</p>
            </div>
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
                <a href={`tel:${BUSINESS_INFO.phones.business[0]}`}>
                  <Button variant="secondary" className="bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-xl font-bold shadow-lg whitespace-nowrap">
                    Call Now: {BUSINESS_INFO.phones.business[0]}
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="bg-sky-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-500/30 transition-all border border-white/20 whitespace-nowrap">
                    Visit Contact Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
