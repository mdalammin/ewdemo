import * as React from "react";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

export function AchievementsBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead
        eyebrow="Our Achievements"
        title="Trophies, medals and the moments that defined our year."
        subtitle="From national programming contests to international debate finals, EWU students and faculty are winning where it counts."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={img(a.img)} alt={a.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground">
                <Trophy className="h-3 w-3" /> {a.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-base font-bold leading-tight">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
