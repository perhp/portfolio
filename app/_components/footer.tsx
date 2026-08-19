import Link from "next/link";
import { site } from "../_data/site";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Work", href: "/work" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Process", href: "/process" },
      { label: "About me", href: "/about" },
      { label: "For recruiters", href: "/for-recruiters" },
      { label: "CV", href: site.cvPath },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: "LinkedIn", href: site.social.linkedin, external: true },
      { label: "GitHub", href: site.social.github, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="grid gap-10 py-12 container-x sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-5">
          <Link href="/" className="text-lg display">
            {site.name}
            <span className="text-accent">.</span>
          </Link>
          <p className="max-w-xs mt-3 text-sm leading-relaxed text-ink-muted">
            {site.role}. Based in Denmark, working remotely with clients across Europe and the US.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <p className="eyebrow">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
              {col.links.map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
                      {l.label} ↗
                    </a>
                  ) : (
                    <Link href={l.href} className="transition-colors hover:text-ink">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="flex flex-col gap-2 py-5 container-x meta sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.company.name} · CVR {site.company.cvr}
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
