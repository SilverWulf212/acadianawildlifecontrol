import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: `Contact Acadiana Wildlife Control | ${BUSINESS.phone}`,
  description: `Contact ${BUSINESS.name} for wildlife removal in Acadiana. Call ${BUSINESS.phone} or fill out our online form. Available Dawn to Dusk, 7 Days a Week.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bayou py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-white font-[family-name:var(--font-heading)] md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Got a wildlife problem? Reach out and Bill will get back to you fast.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form column */}
            <div className="lg:col-span-3">
              <h2 className="mb-2 text-2xl font-bold text-bayou font-[family-name:var(--font-heading)] md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mb-8 text-base text-bayou/70">
                Fill out the form below and Bill will call you back shortly.
              </p>
              <ContactForm />
            </div>

            {/* Contact info column */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-cream p-8 shadow-md lg:sticky lg:top-24">
                <h3 className="mb-6 text-xl font-bold text-bayou font-[family-name:var(--font-heading)]">
                  Get in Touch
                </h3>

                {/* Phone */}
                <div className="mb-6">
                  <div className="mb-1 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-gold"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wider text-bayou/50">
                      Phone
                    </span>
                  </div>
                  <a
                    href={BUSINESS.phoneHref}
                    className="text-2xl font-bold text-bayou transition-colors hover:text-gold font-[family-name:var(--font-heading)]"
                  >
                    {BUSINESS.phone}
                  </a>
                  <p className="mt-1 text-sm text-bayou/60">
                    Tap to call directly
                  </p>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <div className="mb-1 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-gold"
                      aria-hidden="true"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wider text-bayou/50">
                      Email
                    </span>
                  </div>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-base font-medium text-bayou transition-colors hover:text-gold break-all"
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                {/* Service Area */}
                <div className="mb-6">
                  <div className="mb-1 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-gold"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wider text-bayou/50">
                      Service Area
                    </span>
                  </div>
                  <p className="text-base font-medium text-bayou">
                    Lafayette and all of Acadiana, LA
                  </p>
                </div>

                {/* Business Hours */}
                <div className="mb-8">
                  <div className="mb-1 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-gold"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold uppercase tracking-wider text-bayou/50">
                      Hours
                    </span>
                  </div>
                  <p className="text-base font-medium text-bayou">
                    Dawn to Dusk
                  </p>
                  <p className="text-sm text-bayou/60">7 Days a Week</p>
                </div>

                {/* Divider */}
                <div className="border-t border-bayou/10 pt-6">
                  <p className="text-sm text-bayou/50">
                    {BUSINESS.disclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
