import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-bayou py-16 md:py-24">
      {/* Subtle pattern overlay */}
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
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold text-white font-[family-name:var(--font-heading)] md:text-4xl lg:text-5xl">
          Got Uninvited Guests?
        </h2>

        <p className="mb-8 text-lg text-white/80 md:text-xl">
          Whether it&apos;s a snake on the porch, raccoons in the attic, or
          armadillos tearing up your yard — Bill&apos;s got you covered. Fast
          response, humane methods, permanent solutions.
        </p>

        {/* Phone number display */}
        <div className="mb-8">
          <a
            href={BUSINESS.phoneHref}
            className="text-4xl font-bold text-gold transition-colors hover:text-gold-light font-[family-name:var(--font-heading)] md:text-5xl"
          >
            {BUSINESS.phone}
          </a>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary: Call Now */}
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 rounded-lg bg-gold px-8 py-4 text-lg font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-95"
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

          {/* Secondary: Contact Form */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10 active:scale-95"
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

        {/* Disclaimer */}
        <p className="mt-10 text-xs text-white/40">
          {BUSINESS.disclaimer}
        </p>
      </div>
    </section>
  );
}
