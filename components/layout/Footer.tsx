import Link from 'next/link';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-sky-100 mb-2">Your Trusted Partner for Pure Water Solutions</p>
            <p className="text-sm text-sky-200 mb-2">Serving Bhopal with Excellence Since 2003</p>
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
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    {BUSINESS_INFO.phones.business.map((phone, index) => (
                      <div key={index} className="flex items-center">
                        <a
                          href={`tel:${phone}`}
                          className="text-sky-100 hover:text-cyan-200 transition-colors font-medium"
                        >
                          {phone}
                        </a>
                        {index < BUSINESS_INFO.phones.business.length - 1 && (
                          <span className="text-sky-400 mx-1 hidden sm:inline">|</span>
                        )}
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
                  <h5 className="font-semibold text-white mb-1">Visit Us</h5>
                  <address className="text-sm text-sky-200 not-italic break-words">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}<br />
                    {BUSINESS_INFO.address.pinCode}
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
                href="https://www.facebook.com/sharer.php?u=https://www.chitranshagency.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/cws/share?url=https://www.chitranshagency.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-600/25 transform hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/share?url=https://www.chitranshagency.in/&text=Chitransh%20Agency"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/25 transform hover:scale-105 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
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
