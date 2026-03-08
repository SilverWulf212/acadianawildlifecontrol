'use client';

import Image from 'next/image';
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';

type GalleryCategory =
  | 'all'
  | 'snakes'
  | 'raccoons'
  | 'armadillos'
  | 'rodents'
  | 'repairs';

interface GalleryImage {
  id: string;
  thumb: string;
  full: string;
  alt: string;
  categories: GalleryCategory[];
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '019',
    thumb: '/images/gallery/019_98bc37_c0566cb7d72c4274b62c769bcb107b2c~mv2-thumb.webp',
    full: '/images/gallery/019_98bc37_c0566cb7d72c4274b62c769bcb107b2c~mv2-full.webp',
    alt: 'Copperhead snake removal in Acadiana',
    categories: ['snakes'],
  },
  {
    id: '002',
    thumb: '/images/gallery/002_98bc37_1e69a2c1fe1d4b6592e75ad004df79f3~mv2-thumb.webp',
    full: '/images/gallery/002_98bc37_1e69a2c1fe1d4b6592e75ad004df79f3~mv2-full.webp',
    alt: 'Snake captured during wildlife removal',
    categories: ['snakes'],
  },
  {
    id: '016',
    thumb: '/images/gallery/016_98bc37_aac259ff0dce4d7d9d0d2eef37db1cde~mv2-thumb.webp',
    full: '/images/gallery/016_98bc37_aac259ff0dce4d7d9d0d2eef37db1cde~mv2-full.webp',
    alt: 'Snake removal from Louisiana property',
    categories: ['snakes'],
  },
  {
    id: '017',
    thumb: '/images/gallery/017_98bc37_ab73b62f8f9140cbab4fe565b956f249~mv2-thumb.webp',
    full: '/images/gallery/017_98bc37_ab73b62f8f9140cbab4fe565b956f249~mv2-full.webp',
    alt: 'Snake found on residential property',
    categories: ['snakes'],
  },
  {
    id: '010',
    thumb: '/images/gallery/010_98bc37_56f2a27557314eec91f520715104bfd3~mv2-thumb.webp',
    full: '/images/gallery/010_98bc37_56f2a27557314eec91f520715104bfd3~mv2-full.webp',
    alt: 'Raccoon trapped and removed from attic',
    categories: ['raccoons'],
  },
  {
    id: '015',
    thumb: '/images/gallery/015_98bc37_9d8a19e452df43e58f2fef11281287b2~mv2-thumb.webp',
    full: '/images/gallery/015_98bc37_9d8a19e452df43e58f2fef11281287b2~mv2-full.webp',
    alt: 'Armadillo caught in yard',
    categories: ['armadillos'],
  },
  {
    id: '007',
    thumb: '/images/gallery/007_98bc37_3d9278309a584543a5bd74302a4719ea~mv2-thumb.webp',
    full: '/images/gallery/007_98bc37_3d9278309a584543a5bd74302a4719ea~mv2-full.webp',
    alt: 'Rat removal from attic space',
    categories: ['rodents'],
  },
  {
    id: '003',
    thumb: '/images/gallery/003_98bc37_25df28e6c797413a9b1991711aadd2bd~mv2-thumb.webp',
    full: '/images/gallery/003_98bc37_25df28e6c797413a9b1991711aadd2bd~mv2-full.webp',
    alt: 'Feral cat trapped and removed',
    categories: ['all'],
  },
  {
    id: '022',
    thumb: '/images/gallery/022_98bc37_cdbbef7003484546b0056352aa1f4ffd~mv2-thumb.webp',
    full: '/images/gallery/022_98bc37_cdbbef7003484546b0056352aa1f4ffd~mv2-full.webp',
    alt: 'Wildlife caught and relocated',
    categories: ['all'],
  },
  {
    id: '023',
    thumb: '/images/gallery/023_98bc37_f5b1096cff2e4515a887a243bc3d78a0~mv2-thumb.webp',
    full: '/images/gallery/023_98bc37_f5b1096cff2e4515a887a243bc3d78a0~mv2-full.webp',
    alt: 'Nutria removed from property',
    categories: ['all'],
  },
  {
    id: '001',
    thumb: '/images/gallery/001_98bc37_137be1b767ae4e7ebe5160bfbd0f8146~mv2-thumb.webp',
    full: '/images/gallery/001_98bc37_137be1b767ae4e7ebe5160bfbd0f8146~mv2-full.webp',
    alt: 'Nutria capture in Acadiana',
    categories: ['all'],
  },
  {
    id: '005',
    thumb: '/images/gallery/005_98bc37_362669de102648158aadc12f9a3973e7~mv2-thumb.webp',
    full: '/images/gallery/005_98bc37_362669de102648158aadc12f9a3973e7~mv2-full.webp',
    alt: 'Wildlife trapped and released',
    categories: ['all'],
  },
  {
    id: '012',
    thumb: '/images/gallery/012_98bc37_9492a5cefdb34343bccda45471bfbcc6~mv2-thumb.webp',
    full: '/images/gallery/012_98bc37_9492a5cefdb34343bccda45471bfbcc6~mv2-full.webp',
    alt: 'Wildlife damage repair and exclusion work',
    categories: ['repairs'],
  },
  {
    id: '009',
    thumb: '/images/gallery/009_98bc37_5125639716d14397ab6f789f9538c14a~mv2-thumb.webp',
    full: '/images/gallery/009_98bc37_5125639716d14397ab6f789f9538c14a~mv2-full.webp',
    alt: 'Exclusion repair on residential soffit',
    categories: ['repairs'],
  },
  {
    id: '004',
    thumb: '/images/gallery/004_98bc37_2b07c9fa8f30429faabbd237cd64fb5b~mv2-thumb.webp',
    full: '/images/gallery/004_98bc37_2b07c9fa8f30429faabbd237cd64fb5b~mv2-full.webp',
    alt: 'Sealing wildlife entry point on home',
    categories: ['repairs'],
  },
  {
    id: '018',
    thumb: '/images/gallery/018_98bc37_b3ab79b9a4f647cab8932ca43eb90577~mv2-thumb.webp',
    full: '/images/gallery/018_98bc37_b3ab79b9a4f647cab8932ca43eb90577~mv2-full.webp',
    alt: 'Wildlife exclusion screening installed',
    categories: ['repairs'],
  },
  {
    id: '021',
    thumb: '/images/gallery/021_98bc37_c99ddaa912d04822ad283562a274b014~mv2-thumb.webp',
    full: '/images/gallery/021_98bc37_c99ddaa912d04822ad283562a274b014~mv2-full.webp',
    alt: 'Repair work after wildlife removal',
    categories: ['repairs'],
  },
  {
    id: '020',
    thumb: '/images/gallery/020_98bc37_c423b68df3d24a6389bf1714b29e243b~mv2-thumb.webp',
    full: '/images/gallery/020_98bc37_c423b68df3d24a6389bf1714b29e243b~mv2-full.webp',
    alt: 'Bill Richards of Acadiana Wildlife Control at work',
    categories: ['all'],
  },
  {
    id: '006',
    thumb: '/images/gallery/006_98bc37_370ba2c9e02147d1b23675263b603a78f000-thumb.webp',
    full: '/images/gallery/006_98bc37_370ba2c9e02147d1b23675263b603a78f000-full.webp',
    alt: 'Wildlife control field work in Louisiana',
    categories: ['all'],
  },
  {
    id: '008',
    thumb: '/images/gallery/008_98bc37_4b1c8a4bef174139bbb9a22660b6cc85f000-thumb.webp',
    full: '/images/gallery/008_98bc37_4b1c8a4bef174139bbb9a22660b6cc85f000-full.webp',
    alt: 'Nuisance wildlife removal in Acadiana',
    categories: ['all'],
  },
  {
    id: '011',
    thumb: '/images/gallery/011_98bc37_84f1e771831941bc9774d6238da87bbf~mv2-thumb.webp',
    full: '/images/gallery/011_98bc37_84f1e771831941bc9774d6238da87bbf~mv2-full.webp',
    alt: 'Wildlife control work completed',
    categories: ['all'],
  },
  {
    id: '013',
    thumb: '/images/gallery/013_98bc37_9654333020814b52a6129a856c85594e-thumb.webp',
    full: '/images/gallery/013_98bc37_9654333020814b52a6129a856c85594e-full.webp',
    alt: 'Professional wildlife trapping in Lafayette',
    categories: ['all'],
  },
  {
    id: '014',
    thumb: '/images/gallery/014_98bc37_9c66b82368544b329ee70860f50d8025-thumb.webp',
    full: '/images/gallery/014_98bc37_9c66b82368544b329ee70860f50d8025-full.webp',
    alt: 'Wildlife removal service in Acadiana',
    categories: ['all'],
  },
];

const FILTER_BUTTONS: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'snakes', label: 'Snakes' },
  { value: 'raccoons', label: 'Raccoons' },
  { value: 'armadillos', label: 'Armadillos' },
  { value: 'rodents', label: 'Rodents' },
  { value: 'repairs', label: 'Repairs/Exclusion' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredImages = useMemo(
    () =>
      activeFilter === 'all'
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.categories.includes(activeFilter)),
    [activeFilter],
  );

  const openLightbox = useCallback((image: GalleryImage, trigger?: HTMLButtonElement) => {
    if (trigger) triggerRef.current = trigger;
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = '';
    // Restore focus to the element that opened the lightbox
    triggerRef.current?.focus();
  }, []);

  // Focus the close button when lightbox opens
  useEffect(() => {
    if (lightboxImage && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [lightboxImage]);

  const navigateLightbox = useCallback(
    (direction: 'prev' | 'next') => {
      if (!lightboxImage) return;
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === lightboxImage.id,
      );
      const nextIndex =
        direction === 'next'
          ? (currentIndex + 1) % filteredImages.length
          : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setLightboxImage(filteredImages[nextIndex]);
    },
    [lightboxImage, filteredImages],
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-bayou py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] md:text-5xl lg:text-6xl">
            Our Work
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Photos from wildlife removal and exclusion projects across Acadiana.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-cream-dark py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filter buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {FILTER_BUTTONS.map((btn) => (
              <button
                key={btn.value}
                type="button"
                onClick={() => setActiveFilter(btn.value)}
                className={`rounded-full px-5 py-3 text-sm font-bold transition-all active:scale-95 ${
                  activeFilter === btn.value
                    ? 'bg-bayou text-white shadow-md'
                    : 'bg-white text-bayou/70 shadow-sm hover:bg-bayou/10 hover:text-bayou'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((img) => (
              <button
                key={img.id}
                type="button"
                onClick={(e) => openLightbox(img, e.currentTarget)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                aria-label={`View full size: ${img.alt}`}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-bayou/0 transition-colors duration-300 group-hover:bg-bayou/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm8.25-3.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-1.5 0v-2.25H7.5a.75.75 0 010-1.5h2.25V7.5a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-bayou/50">
                No photos in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox('prev');
            if (e.key === 'ArrowRight') navigateLightbox('next');
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={0}
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.full}
              alt={lightboxImage.alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              sizes="90vw"
              priority
            />
            {/* Caption */}
            <p className="mt-3 text-center text-sm text-white/70">
              {lightboxImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
