import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { landingPages } from "../../_data/landing";
import { mailto, site } from "../../_data/site";

const title = `Services | Freelance web & mobile development | ${site.name}`;
const description =
  "Freelance web and mobile development from a senior developer in Denmark: Next.js, React, Vue and Expo apps, senior team capacity, APIs and legacy modernisation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: "/services", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services",
    itemListElement: landingPages.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.intent,
      url: `${site.url}/services/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section id="top" className="border-b border-line">
        <div className="pt-14 pb-16 container-x sm:pt-20 sm:pb-24">
          <nav aria-label="Breadcrumb" className="meta">
            <ol className="flex flex-wrap items-center gap-x-2">
              <li>
                <Link href="/" className="transition-colors hover:text-ink">
                  {site.name}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink-muted">
                Services
              </li>
            </ol>
          </nav>
          <p className="mt-6 eyebrow">Services</p>
          <h1 className="mt-6 display text-[2.5rem] sm:text-5xl lg:text-6xl text-balance max-w-3xl">
            Senior web and mobile development, <span className="text-accent">one developer, long term.</span>
          </h1>
          <p className="max-w-xl mt-8 text-lg leading-relaxed text-ink-muted">
            Pick the page that matches what you are looking for. Each one explains what the engagement covers, who it is a fit for, and what clients have
            kept me around to do.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href={mailto()} className="btn btn-primary">
              Book a free intro call <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link href={site.cvPath} className="btn btn-secondary">
              See the CV
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-b sm:py-28 border-line">
        <div className="container-x">
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/services/${p.slug}`} className="flex flex-col h-full pt-5 transition-colors border-t group border-ink hover:border-accent">
                  <span className="eyebrow">{p.intent}</span>
                  <span className="mt-3 text-2xl display transition-colors group-hover:text-accent text-balance">
                    {p.headline[0]} {p.headline[1]}
                  </span>
                  <span className="block mt-3 leading-relaxed text-ink-muted">{p.description}</span>
                  <span className="inline-flex items-center gap-1 mt-5 text-sm font-medium transition-colors group-hover:text-accent">
                    Read more <ArrowRightIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="text-white bg-ink">
        <div className="py-20 container-x sm:py-28">
          <p className="eyebrow text-accent-soft">Contact</p>
          <h2 className="mt-4 display text-4xl text-white sm:text-5xl text-balance">Not sure which one you need?</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            Tell me what you are building and I will tell you honestly whether I am the right fit. I usually reply within a day, and the first 30-minute call
            is free.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm">
            <a href={mailto()} className="bg-white btn text-ink hover:bg-accent-soft">
              Email me <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href={mailto()} className="text-white/70 transition-colors hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
