import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { Ledger } from "../../_components/ledger";
import { Section } from "../../_components/section";
import { cv } from "../../_data/cv";
import { mailto, site, stack } from "../../_data/site";

const title = `For recruiters | Senior React & Expo contractor | ${site.name}`;
const description =
  "Placing a senior React, Next.js, Vue or Expo contractor? Per Hansen: 10+ years, clients kept him 1-6 years, remote from Denmark, Danish invoicing. Printable CV.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/for-recruiters" },
  openGraph: { type: "profile", url: "/for-recruiters", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
};

const subject = "Contract role: [client / role / start date]";

const facts = [
  { label: "Profile", value: "Senior full-stack web and mobile developer, frontend-leaning" },
  { label: "Core stack", value: "TypeScript, React, Next.js, Expo / React Native, Vue, Nuxt, Node.js" },
  { label: "Experience", value: "10+ years, incl. 6 years on Visma Dinero and 3 on Y-mAbs" },
  { label: "Availability", value: site.available ? "Available now, 20-40 h/week" : "Currently booked, ask about start dates" },
  { label: "Location", value: "Denmark, remote. CET, full EU/UK overlap, 3-6 h US East/Central" },
  { label: "Engagement", value: "Contract / freelance via own Danish company. Not looking for permanent roles" },
  { label: "Invoicing", value: `${site.company.name}, CVR ${site.company.cvr}, EUR / DKK / USD, monthly` },
  { label: "Languages", value: "Danish (native), English (fluent)" },
  { label: "Rate", value: "On request, depends on duration and hours. Reply within a day" },
];

const goodFit = [
  "Senior React, Next.js, Vue or Nuxt frontend contracts, 3 months or longer, 20-40 hours a week.",
  "Full-stack TypeScript roles where the backend is Node.js and REST.",
  "React Native / Expo mobile roles, ideally alongside an existing web product.",
  "Remote roles for clients in the Nordics, DACH, Netherlands, UK, Switzerland or the US with EU-overlap hours.",
  "Fintech, SaaS, climate tech, biotech / pharma, e-commerce and construction-tech clients.",
];

const notFit = [
  "Permanent employment or contracts that require on-site presence most days.",
  "Angular-only, GraphQL-heavy, native Swift/Kotlin, .NET, PHP or Java roles. I have shipped Angular, but it is not my main tool, and I do not overclaim the rest.",
  "Team-lead or engineering-manager roles. I am an individual contributor who also reviews code and mentors.",
  "Rates pitched at the offshore end of the market.",
];

const faqs = [
  {
    q: "Can I forward your CV to a client?",
    a: "Yes. The CV at perhp.com/cv is kept current and prints to a clean A4 PDF from the browser. It covers every engagement with years, the stack, languages and contact details. Forward it, or link to it.",
  },
  {
    q: "How fast can you start, and how fast do you reply?",
    a: "I reply within a working day, usually faster. If the availability status on this page says available, I can typically start within one to two weeks of a signed contract.",
  },
  {
    q: "Do you work through agencies and umbrella arrangements?",
    a: "Yes. I invoice from my own Danish company, Pekkel (CVR DK-37106666), and am used to agency contracts, framework agreements and monthly timesheets. No umbrella company needed.",
  },
  {
    q: "What are your rates?",
    a: "They depend on the length of the contract and the weekly hours, so I give them per role rather than publishing one number. Send the role and I will reply with a rate the same day.",
  },
  {
    q: "Will you do a technical interview or a test task?",
    a: "Interviews, pair programming and reasonable take-home tasks are fine. I would rather show the code than talk about it. I will also point you to public work and references where I can.",
  },
  {
    q: "Can you provide references?",
    a: "Yes, on request and with the client's permission. Long tenures at Visma Dinero, Y-mAbs and Målbar are the best reference I have; ask and I will connect you.",
  },
  {
    q: "Which time zones and working hours?",
    a: "Central European Time. Full overlap with Europe and the UK, and 3-6 hours of overlap with US East and Central. Async-first with written updates, so US clients have worked well.",
  },
];

export default function ForRecruitersPage() {
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
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: site.name, item: site.url },
        { "@type": "ListItem", position: 2, name: "For recruiters", item: `${site.url}/for-recruiters` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                <li aria-current="page" className="text-ink-muted">
                  For recruiters
                </li>
              </ol>
            </nav>
            <p className="flex flex-wrap items-center mt-6 gap-x-3 gap-y-1 animate-fade-up [animation-delay:40ms] eyebrow">
              For recruiters and agencies
              {site.available && (
                <>
                  <span aria-hidden="true" className="text-ink-faint">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-2 font-sans text-xs tracking-normal normal-case text-ink-muted">
                    <span className="inline-block w-2 h-2 bg-accent" aria-hidden="true" />
                    Available now
                  </span>
                </>
              )}
            </p>
            <h1 className="mt-6 display text-[2.5rem] animate-fade-up [animation-delay:80ms] sm:text-5xl lg:text-6xl text-balance">
              A senior React, Next.js and Expo contractor <span className="text-accent">you can place fast.</span>
            </h1>
            <p className="max-w-xl mt-8 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted">
              Everything you need to qualify me for a role on one page: stack, years, availability, working setup and invoicing. The CV is printable, the
              answers are honest, and I reply within a day. Please read the fit section before sending a role; it saves us both time.
            </p>
            <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
              <a href={mailto(subject)} className="btn btn-primary">
                Send a role <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link href={site.cvPath} className="btn btn-secondary">
                Printable CV
              </Link>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                LinkedIn <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <p className="mb-3 eyebrow">Profile at a glance</p>
            <dl className="border-t divide-y border-ink divide-line">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[minmax(0,6.5rem)_1fr] gap-4 py-3">
                  <dt className="meta">{f.label}</dt>
                  <dd className="text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Section
        id="fit"
        eyebrow="Fit"
        title="Roles I say yes to, and roles I do not"
        intro="I would rather you place someone else than waste a client interview. Here is the honest filter."
      >
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          <div className="pt-5 border-t border-ink">
            <h2 className="text-xl display">Send me these</h2>
            <ul className="mt-5 space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-muted">
                  <CheckIcon className="w-5 h-5 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-5 border-t border-line-strong">
            <h2 className="text-xl display text-ink-muted">Probably not these</h2>
            <ul className="mt-5 space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-ink-muted">
                  <XMarkIcon className="w-5 h-5 mt-0.5 shrink-0 text-ink-faint" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="stack" eyebrow="Stack" title="Keywords your ATS is looking for" intro="Grouped the way I actually use them. Nothing listed that I have not shipped in production.">
        <dl className="-mt-6 divide-y divide-line">
          {Object.entries(cv.skills).map(([group, items]) => (
            <div key={group} className="grid gap-3 py-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
              <dt className="text-lg display">{group}</dt>
              <dd className="leading-relaxed text-ink-muted">{items.join(", ")}</dd>
            </div>
          ))}
          <div className="grid gap-3 py-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
            <dt className="text-lg display">Mobile</dt>
            <dd className="leading-relaxed text-ink-muted">Expo, React Native, iOS, iPadOS, Android, App Store and Google Play releases, EAS Build, over-the-air updates, push notifications</dd>
          </div>
          <div className="grid gap-3 py-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
            <dt className="text-lg display">Domains</dt>
            <dd className="leading-relaxed text-ink-muted">Fintech and accounting, SaaS, climate tech and LCA, biotech and pharma (regulated), e-commerce, construction tech</dd>
          </div>
        </dl>
      </Section>

      <Section id="tenure" eyebrow="Track record" title="Years per client" intro="The number clients care about most. Every row links to a case study you can forward.">
        <Ledger linkBase="/work/" />
        <ul className="mt-8 space-y-3 text-sm text-ink-muted">
          {cv.experience.map((e) => (
            <li key={e.company + e.type} className="grid grid-cols-[minmax(0,11rem)_1fr_auto] gap-4 pt-3 border-t border-line">
              <span className="font-medium text-ink">{e.company}</span>
              <span>
                {e.role} · {e.type}
              </span>
              <span className="meta tabular-nums">{e.period}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="What recruiters usually ask">
        <dl className="-mt-6 divide-y divide-line">
          {faqs.map((f) => (
            <div key={f.q} className="py-7">
              <dt className="text-lg font-medium">{f.q}</dt>
              <dd className="mt-3 leading-relaxed text-ink-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <section id="contact" className="text-white scroll-mt-16 bg-ink">
        <div className="py-20 container-x sm:py-28">
          <p className="eyebrow text-accent-soft">Send a role</p>
          <h2 className="mt-4 text-4xl text-white display sm:text-5xl text-balance">Client, role, stack, start date, hours. I reply within a day.</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            Include the rate range if you have one and whether the role is remote. You will get a clear yes or no, and a rate if yes.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-white/70">
            <a href={mailto(subject)} className="bg-white btn text-ink hover:bg-accent-soft">
              Email {site.email} <ArrowRightIcon className="w-4 h-4" />
            </a>
            <Link href={site.cvPath} className="transition-colors hover:text-white">
              Printable CV
            </Link>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
