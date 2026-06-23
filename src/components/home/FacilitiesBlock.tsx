import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, BookOpen, Monitor, FlaskConical,
  Mic2, Utensils, Trophy, HeartPulse, Bus,
} from "lucide-react";
import { FACILITIES } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

const FACILITY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Monitor, FlaskConical, Mic2, Utensils, Trophy, HeartPulse, Bus,
};

function FacilityIcon({ iconKey }: { iconKey: string }) {
  const Icon = FACILITY_ICONS[iconKey] ?? Building2;
  return <Icon className="h-4 w-4" />;
}

// ── Hero card ─────────────────────────────────────────────────────────────────
function HeroCard({
  facility,
  hoverFacility,
}: {
  facility: (typeof FACILITIES)[number];
  hoverFacility: (typeof FACILITIES)[number];
}) {
  const [hovered, setHovered] = React.useState(false);
  const shown = hovered ? hoverFacility : facility;

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer lg:row-span-2"
      style={{ minHeight: 480 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Base image */}
      <img
        src={img(facility.img)}
        alt={facility.name}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
        loading="lazy"
      />
      {/* Hover image */}
      <img
        src={img(hoverFacility.img)}
        alt=""
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />

      <span className="absolute left-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-primary shadow-sm">
        <FacilityIcon iconKey={shown.icon} />
      </span>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
          Featured
        </p>
        <h3 className="font-serif text-2xl font-bold leading-tight text-white">
          {shown.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{shown.summary}</p>
      </div>
    </div>
  );
}

// ── Grid card ─────────────────────────────────────────────────────────────────
function GridCard({
  facility,
  hoverFacility,
}: {
  facility: (typeof FACILITIES)[number];
  hoverFacility: (typeof FACILITIES)[number];
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative h-38 overflow-hidden">
        <img
          src={img(facility.img)}
          alt={facility.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
          loading="lazy"
        />
        <img
          src={img(hoverFacility.img)}
          alt=""
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
        />
        <span className="absolute left-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-primary shadow-sm">
          <FacilityIcon iconKey={facility.icon} />
        </span>
      </div>

      {/* Text */}
      <div className="px-4 py-2">
        <h3 className="font-serif text-sm font-bold">{facility.name}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {facility.summary}
        </p>
      </div>
    </div>
  );
}

// ── Main block ────────────────────────────────────────────────────────────────
export function FacilitiesBlock() {
  const facilities = FACILITIES.slice(0, 6);
  const next = (i: number) => FACILITIES[(i + 1) % FACILITIES.length];

  const hero = facilities[0];
  const grid4 = facilities.slice(1, 5);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <SectionHead
          eyebrow="Facilities"
          title="A campus designed for learning, living and building."
        />
        <Link
          to="/facilities"
          className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex"
        >
          Tour all facilities <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Bento grid */}
      <div className="mt-10 grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
        <HeroCard facility={hero} hoverFacility={next(0)} />
        {grid4.map((f, i) => (
          <GridCard key={f.name} facility={f} hoverFacility={next(i + 1)} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-7 text-center sm:hidden">
        <Link
          to="/facilities"
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          Tour all facilities <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}