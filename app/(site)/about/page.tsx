import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { Ledger } from "../../_components/ledger";
import { Section } from "../../_components/section";
import { Signature } from "../../_components/signature";
import { about, mailto, products, reasons, site, stack } from "../../_data/site";

const title = `About | ${site.name}, ${site.role.toLowerCase()}`;
const description =
  "I'm Per Hansen, a freelance full-stack web and mobile developer from Denmark with 10+ years of experience. Former fintech employee, startup partner, and for years a freelancer clients keep for one to six years.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", url: "/about", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary", title, description },
};

const facts = [
  { label: "Name", value: site.name },
  { label: "Role", value: site.role },
  { label: "Based in", value: "Denmark, working remotely" },
  { label: "Company", value: `${site.company.name} · CVR ${site.company.cvr}` },
  { label: "Languages", value: "Danish (native), English (fluent)" },
  { label: "Experience", value: "10+ years" },
];

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        description,
        url: site.url,
        email: site.email,
        sameAs: [site.social.linkedin, site.social.github],
        knowsLanguage: ["da", "en"],
        knowsAbout: [...stack],
        worksFor: { "@type": "Organization", name: site.company.name, vatID: site.company.cvr },
        address: { "@type": "PostalAddress", addressCountry: "DK" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site.name, item: site.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <li aria-current="page" className="text-ink-muted">
                  About
                </li>
              </ol>
            </nav>
            <p className="mt-6 animate-fade-up [animation-delay:40ms] eyebrow">About</p>
            <h1 className="mt-6 display text-[2.5rem] animate-fade-up [animation-delay:80ms] sm:text-5xl lg:text-6xl text-balance">
              {about.title}
              <span className="text-accent">.</span>
            </h1>
            <div className="max-w-xl mt-8 space-y-5 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
              <a href={mailto()} className="btn btn-primary">
                Book a free intro call <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link href={site.cvPath} className="btn btn-secondary">
                See the CV
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <p className="mb-3 eyebrow">In short</p>
            <dl className="border-t divide-y border-ink divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[minmax(0,7rem)_1fr] gap-4 py-3">
                  <dt className="meta">{f.label}</dt>
                  <dd className="text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="max-w-xs mt-10">
              <Signature className="w-full text-ink" />
            </div>
          </div>
        </div>
      </section>

      <Section id="how" eyebrow="How I work" title="What you get when you hire me">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="pt-5 border-t border-ink">
              <h2 className="text-xl display">{r.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{r.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-muted">
          <Link href="/process" className="link-ul">
            Read the full process, from intro call to support after launch
          </Link>
        </p>
      </Section>

      <Section
        id="tenure"
        eyebrow="Track record"
        title="Clients keep me for years"
        intro="Every engagement I can talk about, longest first. Each one has a case study."
      >
        <Ledger linkBase="/work/" />
        <p className="mt-6 text-sm text-ink-muted">
          <Link href="/work" className="link-ul">
            Read the case studies
          </Link>
        </p>
      </Section>

      <Section id="stack" eyebrow="Stack" title="What I build with" intro="Chosen for maintainability and a healthy ecosystem, not for what is trending this month.">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-ink-muted">
          {stack.map((tech) => (
            <li key={tech} className="pb-1 border-b border-line">
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          Not on the list and not something I will overclaim: GraphQL, native Swift or Kotlin, machine learning. If your project needs those, I will say so on
          the first call.
        </p>
      </Section>

      <Section id="products" eyebrow="Own products" title="Things I've built on my own time" intro="Proof that I can take an idea from zero to launch: design, code, hosting and all.">
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
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
      </Section>

      <section id="contact" className="text-white scroll-mt-16 bg-ink">
        <div className="py-20 container-x sm:py-28">
          <p className="eyebrow text-accent-soft">Contact</p>
          <h2 className="mt-4 text-4xl text-white display sm:text-5xl text-balance">Let&apos;s find out if we are a fit</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            Tell me what you are building. I usually reply within a day, and the first 30-minute call is free.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-white/70">
            <a href={mailto()} className="bg-white btn text-ink hover:bg-accent-soft">
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
