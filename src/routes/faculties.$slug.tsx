import * as React from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { DEPARTMENTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
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
  Pin,
  MegaphoneIcon,
  CalendarDays,
} from "lucide-react";

import face1 from "@/assets/faculty/dr_maheen_islam.jpg";
import face2 from "@/assets/faculty/dr_md_naimul.jpg";
import face3 from "@/assets/faculty/khairul_alam.jpg";
import face4 from "@/assets/faculty/dr_anindita_paul.jpg";
import face5 from "@/assets/faculty/cse_dean.jpg";
import { useState } from "react";

import deptCse from "@/assets/dept/cse.jpg";
import deptEee from "@/assets/dept/eee.jpg";
import deptCivil from "@/assets/dept/civil.jpg";
import deptBba from "@/assets/dept/bba.jpg";
import deptEco from "@/assets/dept/eco.jpg";
import deptEnglish from "@/assets/dept/english.jpg";

// Swiper types only — real import happens client-side in NewsSlider
type SwiperType = import("swiper").Swiper;

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
  events: Notice[];
  chairpersons: Chairperson[];
  alumni: FacultyAlumni[];
  programs: Program[];
}

const PROGRAM_ICONS: Record<string, React.ElementType> = {
  Laptop,
  FlaskConical,
  Scale,
  Zap,
  Pill,
  HardHat,
  BarChart3,
  BookMarked,
  GraduationCap,
};

const FACULTIES_DATA: Record<string, FacultyData> = {
  "science-engineering": {
    name: "Faculty of Sciences & Engineering",
    slug: "science-engineering",
    heroImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    tagline: "Pioneering Innovation and Engineering Excellence",
    summary:
      "Preparing the next generation of engineers, pharmacologists, and scientists through cutting-edge laboratories, research-led teaching, and strong industrial linkages.",
    dean: {
      name: "Dr. Shariar Kabir",
      designation: "Dean & Professor",
      dept: "Department of Computer Science & Engineering",
      email: "dean.fse@ewu.edu.bd",
      image: face5,
      info: "PhD, Tokyo University | Fellow, Bangladesh Academy of Sciences | 22+ Years in Academic Leadership",
      message:
        "Welcome to the Faculty of Sciences & Engineering at East West University. We live in an era of rapid technological disruption, where science and engineering drive human progress. Our faculty is dedicated to fostering a culture of curiosity, analytical thinking, and ethical responsibility. With modern lab facilities, state-of-the-art computational infrastructure, and a world-class faculty body, we ensure our graduates are equipped to lead.",
    },
    programs: [
      {
        level: "Undergraduate",
        title: "B.Sc. in Computer Science & Engineering",
        dept: "CSE",
        duration: "4 Years",
        icon: Laptop,
      },
      {
        level: "Undergraduate",
        title: "B.Sc. in Electrical & Electronic Engineering",
        dept: "EEE",
        duration: "4 Years",
        icon: Zap,
      },
      {
        level: "Undergraduate",
        title: "B.Sc. in Civil Engineering",
        dept: "CE",
        duration: "4 Years",
        icon: HardHat,
      },
      {
        level: "Undergraduate",
        title: "B. Pharm.",
        dept: "PHARM",
        duration: "4 Years",
        icon: Pill,
      },
      {
        level: "Graduate",
        title: "M.Sc. in Computer Science",
        dept: "CSE",
        duration: "2 Years",
        icon: Laptop,
      },
      {
        level: "Graduate",
        title: "M.Sc. in Electrical Engineering",
        dept: "EEE",
        duration: "2 Years",
        icon: Zap,
      },
      { level: "Graduate", title: "M. Pharm.", dept: "PHARM", duration: "2 Years", icon: Pill },
      {
        level: "Postgraduate",
        title: "PhD in Engineering",
        dept: "CSE / EEE / CE",
        duration: "3–5 Years",
        icon: FlaskConical,
      },
      {
        level: "Postgraduate",
        title: "PhD in Pharmaceutical Sciences",
        dept: "PHARM",
        duration: "3–5 Years",
        icon: FlaskConical,
      },
    ],
    notices: [
      {
        date: "2026-06-25",
        tag: "Exam",
        title: "Makeup Midterm Examination Schedule for Spring 2026",
      },
      {
        date: "2026-06-20",
        tag: "Research",
        title: "Call for Proposals: Faculty Research & Development Grants 2026-2027",
      },
      {
        date: "2026-06-18",
        tag: "Academic",
        title: "Registration and Advising Guidelines for Laboratory Courses",
      },
      {
        date: "2026-06-12",
        tag: "Event",
        title: "IEEE Student Branch Robotics Workshop: Registration Now Open",
      },
    ],
    events: [
      {
        date: "2026-06-28",
        tag: "Seminar",
        title: "International Seminar on Applied Mathematics and Computation",
      },
      {
        date: "2026-07-04",
        tag: "Workshop",
        title: "Annual Science Fair — Open Submissions for Undergraduate Students",
      },
      {
        date: "2026-07-10",
        tag: "Workshop",
        title: "Research Methodology Workshop for Postgraduate Scholars",
      },
      {
        date: "2026-07-15",
        tag: "Event",
        title: "Faculty Alumni Meet 2026 — Networking and Career Mentorship",
      },
    ],
    chairpersons: [
      {
        name: "Dr. Maheen Islam",
        designation:
          "Chairperson , Associate Professor, Department of Computer Science & Engineering",
        deptName: "Computer Science & Engineering",
        image: face1,
        education: ["PhD, University of Toronto", "MSc, BUET", "BSc, BUET"],
        interests: ["Machine Learning", "Bangla NLP", "Healthcare AI"],
        bio: "Recipient of the BAS Gold Medal 2024. Dr. Maheen leads the Low-Resource Bangla NLP lab and is an advisor to several governmental AI initiatives.",
      },
      {
        name: "Dr. Md. Naimul Haque",
        designation: "Chairperson ,  Associate Professor, Department of Civil Engineering",
        deptName: "Civil Engineering",
        image: face2,
        education: ["PhD, NTU Singapore", "MSc, BUET", "BSc, BUET"],
        interests: [
          "Seismic Design",
          "Sustainable Concrete Materials",
          "Structural Health Monitoring",
        ],
        bio: "Dr. Haque plays a critical role in local structural guidelines. He specializes in earthquake resilience for high-rise buildings.",
      },
      {
        name: "Dr. Anindita Paul",
        designation: "Chairperson ,  Professor, Department of Mathematical and Physical Sciences",
        deptName: "Pharmacy",
        image: face4,
        education: ["PhD, University of Nottingham", "M.Pharm, Dhaka University"],
        interests: ["Targeted Drug Delivery", "Clinical Pharmacokinetics", "Nanomedicine"],
        bio: "Dr. Paul's research targets nanotechnology in cancer therapeutics. She has multiple publications in leading global pharmacology journals.",
      },
      {
        name: "Khairul Alam",
        designation:
          "Chairperson ,  Professor, Department of Electrical and Electronic Engineering",
        deptName: "Electrical & Electronic Engineering ",
        image: face3,
        education: ["PhD, KTH Stockholm", "MSc, BUET", "BSc, BUET"],
        interests: ["Smart Grids", "Renewable Energy Systems", "Power Electronics"],
        bio: "Khairul Alam is a leading voice in green energy transition. He has published over 50 peer-reviewed papers and serves as a power grid consultant.",
      },
    ],
    alumni: [
      {
        name: "Rashed Mahmud",
        batch: "EEE 2017",
        role: "Senior Design Engineer at Samsung Electronics",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        quote:
          "The hands-on lab experience and undergraduate research mentoring at EWU were the foundations of my semiconductor career.",
        body: "Rashed designs state-of-the-art memory chips at Samsung's Hwaseong campus in South Korea and holds two joint patents.",
      },
      {
        name: "Dr. Nabila Anjum",
        batch: "Pharmacy 2019",
        role: "Clinical Research Collaborator at icddr,b & Square Hospitals",
        image:
          "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=1000&auto=format&fit=crop",
        quote:
          "EWU's clinical rotations gave me real exposure to patient care and medical research before I graduated.",
        body: "Nabila leads field research on public health epidemiology and clinical drug trials in tropical diseases.",
      },
    ],
  },
  "business-economics": {
    name: "Faculty of Business & Economics",
    slug: "business-economics",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    tagline: "Empowering Leaders, Driving Sustainable Development",
    summary:
      "Equipping prospective executives, entrepreneurs, and economists with strategic analytical thinking, ethical business insights, and global competence.",
    dean: {
      name: "Dr. Masum Chowdhury",
      designation: "Dean & Professor",
      dept: "Department of Business Administration",
      email: "dean.fbe@ewu.edu.bd",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
      info: "PhD, National University of Singapore (NUS) | Former Senior Economist at World Bank",
      message:
        "Welcome to the Faculty of Business & Economics. Our objective is to generate leadership for the national and global markets. We nurture strategic thinkers who understand the balance between profits, societal impact, and economic policies. Our business programs are globally accredited, and our economics department is a hub for policy research in South Asia.",
    },
    notices: [
      {
        date: "2026-06-24",
        tag: "Notice",
        title: "Registration Open for Fall 2026 Corporate Internship Placement",
      },
      {
        date: "2026-06-19",
        tag: "Event",
        title: "National Budget 2026-27 Analysis Symposium by Department of Economics",
      },
      {
        date: "2026-06-15",
        tag: "Academic",
        title: "Revised Course Catalog and Elective Prerequisites for BBA Students",
      },
      {
        date: "2026-06-10",
        tag: "Event",
        title: "Annual Business Case Competition: Registration Deadline Extended",
      },
    ],
    events: [
      {
        date: "2026-06-30",
        tag: "Workshop",
        title: "Entrepreneurship Bootcamp: From Ideation to Pitch Deck",
      },
      {
        date: "2026-07-08",
        tag: "Seminar",
        title: "South Asian Finance Forum — Panel on ESG Investing",
      },
      {
        date: "2026-07-14",
        tag: "Event",
        title: "BBA Alumni Reunion and Career Networking Night 2026",
      },
    ],
    chairpersons: [
      {
        name: "Dr. Farhana Haque",
        designation: "Associate Professor & Chair",
        deptName: "Business Administration",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        education: ["PhD, NUS Singapore", "MBA, IBA Dhaka University"],
        interests: ["Consumer Behavior", "Digital Marketing", "Fintech Adoption"],
        bio: "Editor-in-Chief of the South Asian Journal of Marketing. Consultant to major mobile financial services like bKash.",
      },
      {
        name: "Dr. Rumana Akter",
        designation: "Professor & Chair",
        deptName: "Economics",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
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
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        quote:
          "EWU's entrepreneurship clinics took my startup idea from a classroom presentation to a real product serving lakhs of users.",
        body: "Tahmid founded one of Bangladesh's fastest growing fintech payment apps and recently closed a seed investment round.",
      },
      {
        name: "Sumaiya Hossain",
        batch: "BBA 2016",
        role: "Vice President of Digital Banking, BRAC Bank",
        image:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        quote:
          "My leadership foundations were established in the EWU Business Club, working through tight deadlines and complex cases.",
        body: "Sumaiya manages the design and execution of retail mobile application portals at BRAC Bank.",
      },
    ],
    programs: [
      {
        level: "Undergraduate",
        title: "Bachelor of Business Administration (BBA)",
        dept: "BBA",
        duration: "4 Years",
        icon: BarChart3,
      },
      {
        level: "Undergraduate",
        title: "B.Sc. (Hons.) in Economics",
        dept: "ECO",
        duration: "4 Years",
        icon: BarChart3,
      },
      {
        level: "Graduate",
        title: "Master of Business Administration (MBA)",
        dept: "BBA",
        duration: "1.5 Years",
        icon: BarChart3,
      },
      {
        level: "Graduate",
        title: "Executive MBA (EMBA)",
        dept: "BBA",
        duration: "2 Years",
        icon: BarChart3,
      },
      {
        level: "Graduate",
        title: "M.Sc. in Economics",
        dept: "ECO",
        duration: "2 Years",
        icon: BarChart3,
      },
      {
        level: "Postgraduate",
        title: "PhD in Management",
        dept: "BBA",
        duration: "3–5 Years",
        icon: FlaskConical,
      },
      {
        level: "Postgraduate",
        title: "PhD in Economics",
        dept: "ECO",
        duration: "3–5 Years",
        icon: FlaskConical,
      },
    ],
  },
  "liberal-arts-social-sciences": {
    name: "Faculty of Liberal Arts & Social Sciences",
    slug: "liberal-arts-social-sciences",
    heroImage:
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=2074&auto=format&fit=crop",
    tagline: "Cultivating Critical Thought, Empathy, and Justice",
    summary:
      "Fostering analytical thinkers, legal minds, and creative scholars who advocate for human rights, cultural awareness, and societal development.",
    dean: {
      name: "Dr. Shirin Akhter",
      designation: "Dean & Professor",
      dept: "Department of English",
      email: "dean.flas@ewu.edu.bd",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
      info: "PhD, University of Oxford | Renowned Literary Critic & Author",
      message:
        "The Faculty of Liberal Arts & Social Sciences is a place where ideas matter. In a highly automated world, the humanities, law, and social sciences provide the critical empathy and analytical depth that cannot be replicated. We teach students how to question assumptions, write clearly, debate logically, and champion justice.",
    },
    notices: [
      {
        date: "2026-06-26",
        tag: "Notice",
        title: "National Moot Court Competition Audition Dates Announced",
      },
      {
        date: "2026-06-21",
        tag: "Event",
        title: "Creative Writing Workshop Series with Distinguished Authors",
      },
      {
        date: "2026-06-14",
        tag: "Academic",
        title: "Pre-Thesis Guidelines and Submission Schedule for English Literature Students",
      },
      {
        date: "2026-06-08",
        tag: "Notice",
        title: "Guest Lecture: Human Rights Frameworks in South Asia",
      },
    ],
    events: [
      {
        date: "2026-07-01",
        tag: "Seminar",
        title: "Inter-University Moot Court Competition — Preliminary Rounds",
      },
      {
        date: "2026-07-09",
        tag: "Workshop",
        title: "Creative Writing Masterclass with Published Authors",
      },
      {
        date: "2026-07-18",
        tag: "Event",
        title: "Annual Law Day Celebration and Guest Lecture Series",
      },
    ],
    chairpersons: [
      {
        name: "Nusrat Jahan",
        designation: "Lecturer & Chair (Acting)",
        deptName: "English",
        image:
          "https://images.unsplash.com/photo-1594744803329-e58b31de215f?q=80&w=1000&auto=format&fit=crop",
        education: [
          "MA in English, Jahangirnagar University",
          "BA in English, Jahangirnagar University",
        ],
        interests: ["Post-colonial Studies", "Bengali Diaspora", "Gender & Performance"],
        bio: "Nusrat conducts research on contemporary Bangladeshi English literature and translation studies.",
      },
      {
        name: "Dr. Aminul Islam",
        designation: "Professor & Chair",
        deptName: "Law",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
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
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        quote:
          "The moot court training at EWU enabled me to present complex litigation files to Supreme Court judges with total confidence.",
        body: "Arafat runs a private litigation chamber in Dhaka specializing in corporate disputes and human rights advocacy.",
      },
      {
        name: "Sabrina Rahman",
        batch: "English 2018",
        role: "Senior Communications Specialist at UNDP",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        quote:
          "EWU's critical thinking seminars and postcolonial classes shaped the way I tell stories for global development campaigns.",
        body: "Sabrina leads content creation and strategic press relations for major environmental programs at UNDP Bangladesh.",
      },
    ],
    programs: [
      {
        level: "Undergraduate",
        title: "B.A. (Hons.) in English Language & Literature",
        dept: "ENG",
        duration: "4 Years",
        icon: BookMarked,
      },
      {
        level: "Undergraduate",
        title: "LL.B. (Hons.)",
        dept: "LAW",
        duration: "4 Years",
        icon: Scale,
      },
      {
        level: "Graduate",
        title: "M.A. in English Language & Literature",
        dept: "ENG",
        duration: "1.5 Years",
        icon: BookMarked,
      },
      { level: "Graduate", title: "LL.M. in Law", dept: "LAW", duration: "1.5 Years", icon: Scale },
      {
        level: "Postgraduate",
        title: "PhD in English Literature",
        dept: "ENG",
        duration: "3–5 Years",
        icon: FlaskConical,
      },
      {
        level: "Postgraduate",
        title: "PhD in Law",
        dept: "LAW",
        duration: "3–5 Years",
        icon: FlaskConical,
      },
    ],
  },
};

const TAG_STYLES: Record<string, string> = {
  Exam: "bg-red-50    text-red-800    border border-red-200",
  Research: "bg-green-50  text-green-800  border border-green-200",
  Academic: "bg-blue-50   text-blue-800   border border-blue-200",
  Event: "bg-purple-50 text-purple-800 border border-purple-200",
  Notice: "bg-gray-50   text-gray-700   border border-gray-200",
  Seminar: "bg-pink-50   text-pink-800   border border-pink-200",
  Workshop: "bg-amber-50  text-amber-800  border border-amber-200",
};

const RECENT_NEWS = [
  {
    date: "10 Jun 2025",
    title: "Huawei and BRACNet Host 'Campus NextGen' to Advance Smart Education in Bangladesh",
    excerpt:
      "In a significant stride toward digital transformation in the education sector, BRACNet...",
    image: deptCse,
  },
  {
    date: "05 May 2025",
    title: "DNA Day Celebration at GEB EWU",
    excerpt:
      "Biotech Club, East West University proudly organized a day-long event titled 'Honouri...",
    image: deptEee,
  },
  {
    date: "03 Mar 2025",
    title:
      "Department of CSE Successfully Organized a Seminar on 'Revolutionizing the Telecom Industry'",
    excerpt:
      "The Department of Computer Science and Engineering at East West University recently h...",
    image: deptCivil,
  },
  {
    date: "09 Dec 2024",
    title: "Department of Pharmacy Celebrates 'Pharma Carnival 2024': A Grand Celebration",
    excerpt:
      "The Department of Pharmacy of East West University has organized a two day long 'Phar...",
    image: deptBba,
  },
  {
    date: "15 Oct 2024",
    title: "English Department hosts International Literature Conference",
    excerpt:
      "Scholars from around the world gathered to discuss contemporary South Asian literature...",
    image: deptEnglish,
  },
];

// ─── Client-only News Slider ────────────────────────────────────────────────
// Swiper touches the DOM (window/document) and ships CSS side-effects.
// Rendering it on the server would crash SSR and produce a blank page.
// We lazy-import everything inside a useEffect so it only runs in the browser.
function NewsSlider({
  news,
  prevRef,
  nextRef,
}: {
  news: typeof RECENT_NEWS;
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [ready, setReady] = React.useState(false);
  const [SwiperComp, setSwiperComp] = React.useState<
    (typeof import("swiper/react"))["Swiper"] | null
  >(null);
  const [SwiperSlideComp, setSwiperSlideComp] = React.useState<
    (typeof import("swiper/react"))["SwiperSlide"] | null
  >(null);
  const [mods, setMods] = React.useState<
    | [
        (typeof import("swiper/modules"))["Navigation"],
        (typeof import("swiper/modules"))["Autoplay"],
      ]
    | null
  >(null);

  React.useEffect(() => {
    Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
      import("swiper/css" as string),
      import("swiper/css/navigation" as string),
    ]).then(([{ Swiper: S, SwiperSlide: SS }, { Navigation, Autoplay }]) => {
      setSwiperComp(() => S);
      setSwiperSlideComp(() => SS);
      setMods([Navigation, Autoplay]);
      setReady(true);
    });
  }, []);

  if (!ready || !SwiperComp || !SwiperSlideComp || !mods) {
    // Skeleton while Swiper loads
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
        {news.map((_, i) => (
          <div key={i} className="h-[420px] rounded-3xl bg-muted/40 animate-pulse" />
        ))}
      </div>
    );
  }

  const [Navigation, Autoplay] = mods;
  const Swiper = SwiperComp;
  const SwiperSlide = SwiperSlideComp;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = prevRef.current;
        // @ts-ignore
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      className="!pb-10"
    >
      {news.map((item, idx) => (
        <SwiperSlide key={idx} className="!h-auto">
          <div className="flex flex-col h-[420px] relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border/40 cursor-grab active:cursor-grabbing">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 pointer-events-none"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />
            <div className="absolute top-5 left-5 pointer-events-none z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-bold text-primary-foreground border border-primary/20 shadow-sm">
                <Calendar className="h-3 w-3" />
                {item.date}
              </span>
            </div>
            <div className="relative mt-auto p-7 z-10 flex flex-col items-start transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
              <h3 className="font-serif text-lg md:text-xl font-bold text-white mb-3 leading-snug line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/70 line-clamp-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-2 group-hover:translate-y-0">
                {item.excerpt}
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-white transition-colors cursor-pointer group/btn mb-8">
                Read Full Story
                <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

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
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Go to Home
        </Link>
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
  type StudyLevel = (typeof STUDY_LEVELS)[number];
  const [studyLevelTab, setStudyLevelTab] = React.useState<StudyLevel>("Undergraduate");

  // Dynamically set items visible based on window size
  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window === "undefined") return;
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
      }, 150);
    };

    if (typeof window !== "undefined") {
      // Call immediately without delay for initial render setup
      if (window.innerWidth < 640) setChairVisibleCount(1);
      else if (window.innerWidth < 1024) setChairVisibleCount(2);
      else setChairVisibleCount(4);

      if (window.innerWidth < 768) setAlumniVisibleCount(1);
      else setAlumniVisibleCount(2);

      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
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

  const newsPrevRef = React.useRef<HTMLButtonElement>(null);
  const newsNextRef = React.useRef<HTMLButtonElement>(null);

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

  const [activeTab, setActiveTab] = useState<"notices" | "events">("notices");

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
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
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
                  <p className="font-serif text-lg md:text-2xl font-extrabold text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 mt-1 font-medium">
                    {s.label}
                  </p>
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
            <p className="text-md font-bold uppercase tracking-[0.2em] text-primary mb-1">
              Office of the Dean
            </p>
            <div className="h-px bg-border" />
          </div>

          {/* Card */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-brick">
            <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[380px_1fr]">
              {/* LEFT — Full bleed photo */}
              <div className="relative min-h-[300px] md:min-h-0 overflow-hidden border-b md:border-b-0 md:border-r border-border">
                <img
                  src={data.dean.image}
                  alt={data.dean.name}
                  className="absolute inset-0 h-full w-full object-cover object-[20%_80%] transition-transform duration-[1000ms] ease-out hover:scale-105"
                />
                {/* Bottom gradient caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4">
                  <p className="text-white font-serif text-sm font-bold leading-tight">
                    {data.dean.name}
                  </p>
                  <p className="text-white/70 text-[10px] font-medium mt-0.5">
                    {data.dean.designation}
                  </p>
                </div>
              </div>

              {/* RIGHT — Structured Info */}
              <div className="flex flex-col p-6 md:p-8 lg:p-10">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1">
                      Dean's Message
                    </p>
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0">
                      Email
                    </span>
                    <a
                      href={`mailto:${data.dean.email}`}
                      className="text-primary hover:underline font-medium truncate"
                    >
                      {data.dean.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0">
                      Title
                    </span>
                    <span className="font-semibold text-primary">{data.dean.designation}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm sm:col-span-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0 mt-0.5">
                      Faculty
                    </span>
                    <span className="font-medium text-foreground/85">{data.name}</span>
                  </div>
                </div>

                {/* Dept row */}
                <div className="flex items-start gap-2 text-sm mb-1 pb-5 border-b border-border">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5">
                      Professor
                    </p>
                    <p className="font-semibold text-foreground">{data.dean.dept}</p>
                  </div>
                </div>

                {/* Message excerpt */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                  {data.dean.message}
                </p>

                {/* Credentials */}
                <p className="mt-3 text-[11px] text-muted-foreground/70 font-light italic">
                  {data.dean.info}
                </p>

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
      <section className="relative bg-muted/30 border-y border-border py-12 overflow-hidden">
        {/* Subtle grid background for the whole section */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Faculty Updates
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              News &amp; Notice Board
            </h2>
            <div className="mt-3 h-1 w-16 bg-gold rounded-full" />
          </div>

          {/* Board Container */}
          <div className="relative">
            {/* Red Pin at the top right corner */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20">
              <div className="relative group cursor-pointer hover:-translate-y-1 transition-transform">
                <Pin className="h-10 w-10 md:h-12 md:w-12 text-red-600 fill-red-600 rotate-12 drop-shadow-xl" />
                <div className="absolute top-2 left-2 h-3 w-3 bg-white/40 rounded-full blur-[1px]" />
              </div>
            </div>

            {/* Red Pin at the top left corner */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20">
              <div className="relative group cursor-pointer hover:-translate-y-1 transition-transform">
                <Pin className="h-10 w-10 md:h-12 md:w-12 text-red-600 fill-red-600 -rotate-12 drop-shadow-xl" />
                <div className="absolute top-2 left-2 h-3 w-3 bg-white/40 rounded-full blur-[1px]" />
              </div>
            </div>

            {/* Centered Tabs directly above the paper */}
            <div className="flex justify-center -mb-px relative z-10">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("notices")}
                  className={cn(
                    "flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-t-2xl border border-b-0 cursor-pointer",
                    activeTab === "notices"
                      ? "bg-card text-primary border-border shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)]"
                      : "bg-muted/80 text-muted-foreground border-transparent hover:bg-muted",
                  )}
                >
                  <MegaphoneIcon className="h-4.5 w-4.5" />
                  Notices
                  <span
                    className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full ml-1",
                      activeTab === "notices"
                        ? "bg-primary/10 text-primary"
                        : "bg-border text-muted-foreground",
                    )}
                  >
                    {data.notices.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("events")}
                  className={cn(
                    "flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-t-2xl border border-b-0 cursor-pointer",
                    activeTab === "events"
                      ? "bg-card text-primary border-border shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)]"
                      : "bg-muted/80 text-muted-foreground border-transparent hover:bg-muted",
                  )}
                >
                  <CalendarDays className="h-4.5 w-4.5" />
                  Events
                  <span
                    className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full ml-1",
                      activeTab === "events"
                        ? "bg-primary/10 text-primary"
                        : "bg-border text-muted-foreground",
                    )}
                  >
                    {data.events.length}
                  </span>
                </button>
              </div>
            </div>

            {/* Paper / Board Frame */}
            <div className="relative rounded-3xl rounded-t-none md:rounded-tl-3xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="flex flex-col p-4 md:p-8 relative z-10">
                {(activeTab === "notices" ? data.notices : data.events).map((n, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-2 transition-all duration-300 hover:bg-muted/40 rounded-2xl border border-transparent hover:border-border cursor-pointer mb-1"
                  >
                    {/* Date Badge (News style) */}
                    <div className="shrink-0 flex flex-col items-center justify-center h-[72px] w-[72px] rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                      <span className="text-xs font-bold uppercase text-primary group-hover:text-primary-foreground/90 leading-none mb-1.5">
                        {new Date(n.date).toLocaleDateString("en-US", { month: "short" })}
                      </span>
                      <span className="text-2xl font-black leading-none">
                        {new Date(n.date).getDate()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span
                          className={cn(
                            "inline-block rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm",
                            TAG_STYLES[n.tag] ??
                              "bg-muted text-muted-foreground border border-border",
                          )}
                        >
                          {n.tag}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(n.date).getFullYear()}
                        </span>
                      </div>
                      <h3 className="font-serif text-md md:text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                        {n.title}
                      </h3>
                    </div>

                    {/* Arrow Action */}
                    <div className="hidden md:flex shrink-0 items-center justify-center h-12 w-12 rounded-full bg-background border border-border text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-center p-6 border-t border-border/60 bg-muted/20 relative z-10">
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-red-700 transition-colors cursor-pointer bg-background border border-border px-8 py-3 rounded-full hover:shadow-md hover:-translate-y-0.5">
                  View all {activeTab}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DEPARTMENTS SECTION ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
            Academic Structure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
            Our Departments
          </h2>
          <div className="mt-2.5 h-1 w-20 bg-gold rounded-full mx-auto" />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Discover detailed insights about each academic department including majors,
            laboratories, specialized curriculums, and research labs.
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
                      <p className="text-sm font-extrabold text-foreground leading-none">
                        {d.students.toLocaleString()}
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                        Students
                      </p>
                    </div>
                    <div className="border-l border-border/60 pl-5">
                      <p className="text-sm font-extrabold text-foreground leading-none">
                        {d.faculty_count}
                      </p>
                      <p className="text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                        Faculty
                      </p>
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                Leadership
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Department Chairpersons
              </h2>
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
                          <h4 className="font-serif text-base font-bold leading-tight truncate">
                            {c.name}
                          </h4>
                          <p className="text-[10px] text-white/80 mt-0.5 truncate font-medium">
                            {c.designation}
                          </p>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 font-light mb-4">
                          {c.bio}
                        </p>

                        <div className="space-y-3 pt-3 border-t border-border/60">
                          <div>
                            <p className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">
                              Education
                            </p>
                            <p className="text-[10px] text-foreground/90 font-semibold truncate">
                              {c.education[0]}
                            </p>
                            {c.education[1] && (
                              <p className="text-[9px] text-muted-foreground truncate">
                                {c.education[1]}
                              </p>
                            )}
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1">
                              Research
                            </p>
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
                      idx === chairIndex
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-border hover:bg-muted-foreground/45"
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
              Academic Programs
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Choose Your Level of Study
            </h2>
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
                  <span
                    className={`text-[10px] font-bold mt-0.5 ${
                      studyLevelTab === level
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground/60"
                    }`}
                  >
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

      {/* ── 7. SUBSCRIBE SECTION ────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-border py-24 bg-primary text-primary-foreground text-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={deptCse}
            alt="Subscribe Background"
            className="h-full w-full object-cover object-center opacity-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95 mix-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            Don't Miss Awesome Story From Our Alumni
          </h2>
          <form
            className="mx-auto flex flex-col items-center gap-4 max-w-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your E-mail Address"
              className="w-full bg-transparent border-b border-primary-foreground/40 pb-2 text-center text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="mt-4 bg-white/70 hover:bg-white/90 text-primary font-bold px-8 py-3 text-xs tracking-widest uppercase transition-colors cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* ── 8. RECENT NEWS SECTION ──────────────────────────────── */}
      <section className="py-20 lg:pt-24 lg:pb-0 bg-muted/20 border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                Latest Insights
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                Recent News & Updates
              </h2>
              <div className="mt-2 h-1 w-20 bg-gold rounded-full" />
            </div>
            {/* Slider Navigation Buttons */}
            <div className="flex gap-2">
              <button
                ref={newsPrevRef}
                aria-label="Previous News"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                ref={newsNextRef}
                aria-label="Next News"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="-mx-4 px-4 pb-8 lg:pb-0">
            <NewsSlider news={RECENT_NEWS} prevRef={newsPrevRef} nextRef={newsNextRef} />
          </div>
        </div>
      </section>
    </div>
  );
}
