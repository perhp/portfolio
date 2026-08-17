import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { hero, mailto, site } from "../_data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[32rem] -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-accent-soft),transparent_65%)] opacity-70"
      />
      <div className="pt-20 pb-16 container-x sm:pt-28 sm:pb-24">
        <div className="max-w-4xl">
          {site.available && (
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border rounded-full animate-fade-up border-line bg-surface text-ink-muted">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-accent" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              {hero.badge}
            </span>
          )}

          <h1 className="mt-6 text-4xl font-semibold tracking-tight animate-fade-up [animation-delay:80ms] sm:text-6xl lg:text-7xl text-balance">
            {hero.headline[0]}
            <br />
            <span className="text-accent">{hero.headline[1]}</span>
          </h1>

          <p className="max-w-2xl mt-6 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted sm:text-xl">
            {hero.sub}
          </p>

          <div className="flex flex-wrap gap-3 mt-8 animate-fade-up [animation-delay:240ms]">
            <a href={mailto()} className="btn btn-primary">
              {hero.primaryCta} <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href={site.cvPath} className="btn btn-secondary">
              <ArrowDownTrayIcon className="w-4 h-4" /> {hero.secondaryCta}
            </a>
          </div>

          <p className="mt-6 text-sm animate-fade-up [animation-delay:320ms] text-ink-faint">
            {site.role} · {site.location}
          </p>
        </div>
      </div>

      <div className="pb-16 container-x sm:pb-24">
        <dl className="grid grid-cols-2 gap-6 py-8 border-y border-line md:grid-cols-4">
          {hero.proof.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dt className="order-last text-sm text-ink-muted">{item.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight">{item.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center mt-8 text-sm gap-x-8 gap-y-3 text-ink-faint">
          <span className="text-xs font-semibold tracking-[0.18em] uppercase">Trusted by</span>
          {hero.trustedBy.map((name) => (
            <span key={name} className="font-semibold text-ink-muted">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
