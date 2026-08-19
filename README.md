# perhp.com

Freelance portfolio one-pager for Per Hansen. Next.js 16 (App Router), React 19, Tailwind CSS 4, deployed on Vercel.

## Develop

```bash
bun install
bun dev
```

## Editing content

All copy lives in `app/_data/site.ts`: hero, services, work, process, about and contact. Sections are composed in `app/(site)/page.tsx`; shared UI in `app/_components/`.

SEO landing pages live under `/services/<slug>` and are generated from `app/_data/landing.ts` (one entry per search intent: title, meta description, headline, fit / not-fit lists, deliverables, proof clients, FAQs, related pages). The template is `app/(site)/services/[slug]/page.tsx`; `/services` lists them all. Adding an entry to `landingPages` is enough to get a new page, sitemap entry, JSON-LD (Service, FAQPage, BreadcrumbList) and a homepage link. Industry pages work the same way: `app/_data/industries.ts` feeds `/industries/<slug>` and `/industries`, and each industry links to its most relevant services (and vice versa). Both families render through `app/_components/landing-template.tsx`. Case studies live at `/work/<client-slug>` (slug derived from the client name in `work[]`) and are driven by `app/_data/cases.ts`; `/work` lists them with the tenure ledger. Add a `quote` to a case once a testimonial is collected. Positioning and copy rules are in `.agents/product-marketing.md`.

`/process` and `/about` are standalone pages (`app/(site)/process/page.tsx`, `app/(site)/about/page.tsx`) that reuse the `process`, `reasons`, `about`, `stack` and `products` data from `site.ts`; the homepage keeps short versions of both sections. Every main nav item is a real route.

The CV at `/cv` is generated from `app/_data/cv.ts` and styled as a printable A4 page (use the browser print dialog to save as PDF). Toggle `site.available` to hide the availability badge.
