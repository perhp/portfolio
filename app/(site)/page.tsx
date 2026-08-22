import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Hero } from "../_components/hero";
import { industries } from "../_data/industries";
import { landingPages } from "../_data/landing";
import { Section } from "../_components/section";
import { Ledger } from "../_components/ledger";
import { Signature } from "../_components/signature";
import { jsonLdGraph, personJsonLd, professionalServiceJsonLd } from "../_data/schema";
import { about, contact, mailto, process, products, reasons, services, site, slug, stack, work } from "../_data/site";

const jsonLd = jsonLdGraph(
  { ...professionalServiceJsonLd, mainEntityOfPage: site.url },
  personJsonLd,
  { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": personJsonLd["@id"] }, inLanguage: "en" },
);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <Section
        id="services"
        eyebrow="Services"
        title="What I can help you with"
        intro="Whether you need a product built from scratch or a senior developer to strengthen your team, I deliver production-ready work with no hand-holding required."
      >
        <dl className="-mt-6 divide-y divide-line">
          {services.map((s) => (
            <div key={s.title} className="grid gap-3 py-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
              <dt className="text-xl display">{s.title}</dt>
              <dd className="leading-relaxed text-ink-muted">
                {s.text}{" "}
                <Link href={s.href} className="inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap text-ink link-ul">
                  Read more <ArrowRightIcon className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </dd>
            </div>
          ))}
        </dl>
        <div className="pt-8 mt-4 border-t border-line">
          <p className="eyebrow">Looking for something specific?</p>
          <ul className="flex flex-wrap mt-4 gap-x-6 gap-y-2 text-sm text-ink-muted">
            {landingPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/services/${p.slug}`} className="transition-colors hover:text-ink">
                  {p.intent}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="why" eyebrow="Why me" title="What you get when you hire me">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="pt-5 border-t border-ink">
              <h3 className="text-xl display">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="pt-8 mt-16 border-t border-line">
          <p className="eyebrow">Stack</p>
          <ul className="flex flex-wrap mt-4 gap-x-6 gap-y-2 text-sm text-ink-muted">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="work"
        eyebrow="Selected work"
        title="Clients I've built for"
        intro="Long-term engagements in industries where mistakes are expensive. Here is a selection of the work I can talk about."
      >
        <div className="pb-8 mb-8 border-b border-line">
          <p className="eyebrow">By industry</p>
          <ul className="flex flex-wrap mt-4 gap-x-6 gap-y-2 text-sm text-ink-muted">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`} className="transition-colors hover:text-ink">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Ledger className="mb-14" />
        <ol className="border-t divide-y border-ink divide-line">
          {work.map((w) => (
            <li key={w.client + w.engagement} id={`work-${slug(w.client)}`} className="py-10 scroll-mt-24">
              <div className="flex items-baseline justify-between gap-6">
                <p className="meta">{w.industry}</p>
                <p className="meta text-ink-muted tabular-nums">{w.duration}</p>
              </div>
              <div className="grid gap-4 mt-3 lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-10">
                <div>
                  <h3 className="text-3xl display">
                    {w.link ? (
                      <a href={w.link} target="_blank" rel="noreferrer" className="inline-flex items-baseline gap-1 transition-colors group hover:text-accent">
                        {w.client}
                        <ArrowUpRightIcon className="w-4 h-4 transition-colors self-center text-ink-faint group-hover:text-accent" aria-hidden="true" />
                      </a>
                    ) : (
                      w.client
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    {w.role} · {w.engagement}
                  </p>
                </div>
                <div>
                  <p className="leading-relaxed text-ink-muted">{w.text}</p>
                  <Link href={`/work/${slug(w.client)}`} className="inline-flex items-center gap-1 mt-3 text-sm font-medium link-ul">
                    Read the case study <ArrowRightIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="pt-10 mt-6 border-t border-ink">
          <h3 className="text-xl display">Products I&apos;ve built on my own time</h3>
          <p className="mt-2 text-ink-muted">Proof that I can take an idea from zero to launch: design, code, hosting and all.</p>
          <ul className="grid gap-x-8 gap-y-6 mt-8 sm:grid-cols-3">
            {products.map((p) => (
              <li key={p.name}>
                <a href={p.link} target="_blank" rel="noreferrer" className="block pt-4 transition-colors border-t group border-line hover:border-accent">
                  <span className="inline-flex items-center gap-1 font-medium transition-colors group-hover:text-accent">
                    {p.name}
                    <ArrowUpRightIcon className="w-3.5 h-3.5 text-ink-faint group-hover:text-accent" aria-hidden="true" />
                  </span>
                  <span className="block mt-1 text-sm text-ink-muted">{p.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Process"
        title="How we'll work together"
        intro="Simple, predictable and transparent, so you always know where the project stands and what it costs."
      >
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {process.map((p) => (
            <li key={p.step} className="pt-5 border-t border-ink">
              <span className="meta text-accent">{p.step}</span>
              <h3 className="mt-3 text-xl display">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-ink-muted">
          <Link href="/process" className="link-ul">
            Engagement models, what to expect each week and practical FAQs
          </Link>
        </p>
      </Section>

      <Section id="about" eyebrow="About" title={about.title}>
        <div className="space-y-5 leading-relaxed text-ink-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          <Link href="/about" className="link-ul">
            More about me, my stack and my track record
          </Link>
        </p>
        <div className="max-w-xs mt-14">
          <Signature className="w-full text-ink" />
          <div className="pt-4 mt-2 border-t border-ink">
            <p className="text-sm font-medium">{site.name}</p>
            <p className="meta">{site.role}</p>
          </div>
        </div>
      </Section>

      <section id="contact" className="text-white scroll-mt-16 bg-ink">
        <div className="py-20 container-x sm:py-28">
          <p className="eyebrow text-accent-soft">Contact</p>
          <h2 className="mt-4 display text-4xl text-white sm:text-5xl text-balance">{contact.title}</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">{contact.text}</p>

          <a
            href={mailto()}
            className="block mt-14 display text-white break-all text-[clamp(1.75rem,7vw,5.5rem)] transition-colors hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent-soft"
          >
            {site.email}
          </a>

          <div className="flex flex-wrap items-center gap-6 pt-8 mt-12 text-sm border-t border-white/15 text-white/70">
            <a href={mailto()} className="bg-white btn text-ink hover:bg-accent-soft">
              {contact.cta} <ArrowRightIcon className="w-4 h-4" />
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
