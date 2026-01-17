'use client';

import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              These Terms of Service govern your use of the {BUSINESS_INFO.name} website and services.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Service Information</h2>
              <p>
                Product availability, pricing, and timelines may vary. Final quotation and scope will be confirmed after requirement discussion.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">User Responsibilities</h2>
              <p>
                You agree to provide accurate information when requesting a quote or service visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Warranty & Service</h2>
              <p>
                Warranty is provided as per manufacturer terms. Installation and service terms may vary based on product type and site conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Limitation of Liability</h2>
              <p>
                We are not liable for indirect losses. Any claims will be limited to the extent allowed by applicable law.
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
