'use client';

import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              This Privacy Policy explains how {BUSINESS_INFO.name} collects, uses, and protects your information when you visit our website or contact us.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Information We Collect</h2>
              <p>
                When you submit a form or contact us, we may collect your name, phone number, email address, and the message/details you share.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">How We Use Your Information</h2>
              <p>
                We use your information to respond to inquiries, provide quotations, schedule service visits, and improve our customer support.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Sharing of Information</h2>
              <p>
                We do not sell your personal data. We may share information only when required to provide services (e.g., installation scheduling) or when legally required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Data Security</h2>
              <p>
                We take reasonable steps to protect your information. However, no online system is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Contact</h2>
              <p>
                If you have questions about this policy, contact us at {BUSINESS_INFO.primaryEmail}.
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
