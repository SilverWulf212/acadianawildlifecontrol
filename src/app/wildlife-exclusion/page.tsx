import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Wildlife Exclusion Lafayette LA | Animal Proofing & Damage Repair | Acadiana Wildlife Control',
  description: `Professional wildlife exclusion in Lafayette, LA and Acadiana. Seal animal entry points, repair wildlife damage, and prevent animals from returning. Permanent solutions. Call ${BUSINESS.phone}.`,
  keywords: [
    'wildlife exclusion Lafayette',
    'animal proofing house Louisiana',
    'wildlife damage repair Acadiana',
    'seal animal entry points',
    'wildlife exclusion near me',
    'animal damage repair Lafayette LA',
    'soffit repair wildlife damage',
    'crawlspace exclusion Louisiana',
  ],
  openGraph: {
    title: 'Wildlife Exclusion Lafayette LA | Acadiana Wildlife Control',
    description: `Professional wildlife exclusion and damage repair in Lafayette and Acadiana, LA. Permanent animal proofing solutions. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'What is wildlife exclusion?',
    answer:
      'Wildlife exclusion is the process of identifying and permanently sealing all the entry points that animals use to get into your home or building. This includes repairing damaged soffits, sealing gaps around pipes and utility lines, installing screens over attic and foundation vents, repairing holes in fascia boards, and closing off crawlspace access points. Unlike simply trapping and removing an animal, exclusion work addresses the root cause of the problem — the openings that allow animals to enter in the first place. It is the only way to guarantee a permanent solution to wildlife intrusions.',
  },
  {
    question: 'How do you find all the animal entry points?',
    answer:
      'Bill Richards performs a comprehensive, systematic inspection of your entire home or building. He checks every soffit panel, fascia board, roof-to-wall junction, attic vent, foundation vent, plumbing penetration, electrical entry, HVAC chase, and crawlspace access point. He looks for telltale signs of animal activity including gnaw marks, grease stains from animal fur, droppings, displaced insulation visible from outside, and damaged or missing screens. With over 20 years of experience in wildlife control across Lafayette and Acadiana, Bill knows exactly where to look — even the hidden entry points that most homeowners and general contractors miss.',
  },
  {
    question: 'Will wildlife exclusion prevent animals from coming back?',
    answer:
      'Yes — that is the entire purpose of professional wildlife exclusion. When done properly, exclusion work permanently prevents animals from re-entering your home. Bill uses durable, commercial-grade materials that animals cannot chew through, pry open, or work around. Every potential entry point is addressed, not just the obvious ones. Acadiana Wildlife Control\'s exclusion work comes with the confidence of over two decades of experience. We do the job right the first time so you do not have to deal with the same problem again.',
  },
  {
    question: 'Do you repair the damage that animals caused?',
    answer:
      'Yes. Wildlife exclusion and damage repair go hand in hand. When Bill seals entry points, he is also repairing the damage that animals created or exploited to get in. This includes replacing damaged soffit panels, repairing chewed fascia boards, installing new vent screens, sealing foundation gaps, and repairing crawlspace doors and access panels. The goal is to leave your home not just animal-proof, but looking good and structurally sound.',
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
  name: 'Wildlife Exclusion',
  description:
    'Professional wildlife exclusion and damage repair services in Lafayette, LA and Acadiana. Permanent sealing of animal entry points, soffit repair, foundation exclusion, and crawlspace animal proofing.',
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
  serviceType: 'Wildlife Exclusion',
};

export default function WildlifeExclusionPage() {
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
        serviceName="Wildlife Exclusion"
        tagline="Problem Solved. Permanently."
        icon="🔒"
        slug="wildlife-exclusion"
        heroImage="/images/gallery/018_98bc37_b3ab79b9a4f647cab8932ca43eb90577~mv2-full.webp"
        heroAlt="Professional wildlife exclusion door installed on a home in Lafayette LA to prevent animal re-entry"
        problemTitle="Animals Keep Coming Back? Exclusion Is the Answer."
        problemText={[
          'You trapped the raccoon. You removed the opossum. You caught the rats. But a few weeks later, the scratching in the attic starts again. The droppings are back under the house. The damage is getting worse. This is the frustrating cycle that Lafayette and Acadiana homeowners face when wildlife is removed but the entry points are not sealed.',
          'The truth is, trapping and removing an animal is only half the solution. If the holes, gaps, and damaged areas that allowed the animal to enter are not professionally repaired, new animals will find the same openings and move right in. Raccoons, opossums, rats, squirrels, and other wildlife are all opportunistic — they are constantly looking for access to shelter, and your home has exactly what they want.',
          'Common entry points in Lafayette-area homes include damaged or missing soffit panels, gaps where the roofline meets the wall, uncovered or broken attic vents, foundation vent screens that have rusted or been pushed out, gaps around plumbing and electrical penetrations, broken crawlspace doors, and openings where AC lines enter the building. Every one of these must be addressed to truly solve a wildlife problem.',
        ]}
        solutionTitle="Comprehensive Exclusion & Repair by Bill Richards"
        solutionText={[
          'Wildlife exclusion is where Bill Richards truly excels. With over 20 years of experience in wildlife control across Lafayette and Acadiana, Bill has seen every type of entry point and every creative way that animals find their way into homes and buildings. His exclusion work is thorough, durable, and designed to provide a permanent solution — not a temporary patch.',
          'Bill uses commercial-grade materials that stand up to Louisiana\'s weather and resist animal intrusion. Galvanized steel mesh, heavy-gauge hardware cloth, metal flashing, expanding foam reinforced with steel wool, and custom-fabricated covers for vents and openings are all part of his exclusion toolkit. Every repair is done with craftsmanship — the finished work looks clean and professional, not like a hasty patch job.',
        ]}
        processSteps={[
          {
            title: 'Comprehensive Inspection',
            description:
              'Bill inspects every inch of your home\'s exterior — soffits, fascia, roofline, vents, foundation, crawlspace, and all utility penetrations — to identify every potential entry point.',
          },
          {
            title: 'Entry Point Mapping',
            description:
              'All identified entry points are documented with a clear plan for repair. Active entry points (with signs of current animal use) are prioritized.',
          },
          {
            title: 'Professional Sealing & Repair',
            description:
              'Every entry point is sealed with durable, commercial-grade materials. Damaged soffits, vents, fascia, and screens are repaired or replaced.',
          },
          {
            title: 'Barrier Installation',
            description:
              'Where needed, Bill installs additional barriers — one-way exclusion doors (to let trapped animals out but not back in), foundation screens, and reinforced vent covers.',
          },
          {
            title: 'Final Walkthrough',
            description:
              'Bill walks the entire property with you to show every repair, explain what was done, and confirm that your home is fully sealed against wildlife intrusion.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/012_98bc37_44e02fda55ec4cc3a1e8a965b2afcccc~mv2-full.webp',
            alt: 'Wildlife exclusion repair work on a home soffit in Lafayette LA',
          },
          {
            src: '/images/gallery/009_98bc37_3acecaf4a68e48b3a3aabe2e6b2d5ce9~mv2-full.webp',
            alt: 'Entry point sealing during professional wildlife exclusion in Acadiana',
          },
          {
            src: '/images/gallery/004_98bc37_296b4ba1f89549c88adf9c430ebc1327~mv2-full.webp',
            alt: 'Wildlife damage repair and exclusion work in Lafayette Louisiana',
          },
          {
            src: '/images/gallery/018_98bc37_b3ab79b9a4f647cab8932ca43eb90577~mv2-full.webp',
            alt: 'One-way exclusion door installed to humanely remove wildlife in Acadiana',
          },
          {
            src: '/images/gallery/021_98bc37_c9a4da34dca743d4830a7b8e3ea4e9a5~mv2-full.webp',
            alt: 'Professional wildlife exclusion barrier installation in Lafayette LA',
          },
        ]}
        relatedServices={[
          'raccoon-removal',
          'rodent-control',
          'opossum-removal',
          'snake-removal',
        ]}
      />
    </>
  );
}
