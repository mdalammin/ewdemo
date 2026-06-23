import * as React from "react";
import { Link } from "@tanstack/react-router";
import { CLUBS } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

export function ClubsBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead
          eyebrow="Club Activities"
          title="Find your people. Build your story."
          subtitle="40+ clubs and societies, academic, cultural, sports and community service."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLUBS.slice(0, 4).map((c) => (
            <Link
              key={c.slug}
              to="/clubs"
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img(c.img)}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gold-foreground">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-tight">{c.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.summary}</p>
                <p className="mt-4 text-xs font-medium text-primary">
                  {c.members} active members →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
