# perhp.com

Freelance portfolio one-pager for Per Hansen. Next.js 16 (App Router), React 19, Tailwind CSS 4, deployed on Vercel.

## Develop

```bash
bun install
bun dev
```

## Editing content

All copy lives in `app/_data/site.ts`: hero, services, work, process, about and contact. Sections are composed in `app/(site)/page.tsx`; shared UI in `app/_components/`.

The CV at `/cv` is generated from `app/_data/cv.ts` and styled as a printable A4 page (use the browser print dialog to save as PDF). Toggle `site.available` to hide the availability badge.
