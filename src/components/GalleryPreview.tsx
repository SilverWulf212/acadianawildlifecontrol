'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  {
    src: '/images/gallery/001_98bc37_137be1b767ae4e7ebe5160bfbd0f8146~mv2-full.webp',
    thumb: '/images/gallery/001_98bc37_137be1b767ae4e7ebe5160bfbd0f8146~mv2-thumb.webp',
    alt: 'Wildlife removal work in Acadiana',
  },
  {
    src: '/images/gallery/005_98bc37_362669de102648158aadc12f9a3973e7~mv2-full.webp',
    thumb: '/images/gallery/005_98bc37_362669de102648158aadc12f9a3973e7~mv2-thumb.webp',
    alt: 'Animal trapping and relocation',
  },
  {
    src: '/images/gallery/009_98bc37_5125639716d14397ab6f789f9538c14a~mv2-full.webp',
    thumb: '/images/gallery/009_98bc37_5125639716d14397ab6f789f9538c14a~mv2-thumb.webp',
    alt: 'Wildlife exclusion repair work',
  },
  {
    src: '/images/gallery/012_98bc37_9492a5cefdb34343bccda45471bfbcc6~mv2-full.webp',
    thumb: '/images/gallery/012_98bc37_9492a5cefdb34343bccda45471bfbcc6~mv2-thumb.webp',
    alt: 'Nuisance wildlife captured and removed',
  },
  {
    src: '/images/gallery/016_98bc37_aac259ff0dce4d7d9d0d2eef37db1cde~mv2-full.webp',
    thumb: '/images/gallery/016_98bc37_aac259ff0dce4d7d9d0d2eef37db1cde~mv2-thumb.webp',
    alt: 'Professional wildlife control in action',
  },
  {
    src: '/images/gallery/022_98bc37_cdbbef7003484546b0056352aa1f4ffd~mv2-full.webp',
    thumb: '/images/gallery/022_98bc37_cdbbef7003484546b0056352aa1f4ffd~mv2-thumb.webp',
    alt: 'Wildlife damage prevention and repair',
  },
];

const tileVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
};

export default function GalleryPreview() {
  return (
    <section className="bg-cream-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
            Recent Work
          </h2>
          <p className="mx-auto max-w-xl text-base text-bayou/70 md:text-lg">
            A look at some of our wildlife removal and exclusion projects across
            Acadiana.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={tileVariants}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={img.thumb}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bayou/0 transition-colors duration-300 group-hover:bg-bayou/20" />
            </motion.div>
          ))}
        </div>

        {/* View All link */}
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-bayou px-6 py-3 text-base font-bold text-bayou transition-all hover:bg-bayou hover:text-white active:scale-95"
          >
            View All Photos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
