import { site } from "../_data/site";

export function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col gap-3 container-x meta sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.company.name} · CVR {site.company.cvr}
        </p>
        <div className="flex gap-6">
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
