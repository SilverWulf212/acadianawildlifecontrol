import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export default function NotFound() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bayou py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <p className="mb-4 text-6xl" aria-hidden="true">
            🦝
          </p>
          <h1 className="text-5xl font-bold text-white font-[family-name:var(--font-heading)] md:text-6xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-white/70">
            Looks like this critter got away... The page you are looking for
            does not exist or has been moved.
          </p>
        </div>
      </section>

      {/* Actions */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-3xl">
            Let Us Help You Find What You Need
          </h2>
          <p className="mb-10 text-base text-bayou/70 md:text-lg">
            Head back to the home page, check out our services, or give us a
            call and we will point you in the right direction.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-bright px-8 py-4 text-lg font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M11.47 3.841a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.061l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.689z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
              </svg>
              Back to Home
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-bayou px-8 py-4 text-lg font-bold text-bayou transition-all hover:bg-bayou hover:text-white active:scale-95"
            >
              View Services
            </Link>
          </div>

          {/* Phone CTA */}
          <div className="mt-12 rounded-xl bg-cream p-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-bayou/50">
              Need immediate help?
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
