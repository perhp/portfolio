import { mailto, site } from "../_data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-md bg-canvas/85 border-line">
      <div className="flex items-center justify-between h-16 container-x">
        <a href="#top" className="text-lg display">
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <nav className="items-center hidden gap-8 text-sm md:flex text-ink-muted" aria-label="Sections">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a href={mailto()} className="text-sm btn btn-primary h-9">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
