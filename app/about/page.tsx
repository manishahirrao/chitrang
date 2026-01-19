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
          <div className="flex-1 max-w-sm w-full">
            <div className="bg-sky-900/40 rounded-2xl overflow-hidden shadow-2xl border border-sky-700/70">
              <img 
                src="/images/products/aquagrand-ro-water-purifier.webp" 
                alt="Aquagrand RO Water Purifier" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sky-500 mb-3 font-light">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Building Excellence Together</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Decades of excellence in water purification and cleaning solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative group">
                {/* Decorative background elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Main card with enhanced styling */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-sky-200 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                  {/* Founder image with modern frame and effects */}
                  <div className="relative mb-6">
                    {/* Gradient overlay frame */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-indigo-600/20 rounded-2xl"></div>
                    
                    {/* Image container with aspect ratio and effects */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-inner">
                      <Image
                        src="/images/founder.jpeg"
                        alt={BUSINESS_INFO.owner}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                      
                      {/* Subtle gradient overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-30"></div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-sky-400/50 rounded-tl-lg"></div>
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-sky-400/50 rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-sky-400/50 rounded-bl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-sky-400/50 rounded-br-lg"></div>
                  </div>
                  
                  {/* Enhanced text section with better typography */}
                  <div className="text-center space-y-3">
                    {/* Name with enhanced styling */}
                    <h3 className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-slate-900 to-sky-700 bg-clip-text text-transparent">
                      {BUSINESS_INFO.owner}
                    </h3>
                    
                    {/* Role with badge styling */}
                    <div className="inline-flex items-center">
                      <span className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {BUSINESS_INFO.ownerRole}
                      </span>
                    </div>
                    
                    {/* Enhanced description with better spacing */}
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base px-2">
                      Founder of Chitransh Agency, bringing over 30 years of expertise in water purification and cleaning solutions to serve the community with dedication and trust.
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="flex justify-center items-center space-x-2 pt-2">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-sky-400"></div>
                      <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                      <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-sky-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <div className="bg-white rounded-3xl shadow-xl border border-sky-100 p-6 sm:p-8">
                <div className="mb-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Biography of Mr. Hari Om Bhatnagar</h3>
                  <p className="text-slate-600 mt-2">Director – Chitransh Agency</p>
                </div>

                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Mr. Hari Om Bhatnagar is a seasoned professional with extensive experience in the water purification and home appliances industry, spanning more than two decades. His journey reflects dedication, leadership, and a strong commitment to customer service.
                  </p>
                  <p>
                    He began his professional career on 10 May 1996 with Eureka Forbes, working in the Water Purifier Division. Through consistent performance and hands-on field experience, he contributed significantly to the organization until 31 March 2003.
                  </p>
                  <p>
                    With a vision to build his own enterprise, Mr. Bhatnagar established Chitransh Agency on 1 April 2003. Operating from Hoshangabad District, the agency managed direct operations and successfully handled the franchise of water purifiers and vacuum cleaners. Under his leadership, Chitransh Agency grew steadily and built a strong reputation in the region from 1 April 2003 to 31 March 2008.
                  </p>
                  <p>
                    In April 2008, Mr. Bhatnagar expanded his professional role by moving to Bhopal, where he joined the AquaSure Division as a Territory Head. In this leadership position, he was responsible for managing operations, sales growth, and regional development, serving with dedication until 1 November 2010.
                  </p>
                  <p>
                    Driven by entrepreneurial spirit and customer-centric values, Mr. Hari Om Bhatnagar re-established Chitransh Agency on 1 November 2010. Since then, the agency has been continuously serving customers with honesty, quality products, and reliable service.
                  </p>
                  <p>
                    Today, Chitransh Agency, under the guidance of Mr. Hari Om Bhatnagar, stands as a trusted name in the industry, committed to delivering excellence and customer satisfaction. His journey is a testament to perseverance, industry expertise, and unwavering dedication to serve.
                  </p>
                </div>
              </div>
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
              <div className="mt-6 bg-sky-50 rounded-2xl p-6 border border-sky-200">
                <p className="text-sm font-semibold text-slate-900 mb-2">What you can expect</p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">Honest guidance based on your water quality and daily usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">Neat installation and clear product demo for your family or staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiCheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">Fast support for service, spares, and scheduled maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
