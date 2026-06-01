import { MetadataRoute } from 'next';
import { absoluteUrl, productCategorySlugs } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/about'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/services'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/products'), lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: absoluteUrl('/gallery'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/testimonials'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/contact'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/quote'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = productCategorySlugs.map((slug) => ({
    url: absoluteUrl(`/products/category/${slug}`),
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
