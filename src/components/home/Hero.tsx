// Hero.tsx
"use client";

import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroSlider, SLIDES } from "@/components/site/HeroSlider";
import gsap from "gsap";

export function Hero() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const textRef = React.useRef<HTMLDivElement>(null);
  const directionRef = React.useRef<"left" | "right">("right");

  // Initial entrance animation
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text-item", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  // Slide change animation
  const handleSlideChange = React.useCallback(
    (index: number, direction: "left" | "right") => {
      directionRef.current = direction;
      const node = textRef.current;
      if (!node) return;

      const exitX = direction === "right" ? -80 : 80;
      const enterX = direction === "right" ? 80 : -80;

      const ctx = gsap.context(() => {
        // exit current text
        gsap.to(".hero-text-item", {
          x: exitX,
          opacity: 0,
          duration: 0.35,
          stagger: 0.05,
          ease: "power2.in",
          onComplete: () => {
            setSlideIndex(index);
            // enter new text from opposite side
            gsap.fromTo(
              ".hero-text-item",
              { x: enterX, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
              }
            );
          },
        });
      }, node);

      return () => ctx.revert();
    },
    []
  );

  const slide = SLIDES[slideIndex];

  return (
    <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
      <HeroSlider onSlideChange={handleSlideChange} />
      <div className="absolute inset-0 hero-overlay" />

      <div
        ref={textRef}
        className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24 md:py-32 lg:py-40"
      >
        <p className="hero-text-item inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="h-3 w-3 text-gold" />
          {slide.label}
        </p>

        <h1 className="hero-text-item max-w-4xl text-4xl font-bold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
          {slide.heading}
        </h1>

        <p className="hero-text-item max-w-2xl text-base text-primary-foreground/80 md:text-lg">
          {slide.sub}
        </p>

        <div className="hero-text-item flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/admission"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
          >
            Apply for Admission
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}