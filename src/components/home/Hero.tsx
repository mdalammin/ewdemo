import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroSlider } from "@/components/site/HeroSlider";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
      <HeroSlider />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24 md:py-32 lg:py-40">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Sparkles className="h-3 w-3 text-gold" /> Spring 2027 admission open
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
          Shaping Bangladesh's brightest minds for the world.
        </h1>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link to="/admission" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]">
            Apply for Admission <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/departments" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
