'use client';

import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Cookie Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              This Cookie Policy explains how {BUSINESS_INFO.name} uses cookies and similar technologies on our website.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device to help websites work properly and improve user experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">How We Use Cookies</h2>
              <p>
                We may use cookies for basic site functionality and to understand general usage patterns (non-sensitive information).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Managing Cookies</h2>
              <p>
                You can control cookies through your browser settings. Disabling cookies may impact certain website features.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Contact</h2>
              <p>
                For questions, contact us at {BUSINESS_INFO.primaryEmail}.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="text-sky-700 hover:text-sky-800 font-semibold">
              Back to Home
            </Link>
            <Link href="/contact" className="text-sky-700 hover:text-sky-800 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
