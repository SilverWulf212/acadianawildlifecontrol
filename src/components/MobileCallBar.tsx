'use client';

import { BUSINESS } from '@/lib/constants';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href={BUSINESS.phoneHref}
        className="flex items-center justify-center gap-3 bg-gold px-4 py-3.5 text-bayou shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-colors active:bg-gold-light"
        aria-label={`Call Acadiana Wildlife Control at ${BUSINESS.phone}`}
      >
        {/* Phone Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 animate-pulse"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base font-bold tracking-wide">
          Call Now &mdash; {BUSINESS.phone}
        </span>
      </a>
    </div>
  );
}
