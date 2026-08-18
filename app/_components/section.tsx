/** Sticky title column on the left, content on the right. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 scroll-mt-16 border-b border-line ${className}`}>
      <div className="grid gap-12 container-x lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 section-title">{title}</h2>
            {intro && <p className="mt-5 leading-relaxed text-ink-muted">{intro}</p>}
          </div>
        </div>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
