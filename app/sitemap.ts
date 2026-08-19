import type { MetadataRoute } from "next";
import { landingPages } from "./_data/landing";
import { site } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...landingPages.map((p) => ({
      url: `${site.url}/services/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${site.url}/cv`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
