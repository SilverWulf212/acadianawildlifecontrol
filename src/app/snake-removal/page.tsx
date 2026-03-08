import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Snake Removal Lafayette LA | Copperhead & Water Moccasin Removal | Acadiana Wildlife Control',
  description: `Professional snake removal in Lafayette, LA and Acadiana. Copperhead, water moccasin, and rat snake removal from homes, garages, and crawlspaces. Same-day emergency response. Call ${BUSINESS.phone}.`,
  keywords: [
    'snake removal Lafayette LA',
    'copperhead in my house',
    'snake in garage Louisiana',
    'venomous snake removal Acadiana',
    'snake catcher Lafayette',
    'water moccasin removal Louisiana',
    'snake removal near me',
    'copperhead removal Lafayette',
  ],
  alternates: {
    canonical: '/snake-removal',
  },
  openGraph: {
    title: 'Snake Removal Lafayette LA | Acadiana Wildlife Control',
    description: `Venomous and non-venomous snake removal in Lafayette and Acadiana, LA. Same-day emergency service. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'What snakes are common in Lafayette and Acadiana?',
    answer:
      'The most common snakes we encounter in the Lafayette and Acadiana area include copperheads, water moccasins (cottonmouths), rat snakes, king snakes, garter snakes, and ribbon snakes. Copperheads and water moccasins are the two venomous species that homeowners need to be most concerned about. Louisiana is home to several venomous species, and the warm, humid climate of South Louisiana makes it an ideal habitat for snakes year-round.',
  },
  {
    question: 'Are copperheads dangerous?',
    answer:
      'Yes, copperheads are venomous and their bites require immediate medical attention. While copperhead bites are rarely fatal to adults, they cause intense pain, swelling, and tissue damage. They are especially dangerous to children, elderly individuals, and pets. Copperheads are masters of camouflage and often hide in leaf litter, woodpiles, and around foundations — making them hard to spot until it is too late. If you see a copperhead on your property in Lafayette or anywhere in Acadiana, do not attempt to handle it yourself.',
  },
  {
    question: 'What should I do if I see a snake in my house or garage?',
    answer:
      'Stay calm and keep a safe distance — at least six feet. Do not attempt to kill or capture the snake yourself, as this is when most bites occur. Keep children and pets away from the area. If possible, close the door to the room where the snake is located to contain it. Then call Acadiana Wildlife Control immediately at ' +
      BUSINESS.phone +
      '. Bill Richards provides same-day emergency snake removal service throughout Lafayette and Acadiana.',
  },
  {
    question: 'How quickly can you respond to a snake emergency?',
    answer:
      'We understand that finding a snake in your home is terrifying, which is why we offer same-day emergency response for snake removal calls in Lafayette and the surrounding Acadiana area. In most cases, Bill can be at your location within a few hours of your call. For venomous snake situations, we prioritize response time to keep your family safe.',
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
  name: 'Snake Removal',
  description:
    'Professional snake removal services in Lafayette, LA and Acadiana. Safe removal of venomous and non-venomous snakes including copperheads and water moccasins.',
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
  serviceType: 'Snake Removal',
};

export default function SnakeRemovalPage() {
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
        serviceName="Snake Removal"
        tagline="For Goodness Snakes"
        icon="🐍"
        slug="snake-removal"
        heroImage="/images/gallery/019_98bc37_c0566cb7d72c4274b62c769bcb107b2c~mv2-full.webp"
        heroAlt="Bill Richards of Acadiana Wildlife Control safely handling a snake removed from a Lafayette LA property"
        problemTitle="Snakes in Your Home? You're Not Alone."
        problemText={[
          'Louisiana\'s warm, humid climate makes it a haven for snakes — and that includes venomous species like copperheads and water moccasins. In Lafayette and across Acadiana, homeowners regularly discover snakes on their porches, in their garages, under their homes, and even inside their living spaces. The lush vegetation, bayous, and abundant prey in South Louisiana mean snake encounters are not a matter of if, but when.',
          'Copperheads are the most commonly encountered venomous snake in the Acadiana region. They blend in with leaves and mulch, making them nearly invisible until you\'re dangerously close. Water moccasins (cottonmouths) are found near ponds, drainage ditches, and crawlspaces with standing water. Rat snakes, while non-venomous, can grow several feet long and cause serious alarm when found in attics, garages, or sheds.',
          'Snakes in and around your home are especially dangerous if you have children or pets. A curious toddler or dog can easily stumble upon a hidden copperhead in the yard. Even non-venomous snakes can deliver painful bites that may become infected. The bottom line: if you see a snake on your property in Lafayette or anywhere in Acadiana, you need professional removal — fast.',
        ]}
        solutionTitle="Professional Snake Removal by Bill Richards"
        solutionText={[
          'When you call Acadiana Wildlife Control for snake removal, you\'re getting a licensed professional with over 20 years of experience handling Louisiana\'s snake species. Bill Richards uses professional snake handling tools to safely identify, capture, and remove snakes from your property — whether it\'s a copperhead under your porch or a rat snake in your attic.',
          'Bill can quickly identify whether the snake is venomous or harmless, which determines the best course of action. Every snake removal call in Lafayette and Acadiana includes a thorough inspection of the area to check for additional snakes, nesting activity, and potential entry points that could allow future snake intrusions.',
        ]}
        processSteps={[
          {
            title: 'Emergency Response',
            description:
              'Call us and Bill responds the same day. We prioritize venomous snake situations to keep your family safe.',
          },
          {
            title: 'Safe Identification & Capture',
            description:
              'Using professional snake handling tools, Bill safely identifies the species and captures the snake without risk to you or your family.',
          },
          {
            title: 'Inspection & Prevention',
            description:
              'We inspect the surrounding area for additional snakes, nesting sites, and entry points. We recommend exclusion measures to prevent future encounters.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/002_98bc37_ad89f44eeed745a69e8b5b0b7a4eab39~mv2-full.webp',
            alt: 'Snake captured during wildlife removal service in Lafayette Louisiana',
          },
          {
            src: '/images/gallery/016_98bc37_ac5cc4b20fed4068be8f1a8da3e34e5b~mv2-full.webp',
            alt: 'Snake removal from residential property in Acadiana',
          },
          {
            src: '/images/gallery/017_98bc37_c7c6b3df2c584d52991e5ed3eba1af91~mv2-full.webp',
            alt: 'Professional snake handling during wildlife control service in Louisiana',
          },
          {
            src: '/images/gallery/019_98bc37_c0566cb7d72c4274b62c769bcb107b2c~mv2-full.webp',
            alt: 'Bill Richards safely removing a snake from a home in Lafayette LA',
          },
        ]}
        relatedServices={[
          'wildlife-exclusion',
          'rodent-control',
          'opossum-removal',
          'raccoon-removal',
        ]}
      />
    </>
  );
}
