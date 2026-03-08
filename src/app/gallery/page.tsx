import type { Metadata } from 'next';
import { Suspense } from 'react';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Photo Gallery | Acadiana Wildlife Control | Wildlife Removal Photos',
  description:
    'Browse photos of wildlife removal and exclusion work by Acadiana Wildlife Control. Snakes, raccoons, armadillos, rodents, and repair projects across Lafayette and Acadiana, LA.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Photo Gallery | Acadiana Wildlife Control',
    description:
      'Browse photos of wildlife removal and exclusion work by Acadiana Wildlife Control across Lafayette and Acadiana, LA.',
  },
};

function GalleryFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-4 border-bayou/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-bayou" />
        </div>
        <p className="text-sm text-bayou/50">Loading gallery...</p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryFallback />}>
      <GalleryClient />
    </Suspense>
  );
}
