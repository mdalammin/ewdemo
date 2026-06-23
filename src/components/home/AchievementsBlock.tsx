"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/site-data";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AchievementsBlock() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        end: "bottom bottom",
        pin: ".achievements-left",
        pinSpacing: false,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="flex gap-16 lg:items-start">
        {/* Left — pinned by GSAP */}
        <div className="achievements-left hidden lg:block lg:w-[38%]">
          <SectionHead
            eyebrow="Our Achievements"
            title="Trophies, medals and the moments that defined our year."
            subtitle="From national programming contests to international debate finals, EWU students and faculty are winning where it counts. These accomplishments showcase the talent, determination, and creativity that thrive across our campus. Whether in academics, research, innovation, athletics, or community engagement, EWU continues to make its mark on prestigious platforms at home and abroad. Celebrate the achievements that have shaped our year and inspired our future."
          />
        </div>

        {/* Right — natural scroll */}
        <div className="flex w-full flex-col gap-6 lg:w-[62%]">
          {/* Mobile heading */}
          <div className="lg:hidden">
            <SectionHead
              eyebrow="Our Achievements"
              title="Trophies, medals and the moments that defined our year."
              subtitle="From national programming contests to international debate finals, EWU students and faculty are winning where it counts."
            />
          </div>

          {ACHIEVEMENTS.map((a) => (
            <div
              key={a.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img(a.img)}
                  alt={a.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
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
      </div>
    </section>
  );
}