'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' 
          : 'bg-white shadow-md'
      }`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Animation */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold text-cyan-600 group-hover:text-cyan-700 transition-all duration-300 transform group-hover:scale-105">
                {BUSINESS_INFO.name}
              </div>
              <div className="w-8 h-8 bg-cyan-500 rounded-full animate-pulse-slow"></div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-base font-medium transition-all duration-300 hover:text-cyan-600 animate-fade-in-down ${
                    isActive(link.href)
                      ? 'text-cyan-600'
                      : 'text-gray-700'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                  {/* Animated Underline */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 transform transition-transform duration-300 ${
                    isActive(link.href)
                      ? 'scale-x-100'
                      : 'scale-x-0'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Quote and Call Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phones.business[0]}`}
                className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Call Now
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-sky-900 px-6 py-3 rounded-lg font-medium hover:bg-sky-50 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-700 hover:text-cyan-600 transition-all duration-300 hover:bg-cyan-50 rounded-lg group"
              aria-label="Open menu"
            >
              <HiMenu className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Water Flow Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-300"
          style={{ opacity: isScrolled ? 1 : 0 }}></div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
