import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { cv } from "../_data/cv";
import { PrintButton } from "./print-button";

const { site } = cv;
const contactLinks = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: "perhp.com", href: site.url },
  { label: "linkedin.com/in/per-hansen", href: site.social.linkedin },
  { label: "github.com/perhp", href: site.social.github },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="pb-1 mb-3 text-[11px] font-semibold tracking-[0.18em] uppercase border-b text-accent border-line">{children}</h2>;
}

export default function CvPage() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-8 sm:py-12 print:p-0 print:gap-0">
      <div className="flex items-center justify-between w-full max-w-[210mm] print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink">
          <ArrowLeftIcon className="w-4 h-4" /> Back to site
        </Link>
        <PrintButton />
      </div>

      <article className="a4 max-w-full bg-white border shadow-xl rounded-sm border-line text-ink text-[10.5pt] leading-snug print:text-[9.5pt] print:leading-tight">
        {/* Header */}
        <header className="flex flex-col gap-4 pb-6 print:pb-4 border-b sm:flex-row sm:items-end sm:justify-between border-line">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight print:text-2xl">{site.name}</h1>
            <p className="mt-1 text-base text-ink-muted">{site.role}</p>
            <p className="mt-1 text-xs text-ink-faint">{site.location}</p>
          </div>
          <ul className="text-xs text-right text-ink-muted space-y-0.5">
            {contactLinks.map((c) => (
              <li key={c.href}>
                <a href={c.href} className="hover:text-ink">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        {/* Summary */}
        <section className="mt-6 print:mt-4">
          <SectionTitle>Profile</SectionTitle>
          <p className="text-ink-muted">{cv.summary}</p>
        </section>

        <div className="grid gap-8 mt-6 md:grid-cols-[1fr_58mm] print:grid-cols-[1fr_54mm] print:mt-4 print:gap-6">
          {/* Experience */}
          <section>
            <SectionTitle>Experience</SectionTitle>
            <ol className="flex flex-col gap-4 cv-experience">
              {cv.experience.map((e) => (
                <li key={e.company + e.type} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold">
                      {e.role} <span className="font-normal text-ink-muted">· {e.company}</span>
                    </h3>
                    <span className="text-xs whitespace-nowrap text-ink-faint">{e.period}</span>
                  </div>
                  <p className="text-xs text-ink-faint">
                    {e.type} · {e.summary}
                  </p>
                  <ul className="mt-1.5 print:mt-1 space-y-0.5 print:space-y-0 text-ink-muted list-disc pl-4 marker:text-ink-faint">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            <section className="break-inside-avoid">
              <SectionTitle>Skills</SectionTitle>
              <dl className="space-y-2.5">
                {Object.entries(cv.skills).map(([group, items]) => (
                  <div key={group}>
                    <dt className="text-xs font-semibold">{group}</dt>
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
                    <a href={p.link} className="font-semibold hover:text-accent">
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
                    <span className="font-semibold text-ink">{l.name}</span> · {l.level}
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

        <footer className="pt-3 mt-6 print:mt-4 text-[9px] border-t border-line text-ink-faint">
          Latest version of this CV is always available at {site.url}/cv
        </footer>
      </article>
    </div>
  );
}
