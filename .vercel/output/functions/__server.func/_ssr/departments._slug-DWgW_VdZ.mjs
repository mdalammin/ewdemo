import { i as __toESM } from "../_runtime.mjs";
import { a as img } from "./images-B3FFIUwW.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Et as Bell, X as GraduationCap, b as Quote, jt as ArrowRight, k as Minus, kt as Award, mt as ChevronLeft, pt as ChevronRight, s as Users, wt as BookOpen, x as Plus } from "../_libs/lucide-react.mjs";
import { c as FACULTY } from "./site-data-DkD11PRE.mjs";
import { t as CommunitySlider } from "./CommunitySlider-D_qG1ZeG.mjs";
import { t as Route } from "./departments._slug-BOMASkiY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments._slug-DWgW_VdZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEPT_EXTRAS = { cse: {
	heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
	chairperson: {
		name: "Dr. Tasnia Rahman",
		title: "Chairperson & Associate Professor",
		dept: "Department of Computer Science and Engineering",
		image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
		message: "As Chairperson, it is my pleasure to welcome you to one of the university's oldest, largest, and most dynamic academic communities — the Department of Computer Science and Engineering. Home to more than 4,000 undergraduate and graduate students and supported by a strong team of full-time faculty alongside dedicated technical and administrative staff, the department has developed into a vibrant center for learning, inquiry, and innovation."
	},
	notices: [
		{
			date: "2026-06-25",
			tag: "Exam",
			title: "Makeup Midterm Schedule – Spring 2026 Semester"
		},
		{
			date: "2026-06-22",
			tag: "Research",
			title: "Call for Proposals: Undergraduate Research Grant 2026"
		},
		{
			date: "2026-06-18",
			tag: "Event",
			title: "IEEE Student Branch Robotics Workshop Registration Open"
		},
		{
			date: "2026-06-14",
			tag: "Academic",
			title: "Lab Reservation & Equipment Request Guidelines Updated"
		}
	],
	courses: [
		{
			code: "CSE103",
			title: "Structured Programming",
			credits: 3
		},
		{
			code: "CSE106",
			title: "Discrete Mathematics",
			credits: 3
		},
		{
			code: "CSE110",
			title: "Object Oriented Programming",
			credits: 3
		},
		{
			code: "CSE204",
			title: "Data Structures & Algorithms",
			credits: 3
		},
		{
			code: "CSE207",
			title: "Database Management Systems",
			credits: 3
		},
		{
			code: "CSE311",
			title: "Artificial Intelligence",
			credits: 3
		}
	],
	testimonials: [
		{
			name: "Rashed Mahmud",
			batch: "CSE 2021",
			quote: "The rigorous curriculum and real-world lab sessions gave me a competitive edge in the industry. EWU CSE is truly world-class.",
			avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
		},
		{
			name: "Nadia Islam",
			batch: "CSE 2020",
			quote: "The professors genuinely care about your growth. I secured my first tech job before graduation thanks to the career guidance I received.",
			avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
		},
		{
			name: "Tanvir Ahmed",
			batch: "CSE 2022",
			quote: "Being part of the EWU Computer Club and doing research with faculty transformed my understanding of software engineering.",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
		}
	],
	quickLinks: [
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
		"Achievements"
	]
} };
var DEFAULT_EXTRA = {
	heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
	chairperson: {
		name: "Prof. Dr. (Name)",
		title: "Chairperson",
		dept: "Department",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
		message: "Welcome to our department. We are committed to academic excellence and innovation."
	},
	notices: [],
	courses: [],
	testimonials: [],
	quickLinks: [
		"Faculty Members",
		"Programs",
		"Notices",
		"Events"
	]
};
function DepartmentPage() {
	const { dept } = Route.useLoaderData();
	const extra = DEPT_EXTRAS[dept.slug] ?? DEFAULT_EXTRA;
	const facultyMembers = FACULTY.filter((f) => f.dept === dept.slug);
	const [windowWidth, setWindowWidth] = import_react.useState(typeof window !== "undefined" ? window.innerWidth : 1200);
	import_react.useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const facVisible = windowWidth >= 1024 ? 4 : windowWidth >= 640 ? 2 : 1;
	const [facIdx, setFacIdx] = import_react.useState(0);
	const [facHovered, setFacHovered] = import_react.useState(false);
	const maxFacIdx = Math.max(0, facultyMembers.length - facVisible);
	const nextFac = import_react.useCallback(() => {
		setFacIdx((p) => p >= maxFacIdx ? 0 : p + 1);
	}, [maxFacIdx]);
	const prevFac = import_react.useCallback(() => {
		setFacIdx((p) => p === 0 ? maxFacIdx : p - 1);
	}, [maxFacIdx]);
	import_react.useEffect(() => {
		if (facHovered || facultyMembers.length <= facVisible) return;
		const t = setInterval(nextFac, 4e3);
		return () => clearInterval(t);
	}, [
		facHovered,
		nextFac,
		facultyMembers.length,
		facVisible
	]);
	const [testIdx, setTestIdx] = import_react.useState(0);
	const [testHovered, setTestHovered] = import_react.useState(false);
	const tests = extra.testimonials;
	import_react.useEffect(() => {
		if (testHovered || tests.length <= 1) return;
		const t = setInterval(() => setTestIdx((p) => (p + 1) % tests.length), 5e3);
		return () => clearInterval(t);
	}, [testHovered, tests.length]);
	const [openCourse, setOpenCourse] = import_react.useState(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-56 md:h-72 w-full overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: extra.heroImage,
							alt: dept.name,
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 flex h-full items-end px-6 pb-8 mx-auto max-w-7xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "flex items-center gap-1.5 text-xs text-white/60 mb-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/",
											className: "hover:text-white",
											children: "Home"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/departments",
											className: "hover:text-white",
											children: "Departments"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: dept.short
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-serif text-2xl md:text-4xl font-bold text-white leading-tight",
									children: ["Department of ", dept.name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-5 mt-4",
									children: [
										{
											icon: Users,
											v: dept.students.toLocaleString(),
											l: "Students"
										},
										{
											icon: GraduationCap,
											v: dept.faculty_count,
											l: "Faculty"
										},
										{
											icon: BookOpen,
											v: dept.programs,
											l: "Programs"
										},
										{
											icon: Award,
											v: "A+",
											l: "UGC"
										}
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-8 w-8 place-items-center rounded-lg bg-white/15 backdrop-blur-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4 text-white" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold text-white text-sm leading-none",
											children: s.v
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-white/60 mt-0.5",
											children: s.l
										})] })]
									}, s.l))
								})
							] })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-0 -mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-primary text-primary-foreground rounded-b-2xl overflow-hidden shadow-brick",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-5 py-4 border-b border-white/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "font-serif text-base font-bold leading-snug",
										children: ["Department of ", dept.name]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "py-2",
									children: extra.quickLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#",
										className: "flex items-center justify-between px-5 py-2.5 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 transition-colors border-b border-white/10 last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 opacity-50" })]
									}, link))
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card border border-border rounded-2xl md:rounded-l-none md:rounded-r-2xl shadow-sm overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-6 py-5 border-b border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-black uppercase tracking-[0.25em] text-primary",
									children: "Chairperson's Message"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 grid sm:grid-cols-[160px_1fr] gap-6 items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative shrink-0 mx-auto sm:mx-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 rounded-xl border border-border/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-1 rounded-lg border border-primary/20" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: extra.chairperson.image,
											alt: extra.chairperson.name,
											className: "relative h-44 w-36 object-cover object-top rounded-lg shadow-sm"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl font-bold text-foreground",
										children: extra.chairperson.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: dept.faculty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-primary",
											children: extra.chairperson.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-foreground font-medium",
											children: extra.chairperson.dept
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border my-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed line-clamp-5",
										children: extra.chairperson.message
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline cursor-pointer",
											children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										}), dept.slug === "cse" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/computer-science-engineering",
											className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold text-primary-foreground hover:bg-primary-deep transition-colors",
											children: ["Visit Department Website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
										})]
									})
								] })]
							})]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted/40 border-y border-border py-16 mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1",
								children: "Stay Updated"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl font-bold",
								children: "Notice Board"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1 w-14 bg-gold rounded-full" })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 rounded-lg border border-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" }), " All Notices"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [extra.notices.map((n, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card px-5 py-4 transition-all hover:border-primary hover:shadow-brick cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-border group-hover:bg-primary transition-colors" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-2 shrink-0 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-lg text-primary leading-none",
										children: new Date(n.date).getDate()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] uppercase tracking-wider text-muted-foreground font-medium",
										children: new Date(n.date).toLocaleString("en-US", { month: "short" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full bg-primary-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary mb-1",
										children: n.tag
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate",
										children: n.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 duration-200" })
							]
						}, idx)), extra.notices.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground text-center py-8",
							children: "No notices at this time."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-16 mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1",
							children: "Our Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-2xl font-bold",
							children: "Faculty Members"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-1 w-14 bg-gold rounded-full" })
					] })
				}), facultyMembers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Faculty listings coming soon."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					onMouseEnter: () => setFacHovered(true),
					onMouseLeave: () => setFacHovered(false),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: prevFac,
							"aria-label": "Previous faculty",
							className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary transition-all cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden px-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex transition-transform duration-500 ease-out",
								style: { transform: `translateX(-${facIdx * (100 / facVisible)}%)` },
								children: facultyMembers.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "shrink-0 px-3 pb-2",
									style: { width: `${100 / facVisible}%` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/faculty/$id",
										params: { id: f.id },
										className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-brick hover:-translate-y-1 h-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative h-52 w-full overflow-hidden bg-muted",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: f.imageUrl || img(f.img) || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
												alt: f.name,
												className: "h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 flex flex-col flex-1 text-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-serif text-sm font-bold group-hover:text-primary transition-colors line-clamp-2",
												children: f.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground mt-1",
												children: f.designation
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 flex flex-wrap justify-center gap-1",
												children: f.interests.slice(0, 2).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-muted border border-border/50 px-2 py-0.5 text-[9px] font-medium text-muted-foreground",
													children: i
												}, i))
											})]
										})]
									})
								}, idx))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: nextFac,
							"aria-label": "Next faculty",
							className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-accent hover:text-primary transition-all cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
						}),
						facultyMembers.length > facVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-center gap-1.5",
							children: Array.from({ length: maxFacIdx + 1 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFacIdx(i),
								className: `h-2 rounded-full transition-all cursor-pointer ${i === facIdx ? "w-6 bg-primary" : "w-2 bg-border"}`
							}, i))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted/40 border-y border-border py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-16 bg-primary mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-xl font-bold uppercase tracking-wide",
							children: [
								"Core ",
								dept.short,
								" Courses"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-deep transition-colors cursor-pointer",
							children: ["See All Course ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [extra.courses.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpenCourse(openCourse === idx ? null : idx),
								className: "flex w-full items-center justify-between bg-primary px-5 py-3.5 text-left cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-white/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white",
										children: c.code
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-white",
										children: c.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] text-white/70",
										children: [c.credits, " Credits"]
									}), openCourse === idx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4 text-white/80" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 text-white/80" })]
								})]
							}), openCourse === idx && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-4 text-sm text-muted-foreground leading-relaxed",
								children: [
									"This course covers fundamental and advanced topics in ",
									c.title.toLowerCase(),
									", providing students with both theoretical understanding and practical skills applicable in modern software development and research."
								]
							})]
						}, idx)), extra.courses.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground text-center py-6",
							children: "Course listings coming soon."
						})]
					})]
				})
			}),
			tests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-20 mx-auto max-w-4xl px-6 text-center",
				onMouseEnter: () => setTestHovered(true),
				onMouseLeave: () => setTestHovered(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2",
						children: "Voices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold border-l-4 border-primary pl-3 text-left inline-block mb-10",
						children: "What Student Say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex transition-transform duration-500 ease-out",
								style: { transform: `translateX(-${testIdx * 100}%)` },
								children: tests.map((t, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "shrink-0 w-full px-12",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center mb-6",
											children: tests.map((tt, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												onClick: () => setTestIdx(ti),
												className: `relative -mx-2 cursor-pointer transition-all duration-300 ${ti === testIdx ? "z-10 scale-110" : "z-0 opacity-50 scale-90"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `h-14 w-14 rounded-full overflow-hidden border-2 ${ti === testIdx ? "border-primary" : "border-border"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: tt.avatar,
														alt: tt.name,
														className: "h-full w-full object-cover object-top"
													})
												})
											}, ti))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-gold/40 mx-auto mb-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
											className: "font-serif text-lg italic text-foreground/85 leading-relaxed max-w-2xl mx-auto",
											children: [
												"\"",
												t.quote,
												"\""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-foreground",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-primary font-medium",
												children: t.batch
											})]
										})
									]
								}, idx))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setTestIdx((p) => (p - 1 + tests.length) % tests.length),
								"aria-label": "Previous",
								className: "absolute left-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setTestIdx((p) => (p + 1) % tests.length),
								"aria-label": "Next",
								className: "absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-all cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center gap-2",
						children: tests.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setTestIdx(i),
							className: `h-2 rounded-full transition-all cursor-pointer ${i === testIdx ? "w-6 bg-primary" : "w-2 bg-border"}`
						}, i))
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunitySlider, {})] });
}
//#endregion
export { DepartmentPage as component };
