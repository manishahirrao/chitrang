import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CatalogueButton from "@/components/CatalogueButton";
import { BUSINESS_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BUSINESS_INFO.domain}`),
  title: {
    default: `${BUSINESS_INFO.name} | RO Water Purifiers & Vacuum Cleaners in Bhopal`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}. Leading provider of RO Water Purifiers, Vacuum Cleaners, and Water Softeners in Bhopal. Contact us at ${BUSINESS_INFO.phones.business[0]}.`,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  keywords: [
    "RO Water Purifier",
    "Vacuum Cleaner",
    "Water Softener",
    "Commercial Water Purifier",
    "Bhopal",
    "Chitransh Agency",
    "Water Purification",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${BUSINESS_INFO.domain}`,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} | RO Water Purifiers & Vacuum Cleaners`,
    description: `${BUSINESS_INFO.tagline}. Leading provider of RO Water Purifiers, Vacuum Cleaners, and Water Softeners in Bhopal.`,
    images: [
      {
        url: '/images/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Water Purification & Cleaning Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | RO Water Purifiers & Vacuum Cleaners`,
    description: `${BUSINESS_INFO.tagline}. Leading provider of RO Water Purifiers, Vacuum Cleaners, and Water Softeners in Bhopal.`,
    images: ['/images/home-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: BUSINESS_INFO.name,
              image: `https://${BUSINESS_INFO.domain}/images/home-hero.jpg`,
              logo: `https://${BUSINESS_INFO.domain}/favicon.ico`,
              url: `https://${BUSINESS_INFO.domain}`,
              telephone: BUSINESS_INFO.phones.business[0],
              email: BUSINESS_INFO.primaryEmail,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_INFO.address.street,
                addressLocality: BUSINESS_INFO.address.city,
                addressRegion: BUSINESS_INFO.address.state,
                postalCode: BUSINESS_INFO.address.pinCode,
                addressCountry: "IN",
              },
              openingHours: "Mo-Su 09:00-21:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen pt-16 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CatalogueButton />
      </body>
    </html>
  );
}

