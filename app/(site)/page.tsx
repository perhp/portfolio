import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Hero } from "../_components/hero";
import { Section } from "../_components/section";
import { Signature } from "../_components/signature";
import { about, contact, mailto, process, products, reasons, services, site, stack, work } from "../_data/site";

export default function Page() {
  return (
    <>
      <Hero />

      <Section
        id="services"
        eyebrow="Services"
        title="What I can help you with"
        intro="Whether you need a product built from scratch or a senior developer to strengthen your team, I deliver production-ready work with no hand-holding required."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="p-8 transition-colors card hover:border-accent/50">
              <span className="text-sm font-semibold text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="why" eyebrow="Why me" title="What you get when you hire me" className="bg-surface border-y border-line">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <span className="mt-2 w-2.5 h-2.5 rounded-full shrink-0 bg-accent" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10 border-t mt-14 border-line">
          <p className="eyebrow">Stack</p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {stack.map((tech) => (
              <li key={tech} className="px-3 py-1.5 text-sm font-medium border rounded-full border-line bg-canvas text-ink-muted">
                {tech}
              </li>
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
        <div className="grid gap-6 md:grid-cols-2">
          {work.map((w) => {
            const Card = w.link ? "a" : "div";
            return (
            <Card
              key={w.client + w.engagement}
              {...(w.link ? { href: w.link, target: "_blank", rel: "noreferrer" } : {})}
              className="flex flex-col p-8 transition-colors group card hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wide uppercase text-ink-faint">{w.industry}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{w.client}</h3>
                </div>
                {w.link && <ArrowTopRightOnSquareIcon className="w-5 h-5 transition-colors shrink-0 text-ink-faint group-hover:text-accent" />}
              </div>
              <p className="mt-4 leading-relaxed text-ink-muted">{w.text}</p>
              <dl className="flex flex-wrap pt-5 mt-6 text-sm border-t gap-x-6 gap-y-2 border-line">
                <div>
                  <dt className="sr-only">Role</dt>
                  <dd className="font-medium">{w.role}</dd>
                </div>
                <div>
                  <dt className="sr-only">Engagement</dt>
                  <dd className="text-ink-muted">{w.engagement}</dd>
                </div>
                <div className="ml-auto">
                  <dt className="sr-only">Duration</dt>
                  <dd className="font-medium text-accent">{w.duration}</dd>
                </div>
              </dl>
            </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold tracking-tight">Products I&apos;ve built on my own time</h3>
          <p className="mt-2 text-ink-muted">Proof that I can take an idea from zero to launch: design, code, hosting and all.</p>
          <ul className="grid gap-4 mt-6 sm:grid-cols-3">
            {products.map((p) => (
              <li key={p.name}>
                <a href={p.link} target="_blank" rel="noreferrer" className="flex flex-col h-full p-5 transition-colors card hover:border-accent/50">
                  <span className="font-semibold">{p.name}</span>
                  <span className="mt-1 text-sm text-ink-muted">{p.text}</span>
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
        className="bg-surface border-y border-line"
      >
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <li key={p.step} className="relative pt-6 border-t-2 border-line">
              <span className="absolute top-0 left-0 w-10 h-0.5 -mt-0.5 bg-accent" aria-hidden="true" />
              <span className="text-sm font-semibold text-accent">{p.step}</span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="about" eyebrow="About" title={about.title}>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="max-w-sm">
            <Signature className="w-full text-ink" />
            <div className="pt-4 mt-2 border-t border-ink">
              <p className="text-sm font-semibold">{site.name}</p>
              <p className="text-xs text-ink-muted">{site.role}</p>
            </div>
          </div>
        </div>
      </Section>

      <section id="contact" className="pb-24 scroll-mt-16">
        <div className="container-x">
          <div className="p-10 text-white sm:p-16 rounded-3xl bg-ink">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-soft">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl text-balance">{contact.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">{contact.text}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a href={mailto()} className="bg-white btn text-ink hover:bg-accent-soft">
                {contact.cta} <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href={`mailto:${site.email}`} className="text-white/80 hover:text-white">
                {site.email}
              </a>
            </div>
            <div className="flex gap-6 pt-8 mt-10 text-sm border-t border-white/15 text-white/70">
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                LinkedIn ↗
              </a>
              <a href={site.social.github} target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
