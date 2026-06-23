import { t as about_campus_aerial_default } from "./about-campus-aerial-BdWzhAm9.mjs";
import { n as about_visit_default, t as about_grad_default } from "./about-visit-DigQFnlL.mjs";
import { a as img, t as GALLERY_KEYS } from "./images-B3FFIUwW.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Heart, L as MapPin, R as Mail, T as Phone, X as GraduationCap, _t as Calendar, bt as Building2, f as Target, ft as CircleCheck, kt as Award, s as Users, st as Compass, tt as Eye, u as Trophy, wt as BookOpen, xt as Briefcase } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BK9clrJC.js
var import_jsx_runtime = require_jsx_runtime();
var leader_1_default = "/assets/leader-1-CYQK5F6c.jpg";
var leader_2_default = "/assets/leader-2-DiKHc-ps.jpg";
var leader_3_default = "/assets/leader-3-B8Bz82Wz.jpg";
var about_culture_default = "/assets/about-culture-D_qKws92.jpg";
var about_accred_default = "/assets/about-accred-BG1m8PCi.jpg";
function Section({ id, eyebrow, title, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: `mx-auto max-w-7xl px-6 py-20 ${className}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl font-bold text-balance md:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children
			})
		]
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_campus_aerial_default,
					alt: "East West University campus",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/70 to-primary-deep/30" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-28 text-primary-foreground md:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mb-4 text-xs text-primary-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-primary-foreground",
								children: "Home"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-50",
								children: "/"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "About" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold",
						children: "About EWU"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-serif text-4xl font-bold leading-tight md:text-6xl text-balance",
						children: "A university built for Bangladesh, by Bangladeshis."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-primary-foreground/90 md:text-lg",
						children: "Founded in 1996, East West University has grown into one of the country's most respected private universities, known for academic rigour, research impact and inclusive student life."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#mission",
							className: "rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-primary-deep hover:bg-gold/90",
							children: "Our Mission"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#visit",
							className: "rounded-md border border-primary-foreground/40 px-5 py-2.5 text-sm font-bold hover:bg-primary-foreground/10",
							children: "Visit Campus"
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "mission",
			eyebrow: "Purpose",
			title: "Mission, vision and values",
			className: "bg-card border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						i: Target,
						t: "Our Mission",
						b: "To deliver excellent, ethical education and research that strengthens Bangladesh's economy, governance and society, and prepares graduates to lead with integrity in a connected world."
					},
					{
						i: Eye,
						t: "Our Vision",
						b: "To be South Asia's leading research-driven private university by 2035, recognised for academic distinction, civic impact and a deeply inclusive community."
					},
					{
						i: Heart,
						t: "Our Values",
						b: "Integrity. Inclusion. Rigour. Service. Stewardship of Bangladesh's heritage and an unwavering respect for every learner who walks through our gates."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group rounded-2xl border border-border bg-background p-8 transition hover:-translate-y-1 hover:shadow-brick",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.i, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-serif text-2xl font-bold",
							children: v.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-foreground/80",
							children: v.b
						})
					]
				}, v.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Heritage",
			title: "Three decades of building a university",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border shadow-brick",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_campus_aerial_default,
						alt: "EWU Aftabnagar campus aerial view",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative pl-8 before:absolute before:left-3 before:top-1 before:h-full before:w-0.5 before:bg-primary/30",
					children: [
						{
							y: "1996",
							t: "EWU founded with 36 students in a leased Dhanmondi building."
						},
						{
							y: "2003",
							t: "UGC accreditation; Faculties of Business, Engineering and Arts established."
						},
						{
							y: "2011",
							t: "Permanent Aftabnagar campus inaugurated on 8.5 acres."
						},
						{
							y: "2015",
							t: "Crossed 10,000 enrolled students across four faculties."
						},
						{
							y: "2018",
							t: "Center for Research and Training launched with ADB and World Bank partners."
						},
						{
							y: "2022",
							t: "EWU School of Law receives accreditation from the Bangladesh Bar Council."
						},
						{
							y: "2024",
							t: "EWU Bangla NLP lab wins Bangladesh Academy of Sciences Gold Medal."
						}
					].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-7 last:mb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl font-bold text-primary",
								children: m.y
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/80",
								children: m.t
							})
						]
					}, m.y))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Leadership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Office of the President & Board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-foreground/75",
						children: "A welcome from those who guide the university's academic direction and long-term stewardship."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: [
							{
								img: leader_1_default,
								name: "Prof. Dr. Shams Rahman",
								role: "Vice Chancellor",
								quote: "At EWU, we believe a great university is measured by the public good its graduates create."
							},
							{
								img: leader_2_default,
								name: "Mr. Mohammed Farashuddin",
								role: "Founder & Chief Adviser",
								quote: "We were founded on one promise: a private university whose standards rival any public institution in Bangladesh."
							},
							{
								img: leader_3_default,
								name: "Dr. Nasrin Akhter",
								role: "Chair, Board of Trustees",
								quote: "Our trustees are stewards of a public trust, not owners of a private enterprise. That distinction shapes every decision."
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:shadow-brick",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.name,
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl font-bold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-primary",
										children: p.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-sm italic text-foreground/75",
										children: [
											"\"",
											p.quote,
											"\""
										]
									})
								]
							})]
						}, p.name))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "brand-gradient text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gold",
						children: "By the numbers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Fast facts about EWU"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-6 md:grid-cols-4",
						children: [
							{
								i: Users,
								n: "12,400+",
								l: "Students enrolled"
							},
							{
								i: GraduationCap,
								n: "1 : 18",
								l: "Student–faculty ratio"
							},
							{
								i: Award,
								n: "320+",
								l: "Full-time faculty"
							},
							{
								i: Building2,
								n: "8.5 ac",
								l: "Aftabnagar campus"
							},
							{
								i: BookOpen,
								n: "38",
								l: "Degree programs"
							},
							{
								i: Trophy,
								n: "62%",
								l: "Acceptance rate"
							},
							{
								i: Calendar,
								n: "29",
								l: "Years of teaching"
							},
							{
								i: Briefcase,
								n: "180+",
								l: "Industry partners"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.i, { className: "mx-auto mb-3 h-6 w-6 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-3xl font-bold md:text-4xl",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs uppercase tracking-wider text-primary-foreground/80",
									children: s.l
								})
							]
						}, s.l))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "Academics",
			title: "Faculties, programs and research",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						t: "Faculty of Sciences & Engineering",
						b: "CSE, EEE, Civil, ECE, Pharmacy, Mathematics.",
						img: img("fac-research")
					},
					{
						t: "Faculty of Business & Economics",
						b: "BBA, MBA, EMBA, Economics, Finance.",
						img: img("club-business")
					},
					{
						t: "Faculty of Arts & Social Sciences",
						b: "English, Sociology, Information Studies.",
						img: img("fac-library")
					},
					{
						t: "Faculty of Law",
						b: "LLB (Hons.), LLM, accredited by Bar Council.",
						img: img("fac-auditorium")
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-brick",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: f.img,
							alt: f.t,
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg font-bold leading-snug",
							children: f.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: f.b
						})]
					})]
				}, f.t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/departments",
					className: "rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-deep",
					children: "Explore departments"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/research",
					className: "rounded-md border border-border px-5 py-2.5 text-sm font-bold hover:bg-card",
					children: "Research highlights"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card border-y border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Campus Life"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Where Bangladesh comes to learn, play and create"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-4",
						children: [
							GALLERY_KEYS.slice(0, 4).map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative overflow-hidden rounded-2xl ${i === 0 ? "row-span-2 md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(k),
									alt: "Campus life",
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent" })]
							}, k)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-2xl aspect-square",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_culture_default,
									alt: "Cultural festival on campus",
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden rounded-2xl aspect-square",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img("club-sports"),
									alt: "Sports",
									loading: "lazy",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 text-sm font-medium text-foreground/80 md:grid-cols-3",
						children: [
							"40+ student clubs and societies",
							"Pohela Boishakh & cultural festivals",
							"Inter-university sports & athletics",
							"Debate, robotics & entrepreneurship",
							"Community service in Aftabnagar",
							"Performing arts and music ensembles"
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" }),
								" ",
								x
							]
						}, x))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Recognition",
			title: "Accreditations & rankings",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border shadow-brick",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_accred_default,
						alt: "Convocation ceremony",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4",
					children: [
						{
							t: "University Grants Commission of Bangladesh",
							b: "Fully accredited private university since 2003."
						},
						{
							t: "Bangladesh Accreditation Council",
							b: "Program-level accreditation across Engineering & Business."
						},
						{
							t: "Bar Council of Bangladesh",
							b: "Recognised LL.B. programme."
						},
						{
							t: "QS Asia University Rankings",
							b: "Ranked among the top private universities in Bangladesh."
						},
						{
							t: "Times Higher Education Impact",
							b: "Recognised for SDG 4 (Quality Education) contributions."
						}
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-xl border border-border bg-background p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mt-1 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-base font-bold",
							children: a.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: a.b
						})] })]
					}, a.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Looking ahead"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Strategic Plan 2025 – 2035"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-foreground/75",
						children: "Five pillars guide EWU's next decade of growth across teaching, research, infrastructure and civic partnership."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5",
						children: [
							{
								i: BookOpen,
								t: "Teaching Excellence",
								b: "Outcome-based curricula across every faculty."
							},
							{
								i: Trophy,
								t: "Research Impact",
								b: "Triple peer-reviewed output by 2030."
							},
							{
								i: Building2,
								t: "Campus Expansion",
								b: "New research block and graduate housing."
							},
							{
								i: Users,
								t: "Inclusion & Access",
								b: "30% need-based scholarships by 2028."
							},
							{
								i: Compass,
								t: "Civic Partnership",
								b: "Embedded with government and NGO partners."
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.i, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-serif text-lg font-bold",
									children: p.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: p.b
								})
							]
						}, p.t))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Join us",
			title: "Careers & employment at EWU",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/80",
						children: "EWU is a great place to teach, research and serve. We're hiring faculty across Engineering, Business, Law and the Arts, plus administrative roles in IT, student services and finance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3",
						children: [
							{
								t: "Assistant Professor, CSE",
								l: "Faculty of Sciences & Engineering"
							},
							{
								t: "Lecturer, Economics",
								l: "Faculty of Business & Economics"
							},
							{
								t: "Research Associate, Bangla NLP Lab",
								l: "Center for Research & Training"
							},
							{
								t: "Manager, International Office",
								l: "Administration"
							}
						].map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl border border-border bg-background p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: j.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: j.l
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-sm font-bold text-primary hover:underline",
								children: "Apply →"
							})]
						}, j.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary-deep",
						children: "View all openings"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border shadow-brick",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_grad_default,
						alt: "EWU graduation",
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "visit",
			className: "border-t border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: "Come see us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold md:text-4xl",
						children: "Visit, tour & contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-2xl border border-border shadow-brick",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "EWU map",
								src: "https://www.google.com/maps?q=East+West+University+Aftabnagar+Dhaka&output=embed",
								className: "aspect-[16/10] w-full",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl border border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: about_visit_default,
									alt: "EWU main entrance",
									loading: "lazy",
									className: "aspect-[16/9] w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-background p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-start gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-primary" }), " Plot No. A/2, Jahurul Islam Avenue, Aftabnagar Main Rd, Dhaka 1212, Bangladesh"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 flex items-center gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +880 9666 775577"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 flex items-center gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), " info@ewubd.edu"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary-deep",
											children: "Contact us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/facilities",
											className: "rounded-md border border-border px-4 py-2 text-sm font-bold hover:bg-card",
											children: "Virtual tour"
										})]
									})
								]
							})]
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
