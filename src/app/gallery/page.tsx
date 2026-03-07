import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Photo Gallery | Acadiana Wildlife Control | Wildlife Removal Photos',
  description:
    'Browse photos of wildlife removal and exclusion work by Acadiana Wildlife Control. Snakes, raccoons, armadillos, rodents, and repair projects across Lafayette and Acadiana, LA.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
