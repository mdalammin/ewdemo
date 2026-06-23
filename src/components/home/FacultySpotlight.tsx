import * as React from "react";
import { Link } from "@tanstack/react-router";
import { FACULTY } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

function Stat({ n, l }: { n: React.ReactNode; l: string }) {
  return (
    <div>
      <p className="font-serif text-lg font-bold text-foreground">{n}</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p>
    </div>
  );
}

export function FacultySpotlight() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Faculty Spotlight" title="Taught by Bangladesh's leading academics." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FACULTY.slice(0, 3).map((f) => (
          <Link key={f.id} to="/faculty/$id" params={{ id: f.id }} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={img(f.img)} alt={f.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg font-bold leading-tight">{f.name}</h3>
                <p className="text-xs text-white/85">{f.designation}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-1.5">
                {f.interests.slice(0, 3).map((i) => (
                  <span key={i} className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary-deep">{i}</span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 border-t border-border pt-4 text-center">
                <Stat n={f.papers} l="Papers" />
                <Stat n={f.cites.toLocaleString()} l="Citations" />
                <Stat n={f.h} l="h-index" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
