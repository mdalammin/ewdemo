import * as React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { CALENDAR } from "@/lib/site-data";
import { img } from "@/lib/images";

export function CalendarPreview() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={img("calendar-bg")} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              <Calendar className="h-3.5 w-3.5" /> Academic Calendar
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
              Plan your semester. Every date that matters at EWU.
            </h2>
            <p className="mt-4 text-muted-foreground">
              From class start dates to convocation, exams, holidays and registration windows.
            </p>
            <Link to="/academic-calendar" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              Full academic calendar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card/90 shadow-brick backdrop-blur">
            <div className="border-b border-border bg-primary px-6 py-4 text-primary-foreground">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Upcoming</p>
              <p className="font-serif text-lg font-bold">Spring 2027 highlights</p>
            </div>
            <div className="divide-y divide-border">
              {CALENDAR.slice(0, 5).map((e) => {
                const d = new Date(e.date);
                return (
                  <div key={e.date + e.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-center">
                      <p className="text-[10px] font-bold uppercase text-primary">{d.toLocaleString("en", { month: "short" })}</p>
                      <p className="font-serif text-lg font-bold leading-none">{d.getDate()}</p>
                    </div>
                    <div className="min-w-0">
                      <h4 className="truncate font-semibold">{e.title}</h4>
                      <p className="text-xs text-muted-foreground">{d.toLocaleDateString("en", { weekday: "long", year: "numeric" })}</p>
                    </div>
                    <span className="rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase text-primary-deep">{e.type}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
