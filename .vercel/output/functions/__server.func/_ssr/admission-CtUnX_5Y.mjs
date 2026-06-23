import { i as __toESM } from "../_runtime.mjs";
import { t as about_campus_aerial_default } from "./about-campus-aerial-BdWzhAm9.mjs";
import { n as about_visit_default, t as about_grad_default } from "./about-visit-DigQFnlL.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as MapPin, N as MessageCircle, Q as FileText, R as Mail, T as Phone, X as GraduationCap, _t as Calendar, a as Wallet, ft as CircleCheck, h as Sparkles, ht as ChevronDown, jt as ArrowRight, kt as Award, lt as Clock, rt as Earth, wt as BookOpen, y as Repeat } from "../_libs/lucide-react.mjs";
import { d as SCHOLARSHIPS } from "./site-data-DkD11PRE.mjs";
import { t as fac_library_default } from "./fac-library-CoxEfPEm.mjs";
import { t as hero_fallback_default } from "./hero-fallback-DkU6y6VQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admission-CtUnX_5Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		icon: GraduationCap,
		img: about_grad_default,
		title: "Undergraduate",
		body: "Four-year bachelor's programs across Engineering, Business, Pharmacy, Law, Sciences and Humanities.",
		points: [
			"SSC + HSC or O/A Levels",
			"Admission test on campus",
			"Spring & Fall intakes"
		]
	},
	{
		icon: BookOpen,
		img: "/assets/ach-1-CEzZpcwx.jpg",
		title: "Graduate",
		body: "MBA, MSc, MA and professional master's programs designed for working professionals and researchers.",
		points: [
			"Bachelor's with min. CGPA 2.50",
			"GRE / GMAT (program specific)",
			"Evening & weekend classes"
		]
	},
	{
		icon: Earth,
		img: about_campus_aerial_default,
		title: "International",
		body: "Welcoming students from SAARC, ASEAN, the Middle East and Africa with dedicated international support.",
		points: [
			"WES / IBCC equivalence",
			"IELTS 6.0 or TOEFL iBT 70",
			"Student visa assistance"
		]
	},
	{
		icon: Repeat,
		img: fac_library_default,
		title: "Transfer",
		body: "Continue your degree at EWU. We honour credits from accredited universities after course-by-course review.",
		points: [
			"Up to 50% credit transfer",
			"Course-by-course evaluation",
			"Rolling admissions"
		]
	}
];
var REQUIREMENTS = [
	{
		title: "Undergraduate",
		items: [
			"Minimum GPA 2.50 in both SSC and HSC (combined 6.00)",
			"O-Levels: 5 subjects with grade B; A-Levels: 2 with grade C",
			"SAT 1100+ may waive admission test",
			"Transcripts, NID/passport, 2 recommendation letters",
			"Statement of Purpose (300–500 words)"
		]
	},
	{
		title: "Graduate",
		items: [
			"Bachelor's degree from an accredited institution",
			"Minimum CGPA 2.50 on a 4.0 scale",
			"GRE 295+ for MSc programs (preferred)",
			"GMAT 500+ or EWU Admission Test for MBA",
			"Two academic / professional recommendation letters",
			"Updated CV and statement of purpose"
		]
	},
	{
		title: "International & Transfer",
		items: [
			"WES, IBCC or equivalent credential evaluation",
			"IELTS 6.0 / TOEFL iBT 70 / Duolingo 100",
			"Valid passport and recent photograph",
			"Official transcripts and course descriptions",
			"Financial affidavit for visa processing"
		]
	}
];
var DEADLINES = [
	{
		phase: "Early Decision",
		date: "20 Nov 2026",
		color: "bg-gold/15 text-gold-foreground border-gold/40"
	},
	{
		phase: "Applications Open",
		date: "15 Nov 2026",
		color: "bg-primary/10 text-primary border-primary/30"
	},
	{
		phase: "Regular Deadline",
		date: "15 Jan 2027",
		color: "bg-primary/10 text-primary border-primary/30"
	},
	{
		phase: "Admission Test",
		date: "23 Jan 2027",
		color: "bg-brick/10 text-brick border-brick/30"
	},
	{
		phase: "Results Published",
		date: "30 Jan 2027",
		color: "bg-primary/10 text-primary border-primary/30"
	},
	{
		phase: "Orientation Week",
		date: "1–6 Feb 2027",
		color: "bg-primary/10 text-primary border-primary/30"
	},
	{
		phase: "Classes Begin",
		date: "8 Feb 2027",
		color: "bg-brick/10 text-brick border-brick/30"
	}
];
var VISITS = [
	{
		icon: MapPin,
		title: "Campus Tour",
		body: "Guided 60-minute walking tour of academic buildings, library and labs.",
		cta: "Book a tour"
	},
	{
		icon: Sparkles,
		title: "Info Session",
		body: "Live Q&A with the admissions team, held every Wednesday at 3 PM.",
		cta: "Reserve a seat"
	},
	{
		icon: Earth,
		title: "Virtual Open House",
		body: "Explore EWU from anywhere via our interactive 360° campus walkthrough.",
		cta: "Start virtual tour"
	}
];
var FAQS = [
	{
		q: "When can I apply for Spring 2027?",
		a: "Applications open 15 November 2026 and close 15 January 2027. Early Decision applicants get a response by 5 December 2026."
	},
	{
		q: "Is SAT or GRE required?",
		a: "SAT/GRE are optional but strongly recommended. Strong scores can waive the on-campus admission test."
	},
	{
		q: "What is the application fee?",
		a: "BDT 1,000 for domestic applicants and USD 30 for international applicants, payable online via bKash, Nagad, Visa or DBBL."
	},
	{
		q: "Do you offer payment plans?",
		a: "Yes, tuition can be paid in three instalments per semester at no additional cost."
	},
	{
		q: "Are scholarships available?",
		a: "EWU awards merit-based, need-based and special scholarships up to 100% tuition waiver. See the Scholarships section below."
	},
	{
		q: "Can I defer admission?",
		a: "Approved offers can be deferred by one semester with a written request to the Admissions Office."
	}
];
function AdmissionPage() {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-primary-deep/30 bg-primary text-primary-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_fallback_default,
					alt: "Student at EWU admission desk",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary-deep/70 via-primary-deep/30 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr] lg:items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "mb-4 flex items-center gap-2 text-xs text-primary-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-primary-foreground",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Admission" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold",
							children: "Admissions Overview"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl",
							children: "Welcome to where your future takes shape."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base text-primary-foreground/85 md:text-lg",
							children: "Rooted in integrity, inquiry and impact, EWU has welcomed over 30,000 students into careers that move Bangladesh forward. Spring 2027 applications are now open."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#apply",
								className: "inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-brick hover:opacity-90",
								children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#visit",
								className: "inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur",
								children: "Visit Campus"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-gold" }), " Deadline: 15 Jan 2027"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold" }), " Online application in 10 min"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-gold" }), " Up to 100% scholarship"]
								})
							]
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Student Categories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold leading-tight md:text-4xl",
					children: "Find your pathway"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Tailored guidance for every applicant, pick the route that matches your background and goals."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: c.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gold text-gold-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "absolute bottom-3 left-4 right-4 font-serif text-lg font-bold text-white",
									children: c.title
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: c.body
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1.5 text-xs text-foreground/85",
								children: c.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })
									]
								}, p))
							})]
						})]
					}, c.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Admission Requirements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "What you'll need to apply"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Easy-to-scan checklists for each applicant track."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: REQUIREMENTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-bold",
									children: r.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: r.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
								}, it))
							})]
						}, r.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "apply",
			className: "mx-auto max-w-7xl grid gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "How to Apply"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold",
					children: "Five steps to enrolment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 space-y-4",
					children: [
						["Create your application", "Register at admission.ewubd.edu with a valid email and mobile."],
						["Upload documents", "SSC/HSC transcripts, NID, photo, signature and equivalence (if any)."],
						["Pay application fee", "BDT 1,000 via bKash, Nagad, Visa or DBBL."],
						["Sit the admission test", "Held on campus; subjects vary by program."],
						["Receive offer & enrol", "Pay first-semester tuition to secure your seat."]
					].map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 rounded-lg border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: b
						})] })]
					}, t))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-6 w-6 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-serif text-lg font-bold",
							children: "Tuition (per semester)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 space-y-3 text-sm",
							children: [
								["BBA / Economics / English", "BDT 78,000"],
								["CSE / EEE / Civil", "BDT 92,500"],
								["Pharmacy", "BDT 105,000"],
								["Law / LLB", "BDT 71,000"],
								["Per credit (avg.)", "BDT 6,500"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between border-b border-dashed border-border pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold",
									children: v
								})]
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: "Indicative, actual fees depend on credit load."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "apply-cta",
					className: "block rounded-2xl brand-gradient p-6 text-primary-foreground shadow-brick",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-6 w-6 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-serif text-lg font-bold",
							children: "Apply now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-primary-foreground/85",
							children: "Start your online application in under 10 minutes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login/student",
							className: "mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground",
							children: ["Begin application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Tuition & Financial Aid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Investing in your future"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: "Over 40% of EWU students receive some form of financial aid. Explore scholarships, grants and flexible payment plans."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: [
							{
								icon: Award,
								title: "Merit Scholarships",
								body: "Up to 100% tuition waiver for top SSC/HSC and entry-test scorers.",
								link: "View criteria"
							},
							{
								icon: Wallet,
								title: "Need-Based Grants",
								body: "Means-tested aid for students from low-income families across Bangladesh.",
								link: "Check eligibility"
							},
							{
								icon: FileText,
								title: "Financial Aid Portal",
								body: "Apply, track and renew aid online through the student dashboard.",
								link: "Open portal"
							}
						].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group rounded-2xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-brick",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-lg font-bold",
									children: it.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: it.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all",
									children: [
										it.link,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							]
						}, it.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 rounded-2xl border border-border bg-background p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl font-bold",
								children: "Available scholarships"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3 sm:grid-cols-2",
							children: SCHOLARSHIPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-foreground/85",
									children: s
								})]
							}, i))
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Important Dates"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold md:text-4xl",
					children: "Spring 2027 timeline"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Mark your calendar, every key date in one scannable timeline."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-6",
						children: DEADLINES.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative ml-12 md:ml-0 ${i % 2 ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${d.color}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
											" ",
											d.phase
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-xl font-bold",
										children: d.date
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-3 top-1 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2" })
							]
						}, d.phase))
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "visit",
			className: "relative overflow-hidden border-y border-border bg-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_visit_default,
					alt: "EWU campus tour",
					className: "absolute inset-0 h-full w-full object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary-deep/70 via-primary-deep/30 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-6 py-16 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold",
							children: "Visit & Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-bold md:text-4xl",
							children: "Come see EWU for yourself"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-primary-foreground/85",
							children: "Walk the halls, sit in on a class or join us virtually, there's a way for every applicant to experience campus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-3",
							children: VISITS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur transition hover:bg-primary-foreground/15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-serif text-lg font-bold",
										children: v.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-primary-foreground/85",
										children: v.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "mt-4 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-foreground/90",
										children: [
											v.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									})
								]
							}, v.title))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.5fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "FAQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Common applicant questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 divide-y divide-border rounded-2xl border border-border bg-card",
						children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenFaq(openFaq === i ? null : i),
							className: "block w-full px-5 py-4 text-left",
							"aria-expanded": openFaq === i,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `mt-1 h-4 w-4 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}` })]
							}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: f.a
							})]
						}, i))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl font-bold",
						children: "Admissions Office"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Sun–Thu, 9:00 AM – 5:00 PM (BDT). Closed on national holidays."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-3",
						children: [
							{
								icon: Phone,
								label: "Call us",
								value: "+880 1700 000 000"
							},
							{
								icon: Mail,
								label: "Email",
								value: "admission@ewubd.example"
							},
							{
								icon: MessageCircle,
								label: "Live chat",
								value: "Available on portal, 10 AM to 6 PM"
							},
							{
								icon: MapPin,
								label: "Visit",
								value: "A/2, Jahurul Islam Avenue, Aftabnagar, Dhaka"
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: c.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: c.value
							})] })]
						}, c.label))
					})
				] })]
			})
		})
	] });
}
//#endregion
export { AdmissionPage as component };
