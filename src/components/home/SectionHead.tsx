import * as React from "react";

export function SectionHead({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground text-pretty">{subtitle}</p>}
    </div>
  );
}
