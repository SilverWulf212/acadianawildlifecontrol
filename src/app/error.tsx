'use client';

import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      {/* Hero */}
      <section className="bg-bayou py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] md:text-5xl">
            Something Went Wrong
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/70">
            We hit an unexpected snag. This is not your fault — please try
            again or contact us directly.
          </p>
        </div>
      </section>

      {/* Actions */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-lg bg-gold-bright px-8 py-4 text-lg font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-95"
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
                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903H14.25a.75.75 0 000 1.5h6a.75.75 0 00.75-.75v-6a.75.75 0 00-1.5 0v4.956l-1.903-1.903A9 9 0 013.306 9.67a.75.75 0 101.45.388zm14.49 3.882a7.5 7.5 0 01-12.548 3.364l-1.903-1.903H9.75a.75.75 0 000-1.5h-6a.75.75 0 00-.75.75v6a.75.75 0 001.5 0v-4.956l1.903 1.903A9 9 0 0020.694 14.33a.75.75 0 10-1.45-.388z"
                  clipRule="evenodd"
                />
              </svg>
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-bayou px-8 py-4 text-lg font-bold text-bayou transition-all hover:bg-bayou hover:text-white active:scale-95"
            >
              Back to Home
            </Link>
          </div>

          {/* Phone CTA */}
          <div className="mt-12 rounded-xl bg-cream p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-bayou/50">
              Need help right now?
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="text-2xl font-bold text-bayou transition-colors hover:text-gold font-[family-name:var(--font-heading)]"
            >
              Call {BUSINESS.phone}
            </a>
            <p className="mt-1 text-sm text-bayou/60">
              Dawn to Dusk, 7 Days a Week
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
