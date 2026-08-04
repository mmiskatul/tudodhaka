import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, Leaf, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { menus, type MenuKey } from "@/lib/menu-data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Tu'do Restaurant, Banani Dhaka" },
      {
        name: "description",
        content:
          "Food, café and drink menus at Tụ'do: pan-Asian starters, mains, noodles, coffee and signature cocktails in Banani, Dhaka.",
      },
      { property: "og:title", content: "Menu — Tu'do Restaurant" },
      {
        property: "og:description",
        content: "Pan-Asian food, café and drink menus at Tụ'do, Banani, Dhaka.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const keys: MenuKey[] = ["food", "cafe", "drinks"];

const tagMeta = {
  chef: { icon: Star, label: "Chef's special" },
  spicy: { icon: Flame, label: "Spicy" },
  veg: { icon: Leaf, label: "Vegetarian" },
} as const;

function MenuPage() {
  const [active, setActive] = useState<MenuKey>("food");
  const menu = menus[active];

  return (
    <>
      <PageHero
        eyebrow="Kitchen & bar"
        title="The Menu"
        intro="Three menus, one kitchen. Prices in Bangladeshi Taka, inclusive of VAT."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <div
          role="tablist"
          aria-label="Menu sections"
          className="flex flex-wrap gap-2 border-b border-border pb-px"
        >
          {keys.map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={active === k}
              onClick={() => setActive(k)}
              className={cn(
                "px-5 py-3 text-[0.72rem] uppercase tracking-[0.2em] transition-colors",
                active === k
                  ? "border-b-2 border-gold text-foreground"
                  : "border-b-2 border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {menus[k].label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{menu.note}</p>

        <div className="mt-12 space-y-16">
          {menu.sections.map((section, si) => (
            <Reveal key={`${active}-${section.title}`} delay={si * 60}>
              <h2 className="rule-gold font-display text-3xl">{section.title}</h2>
              <ul className="mt-9 space-y-8">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 border-b border-border/70 pb-6 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl">{item.name}</h3>
                        {item.tags?.map((t) => {
                          const Icon = tagMeta[t].icon;
                          return (
                            <span key={t} title={tagMeta[t].label}>
                              <Icon
                                aria-hidden
                                className={cn(
                                  "size-3.5",
                                  t === "spicy" ? "text-terracotta" : "text-gold",
                                )}
                              />
                              <span className="sr-only">{tagMeta[t].label}</span>
                            </span>
                          );
                        })}
                      </div>
                      <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm tracking-wide text-muted-foreground">
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <Star className="size-3.5 text-gold" /> Chef's special
          </span>
          <span className="inline-flex items-center gap-2">
            <Flame className="size-3.5 text-terracotta" /> Spicy
          </span>
          <span className="inline-flex items-center gap-2">
            <Leaf className="size-3.5 text-gold" /> Vegetarian
          </span>
          <span className="ml-auto">
            Allergies? Speak with us on{" "}
            <a href={site.phoneHref} className="underline underline-offset-4">
              {site.phone}
            </a>
          </span>
        </div>
      </section>
    </>
  );
}
