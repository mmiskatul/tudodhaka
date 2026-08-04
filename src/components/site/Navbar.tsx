import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/95 backdrop-blur-md py-3 shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent py-6",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-2xl tracking-tight text-ink-foreground"
        >
          {site.wordmark}
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="text-[0.8rem] uppercase tracking-[0.18em] text-ink-foreground/75 transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/reservations"
            className="inline-flex items-center border border-gold/60 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Reserve a Table
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <ul className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-5 pb-10 sm:px-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  className="font-display text-3xl text-ink-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.phoneHref}
                className="text-sm tracking-[0.15em] text-ink-foreground/70"
              >
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
