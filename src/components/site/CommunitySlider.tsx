import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Club
import businessImg from "@/assets/club/business.jpg";
import computerImg from "@/assets/club/computer.jpg";
import debateImg from "@/assets/club/debate.jpg";
import roboticsImg from "@/assets/club/robotics.jpg";

// Departments
import bbaImg from "@/assets/dept/bba.jpg";
import civilImg from "@/assets/dept/civil.jpg";
import cseImg from "@/assets/dept/cse.jpg";
import ecoImg from "@/assets/dept/eco.jpg";
import eeeImg from "@/assets/dept/eee.jpg";
import englishImg from "@/assets/dept/english.jpg";

// Research
import research1Img from "@/assets/research/research1.jpg";
import research2Img from "@/assets/research/research2.jpg";
import research3Img from "@/assets/research/research3.jpg";

gsap.registerPlugin(ScrollTrigger);

const ROW1 = [
  { src: businessImg, alt: "Business Club" },
  { src: computerImg, alt: "Computer Club" },
  { src: debateImg, alt: "Debate Club" },
  { src: roboticsImg, alt: "Robotics Club" },
  { src: bbaImg, alt: "BBA Department" },
  { src: civilImg, alt: "Civil Department" },
];

const ROW2 = [
  { src: cseImg, alt: "CSE Department" },
  { src: ecoImg, alt: "Economics Department" },
  { src: eeeImg, alt: "EEE Department" },
  { src: englishImg, alt: "English Department" },
  { src: research1Img, alt: "Research 1" },
  { src: research2Img, alt: "Research 2" },
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
