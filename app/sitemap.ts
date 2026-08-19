import type { MetadataRoute } from "next";
import { industries } from "./_data/industries";
import { landingPages } from "./_data/landing";
import { site } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("", 1),
    entry("/services", 0.8),
    ...landingPages.map((p) => entry(`/services/${p.slug}`, 0.8)),
    entry("/industries", 0.8),
    ...industries.map((p) => entry(`/industries/${p.slug}`, 0.8)),
    entry("/cv", 0.6),
  ];
}
