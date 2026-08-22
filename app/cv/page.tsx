import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { cv } from "../_data/cv";
import { jsonLdGraph, personJsonLd } from "../_data/schema";
import { PrintButton } from "./print-button";

const { site } = cv;
const contactLinks = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: "perhp.com", href: site.url },
  { label: "linkedin.com/in/per-hansen", href: site.social.linkedin },
  { label: "github.com/perhp", href: site.social.github },
];
const maxYears = Math.max(...cv.experience.map((e) => e.years ?? 0));
const totalYears = cv.experience.reduce((sum, e) => sum + (e.years ?? 0), 0);

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="pb-1.5 mb-3 border-b eyebrow border-ink print:mb-2">{children}</h2>;
}

export default function CvPage() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 sm:py-12 print:p-0 print:gap-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jsonLdGraph({ "@type": "ProfilePage", "@id": `${site.url}/cv#page`, url: `${site.url}/cv`, name: `CV | ${site.name}`, mainEntity: { "@id": personJsonLd["@id"] } }, personJsonLd),
          ),
        }}
      />
      <div className="flex items-center justify-between w-full max-w-[210mm] print:hidden">
        <div className="flex items-center gap-5 text-sm text-ink-muted">
          <Link href="/" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
            <ArrowLeftIcon className="w-4 h-4" /> Back to site
          </Link>
          <Link href="/for-recruiters" className="transition-colors hover:text-ink">
            For recruiters
          </Link>
        </div>
        <PrintButton />
      </div>

      <article className="a4 max-w-full bg-white border border-line text-ink text-[10.5pt] leading-snug print:text-[9.5pt] print:leading-tight">
        {/* Header */}
        <header className="grid gap-4 pb-6 border-b print:pb-3 sm:grid-cols-[1fr_auto] sm:items-end border-ink">
          <div>
            <p className="meta">
              {site.role} · {site.location}
            </p>
            <h1 className="mt-2 text-4xl display print:text-2xl">{site.name}</h1>
          </div>
          <ul className="space-y-0.5 sm:text-right meta text-ink-muted">
            {contactLinks.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="transition-colors hover:text-accent">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* Summary */}
        <section className="mt-6 print:mt-2">
          <SectionTitle>Profile</SectionTitle>
          <p className="text-ink-muted">{cv.summary}</p>
        </section>

        <div className="grid gap-8 mt-6 md:grid-cols-[1fr_58mm] print:grid-cols-[1fr_54mm] print:mt-3 print:gap-6">
          {/* Experience */}
          <section>
            <SectionTitle>Experience</SectionTitle>
            <ol className="flex flex-col gap-4 cv-experience">
              {cv.experience.map((e) => (
                <li key={e.company + e.type} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base display print:text-[11pt]">{e.company}</h3>
                    <span className="whitespace-nowrap meta tabular-nums">{e.period}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-ink-muted">
                    <span className="font-medium text-ink">{e.role}</span> · {e.type} · {e.summary}
                  </p>
                  <span className="block h-1 mt-2 max-w-40 print:mt-1" aria-hidden="true">
                    {e.years ? (
                      <span className="block h-1 rounded-xs bg-accent print-exact" style={{ width: `${(e.years / maxYears) * 100}%` }} />
                    ) : (
                      <span className="block w-1 h-1 rounded-xs bg-line-strong print-exact" />
                    )}
                  </span>
                  <ul className="mt-2 print:mt-1 space-y-0.5 print:space-y-0 text-ink-muted list-disc pl-4 marker:text-ink-faint">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="pt-2 mt-4 border-t meta border-line print:hidden">
              Bars show length of engagement, {maxYears} years at most. {totalYears}+ years in total.
            </p>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            <section className="break-inside-avoid">
              <SectionTitle>Skills</SectionTitle>
              <dl className="space-y-2.5">
                {Object.entries(cv.skills).map(([group, items]) => (
                  <div key={group}>
                    <dt className="text-xs font-medium">{group}</dt>
                    <dd className="text-ink-muted">{items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Own products</SectionTitle>
              <ul className="space-y-2">
                {cv.products.map((p) => (
                  <li key={p.name}>
                    <a href={p.link} className="font-medium transition-colors hover:text-accent">
                      {p.name}
                    </a>
                    <p className="text-ink-muted">{p.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Languages</SectionTitle>
              <ul className="space-y-0.5 text-ink-muted">
                {cv.languages.map((l) => (
                  <li key={l.name}>
                    <span className="font-medium text-ink">{l.name}</span> · {l.level}
                  </li>
                ))}
              </ul>
            </section>

            <section className="break-inside-avoid">
              <SectionTitle>Business</SectionTitle>
              <p className="text-ink-muted">
                Freelance work is invoiced through {site.company.name}, CVR {site.company.cvr}. Available for both long-term engagements and
                smaller tasks.
              </p>
            </section>
          </aside>
        </div>

        <footer className="pt-3 mt-6 border-t print:mt-2 print:pt-1.5 meta border-line">Latest version of this CV is always available at {site.url}/cv</footer>
      </article>
    </div>
  );
}
