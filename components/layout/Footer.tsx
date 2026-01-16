import Link from 'next/link';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-sky-100 mb-2">{BUSINESS_INFO.tagline}</p>
            <p className="text-sm text-sky-200">{BUSINESS_INFO.owner} - {BUSINESS_INFO.ownerRole}</p>
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

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <HiPhone className="w-5 h-5 text-sky-200 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-white mb-1">Call Us</h5>
                  <div className="space-y-1">
                    {BUSINESS_INFO.phones.business.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone}`}
                        className="text-sky-100 hover:text-cyan-200 transition-colors"
                      >
                        {phone}
                      </a>
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
                      className="text-sky-100 hover:text-cyan-200 transition-colors"
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
                  <address className="text-sm text-sky-200 not-italic">
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
                href={`https://wa.me/${BUSINESS_INFO.phones.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-800 mt-8 pt-8 text-center">
          <div className="space-y-2">
            <p className="text-sm text-sky-300">
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <p className="text-xs text-sky-400">
              GST No. 23BACPB3942D1ZG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
