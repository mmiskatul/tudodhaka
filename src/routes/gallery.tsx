import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { galleryImages } from "@/lib/gallery-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Tu'do Restaurant, Banani Dhaka" },
      {
        name: "description",
        content:
          "Photographs of the dining room, café, courtyard and plates at Tụ'do Restaurant in Banani, Dhaka.",
      },
      { property: "og:title", content: "Gallery — Tu'do Restaurant" },
      {
        property: "og:description",
        content: "Food, interiors and ambience at Tụ'do, Banani, Dhaka.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) =>
        i === null ? i : (i + dir + galleryImages.length) % galleryImages.length,
      ),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  const current = index === null ? null : galleryImages[index];

  return (
    <>
      <PageHero
        eyebrow="Ambience"
        title="Gallery"
        intro="The garden room, the café counter, the courtyard at dusk — and what leaves the pass."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 3) * 80} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image"
            className="absolute right-5 top-5 text-ink-foreground/70 transition-colors hover:text-gold"
          >
            <X className="size-7" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 text-ink-foreground/70 transition-colors hover:text-gold sm:left-8"
          >
            <ChevronLeft className="size-9" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 text-ink-foreground/70 transition-colors hover:text-gold sm:right-8"
          >
            <ChevronRight className="size-9" />
          </button>
        </div>
      )}
    </>
  );
}
