import Link from 'next/link';
import { BUSINESS, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bayou text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 & 2: Navigation Links */}
          <nav aria-label="Footer navigation">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gold font-[family-name:var(--font-heading)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-bold text-gold font-[family-name:var(--font-heading)]">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="inline-block py-1 text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </nav>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gold font-[family-name:var(--font-heading)]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href={BUSINESS.phoneHref}
                  className="transition-colors hover:text-gold"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Lafayette, LA &amp; All of Acadiana</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{BUSINESS.owner}, Owner</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          {/* Credentials */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/70">
            <span>LA Permit #{BUSINESS.permit}</span>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span>NWCOA Member</span>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span>LTAHA Member</span>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span>Serving Acadiana Since {BUSINESS.since}</span>
          </div>

          {/* Disclaimer */}
          <p className="mb-4 text-center text-xs font-medium text-red-400">
            {BUSINESS.disclaimer}
          </p>

          {/* Copyright */}
          <p className="text-center text-xs text-white/60">
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
