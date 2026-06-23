import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import cseHeroImage from "@/assets/dept/cse.jpg";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Quote,
  Plus,
  Minus,
  Users,
  GraduationCap,
  BookOpen,
  Award,
  Bell,
  Laptop,
  FlaskConical,
  Wifi,
  Database,
  Brain,
  Code,
  Search,
  Newspaper,
  Calendar,
} from "lucide-react";
import { CommunitySlider } from "@/components/site/CommunitySlider";
import { FACULTY } from "@/lib/site-data";
import { img } from "@/lib/images";

import face1 from "@/assets/faculty/dr_maheen_islam.jpg";

/* â"€â"€ Static CSE page data â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop";

const CHAIRPERSON = {
  name: "Dr. Maheen Islam",
  title: "Chairperson & Associate Professor",
  dept: "Department of Computer Science and Engineering",
  faculty: "Faculty of Sciences & Engineering",
  email: "chair.cse@ewu.edu.bd",
  image:
    face1,
  message:
    "As Chairperson, it is my pleasure to welcome you to one of the university's oldest, largest, and most dynamic academic communities - the Department of Computer Science and Engineering. Home to more than 4,000 undergraduate and graduate students and supported by a strong team of full-time faculty alongside dedicated technical and administrative staff, the department has developed into a vibrant center for learning, inquiry, and innovation. We are committed to excellence in teaching, research, and service.",
};

const NOTICES = [
  {
    date: "2026-06-25",
    tag: "Exam",
    title: "Makeup Midterm Examination Schedule - Spring 2026 Semester",
  },
  {
    date: "2026-06-22",
    tag: "Research",
    title: "Call for Proposals: Undergraduate Research Grant 2026",
  },
  {
    date: "2026-06-18",
    tag: "Event",
    title: "IEEE Student Branch Robotics Workshop Registration Open",
  },
  {
    date: "2026-06-14",
    tag: "Academic",
    title: "Lab Reservation & Equipment Request Guidelines Updated",
  },
  {
    date: "2026-06-10",
    tag: "Notice",
    title: "Revised Thesis Submission Deadlines for MSc Students",
  },
];

const DEPARTMENTS = [
  "Computer Science & Engineering",
  "Business Administration",
  "English",
  "Law",
  "Pharmacy",
  "Architecture",
];

const COURSESDropdown: Record<string, string[]> = {
  "Computer Science & Engineering": ["CSE101", "CSE201", "CSE301", "CSE401"],
  "Business Administration": ["BBA101", "BBA201", "MBA301"],
  English: ["ENG101", "ENG201", "ENG301"],
  Law: ["LAW101", "LAW201"],
  Pharmacy: ["PHR101", "PHR201"],
  Architecture: ["ARC101", "ARC201"],
};

// Fake events - replace with your real data
const EVENTS = [
  { date: "2025-07-10", tag: "Event", title: "Annual Tech Fest 2025" },
  { date: "2025-07-18", tag: "Seminar", title: "Career Development Workshop" },
  { date: "2025-08-02", tag: "Cultural", title: "Independence Day Celebration" },
];

const COURSES = [
  {
    code: "CSE103",
    title: "Structured Programming",
    credits: 3,
    desc: "Introduces procedural programming concepts including variables, control structures, functions, and arrays using C language.",
  },
  {
    code: "CSE106",
    title: "Discrete Mathematics",
    credits: 3,
    desc: "Covers logic, set theory, relations, graph theory, combinatorics, and proof techniques essential for computer science.",
  },
  {
    code: "CSE110",
    title: "Object Oriented Programming",
    credits: 3,
    desc: "Principles of OOP including encapsulation, inheritance, polymorphism, and abstraction using Java or C++.",
  },
  {
    code: "CSE204",
    title: "Data Structures & Algorithms",
    credits: 3,
    desc: "Fundamental data structures (trees, graphs, heaps) and algorithm design strategies including divide-and-conquer and dynamic programming.",
  },
  {
    code: "CSE207",
    title: "Database Management Systems",
    credits: 3,
    desc: "Relational databases, SQL, normalization, transactions, concurrency, and introduction to NoSQL systems.",
  },
  {
    code: "CSE311",
    title: "Artificial Intelligence",
    credits: 3,
    desc: "Search algorithms, knowledge representation, machine learning fundamentals, and applications in NLP and vision.",
  },
];

const RESEARCH_AREAS = [
  { icon: Brain, label: "Artificial Intelligence & ML", count: "12 Projects" },
  { icon: Database, label: "Distributed Systems", count: "7 Projects" },
  { icon: Wifi, label: "IoT & Embedded Systems", count: "9 Projects" },
  { icon: Code, label: "Software Engineering", count: "5 Projects" },
  { icon: FlaskConical, label: "Data Science & Analytics", count: "8 Projects" },
  { icon: Laptop, label: "Human-Computer Interaction", count: "4 Projects" },
];

const TESTIMONIALS = [
  {
    name: "Rashed Mahmud",
    batch: "CSE 2021",
    role: "Senior Engineer, Samsung Electronics",
    quote:
      "The rigorous curriculum and real-world lab sessions gave me a competitive edge in the industry. EWU CSE is truly world-class.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Nadia Islam",
    batch: "CSE 2020",
    role: "Software Architect, Grameenphone",
    quote:
      "The professors genuinely care about your growth. I secured my first tech job before graduation thanks to the career guidance I received.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Tanvir Ahmed",
    batch: "CSE 2022",
    role: "ML Engineer, bKash",
    quote:
      "Being part of the EWU Computer Club and doing research with faculty transformed my understanding of software engineering.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
];

const QUICK_LINKS = [
  "Faculty Members",
  "Undergraduate Programs",
  "Graduate Programs",
  "Tuition Fees",
  "Publications",
  "Research Areas",
  "Lab Facilities",
  "Administrative Officials",
  "News",
  "Notices",
  "Events",
  "Achievements",
];

const STATS = [
  { icon: Users, value: "1,820+", label: "Students" },
  { icon: GraduationCap, value: "48", label: "Faculty Members" },
  { icon: BookOpen, value: "4", label: "Programs" },
  { icon: Award, value: "A+", label: "UGC Rating" },
];

const ADMISSION_PROGRAMS = ["Undergraduate", "Graduate"] as const;

const LATEST_NEWS = [
  {
    date: "24 May 2025",
    title: "East West University Delegation Visits Huawei Bangladesh to Explore Academic and Industry Collaboration",
    excerpt: "Faculty members and students from East West University (EWU) visited Huawei Technologies (Bangladesh) Ltd. on Thursday,...",
    image: img("club-computer"),
  },
  {
    date: "29 Apr 2025",
    title: "CSE Department Successfully Completes 60-Hour IEEE FE Exam Preparation Training Program",
    excerpt: "The Department of Computer Science and Engineering (CSE) at East West University has successfully completed a 60-hour in...",
    image: img("fac-computer"),
  },
  {
    date: "23 Apr 2025",
    title: "Seminar on Artificial Intelligence and Cybersecurity held at East West University",
    excerpt: "The Department of Computer Science and Engineering (CSE) at East West University (EWU) hosted a seminar titled \"AI and C...",
    image: img("fac-auditorium"),
  },
];

function LatestNewsSlider({ news }: { news: typeof LATEST_NEWS }) {
  const [ready, setReady] = React.useState(false);
  const [SwiperComp, setSwiperComp] = React.useState<typeof import("swiper/react")["Swiper"] | null>(null);
  const [SwiperSlideComp, setSwiperSlideComp] = React.useState<
    typeof import("swiper/react")["SwiperSlide"] | null
  >(null);
  const [mods, setMods] = React.useState<
    [typeof import("swiper/modules")["Autoplay"], typeof import("swiper/modules")["Navigation"]] | null
  >(null);

  React.useEffect(() => {
    Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
      import("swiper/css" as string),
    ]).then(([{ Swiper: S, SwiperSlide: SS }, { Autoplay, Navigation }]) => {
      setSwiperComp(() => S);
      setSwiperSlideComp(() => SS);
      setMods([Autoplay, Navigation]);
      setReady(true);
    });
  }, []);

  if (!ready || !SwiperComp || !SwiperSlideComp || !mods) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {news.slice(0, 3).map((_, idx) => (
          <div key={idx} className="h-[380px] bg-muted/40 animate-pulse rounded-2xl shadow-sm" />
        ))}
      </div>
    );
  }

  const [Autoplay, Navigation] = mods;
  const Swiper = SwiperComp;
  const SwiperSlide = SwiperSlideComp;

  return (
    <div className="relative px-12">
      {/* Custom prev/next buttons */}
      <button
        id="news-prev"
        aria-label="Previous news"
        className="news-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brick hover:bg-primary-deep transition-all cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        id="news-next"
        aria-label="Next news"
        className="news-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brick hover:bg-primary-deep transition-all cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".news-prev-btn",
          nextEl: ".news-next-btn",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{
          delay: 3800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="!pb-4"
      >
        {news.map((item) => (
          <SwiperSlide key={item.title} className="!h-auto py-2">
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-brick hover:-translate-y-1 hover:border-primary cursor-pointer h-full">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Date badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1">
                  <Calendar className="h-3 w-3 text-primary-foreground" />
                  <span className="text-[10px] font-bold text-primary-foreground">{item.date}</span>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-sm font-bold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3 flex-1">
                  {item.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-border/60">
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:gap-2.5 transition-all cursor-pointer">
                    Read More <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export const Route = createFileRoute("/computer-science-engineering")({
  head: () => ({
    meta: [
      { title: "Department of Computer Science & Engineering | EWU" },
      {
        name: "description",
        content:
          "The CSE Department at EWU offers cutting-edge programs in AI, software engineering, and data science.",
      },
    ],
  }),
  component: CSEPage,
});

function CSEPage() {
  const cseMembers = FACULTY.slice(0, 4);

  /* Faculty slider responsive logic (4 desktop, 2 tablet, 1 mobile) */
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const facVisible = windowWidth >= 1024 ? 4 : windowWidth >= 640 ? 2 : 1;
  const [facIdx, setFacIdx] = React.useState(0);
  const [facHovered, setFacHovered] = React.useState(false);

  const maxFacIdx = Math.max(0, cseMembers.length - facVisible);
  const nextFac = React.useCallback(() => {
    setFacIdx((p) => (p >= maxFacIdx ? 0 : p + 1));
  }, [maxFacIdx]);
  const prevFac = React.useCallback(() => {
    setFacIdx((p) => (p === 0 ? maxFacIdx : p - 1));
  }, [maxFacIdx]);

  React.useEffect(() => {
    if (facHovered || cseMembers.length <= facVisible) return;
    const t = setInterval(nextFac, 4000);
    return () => clearInterval(t);
  }, [facHovered, nextFac, cseMembers.length, facVisible]);

  /* Testimonial slider */
  const [testIdx, setTestIdx] = React.useState(0);
  const [testHovered, setTestHovered] = React.useState(false);
  React.useEffect(() => {
    if (testHovered || TESTIMONIALS.length <= 1) return;
    const t = setInterval(() => setTestIdx((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [testHovered]);

  /* Admission active tab */
  const [activeAdmission, setActiveAdmission] = React.useState<"Undergraduate" | "Graduate">("Undergraduate");

  /* Courses accordion */
  const [openCourse, setOpenCourse] = React.useState<number | null>(null);

  const [activeTab, setActiveTab] = React.useState<"notice" | "events">("notice");
  const [keyword, setKeyword] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [course, setCourse] = React.useState("");

  const items = activeTab === "notice" ? NOTICES : EVENTS;
  const availableCourses = department ? (COURSESDropdown[department] ?? []) : [];

  function handleDeptChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setDepartment(e.target.value);
    setCourse("");
  }

  return (
    <>
      <div className="bg-background text-foreground">
        {/* â"€â"€ 1. HERO â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <div className="relative">
          {/* Full-bleed image */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="CSE Department"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="relative z-10 flex h-full items-end px-6 pb-8 mx-auto max-w-7xl">
              <div>
                <nav className="flex items-center gap-1.5 text-xs text-white/60 mb-3">
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="h-3 w-3" />
                  <Link
                    to="/departments/$slug"
                    params={{ slug: "cse" }}
                    className="hover:text-white transition-colors"
                  >
                    Departments
                  </Link>
                  <ChevronRight className="h-3 w-3" />
                  <span className="text-white">CSE</span>
                </nav>
                <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Department of Computer
                  <br className="hidden md:block" /> Science &amp; Engineering
                </h1>
                <div className="flex flex-wrap gap-5 mt-5">
                  {STATS.map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/15 backdrop-blur-sm">
                        <s.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-none">{s.value}</p>
                        <p className="text-[10px] text-white/60 mt-0.5">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* â"€â"€ Sidebar + Chairperson row */}
          <div className="mx-auto max-w-7xl px-6 mt-6">
            <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-6 -mt-2">
              {/* Sidebar */}
              <div className="hidden md:block">
                <div className="bg-primary text-primary-foreground rounded-lg overflow-hidden shadow-brick">
                  <div className="px-5 py-4 border-b border-white/20">
                    <h2 className="font-serif text-base font-bold leading-snug pt-4">
                      Department of Computer Science &amp; Engineering
                    </h2>
                  </div>
                  <nav className="py-2">
                    {QUICK_LINKS.map((link) => (
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

              {/* Chairperson card */}
              <div className="bg-card border border-border rounded-2xl md:rounded-lg shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-border">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary pt-4">
                    Chairperson's Message
                  </p>
                </div>
                <div className="p-6 grid sm:grid-cols-[250px_1fr] gap-6 items-start">
                  <div className="relative shrink-0 mx-auto sm:mx-0">
                    <div className="absolute -inset-2 rounded-xl border border-border/60" />
                    <div className="absolute -inset-1 rounded-lg border border-primary/20" />
                    <img
                      src={CHAIRPERSON.image}
                      alt={CHAIRPERSON.name}
                      className="relative h-72 w-full object-cover object-top rounded-lg shadow-sm"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">{CHAIRPERSON.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{CHAIRPERSON.faculty}</p>
                    <div className="mt-2">
                      <p className="text-xs font-bold text-primary">{CHAIRPERSON.title}</p>
                      <p className="text-xs text-foreground font-medium">{CHAIRPERSON.dept}</p>
                    </div>
                    <div className="h-px bg-border my-3" />
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">
                      {CHAIRPERSON.message}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline cursor-pointer">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* â"€â"€ 2. NOTICE BOARD â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <section className="bg-muted/40 border-y border-border py-16 mt-8">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* â"€â"€ Left: Notice Board â"€â"€ */}
              <div>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                      Stay Updated
                    </p>
                    <h2 className="font-serif text-2xl font-bold">Notice Board</h2>
                    <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-lg border border-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    <Bell className="h-3.5 w-3.5" /> All Notices
                  </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-border mb-4">
                  {(["notice", "events"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2.5 text-sm font-semibold capitalize transition-colors relative cursor-pointer ${activeTab === tab
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {tab === "notice" ? "Notice" : "Events"}
                      {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Items */}
                <div className="flex flex-col gap-3">
                  {items.map((n, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary hover:shadow-brick cursor-pointer"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-border group-hover:bg-primary transition-colors" />
                      <div className="ml-2 shrink-0 text-center w-8">
                        <p className="font-bold text-lg text-primary leading-none">
                          {new Date(n.date).getDate()}
                        </p>
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-medium">
                          {new Date(n.date).toLocaleString("en-US", { month: "short" })}
                        </p>
                      </div>
                      <div className="h-8 w-px bg-border shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="inline-block rounded-full bg-primary-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary mb-1">
                          {n.tag}
                        </span>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {n.title}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              {/* â"€â"€ Right: Search Course â"€â"€ */}
              <div>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                    Find Your Course
                  </p>
                  <h2 className="font-serif text-2xl font-bold">Search Course</h2>
                  <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                  {/* Keyword */}
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Keywords"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>

                  {/* Department + Course */}
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={department}
                      onChange={handleDeptChange}
                      className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                      }}
                    >
                      <option value="">Select Department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>

                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      disabled={!department}
                      className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                      }}
                    >
                      <option value="">Select Course</option>
                      {availableCourses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <button className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all cursor-pointer">
                    Search Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â"€â"€ 3. FACULTY MEMBERS SLIDER â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <section className="py-16 mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                Our Team
              </p>
              <h2 className="font-serif text-2xl font-bold">Faculty Members</h2>
              <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
            </div>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
            >
              See All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setFacHovered(true)}
            onMouseLeave={() => setFacHovered(false)}
          >
            {/* Left Arrow */}
            <button
              onClick={prevFac}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="overflow-hidden px-1">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${facIdx * (100 / facVisible)}%)` }}
              >
                {cseMembers.map((f, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 px-3 pb-2"
                    style={{ width: `${100 / facVisible}%` }}
                  >
                    <Link
                      to="/faculty/$id"
                      params={{ id: f.id }}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-brick  h-full"
                    >
                      <div className="relative h-72 w-full overflow-hidden bg-muted">
                        <img
                          src={
                            f.imageUrl ||
                            img(f.img) ||
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
                          }
                          alt={f.name}
                          className="h-full w-full object-center object-top transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-1 text-center justify-between">
                        <div>
                          <h3 className="font-serif text-sm font-bold group-hover:text-primary transition-colors line-clamp-2">
                            {f.name}
                          </h3>
                          <p className="text-[11px] text-muted-foreground mt-1">{f.designation}</p>
                        </div>
                        <div className="mt-3 flex flex-wrap justify-center gap-1">
                          {f.interests.slice(0, 2).map((i) => (
                            <span
                              key={i}
                              className="rounded-full bg-muted border border-border/50 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
                            >
                              {i}
                            </span>
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
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {cseMembers.length > facVisible && (
              <div className="mt-6 flex justify-center gap-1.5">
                {Array.from({ length: maxFacIdx + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFacIdx(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${i === facIdx ? "w-6 bg-primary" : "w-2 bg-border"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="grid bg-primary text-primary-foreground lg:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-[400px]">
            <img
              src={cseHeroImage}
              alt="CSE Department"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
          </div>
          <div className="flex items-center px-6 py-12 lg:px-16">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/70 mb-2">Apply Now</p>
              <h2 className="font-sans text-2xl font-black uppercase leading-tight text-primary-foreground md:text-3xl">
                ADMISSION IN EAST WEST UNIVERSITY
              </h2>
              <div className="mt-3 h-1 w-16 bg-primary-foreground/40 rounded-full" />
              <p className="mt-5 text-sm font-medium leading-relaxed text-primary-foreground/85 text-pretty">
                East West University (EWU) is growing steadily upholding the spirits of its oath
                "Excellence in Education" in order to contribute to the development of the
                business and technological sectors of Bangladesh. Our programs are updated
                continuously by an independent academic council consisting of scholars from
                renowned academic institutions of the country and are based on curricula from
                North American Universities. Our graduates are much sought after and employed
                by the corporate sectors of the country.
              </p>
              <div className="mt-8 border-b border-primary-foreground/30">
                <div className="flex gap-8">
                  {ADMISSION_PROGRAMS.map((program) => (
                    <button
                      key={program}
                      onClick={() => setActiveAdmission(program)}
                      className={`relative pb-3 text-sm font-bold text-primary-foreground transition-colors cursor-pointer ${activeAdmission === program ? "opacity-100" : "opacity-60 hover:opacity-100"
                        }`}
                    >
                      {program}
                      {activeAdmission === program && (
                        <span className="absolute bottom-[-1px] left-0 h-1 w-full bg-primary-foreground rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <button className="mt-8 inline-flex min-w-36 items-center justify-center gap-2 bg-primary-foreground px-6 py-3 text-[11px] font-black uppercase tracking-wide text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-brick rounded-lg cursor-pointer">
                {activeAdmission === "Undergraduate" ? "B. Sc. in CSE" : "M. Sc. in CSE"} <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-20 border-y border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">Department Updates</p>
                  <h2 className="font-sans text-2xl font-black uppercase tracking-wide text-foreground md:text-3xl">
                    Latest News
                  </h2>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-1 w-14 bg-primary rounded-full" />
                    <Newspaper className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
                  See All News <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <LatestNewsSlider news={LATEST_NEWS} />
          </div>
        </section>
        {/* ——— 4. RESEARCH AREAS ——————————————————————————————————————————— */}
        <section className="bg-muted/40 border-y border-border py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
                Innovation Hub
              </p>
              <h2 className="font-serif text-2xl font-bold">Research Areas</h2>
              <div className="mt-1.5 h-1 w-14 bg-gold rounded-full" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {RESEARCH_AREAS.map((r) => (
                <div
                  key={r.label}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-brick hover:-translate-y-1 cursor-pointer"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft border border-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {r.label}
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{r.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â"€â"€ 5. CORE COURSES â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="h-px w-16 bg-primary mb-2" />
                <h2 className="font-serif text-xl font-bold uppercase tracking-wide">
                  Core Computer Science and Engineering Courses
                </h2>
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-deep transition-colors cursor-pointer shrink-0 ml-4">
                See All Course <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="space-y-2">
              {COURSES.map((c, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl border border-border">
                  <button
                    onClick={() => setOpenCourse(openCourse === idx ? null : idx)}
                    className="flex w-full items-center justify-between bg-primary px-5 py-3.5 text-left cursor-pointer hover:bg-primary-deep transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        {c.code}
                      </span>
                      <span className="text-sm font-semibold text-white">{c.title}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-white/70">{c.credits} Credits</span>
                      {openCourse === idx ? (
                        <Minus className="h-4 w-4 text-white/80" />
                      ) : (
                        <Plus className="h-4 w-4 text-white/80" />
                      )}
                    </div>
                  </button>
                  {openCourse === idx && (
                    <div className="px-5 py-4 bg-card text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â"€â"€ 6. WHAT STUDENT SAY â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
        <section
          className="bg-muted/40 border-y border-border py-20"
          onMouseEnter={() => setTestHovered(true)}
          onMouseLeave={() => setTestHovered(false)}
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Voices</p>
            <h2 className="font-serif text-3xl font-bold border-l-4 border-primary pl-3 text-left inline-block mb-10">
              What Student Say
            </h2>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testIdx * 100}%)` }}
              >
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} className="shrink-0 w-full px-10">
                    {/* Avatar row */}
                    <div className="flex justify-center mb-6">
                      {TESTIMONIALS.map((tt, ti) => (
                        <div
                          key={ti}
                          onClick={() => setTestIdx(ti)}
                          className={`relative -mx-2 cursor-pointer pt-4 transition-all duration-300 ${ti === testIdx ? "z-10 scale-110" : "z-0 opacity-50 scale-90"}`}
                        >
                          <div
                            className={`h-14 w-14 rounded-full overflow-hidden border-2 ${ti === testIdx ? "border-primary" : "border-border"}`}
                          >
                            <img
                              src={tt.avatar}
                              alt={tt.name}
                              className="h-full w-full object-cover object-top"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-gold/40 mx-auto mb-4" />
                    <blockquote className="font-serif text-lg italic text-foreground/85 leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                    <div className="mt-6">
                      <p className="font-bold text-foreground">{t.name}</p>
                      <p className="text-sm text-primary font-medium">{t.batch}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  setTestIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                aria-label="Previous"
                className="absolute left-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setTestIdx((p) => (p + 1) % TESTIMONIALS.length)}
                aria-label="Next"
                className="absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-all cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestIdx(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${i === testIdx ? "w-6 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <CommunitySlider />
    </>
  );
}
