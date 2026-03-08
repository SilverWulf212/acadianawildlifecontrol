import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.acadianawildlifecontrol.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = [
    'snake-removal',
    'raccoon-removal',
    'opossum-removal',
    'nutria-control',
    'armadillo-removal',
    'rodent-control',
    'feral-cat-removal',
    'wildlife-exclusion',
  ];

  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...servicePages.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
