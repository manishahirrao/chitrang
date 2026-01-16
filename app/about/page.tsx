import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import { HiCheckCircle } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}. Leading provider of RO Water Purifiers and Vacuum Cleaners in Bhopal since 2003.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.webp"
            alt="About"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 flex flex-col lg:flex-row items-center gap-10 text-white z-10">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] mb-4 text-sky-200 font-light">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Trusted <span className="text-sky-300">Water Solutions</span> Since 2003
            </h1>
            <p className="text-base md:text-lg text-sky-100 max-w-2xl mb-8 leading-relaxed font-light">
              Established in 2003, Chitransh Agency has been serving the people of Bhopal with premium quality water purification systems and home cleaning solutions. We are your trusted partner for pure water and healthy living.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
              <Link href="/products">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-white hover:text-sky-900 transition-all">
                  Our Products
                </button>
              </Link>
            </div>
          </div>
          
          {/* Side Image */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img 
                src="/images/home-hero1.jpg" 
                alt="About Chitransh Agency" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {BUSINESS_INFO.registeredName}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Established in 2003, Chitransh Agency has been serving the people of Bhopal with premium quality water purification systems and home cleaning solutions. We are a proprietorship company acknowledged among the noteworthy manufacturers, traders, retailers, and wholesalers of the best quality commercial water purifiers, water softeners, vacuum cleaners, and related products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-sky-600 font-semibold mb-4">
                "{BUSINESS_INFO.tagline}"
              </p>
              <p className="text-slate-600 leading-relaxed">
                We are committed to providing our customers with the highest quality water purification and home cleaning products, backed by exceptional service and support. Our goal is to ensure every customer has access to clean, safe water and a healthy living environment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the leading water treatment solutions provider in Central India, known for innovation, quality, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Excellence in Water Treatment</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Quality Products</h3>
              <p className="text-slate-600 leading-relaxed">We offer only the best quality products from trusted manufacturers</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-slate-600 leading-relaxed">Our experienced team provides professional installation and service</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Competitive Pricing</h3>
              <p className="text-slate-600 leading-relaxed">Best prices in Bhopal without compromising on quality</p>
            </div>
          </div>

          {/* Business Details */}
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-200">
            <div className="text-center mb-6">
              <p className="text-xs uppercase tracking-[0.4em] text-sky-500 mb-3 font-light">Business Information</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Company Details</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-1">Nature of Business</p>
                <p className="font-semibold text-slate-900">Service Provider</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-1">Year of Establishment</p>
                <p className="font-semibold text-slate-900">2003</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-1">Legal Status</p>
                <p className="font-semibold text-slate-900">Proprietorship</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-1">Location</p>
                <p className="font-semibold text-slate-900">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
