import * as React from "react";
import { GALLERY_KEYS } from "@/lib/images";
import { img } from "@/lib/images";
import { SectionHead } from "./SectionHead";

export function GalleryBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHead
          eyebrow="Campus Gallery"
          title="A glimpse of life at EWU."
          subtitle="Students, classrooms, events and quiet corners of our Aftabnagar campus."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY_KEYS.map((k, i) => (
            <div
              key={k}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-background ${
                i === 0 || i === 3 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={img(k)}
                alt={`EWU campus moment ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
