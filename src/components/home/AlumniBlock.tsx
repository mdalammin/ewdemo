import * as React from "react";
import { Link } from "@tanstack/react-router";
import { Quote, ArrowUpRight } from "lucide-react";
import { ALUMNI } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

export function AlumniBlock() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead
        eyebrow="Top Alumni"
        title="Where EWU graduates lead today."
        subtitle="From banks and hospitals to startups and global tech giants, our alumni are building the future."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ALUMNI.map((a) => (
          <div key={a.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={img(a.img)} alt={a.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <Quote className="absolute right-4 top-4 h-6 w-6 text-gold/80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gold">{a.batch}</p>
                <h3 className="mt-1 font-serif text-lg font-bold leading-tight">{a.name}</h3>
                <p className="text-xs text-white/90">{a.role}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <blockquote className="relative border-l-2 border-gold pl-3 text-sm italic text-foreground/85">
                "{a.quote}"
              </blockquote>
              <p className="mt-auto text-xs text-muted-foreground">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/about" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          More alumni stories <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
