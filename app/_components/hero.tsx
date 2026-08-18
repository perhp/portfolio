import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { hero, mailto, site } from "../_data/site";
import { BriefForm } from "./brief-form";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="grid gap-14 pt-16 pb-16 container-x sm:pt-24 sm:pb-24 lg:grid-cols-12 lg:gap-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 animate-fade-up meta">
            {site.available && (
              <>
                <span className="inline-block w-2 h-2 bg-accent" aria-hidden="true" />
                <span className="text-ink-muted">{hero.badge}</span>
                <span aria-hidden="true" className="hidden sm:inline">
                  ·
                </span>
              </>
            )}
            <span>{site.location}</span>
          </p>

          <h1 className="mt-8 display text-[2.75rem] animate-fade-up [animation-delay:80ms] sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-balance">
            {hero.headline[0]} <span className="text-accent">{hero.headline[1]}</span>
          </h1>

          <p className="max-w-xl mt-8 text-lg leading-relaxed animate-fade-up [animation-delay:160ms] text-ink-muted">{hero.sub}</p>

          <div className="flex flex-wrap gap-3 mt-10 animate-fade-up [animation-delay:240ms]">
            <a href={mailto()} className="btn btn-primary">
              {hero.primaryCta} <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a href={site.cvPath} className="btn btn-secondary">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up [animation-delay:200ms]">
          <p className="mb-3 eyebrow">Start here</p>
          <BriefForm />
        </div>
      </div>
    </section>
  );
}
