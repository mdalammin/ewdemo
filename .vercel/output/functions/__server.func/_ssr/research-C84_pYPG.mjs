import { i as __toESM } from "../_runtime.mjs";
import { a as img } from "./images-B3FFIUwW.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Microscope, At as ArrowUpRight, E as Newspaper, Ot as Beaker, Q as FileText, U as Leaf, X as GraduationCap, Z as FlaskConical, _ as Search, _t as Calendar, bt as Building2, gt as ChartColumn, h as Sparkles, jt as ArrowRight, kt as Award, ot as Cpu, q as HeartPulse, s as Users, wt as BookOpen } from "../_libs/lucide-react.mjs";
import { c as FACULTY } from "./site-data-DkD11PRE.mjs";
import { t as PageHero } from "./PageHero-DViCVIdJ.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, i as YAxis, l as Bar, n as BarChart, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
import { t as res_1_default } from "./res-1-Dmz50YQ_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-C84_pYPG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PUBS_BY_YEAR = [
	{
		year: "2020",
		n: 142
	},
	{
		year: "2021",
		n: 168
	},
	{
		year: "2022",
		n: 195
	},
	{
		year: "2023",
		n: 224
	},
	{
		year: "2024",
		n: 261
	},
	{
		year: "2025",
		n: 298
	},
	{
		year: "2026",
		n: 332
	}
];
var THEMES = [
	{
		icon: HeartPulse,
		tag: "Health Sciences",
		title: "Health & Pharmacology",
		body: "Tropical disease pharmacology, public-health policy and digital diagnostics for rural Bangladesh."
	},
	{
		icon: Cpu,
		tag: "AI & Tech",
		title: "AI, Data & Bangla NLP",
		body: "Voice, OCR, search and LLMs tuned for low-resource South Asian languages."
	},
	{
		icon: Leaf,
		tag: "Sustainability",
		title: "Climate & Energy",
		body: "Coastal resilience, solar mini-grids and low-carbon construction materials."
	},
	{
		icon: ChartColumn,
		tag: "Economy",
		title: "Development Economics",
		body: "Microfinance, female labour, financial inclusion and rural markets."
	},
	{
		icon: Building2,
		tag: "Society",
		title: "Urban Futures",
		body: "Seismic retrofit, transport planning and inclusive city design for Dhaka."
	},
	{
		icon: BookOpen,
		tag: "Humanities",
		title: "Language, Law & Culture",
		body: "Post-colonial literature, constitutional law and Bengali diaspora studies."
	}
];
var CENTRES = [
	{
		i: Cpu,
		t: "Centre for AI & Language Technology",
		b: "Bangla NLP, voice and OCR research with national partners."
	},
	{
		i: FlaskConical,
		t: "Institute for Drug Discovery",
		b: "Tropical disease pharmacology in partnership with icddr,b."
	},
	{
		i: Beaker,
		t: "Centre for Sustainable Materials",
		b: "Low-carbon concrete and recycled polymers."
	},
	{
		i: Microscope,
		t: "Smart Energy Research Centre",
		b: "Solar mini-grids and EV charging infrastructure."
	},
	{
		i: ChartColumn,
		t: "Centre for Development Economics",
		b: "Microfinance, labor markets and climate adaptation."
	},
	{
		i: HeartPulse,
		t: "Public Health Innovation Lab",
		b: "Digital diagnostics and rural health systems."
	}
];
var IMPACT = [
	{
		img: "res-1",
		tag: "AI · Health",
		title: "Bangla Voice Diagnostics for Rural Clinics",
		body: "A tablet-based screening tool that lets community health workers triage patients in Bangla."
	},
	{
		img: "res-2",
		tag: "Energy",
		title: "Solar Mini-Grid Resilience for Coastal Bangladesh",
		body: "Storage and failover designs keeping village mini-grids running through Bay cyclone events."
	},
	{
		img: "res-3",
		tag: "Economics",
		title: "Microfinance & Female Labor Participation",
		body: "A multi-year panel study on how credit reshapes women's workforce decisions."
	}
];
var FUNDING = [
	{
		title: "Internal Seed Grants",
		body: "Up to BDT 5 lakh for early-stage faculty research with rolling deadlines.",
		tag: "Faculty"
	},
	{
		title: "UGC Research Grants",
		body: "Competitive national funding co-administered by EWU's Research Office.",
		tag: "Faculty"
	},
	{
		title: "Industry Partnerships",
		body: "Co-funded R&D with bKash, IDCOL, Grameenphone and Banglalink.",
		tag: "Faculty"
	},
	{
		title: "International Calls",
		body: "Proposal support for World Bank, IDRC, Newton Fund and Erasmus+.",
		tag: "Faculty"
	}
];
var STUDENT_PATHS = [
	{
		icon: GraduationCap,
		title: "Undergraduate Research Assistantship",
		body: "Join an active lab in your third or fourth year, paid stipend, course credit and conference travel.",
		cta: "Apply (UG)"
	},
	{
		icon: BookOpen,
		title: "Graduate Thesis Track",
		body: "MSc and MA students pair with a principal investigator for an 18-month thesis project.",
		cta: "Find an advisor"
	},
	{
		icon: Sparkles,
		title: "Summer Research Fellowship",
		body: "Eight-week, fully funded summer programme open across all faculties.",
		cta: "View 2027 cohort"
	}
];
var NEWS = [
	{
		tag: "Announcement",
		date: "12 Jun 2026",
		title: "EWU wins BDT 2.4 crore UGC grant for Bangla LLM research"
	},
	{
		tag: "Event",
		date: "22 Jul 2026",
		title: "Research Symposium 2026, call for posters now open"
	},
	{
		tag: "Publication",
		date: "03 Aug 2026",
		title: "Nature Energy features EWU work on coastal solar resilience"
	},
	{
		tag: "Lecture",
		date: "18 Aug 2026",
		title: "Public lecture: 'The Future of Microfinance in South Asia'"
	}
];
function ResearchPage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = FACULTY.filter((f) => (f.name + " " + f.dept + " " + f.interests.join(" ")).toLowerCase().includes(query.toLowerCase())).slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Research",
			title: "Research with real-world impact, built for Bangladesh.",
			subtitle: "From AI for Bangla healthcare to resilient solar grids and microfinance policy, EWU researchers publish in top venues and partner with national institutions.",
			crumbs: [{
				to: "/",
				label: "Home"
			}, { label: "Research" }],
			image: res_1_default,
			imageAlt: "EWU researchers at work"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					n: "1,820+",
					l: "Publications"
				},
				{
					n: "32",
					l: "Active research groups"
				},
				{
					n: "14",
					l: "Funded labs"
				},
				{
					n: "BDT 18Cr",
					l: "Research funding 2025"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl font-bold text-primary",
					children: s.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
					children: s.l
				})]
			}, s.l))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Research Areas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold md:text-4xl",
					children: "Six themes shaping our work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Categorised focus areas that span every faculty, pick a theme to explore the labs, projects and people behind it."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-brick",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold",
									children: t.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-lg font-bold",
								children: t.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/faculty",
								className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all",
								children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, t.title))
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
						children: "Centres & Institutes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Specialised hubs for deep work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: CENTRES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-6 transition hover:border-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-serif text-lg font-bold",
									children: c.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: c.b
								})
							]
						}, c.t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Impact & Highlights"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold md:text-4xl",
					children: "Breakthroughs that left the lab"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Long-running research with measurable national impact."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 lg:grid-cols-3",
					children: IMPACT.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(p.img),
									alt: p.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground",
									children: p.tag
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-bold leading-tight",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: p.body
							})]
						})]
					}, p.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-end gap-6 md:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
							children: "Output"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-bold",
							children: "Research output, year by year"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "Publications across all EWU departments."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary",
						children: ["Live data ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 h-72 rounded-2xl border border-border bg-background p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: PUBS_BY_YEAR,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								className: "stroke-border"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "year",
								className: "text-xs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { className: "text-xs" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "var(--color-popover)",
								border: "1px solid var(--color-border)",
								borderRadius: 8
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "n",
								fill: "var(--color-primary)",
								radius: [
									6,
									6,
									0,
									0
								]
							})
						]
					}) })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Funding & Grants"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold md:text-4xl",
					children: "Support for principal investigators"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "The Research Office helps faculty find the right funding source and supports every stage of proposal development."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: FUNDING.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-brick",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 inline-block text-[10px] font-bold uppercase tracking-wider text-primary",
								children: f.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-base font-bold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: f.body
							})
						]
					}, f.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-8 w-8 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-[200px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold",
								children: "Proposal support, every step"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "From idea framing to budgeting, ethics review and grant management."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
							children: ["Book a consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-y border-border bg-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img("hero-4"),
					alt: "",
					"aria-hidden": true,
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
							children: "Student Opportunities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-bold md:text-4xl",
							children: "Join an active research project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-primary-foreground/85",
							children: "Three structured pathways for undergraduate and graduate students to get hands-on with real research."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 md:grid-cols-3",
							children: STUDENT_PATHS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 backdrop-blur transition hover:bg-primary-foreground/15",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gold text-gold-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-serif text-lg font-bold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-primary-foreground/85",
										children: s.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "mt-4 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-foreground/90",
										children: [
											s.cta,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									})
								]
							}, s.title))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Faculty Directory"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold md:text-4xl",
					children: "Find a principal investigator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: "Search by name, department or research interest to connect with EWU experts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center gap-2 rounded-xl border border-border bg-card p-2 max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						"aria-label": "Search principal investigators",
						placeholder: "Try 'Bangla NLP', 'microfinance' or 'pharmacology'",
						className: "flex-1 bg-transparent px-2 py-2 text-sm outline-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: [filtered.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faculty/$id",
						params: { id: f.id },
						className: "group flex gap-4 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-brick",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img(f.img),
							alt: f.name,
							className: "h-20 w-20 shrink-0 rounded-xl object-cover",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-base font-bold leading-tight",
									children: f.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: f.designation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-2 text-xs text-foreground/80",
									children: f.interests.join(" · ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all",
									children: ["View profile ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					}, f.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "col-span-full rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground",
						children: [
							"No researchers matched \"",
							query,
							"\". Try a different term."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faculty",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }),
							" Browse the full faculty directory ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "News & Events"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "What's happening in research"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/academic-calendar",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newspaper, { className: "h-4 w-4" }),
							" All updates ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: NEWS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex gap-4 rounded-2xl border border-border bg-background p-5 transition hover:border-primary hover:shadow-brick",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 px-2 py-0.5 font-semibold uppercase tracking-wider text-primary",
									children: n.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: n.date
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-base font-bold leading-snug",
								children: n.title
							})]
						})]
					}, n.title))
				})]
			})
		})
	] });
}
//#endregion
export { ResearchPage as component };
