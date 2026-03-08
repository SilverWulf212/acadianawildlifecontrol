import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Nutria Control Lafayette LA | Nutria Removal & Trapping | Acadiana Wildlife Control',
  description: `Professional nutria removal and control in Lafayette, LA and Acadiana. Licensed nutria trapping for yards, levees, and commercial properties. Stop nutria damage. Call ${BUSINESS.phone}.`,
  keywords: [
    'nutria removal Louisiana',
    'nutria damage yard',
    'nutria control Acadiana',
    'nutria trapping Lafayette',
    'nutria removal near me',
    'nutria pest control Louisiana',
    'nutria damage repair',
  ],
  alternates: {
    canonical: '/nutria-control',
  },
  openGraph: {
    title: 'Nutria Control Lafayette LA | Acadiana Wildlife Control',
    description: `Professional nutria trapping and control in Lafayette and Acadiana, LA. Licensed by LA Dept of Wildlife and Fisheries. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'What is a nutria?',
    answer:
      'Nutria (Myocastor coypus) are large, semi-aquatic rodents originally from South America that have become one of Louisiana\'s most destructive invasive species. They can weigh up to 20 pounds and look like giant rats with orange teeth. Nutria were introduced to Louisiana in the 1930s for the fur trade and have since spread across the state, causing massive environmental and property damage. They are especially common in the wetlands, bayous, and waterways throughout Acadiana and the Lafayette area.',
  },
  {
    question: 'Are nutria dangerous?',
    answer:
      'Nutria are not typically aggressive toward humans, but they can bite if cornered and their bites can cause serious injury due to their large, powerful teeth. The primary danger of nutria is the destruction they cause. Nutria are voracious herbivores that destroy landscaping, gardens, and crops. They burrow into levees, pond banks, and foundations, which can cause structural instability and flooding. Their burrowing activity has caused millions of dollars in damage across Louisiana.',
  },
  {
    question: 'What damage do nutria cause?',
    answer:
      'Nutria cause extensive damage in multiple ways. They devour landscaping, garden plants, and agricultural crops — eating up to 25% of their body weight in vegetation daily. Their burrowing weakens levees, retention pond banks, irrigation systems, and building foundations. They destroy marsh habitat, which contributes to coastal erosion — a critical problem in Louisiana. For Lafayette and Acadiana property owners, nutria can destroy a well-maintained yard or commercial landscape in a matter of weeks.',
  },
  {
    question: 'Is nutria removal legal in Louisiana?',
    answer:
      'Yes, nutria removal is legal and actively encouraged in Louisiana. Nutria are classified as an invasive, destructive species, and the Louisiana Department of Wildlife and Fisheries supports population control efforts. However, trapping must be performed by licensed operators following state regulations. Bill Richards of Acadiana Wildlife Control holds a valid Louisiana Nuisance Wildlife Control Officer permit (No. ' +
      BUSINESS.permit +
      '), ensuring all nutria removal is performed legally and professionally.',
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
  name: 'Nutria Control',
  description:
    'Professional nutria removal and control services in Lafayette, LA and Acadiana. Licensed trapping of invasive nutria to protect properties, levees, and landscaping.',
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
  serviceType: 'Nutria Control',
};

export default function NutriaControlPage() {
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
        serviceName="Nutria Control"
        tagline="Nutriamotion"
        icon="🐀"
        slug="nutria-control"
        heroImage="/images/gallery/023_98bc37_f5b1096cff2e4515a887a243bc3d78a0~mv2-full.webp"
        heroAlt="Nutria captured in professional trap during removal service in Lafayette Louisiana"
        problemTitle="Nutria Destroying Your Property? We Can Help."
        problemText={[
          'Nutria are one of Louisiana\'s most destructive invasive species, and they are a major problem throughout Lafayette and the Acadiana region. These large, semi-aquatic rodents — which can weigh up to 20 pounds — eat enormous quantities of vegetation and burrow aggressively into banks, levees, and foundations. If you have nutria on your property, the damage is only going to get worse.',
          'Nutria consume up to 25% of their body weight in plant material every single day. That means a single nutria can destroy landscaping, garden beds, and ornamental plants at an alarming rate. For commercial properties, golf courses, and agricultural operations in Acadiana, nutria infestations can result in thousands of dollars in damage in a very short time.',
          'Even more concerning is nutria burrowing activity. Nutria dig extensive burrow systems into pond banks, levees, drainage ditches, and building foundations. This burrowing weakens structures, causes erosion, and can lead to flooding. In Lafayette and across South Louisiana, nutria burrowing has caused catastrophic damage to critical water management infrastructure. If you see nutria on your property, it is time to call a licensed professional.',
        ]}
        solutionTitle="Licensed Professional Nutria Trapping"
        solutionText={[
          'Bill Richards of Acadiana Wildlife Control is licensed by the Louisiana Department of Wildlife and Fisheries (Permit No. ' + BUSINESS.permit + ') to perform professional nutria control throughout the Acadiana region. With over 20 years of trapping experience, Bill understands nutria behavior, travel patterns, and the most effective methods for removing them from your property.',
          'Nutria trapping requires specialized knowledge and equipment. Bill uses professional-grade traps strategically placed along nutria trails, feeding areas, and burrow entrances. He monitors traps regularly and adjusts placement as needed to maximize effectiveness. For properties with significant nutria populations, Bill develops a comprehensive control plan to systematically reduce the population and protect your property.',
        ]}
        processSteps={[
          {
            title: 'Property Assessment',
            description:
              'Bill surveys your property to identify nutria activity, feeding areas, burrow locations, and the extent of damage to develop an effective control strategy.',
          },
          {
            title: 'Strategic Trapping',
            description:
              'Professional traps are placed along nutria travel routes, near feeding areas, and at burrow entrances. Trap placement is adjusted based on results.',
          },
          {
            title: 'Ongoing Monitoring',
            description:
              'Traps are checked regularly. For properties with large nutria populations, Bill provides ongoing monitoring and control to keep numbers manageable.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/001_98bc37_7b9a7ed4bbf449fb8e019c53e6c2a6cd~mv2-full.webp',
            alt: 'Nutria removal service in Lafayette Louisiana',
          },
          {
            src: '/images/gallery/023_98bc37_f5b1096cff2e4515a887a243bc3d78a0~mv2-full.webp',
            alt: 'Nutria captured in professional trap during control service in Acadiana',
          },
        ]}
        relatedServices={[
          'armadillo-removal',
          'rodent-control',
          'wildlife-exclusion',
          'raccoon-removal',
        ]}
      />
    </>
  );
}
