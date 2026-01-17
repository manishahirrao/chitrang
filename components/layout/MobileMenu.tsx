'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote?: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenQuote }: MobileMenuProps) {
  const pathname = usePathname();
  const lastPathnameRef = useRef(pathname);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Close menu only when route actually changes (skip initial mount)
  useEffect(() => {
    if (lastPathnameRef.current !== pathname) {
      lastPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Dropdown */}
      <nav className={`md:hidden bg-white shadow-xl absolute top-full left-0 right-0 border-t border-gray-100 transition-all duration-300 transform ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } z-50`}>
        <div className="max-h-[80vh] overflow-y-auto">
          <ul className="py-4 px-4 sm:px-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block font-semibold transition-all duration-200 py-3 px-4 rounded-lg ${
                    isActive(link.href)
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-800 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      {/* Add icon based on route */}
                      {link.href === '/' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {link.href === '/about' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {link.href === '/products' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                      {link.href === '/gallery' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4-5 4 4 4-6 4 7M4 6h16" />
                        </svg>
                      )}
                      {link.href === '/contact' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {link.label}
                    </span>
                    {isActive(link.href) && (
                      <svg className="w-5 h-5 text-sky-600 animate-fade-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </Link>
              </li>
            ))}
            
            {/* Call Now and Get Quote buttons */}
            <li className="pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                  onClick={onClose}
                  className="bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold text-sm text-center transition-colors"
                >
                  Call Now
                </a>
                <button
                  onClick={() => {
                    onOpenQuote?.();
                    onClose();
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold text-sm transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
    </>
  );
}
