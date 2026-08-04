export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink pb-20 pt-36 text-ink-foreground sm:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/65">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
