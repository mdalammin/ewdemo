import * as React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { deptBySlug, FACULTY } from "@/lib/site-data";
import {
  ChevronRight, ChevronLeft, Calendar, ArrowRight, Quote,
  Users, GraduationCap, BookOpen, Award, Plus, Minus, Bell, Search
} from "lucide-react";
import { CommunitySlider } from "@/components/site/CommunitySlider";
import { img } from "@/lib/images";

/* ── per-slug extra data ──────────────────────────────────────── */
const DEPT_EXTRAS: Record<string, {
  heroImage: string;
  chairperson: { name: string; title: string; dept: string; image: string; message: string };
  notices: { date: string; tag: string; title: string }[];
  courses: { code: string; title: string; credits: number }[];
  testimonials: { name: string; batch: string; quote: string; avatar: string }[];
  quickLinks: string[];
}> = {
  cse: {
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    chairperson: {
      name: "Dr. Tasnia Rahman",
      title: "Chairperson & Associate Professor",
      dept: "Department of Computer Science and Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      message: "As Chairperson, it is my pleasure to welcome you to one of the university's oldest, largest, and most dynamic academic communities — the Department of Computer Science and Engineering. Home to more than 4,000 undergraduate and graduate students and supported by a strong team of full-time faculty alongside dedicated technical and administrative staff, the department has developed into a vibrant center for learning, inquiry, and innovation.",
    },
    notices: [
      { date: "2026-06-25", tag: "Exam", title: "Makeup Midterm Schedule – Spring 2026 Semester" },
      { date: "2026-06-22", tag: "Research", title: "Call for Proposals: Undergraduate Research Grant 2026" },
      { date: "2026-06-18", tag: "Event", title: "IEEE Student Branch Robotics Workshop Registration Open" },
      { date: "2026-06-14", tag: "Academic", title: "Lab Reservation & Equipment Request Guidelines Updated" },
    ],
    courses: [
      { code: "CSE103", title: "Structured Programming", credits: 3 },
      { code: "CSE106", title: "Discrete Mathematics", credits: 3 },
      { code: "CSE110", title: "Object Oriented Programming", credits: 3 },
      { code: "CSE204", title: "Data Structures & Algorithms", credits: 3 },
      { code: "CSE207", title: "Database Management Systems", credits: 3 },
      { code: "CSE311", title: "Artificial Intelligence", credits: 3 },
    ],
    testimonials: [
      { name: "Rashed Mahmud", batch: "CSE 2021", quote: "The rigorous curriculum and real-world lab sessions gave me a competitive edge in the industry. EWU CSE is truly world-class.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
      { name: "Nadia Islam", batch: "CSE 2020", quote: "The professors genuinely care about your growth. I secured my first tech job before graduation thanks to the career guidance I received.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
      { name: "Tanvir Ahmed", batch: "CSE 2022", quote: "Being part of the EWU Computer Club and doing research with faculty transformed my understanding of software engineering.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    ],
    quickLinks: ["Faculty Members", "Undergraduate Programs", "Graduate Programs", "Tuition Fees", "Publications", "Research Areas", "Lab Facilities", "Administrative Officials", "News", "Notices", "Events", "Achievements"],
  },
};

const DEFAULT_EXTRA = {
  heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  chairperson: { name: "Prof. Dr. (Name)", title: "Chairperson", dept: "Department", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop", message: "Welcome to our department. We are committed to academic excellence and innovation." },
  notices: [],
  courses: [],
  testimonials: [],
  quickLinks: ["Faculty Members", "Programs", "Notices", "Events"],
};

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dept = deptBySlug(params.slug);
    if (!dept) throw notFound();
    return { dept };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.dept.name ?? "Department"} | EWU` },
      { name: "description", content: loaderData?.dept.summary ?? "EWU department" },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60dvh] place-items-center text-center">
      <div>
        <p className="font-serif text-3xl font-bold">Department not found</p>
        <Link to="/departments" className="mt-4 inline-block text-primary hover:underline">All departments</Link>
      </div>
    </div>
  ),
  component: DepartmentPage,
});

function DepartmentPage() {
  const { dept } = Route.useLoaderData();
  const extra = DEPT_EXTRAS[dept.slug] ?? DEFAULT_EXTRA;
  const facultyMembers = FACULTY.filter((f) => f.dept === dept.slug);

  /* Faculty slider responsive logic (4 desktop, 2 tablet, 1 mobile) */
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const facVisible = windowWidth >= 1024 ? 4 : windowWidth >= 640 ? 2 : 1;
  const [facIdx, setFacIdx] = React.useState(0);
  const [facHovered, setFacHovered] = React.useState(false);

  const maxFacIdx = Math.max(0, facultyMembers.length - facVisible);
  const nextFac = React.useCallback(() => {
    setFacIdx((p) => (p >= maxFacIdx ? 0 : p + 1));
  }, [maxFacIdx]);
  const prevFac = React.useCallback(() => {
    setFacIdx((p) => (p === 0 ? maxFacIdx : p - 1));
  }, [maxFacIdx]);

  React.useEffect(() => {
    if (facHovered || facultyMembers.length <= facVisible) return;
    const t = setInterval(nextFac, 4000);
    return () => clearInterval(t);
  }, [facHovered, nextFac, facultyMembers.length, facVisible]);

  /* Testimonial slider */
  const [testIdx, setTestIdx] = React.useState(0);
  const [testHovered, setTestHovered] = React.useState(false);
  const tests = extra.testimonials;
  React.useEffect(() => {
    if (testHovered || tests.length <= 1) return;
    const t = setInterval(() => setTestIdx((p) => (p + 1) % tests.length), 5000);
    return () => clearInterval(t);
  }, [testHovered, tests.length]);

  /* Courses accordion */
  const [openCourse, setOpenCourse] = React.useState<number | null>(null);

  return (
    <>
      <div className="bg-background text-foreground">

        {/* ── 1. HERO ── Split: full image top + sidebar + chairperson */}
        <div className="relative">
          {/* Full-bleed image strip */}
          <div className="relative h-56 md:h-72 w-full overflow-hidden">
            <img src={extra.heroImage} alt={dept.name} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Hero text overlay */}
            <div className="relative z-10 flex h-full items-end px-6 pb-8 mx-auto max-w-7xl">
              <div>
                <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-3">
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ChevronRight className="h-3 w-3" />
                  <Link to="/departments" className="hover:text-white">Departments</Link>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-white">{dept.short}</span>
                </nav>
                <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
                  Department of {dept.name}
                </h1>
                {/* Stats row */}
                <div className="flex flex-wrap gap-5 mt-4">
                  {[
                    { icon: Users, v: dept.students.toLocaleString(), l: "Students" },
                    { icon: GraduationCap, v: dept.faculty_count, l: "Faculty" },
                    { icon: BookOpen, v: dept.programs, l: "Programs" },
                    { icon: Award, v: "A+", l: "UGC" },
                  ].map((s) => (
                    <div key={s.l} className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/15 backdrop-blur-sm">
                        <s.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-none">{s.v}</p>
                        <p className="text-[10px] text-white/60 mt-0.5">{s.l}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Two-column: Sidebar nav + Chairperson message */}
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-0 -mt-2">

              {/* Left sidebar */}
              <div className="hidden md:block">
                <div className="bg-primary text-primary-foreground rounded-b-2xl overflow-hidden shadow-brick">
                  <div className="px-5 py-4 border-b border-white/20">
                    <h2 className="font-serif text-base font-bold leading-snug">Department of {dept.name}</h2>
                  </div>
                  <nav className="py-2">
                    {extra.quickLinks.map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="flex items-center justify-between px-5 py-2.5 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 transition-colors border-b border-white/10 last:border-0"
                      >
                        <span>{link}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Chairperson message */}
              <div className="bg-card border border-border rounded-2xl md:rounded-l-none md:rounded-r-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-border">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Chairperson's Message</p>
                </div>
                <div className="p-6 grid sm:grid-cols-[160px_1fr] gap-6 items-start">
                  {/* Photo with frame */}
                  <div className="relative shrink-0 mx-auto sm:mx-0">
                    <div className="absolute -inset-2 rounded-xl border border-border/60" />
                    <div className="absolute -inset-1 rounded-lg border border-primary/20" />
                    <img
                      src={extra.chairperson.image}
                      alt={extra.chairperson.name}
                      className="relative h-44 w-36 object-cover object-top rounded-lg shadow-sm"
                    />
                  </div>
                  {/* Info */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{extra.chairperson.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{dept.faculty}</p>
                    <div className="mt-2">
                      <p className="text-xs font-bold text-primary">{extra.chairperson.title}</p>
                      <p className="text-xs text-foreground font-medium">{extra.chairperson.dept}</p>
                    </div>
                    <div className="h-px bg-border my-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">
                      {extra.chairperson.message}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline cursor-pointer">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      {dept.slug === "cse" && (
                        <Link
                          to="/computer-science-engineering"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary-deep transition-colors"
                        >
                          Visit Department Website <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. NOTICE BOARD ──────────────────────────────────── */}
        <section className="bg-muted/40 border-y border-border py-16 mt-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">Stay Updated</p>
                <h2 className="font-serif text-2xl font-bold">Notice Board</h2>
                <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-lg border border-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Bell className="h-3.5 w-3.5" /> All Notices
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {extra.notices.map((n, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary hover:shadow-brick cursor-pointer"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-border group-hover:bg-primary transition-colors" />
                  <div className="ml-2 shrink-0 text-center">
                    <p className="font-bold text-lg text-primary leading-none">{new Date(n.date).getDate()}</p>
                    <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">{new Date(n.date).toLocaleString("en-US", { month: "short" })}</p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div className="flex-1 min-w-0">
                    <span className="inline-block rounded-full bg-primary-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary mb-1">{n.tag}</span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{n.title}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 duration-200" />
                </div>
              ))}
              {extra.notices.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">No notices at this time.</p>
              )}
            </div>
          </div>
        </section>

        {/* ── 3. FACULTY MEMBERS SLIDER ─────────────────────────── */}
        <section className="py-16 mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">Our Team</p>
              <h2 className="font-serif text-2xl font-bold">Faculty Members</h2>
              <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
            </div>
          </div>

          {facultyMembers.length === 0 ? (
            <p className="text-sm text-muted-foreground">Faculty listings coming soon.</p>
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setFacHovered(true)}
              onMouseLeave={() => setFacHovered(false)}
            >
              {/* Left Arrow */}
              <button
                onClick={prevFac}
                aria-label="Previous faculty"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary transition-all cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Viewport */}
              <div className="overflow-hidden px-1">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${facIdx * (100 / facVisible)}%)` }}
                >
                  {facultyMembers.map((f, idx) => (
                    <div
                      key={idx}
                      className="shrink-0 px-3 pb-2"
                      style={{ width: `${100 / facVisible}%` }}
                    >
                      <Link
                        to="/faculty/$id"
                        params={{ id: f.id }}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-brick hover:-translate-y-1 h-full"
                      >
                        <div className="relative h-52 w-full overflow-hidden bg-muted">
                          <img 
                            src={f.imageUrl || img(f.img) || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"} 
                            alt={f.name} 
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-1 text-center justify-between">
                          <div>
                            <h3 className="font-serif text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">{f.name}</h3>
                            <p className="text-[11px] text-muted-foreground mt-1">{f.designation}</p>
                          </div>
                          <div className="mt-3 flex flex-wrap justify-center gap-1">
                            {f.interests.slice(0, 2).map((i) => (
                              <span key={i} className="rounded-full bg-muted border border-border/50 px-2 py-0.5 text-[9px] font-medium text-muted-foreground">{i}</span>
                            ))}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextFac}
                aria-label="Next faculty"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary transition-all cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              {facultyMembers.length > facVisible && (
                <div className="mt-6 flex justify-center gap-1.5">
                  {Array.from({ length: maxFacIdx + 1 }).map((_, i) => (
                    <button key={i} onClick={() => setFacIdx(i)} className={`h-2 rounded-full transition-all cursor-pointer ${i === facIdx ? "w-6 bg-primary" : "w-2 bg-border"}`} />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* ── 4. CORE COURSES ───────────────────────────────────── */}
        <section className="bg-muted/40 border-y border-border py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="h-px w-16 bg-primary mb-2" />
                <h2 className="font-serif text-xl font-bold uppercase tracking-wide">
                  Core {dept.short} Courses
                </h2>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-deep transition-colors cursor-pointer">
                See All Course <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="space-y-2">
              {extra.courses.map((c, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <button
                    onClick={() => setOpenCourse(openCourse === idx ? null : idx)}
                    className="flex w-full items-center justify-between bg-primary px-5 py-3.5 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">{c.code}</span>
                      <span className="text-sm font-semibold text-white">{c.title}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-white/70">{c.credits} Credits</span>
                      {openCourse === idx
                        ? <Minus className="h-4 w-4 text-white/80" />
                        : <Plus className="h-4 w-4 text-white/80" />}
                    </div>
                  </button>
                  {openCourse === idx && (
                    <div className="px-5 py-4 text-sm text-muted-foreground leading-relaxed">
                      This course covers fundamental and advanced topics in {c.title.toLowerCase()}, providing students with both theoretical understanding and practical skills applicable in modern software development and research.
                    </div>
                  )}
                </div>
              ))}
              {extra.courses.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-6">Course listings coming soon.</p>
              )}
            </div>
          </div>
        </section>

        {/* ── 5. WHAT STUDENT SAY ─── auto slider ───────────────── */}
        {tests.length > 0 && (
          <section
            className="py-20 mx-auto max-w-4xl px-6 text-center"
            onMouseEnter={() => setTestHovered(true)}
            onMouseLeave={() => setTestHovered(false)}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Voices</p>
            <h2 className="font-serif text-3xl font-bold border-l-4 border-primary pl-3 text-left inline-block mb-10">
              What Student Say
            </h2>

            <div className="relative overflow-hidden">
              {/* Slides */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testIdx * 100}%)` }}
              >
                {tests.map((t, idx) => (
                  <div key={idx} className="shrink-0 w-full px-12">
                    {/* Avatar stack */}
                    <div className="flex justify-center mb-6">
                      {tests.map((tt, ti) => (
                        <div
                          key={ti}
                          onClick={() => setTestIdx(ti)}
                          className={`relative -mx-2 cursor-pointer transition-all duration-300 ${
                            ti === testIdx
                              ? "z-10 scale-110"
                              : "z-0 opacity-50 scale-90"
                          }`}
                        >
                          <div className={`h-14 w-14 rounded-full overflow-hidden border-2 ${ti === testIdx ? "border-primary" : "border-border"}`}>
                            <img src={tt.avatar} alt={tt.name} className="h-full w-full object-cover object-top" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <Quote className="h-8 w-8 text-gold/40 mx-auto mb-4" />
                    <blockquote className="font-serif text-lg italic text-foreground/85 leading-relaxed max-w-2xl mx-auto">
                      "{t.quote}"
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-bold text-foreground">{t.name}</p>
                      <p className="text-sm text-primary font-medium">{t.batch}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next */}
              <button onClick={() => setTestIdx((p) => (p - 1 + tests.length) % tests.length)} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setTestIdx((p) => (p + 1) % tests.length)} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {tests.map((_, i) => (
                <button key={i} onClick={() => setTestIdx(i)} className={`h-2 rounded-full transition-all cursor-pointer ${i === testIdx ? "w-6 bg-primary" : "w-2 bg-border"}`} />
              ))}
            </div>
          </section>
        )}

      </div>
      <CommunitySlider />
    </>
  );
}
