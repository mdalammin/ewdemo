import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShowreelPlayer } from "@/components/site/ShowreelPlayer";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24 pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Watch · 90 seconds
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            See what a day at EWU really feels like.
          </h2>
          <p className="mt-5 text-base text-muted-foreground text-pretty">
            From early-morning labs to late-night rehearsals, our students live the EWU promise every single day.
            Press play, or just keep scrolling, the showreel will play itself.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="#" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="#" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">
              Campus life
            </Link>
          </div>
        </div>

        <ShowreelPlayer />
      </div>
    </section>
  );
}
