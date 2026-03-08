import type { Metadata } from 'next';
import { Merriweather, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import MobileCallBar from '@/components/MobileCallBar';
import Footer from '@/components/Footer';
import { BUSINESS } from '@/lib/constants';

const merriweather = Merriweather({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.acadianawildlifecontrol.com'),
  title: 'Acadiana Wildlife Control | Wildlife Removal Lafayette LA',
  description:
    'Professional wildlife removal in Lafayette, LA and all of Acadiana. Licensed trapper offering snake removal, raccoon trapping, opossum removal, nutria control, armadillo removal, rodent control, and wildlife exclusion. Serving Acadiana since 2003. Call 337-254-7475.',
  keywords: [
    'wildlife removal Lafayette LA',
    'snake removal Acadiana',
    'raccoon trapping Lafayette',
    'animal control Lafayette Louisiana',
    'wildlife exclusion',
    'nuisance wildlife removal',
    'Acadiana Wildlife Control',
    'armadillo removal',
    'nutria control Louisiana',
    'opossum removal',
    'rodent control Lafayette',
    'feral cat removal',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Acadiana Wildlife Control | Wildlife Removal Lafayette LA',
    description:
      'Professional wildlife removal in Lafayette, LA and all of Acadiana. Licensed trapper since 2003. Call 337-254-7475.',
    type: 'website',
    locale: 'en_US',
    images: ['/images/og-default.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS.name,
  description: BUSINESS.tagline,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  founder: {
    '@type': 'Person',
    name: BUSINESS.owner,
  },
  foundingDate: BUSINESS.since,
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 30.2241,
      longitude: -92.0198,
    },
    geoRadius: '80000',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lafayette',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Louisiana Wildlife Trapper Permit',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Louisiana Department of Wildlife and Fisheries',
    },
  },
  priceRange: '$$',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased pb-16 md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-gold-bright focus:text-bayou focus:px-4 focus:py-2 focus:text-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
