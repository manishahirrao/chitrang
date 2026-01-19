'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

function IconPhone(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.09a2 2 0 0 1 2.11-.45c.83.25 1.7.45 2.6.57A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconMail(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconMapPin(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconSend(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2Z" />
    </svg>
  );
}

function IconCheckCircle(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m22 4-10 10-3-3" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.webp"
            alt="Contact"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Contact <span className="text-sky-400">{BUSINESS_INFO.name}</span>
            </h1>
            <p className="text-lg sm:text-xl text-sky-100 leading-relaxed">
              Call, email, or send us a message. We'll help you choose the right solution for your home or business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 md:p-8 border border-slate-100 overflow-hidden">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">Send us a message</h2>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconCheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-600">We’ll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50/50 text-sm sm:text-base"
                          placeholder="Rakesh Das"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50/50 text-sm sm:text-base"
                          placeholder="rakesh@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50/50 text-sm sm:text-base"
                          placeholder="98006 20085"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all bg-slate-50/50 text-sm sm:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="service-request">Service Request</option>
                        <option value="quotation">Request Quotation</option>
                        <option value="complaint">Complaint</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none bg-slate-50/50 text-sm sm:text-base"
                        placeholder="Tell us about your requirements or questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-sky-600 to-sky-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-sky-700 hover:to-sky-800 shadow-lg shadow-sky-500/30 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <IconSend className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Cards */}
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 sm:p-6 border border-slate-100 overflow-hidden">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/30">
                      <IconPhone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">Phone</h4>
                      <div className="space-y-1">
                        {BUSINESS_INFO.phones.business.map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:${phone}`}
                            className="block text-sky-600 hover:text-sky-700 font-medium transition-colors text-sm"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                      <IconMail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                      <a
                        href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                        className="text-sky-600 hover:text-sky-700 font-medium transition-colors text-sm"
                      >
                        {BUSINESS_INFO.primaryEmail}
                      </a>
                    </div>
                  </div>

                  {/* Head Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                      <IconMapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">Head Office</h4>
                      <address className="text-slate-600 text-sm leading-relaxed not-italic">
                        49 LALA LAJPAT RAI COLONY RAISEN ROAD<br />
                        BHOPAL, Madhya Pradesh<br />
                        462023
                      </address>
                    </div>
                  </div>

                  {/* Branch Office */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                      <IconMapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">Branch Office</h4>
                      <address className="text-slate-600 text-sm leading-relaxed not-italic">
                        163, Narayan Nagar<br />
                        naradapuram Road<br />
                        Bhopal 462026
                      </address>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <IconClock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">Business Hours</h4>
                      <div className="text-slate-600 text-sm space-y-1">
                        <p className="font-medium text-slate-900">Monday to Sunday</p>
                        <p>9:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                      <IconPhone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-2">WhatsApp</h4>
                      <a
                        href={`https://wa.me/91${BUSINESS_INFO.phones.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors text-sm"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-3xl p-4 sm:p-6 text-white shadow-xl shadow-sky-500/30 overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                  <p className="text-sky-100 text-sm">
                    We typically respond to all inquiries within 2-4 hours during business hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white p-4 lg:p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <IconMapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold">{BUSINESS_INFO.name}</h3>
                    <p className="text-sky-100 text-sm lg:text-base">
                      {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pinCode}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-96 lg:h-[500px] bg-slate-100">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2475456789!2d77.4127!3d23.2438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e8e5c5c5c5%3A0x5c5c5c5c5c5c5c5!2s${encodeURIComponent(BUSINESS_INFO.address.street)}%2C%20${encodeURIComponent(BUSINESS_INFO.address.city)}!5e0!3m2!1sen!2sin!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`${BUSINESS_INFO.name} Office Location`}
                />
              </div>
              
              <div className="bg-sky-50 p-4 lg:p-6 border-t border-sky-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(`${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pinCode}`)}`, '_blank')}
                    className="flex-1 bg-sky-600 text-white px-6 py-3 rounded-xl font-bold text-sm lg:text-base hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <IconMapPin className="w-5 h-5" />
                    Get Directions
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.google.com/maps/place/${encodeURIComponent(`${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state} ${BUSINESS_INFO.address.pinCode}`)}`, '_blank')}
                    className="flex-1 bg-white text-sky-600 border-2 border-sky-600 px-6 py-3 rounded-xl font-bold text-sm lg:text-base hover:bg-sky-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <IconMapPin className="w-5 h-5" />
                    View Larger Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}