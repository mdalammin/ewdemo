import * as React from "react";
import { HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import { SectionHead } from "./SectionHead";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-xl border border-border bg-background">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-3 p-5 text-left">
        <span className="flex items-start gap-3 font-semibold">
          <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {q}
        </span>
        <span className={`text-primary transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="px-5 pb-5 pl-13 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}

export function FAQBlock() {
  return (
    <section className="bg-card border-y border-border">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHead eyebrow="FAQ" title="Quick answers for prospective students." center />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}
