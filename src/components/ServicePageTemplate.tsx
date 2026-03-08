import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/constants';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  serviceName: string;
  tagline: string;
  icon: string;
  slug: string;
  heroImage: string;
  heroAlt: string;
  problemTitle: string;
  problemText: string[];
  solutionTitle: string;
  solutionText: string[];
  processSteps: { title: string; description: string }[];
  faqItems: FAQItem[];
  galleryImages: { src: string; alt: string }[];
  relatedServices: string[];
}

/**
 * Reusable service page template for all wildlife control service pages.
 *
 * Each page.tsx using this template should export its own generateMetadata
 * and include JSON-LD schema markup (FAQ + Service) in a <script> tag.
 *
 * Example metadata pattern:
 *
 * ```ts
 * import type { Metadata } from 'next';
 *
 * export const metadata: Metadata = {
 *   title: 'Snake Removal Lafayette LA | Acadiana Wildlife Control',
 *   description: 'Professional snake removal in Lafayette, LA...',
 * };
 * ```
 */
export default function ServicePageTemplate({
  serviceName,
  tagline,
  icon,
  slug,
  heroImage,
  heroAlt,
  problemTitle,
  problemText,
  solutionTitle,
  solutionText,
  processSteps,
  faqItems,
  galleryImages,
  relatedServices,
}: ServicePageProps) {
  const related = SERVICES.filter((s) => relatedServices.includes(s.slug));

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-bayou py-16 md:py-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-bayou/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
          <span className="mb-4 inline-block text-5xl" aria-hidden="true">
            {icon}
          </span>
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] md:text-5xl lg:text-6xl">
            {serviceName}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-gold md:text-2xl font-[family-name:var(--font-heading)]">
            {tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Serving Lafayette, LA &amp; All of Acadiana Since {BUSINESS.since}
          </p>

          {/* Immediate CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 rounded-lg bg-gold-bright px-8 py-4 text-lg font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bayou"
              aria-label={`Call Acadiana Wildlife Control at ${BUSINESS.phone}`}
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
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bayou"
            >
              Request Service
            </Link>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
            {problemTitle}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-bayou/80 md:text-lg">
            {problemText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Solution ── */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
            {solutionTitle}
          </h2>
          <div className="mb-12 space-y-4 text-base leading-relaxed text-bayou/80 md:text-lg">
            {solutionText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Process Steps */}
          {processSteps.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold-bright text-lg font-bold text-bayou">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-bayou font-[family-name:var(--font-heading)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-bayou/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Gallery ── */}
      {galleryImages.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
              {serviceName} in Action
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-base font-semibold text-bayou transition-colors hover:text-gold"
              >
                View Full Gallery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
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
      )}

      {/* ── FAQ ── */}
      {faqItems.length > 0 && (
        <section className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {faqItems.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-6 shadow-sm"
                >
                  <dt className="text-lg font-bold text-bayou font-[family-name:var(--font-heading)]">
                    {faq.question}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-bayou/75">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Service Area ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-3xl">
            {serviceName} Across Acadiana
          </h2>
          <p className="mx-auto max-w-2xl text-base text-bayou/70 md:text-lg">
            We provide professional {serviceName.toLowerCase()} services throughout
            the Acadiana region, including Lafayette, Youngsville, Broussard, Scott,
            Carencro, Breaux Bridge, New Iberia, Abbeville, Crowley, Opelousas,
            and surrounding areas in South Louisiana. If you need help,{' '}
            <a
              href={BUSINESS.phoneHref}
              className="font-semibold text-gold underline decoration-gold/30 underline-offset-2 transition-colors hover:text-gold-light"
            >
              call {BUSINESS.phone}
            </a>{' '}
            and we&apos;ll be there fast.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-bayou py-16 md:py-24">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white font-[family-name:var(--font-heading)] md:text-4xl lg:text-5xl">
            Need {serviceName} Now?
          </h2>
          <p className="mb-6 text-lg text-white/80 md:text-xl">
            Don&apos;t wait. {BUSINESS.owner} responds quickly and handles the
            problem right the first time. Licensed, experienced, and local.
          </p>

          <div className="mb-8">
            <a
              href={BUSINESS.phoneHref}
              className="text-4xl font-bold text-gold transition-colors hover:text-gold-light font-[family-name:var(--font-heading)] md:text-5xl"
              aria-label={`Call Acadiana Wildlife Control at ${BUSINESS.phone}`}
            >
              {BUSINESS.phone}
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 rounded-lg bg-gold-bright px-8 py-4 text-lg font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bayou"
              aria-label={`Call Acadiana Wildlife Control at ${BUSINESS.phone}`}
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
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10 active:scale-95 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bayou"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Send a Message
            </Link>
          </div>

          <p className="mt-10 text-xs text-white/60">
            {BUSINESS.disclaimer}
          </p>
        </div>
      </section>

      {/* ── Related Services ── */}
      {related.length > 0 && (
        <section className="bg-cream-dark py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
              Other Services We Offer
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span
                    className="mb-3 block text-3xl"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </span>
                  <h3 className="mb-1 text-lg font-bold text-bayou font-[family-name:var(--font-heading)] group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-bayou/80">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
