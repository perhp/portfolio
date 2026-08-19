import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "../../_data/industries";
import { mailto, site } from "../../_data/site";

const title = `Industries | Fintech, climate tech, biotech, SaaS | ${site.name}`;
const description =
  "Senior freelance developer with years of experience in fintech and accounting, climate tech and LCA, biotech and pharma, SaaS, e-commerce and construction tech. Sector pages with proof.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: { type: "website", url: "/industries", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function IndustriesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries",
    itemListElement: industries.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.intent,
      url: `${site.url}/industries/${p.slug}`,
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
                Industries
              </li>
            </ol>
          </nav>
          <p className="mt-6 eyebrow">Industries</p>
          <h1 className="mt-6 display text-[2.5rem] sm:text-5xl lg:text-6xl text-balance max-w-3xl">
            Sectors where mistakes are expensive, <span className="text-accent">and where I have stayed for years.</span>
          </h1>
          <p className="max-w-xl mt-8 text-lg leading-relaxed text-ink-muted">
            Every industry below is one I have real, named work in. Each page covers what I have built there, what I typically do in that sector, and an
            honest note on what I do not do.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <a href={mailto()} className="btn btn-primary">
              Book a free intro call <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link href="/services" className="btn btn-secondary">
              Browse by service
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-b sm:py-28 border-line">
        <div className="container-x">
          <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((p) => (
              <li key={p.slug}>
                <Link href={`/industries/${p.slug}`} className="flex flex-col h-full pt-5 transition-colors border-t group border-ink hover:border-accent">
                  <span className="eyebrow">{p.label}</span>
                  <span className="mt-3 text-2xl transition-colors display group-hover:text-accent text-balance">
                    {p.headline[0]} {p.headline[1]}
                  </span>
                  <span className="block mt-3 leading-relaxed text-ink-muted">{p.description}</span>
                  <span className="block mt-4 meta">Clients: {p.proof.join(", ")}</span>
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
          <h2 className="mt-4 text-4xl text-white display sm:text-5xl text-balance">Your sector is not listed?</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            Tell me what you are building anyway. The sectors above are where I have named proof, but the way I work carries over. I usually reply within a
            day, and the first 30-minute call is free.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm">
            <a href={mailto()} className="bg-white btn text-ink hover:bg-accent-soft">
              Email me <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href={mailto()} className="transition-colors text-white/70 hover:text-white">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
