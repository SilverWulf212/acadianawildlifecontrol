import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Rodent Control Lafayette LA | Rat & Mouse Removal | Acadiana Wildlife Control',
  description: `Professional rodent control in Lafayette, LA and Acadiana. Rat and mouse removal from attics, walls, and crawlspaces. Entry point sealing and damage repair. Call ${BUSINESS.phone}.`,
  keywords: [
    'rat in attic Lafayette',
    'rodent removal Acadiana',
    'mouse problem Louisiana',
    'rat control Lafayette LA',
    'rodent control near me',
    'rats in walls Lafayette',
    'mouse removal Acadiana',
    'rat exterminator Lafayette Louisiana',
  ],
  alternates: {
    canonical: '/rodent-control',
  },
  openGraph: {
    title: 'Rodent Control Lafayette LA | Acadiana Wildlife Control',
    description: `Professional rat and mouse removal in Lafayette and Acadiana, LA. Trapping, exclusion, and damage repair. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'How do I know if I have rats in my attic?',
    answer:
      'The most common signs of rats in your attic include scratching, scurrying, or gnawing sounds — especially at night when rats are most active. You may notice droppings (dark, pellet-shaped, about the size of a grain of rice for mice, or up to 3/4 inch for rats), gnaw marks on wood or wiring, grease marks (dark smudges) along walls and beams where rats travel, and a musty, ammonia-like odor from accumulated urine. In Lafayette and Acadiana, roof rats are the most common attic invader. If you see any of these signs, call Acadiana Wildlife Control right away — rat populations grow quickly.',
  },
  {
    question: 'Are rats dangerous?',
    answer:
      'Yes, rats pose serious health and safety risks. They carry diseases including hantavirus, leptospirosis, salmonella, and rat-bite fever. Their droppings and urine contaminate insulation and can affect your home\'s air quality. Rats gnaw on electrical wiring, which is a leading cause of house fires — the National Fire Protection Association estimates that rodent damage to wiring causes thousands of house fires each year. Rats also chew on plumbing, wood framing, and ductwork, causing costly structural damage.',
  },
  {
    question: 'How do rats get in my attic?',
    answer:
      'Rats are remarkably agile climbers and can squeeze through openings as small as a quarter. In Lafayette and Acadiana homes, the most common entry points include gaps around plumbing and electrical penetrations on the roof, damaged or missing soffit panels, uncovered attic vents, gaps where the roofline meets the wall, overhanging tree branches that provide roof access, and openings around AC lines entering the attic. Roof rats, the species most common in South Louisiana, are especially skilled climbers and frequently enter through upper-level openings.',
  },
  {
    question: 'Do you use poison for rodent control?',
    answer:
      'No, Acadiana Wildlife Control does not rely on poison for rodent control. Poison creates additional problems: poisoned rats often die in walls or attics where they decompose, causing terrible odors and attracting flies. Poison can also harm pets, children, and wildlife that come into contact with it. Instead, Bill uses professional snap traps and exclusion methods — trapping the rats that are present and then sealing every entry point to prevent new rats from getting in. This approach solves the problem permanently without the risks associated with poison.',
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
  name: 'Rodent Control',
  description:
    'Professional rodent control services in Lafayette, LA and Acadiana. Rat and mouse trapping, entry point sealing, and damage assessment for attics, walls, and crawlspaces.',
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
  serviceType: 'Rodent Control',
};

export default function RodentControlPage() {
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
        serviceName="Rodent Control"
        tagline="No More Freeloaders"
        icon="🐭"
        slug="rodent-control"
        heroImage="/images/gallery/007_98bc37_3d9278309a584543a5bd74302a4719ea~mv2-full.webp"
        heroAlt="Rat captured during professional rodent control service in Lafayette LA"
        problemTitle="Rats or Mice in Your Home? Don't Ignore the Signs."
        problemText={[
          'Rodent infestations are one of the most common — and most dangerous — wildlife problems facing homeowners in Lafayette and across Acadiana. Rats and mice invade attics, walls, and crawlspaces seeking food, water, and shelter. Once they are inside, they breed rapidly: a single pair of rats can produce dozens of offspring in a year, and a small problem becomes a full-blown infestation in just a few months.',
          'The damage rats and mice cause goes far beyond the nuisance of hearing them scurry through your walls at night. Rodents gnaw constantly to keep their teeth sharp, and they chew on electrical wiring, plumbing, wood framing, and ductwork. Chewed wiring is a serious fire hazard — rodent damage to electrical systems is a leading cause of house fires. Rats contaminate attic insulation with their droppings and urine, which can affect your home\'s air quality and create a health hazard for your family.',
          'In South Louisiana, roof rats (also called black rats) are the most common species invading homes. These agile climbers access attics through gaps in the roofline, damaged soffits, and uncovered vents. The warm, humid climate in Lafayette and Acadiana provides ideal conditions for year-round rodent activity. If you hear scratching in your attic or walls, or if you find droppings anywhere in your home, you need professional rodent control immediately.',
        ]}
        solutionTitle="Professional Rodent Trapping & Exclusion"
        solutionText={[
          'Acadiana Wildlife Control takes a comprehensive approach to rodent control that goes far beyond what traditional pest control companies offer. Bill Richards does not just set traps and hope for the best — he identifies exactly how rodents are entering your home, traps the existing population, and then seals every entry point so no new rodents can get in.',
          'Bill performs a thorough inspection of your attic, roofline, soffits, foundation, and exterior walls to identify all rodent entry points. He uses professional snap traps — not poison — to eliminate the existing rodent population. Once trapping is complete, he performs detailed exclusion work, sealing every gap, crack, and opening with durable materials that rodents cannot chew through. This combination of trapping and exclusion provides a permanent solution to your rodent problem.',
        ]}
        processSteps={[
          {
            title: 'Full Inspection',
            description:
              'Comprehensive inspection of your attic, walls, crawlspace, roofline, and exterior to identify all rodent entry points and assess the extent of the infestation.',
          },
          {
            title: 'Professional Trapping',
            description:
              'Strategic placement of professional snap traps in attic, walls, and along rodent travel routes. No poison — just effective, safe trapping.',
          },
          {
            title: 'Entry Point Sealing',
            description:
              'Every gap, crack, and opening that rodents use to enter your home is sealed with durable, chew-proof materials. This is the key to a permanent solution.',
          },
          {
            title: 'Damage Assessment',
            description:
              'Bill assesses damage to insulation, wiring, ductwork, and structural components, and advises on any repairs needed to restore your home.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/007_98bc37_3d9278309a584543a5bd74302a4719ea~mv2-full.webp',
            alt: 'Rat captured in professional trap during rodent control service in Lafayette LA',
          },
        ]}
        relatedServices={[
          'wildlife-exclusion',
          'raccoon-removal',
          'opossum-removal',
          'snake-removal',
        ]}
      />
    </>
  );
}
