import * as React from "react";
import { GraduationCap, BookOpen, Users, Building2 } from "lucide-react";
import { CountUp } from "@/components/site/CountUp";

const STATS = [
  { value: 12400, suffix: "+", label: "Students", icon: GraduationCap },
  { value: 30, suffix: "+", label: "Programs", icon: BookOpen },
  { value: 320, suffix: "+", label: "Faculty", icon: Users },
  { value: 180, suffix: "+", label: "Industry partners", icon: Building2 },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-xl px-3 py-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <s.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-serif text-2xl font-bold leading-none text-foreground md:text-3xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
