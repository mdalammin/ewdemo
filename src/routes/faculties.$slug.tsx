import * as React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DEPARTMENTS } from "@/lib/site-data";
import {
  ChevronRight,
  ChevronLeft,
  Calendar,
  Building2,
  Quote,
  ArrowRight,
  Users,
  GraduationCap,
  BookOpen,
  FlaskConical,
  Laptop,
  Scale,
  Zap,
  Pill,
  HardHat,
  BarChart3,
  BookMarked,
} from "lucide-react";

interface Dean {
  name: string;
  designation: string;
  dept: string;
  email: string;
  image: string;
  message: string;
  info: string;
}

interface Notice {
  date: string;
  tag: string;
  title: string;
}

interface Chairperson {
  name: string;
  designation: string;
  deptName: string;
  image: string;
  education: string[];
  interests: string[];
  bio: string;
}

interface FacultyAlumni {
  name: string;
  batch: string;
  role: string;
  image: string;
  quote: string;
  body: string;
}

interface Program {
  level: "Undergraduate" | "Graduate" | "Postgraduate";
  title: string;
  dept: string;
  duration: string;
  icon: React.ElementType;
}

interface FacultyData {
  name: string;
  slug: string;
  heroImage: string;
  tagline: string;
  summary: string;
  dean: Dean;
  notices: Notice[];
  chairpersons: Chairperson[];
  alumni: FacultyAlumni[];
  programs: Program[];
}

const PROGRAM_ICONS: Record<string, React.ElementType> = {
  Laptop, FlaskConical, Scale, Zap, Pill, HardHat, BarChart3, BookMarked, GraduationCap,
};

const FACULTIES_DATA: Record<string, FacultyData> = {
  "science-engineering": {
    name: "Faculty of Sciences & Engineering",
    slug: "science-engineering",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tagline: "Pioneering Innovation and Engineering Excellence",
    summary: "Preparing the next generation of engineers, pharmacologists, and scientists through cutting-edge laboratories, research-led teaching, and strong industrial linkages.",
    dean: {
      name: "Dr. Shariar Kabir",
      designation: "Dean & Professor",
      dept: "Department of Computer Science & Engineering",
      email: "dean.fse@ewu.edu.bd",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      info: "PhD, Tokyo University | Fellow, Bangladesh Academy of Sciences | 22+ Years in Academic Leadership",
      message: "Welcome to the Faculty of Sciences & Engineering at East West University. We live in an era of rapid technological disruption, where science and engineering drive human progress. Our faculty is dedicated to fostering a culture of curiosity, analytical thinking, and ethical responsibility. With modern lab facilities, state-of-the-art computational infrastructure, and a world-class faculty body, we ensure our graduates are equipped to lead.",
    },
    programs: [
      { level: "Undergraduate", title: "B.Sc. in Computer Science & Engineering", dept: "CSE", duration: "4 Years", icon: Laptop },
      { level: "Undergraduate", title: "B.Sc. in Electrical & Electronic Engineering", dept: "EEE", duration: "4 Years", icon: Zap },
      { level: "Undergraduate", title: "B.Sc. in Civil Engineering", dept: "CE", duration: "4 Years", icon: HardHat },
      { level: "Undergraduate", title: "B. Pharm.", dept: "PHARM", duration: "4 Years", icon: Pill },
      { level: "Graduate", title: "M.Sc. in Computer Science", dept: "CSE", duration: "2 Years", icon: Laptop },
      { level: "Graduate", title: "M.Sc. in Electrical Engineering", dept: "EEE", duration: "2 Years", icon: Zap },
      { level: "Graduate", title: "M. Pharm.", dept: "PHARM", duration: "2 Years", icon: Pill },
      { level: "Postgraduate", title: "PhD in Engineering", dept: "CSE / EEE / CE", duration: "3–5 Years", icon: FlaskConical },
      { level: "Postgraduate", title: "PhD in Pharmaceutical Sciences", dept: "PHARM", duration: "3–5 Years", icon: FlaskConical },
    ],
    notices: [
      { date: "2026-06-25", tag: "Exam", title: "Makeup Midterm Examination Schedule for Spring 2026" },
      { date: "2026-06-20", tag: "Research", title: "Call for Proposals: Faculty Research & Development Grants 2026-2027" },
      { date: "2026-06-18", tag: "Academic", title: "Registration and Advising Guidelines for Laboratory Courses" },
      { date: "2026-06-12", tag: "Event", title: "IEEE Student Branch Robotics Workshop: Registration Now Open" },
    ],
    chairpersons: [
      {
        name: "Dr. Tasnia Rahman",
        designation: "Professor & Chair",
        deptName: "Computer Science & Engineering",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, University of Toronto", "MSc, BUET", "BSc, BUET"],
        interests: ["Machine Learning", "Bangla NLP", "Healthcare AI"],
        bio: "Recipient of the BAS Gold Medal 2024. Dr. Tasnia leads the Low-Resource Bangla NLP lab and is an advisor to several governmental AI initiatives.",
      },
      {
        name: "Dr. Kazi Mahbubul Alam",
        designation: "Professor & Chair",
        deptName: "Electrical & Electronic Engineering",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, KTH Stockholm", "MSc, BUET", "BSc, BUET"],
        interests: ["Smart Grids", "Renewable Energy Systems", "Power Electronics"],
        bio: "Dr. Alam is a leading voice in green energy transition. He has published over 50 peer-reviewed papers and serves as a power grid consultant.",
      },
      {
        name: "Dr. Farida Khan",
        designation: "Associate Professor & Chair",
        deptName: "Pharmacy",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, University of Nottingham", "M.Pharm, Dhaka University"],
        interests: ["Targeted Drug Delivery", "Clinical Pharmacokinetics", "Nanomedicine"],
        bio: "Dr. Khan's research targets nanotechnology in cancer therapeutics. She has multiple publications in leading global pharmacology journals.",
      },
      {
        name: "Dr. Imran Hossain",
        designation: "Associate Professor & Chair",
        deptName: "Civil Engineering",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, NTU Singapore", "MSc, BUET", "BSc, BUET"],
        interests: ["Seismic Design", "Sustainable Concrete Materials", "Structural Health Monitoring"],
        bio: "Dr. Hossain plays a critical role in local structural guidelines. He specializes in earthquake resilience for high-rise buildings.",
      },
    ],
    alumni: [
      {
        name: "Rashed Mahmud",
        batch: "EEE 2017",
        role: "Senior Design Engineer at Samsung Electronics",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        quote: "The hands-on lab experience and undergraduate research mentoring at EWU were the foundations of my semiconductor career.",
        body: "Rashed designs state-of-the-art memory chips at Samsung's Hwaseong campus in South Korea and holds two joint patents.",
      },
      {
        name: "Dr. Nabila Anjum",
        batch: "Pharmacy 2019",
        role: "Clinical Research Collaborator at icddr,b & Square Hospitals",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=1000&auto=format&fit=crop",
        quote: "EWU's clinical rotations gave me real exposure to patient care and medical research before I graduated.",
        body: "Nabila leads field research on public health epidemiology and clinical drug trials in tropical diseases.",
      },
    ],
  },
  "business-economics": {
    name: "Faculty of Business & Economics",
    slug: "business-economics",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    tagline: "Empowering Leaders, Driving Sustainable Development",
    summary: "Equipping prospective executives, entrepreneurs, and economists with strategic analytical thinking, ethical business insights, and global competence.",
    dean: {
      name: "Dr. Masum Chowdhury",
      designation: "Dean & Professor",
      dept: "Department of Business Administration",
      email: "dean.fbe@ewu.edu.bd",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
      info: "PhD, National University of Singapore (NUS) | Former Senior Economist at World Bank",
      message: "Welcome to the Faculty of Business & Economics. Our objective is to generate leadership for the national and global markets. We nurture strategic thinkers who understand the balance between profits, societal impact, and economic policies. Our business programs are globally accredited, and our economics department is a hub for policy research in South Asia.",
    },
    notices: [
      { date: "2026-06-24", tag: "Notice", title: "Registration Open for Fall 2026 Corporate Internship Placement" },
      { date: "2026-06-19", tag: "Event", title: "National Budget 2026-27 Analysis Symposium by Department of Economics" },
      { date: "2026-06-15", tag: "Academic", title: "Revised Course Catalog and Elective Prerequisites for BBA Students" },
      { date: "2026-06-10", tag: "Event", title: "Annual Business Case Competition: Registration Deadline Extended" },
    ],
    chairpersons: [
      {
        name: "Dr. Farhana Haque",
        designation: "Associate Professor & Chair",
        deptName: "Business Administration",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, NUS Singapore", "MBA, IBA Dhaka University"],
        interests: ["Consumer Behavior", "Digital Marketing", "Fintech Adoption"],
        bio: "Editor-in-Chief of the South Asian Journal of Marketing. Consultant to major mobile financial services like bKash.",
      },
      {
        name: "Dr. Rumana Akter",
        designation: "Professor & Chair",
        deptName: "Economics",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, SOAS University of London", "MSS, Dhaka University"],
        interests: ["Development Economics", "Microfinance & Gender", "Labor Policies"],
        bio: "Co-author of national economic reports. Dr. Akter actively researches local labor market trends and women empowerment schemes.",
      },
    ],
    alumni: [
      {
        name: "Tahmid Karim",
        batch: "BBA 2018",
        role: "Founder & CEO, ChaloPay",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        quote: "EWU's entrepreneurship clinics took my startup idea from a classroom presentation to a real product serving lakhs of users.",
        body: "Tahmid founded one of Bangladesh's fastest growing fintech payment apps and recently closed a seed investment round.",
      },
      {
        name: "Sumaiya Hossain",
        batch: "BBA 2016",
        role: "Vice President of Digital Banking, BRAC Bank",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        quote: "My leadership foundations were established in the EWU Business Club, working through tight deadlines and complex cases.",
        body: "Sumaiya manages the design and execution of retail mobile application portals at BRAC Bank.",
      },
    ],
    programs: [
      { level: "Undergraduate", title: "Bachelor of Business Administration (BBA)", dept: "BBA", duration: "4 Years", icon: BarChart3 },
      { level: "Undergraduate", title: "B.Sc. (Hons.) in Economics", dept: "ECO", duration: "4 Years", icon: BarChart3 },
      { level: "Graduate", title: "Master of Business Administration (MBA)", dept: "BBA", duration: "1.5 Years", icon: BarChart3 },
      { level: "Graduate", title: "Executive MBA (EMBA)", dept: "BBA", duration: "2 Years", icon: BarChart3 },
      { level: "Graduate", title: "M.Sc. in Economics", dept: "ECO", duration: "2 Years", icon: BarChart3 },
      { level: "Postgraduate", title: "PhD in Management", dept: "BBA", duration: "3–5 Years", icon: FlaskConical },
      { level: "Postgraduate", title: "PhD in Economics", dept: "ECO", duration: "3–5 Years", icon: FlaskConical },
    ],
  },
  "liberal-arts-social-sciences": {
    name: "Faculty of Liberal Arts & Social Sciences",
    slug: "liberal-arts-social-sciences",
    heroImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=2074&auto=format&fit=crop",
    tagline: "Cultivating Critical Thought, Empathy, and Justice",
    summary: "Fostering analytical thinkers, legal minds, and creative scholars who advocate for human rights, cultural awareness, and societal development.",
    dean: {
      name: "Dr. Shirin Akhter",
      designation: "Dean & Professor",
      dept: "Department of English",
      email: "dean.flas@ewu.edu.bd",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
      info: "PhD, University of Oxford | Renowned Literary Critic & Author",
      message: "The Faculty of Liberal Arts & Social Sciences is a place where ideas matter. In a highly automated world, the humanities, law, and social sciences provide the critical empathy and analytical depth that cannot be replicated. We teach students how to question assumptions, write clearly, debate logically, and champion justice.",
    },
    notices: [
      { date: "2026-06-26", tag: "Notice", title: "National Moot Court Competition Audition Dates Announced" },
      { date: "2026-06-21", tag: "Event", title: "Creative Writing Workshop Series with Distinguished Authors" },
      { date: "2026-06-14", tag: "Academic", title: "Pre-Thesis Guidelines and Submission Schedule for English Literature Students" },
      { date: "2026-06-08", tag: "Notice", title: "Guest Lecture: Human Rights Frameworks in South Asia" },
    ],
    chairpersons: [
      {
        name: "Nusrat Jahan",
        designation: "Lecturer & Chair (Acting)",
        deptName: "English",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=1000&auto=format&fit=crop",
        education: ["MA in English, Jahangirnagar University", "BA in English, Jahangirnagar University"],
        interests: ["Post-colonial Studies", "Bengali Diaspora", "Gender & Performance"],
        bio: "Nusrat conducts research on contemporary Bangladeshi English literature and translation studies.",
      },
      {
        name: "Dr. Aminul Islam",
        designation: "Professor & Chair",
        deptName: "Law",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD in Constitutional Law, Dhaka University", "LLM, DU", "LLB, DU"],
        interests: ["Constitutional Law", "Environmental Protection Act", "Human Rights Law"],
        bio: "Advocate at the Supreme Court of Bangladesh. Author of the textbook 'Comparative Constitutionalism in South Asia'.",
      },
    ],
    alumni: [
      {
        name: "S. M. Arafat",
        batch: "Law 2017",
        role: "Advocate at the Supreme Court of Bangladesh",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        quote: "The moot court training at EWU enabled me to present complex litigation files to Supreme Court judges with total confidence.",
        body: "Arafat runs a private litigation chamber in Dhaka specializing in corporate disputes and human rights advocacy.",
      },
      {
        name: "Sabrina Rahman",
        batch: "English 2018",
        role: "Senior Communications Specialist at UNDP",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        quote: "EWU's critical thinking seminars and postcolonial classes shaped the way I tell stories for global development campaigns.",
        body: "Sabrina leads content creation and strategic press relations for major environmental programs at UNDP Bangladesh.",
      },
    ],
    programs: [
      { level: "Undergraduate", title: "B.A. (Hons.) in English Language & Literature", dept: "ENG", duration: "4 Years", icon: BookMarked },
      { level: "Undergraduate", title: "LL.B. (Hons.)", dept: "LAW", duration: "4 Years", icon: Scale },
      { level: "Graduate", title: "M.A. in English Language & Literature", dept: "ENG", duration: "1.5 Years", icon: BookMarked },
      { level: "Graduate", title: "LL.M. in Law", dept: "LAW", duration: "1.5 Years", icon: Scale },
      { level: "Postgraduate", title: "PhD in English Literature", dept: "ENG", duration: "3–5 Years", icon: FlaskConical },
      { level: "Postgraduate", title: "PhD in Law", dept: "LAW", duration: "3–5 Years", icon: FlaskConical },
    ],
  },
};

export const Route = createFileRoute("/faculties/$slug")({
  loader: ({ params }) => {
    const data = FACULTIES_DATA[params.slug];
    if (!data) throw notFound();
    return { data };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.data.name ?? "Faculty Division"} | East West University` },
      { name: "description", content: loaderData?.data.summary ?? "EWU Faculty Division details" },
      { property: "og:title", content: `${loaderData?.data.name ?? "Faculty Division"} | EWU` },
      { property: "og:description", content: loaderData?.data.summary ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[60dvh] place-items-center text-center">
      <div>
        <p className="font-serif text-3xl font-bold">Faculty Division not found</p>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">Go to Home</Link>
      </div>
    </div>
  ),
  component: FacultyDivisionPage,
});

function FacultyDivisionPage() {
  const { data } = Route.useLoaderData();
  const depts = DEPARTMENTS.filter((d) => d.faculty === data.name);

  // Chairperson Slider state
  const [chairIndex, setChairIndex] = React.useState(0);
  const [chairHovered, setChairHovered] = React.useState(false);
  const [chairVisibleCount, setChairVisibleCount] = React.useState(4);

  // Alumni Slider state
  const [alumniIndex, setAlumniIndex] = React.useState(0);
  const [alumniHovered, setAlumniHovered] = React.useState(false);
  const [alumniVisibleCount, setAlumniVisibleCount] = React.useState(2);

  // Programs tab state
  const STUDY_LEVELS = ["Undergraduate", "Graduate", "Postgraduate"] as const;
  type StudyLevel = typeof STUDY_LEVELS[number];
  const [studyLevelTab, setStudyLevelTab] = React.useState<StudyLevel>("Undergraduate");

  // Dynamically set items visible based on window size
  React.useEffect(() => {
    const handleResize = () => {
      // Chairpersons visible count
      if (window.innerWidth < 640) {
        setChairVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setChairVisibleCount(2);
      } else {
        setChairVisibleCount(4);
      }

      // Alumni visible count (Grid 2 on desktop/tablet, 1 on mobile)
      if (window.innerWidth < 768) {
        setAlumniVisibleCount(1);
      } else {
        setAlumniVisibleCount(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalChairpersons = data.chairpersons.length;
  const totalAlumni = data.alumni.length;

  const nextChair = React.useCallback(() => {
    setChairIndex((prev) => (prev + 1) % totalChairpersons);
  }, [totalChairpersons]);

  const prevChair = React.useCallback(() => {
    setChairIndex((prev) => (prev - 1 + totalChairpersons) % totalChairpersons);
  }, [totalChairpersons]);

  // Autoplay for Chairpersons
  React.useEffect(() => {
    if (chairHovered || totalChairpersons <= 1) return;
    const interval = setInterval(() => {
      nextChair();
    }, 5000);
    return () => clearInterval(interval);
  }, [chairHovered, nextChair, totalChairpersons]);

  // Alumni Slider logic
  const nextAlumni = React.useCallback(() => {
    setAlumniIndex((prev) => (prev + 1) % totalAlumni);
  }, [totalAlumni]);

  const prevAlumni = React.useCallback(() => {
    setAlumniIndex((prev) => (prev - 1 + totalAlumni) % totalAlumni);
  }, [totalAlumni]);

  // Autoplay for Alumni
  React.useEffect(() => {
    if (alumniHovered || totalAlumni <= 1) return;
    const interval = setInterval(() => {
      nextAlumni();
    }, 6000);
    return () => clearInterval(interval);
  }, [alumniHovered, nextAlumni, totalAlumni]);

  // Dynamically build repeated arrays for infinite scroll shifting
  const chairToRender: Chairperson[] = [];
  if (totalChairpersons > 0) {
    while (chairToRender.length < totalChairpersons + chairVisibleCount) {
      chairToRender.push(...data.chairpersons);
    }
  }

  const alumniToRender: FacultyAlumni[] = [];
  if (totalAlumni > 0) {
    while (alumniToRender.length < totalAlumni + alumniVisibleCount) {
      alumniToRender.push(...data.alumni);
    }
  }

  return (
    <div className="bg-background text-foreground">
      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={data.heroImage}
          alt={data.name}
          className="absolute inset-0 h-full w-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100"
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        {/* Solid dark fade at bottom so stats bar is always visible */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Faculties</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold/90">{data.name}</span>
          </nav>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm mb-4">
              EWU ACADEMIC DIVISION
            </span>
            <h1 className="font-serif text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl tracking-wide drop-shadow-md">
              {data.name}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-light">
              {data.summary}
            </p>
          </div>

          {/* Key Stats Bar — always dark background so visible in both light & dark mode */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 border-t border-white/20 pt-6 rounded-xl bg-black/50 backdrop-blur-md p-5">
            {[
              { icon: Building2, value: depts.length, label: "Departments" },
              {
                icon: Users,
                value: depts.reduce((acc, d) => acc + d.students, 0).toLocaleString(),
                label: "Enrolled Students",
              },
              {
                icon: GraduationCap,
                value: depts.reduce((acc, d) => acc + d.faculty_count, 0),
                label: "Scholarly Faculty",
              },
              {
                icon: BookOpen,
                value: depts.reduce((acc, d) => acc + d.programs, 0),
                label: "Degree Programs",
              },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 border border-gold/25 backdrop-blur-md">
                  <s.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-lg md:text-2xl font-extrabold text-white leading-none">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 mt-1 font-medium">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. DEAN SECTION ── Reference-style horizontal card ─── */}
      <section className="bg-muted/30 border-y border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section label */}
          <div className="mb-10">
            <p className="text-md font-bold uppercase tracking-[0.2em] text-primary mb-1">Office of the Dean</p>
            <div className="h-px bg-border" />
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-brick">
            <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[340px_1fr]">

              {/* LEFT — Full bleed photo */}
              <div className="relative min-h-[300px] md:min-h-0 overflow-hidden border-b md:border-b-0 md:border-r border-border">
                <img
                  src={data.dean.image}
                  alt={data.dean.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                {/* Bottom gradient caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4">
                  <p className="text-white font-serif text-sm font-bold leading-tight">{data.dean.name}</p>
                  <p className="text-white/70 text-[10px] font-medium mt-0.5">{data.dean.designation}</p>
                </div>
              </div>

              {/* RIGHT — Structured Info */}
              <div className="flex flex-col p-6 md:p-8 lg:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1">Dean's Message</p>
                    <h2 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight leading-snug">
                      {data.dean.name}
                    </h2>
                  </div>
                  <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    <GraduationCap className="h-3 w-3" /> Faculty Dean
                  </span>
                </div>

                {/* Info rows */}
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-5 pb-5 border-b border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0">Email</span>
                    <a href={`mailto:${data.dean.email}`} className="text-primary hover:underline font-medium truncate">
                      {data.dean.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0">Title</span>
                    <span className="font-semibold text-primary">{data.dean.designation}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm sm:col-span-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0 mt-0.5">Faculty</span>
                    <span className="font-medium text-foreground/85">{data.name}</span>
                  </div>
                </div>

                {/* Dept row */}
                <div className="flex items-start gap-2 text-sm mb-1 pb-5 border-b border-border">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5">Professor</p>
                    <p className="font-semibold text-foreground">{data.dean.dept}</p>
                  </div>
                </div>

                {/* Message excerpt */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {data.dean.message}
                </p>

                {/* Credentials */}
                <p className="mt-3 text-[11px] text-muted-foreground/70 font-light italic">{data.dean.info}</p>

                {/* CTA */}
                <div className="mt-6">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer">
                    <Quote className="h-3.5 w-3.5" />
                    View Full Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NOTICE BOARD SECTION ───────────────────────────── */}
      <section className="bg-muted/40 border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Stay Updated</p>
              <h2 className="font-serif text-3xl font-bold tracking-tight">Faculty Notice Board</h2>
              <div className="mt-2 h-1 w-16 bg-gold rounded-full" />
            </div>
            <p className="mt-3 md:mt-0 text-sm text-muted-foreground max-w-md">
              Access the latest circulars, research notifications, academic schedules and exam notices for this faculty.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {data.notices.map((n, idx) => (
              <div
                key={idx}
                className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-border bg-card px-5 py-5 transition-all duration-300 hover:border-primary hover:shadow-brick hover:bg-primary/[0.03] cursor-pointer"
              >
                {/* Bold left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-border group-hover:bg-primary transition-colors duration-300" />

                {/* Notice Number Badge */}
                <div className="ml-2 shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-muted border border-border/70 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <span className="font-serif text-sm font-black text-muted-foreground group-hover:text-primary-foreground transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Notice Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-block rounded-full bg-primary-soft px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary-deep group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {n.tag}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(n.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {n.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 text-muted-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DEPARTMENTS SECTION ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Academic Structure</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Our Departments</h2>
          <div className="mt-2.5 h-1 w-20 bg-gold rounded-full mx-auto" />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Discover detailed insights about each academic department including majors, laboratories, specialized curriculums, and research labs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {depts.map((d) => (
            <Link
              key={d.slug}
              to="/departments/$slug"
              params={{ slug: d.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-brick flex flex-col"
            >
              {/* Top banner with watermark abbreviation */}
              <div className="relative h-28 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-gold/10 group-hover:from-primary/20 group-hover:to-gold/15 transition-all duration-500">
                {/* Large watermark text */}
                <span className="absolute -right-3 -bottom-4 font-serif text-7xl font-black tracking-tighter text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none leading-none">
                  {d.short}
                </span>
                {/* Top-left badge */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-lg bg-primary/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary-foreground shadow-sm">
                    {d.short}
                  </span>
                </div>
                
                {/* Bottom progress-like accent bar */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-border">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary to-gold transition-all duration-700 ease-out" />
                </div>
              </div>

              {/* Main body */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-base font-bold group-hover:text-primary transition-colors leading-snug mb-2">
                  {d.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {d.summary}
                </p>

                {/* Stats + Arrow row */}
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="flex gap-5">
                    <div>
                      <p className="text-sm font-extrabold text-foreground leading-none">{d.students.toLocaleString()}</p>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">Students</p>
                    </div>
                    <div className="border-l border-border/60 pl-5">
                      <p className="text-sm font-extrabold text-foreground leading-none">{d.faculty_count}</p>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">Faculty</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 5. CHAIRPERSONS SLIDER SECTION (TOP RIGHT BUTTONS, LEFT TITLE) ── */}
      <section className="bg-card border-y border-border py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header with Title left and Buttons top-right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Leadership</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground">Department Chairpersons</h2>
              <div className="mt-2 h-1 w-20 bg-gold rounded-full" />
            </div>
            {/* Slider Navigation Buttons at top-right on desktop */}
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={prevChair}
                aria-label="Previous Chairperson"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-accent hover:text-primary cursor-pointer active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextChair}
                aria-label="Next Chairperson"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-accent hover:text-primary cursor-pointer active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div
            className="relative mx-auto"
            onMouseEnter={() => setChairHovered(true)}
            onMouseLeave={() => setChairHovered(false)}
          >
            {/* Carousel Viewport */}
            <div className="relative overflow-hidden px-1">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${chairIndex * (100 / chairVisibleCount)}%)`,
                }}
              >
                {chairToRender.map((c, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 px-3 pb-4"
                    style={{ width: `${100 / chairVisibleCount}%` }}
                  >
                    <div className="flex flex-col h-full rounded-2xl border border-border bg-background overflow-hidden shadow-sm hover:border-primary hover:shadow-brick transition-all duration-300">
                      {/* Photo Header */}
                      <div className="relative aspect-[4/4] overflow-hidden bg-muted">
                        <img
                          src={c.image}
                          alt={c.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        
                        <span className="absolute left-3 top-3 rounded-full bg-primary/95 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground border border-white/10 backdrop-blur-xs">
                          {c.deptName}
                        </span>

                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h4 className="font-serif text-base font-bold leading-tight truncate">{c.name}</h4>
                          <p className="text-[10px] text-white/80 mt-0.5 truncate font-medium">{c.designation}</p>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-light mb-4">
                          {c.bio}
                        </p>

                        <div className="space-y-3 pt-3 border-t border-border/60">
                          <div>
                            <p className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">Education</p>
                            <p className="text-[10px] text-foreground/90 font-semibold truncate">{c.education[0]}</p>
                            {c.education[1] && (
                              <p className="text-[9px] text-muted-foreground truncate">{c.education[1]}</p>
                            )}
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">Research</p>
                            <div className="flex flex-wrap gap-1">
                              {c.interests.slice(0, 2).map((interest, iIdx) => (
                                <span
                                  key={iIdx}
                                  className="rounded-full bg-muted border border-border/50 px-2 py-0.5 text-[9px] font-medium text-foreground/80"
                                >
                                  {interest}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators / Dots */}
            {totalChairpersons > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {data.chairpersons.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setChairIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-350 cursor-pointer ${
                      idx === chairIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/45"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 6. CHOOSE YOUR LEVEL OF STUDY ────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Academic Programs</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Choose Your Level of Study</h2>
            <div className="mt-2 h-1 w-20 bg-gold rounded-full" />
          </div>
          {/* Tab Switcher */}
          <div className="flex gap-1 p-1.5 rounded-2xl bg-muted border border-border shadow-sm">
            {STUDY_LEVELS.map((level) => {
              const counts = data.programs.filter((p) => p.level === level).length;
              return (
                <button
                  key={level}
                  onClick={() => setStudyLevelTab(level)}
                  className={`relative flex flex-col items-center px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    studyLevelTab === level
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <span>{level}</span>
                  <span className={`text-[10px] font-bold mt-0.5 ${
                    studyLevelTab === level ? "text-primary-foreground/70" : "text-muted-foreground/60"
                  }`}>
                    {counts} Program{counts !== 1 ? "s" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.programs
            .filter((p) => p.level === studyLevelTab)
            .map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-brick cursor-pointer"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {/* Top glow accent */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-4">
                    {/* Icon badge */}
                    <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-primary-soft border border-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted border border-border/60 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                          <Building2 className="h-2.5 w-2.5" />
                          {p.dept}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-400">
                          <BookOpen className="h-2.5 w-2.5" />
                          {p.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              );
            })}
        </div>

        {/* Empty state */}
        {data.programs.filter((p) => p.level === studyLevelTab).length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            <GraduationCap className="h-10 w-10 mb-3 opacity-30" />
            <p className="text-sm font-medium">No programs listed for this level yet.</p>
          </div>
        )}
      </section>

    </div>
  );
}
