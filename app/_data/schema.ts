import { site } from "./site";

/**
 * Shared JSON-LD entities. Every page that mentions Per should reference the same @id values
 * so Google merges the signals into one Person and one organisation.
 */
export const personId = `${site.url}/#person`;
export const organizationId = `${site.url}/#organization`;

export const personJsonLd = {
  "@type": "Person",
  "@id": personId,
  name: site.name,
  jobTitle: site.role,
  description:
    "Senior freelance full-stack web and mobile developer from Denmark. React, Next.js, Expo, Vue, Node.js and TypeScript for fintech, biotech, climate tech and SaaS companies.",
  url: site.url,
  email: site.email,
  sameAs: [site.social.linkedin, site.social.github],
  worksFor: { "@type": "Organization", "@id": organizationId, name: site.company.name },
  address: { "@type": "PostalAddress", addressCountry: "DK" },
  nationality: { "@type": "Country", name: "Denmark" },
  knowsLanguage: ["da", "en"],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Expo",
    "Vue",
    "Nuxt",
    "Node.js",
    "Web application development",
    "Mobile app development",
    "API development",
  ],
};

export const professionalServiceJsonLd = {
  "@type": "ProfessionalService",
  "@id": organizationId,
  name: site.company.name,
  alternateName: `${site.name}, freelance developer`,
  url: site.url,
  email: site.email,
  vatID: site.company.cvr,
  founder: { "@id": personId },
  employee: { "@id": personId },
  address: { "@type": "PostalAddress", addressCountry: "DK" },
  areaServed: ["Denmark", "Europe", "United Kingdom", "United States"],
  knowsLanguage: ["da", "en"],
  sameAs: [site.social.linkedin, site.social.github],
  serviceType: [
    "Web application development",
    "Mobile app development (Expo / React Native)",
    "Frontend contracting",
    "API development and integrations",
    "Legacy frontend modernisation",
  ],
};

/** Wrap one or more entities in a single JSON-LD graph. */
export const jsonLdGraph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
