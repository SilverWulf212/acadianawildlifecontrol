import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Acadiana Wildlife Control | Bill Richards | Lafayette LA',
  description: `Learn about ${BUSINESS.owner}, owner of ${BUSINESS.name}. Licensed wildlife control operator serving Acadiana since ${BUSINESS.since}. Call ${BUSINESS.phone}.`,
};

const CREDENTIALS = [
  {
    title: 'LA Dept of Wildlife and Fisheries',
    subtitle: `Nuisance Wildlife Control Officer Permit No. ${BUSINESS.permit}`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8 text-gold"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const MEMBERSHIPS = [
  {
    name: 'LTAHA',
    fullName: 'Louisiana Trappers and Alligator Hunters Association',
    badge: '/images/badges/ltaha.webp',
  },
  {
    name: 'NWCOA',
    fullName: 'National Wildlife Control Operators Association',
    badge: '/images/badges/nwcoa.webp',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bayou py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] md:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Serving Acadiana with honest, humane wildlife control since {BUSINESS.since}.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Photo column */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-xl lg:aspect-[3/4]">
                <Image
                  src="/images/gallery/020_98bc37_c423b68df3d24a6389bf1714b29e243b~mv2-full.webp"
                  alt="Bill Richards, owner of Acadiana Wildlife Control, in the field"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl border-2 border-gold/30"
                aria-hidden="true"
              />
            </div>

            {/* Text column */}
            <div>
              <h2 className="mb-2 text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
                Meet {BUSINESS.owner}
              </h2>
              <p className="mb-6 text-base font-semibold text-gold">
                Owner &amp; Operator, {BUSINESS.name}
              </p>

              <div className="space-y-4 text-base leading-relaxed text-bayou/80 md:text-lg">
                <p>
                  Owner of Acadiana Wildlife Control, Bill Richards, was born and
                  raised in Louisiana and enjoys serving people and working
                  outdoors. Bill has worked as a licensed wildlife control operator
                  in Oklahoma and Louisiana since 2003.
                </p>
                <p>
                  He has met wonderful customers in this line of work and is
                  grateful to serve Acadiana.
                </p>
              </div>

              {/* Tagline quote */}
              <blockquote className="mt-8 relative border-l-4 border-gold pl-5">
                <p className="text-lg italic text-bayou/80 font-[family-name:var(--font-heading)] md:text-xl">
                  &ldquo;Urban trapping in Acadiana to remove unwanted wildlife
                  from your property &mdash; that&apos;s what we do, and we do it
                  right.&rdquo;
                </p>
                <cite className="mt-2 block text-sm font-semibold not-italic text-gold">
                  &mdash; {BUSINESS.owner}
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Memberships */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-4xl">
              Credentials &amp; Memberships
            </h2>
            <p className="mx-auto max-w-xl text-base text-bayou/70 md:text-lg">
              Licensed, trained, and recognized by the industry&apos;s leading organizations.
            </p>
          </div>

          {/* Permit credential */}
          <div className="mb-12">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="mx-auto flex max-w-2xl items-start gap-5 rounded-xl bg-white p-6 shadow-md md:p-8"
              >
                <div className="shrink-0 rounded-lg bg-bayou/5 p-3">
                  {cred.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-bayou font-[family-name:var(--font-heading)]">
                    {cred.title}
                  </h3>
                  <p className="mt-1 text-base text-bayou/70">{cred.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Membership badges */}
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12">
            {MEMBERSHIPS.map((mem) => (
              <div
                key={mem.name}
                className="flex flex-col items-center rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="relative mb-4 h-28 w-28 md:h-36 md:w-36">
                  <Image
                    src={mem.badge}
                    alt={`${mem.fullName} member badge`}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
                <h3 className="text-lg font-bold text-bayou font-[family-name:var(--font-heading)]">
                  {mem.name} Member
                </h3>
                <p className="mt-1 text-center text-sm text-bayou/60">
                  {mem.fullName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-bayou py-16 md:py-20">
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
          <h2 className="mb-4 text-3xl font-bold text-white font-[family-name:var(--font-heading)] md:text-4xl">
            Ready to Solve Your Wildlife Problem?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Call us today. Bill responds fast and gets the job done right.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10 active:scale-95"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
