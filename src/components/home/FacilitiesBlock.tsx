import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, BookOpen, Monitor, FlaskConical, Mic2, Utensils, Trophy, HeartPulse, Bus } from "lucide-react";
import { FACILITIES } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

const FACILITY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Monitor,
  FlaskConical,
  Mic2,
  Utensils,
  Trophy,
  HeartPulse,
  Bus,
};

export function FacilitiesBlock() {
  const featured = FACILITIES.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Facilities" title="A campus designed for learning, living and building." />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((f) => {
          const Icon = FACILITY_ICONS[f.icon] ?? Building2;
          return (
            <div key={f.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img(f.img)} alt={f.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background/95 text-primary shadow-brick">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold">{f.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Link to="/facilities" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Tour our facilities <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
