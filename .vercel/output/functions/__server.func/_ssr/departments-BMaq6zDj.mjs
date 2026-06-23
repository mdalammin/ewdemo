import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as GraduationCap, jt as ArrowRight, pt as ChevronRight, s as Users, wt as BookOpen } from "../_libs/lucide-react.mjs";
import { a as DEPARTMENTS } from "./site-data-DkD11PRE.mjs";
import { t as CommunitySlider } from "./CommunitySlider-D_qG1ZeG.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments-BMaq6zDj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function DepartmentsPage() {
	const byFaculty = DEPARTMENTS.reduce((acc, d) => {
		(acc[d.faculty] ||= []).push(d);
		return acc;
	}, {});
	const facultyGroups = Object.entries(byFaculty);
	const defaultFaculty = facultyGroups[0]?.[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[65vh] min-h-[750px] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
					alt: "EWU Departments",
					className: "absolute inset-0 h-full w-full object-cover object-center"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex h-full flex-col justify-between mx-auto max-w-7xl px-6 py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-1.5 text-xs text-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-white transition-colors",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/90",
									children: "Departments"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl my-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm mb-5",
									children: "Academic Excellence"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl",
									children: [
										"Six Faculties.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Thirty Programs.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"One Mission."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-base leading-relaxed text-white/75",
									children: "Explore EWU's full academic offering — from undergraduate degrees to PhD research streams — across engineering, business, law, pharmacy, and liberal arts."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "my-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admission",
										className: "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-brick transition-colors hover:bg-primary-deep",
										children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#departments",
										className: "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20",
										children: "Browse Departments"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-8 border-t border-white/20 pt-6",
							children: [
								{
									icon: BookOpen,
									value: "30+",
									label: "Programs"
								},
								{
									icon: Users,
									value: "15,000+",
									label: "Students"
								},
								{
									icon: GraduationCap,
									value: "6",
									label: "Faculties"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-white/10 backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-white" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-xl font-bold text-white leading-none",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/60 mt-0.5",
									children: s.label
								})] })]
							}, s.label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "departments",
			className: "mx-auto max-w-7xl px-6 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: defaultFaculty,
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
					className: "h-auto w-full justify-start gap-2 overflow-x-auto rounded-2xl border border-border bg-card p-2 text-muted-foreground",
					children: facultyGroups.map(([faculty, depts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
						value: faculty,
						className: "min-h-12 shrink-0 gap-2 rounded-xl px-4 py-2 text-left text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-brick",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: faculty }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-background/80 px-2 py-0.5 text-[11px] font-semibold text-muted-foreground",
							children: depts.length
						})]
					}, faculty))
				}), facultyGroups.map(([faculty, depts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: faculty,
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-widest text-primary",
							children: "Departments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-2xl font-bold",
							children: faculty
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								depts.length,
								" ",
								depts.length === 1 ? "department" : "departments"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: depts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/departments/$slug",
							params: { slug: d.slug },
							className: "group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl brand-gradient font-bold text-primary-foreground",
									children: d.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg font-bold",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: d.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center justify-between text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
												" ",
												d.students.toLocaleString()
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-3 w-3" }),
												" ",
												d.programs
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-1" })]
								})
							]
						}, d.slug))
					})]
				}, faculty))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold",
					children: "Chairperson's Message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: "Our mission is to foster an environment of academic excellence, innovation, and ethical leadership across all disciplines. Watch the video to learn more about our vision for the future of our educational programs and the core objectives that drive our departments forward."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-brick",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "h-full w-full",
						src: "https://www.youtube.com/embed/JiyYFyJK-AU?si=J0LCDh26I6bSKbo5&rel=0",
						title: "Chairperson Message",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card border-y border-border py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold text-center",
						children: "Success Stories & Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-center text-muted-foreground max-w-2xl mx-auto",
						children: "Hear directly from our current students and successful alumni who are making a significant career impact across the globe."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									className: "h-full w-full",
									src: "https://www.youtube.com/embed/p9BdSGgjS64?si=zsYRvbEFEuMyTq34&rel=0",
									title: "Student Testimonial",
									allowFullScreen: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg",
								children: "Student Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Current students share their inspiring academic journeys."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-video w-full overflow-hidden rounded-2xl border border-border shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									className: "h-full w-full",
									src: "https://www.youtube.com/embed/p9BdSGgjS64?si=zsYRvbEFEuMyTq34&rel=0",
									title: "Alumni Success Story",
									allowFullScreen: true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg",
								children: "Alumni Success"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "How our graduates are shaping the future of their respective industries."
							})] })]
						})]
					})
				]
			})
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunitySlider, {})] });
}
//#endregion
export { DepartmentsPage as component };
