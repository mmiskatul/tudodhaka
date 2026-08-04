import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tu'do Restaurant — Pan-Asian Dining in Banani, Dhaka" },
      {
        name: "description",
        content:
          "Timeless East & South-East Asian classics in a peaceful Banani garden. Reserve a table at Tụ'do, Dhaka.",
      },
      { property: "og:title", content: "Tu'do Restaurant — Pan-Asian Dining in Banani, Dhaka" },
      {
        property: "og:description",
        content:
          "Timeless East & South-East Asian classics in a peaceful Banani garden. Reserve a table at Tụ'do, Dhaka.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const signatures = [
  {
    src: dish1,
    name: "Lemongrass Grilled Beef",
    note: "Charcoal short rib, green mango, tamarind glaze.",
  },
  {
    src: dish2,
    name: "Phở Bò",
    note: "Twelve-hour broth, rice noodles, a basket of herbs.",
  },
  {
    src: dish3,
    name: "Salt & Pepper Prawns",
    note: "Sichuan pepper, curry leaf, bird's eye chilli.",
  },
  {
    src: dish4,
    name: "Pork & Chive Dumplings",
    note: "Hand-pleated each morning, black vinegar.",
  },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <img
          src={hero}
          alt="Tu'do dining room at dusk with warm lantern light and living green walls"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-3xl px-6 pt-24 text-center text-ink-foreground">
          <p className="eyebrow text-gold">Banani · Dhaka</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
            tụ'do
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ink-foreground/80">
            {site.tagline}
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/reservations"
              className="w-full border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-transparent hover:text-gold sm:w-auto"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="w-full border border-ink-foreground/40 px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink-foreground transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="rule-gold mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Freedom, quietly served
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Tụ'do is Vietnamese for freedom — the freedom to wander a continent in one
                sitting, and the freedom of an hour that belongs entirely to you.
              </p>
              <p>
                Our kitchen looks east and south-east: Hanoi broths, Cantonese steam,
                Bangkok heat, Malay spice. Nothing is reinvented for its own sake. Recipes
                are cooked the way they were taught, then finished with produce from our
                own markets here in Dhaka.
              </p>
              <p>
                The room was built around a garden. Living walls, unpolished timber,
                lantern light and works by Bangladeshi artists — a sanctuary where food,
                art and nature keep each other company.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 border-b border-foreground/25 pb-1 text-[0.72rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
            >
              Read our philosophy <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={story}
              alt="Chef finishing a dish on a dark ceramic plate"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Signatures */}
      <section className="bg-ink py-24 text-ink-foreground lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-gold">Signatures</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              Dishes we are known for
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {signatures.map((d, i) => (
              <Reveal as="li" key={d.name} delay={i * 90}>
                <div className="overflow-hidden">
                  <img
                    src={d.src}
                    alt={d.name}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">
                  {d.note}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-14">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border border-ink-foreground/30 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
            >
              Explore the full menu <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Ambience teaser */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Ambience</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">A room that exhales</h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border-b border-foreground/25 pb-1 text-[0.72rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
          >
            View gallery <ArrowRight className="size-3.5" />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { src: g1, alt: "Dining nook with greenery and a rattan pendant lamp" },
            { src: g2, alt: "Café counter in morning light with filter coffee" },
            { src: g4, alt: "Smoked amber cocktail on the bar counter" },
            { src: g6, alt: "Planted courtyard with lantern light at dusk" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 80} className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hours & location strip */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
          <Reveal>
            <p className="eyebrow">Restaurant</p>
            <p className="mt-4 font-display text-3xl">{site.hours.restaurant}</p>
            <p className="mt-2 text-sm text-muted-foreground">Dinner, daily</p>
          </Reveal>
          <Reveal delay={90}>
            <p className="eyebrow">Café</p>
            <p className="mt-4 font-display text-3xl">{site.hours.cafe}</p>
            <p className="mt-2 text-sm text-muted-foreground">All-day plates & coffee</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="eyebrow">Find us</p>
            <p className="mt-4 text-base leading-relaxed">{site.addressShort}</p>
            <a
              href={site.phoneHref}
              className="mt-2 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {site.phone}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Instagram teaser */}
      <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">Follow along</p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">
            {site.instagramHandle}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Seasonal specials, quiet corners and what the kitchen is cooking this week.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
          >
            <Instagram className="size-4" /> Follow on Instagram
          </a>
        </Reveal>
      </section>
    </>
  );
}
