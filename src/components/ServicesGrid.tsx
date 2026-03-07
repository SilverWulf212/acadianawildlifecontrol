'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-base text-bayou/70 md:text-lg">
            Professional wildlife removal and exclusion for homes and businesses
            across Acadiana. Humane, effective, and permanent solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
            >
              <Link
                href={`/${service.slug}`}
                className="group block h-full rounded-lg border-l-4 border-gold bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-3 text-4xl" aria-hidden="true">
                  {service.icon}
                </div>

                {/* Service name */}
                <h3 className="mb-1 text-lg font-bold text-bayou font-[family-name:var(--font-heading)]">
                  {service.name}
                </h3>

                {/* Tagline */}
                <p className="mb-2 text-sm italic text-gold font-[family-name:var(--font-heading)]">
                  &ldquo;{service.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-bayou/70">
                  {service.description}
                </p>

                {/* Learn More link */}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-bayou transition-colors group-hover:text-gold">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
