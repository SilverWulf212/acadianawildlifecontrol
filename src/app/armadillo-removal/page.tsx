import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Armadillo Removal Lafayette LA | Armadillo Trapping | Acadiana Wildlife Control',
  description: `Professional armadillo removal in Lafayette, LA and Acadiana. Stop armadillos from digging up your yard and damaging your foundation. Expert trapping. Call ${BUSINESS.phone}.`,
  keywords: [
    'armadillo removal Lafayette LA',
    'armadillo digging up yard',
    'armadillo trapping Acadiana',
    'armadillo removal near me',
    'armadillo damage yard Louisiana',
    'armadillo under house Lafayette',
    'armadillo pest control',
  ],
  openGraph: {
    title: 'Armadillo Removal Lafayette LA | Acadiana Wildlife Control',
    description: `Professional armadillo trapping and removal in Lafayette and Acadiana, LA. Stop yard damage. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'Why are armadillos digging up my yard?',
    answer:
      'Armadillos dig to find their primary food source: insects, grubs, and earthworms that live just below the surface of your lawn. They use their powerful claws and long snouts to root through soil, leaving behind characteristic cone-shaped holes and torn-up turf. Armadillos can dig dozens of holes in a single night, turning a well-maintained Lafayette lawn into a mess by morning. They are especially active after rain when the soil is soft and grubs are closer to the surface.',
  },
  {
    question: 'Can I trap an armadillo myself?',
    answer:
      'While it is technically possible to trap an armadillo yourself, it is extremely difficult without professional knowledge and equipment. Armadillos do not respond to bait the way other animals do — they are not attracted to food in traps. Successful armadillo trapping requires strategic placement of traps along their established travel routes, usually against fences, foundations, or along the edges of structures. Bill Richards has years of experience reading armadillo behavior and knows exactly where to place traps for maximum effectiveness.',
  },
  {
    question: 'Do armadillos carry diseases?',
    answer:
      'Yes, armadillos are one of the few animals known to carry Mycobacterium leprae, the bacteria that causes leprosy (Hansen\'s disease). While the risk of transmission to humans is low, it is a real concern — especially if you handle an armadillo directly. Armadillos can also carry salmonella and other parasites. This is another reason why professional removal by a licensed operator like Acadiana Wildlife Control is the safest approach.',
  },
  {
    question: 'How do you catch armadillos?',
    answer:
      'Bill Richards uses professional-grade live traps placed strategically along armadillo travel routes. Since armadillos follow the same paths repeatedly, Bill identifies these trails by reading the signs — worn paths, fresh digging, and burrow entrances. Traps are positioned to intercept the armadillo as it travels its nightly route. Funnel barriers or guide wings may be used to direct the armadillo into the trap. This method is far more effective than random trap placement or attempting to use bait.',
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
  name: 'Armadillo Removal',
  description:
    'Professional armadillo removal and trapping services in Lafayette, LA and Acadiana. Stop armadillos from destroying your yard and foundation.',
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
  serviceType: 'Armadillo Removal',
};

export default function ArmadilloRemovalPage() {
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
        serviceName="Armadillo Removal"
        tagline="Armadillo by Morning"
        icon="🪖"
        slug="armadillo-removal"
        heroImage="/images/gallery/015_98bc37_9d8a19e452df43e58f2fef11281287b2~mv2-full.webp"
        heroAlt="Armadillo captured in professional live trap during removal service in Lafayette LA"
        problemTitle="Armadillos Destroying Your Yard? We'll Stop Them."
        problemText={[
          'Few things are more frustrating for Lafayette homeowners than waking up to find their yard torn apart by armadillos. These armored nocturnal diggers can destroy a beautiful lawn in a single night, leaving behind dozens of cone-shaped holes, overturned sod, and damaged flower beds. Armadillos are a persistent problem throughout Acadiana, and they will return to the same yard night after night until they are removed.',
          'Beyond lawn damage, armadillos create serious problems when they burrow under foundations, driveways, sidewalks, and HVAC units. Their burrows can extend several feet underground and undermine the structural support of your home. In Lafayette and across South Louisiana, the soft, moist soil makes digging easy for armadillos, and their burrows can cause concrete slabs to crack and settle unevenly.',
          'Armadillos are nocturnal and solitary, which makes them very difficult for homeowners to deal with on their own. By the time you see the damage in the morning, the armadillo is long gone, hiding in a burrow or dense vegetation. Over-the-counter repellents and home remedies are ineffective against armadillos. The only reliable solution is professional trapping by someone who understands armadillo behavior and knows exactly where to set traps.',
        ]}
        solutionTitle="Strategic Armadillo Trapping by Bill Richards"
        solutionText={[
          'Bill Richards of Acadiana Wildlife Control has been trapping armadillos across Lafayette and Acadiana for over 20 years. He knows that successful armadillo removal is all about reading the signs and placing traps in exactly the right locations. Armadillos do not respond to bait — they follow scent trails and habitual paths, so trap placement is everything.',
          'Bill surveys your property to identify armadillo travel routes, active burrows, and fresh digging sites. He then positions professional-grade live traps along these paths, often using guide barriers to funnel the armadillo directly into the trap. This strategic approach is far more effective than the random trap placement that most homeowners attempt on their own.',
        ]}
        processSteps={[
          {
            title: 'Yard Survey',
            description:
              'Bill inspects your property to identify armadillo travel routes, active burrows, fresh digging, and the areas of greatest damage.',
          },
          {
            title: 'Strategic Trap Placement',
            description:
              'Professional live traps are placed along confirmed travel routes with guide barriers to direct the armadillo into the trap. No bait needed.',
          },
          {
            title: 'Capture & Removal',
            description:
              'Traps are checked regularly. Captured armadillos are removed from your property. Traps are repositioned as needed until the problem is resolved.',
          },
          {
            title: 'Hole Repair Guidance',
            description:
              'Bill advises on filling burrows and repairing lawn damage. For properties needing exclusion work, he can install barriers to protect foundations.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/015_98bc37_9d8a19e452df43e58f2fef11281287b2~mv2-full.webp',
            alt: 'Armadillo captured in live trap during professional removal in Lafayette LA',
          },
        ]}
        relatedServices={[
          'nutria-control',
          'wildlife-exclusion',
          'rodent-control',
          'raccoon-removal',
        ]}
      />
    </>
  );
}
