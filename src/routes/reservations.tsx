import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Tu'do Restaurant, Banani Dhaka" },
      {
        name: "description",
        content:
          "Reserve a table at Tụ'do in Banani, Dhaka. Restaurant 5:00 PM – 11:30 PM, café 12:00 PM – 10:30 PM. Call +880 1329-673193.",
      },
      { property: "og:title", content: "Reservations — Tu'do Restaurant" },
      {
        property: "og:description",
        content: "Book a table at Tụ'do, Banani, Dhaka.",
      },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: Reservations,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(80),
  phone: z
    .string()
    .trim()
    .min(6, "A reachable phone number, please")
    .max(24, "That number looks too long"),
  email: z.string().trim().email("Enter a valid email address").max(160),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  guests: z.string().min(1, "How many guests?"),
  seating: z.enum(["restaurant", "cafe"]),
  notes: z.string().trim().max(500, "Please keep this under 500 characters").optional(),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const fieldClass =
  "mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";
const labelClass = "text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground";

function Reservations() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<Values | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setDone(result.data);
  }

  return (
    <>
      <PageHero
        eyebrow="Book with us"
        title="Reservations"
        intro="Tables are held for 15 minutes. For parties of eight or more, please call and we'll arrange the room."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            {done ? (
              <div className="border border-gold/50 bg-card p-10">
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-gold text-ink">
                  <Check className="size-5" />
                </span>
                <h2 className="mt-6 font-display text-3xl">Thank you, {done.name}.</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We've noted a table for {done.guests}{" "}
                  {Number(done.guests) === 1 ? "guest" : "guests"} on {done.date} at{" "}
                  {done.time} in the{" "}
                  {done.seating === "cafe" ? "café" : "restaurant"}. Our team will confirm
                  by phone shortly. If you don't hear from us within the hour, call{" "}
                  <a href={site.phoneHref} className="underline underline-offset-4">
                    {site.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setDone(null)}
                  className="mt-8 border border-foreground/20 px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      className={fieldClass}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Phone" name="phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={fieldClass}
                      placeholder="+880 …"
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <Field label="Email" name="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-3">
                  <Field label="Date" name="date" error={errors.date}>
                    <input id="date" name="date" type="date" className={fieldClass} />
                  </Field>
                  <Field label="Time" name="time" error={errors.time}>
                    <input id="time" name="time" type="time" className={fieldClass} />
                  </Field>
                  <Field label="Guests" name="guests" error={errors.guests}>
                    <select id="guests" name="guests" defaultValue="2" className={fieldClass}>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={String(n)}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Seating" name="seating" error={errors.seating}>
                  <select
                    id="seating"
                    name="seating"
                    defaultValue="restaurant"
                    className={fieldClass}
                  >
                    <option value="restaurant">Restaurant · 5:00 PM – 11:30 PM</option>
                    <option value="cafe">Café · 12:00 PM – 10:30 PM</option>
                  </select>
                </Field>

                <Field label="Special requests" name="notes" error={errors.notes}>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className={cn(fieldClass, "resize-none")}
                    placeholder="Dietary needs, a quiet corner, an occasion…"
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-transparent hover:text-foreground sm:w-auto"
                >
                  Request a table
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-10 lg:border-l lg:border-border lg:pl-14">
            <div>
              <h2 className="eyebrow">Opening hours</h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-display text-xl">Restaurant</dt>
                  <dd className="text-muted-foreground">{site.hours.restaurant}</dd>
                </div>
                <div>
                  <dt className="font-display text-xl">Café</dt>
                  <dd className="text-muted-foreground">{site.hours.cafe}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="eyebrow">Prefer to speak with us?</h2>
              <a
                href={site.phoneHref}
                className="mt-5 inline-flex items-center gap-3 font-display text-2xl transition-colors hover:text-gold"
              >
                <Phone className="size-5 text-gold" /> {site.phone}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {site.address}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
