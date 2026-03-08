import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Raccoon Removal Lafayette LA | Raccoon in Attic | Acadiana Wildlife Control',
  description: `Professional raccoon removal in Lafayette, LA and Acadiana. Raccoon trapping, attic cleanup, and exclusion repair. Humane live trapping. Call ${BUSINESS.phone}.`,
  keywords: [
    'raccoon in attic Lafayette',
    'raccoon removal Acadiana',
    'raccoon damage repair Louisiana',
    'raccoon trapping Lafayette LA',
    'raccoon in soffit',
    'raccoon removal near me',
    'wildlife removal Lafayette Louisiana',
  ],
  alternates: {
    canonical: '/raccoon-removal',
  },
  openGraph: {
    title: 'Raccoon Removal Lafayette LA | Acadiana Wildlife Control',
    description: `Raccoon trapping and removal in Lafayette and Acadiana, LA. Attic damage repair and exclusion. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'How do I know if a raccoon is in my attic?',
    answer:
      'The most common signs of a raccoon in your attic include loud thumping or scratching noises at night (raccoons are nocturnal), visible damage to soffits, fascia boards, or roof vents, raccoon droppings on your roof or in the attic, and a strong musky odor. You might also notice stains on your ceiling from raccoon urine. If you hear heavy footsteps in your attic — heavier than a squirrel or rat — it is almost certainly a raccoon. Homeowners in Lafayette and Acadiana frequently deal with raccoons in attics, especially during the spring breeding season.',
  },
  {
    question: 'Do you kill the raccoons?',
    answer:
      'No. Acadiana Wildlife Control uses humane live trapping methods for raccoon removal. Bill Richards sets professional-grade live traps and then relocates the raccoons away from your property. We believe in ethical, humane wildlife control practices. After removal, we perform exclusion work to seal the entry points so raccoons cannot return.',
  },
  {
    question: 'Will raccoons come back after removal?',
    answer:
      'Raccoons are persistent animals and will absolutely return if the entry points are not properly sealed. That is why Acadiana Wildlife Control does not just trap and remove raccoons — we also provide professional exclusion repair to seal the holes, damaged soffits, and gaps that raccoons used to enter your home. Our goal is a permanent solution, not a temporary fix.',
  },
  {
    question: 'How much does raccoon removal cost in Lafayette?',
    answer:
      'The cost of raccoon removal varies depending on the severity of the infestation, the number of raccoons, the extent of damage, and the exclusion work required. We provide honest assessments and fair pricing. Call ' +
      BUSINESS.phone +
      ' for a consultation. Bill will explain exactly what needs to be done and what it will cost before any work begins.',
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
  name: 'Raccoon Removal',
  description:
    'Professional raccoon removal services in Lafayette, LA and Acadiana. Humane live trapping, attic damage repair, and exclusion to prevent re-entry.',
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
  serviceType: 'Raccoon Removal',
};

export default function RaccoonRemovalPage() {
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
        serviceName="Raccoon Removal"
        tagline="Trashcan Pandas"
        icon="🦝"
        slug="raccoon-removal"
        heroImage="/images/gallery/010_98bc37_56f2a27557314eec91f520715104bfd3~mv2-full.webp"
        heroAlt="Raccoons captured in a live trap during professional removal service in Lafayette LA"
        problemTitle="Raccoons in Your Attic? Act Fast."
        problemText={[
          'Raccoons are one of the most destructive wildlife pests in Lafayette and across Acadiana. These intelligent, powerful animals are drawn to attics, crawlspaces, and outbuildings where they find warmth, shelter, and a safe place to raise their young. Once a raccoon gets into your attic, the damage begins immediately — and it escalates fast.',
          'Raccoons tear through soffits, rip apart insulation, chew on wiring, and leave behind piles of hazardous droppings contaminated with raccoon roundworm. Their urine soaks through insulation and can stain ceilings. A female raccoon nesting in your attic during spring will cause thousands of dollars in damage in just a few weeks. The structural damage to your roof, soffits, and ventilation systems can compromise the integrity of your home.',
          'In Louisiana, raccoons can also carry rabies, distemper, and other diseases that pose risks to your family and pets. The longer a raccoon lives in your attic, the worse the damage and health risks become. Lafayette homeowners who wait too long to address a raccoon problem often face costly repairs that could have been avoided with prompt professional removal.',
        ]}
        solutionTitle="Humane Raccoon Trapping & Exclusion by Bill Richards"
        solutionText={[
          'Acadiana Wildlife Control takes a comprehensive approach to raccoon removal in Lafayette and across South Louisiana. Bill Richards does not just trap the raccoon and leave — he solves the entire problem. That means humane live trapping, safe removal, thorough damage assessment, and professional exclusion repair to make sure raccoons never get back in.',
          'Bill uses professional-grade live traps strategically placed based on raccoon travel patterns and entry points. Once the raccoons are safely captured, he assesses the full extent of the damage to your attic, soffit, and roofline. Then he performs the exclusion work: sealing entry points, reinforcing vulnerable areas, and installing barriers that prevent re-entry.',
        ]}
        processSteps={[
          {
            title: 'Inspection & Assessment',
            description:
              'Bill inspects your attic, roof, and soffits to identify all entry points, assess damage, and determine how many raccoons are present.',
          },
          {
            title: 'Humane Live Trapping',
            description:
              'Professional-grade live traps are set at strategic locations. Traps are checked regularly to ensure humane treatment of captured raccoons.',
          },
          {
            title: 'Removal & Relocation',
            description:
              'Captured raccoons are safely removed from your property and relocated away from residential areas.',
          },
          {
            title: 'Exclusion & Repair',
            description:
              'All entry points are sealed with durable materials. Damaged soffits, fascia, and vents are repaired to prevent future raccoon intrusions.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/010_98bc37_56f2a27557314eec91f520715104bfd3~mv2-full.webp',
            alt: 'Raccoons captured in live trap during professional removal in Lafayette LA',
          },
        ]}
        relatedServices={[
          'wildlife-exclusion',
          'opossum-removal',
          'rodent-control',
          'armadillo-removal',
        ]}
      />
    </>
  );
}
