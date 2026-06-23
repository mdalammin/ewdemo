import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DEPARTMENTS, DEPT_IMG_KEYS } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

export function FeaturedDepartments() {
  const featured = DEPARTMENTS.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead eyebrow="Departments" title="Where will you study?" subtitle="Explore six faculties and 30+ rigorously designed programs taught by Bangladesh's leading academics." />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((d, i) => (
          <Link
            key={d.slug}
            to="/departments/$slug"
            params={{ slug: d.slug }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={img(DEPT_IMG_KEYS[i] ?? "hero-2")}
                alt={d.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-brick">
                {d.short}
              </span>
              <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg font-bold text-white">
                {d.name}
              </h3>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-muted-foreground">{d.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>{d.students.toLocaleString()} students · {d.faculty_count} faculty</span>
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/departments" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          View all departments <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
