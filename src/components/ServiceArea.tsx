'use client';

import { motion } from 'framer-motion';

const CITIES = [
  'Lafayette',
  'Youngsville',
  'Broussard',
  'Scott',
  'Carencro',
  'Breaux Bridge',
  'New Iberia',
  'Abbeville',
  'Crowley',
  'Opelousas',
  'Eunice',
  'Rayne',
  'Jennings',
  'Lake Charles Area',
];

const pillVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: 'easeOut' as const,
    },
  }),
};

export default function ServiceArea() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
            Proudly Serving Acadiana
          </h2>
          <p className="mx-auto max-w-2xl text-base text-bayou/70 md:text-lg">
            From Lafayette to Lake Charles and everywhere in between, we provide
            professional wildlife removal services across South Louisiana. If
            you&apos;re in the Acadiana region, we&apos;ve got you covered.
          </p>
        </div>

        {/* City pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CITIES.map((city, i) => (
            <motion.span
              key={city}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20px' }}
              variants={pillVariants}
              className="inline-flex items-center gap-1.5 rounded-full border border-bayou/15 bg-cream px-4 py-2 text-sm font-medium text-bayou shadow-sm transition-colors hover:border-gold hover:bg-gold/10"
            >
              {/* Map pin icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-3.5 w-3.5 text-gold"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433a19.695 19.695 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.695 19.695 0 002.682 2.282 16.383 16.383 0 001.038.573l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                  clipRule="evenodd"
                />
              </svg>
              {city}
            </motion.span>
          ))}
        </div>

        {/* Additional note */}
        <p className="mt-8 text-center text-sm text-bayou/50">
          Don&apos;t see your town? Give us a call — we likely serve your area
          too.
        </p>
      </div>
    </section>
  );
}
