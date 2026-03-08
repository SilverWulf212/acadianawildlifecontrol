'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-bayou text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo / Business Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight font-[family-name:var(--font-heading)] lg:text-xl"
        >
          <span className="text-gold text-2xl" aria-hidden="true">
            &#9670;
          </span>
          <span>{BUSINESS.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-bayou-light hover:text-white focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bayou"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Call Button */}
        <a
          href={BUSINESS.phoneHref}
          className="hidden items-center gap-2 rounded-lg bg-gold-bright px-5 py-2.5 text-sm font-bold text-bayou shadow-md transition-all hover:bg-gold-light hover:shadow-lg active:scale-95 md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          Call Now {BUSINESS.phone}
        </a>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-bayou-light md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <div className="flex h-5 w-6 flex-col items-center justify-center gap-1.5">
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 4, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-full bg-current"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-6 rounded-full bg-current"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -4, width: 24 }
                  : { rotate: 0, y: 0, width: 24 }
              }
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 rounded-full bg-current"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay & Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/50 md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[60] flex h-full w-72 flex-col bg-bayou shadow-2xl md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex h-full flex-col pt-20 pb-8 px-6">
                {/* Nav Links */}
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-white/90 transition-colors hover:bg-bayou-light hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/20" />

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="space-y-4"
                >
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-bright px-5 py-3 text-base font-bold text-bayou shadow-md transition-all hover:bg-gold-light active:scale-95"
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

                  <p className="text-center text-xs text-white/70">
                    LA Permit #{BUSINESS.permit}
                  </p>
                </motion.div>

                {/* Spacer pushes content up */}
                <div className="mt-auto" />

                {/* Bottom branding */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="text-center text-xs text-white/70"
                >
                  Serving Acadiana Since {BUSINESS.since}
                </motion.p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
