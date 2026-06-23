import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Linkedin, MapPin, Phone, Mail, LifeBuoy, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-foreground">

      {/* ── Global CTA Banner ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#0c1f3f]">
        {/* Warm radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(166,75,42,0.22),transparent)]" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 py-14 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
              Admission Open · Fall 2026
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-sans text-3xl font-black leading-tight text-white md:text-4xl lg:text-[2.75rem]">
            Shape Your Future with
            <br />
            <span className="text-[#f5a623]">East West University</span>
          </h2>

          {/* Sub-copy */}
          <p className="mt-4 mx-auto max-w-xl text-sm leading-relaxed text-white/60">
            Join 30,000+ alumni building Bangladesh's tomorrow.
            Scholarships, world-class faculty, and a thriving campus await.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12px] font-black uppercase tracking-wider text-[#0c1f3f] transition-all hover:bg-white/90 hover:shadow-[0_8px_28px_rgba(255,255,255,0.18)] cursor-pointer"
            >
              Apply Now <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-[12px] font-black uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/20 cursor-pointer"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </div>
      {/* ── End CTA Banner ────────────────────────────────────────────── */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            East West University, a leading private university in Bangladesh, building tomorrow's leaders since 1996.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[
              { i: Facebook, h: SITE.socials.facebook, label: "Facebook" },
              { i: Instagram, h: SITE.socials.instagram, label: "Instagram" },
              { i: Youtube, h: SITE.socials.youtube, label: "YouTube" },
              { i: Twitter, h: SITE.socials.twitter, label: "Twitter" },
              { i: Linkedin, h: SITE.socials.linkedin, label: "LinkedIn" },
            ].map(({ i: Icon, h, label }, idx) => (
              <a
                key={idx}
                href={h}
                aria-label={`East West University on ${label}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-foreground/75">
            {[
              ["#", "About EWU"],
              ["#", "Admission"],
              ["#", "Research"],
              ["#", "Departments"],
              ["#", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <Link to={h} className="transition-colors hover:text-primary">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Academic Calendar</h4>
          <ul className="space-y-2 text-sm text-foreground/75">
            <li>Spring Semester · Jan – May</li>
            <li>Summer Semester · Jun – Aug</li>
            <li>Fall Semester · Sep – Dec</li>
            <li>
              <Link to="/academic-calendar" className="font-medium text-primary hover:underline">
                View full calendar →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.phone}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{SITE.email}</li>
            <li className="mt-2 flex gap-2 rounded-lg border border-primary/20 bg-primary-soft/40 p-3">
              <LifeBuoy className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-foreground/85">
                <strong className="font-semibold text-primary-deep">24/7 Campus Helpline </strong>
                <br />
                {SITE.emergency}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} East West University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
