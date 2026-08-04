import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-3xl">{site.wordmark}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/65">
            Pan-Asian cooking in a quiet Banani garden — a sanctuary of food, art and
            nature.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="border border-ink-foreground/20 p-2.5 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="border border-ink-foreground/20 p-2.5 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/50">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/reservations", label: "Reservations" },
              { to: "/gallery", label: "Gallery" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-ink-foreground/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/50">Hours</h2>
          <dl className="mt-5 space-y-4 text-sm text-ink-foreground/70">
            <div>
              <dt className="text-ink-foreground">Restaurant</dt>
              <dd>{site.hours.restaurant}</dd>
            </div>
            <div>
              <dt className="text-ink-foreground">Café</dt>
              <dd>{site.hours.cafe}</dd>
            </div>
          </dl>
          <address className="mt-6 space-y-3 text-sm not-italic text-ink-foreground/70">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone className="size-4 shrink-0" /> {site.phone}
            </a>
            <p className="flex gap-2">
              <MapPin className="size-4 shrink-0" /> {site.address}
            </p>
          </address>
        </div>

        <div>
          <h2 className="eyebrow text-ink-foreground/50">Find us</h2>
          <div className="mt-5 overflow-hidden border border-ink-foreground/15">
            <iframe
              title="Map to Tu'do Restaurant, Banani, Dhaka"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-52 w-full grayscale-[0.4]"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ink-foreground/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Tu'do Restaurant, Dhaka. All rights reserved.</p>
          <p>{site.instagramHandle}</p>
        </div>
      </div>
    </footer>
  );
}
