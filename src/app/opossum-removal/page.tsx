import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Opossum Removal Lafayette LA | Possum Under House | Acadiana Wildlife Control',
  description: `Professional opossum removal in Lafayette, LA and Acadiana. Possum trapping from under houses, crawlspaces, and decks. Humane removal and entry point sealing. Call ${BUSINESS.phone}.`,
  keywords: [
    'opossum under house Lafayette',
    'possum removal Acadiana',
    'opossum in crawlspace',
    'opossum removal Lafayette LA',
    'possum trapping Louisiana',
    'opossum removal near me',
    'possum under deck Lafayette',
  ],
  alternates: {
    canonical: '/opossum-removal',
  },
  openGraph: {
    title: 'Opossum Removal Lafayette LA | Acadiana Wildlife Control',
    description: `Professional opossum trapping and removal in Lafayette and Acadiana, LA. Humane methods. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'Are opossums dangerous?',
    answer:
      'While opossums are generally non-aggressive and prefer to avoid confrontation (they are famous for "playing dead"), they can bite if cornered or threatened. They carry fleas, ticks, and other parasites that can spread to your pets and family. Opossum droppings can contain harmful bacteria, and large accumulations under your home create unsanitary conditions. Their nesting habits can also damage insulation, ductwork, and wiring under your home in Lafayette or anywhere in Acadiana.',
  },
  {
    question: 'Why is an opossum under my house?',
    answer:
      'Opossums seek out warm, dark, sheltered spaces to nest — and the crawlspace under a Louisiana home is ideal. The humid, temperate climate in Lafayette and Acadiana means opossums are active year-round. They are attracted to pet food left outside, unsecured garbage, fruit trees, and compost piles. Gaps in foundation vents, broken crawlspace doors, and openings around pipes give opossums easy access under your home.',
  },
  {
    question: 'How do you remove opossums?',
    answer:
      'Acadiana Wildlife Control uses humane live trapping methods to remove opossums from under your home, deck, or outbuilding. Bill Richards places professional live traps at the opossum\'s entry and travel points. Once captured, the opossum is relocated away from your property. Bill then seals all entry points to prevent opossums — or any other wildlife — from getting back under your home.',
  },
  {
    question: 'Do opossums carry diseases?',
    answer:
      'Opossums can carry leptospirosis, tuberculosis, tularemia, and various parasites including fleas, ticks, and mites. While opossums are actually quite resistant to rabies due to their low body temperature, they still pose health risks through their droppings, urine, and the parasites they carry. This is why professional removal is important — especially when opossums are living under your home where their waste can affect indoor air quality.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Opossum Removal',
  description:
    'Professional opossum removal services in Lafayette, LA and Acadiana. Humane trapping, relocation, and crawlspace entry point sealing.',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lafayette',
      addressRegion: 'LA',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'Place',
    name: 'Acadiana, Louisiana',
  },
  serviceType: 'Opossum Removal',
};

export default function OpossumRemovalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <ServicePageTemplate
        serviceName="Opossum Removal"
        tagline="Mission Opossumible"
        icon="🐾"
        slug="opossum-removal"
        heroImage="/images/gallery/022_98bc37_cdbbef7003484546b0056352aa1f4ffd~mv2-full.webp"
        heroAlt="Opossum captured during professional wildlife removal service in Lafayette LA"
        problemTitle="Opossums Under Your House? Here's What to Know."
        problemText={[
          'Opossums are one of the most common nuisance wildlife species in Lafayette and throughout the Acadiana region. These nocturnal marsupials love to nest under houses, decks, porches, sheds, and outbuildings — anywhere that provides a dark, sheltered space. If you hear scratching or rustling sounds coming from under your home at night, there is a good chance you have an opossum problem.',
          'While opossums are often considered harmless, they create real problems when they move in under your home. Their droppings and urine accumulate under the structure, creating foul odors and unsanitary conditions. Opossums can damage insulation, tear into ductwork, and gnaw on wiring. They carry fleas and ticks that can infest your yard and eventually your home and pets.',
          'In South Louisiana, the warm climate means opossums are active and breeding year-round. A single opossum under your home can quickly become a family. Female opossums can have up to 13 babies in a litter, and they often have two litters per year. The longer you wait to address an opossum problem in your Lafayette home, the worse — and more expensive — it becomes.',
        ]}
        solutionTitle="Humane Opossum Trapping & Entry Point Sealing"
        solutionText={[
          'Bill Richards of Acadiana Wildlife Control provides professional, humane opossum removal throughout Lafayette and the surrounding Acadiana area. Using professional-grade live traps, Bill safely captures opossums without harm and relocates them away from your property.',
          'But trapping is only half the job. The real key to solving an opossum problem permanently is sealing the entry points. Bill inspects the entire perimeter of your home, identifying gaps in foundation vents, broken crawlspace doors, openings around plumbing penetrations, and any other access points. He then seals everything up with durable materials to make sure no opossum — or any other wildlife — can get back under your home.',
        ]}
        processSteps={[
          {
            title: 'Inspection',
            description:
              'Complete perimeter inspection of your home to identify opossum entry points, nesting areas, and the extent of activity under the structure.',
          },
          {
            title: 'Humane Trapping',
            description:
              'Professional live traps are placed at entry points and along opossum travel routes. Traps are monitored and checked regularly.',
          },
          {
            title: 'Removal & Relocation',
            description:
              'Captured opossums are safely removed from your property and relocated to appropriate habitat away from residential areas.',
          },
          {
            title: 'Entry Point Sealing',
            description:
              'All gaps, holes, and access points under your home are sealed with durable materials to prevent re-entry by opossums or other wildlife.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/022_98bc37_cdbbef7003484546b0056352aa1f4ffd~mv2-full.webp',
            alt: 'Opossum removed from under a home in Lafayette Louisiana',
          },
        ]}
        relatedServices={[
          'raccoon-removal',
          'wildlife-exclusion',
          'rodent-control',
          'feral-cat-removal',
        ]}
      />
    </>
  );
}
