import Link from 'next/link';
import Button from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[var(--color-primary-600)]">404</h1>
          <div className="text-6xl mb-4">💧</div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or doesn't exist.
        </p>

        {/* Navigation Options */}
        <div className="space-y-4">
          <div>
            <Link href="/">
              <Button variant="primary" className="mb-4">
                Go to Homepage
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Or visit one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--color-primary-600)] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
