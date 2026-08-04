import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Tu'do Restaurant, Banani Dhaka" },
      {
        name: "description",
        content:
          "Tụ'do Restaurant, House 59, Road 7, Block F, Banani, Dhaka 1213. Call +880 1329-673193. Restaurant 5:00 PM – 11:30 PM, café 12:00 PM – 10:30 PM.",
      },
      { property: "og:title", content: "Contact — Tu'do Restaurant, Banani Dhaka" },
      {
        property: "og:description",
        content: "Address, phone, hours and directions to Tụ'do in Banani, Dhaka.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="Contact"
        intro="Tucked off Road 7 in Block F, Banani — look for the green wall and the lanterns."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="space-y-10">
            <div>
              <h2 className="eyebrow">Address</h2>
              <address className="mt-4 flex gap-3 text-base not-italic leading-relaxed">
                <MapPin className="mt-1 size-5 shrink-0 text-gold" />
                {site.address}
              </address>
            </div>

            <div>
              <h2 className="eyebrow">Telephone</h2>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-3 font-display text-2xl transition-colors hover:text-gold"
              >
                <Phone className="size-5 text-gold" /> {site.phone}
              </a>
            </div>

            <div>
              <h2 className="eyebrow">Hours</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <dt className="font-display text-lg">Restaurant</dt>
                    <dd className="text-muted-foreground">{site.hours.restaurant}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <dt className="font-display text-lg">Café</dt>
                    <dd className="text-muted-foreground">{site.hours.cafe}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="eyebrow">Social</h2>
              <div className="mt-4 flex gap-4">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="size-4" /> Instagram
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground/20 px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
                >
                  <Facebook className="size-4" /> Facebook
                </a>
              </div>
            </div>

            <Link
              to="/reservations"
              className="inline-block border border-gold bg-gold px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-transparent hover:text-foreground"
            >
              Reserve a Table
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <iframe
              title="Map showing Tu'do Restaurant, House 59, Road 7, Block F, Banani, Dhaka"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[32rem] w-full border border-border grayscale-[0.3]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
