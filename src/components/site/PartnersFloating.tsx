import { Handshake } from "lucide-react";

import baete from "@/assets/client/BAETE.jpg";
import biom from "@/assets/client/BIOM.jpg";
import bracBank from "@/assets/client/Brac-Bank-Tara-Certificate_East-West-University.jpg";
import cfa from "@/assets/client/CFA-UAP-Certificate_East-West-University.jpg";
import emporiaState from "@/assets/client/Emporia-State-University.jpg";
import icsb from "@/assets/client/ICSB.jpg";
import asianInstitute from "@/assets/client/Logo-of-Asian-Institute-of-Technology.jpg";
import banglalink from "@/assets/client/Logo-of-Banglalink.jpg";
import macquarie from "@/assets/client/Logo-of-Macquarie-University.jpg";
import usaid from "@/assets/client/Logo-of-USAID.jpg";
import acbsp from "@/assets/client/acbsp.jpg";
import acca from "@/assets/client/acca-border.jpg";
import ca from "@/assets/client/ca-border.jpg";
import icmab from "@/assets/client/icmab-border.jpg";
import washingtonAccord from "@/assets/client/wa_acc.jpg";

const PARTNERS = [
  { src: baete, alt: "BAETE" },
  { src: washingtonAccord, alt: "Washington Accord" },
  { src: acbsp, alt: "ACBSP" },
  { src: ca, alt: "ICAB / CA" },
  { src: icmab, alt: "ICMAB" },
  { src: acca, alt: "ACCA" },
  { src: biom, alt: "BIOM" },
  { src: icsb, alt: "ICSB" },
  { src: banglalink, alt: "Banglalink" },
  { src: macquarie, alt: "Macquarie University" },
  { src: asianInstitute, alt: "Asian Institute of Technology" },
  { src: emporiaState, alt: "Emporia State University" },
  { src: usaid, alt: "USAID" },
  { src: bracBank, alt: "Brac Bank" },
  { src: cfa, alt: "CFA" },
];

export function PartnersFloating() {
  // duplicate the row so the marquee can scroll seamlessly
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            <Handshake className="h-3.5 w-3.5" /> Partnerships &amp; Affiliates
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl text-balance">
            Globally accredited. Locally connected.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            EWU is recognised by leading professional bodies and partners with universities, regulators and industry across four continents.
          </p>
        </div>

        <div
          className="group relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max gap-6 animate-[partners-marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            {loop.map((p, i) => (
              <div
                key={`${p.alt}-${i}`}
                className="flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-background px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-brick hover:border-primary/30"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
