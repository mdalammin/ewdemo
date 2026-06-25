import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { facultyById, deptBySlug } from "@/lib/site-data";
import {
  Download, Mail, Phone, GraduationCap, BookOpen, Award, FileText,
  ExternalLink, MapPin, Clock, ChevronDown, Users, Globe, Mic2,
  Newspaper, FlaskConical, Star, Filter, Building2
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, AreaChart, Area, BarChart, Bar
} from "recharts";
import { toast } from "sonner";

export const Route = createFileRoute("/faculty/$id")({
  loader: ({ params }) => {
    const f = facultyById(params.id);
    if (!f) throw notFound();
    return { f, dept: deptBySlug(f.dept) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.f.name ?? "Faculty"} — EWU` },
      { name: "description", content: loaderData?.f.bio ?? "EWU faculty profile" },
      { property: "og:title", content: `${loaderData?.f.name ?? "Faculty"} — EWU` },
      { property: "og:description", content: loaderData?.f.bio ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60dvh] place-items-center text-center">
      <div>
        <p className="font-serif text-3xl font-bold">Faculty not found</p>
        <Link to="/faculty" className="mt-4 inline-block text-primary hover:underline">Browse all faculty</Link>
      </div>
    </div>
  ),
  component: FacultyProfile,
});

/* ─── tiny helpers ─────────────────────────────────────── */
function SectionLabel({ n, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-bold tracking-[0.18em] text-primary/60 uppercase">{String(n).padStart(2, "0")}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-xs font-bold tracking-[0.18em] text-primary/60 uppercase">{label}</span>
    </div>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 ${className}`}>
      {children}
    </div>
  );
}

function StatBadge({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-1">
      <Icon className="h-4 w-4 text-primary" />
      <p className="font-serif text-2xl font-bold mt-1">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

/* ─── nav links ─────────────────────────────────────────── */
const NAV = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Grants" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

/* ─── main component ────────────────────────────────────── */
export function FacultyProfile() {
  const { f, dept } = Route.useLoaderData();
  const [pubFilter, setPubFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef({});

  /* scroll-spy */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* chart data */
  const citeData = [
    { y: "2019", c: 62 }, { y: "2020", c: 95 }, { y: "2021", c: 142 },
    { y: "2022", c: 198 }, { y: "2023", c: 264 }, { y: "2024", c: 312 },
    { y: "2025", c: 398 }, { y: "2026", c: 431 },
  ];
  const pubData = [
    { y: "2019", n: 3 }, { y: "2020", n: 4 }, { y: "2021", n: 6 },
    { y: "2022", n: 8 }, { y: "2023", n: 9 }, { y: "2024", n: 11 },
    { y: "2025", n: 12 }, { y: "2026", n: 14 },
  ];

  /* expertise */
  const expertise = [
    { label: f.interests[0] ?? "Research Area 1", pct: 94 },
    { label: f.interests[1] ?? "Research Area 2", pct: 87 },
    { label: f.interests[2] ?? "Research Area 3", pct: 81 },
    { label: "Academic Writing", pct: 90 },
    { label: "Statistical Modeling", pct: 76 },
  ];

  /* publications */
  const allPubs = [
    { type: "Journal", year: 2026, title: `Recent advances in ${f.interests[0]}`, venue: `Journal of ${dept?.short ?? "Research"}`, cites: 44, doi: "https://doi.org" },
    { type: "Conference", year: 2025, title: `Studies on ${f.interests[1] ?? "applied research"}`, venue: "International Review", cites: 98, doi: "https://doi.org" },
    { type: "Journal", year: 2024, title: `Bangladesh case study in ${f.interests[0]}`, venue: "National Conference Proceedings", cites: 211, doi: "https://doi.org" },
    { type: "Book Chapter", year: 2023, title: `A primer on ${f.interests[0]}`, venue: "EWU Press", cites: 135, doi: "https://doi.org" },
    { type: "Conference", year: 2022, title: `Governance issues in ${f.interests[2] ?? "technology"}`, venue: "IEEE Access", cites: 302, doi: "https://doi.org" },
    { type: "Journal", year: 2021, title: `Empirical study of ${f.interests[1] ?? "systems"}`, venue: "ACM Transactions", cites: 419, doi: "https://doi.org" },
  ];
  const pubTypes = ["All", "Journal", "Conference", "Book Chapter"];
  const filtered = pubFilter === "All" ? allPubs : allPubs.filter((p) => p.type === pubFilter);

  /* grants */
  const grants = [
    { year: 2025, funder: "University Grants Commission", title: `${f.interests[0]} Research Initiative`, amount: "BDT 28L" },
    { year: 2024, funder: "ICT Division Bangladesh", title: `Applied ${f.interests[1] ?? "Technology"} Project`, amount: "BDT 15L" },
    { year: 2023, funder: "World Bank HEQEP", title: "Faculty Excellence Grant", amount: "BDT 12L" },
    { year: 2022, funder: "EWU Research Fund", title: `Pilot study in ${f.interests[0]}`, amount: "BDT 6L" },
  ];

  /* awards */
  const awards = [
    { year: 2025, title: "Best Researcher Award", org: "East West University" },
    { year: 2024, title: "Excellence in Teaching Award", org: "EWU Academic Senate" },
    { year: 2023, title: "Outstanding Paper Award", org: "IEEE Bangladesh Section" },
    { year: 2022, title: "Young Scientist Recognition", org: "Bangladesh Academy of Sciences" },
  ];

  /* courses */
  const courses = [
    { code: `${dept?.short ?? "CS"} 401`, level: "Undergraduate", title: `Foundations of ${f.interests[0]}`, term: "Fall 2025" },
    { code: `${dept?.short ?? "CS"} 612`, level: "Graduate", title: `Advanced ${f.interests[1] ?? "Research Methods"}`, term: "Spring 2026" },
    { code: `${dept?.short ?? "CS"} 701`, level: "Doctoral", title: `Doctoral Seminar in ${f.interests[0]}`, term: "Year-round" },
  ];

  /* news */
  const news = [
    { tag: "Publication", date: "Jun 18, 2026", title: `New paper on ${f.interests[0]} released` },
    { tag: "Grant", date: "May 02, 2026", title: "UGC Research Grant awarded" },
    { tag: "Speaking", date: "Apr 11, 2026", title: `Keynote at International ${dept?.short ?? "CS"} Conference` },
    { tag: "Achievement", date: "Mar 20, 2026", title: "Doctoral student wins best thesis award" },
  ];

  /* cv generator */
  function generateCV() {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>CV — ${f.name}</title>
<style>
body{font-family:Georgia,serif;max-width:780px;margin:40px auto;padding:24px;color:#222;line-height:1.6}
h1{color:#a64b2a;margin:0 0 4px;font-size:32px}
h2{color:#a64b2a;border-bottom:2px solid #eadbd3;padding-bottom:6px;margin-top:32px;font-size:14px;text-transform:uppercase;letter-spacing:2px}
.sub{color:#7a281a;font-size:14px;margin:2px 0 16px}
ul{padding-left:20px;margin:8px 0}li{margin:4px 0}
.stat{display:inline-block;margin-right:24px;font-weight:bold}
.pub{margin:8px 0;padding:8px 12px;border-left:3px solid #a64b2a}
table{width:100%;border-collapse:collapse}td{padding:6px 8px;border-bottom:1px solid #eee;font-size:13px}
@media print{body{margin:20px}}
</style></head><body>
<h1>${f.name}</h1>
<p class="sub">${f.designation} · ${dept?.name ?? ""} · East West University, Dhaka</p>
<p>${f.bio}</p>
<h2>Education</h2><ul>${(f.education).map((e) => `<li>${e}</li>`).join("")}</ul>
<h2>Research Interests</h2><p>${f.interests.join(" · ")}</p>
<h2>Research Metrics</h2>
<p><span class="stat">Publications: ${f.papers}</span><span class="stat">Citations: ${f.cites}</span><span class="stat">h-index: ${f.h}</span></p>
<h2>Selected Publications</h2>
${allPubs.map((p, i) => `<div class="pub"><b>${p.title}</b> — ${p.venue}, ${p.year}. Cited ${p.cites}×</div>`).join("")}
<h2>Grants & Projects</h2>
<table>${grants.map((g) => `<tr><td>${g.year}</td><td>${g.title}</td><td>${g.funder}</td><td>${g.amount}</td></tr>`).join("")}</table>
<h2>Awards</h2><ul>${awards.map((a) => `<li>${a.year} — ${a.title}, ${a.org}</li>`).join("")}</ul>
<h2>Teaching</h2><ul>${courses.map((c) => `<li>${c.code}: ${c.title} (${c.term})</li>`).join("")}</ul>
<h2>Contact</h2>
<p>${f.id}@ewubd.edu · East West University, Aftabnagar, Dhaka 1212</p>
<p style="margin-top:40px;text-align:center;color:#aaa;font-size:11px">Generated by EWU Faculty Portal · ${new Date().toLocaleDateString()}</p>
</body></html>`;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${f.name.replace(/\s+/g, "_")}_CV.html`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("CV downloaded successfully.");
  }

  const initials = f.name.split(" ").slice(-2).map((p) => p[0]).join("");

  /* tooltip style shared */
  const tooltipStyle = {
    background: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: 8,
    fontSize: 12,
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow={dept?.name ?? "Faculty"}
        title={f.name}
        subtitle={f.designation}
        crumbs={[{ to: "/", label: "Home" }, { to: "/faculty", label: "Faculty" }, { label: f.name }]}
      />

      {/* ── sticky nav ── */}
      <div className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-6 flex gap-0 overflow-x-auto scrollbar-none">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeSection === n.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">

          {/* ══════════════════ SIDEBAR ══════════════════ */}
          <aside className="space-y-4 lg:sticky lg:top-[57px] lg:self-start lg:max-h-[calc(100dvh-57px)] lg:overflow-y-auto">

            {/* identity card */}
            <Card className="text-center">
              {/* avatar */}
              <div className="mx-auto grid h-28 w-28 place-items-center rounded-full brand-gradient font-serif text-4xl font-bold text-primary-foreground shadow-brick">
                {initials}
              </div>
              {/* accepting badge */}
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-950/40 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Accepting PhD candidates · 2026
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold">{f.name}</h2>
              <p className="text-sm text-muted-foreground">{f.designation}</p>
              <p className="mt-0.5 text-xs font-medium text-primary">{dept?.name}</p>

              <div className="mt-5 space-y-2 text-left text-sm divide-y divide-border">
                <p className="flex items-center gap-2 text-foreground/80 pb-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate">{f.id}@ewubd.edu</span>
                </p>
                <p className="flex items-center gap-2 text-foreground/80 py-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +880 9666 775 ext.{Math.abs(f.id.length * 31) % 900 + 100}
                </p>
                <p className="flex items-center gap-2 text-foreground/80 py-2">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  Office hrs: Sun, Tue 2–4 pm
                </p>
                <p className="flex items-center gap-2 text-foreground/80 pt-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  Academic Bldg, Room 402
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-5 grid gap-2">
                <button
                  onClick={generateCV}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
                >
                  <Download className="h-4 w-4" /> Generate CV (HTML)
                </button>
                <button
                  onClick={() => toast("Open the HTML CV in your browser, then use File → Print → Save as PDF.", { duration: 6000 })}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <FileText className="h-4 w-4" /> Download CV (PDF)
                </button>
                <a
                  href={`#contact`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary-soft py-2.5 text-sm font-medium text-primary-deep hover:bg-primary/10 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Contact
                </a>
              </div>
            </Card>

            {/* external profiles */}
            <Card>
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">External Profiles</h3>
              <div className="space-y-2">
                {[
                  { label: "Google Scholar", href: "https://scholar.google.com" },
                  { label: "ORCID", href: "https://orcid.org" },
                  { label: "Scopus", href: "https://www.scopus.com" },
                  { label: "ResearchGate", href: "https://www.researchgate.net" },
                ].map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-muted transition-colors">
                    {l.label} <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </Card>

            {/* interests */}
            <Card>
              <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Research Interests</h3>
              <div className="flex flex-wrap gap-1.5">
                {(f.interests).map((i) => (
                  <span key={i} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep">
                    {i}
                  </span>
                ))}
              </div>
            </Card>

            {/* quick stats */}
            <div className="grid grid-cols-2 gap-3">
              <StatBadge icon={BookOpen} value={f.papers} label="Publications" />
              <StatBadge icon={Award} value={f.cites.toLocaleString()} label="Citations" />
              <StatBadge icon={GraduationCap} value={f.h} label="h-index" />
              <StatBadge icon={Users} value="22+" label="Students" />
            </div>
          </aside>

          {/* ══════════════════ MAIN CONTENT ══════════════════ */}
          <main className="space-y-12 min-w-0">

            {/* ── 01 About ── */}
            <section id="about" ref={(el) => (sectionRefs.current.about = el)}>
              <SectionLabel n={1} label="About" />

              <Card>
                <h3 className="font-serif text-xl font-bold mb-3">Biography</h3>
                <p className="text-foreground/85 leading-relaxed">{f.bio}</p>
              </Card>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card>
                  <h3 className="font-serif text-lg font-bold mb-4">Education</h3>
                  <ul className="space-y-3">
                    {(f.education).map((e) => (
                      <li key={e} className="flex items-start gap-3 text-sm text-foreground/85">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="font-serif text-lg font-bold mb-4">Expertise Map</h3>
                  <div className="space-y-3">
                    {expertise.map((e) => (
                      <div key={e.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-foreground/80">{e.label}</span>
                          <span className="font-medium text-primary">{e.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary transition-all"
                            style={{ width: `${e.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </section>

            {/* ── 02 Research / Impact ── */}
            <section id="research" ref={(el) => (sectionRefs.current.research = el)}>
              <SectionLabel n={2} label="Research Impact" />

              <div className="grid gap-4 sm:grid-cols-4 mb-4">
                {[
                  { icon: BookOpen, n: f.papers, label: "Publications" },
                  { icon: Award, n: f.cites.toLocaleString(), label: "Total Citations" },
                  { icon: Star, n: f.h, label: "h-index" },
                  { icon: FlaskConical, n: grants.length, label: "Active Grants" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                    <s.icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 font-serif text-2xl font-bold">{s.n}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              <Card>
                <h3 className="font-serif text-lg font-bold mb-4">Citation velocity (2019 – 2026)</h3>
                <div className="h-60">
                  <ResponsiveContainer>
                    <AreaChart data={citeData}>
                      <defs>
                        <linearGradient id="citeGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.55} />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="y" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Area type="monotone" dataKey="c" stroke="var(--color-primary)" fill="url(#citeGrad)" strokeWidth={2.5} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card className="mt-4">
                <h3 className="font-serif text-lg font-bold mb-4">Publications per year</h3>
                <div className="h-52">
                  <ResponsiveContainer>
                    <BarChart data={pubData} barSize={24}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="y" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Bar dataKey="n" fill="var(--color-gold)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </section>

            {/* ── 03 Publications ── */}
            <section id="publications" ref={(el) => (sectionRefs.current.publications = el)}>
              <SectionLabel n={3} label="Publications" />

              {/* filter */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {pubTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setPubFilter(t)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${pubFilter === t
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/70"
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {filtered.map((p, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${p.type === "Journal"
                              ? "bg-primary-soft text-primary-deep"
                              : p.type === "Conference"
                                ? "bg-gold/15 text-gold-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}>{p.type}</span>
                          <span className="text-xs text-muted-foreground">{p.year}</span>
                        </div>
                        <h4 className="font-semibold text-sm text-foreground leading-snug">"{p.title}"</h4>
                        <p className="text-xs text-muted-foreground mt-1">{p.venue}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-lg font-bold font-serif text-primary">{p.cites}</p>
                        <p className="text-[10px] text-muted-foreground">cited</p>
                        <a href={p.doi} target="_blank" rel="noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-[10px] text-primary hover:underline">
                          DOI <ExternalLink className="h-2.5 w-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 04 Grants ── */}
            <section id="projects" ref={(el) => (sectionRefs.current.projects = el)}>
              <SectionLabel n={4} label="Research Projects & Grants" />
              <div className="space-y-3">
                {grants.map((g, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-5 flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 rounded-lg bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary-deep">
                        {g.year}
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">{g.funder}</p>
                        <h4 className="font-semibold text-sm">{g.title}</h4>
                      </div>
                    </div>
                    <span className="shrink-0 font-serif font-bold text-primary text-sm">{g.amount}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 05 Teaching ── */}
            <section id="teaching" ref={(el) => (sectionRefs.current.teaching = el)}>
              <SectionLabel n={5} label="Teaching" />
              <div className="space-y-3">
                {courses.map((c, i) => (
                  <Card key={i} className="flex items-center gap-5">
                    <div className="shrink-0 rounded-xl bg-primary-soft p-3 text-center min-w-[68px]">
                      <p className="text-xs font-bold text-primary-deep">{c.code}</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${c.level === "Doctoral"
                            ? "bg-primary/10 text-primary"
                            : c.level === "Graduate"
                              ? "bg-gold/15 text-amber-700 dark:text-gold"
                              : "bg-muted text-muted-foreground"
                          }`}>{c.level}</span>
                      </div>
                      <h4 className="font-semibold text-sm">{c.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{c.term}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* ── 06 Awards ── */}
            <section id="awards" ref={(el) => (sectionRefs.current.awards = el)}>
              <SectionLabel n={6} label="Awards & Recognition" />
              <div className="space-y-3">
                {awards.map((a, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-5">
                    <div className="shrink-0 w-14 text-center">
                      <p className="font-serif text-2xl font-bold text-primary/50">{a.year}</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <h4 className="font-semibold text-sm">{a.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{a.org}</p>
                    </div>
                    <Star className="ml-auto h-4 w-4 text-gold shrink-0" />
                  </div>
                ))}
              </div>
            </section>

            {/* ── 07 News ── */}
            <section id="news" ref={(el) => (sectionRefs.current.news = el)}>
              <SectionLabel n={7} label="Latest News" />
              <div className="space-y-3">
                {news.map((n, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-5 flex items-start gap-4">
                    <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${n.tag === "Publication" ? "bg-primary-soft text-primary-deep"
                        : n.tag === "Grant" ? "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-400"
                          : n.tag === "Speaking" ? "bg-gold/15 text-amber-700 dark:text-gold"
                            : "bg-muted text-muted-foreground"
                      }`}>{n.tag}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{n.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{n.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 08 Contact ── */}
            <section id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
              <SectionLabel n={8} label="Contact & Office Hours" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <h3 className="font-serif text-lg font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4 text-sm">
                    {[
                      { icon: MapPin, label: "Office", val: "Academic Building, Room 402" },
                      { icon: Clock, label: "Office Hours", val: "Sun & Tue, 14:00 – 16:00" },
                      { icon: Mail, label: "Email", val: `${f.id}@ewubd.edu` },
                      { icon: Phone, label: "Phone", val: `+880 9666 775 ext.${Math.abs(f.id.length * 31) % 900 + 100}` },
                      { icon: Building2, label: "University", val: "East West University, Aftabnagar, Dhaka 1212" },
                    ].map((r) => (
                      <div key={r.label} className="flex items-start gap-3">
                        <r.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{r.label}</p>
                          <p className="text-foreground/85 mt-0.5">{r.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* appointment form */}
                <Card>
                  <h3 className="font-serif text-lg font-bold mb-4">Request an Appointment</h3>
                  <AppointmentForm facultyName={f.name} />
                </Card>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* footer */}
      <footer className="mt-16 border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 {f.name} · East West University</p>
          <div className="flex gap-4">
            {[
              { label: "Scholar", href: "https://scholar.google.com" },
              { label: "ORCID", href: "https://orcid.org" },
              { label: "ResearchGate", href: "https://www.researchgate.net" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── appointment form sub-component ── */
function AppointmentForm({ facultyName }) {
  const [form, setForm] = useState({ name: "", email: "", affiliation: "", purpose: "Research collaboration", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    if (!form.name || !form.email) { toast.error("Please fill in name and email."); return; }
    setSent(true);
    toast.success("Appointment request sent!");
  }

  if (sent) {
    return (
      <div className="grid h-full place-items-center text-center py-6">
        <div>
          <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-green-100 dark:bg-green-950">
            <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <p className="font-semibold">Request sent!</p>
          <p className="text-sm text-muted-foreground mt-1">{facultyName} will reply via email.</p>
        </div>
      </div>
    );
  }

  const inp = "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring transition-shadow";
  return (
    <div className="space-y-3">
      <input placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inp} />
      <input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inp} />
      <input placeholder="Affiliation" value={form.affiliation} onChange={(e) => setForm({ ...form, affiliation: e.target.value })} className={inp} />
      <select value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })} className={inp}>
        {["Research collaboration", "Student supervision", "Media inquiry", "Speaking engagement", "Other"].map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <textarea rows={3} placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inp} resize-none`} />
      <button
        onClick={handleSubmit}
        className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
      >
        Send request
      </button>
    </div>
  );
}