import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import story from "@/assets/story.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tụ'do — Food, Art & Nature in Banani, Dhaka" },
      {
        name: "description",
        content:
          "The meaning of tụ'do, our design philosophy and how the kitchen at Tu'do Restaurant cooks across East & South-East Asia.",
      },
      { property: "og:title", content: "About Tụ'do — Food, Art & Nature" },
      {
        property: "og:description",
        content:
          "Freedom, in Vietnamese. The story and philosophy behind Tu'do Restaurant in Banani, Dhaka.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our concept"
        title="tụ'do — freedom"
        intro="A sanctuary in Banani where food, art and nature are given equal weight."
      />

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="rule-gold font-display text-3xl sm:text-4xl">The name</h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              In Vietnamese, tụ'do means freedom. We borrowed the word because it
              describes what we wanted a meal here to feel like: unhurried, unbound by a
              single border, and entirely yours for the length of an evening.
            </p>
            <p>
              Freedom, for us, is also a way of cooking. We are not tied to one national
              cuisine. We follow the dish to wherever it is cooked best — a broth from
              Hanoi, a steam basket from Guangzhou, a curry paste pounded the way it is in
              Chiang Mai.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-ink py-20 text-ink-foreground lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <img
              src={g1}
              alt="Dining nook with greenery against dark timber and a rattan pendant lamp"
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="eyebrow text-gold">Design philosophy</p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">
              Art and nature, kept close
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-foreground/70">
              <p>
                The room was drawn around its plants. Living walls soften the noise of
                Banani; unpolished timber, stone and rattan take the light down to
                something warm and low. Nothing here shines too brightly.
              </p>
              <p>
                On the walls we show work by Bangladeshi artists, changed through the
                year. In the courtyard, lantern light and leaves do the decorating. The
                intention is simple: a place quiet enough to hear the person across the
                table.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">In the kitchen</p>
            <h2 className="rule-gold mt-5 font-display text-3xl sm:text-4xl">
              Classics, cooked properly
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Stocks begin before service and simmer for twelve hours. Dumplings are
                pleated by hand each morning. Pastes are pounded, not blended. We buy fish
                and vegetables daily, and the menu bends to whatever arrives best.
              </p>
              <p>
                We season for balance rather than spectacle — sour against sweet, heat
                against herb — and we serve family style, because these are dishes meant
                to be passed around.
              </p>
            </div>
            <Link
              to="/reservations"
              className="mt-9 inline-block border border-foreground/20 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
            >
              Reserve a Table
            </Link>
          </Reveal>
          <Reveal delay={100} className="grid gap-4">
            <img
              src={story}
              alt="Chef finishing a dish on a dark ceramic plate"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <img
              src={g6}
              alt="Planted courtyard with lantern light at dusk"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">
            “A curation of timeless classics from across East & South-East Asia, in a
            peaceful sanctuary where food, art and nature meet.”
          </p>
          <p className="eyebrow mt-6">{site.addressShort}</p>
        </div>
      </section>
    </>
  );
}
