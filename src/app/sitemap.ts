import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://k-wisdom.vercel.app';

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // Add language-specific routes for better SEO
  const languages = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'id', 'th', 'vi'];
  const languageRoutes = languages.map((lang) => ({
    url: `${baseUrl}?lang=${lang}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [...routes, ...languageRoutes];
}
