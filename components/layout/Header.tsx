'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import QuoteModal from '@/components/QuoteModal';

// Icon components for better performance
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ProductsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const ServicesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3a1.5 1.5 0 00-1.5 1.5v.75H6.75A1.5 1.5 0 005.25 6.75v1.5H4.5A1.5 1.5 0 003 9.75v4.5A1.5 1.5 0 004.5 15.75h.75v1.5A1.5 1.5 0 006.75 18.75h1.5v.75A1.5 1.5 0 009.75 21h4.5a1.5 1.5 0 001.5-1.5v-.75h1.5a1.5 1.5 0 001.5-1.5v-1.5h.75A1.5 1.5 0 0021 14.25v-4.5A1.5 1.5 0 0019.5 8.25h-.75v-1.5a1.5 1.5 0 00-1.5-1.5h-1.5V4.5A1.5 1.5 0 0014.25 3h-4.5z" />
  </svg>
);

const GalleryIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4-5 4 4 4-6 4 7M4 6h16" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const iconMap: Record<string, () => React.ReactElement> = {
  '/': HomeIcon,
  '/about': AboutIcon,
  '/services': ServicesIcon,
  '/products': ProductsIcon,
  '/gallery': GalleryIcon,
  '/contact': ContactIcon
};

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const menuRef = useRef(null);

  const handleNavigation = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const openQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(true);
    closeMobileMenu();
  }, [closeMobileMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const isActive = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group min-w-0" onClick={closeMobileMenu}>
              <div className="text-lg sm:text-2xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-all duration-300 transform group-hover:scale-105 truncate">
                {BUSINESS_INFO.name}
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-cyan-500 rounded-full animate-pulse flex-shrink-0"></div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-cyan-600 ${
                    isActive(link.href)
                      ? 'text-cyan-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 transform transition-transform duration-300 ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-sky-900 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300 border border-gray-200"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden flex flex-col justify-center items-center bg-none border-none cursor-pointer p-2 rounded-lg transition-all duration-200 relative z-50 ${
                isMobileMenuOpen ? 'bg-sky-50' : 'hover:bg-gray-50'
              }`}
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-opacity duration-300"
          style={{ opacity: isScrolled ? 1 : 0 }}
        ></div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[35] transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav 
        ref={menuRef}
        id="mobile-menu"
        className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform ${
          isMobileMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible pointer-events-none'
        } z-40`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
          <ul className="py-2 px-4 sm:px-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const Icon = iconMap[link.href];
              const active = isActive(link.href);
              
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => { 
                      closeMobileMenu(); 
                      handleNavigation(); 
                    }}
                    className={`block font-semibold transition-all duration-200 py-3 px-4 rounded-lg ${
                      active
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-gray-800 hover:text-sky-600 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        {Icon && <Icon />}
                        {link.label}
                      </span>
                      {active && <ChevronIcon />}
                    </div>
                  </Link>
                </li>
              );
            })}
            
            {/* CTA Buttons */}
            <li className="pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                  onClick={closeMobileMenu}
                  className="bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white py-3 rounded-lg font-semibold text-sm text-center transition-colors touch-manipulation"
                >
                  Call Now
                </a>
                <button
                  onClick={openQuoteModal}
                  className="bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white py-3 rounded-lg font-semibold text-sm transition-colors touch-manipulation"
                >
                  Get Quote
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}