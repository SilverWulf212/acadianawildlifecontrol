'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { BUSINESS } from '@/lib/constants';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  phone: z.string().min(7, 'Please enter a valid phone number').max(20),
  address: z.string().min(1, 'Address or area is required').max(200),
  animalType: z.string().min(1, 'Please select an animal type'),
  location: z.string().min(1, 'Please select a location'),
  urgency: z.string().min(1, 'Please select urgency'),
  details: z.string().max(2000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ANIMAL_OPTIONS = [
  { value: '', label: 'Select animal type...' },
  { value: 'raccoon', label: 'Raccoon' },
  { value: 'snake', label: 'Snake' },
  { value: 'opossum', label: 'Opossum' },
  { value: 'nutria', label: 'Nutria' },
  { value: 'armadillo', label: 'Armadillo' },
  { value: 'rodent', label: 'Rodent/Rat' },
  { value: 'feral-cat', label: 'Feral Cat' },
  { value: 'other', label: 'Other/Not Sure' },
];

const LOCATION_OPTIONS = [
  { value: '', label: 'Select location...' },
  { value: 'attic', label: 'Attic' },
  { value: 'under-house', label: 'Under House' },
  { value: 'yard', label: 'Yard/Garden' },
  { value: 'garage', label: 'Garage' },
  { value: 'inside-home', label: 'Inside Home' },
  { value: 'roof-soffit', label: 'Roof/Soffit' },
  { value: 'other', label: 'Other' },
];

const URGENCY_OPTIONS = [
  { value: 'emergency', label: "It's in my house NOW!" },
  { value: 'ongoing', label: 'Ongoing problem' },
  { value: 'info', label: 'Just need information' },
];

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      animalType: '',
      location: '',
      urgency: '',
      details: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit');
      const json = await res.json();
      if (json.success) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error(json.error || 'Failed to submit');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="rounded-xl border-2 border-bayou-light/30 bg-bayou/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-bayou/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-bayou"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-bayou font-[family-name:var(--font-heading)]">
          Message Sent!
        </h3>
        <p className="text-base text-bayou/70">
          Bill will call you back shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus('idle')}
          className="mt-6 rounded-lg border-2 border-bayou px-6 py-2 text-sm font-bold text-bayou transition-all hover:bg-bayou hover:text-white active:scale-95"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputBase =
    'w-full rounded-lg border border-bayou/20 bg-white px-4 py-3 text-base text-bayou placeholder-bayou/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20';
  const errorClass = 'border-danger/50 focus:border-danger focus:ring-danger/20';
  const labelClass = 'mb-1.5 block text-sm font-semibold text-bayou';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Error banner */}
      {submitStatus === 'error' && (
        <div className="rounded-lg border border-danger/30 bg-danger/5 p-4">
          <p className="text-sm font-medium text-danger">
            Something went wrong. Please call us directly at{' '}
            <a
              href={BUSINESS.phoneHref}
              className="underline hover:no-underline"
            >
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-danger">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          {...register('name')}
          className={`${inputBase} ${errors.name ? errorClass : ''}`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-danger">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-danger">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(337) 555-1234"
          {...register('phone')}
          className={`${inputBase} ${errors.phone ? errorClass : ''}`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-danger">{errors.phone.message}</p>
        )}
      </div>

      {/* Address / Area */}
      <div>
        <label htmlFor="address" className={labelClass}>
          Address / Area <span className="text-danger">*</span>
        </label>
        <input
          id="address"
          type="text"
          autoComplete="street-address"
          placeholder="Your address or neighborhood"
          {...register('address')}
          className={`${inputBase} ${errors.address ? errorClass : ''}`}
        />
        {errors.address && (
          <p className="mt-1 text-sm text-danger">{errors.address.message}</p>
        )}
      </div>

      {/* Two-column row for selects */}
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Type of Animal */}
        <div>
          <label htmlFor="animalType" className={labelClass}>
            Type of Animal <span className="text-danger">*</span>
          </label>
          <select
            id="animalType"
            {...register('animalType')}
            className={`${inputBase} ${errors.animalType ? errorClass : ''}`}
          >
            {ANIMAL_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.animalType && (
            <p className="mt-1 text-sm text-danger">
              {errors.animalType.message}
            </p>
          )}
        </div>

        {/* Where is it? */}
        <div>
          <label htmlFor="location" className={labelClass}>
            Where Is It? <span className="text-danger">*</span>
          </label>
          <select
            id="location"
            {...register('location')}
            className={`${inputBase} ${errors.location ? errorClass : ''}`}
          >
            {LOCATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="mt-1 text-sm text-danger">
              {errors.location.message}
            </p>
          )}
        </div>
      </div>

      {/* Urgency */}
      <fieldset>
        <legend className={labelClass}>
          Urgency <span className="text-danger">*</span>
        </legend>
        <div className="mt-1 space-y-2.5">
          {URGENCY_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-bayou/10 bg-cream/50 px-4 py-3 transition-colors hover:border-gold/40 hover:bg-gold/5 has-[:checked]:border-gold has-[:checked]:bg-gold/10"
            >
              <input
                type="radio"
                value={opt.value}
                {...register('urgency')}
                className="h-4 w-4 border-bayou/30 text-gold focus:ring-gold/30"
              />
              <span
                className={`text-base ${
                  opt.value === 'emergency'
                    ? 'font-bold text-danger'
                    : 'font-medium text-bayou'
                }`}
              >
                {opt.label}
              </span>
            </label>
          ))}
        </div>
        {errors.urgency && (
          <p className="mt-1 text-sm text-danger">{errors.urgency.message}</p>
        )}
      </fieldset>

      {/* Additional Details */}
      <div>
        <label htmlFor="details" className={labelClass}>
          Additional Details
        </label>
        <textarea
          id="details"
          rows={4}
          placeholder="Tell us more about the situation..."
          {...register('details')}
          className={`${inputBase} resize-y ${errors.details ? errorClass : ''}`}
        />
        {errors.details && (
          <p className="mt-1 text-sm text-danger">{errors.details.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="w-full rounded-lg bg-gold px-8 py-4 text-lg font-bold text-bayou shadow-lg transition-all hover:bg-gold-light hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitStatus === 'submitting' ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
