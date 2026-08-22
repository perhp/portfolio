import type { MetadataRoute } from "next";
import { caseSlug, cases } from "./_data/cases";
import { industries } from "./_data/industries";
import { landingPages } from "./_data/landing";
import { contentUpdated, site } from "./_data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  /** Date the page content (not the build) last changed. Google ignores lastmod once it sees it is always "now". */
  const entry = (path: string, priority: number, updated: string = contentUpdated): MetadataRoute.Sitemap[number] => ({
    url: `${site.url}${path}`,
    lastModified: new Date(updated),
    changeFrequency: "monthly",
    priority,
  });

  return [
    entry("", 1),
    entry("/services", 0.8),
    ...landingPages.map((p) => entry(`/services/${p.slug}`, 0.8, p.updated)),
    entry("/industries", 0.8),
    ...industries.map((p) => entry(`/industries/${p.slug}`, 0.8, p.updated)),
    entry("/work", 0.8),
    ...cases.map((c) => entry(`/work/${caseSlug(c.client)}`, 0.7, c.updated)),
    entry("/process", 0.6),
    entry("/about", 0.6),
    entry("/for-recruiters", 0.7),
    entry("/cv", 0.6),
  ];
}
