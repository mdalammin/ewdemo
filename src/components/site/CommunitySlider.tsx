import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROW1 = [
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop", alt: "Students on campus" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop", alt: "Faculty teamwork" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", alt: "Students collaborating" },
  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", alt: "Graduation ceremony" },
  { src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1200&auto=format&fit=crop", alt: "Library and study" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", alt: "Team discussion" },
];

const ROW2 = [
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", alt: "Campus life" },
  { src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200&auto=format&fit=crop", alt: "Research lab" },
  { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop", alt: "Seminar session" },
  { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop", alt: "Students learning" },
  { src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop", alt: "Campus community" },
  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop", alt: "Classroom" },
];

function ScrollRow({
  images,
  direction,
  scrollTriggerId,
}: {
  images: { src: string; alt: string }[];
  direction: "ltr" | "rtl"; // ltr = right-to-left on scroll-down; rtl = left-to-right
  scrollTriggerId: string;
}) {
  const rowRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const row = rowRef.current;
    const track = trackRef.current;
    if (!row || !track) return;

    const totalWidth = track.scrollWidth / 2; // half because images are duplicated
    const sign = direction === "ltr" ? -1 : 1;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: direction === "ltr" ? 0 : -totalWidth },
        {
          x: direction === "ltr" ? -totalWidth : 0,
          ease: "none",
          scrollTrigger: {
            id: scrollTriggerId,
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }, row);

    return () => ctx.revert();
  }, [direction, scrollTriggerId]);

  const allImages = [...images, ...images]; // duplicate for seamless loop

  return (
    <div ref={rowRef} className="overflow-hidden">
      <div
        ref={trackRef}
        className="flex gap-4 will-change-transform"
        style={{ width: "max-content" }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className="relative h-[280px] w-[420px] shrink-0 overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-medium text-white/70">
              {img.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommunitySlider() {
  return (
    <section className="w-full overflow-hidden bg-background">
      {/* Header */}
      <div className="py-14 text-center px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Our People</p>
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Our Community</h2>
        <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
          A vibrant community of faculty, students, and researchers — united by a shared passion for learning.
        </p>
      </div>

      {/* Row 1: slides right-to-left on scroll down */}
      <ScrollRow images={ROW1} direction="ltr" scrollTriggerId="community-row1" />

      {/* Gap between rows */}
      <div className="h-4" />

      {/* Row 2: slides left-to-right on scroll down (opposite) */}
      <ScrollRow images={ROW2} direction="rtl" scrollTriggerId="community-row2" />

      <div className="pb-12" />
    </section>
  );
}
