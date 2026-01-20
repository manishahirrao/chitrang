import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import { HiCheckCircle } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}. Leading provider of RO Water Purifiers and Vacuum Cleaners in Bhopal for over 30 years.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
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
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 text-white z-10 min-h-[50vh] lg:min-h-[60vh]">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-sky-200 font-light">About Us</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Trusted <span className="text-sky-300">Water Solutions</span> for Over 30 Years
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light">
              Chitransh Agency has been serving the people of Bhopal with premium quality water purification systems and home cleaning solutions. We are your trusted partner for pure water and healthy living.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
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
          <div className="flex-1 max-w-xs w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img 
                src="/images/products/aquaguard-ro-water-purifier.webp" 
                alt="Aquaguard RO Water Purifier" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
{/* Our Journey Section */}
      <section className="py-8 bg-gradient-to-br from-sky-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-sky-500"></div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-600 font-semibold">Our Journey</p>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-sky-500"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Building Excellence Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Decades of excellence in water purification and cleaning solutions
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl border border-sky-100 shadow-lg shadow-sky-900/5 p-4 sm:p-6 after:content-[''] after:block after:clear-both">
            {/* Founder Image */}
            <div className="relative mb-4 h-80 w-60 overflow-hidden rounded-xl shadow-lg ring-1 ring-sky-200/60 sm:float-right sm:mb-3 sm:ml-6 lg:h-96 lg:w-72 z-10">
              <Image
                src="/images/founder.jpeg"
                alt={BUSINESS_INFO.owner}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 240px, 288px"
                priority
              />
            </div>

            {/* Left Column - Text Content */}
            <div className="space-y-6">
              {/* Name and Title */}
              <div className="border-b border-slate-200/70 pb-4 ">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                  {BUSINESS_INFO.owner}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 font-semibold">{BUSINESS_INFO.ownerRole}</p>
              </div>

              {/* Introduction */}
              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p className="text-sm sm:text-base">
                  Founder of Chitransh Agency, bringing over 30 years of expertise in water purification and cleaning solutions to serve the community with dedication and trust.
                </p>
              </div>

              {/* Biography Title */}
              <div className="pt-2">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                  Biography
                </h4>
              </div>

              {/* Biography Content */}
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Hari Om Bhatnagar is a seasoned professional with extensive experience in the water purification and home appliances industry, spanning more than two decades. His journey reflects dedication, leadership, and a strong commitment to customer service.
                </p>
                
                <p>
                  He began his professional career on 10 May 1996 with Eureka Forbes, working in the Water Purifier Division. Through consistent performance and hands-on field experience, he contributed significantly to the organization until 31 March 2003.
                </p>
                
                <p>
                  With a vision to build his own enterprise, Mr. Bhatnagar established Chitransh Agency on 1 April 2003. Operating from Hoshangabad District, the agency managed direct operations and successfully handled the franchise of water purifiers and vacuum cleaners. Under his leadership, Chitransh Agency grew steadily and built a strong reputation in the region from 1 April 2003 to 31 March 2008.
                </p>
                
                <p>
                  In April 2008, Mr. Bhatnagar expanded his professional role by moving to Bhopal, where he joined the AquaSure Division as a Territory Head. In this leadership position, he was responsible for managing operations, sales growth, and regional development, serving with dedication until 30 October 2010.
                </p>
                
                <p>
                  Driven by entrepreneurial spirit and customer-centric values, Mr. Hari Om Bhatnagar re-established Chitransh Agency on 1 November 2010. Since then, the agency has been continuously serving customers with honesty, quality products, and reliable service.
                </p>
                
                <p className="font-medium text-slate-800">
                  Today, Chitransh Agency, under the guidance of Mr. Hari Om Bhatnagar, stands as a trusted name in the industry, committed to delivering excellence and customer satisfaction. His journey is a testament to perseverance, industry expertise, and unwavering dedication to serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What We Do</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We supply, install, and service a complete range of water treatment and cleaning systems for residential, commercial, and industrial needs. We help you select the correct capacity and configuration, so you get consistent performance and lower maintenance.
              </p>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/products/kent-ace-ro-water-purifier.webp"
                  alt="Water purification products"
                  fill
                  className="object-contain"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Who We Serve</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Homes, apartments, offices, restaurants, schools, hospitals, and industrial units across Bhopal and nearby areas—anywhere clean water and reliable uptime matter.
              </p>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/home-hero1.jpg"
                  alt="Commercial and residential clients"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">What We Focus On</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Correct selection, clean installation, and dependable after-sales. Whether it's a domestic RO or a commercial plant, we make sure the system is installed properly and stays supported.
              </p>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/contact-hero.webp"
                  alt="Professional installation and service"
                  fill
                  className="object-cover"
                  sizes="100%"
                />
              </div>
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
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 border border-sky-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">On-Time Service</h3>
              <p className="text-slate-600 leading-relaxed">Quick response for installations, servicing, and spare parts support</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Commitment to Quality</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Every product we sell and install meets strict quality standards. We work with leading brands like Kent, LG, and Eureka Forbes to ensure you get reliable, long-lasting water treatment solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-white rounded-lg px-3 py-2 border border-sky-200">
                    <p className="text-xs font-semibold text-sky-600">ISO Certified</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 border border-sky-200">
                    <p className="text-xs font-semibold text-sky-600">Warranty Protected</p>
                  </div>
                  <div className="bg-white rounded-lg px-3 py-2 border border-sky-200">
                    <p className="text-xs font-semibold text-sky-600">Expert Support</p>
                  </div>
                </div>
              </div>
              <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/images/products/kent-automatic-water-softener.webp"
                  alt="Quality water treatment equipment"
                  fill
                  className="object-contain"
                  sizes="100%"
                />
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-200 mb-3 font-light">Need the right solution?</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Talk to our team for the best fit</h3>
                <p className="text-sky-100 leading-relaxed">
                  Share your water issue, location, and daily usage. We’ll recommend the right purifier/softener capacity and guide you on installation, AMC, and maintenance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                  className="bg-white text-sky-900 px-8 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-sky-50 transition-all transform hover:scale-105"
                >
                  Call Now
                </a>
                <Link href="/contact">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-white hover:text-sky-900 transition-all">
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
        </div>
      </section>
    </div>
  );
}
