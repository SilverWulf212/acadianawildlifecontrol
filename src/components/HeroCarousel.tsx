'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, HERO_SLIDES } from '@/lib/constants';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance, isPaused]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative h-[70dvh] w-full overflow-hidden md:h-[80dvh]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero image carousel"
      role="region"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Desktop Image */}
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="hidden object-cover md:block"
            priority={current === 0}
            sizes="100vw"
            quality={85}
          />
          {/* Mobile Image */}
          <Image
            src={slide.imageMobile}
            alt={slide.alt}
            fill
            className="block object-cover md:hidden"
            priority={current === 0}
            sizes="100vw"
            quality={80}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"
        aria-hidden="true"
      />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-end pb-20 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <h1 className="mb-3 text-4xl font-bold leading-tight text-white drop-shadow-lg font-[family-name:var(--font-heading)] md:text-5xl lg:text-6xl">
                {slide.headline}
              </h1>
              <p className="mb-6 text-lg text-white/90 drop-shadow-md font-[family-name:var(--font-body)] md:text-xl lg:text-2xl">
                {slide.subline}
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-3 rounded-lg bg-gold-bright px-8 py-4 text-base font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-95 md:text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Call Now — {BUSINESS.phone}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-1">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? 'true' : undefined}
          >
            <span
              className={`block h-3 w-3 rounded-full transition-all duration-300 ${
                index === current
                  ? 'scale-110 bg-gold-bright border-2 border-gold-bright'
                  : 'bg-white/30 border-2 border-white/70 hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
