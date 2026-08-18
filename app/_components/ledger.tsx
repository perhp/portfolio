import { hero, slug, work } from "../_data/site";

/**
 * Tenure ledger: one row per client, bar length proportional to years worked.
 * Longest engagements first, one-off projects at the end. Rows link to the case below.
 */
export function Ledger({ className = "" }: { className?: string }) {
  const rows = [...work].sort((a, b) => (b.years ?? 0) - (a.years ?? 0));
  const max = Math.max(...rows.map((r) => r.years ?? 0));

  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-ink">
        <p className="eyebrow">{hero.ledger.title}</p>
        <p className="meta">0 – {max} yrs</p>
      </div>
      <ol className="divide-y divide-line">
        {rows.map((r, i) => {
          const pct = r.years ? (r.years / max) * 100 : 0;
          return (
            <li key={r.client}>
              <a
                href={`#work-${slug(r.client)}`}
                className="grid grid-cols-[minmax(0,8.5rem)_1fr_auto] items-center gap-4 py-3.5 group sm:grid-cols-[minmax(0,11rem)_1fr_auto] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="text-[15px] font-medium truncate transition-colors group-hover:text-accent">{r.client}</span>
                <span className="relative block h-2.5" aria-hidden="true">
                  {r.years ? (
                    <span className="bar" style={{ width: `${pct}%`, animationDelay: `${300 + i * 90}ms` }} />
                  ) : (
                    <span className="block w-2.5 h-2.5 rounded-xs bg-line-strong" />
                  )}
                </span>
                <span className="text-right meta tabular-nums">{r.duration}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-ink-faint">{hero.ledger.note}</p>
    </div>
  );
}
