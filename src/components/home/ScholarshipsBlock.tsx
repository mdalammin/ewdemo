import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Award } from "lucide-react";
import { SCHOLARSHIPS } from "@/lib/site-data";
import { img } from "@/lib/images";

export function ScholarshipsBlock() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:block">
        <img src={img("hero-5")} alt="" className="h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/40 via-card/70 to-card" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">Scholarships</p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            Talent shouldn't depend on tuition.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Over <strong className="text-foreground">42% of EWU students</strong> receive some form of financial assistance, merit, need-based, sports or quota waivers.
          </p>
          <Link to="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
            Scholarship details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="space-y-3">
          {SCHOLARSHIPS.map((s, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
              <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm text-foreground/85">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
