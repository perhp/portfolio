import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { Ledger } from "../../_components/ledger";
import { caseSlug, caseWork, orderedCases } from "../../_data/cases";
import { mailto, products, site } from "../../_data/site";

const title = `Work | Case studies from fintech, climate tech, biotech and SaaS | ${site.name}`;
const description =
  "Case studies from a senior freelance developer: Målbar (LCA), Visma Dinero (accounting SaaS), Y-mAbs (pharma), Storebuddy (e-commerce bookkeeping), Bunch Bygningsfysik and eManager. What was built, how, and how long each client kept me.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { type: "website", url: "/work", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function WorkIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Case studies",
    itemListElement: orderedCases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.client,
      url: `${site.url}/work/${caseSlug(c.client)}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section id="top" className="border-b border-line">
        <div className="grid gap-14 pt-14 pb-16 container-x sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="meta">
              <ol className="flex flex-wrap items-center gap-x-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-ink">
                    {site.name}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-muted">
                  Work
                </li>
              </ol>
            </nav>
            <p className="mt-6 eyebrow">Selected work</p>
            <h1 className="mt-6 display text-[2.5rem] sm:text-5xl lg:text-6xl text-balance">
              Clients I have built for, <span className="text-accent">and how long they kept me.</span>
            </h1>
            <p className="max-w-xl mt-8 text-lg leading-relaxed text-ink-muted">
              Long-term engagements in industries where mistakes are expensive. Each case study covers the situation, what I built, how we worked and what it
              led to. No invented numbers, and testimonials are on their way.
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
          <div className="lg:col-span-5">
            <Ledger linkBase="/work/" />
          </div>
        </div>
      </section>

      <section className="py-20 border-b sm:py-28 border-line">
        <div className="container-x">
          <ol className="border-t divide-y border-ink divide-line">
            {orderedCases.map((c) => {
              const w = caseWork(c);
              if (!w) return null;
              return (
                <li key={c.client}>
                  <Link href={`/work/${caseSlug(c.client)}`} className="block py-10 group">
                    <div className="flex items-baseline justify-between gap-6">
                      <p className="meta">{w.industry}</p>
                      <p className="meta text-ink-muted tabular-nums">{w.duration}</p>
                    </div>
                    <div className="grid gap-4 mt-3 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-10">
                      <div>
                        <h2 className="text-3xl transition-colors display group-hover:text-accent">{c.client}</h2>
                        <p className="mt-2 text-sm text-ink-muted">
                          {w.role} · {w.engagement}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-medium leading-snug">{c.tagline}</p>
                        <p className="mt-3 leading-relaxed text-ink-muted">{w.text}</p>
                        <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium transition-colors group-hover:text-accent">
                          Read the case study <ArrowRightIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="pt-10 mt-6 border-t border-ink">
            <h2 className="text-xl display">Products I&apos;ve built on my own time</h2>
            <p className="mt-2 text-ink-muted">Proof that I can take an idea from zero to launch: design, code, hosting and all.</p>
            <ul className="grid mt-8 gap-x-8 gap-y-6 sm:grid-cols-3">
              {products.map((p) => (
                <li key={p.name}>
                  <a href={p.link} target="_blank" rel="noreferrer" className="block pt-4 transition-colors border-t group border-line hover:border-accent">
                    <span className="font-medium transition-colors group-hover:text-accent">{p.name} ↗</span>
                    <span className="block mt-1 text-sm text-ink-muted">{p.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="text-white bg-ink">
        <div className="py-20 container-x sm:py-28">
          <p className="eyebrow text-accent-soft">Contact</p>
          <h2 className="mt-4 text-4xl text-white display sm:text-5xl text-balance">Want to be the next one on the ledger?</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            Tell me what you are building. I usually reply within a day, and the first 30-minute call is free.
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
