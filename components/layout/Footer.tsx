import Link from 'next/link';
import Image from 'next/image';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt={`${BUSINESS_INFO.name} Logo`}
                width={60}
                height={60}
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <h3 className="text-xl font-bold text-white">{BUSINESS_INFO.name}</h3>
            </div>
            <p className="text-sky-100 mb-2">Your Trusted Partner for Pure Water Solutions</p>
            <p className="text-sm text-sky-200 mb-2">Serving Bhopal with Excellence for over 30 Years</p>
            <p className="text-xs text-sky-400 mt-3">GST No. 23BACPB3942D1ZG</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 4).map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sky-100 hover:text-cyan-200 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sky-100 hover:text-cyan-200 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sky-100 hover:text-cyan-200 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sky-100 hover:text-cyan-200 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <HiPhone className="w-5 h-5 text-sky-200 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-semibold text-white mb-2">Call Us</h5>
                  <div className="flex flex-col gap-2">
                    {BUSINESS_INFO.phones.business.map((phone, index) => (
                      <div key={index} className="flex items-center">
                        <a
                          href={`tel:${phone}`}
                          className="text-sky-100 hover:text-cyan-200 transition-colors font-medium"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <HiMail className="w-5 h-5 text-sky-200 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Email Us</h5>
                  <div className="space-y-1">
                    <a
                      href={`mailto:${BUSINESS_INFO.primaryEmail}`}
                      className="text-sky-100 hover:text-cyan-200 transition-colors break-words"
                    >
                      {BUSINESS_INFO.primaryEmail}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-sky-200 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Head Office</h5>
                  <address className="text-sm text-sky-200 not-italic break-words">
                    49 LALA LAJPAT RAI COLONY RAISEN ROAD<br />
                    BHOPAL, Madhya Pradesh<br />
                    462023
                  </address>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-sky-200 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Branch Office</h5>
                  <address className="text-sm text-sky-200 not-italic break-words">
                    163, Narayan Nagar<br />
                    naradapuram Road<br />
                    Bhopal 462026
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@chitranshagency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/p/14XPJzMcVo6/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/hariombhatnagar?utm_source=qr&igsh=d2pmNTFvMm42MHM0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white p-3 rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 hover:shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <p className="text-sky-300">
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <span className="text-sky-400 hidden sm:inline">|</span>
            <p className="text-sky-300">
              Designed by{' '}
              <a 
                href="https://adwikindia.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
              >
                AdwikIndia
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
