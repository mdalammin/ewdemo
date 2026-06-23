// HeroSlider.tsx
"use client";

import * as React from "react";
import { img } from "@/lib/images";
import gsap from "gsap";

const SLIDES = [
  {
    url: img("hero-2"),
    alt: "EWU campus courtyard",
    label: "Welcome to EWU",
    heading: "Shaping Bangladesh's brightest minds for the world.",
    sub: "A place where innovation meets tradition, and every student finds their purpose.",
  },
  {
    url: img("hero-3"),
    alt: "EWU campus aerial view",
    label: "Our Campus",
    heading: "A world-class campus built for tomorrow's leaders.",
    sub: "State-of-the-art facilities spread across a vibrant, green academic landscape.",
  },
  {
    url: img("hero-4"),
    alt: "Campus cultural festival",
    label: "Student Life",
    heading: "Where culture, creativity, and community come alive.",
    sub: "Festivals, clubs, and events that make university life truly unforgettable.",
  },
  {
    url: img("hero-6"),
    alt: "EWU academic achievement ceremony",
    label: "Excellence",
    heading: "Recognized for academic achievement at every level.",
    sub: "Our students and faculty consistently set new benchmarks of excellence.",
  },
  {
    url: img("hero-5"),
    alt: "EWU graduation ceremony",
    label: "Graduation",
    heading: "Every cap tossed is a dream realized.",
    sub: "Thousands of graduates shaping the nation's future across every sector.",
  },
  {
    url: img("hero-7"),
    alt: "EWU library and learning commons",
    label: "Knowledge",
    heading: "Endless knowledge at the heart of our campus.",
    sub: "Our library and learning commons — open, resourceful, and always inspiring.",
  },
];

interface HeroSliderProps {
  onSlideChange?: (index: number, direction: "left" | "right") => void;
}

export function HeroSlider({ onSlideChange }: HeroSliderProps) {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const directionRef = React.useRef<"left" | "right">("right");

  const goTo = React.useCallback(
    (next: number) => {
      const dir = next > current ? "right" : "left";
      directionRef.current = dir;
      setCurrent(next);
      onSlideChange?.(next, dir);
    },
    [current, onSlideChange]
  );

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      const next = (current + 1) % SLIDES.length;
      directionRef.current = "right";
      setCurrent(next);
      onSlideChange?.(next, "right");
    }, 5000);
    return () => clearInterval(t);
  }, [paused, current, onSlideChange]);

  return (
    <div
      className="absolute inset-0 h-full w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((s, idx) => (
        <img
          key={s.url}
          src={s.url}
          alt={s.alt}
          loading={idx === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dot nav */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => goTo(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === current ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export { SLIDES };