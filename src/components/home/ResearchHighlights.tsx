import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Microscope } from "lucide-react";
import { CountUp } from "@/components/site/CountUp";
import { img } from "@/lib/images";

export function ResearchHighlights() {
  const projects = [
    { tag: "AI · Health", title: "Bangla Voice Diagnostics for Rural Clinics", lead: "Dr. Tasnia Rahman, CSE", img: "res-1" },
    { tag: "Energy", title: "Solar Mini-Grid Resilience for Coastal Bangladesh", lead: "Dr. Kazi Mahbubul Alam, EEE", img: "res-2" },
    { tag: "Economics", title: "Microfinance & Female Labor Force Participation", lead: "Dr. Rumana Akter, Economics", img: "res-3" },
  ];
  const stats: { value: number; suffix?: string; prefix?: string; label: string }[] = [
    { value: 1820, suffix: "+", label: "Publications" },
    { value: 32, label: "Research groups" },
    { value: 14, label: "Funded labs" },
    { value: 18, prefix: "৳", suffix: " Cr", label: "2025 funding" },
  ];
  return (
    <section className="brand-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">Research</p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
              Research with real-world impact, built for Bangladesh.
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/80">
              EWU researchers publish in top international venues and partner with national institutions to solve problems that matter at home, from rural healthcare to climate resilience.
            </p>
          </div>
          <Link to="/research" className="inline-flex items-center gap-1 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20">
            Research portal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur transition-all hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img(p.img)} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                  <Microscope className="h-3 w-3" /> {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-primary-foreground/80">{p.lead}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-10 sm:grid-cols-4 backdrop-blur">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-gold md:text-4xl">
                <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-wider text-primary-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
