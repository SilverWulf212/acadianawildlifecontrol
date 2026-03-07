'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BUSINESS } from '@/lib/constants';

const TRUST_POINTS = [
  `Licensed Wildlife Control Operator Since ${BUSINESS.since}`,
  `LA Permit #${BUSINESS.permit}`,
  'NWCOA & LTAHA Member',
];

export default function WhyBill() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl lg:aspect-[3/4]">
              <Image
                src="/images/gallery/020_98bc37_c423b68df3d24a6389bf1714b29e243b~mv2-full.webp"
                alt="Bill Richards, owner of Acadiana Wildlife Control, in the field"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl border-2 border-gold/30"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <h2 className="mb-2 text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
              Meet {BUSINESS.owner}
            </h2>
            <p className="mb-6 text-base text-gold font-semibold">
              Owner &amp; Operator, {BUSINESS.name}
            </p>

            <p className="mb-6 text-base leading-relaxed text-bayou/80 md:text-lg">
              For over two decades, Bill has been the go-to wildlife control
              professional for families and businesses across Acadiana. With deep
              knowledge of Louisiana&apos;s native wildlife and a commitment to
              humane, effective methods, Bill solves wildlife problems the right
              way — permanently.
            </p>

            {/* Trust points */}
            <ul className="mb-8 space-y-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  {/* Check icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-medium text-bayou">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tagline quote */}
            <blockquote className="relative border-l-4 border-gold pl-5">
              <p className="text-lg italic text-bayou/80 font-[family-name:var(--font-heading)] md:text-xl">
                &ldquo;Urban trapping in Acadiana to remove unwanted wildlife
                from your property — that&apos;s what we do, and we do it
                right.&rdquo;
              </p>
              <cite className="mt-2 block text-sm font-semibold not-italic text-gold">
                — {BUSINESS.owner}
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
