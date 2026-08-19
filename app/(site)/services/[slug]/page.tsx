import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefForm } from "../../../_components/brief-form";
import { Section } from "../../../_components/section";
import { getLandingPage, landingPages, proofItems } from "../../../_data/landing";
import { mailto, process, site, slug as slugify } from "../../../_data/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return landingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  const title = `${page.title} | ${site.name}`;
  const url = `/services/${page.slug}`;

  return {
    title,
    description: page.description,
    keywords: [...page.keywords],
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description: page.description, siteName: site.name, locale: "en_US" },
    twitter: { card: "summary", title, description: page.description },
    robots: { index: true, follow: true },
  };
}

export default async function LandingPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const proof = proofItems(page);
  const related = page.related.map(getLandingPage).filter((p) => p !== undefined);
  const pageUrl = `${site.url}/services/${page.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.intent,
      serviceType: page.intent,
      description: page.description,
      url: pageUrl,
      areaServed: ["Denmark", "Europe", "United Kingdom", "United States"],
      availableChannel: { "@type": "ServiceChannel", serviceUrl: pageUrl, availableLanguage: ["en", "da"] },
      provider: {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        url: site.url,
        email: site.email,
        sameAs: [site.social.linkedin, site.social.github],
        worksFor: { "@type": "Organization", name: site.company.name, vatID: site.company.cvr },
        address: { "@type": "PostalAddress", addressCountry: "DK" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site.name, item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: page.label, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section id="top" className="border-b border-line">
        <div className="grid gap-14 pt-14 pb-16 container-x sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="animate-fade-up meta">
              <ol className="flex flex-wrap items-center gap-x-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-ink">
                    {site.name}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-ink">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-muted">
                  {page.label}
                </li>
              </ol>
            </nav>

            <p className="flex flex-wrap items-center mt-6 gap-x-3 gap-y-1 animate-fade-up [animation-delay:40ms] eyebrow">
              {page.intent}
              {site.available && (
                <>
                  <span aria-hidden="true" className="text-ink-faint">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-2 normal-case tracking-normal font-sans text-xs text-ink-muted">
                    <span className="inline-block w-2 h-2 bg-accent" aria-hidden="true" />
                    Available now
                  </span>
                </>
              )}
            </p>

            <h1 className="mt-6 display text-[2.5rem] animate-fade-up [animation-delay:80ms] sm:text-5xl lg:text-6xl xl:text-[4.5rem] text-balance">
              {page.headline[0]} <span className="text-accent">{page.headline[1]}</span>
            </h1>

            <p className="max-w-xl mt-8 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted">{page.sub}</p>

            <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
              <a href={mailto(`${page.intent}: project inquiry`)} className="btn btn-primary">
                Book a free intro call <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link href={site.cvPath} className="btn btn-secondary">
                See the CV
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <p className="mb-3 eyebrow">Start here</p>
            <BriefForm />
          </div>
        </div>
      </section>

      {/* Fit */}
      <Section
        id="fit"
        eyebrow="Is this a fit?"
        title="An honest fit check before we talk"
        intro="I would rather tell you no on the first call than waste your budget. Here is what a good match looks like for this kind of work."
      >
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          <div className="pt-5 border-t border-ink">
            <h3 className="text-xl display">A good fit if</h3>
            <ul className="mt-5 space-y-4">
              {page.fit.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-muted">
                  <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-5 border-t border-line-strong">
            <h3 className="text-xl display text-ink-muted">Probably not a fit if</h3>
            <ul className="mt-5 space-y-4">
              {page.notFit.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-muted">
                  <XMarkIcon className="w-5 h-5 mt-0.5 shrink-0 text-ink-faint" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section id="what" eyebrow="What I do" title="What the engagement typically covers">
        <dl className="-mt-6 divide-y divide-line">
          {page.deliverables.map((d) => (
            <div key={d.title} className="grid gap-3 py-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
              <dt className="text-xl display">{d.title}</dt>
              <dd className="leading-relaxed text-ink-muted">{d.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Proof */}
      <Section id="proof" eyebrow="Proof" title="Clients who kept me around" intro={page.proofIntro}>
        <ol className="border-t divide-y border-ink divide-line">
          {proof.map((w) => (
            <li key={w.client} className="py-8">
              <div className="flex items-baseline justify-between gap-6">
                <p className="meta">{w.industry}</p>
                <p className="meta text-ink-muted tabular-nums">{w.duration}</p>
              </div>
              <div className="grid gap-3 mt-3 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-10">
                <div>
                  <h3 className="text-2xl display">
                    {w.link ? (
                      <a href={w.link} target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1 transition-colors group hover:text-accent">
                        {w.client}
                        <ArrowUpRightIcon className="w-4 h-4 self-center transition-colors text-ink-faint group-hover:text-accent" aria-hidden="true" />
                      </a>
                    ) : (
                      w.client
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    {w.role} · {w.engagement}
                  </p>
                </div>
                <p className="leading-relaxed text-ink-muted">{w.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-ink-muted">
          <Link href={`/#work-${slugify(proof[0]?.client ?? "")}`} className="link-ul">
            See all clients and the full tenure ledger
          </Link>
        </p>
      </Section>

      {/* Process */}
      <Section id="process" eyebrow="Process" title="How we'll work together" intro="The same four steps for a two-day fix and a two-year engagement.">
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {process.map((p) => (
            <li key={p.step} className="pt-5 border-t border-ink">
              <span className="meta text-accent">{p.step}</span>
              <h3 className="mt-3 text-xl display">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Questions I get asked">
        <dl className="-mt-6 divide-y divide-line">
          {page.faqs.map((f) => (
            <div key={f.q} className="py-7">
              <dt className="text-lg font-medium">{f.q}</dt>
              <dd className="mt-3 leading-relaxed text-ink-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Related */}
      <Section id="related" eyebrow="Related" title="Other ways I can help">
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/services/${r.slug}`} className="block pt-4 transition-colors border-t group border-line hover:border-accent">
                <span className="inline-flex items-center gap-1 font-medium transition-colors group-hover:text-accent">
                  {r.label}
                  <ArrowRightIcon className="w-3.5 h-3.5 text-ink-faint group-hover:text-accent" aria-hidden="true" />
                </span>
                <span className="block mt-1 text-sm text-ink-muted">{r.intent}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          <Link href="/services" className="link-ul">
            All services
          </Link>
        </p>
      </Section>

      {/* Contact */}
      <section id="contact" className="text-white scroll-mt-16 bg-ink">
        <div className="py-20 container-x sm:py-28">
          <p className="eyebrow text-accent-soft">Contact</p>
          <h2 className="mt-4 display text-4xl text-white sm:text-5xl text-balance">Tell me what you are building</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            What it is, roughly when it needs to exist, and what a great result looks like. I usually reply within a day, and the first 30-minute call is free.
          </p>

          <a
            href={mailto(`${page.intent}: project inquiry`)}
            className="block mt-14 display text-white break-all text-[clamp(1.75rem,7vw,5.5rem)] transition-colors hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent-soft"
          >
            {site.email}
          </a>

          <div className="flex flex-wrap items-center gap-6 pt-8 mt-12 text-sm border-t border-white/15 text-white/70">
            <a href={mailto(`${page.intent}: project inquiry`)} className="bg-white btn text-ink hover:bg-accent-soft">
              Email me <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              LinkedIn ↗
            </a>
            <a href={site.social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
