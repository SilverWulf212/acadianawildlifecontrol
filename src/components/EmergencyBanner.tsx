import { BUSINESS } from '@/lib/constants';

export default function EmergencyBanner() {
  return (
    <div className="bg-gold-bright">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-3 lg:px-8">
        <span className="text-sm font-bold text-bayou md:text-base">
          Wildlife Emergency?
        </span>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 rounded-md bg-bayou px-4 py-1.5 text-sm font-bold text-white transition-all hover:bg-bayou-light active:scale-95 md:text-base"
        >
          {/* Phone icon with pulse animation */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 motion-safe:animate-pulse"
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
      </div>
    </div>
  );
}
