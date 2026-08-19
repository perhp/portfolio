import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefForm } from "../../../_components/brief-form";
import { Section } from "../../../_components/section";
import { caseSlug, caseWork, cases, getCase, orderedCases } from "../../../_data/cases";
import { getIndustry } from "../../../_data/industries";
import { getLandingPage } from "../../../_data/landing";
import { mailto, site } from "../../../_data/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cases.map((c) => ({ slug: caseSlug(c.client) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const title = `${c.title} | ${site.name}`;
  const url = `/work/${slug}`;
  return {
    title,
    description: c.description,
    keywords: [...c.keywords],
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description: c.description, siteName: site.name, locale: "en_US" },
    twitter: { card: "summary", title, description: c.description },
    robots: { index: true, follow: true },
  };
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCase(slug);
  const w = c ? caseWork(c) : undefined;
  if (!c || !w) notFound();

  const industry = getIndustry(c.industry);
  const services = c.services.map(getLandingPage).filter((p) => p !== undefined);
  const others = orderedCases.filter((o) => o.client !== c.client);
  const pageUrl = `${site.url}/work/${slug}`;
  const subject = `Project inquiry (saw the ${c.client} case study)`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: c.title,
      description: c.description,
      url: pageUrl,
      about: { "@type": "Organization", name: c.client, ...(w.link ? { url: w.link } : {}) },
      author: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name, url: site.url },
      publisher: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name },
      mainEntityOfPage: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site.name, item: site.url },
        { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work` },
        { "@type": "ListItem", position: 3, name: c.client, item: pageUrl },
      ],
    },
  ];

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Industry", value: industry ? <Link href={`/industries/${industry.slug}`} className="link-ul">{w.industry}</Link> : w.industry },
    { label: "Role", value: w.role },
    { label: "Engagement", value: w.engagement },
    { label: "Duration", value: w.duration },
    {
      label: "Website",
      value: w.link ? (
        <a href={w.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 link-ul">
          {w.link.replace(/^https?:\/\//, "")}
          <ArrowUpRightIcon className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      ) : (
        "Not public"
      ),
    },
    { label: "Stack", value: c.stack.join(" · ") },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section id="top" className="border-b border-line">
        <div className="grid gap-14 pt-14 pb-16 container-x sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:gap-12 lg:items-end">
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
                  <Link href="/work" className="transition-colors hover:text-ink">
                    Work
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-muted">
                  {c.client}
                </li>
              </ol>
            </nav>

            <p className="mt-6 animate-fade-up [animation-delay:40ms] eyebrow">
              {w.industry} · {w.duration}
            </p>

            <h1 className="mt-6 display text-[2.75rem] animate-fade-up [animation-delay:80ms] sm:text-6xl lg:text-7xl text-balance">{c.client}</h1>

            <p className="max-w-xl mt-6 text-xl leading-snug animate-fade-up [animation-delay:120ms] text-accent display font-medium">{c.tagline}</p>

            <p className="max-w-xl mt-6 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted">{w.text}</p>

            <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
              <a href={mailto(subject)} className="btn btn-primary">
                Start a project like this <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link href="/work" className="btn btn-secondary">
                All case studies
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <p className="mb-3 eyebrow">At a glance</p>
            <dl className="border-t divide-y border-ink divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[minmax(0,7rem)_1fr] gap-4 py-3">
                  <dt className="meta">{f.label}</dt>
                  <dd className="text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Section id="context" eyebrow="Context" title="The company and the situation">
        <p className="text-lg leading-relaxed text-ink-muted">{c.context}</p>
      </Section>

      <Section id="brief" eyebrow="The brief" title="What they needed">
        <p className="text-lg leading-relaxed text-ink-muted">{c.brief}</p>
      </Section>

      <Section id="built" eyebrow="What I did" title="What I built and did">
        <ul className="border-t divide-y border-ink divide-line">
          {c.built.map((b, i) => (
            <li key={b} className="grid grid-cols-[3rem_1fr] gap-4 py-5">
              <span className="meta text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <p className="leading-relaxed text-ink-muted">{b}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="approach" eyebrow="How we worked" title="The shape of the engagement">
        <p className="text-lg leading-relaxed text-ink-muted">{c.approach}</p>
      </Section>

      <Section id="outcome" eyebrow="Outcome" title="What it led to">
        <p className="text-lg leading-relaxed text-ink-muted">{c.outcome}</p>
        {c.quote && (
          <blockquote className="pl-6 mt-10 border-l-2 border-accent">
            <p className="text-xl leading-snug display">“{c.quote.text}”</p>
            <footer className="mt-3 meta">
              {c.quote.name} · {c.quote.role}
            </footer>
          </blockquote>
        )}
      </Section>

      <Section id="related" eyebrow="Related" title="Need something similar?">
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
          {industry && (
            <li>
              <Link href={`/industries/${industry.slug}`} className="block pt-4 transition-colors border-t group border-line hover:border-accent">
                <span className="inline-flex items-center gap-1 font-medium transition-colors group-hover:text-accent">
                  {industry.label}
                  <ArrowRightIcon className="w-3.5 h-3.5 text-ink-faint group-hover:text-accent" aria-hidden="true" />
                </span>
                <span className="block mt-1 text-sm text-ink-muted">{industry.intent}</span>
              </Link>
            </li>
          )}
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="block pt-4 transition-colors border-t group border-line hover:border-accent">
                <span className="inline-flex items-center gap-1 font-medium transition-colors group-hover:text-accent">
                  {s.label}
                  <ArrowRightIcon className="w-3.5 h-3.5 text-ink-faint group-hover:text-accent" aria-hidden="true" />
                </span>
                <span className="block mt-1 text-sm text-ink-muted">{s.intent}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="pt-8 mt-12 border-t border-line">
          <p className="eyebrow">More case studies</p>
          <ul className="mt-6 border-t divide-y border-ink divide-line">
            {others.map((o) => {
              const ow = caseWork(o);
              return (
                <li key={o.client}>
                  <Link
                    href={`/work/${caseSlug(o.client)}`}
                    className="grid items-baseline grid-cols-[minmax(0,11rem)_1fr_auto] gap-4 py-3.5 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <span className="font-medium truncate transition-colors group-hover:text-accent">{o.client}</span>
                    <span className="text-sm truncate text-ink-muted">{o.tagline}</span>
                    <span className="text-right meta tabular-nums">{ow?.duration}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="text-white scroll-mt-16 bg-ink">
        <div className="grid gap-12 py-20 container-x sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-accent-soft">Contact</p>
            <h2 className="mt-4 text-4xl text-white display sm:text-5xl text-balance">Building something in the same space?</h2>
            <p className="max-w-xl mt-6 leading-relaxed text-white/70">
              Tell me what it is, roughly when it needs to exist, and what a great result looks like. I usually reply within a day, and the first 30-minute
              call is free.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-white/70">
              <a href={mailto(subject)} className="bg-white btn text-ink hover:bg-accent-soft">
                Email me <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                LinkedIn ↗
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 text-ink">
            <BriefForm />
          </div>
        </div>
      </section>
    </>
  );
}
