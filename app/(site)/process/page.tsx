import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import { BriefForm } from "../../_components/brief-form";
import { Section } from "../../_components/section";
import { mailto, process, site } from "../../_data/site";

const title = `Process | How we'll work together | ${site.name}`;
const description =
  "How I work with clients: a free intro call, a short written proposal, short iterations with a weekly update, and support after launch. Fixed price, hourly or retainer. Simple, predictable and transparent.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/process" },
  openGraph: { type: "website", url: "/process", title, description, siteName: site.name, locale: "en_US" },
  twitter: { card: "summary", title, description },
};

const models = [
  {
    title: "Fixed price",
    when: "Well-defined projects with a clear scope.",
    text: "You get a written scope, timeline and price up front. Changes are agreed in writing before they cost anything. Good for MVPs, calculators, portals and modernisation projects with a known end state.",
  },
  {
    title: "Retainer",
    when: "Ongoing development, 20-40 hours a week for six months or more.",
    text: "Reserved weekly hours, billed monthly. You get continuity, predictable capacity and a developer who knows your product. This is how most of my long engagements run, and the shape I prefer.",
  },
  {
    title: "Hourly",
    when: "Smaller tasks, audits and work that is hard to scope.",
    text: "Billed monthly for the hours used, with a written log. Often the first step before a retainer, or the right fit for a two-day fix.",
  },
];

const expectations = [
  {
    title: "A weekly written update",
    text: "What shipped, what is next, what I need from you, and anything that changed. Short enough to read, complete enough to forward.",
  },
  {
    title: "Working software early",
    text: "Something you can click within the first weeks, then steady iterations. You see progress instead of waiting for a reveal.",
  },
  {
    title: "Honest answers",
    text: "If I think there is a better way, I will say so. If I am not the right fit, I will say that on the first call. Realistic estimates and early warnings, not surprises.",
  },
  {
    title: "Your code in your repository",
    text: "From day one. Documented, reviewed and deployable by someone who is not me. Long tenure is continuity, not dependency.",
  },
  {
    title: "Async first, EU timezone",
    text: "Written communication by default, calls when they help. Full overlap with Europe and the UK, 3-6 hours with the US East and Central timezones.",
  },
  {
    title: "Support after launch",
    text: "Deployment, handover and documentation are part of the work. If you want me to stay for support and further development, that is the usual outcome.",
  },
];

const faqs = [
  {
    q: "How quickly do you reply and start?",
    a: "I usually reply within a day. If my availability status says available, I can typically start within one to two weeks of agreeing a proposal.",
  },
  {
    q: "Do you publish rates?",
    a: "No. Rates depend on the scope and engagement model and live in the proposal. You will always know the price before any work starts.",
  },
  {
    q: "What do I need to prepare for the intro call?",
    a: "Nothing formal. Come with what you are building, roughly when it needs to exist and what a great result looks like. I will ask the rest.",
  },
  {
    q: "How do you invoice?",
    a: `From my Danish company, ${site.company.name} (CVR ${site.company.cvr}), in EUR, DKK or USD. Monthly for retainers and hourly work, milestone-based for fixed-price projects.`,
  },
  {
    q: "Can we sign an NDA and a contract first?",
    a: "Yes. I am happy to sign your NDA before we go into detail, and I work under your contract or a short standard agreement of mine.",
  },
  {
    q: "What if the project changes direction?",
    a: "That is expected. Short iterations exist so we can change course while it is cheap. We adjust the scope in writing and carry on.",
  },
];

export default function ProcessPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How we'll work together",
      description,
      step: process.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p.title, text: p.text })),
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
        { "@type": "ListItem", position: 2, name: "Process", item: `${site.url}/process` },
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
                  Process
                </li>
              </ol>
            </nav>
            <p className="mt-6 animate-fade-up [animation-delay:40ms] eyebrow">Process</p>
            <h1 className="mt-6 display text-[2.5rem] animate-fade-up [animation-delay:80ms] sm:text-5xl lg:text-6xl text-balance">
              How we&apos;ll work together, <span className="text-accent">from first call to long after launch.</span>
            </h1>
            <p className="max-w-xl mt-8 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted">
              Simple, predictable and transparent, so you always know where the project stands and what it costs. The same four steps for a two-day fix and
              a two-year engagement.
            </p>
            <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
              <a href={mailto()} className="btn btn-primary">
                Book a free intro call <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link href="/services" className="btn btn-secondary">
                See services
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
            <p className="mb-3 eyebrow">Start here</p>
            <BriefForm />
          </div>
        </div>
      </section>

      <Section id="steps" eyebrow="Four steps" title="From first call to launch">
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {process.map((p) => (
            <li key={p.step} className="pt-5 border-t border-ink">
              <span className="meta text-accent">{p.step}</span>
              <h2 className="mt-3 text-xl display">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="models"
        eyebrow="Engagement models"
        title="Fixed price, retainer or hourly"
        intro="Which one we use depends on how well the work can be defined up front. Rates are in the proposal, never a surprise."
      >
        <dl className="-mt-6 divide-y divide-line">
          {models.map((m) => (
            <div key={m.title} className="grid gap-3 py-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
              <dt>
                <span className="text-xl display">{m.title}</span>
                <span className="block mt-2 text-sm text-ink-muted">{m.when}</span>
              </dt>
              <dd className="leading-relaxed text-ink-muted">{m.text}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="expect" eyebrow="What to expect" title="What you get every week, not just at launch">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {expectations.map((e) => (
            <div key={e.title} className="pt-5 border-t border-ink">
              <h2 className="text-xl display">{e.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{e.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Practical questions">
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
          <p className="eyebrow text-accent-soft">Contact</p>
          <h2 className="mt-4 text-4xl text-white display sm:text-5xl text-balance">Step one is a free 30-minute call</h2>
          <p className="max-w-xl mt-6 leading-relaxed text-white/70">
            Tell me what you are building, roughly when, and what a great result looks like. I usually reply within a day.
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
