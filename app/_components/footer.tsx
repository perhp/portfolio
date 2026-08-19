import Link from "next/link";
import { site } from "../_data/site";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col gap-3 container-x meta sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.company.name} · CVR {site.company.cvr}
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href="/services" className="transition-colors hover:text-ink">
            Services
          </Link>
          <Link href="/industries" className="transition-colors hover:text-ink">
            Industries
          </Link>
          <Link href="/work" className="transition-colors hover:text-ink">
            Work
          </Link>
          <Link href="/process" className="transition-colors hover:text-ink">
            Process
          </Link>
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
          <Link href="/for-recruiters" className="transition-colors hover:text-ink">
            For recruiters
          </Link>
          <Link href={site.cvPath} className="transition-colors hover:text-ink">
            CV
          </Link>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
            {site.email}
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a href={site.social.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
