import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Feral Cat Removal Lafayette LA | Stray Cat Trapping | Acadiana Wildlife Control',
  description: `Professional feral cat trapping and removal in Lafayette, LA and Acadiana. Humane live trapping of feral and stray cats from homes, businesses, and commercial properties. Call ${BUSINESS.phone}.`,
  keywords: [
    'feral cat trapping Lafayette',
    'stray cat removal Acadiana',
    'feral cat problem Louisiana',
    'feral cat removal near me',
    'stray cat trapping Lafayette LA',
    'feral cat control Acadiana',
    'cat trapping service Louisiana',
  ],
  openGraph: {
    title: 'Feral Cat Removal Lafayette LA | Acadiana Wildlife Control',
    description: `Humane feral cat trapping and removal in Lafayette and Acadiana, LA. Professional live trapping services. Call ${BUSINESS.phone}.`,
    type: 'website',
    locale: 'en_US',
  },
};

const faqItems = [
  {
    question: 'Is it legal to trap feral cats in Louisiana?',
    answer:
      'Yes, it is legal to trap feral cats in Louisiana when done properly. Feral cats are considered free-roaming animals, and property owners have the right to address feral cat problems on their property. However, it is important to use humane methods and work within local regulations. Bill Richards of Acadiana Wildlife Control uses only humane live traps and coordinates with local animal control agencies as appropriate. We follow all applicable Lafayette and Louisiana regulations regarding feral cat trapping and handling.',
  },
  {
    question: 'What happens to the feral cats after they are trapped?',
    answer:
      'Acadiana Wildlife Control works with local animal control and animal welfare organizations to ensure trapped feral cats are handled humanely and responsibly. Options may include transfer to local animal control, coordination with TNR (trap-neuter-return) programs where available, or transfer to animal rescue organizations. Bill discusses all options with you before beginning the trapping process so you understand exactly what will happen.',
  },
  {
    question: 'How long does feral cat removal take?',
    answer:
      'The timeline for feral cat removal depends on the size of the colony and the specific situation. A single feral cat can often be trapped within a few days. Larger colonies of feral cats — which are common under commercial buildings, in abandoned structures, and in certain neighborhoods in Lafayette and Acadiana — may require several weeks of sustained trapping effort. Bill provides a realistic timeline based on his assessment of your specific situation.',
  },
  {
    question: 'Do you handle domestic cats that have gotten loose?',
    answer:
      'Our primary service is trapping feral and stray cats that are causing problems on your property. If you have lost a domestic cat, we recommend contacting local animal control and area veterinary offices first. If a domestic-looking cat is among a feral colony on your property, we exercise extra care to check for identification (collars, microchips) and coordinate with animal control to reunite lost pets with their owners whenever possible.',
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
  name: 'Feral Cat Removal',
  description:
    'Professional feral cat trapping and removal services in Lafayette, LA and Acadiana. Humane live trapping of feral and stray cat colonies from residential and commercial properties.',
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
  serviceType: 'Feral Cat Removal',
};

export default function FeralCatRemovalPage() {
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
        serviceName="Feral Cat Removal"
        tagline="Cat Got Your Attic?"
        icon="🐱"
        slug="feral-cat-removal"
        heroImage="/images/gallery/003_98bc37_25df28e6c797413a9b1991711aadd2bd~mv2-full.webp"
        heroAlt="Feral cat captured in humane live trap during removal service in Lafayette LA"
        problemTitle="Feral Cats Taking Over? We Can Help."
        problemText={[
          'Feral cat colonies are a growing problem in Lafayette and across Acadiana. These undomesticated cats congregate under houses, in crawlspaces, around commercial buildings, in abandoned structures, and in overgrown areas. A single pair of feral cats can produce multiple litters per year, and without intervention, a small group can quickly become a large colony causing significant problems for property owners.',
          'Feral cats create nuisance issues including loud nighttime fighting and mating calls, strong urine odor that permeates through foundations and crawlspace vents, flea infestations that spread to your yard and pets, destruction of outdoor furniture and landscaping, and accumulation of feces in garden beds and play areas. For commercial property owners in Lafayette, feral cat colonies near restaurants, retail locations, and office buildings create health code concerns and drive away customers.',
          'Beyond the nuisance factor, feral cats carry diseases including rabies, feline leukemia, toxoplasmosis, and various parasites. They prey on songbirds and other small wildlife. And the longer a feral cat colony is allowed to grow, the more difficult and expensive it becomes to address. If you have a feral cat problem on your property in Lafayette or anywhere in Acadiana, professional trapping is the most effective solution.',
        ]}
        solutionTitle="Humane Feral Cat Trapping by Acadiana Wildlife Control"
        solutionText={[
          'Bill Richards provides professional, humane feral cat trapping services throughout Lafayette and the Acadiana region. Using humane live traps specifically designed for cats, Bill safely captures feral cats without harm. He works with local animal control agencies and animal welfare organizations to ensure responsible handling of every trapped animal.',
          'For large feral cat colonies — common under commercial buildings and in certain neighborhoods — Bill develops a systematic trapping plan. He places multiple traps at strategic locations, monitors them regularly, and continues trapping until the colony is fully addressed. Bill also identifies the conditions attracting feral cats to your property and recommends changes to discourage future colonies from forming.',
        ]}
        processSteps={[
          {
            title: 'Assessment',
            description:
              'Bill evaluates the size of the feral cat colony, identifies nesting and feeding areas, and develops a trapping plan tailored to your property.',
          },
          {
            title: 'Humane Live Trapping',
            description:
              'Professional cat-specific live traps are placed at strategic locations. Traps are baited, monitored, and checked regularly to ensure humane treatment.',
          },
          {
            title: 'Coordination & Removal',
            description:
              'Trapped cats are coordinated with local animal control or rescue organizations. Bill handles all logistics of removal from your property.',
          },
          {
            title: 'Prevention Advice',
            description:
              'Bill recommends steps to discourage future feral cat activity — removing food sources, sealing access to crawlspaces, and other property modifications.',
          },
        ]}
        faqItems={faqItems}
        galleryImages={[
          {
            src: '/images/gallery/003_98bc37_25df28e6c797413a9b1991711aadd2bd~mv2-full.webp',
            alt: 'Feral cat captured in humane live trap in Lafayette Louisiana',
          },
        ]}
        relatedServices={[
          'opossum-removal',
          'raccoon-removal',
          'wildlife-exclusion',
          'rodent-control',
        ]}
      />
    </>
  );
}
