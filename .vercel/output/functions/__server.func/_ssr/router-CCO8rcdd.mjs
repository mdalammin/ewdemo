import { i as __toESM } from "../_runtime.mjs";
import { t as about_campus_aerial_default } from "./about-campus-aerial-BdWzhAm9.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Bot, D as Moon, G as Instagram, H as LifeBuoy, L as MapPin, M as MessageSquarePlus, P as Menu, R as Mail, T as Phone, V as Linkedin, X as GraduationCap, _ as Search, c as User, et as Facebook, g as Send, h as Sparkles, ht as ChevronDown, l as Twitter, m as Star, n as Youtube, p as Sun, r as X, xt as Briefcase, z as LogIn } from "../_libs/lucide-react.mjs";
import { f as SITE } from "./site-data-DkD11PRE.mjs";
import { t as fac_library_default } from "./fac-library-CoxEfPEm.mjs";
import { t as hero_fallback_default } from "./hero-fallback-DkU6y6VQ.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$15 } from "./departments._slug-BOMASkiY.mjs";
import { t as Route$16 } from "./faculties._slug-DoNdSmoP.mjs";
import { t as Route$17 } from "./faculty._id-CCp3nMBE.mjs";
import { t as Logo } from "./Logo-CKmx_6UK.mjs";
import { t as res_1_default } from "./res-1-Dmz50YQ_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CCO8rcdd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dt97qVsA.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var ThemeCtx = import_react.createContext({
	theme: "light",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = import_react.useState("light");
	import_react.useEffect(() => {
		setTheme((typeof window !== "undefined" && localStorage.getItem("ewu-theme")) ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
	}, []);
	import_react.useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("ewu-theme", theme);
	}, [theme]);
	const toggle = import_react.useCallback(() => setTheme((t) => t === "dark" ? "light" : "dark"), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeCtx.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
function useTheme() {
	return import_react.useContext(ThemeCtx);
}
var MAIN_NAV = [{
	to: "/",
	label: "Home"
}, {
	to: "/clubs",
	label: "Clubs"
}];
var LOGINS = [
	{
		to: "/login/student",
		label: "Student",
		icon: GraduationCap,
		desc: "Grades, registration, resources"
	},
	{
		to: "/login/faculty",
		label: "Faculty",
		icon: User,
		desc: "Courses, attendance, grading"
	},
	{
		to: "/login/nts",
		label: "NTS",
		icon: Briefcase,
		desc: "Non-teaching staff workspace"
	}
];
var FACULTIES_MENU = [{
	slug: "science-engineering",
	label: "Faculty of Science & Engineering"
}];
var DEPARTMENTS_MENU = [{
	to: "/computer-science-engineering",
	label: "Computer Science & Engineering",
	short: "CSE"
}];
function Header() {
	const { theme, toggle } = useTheme();
	const [mobile, setMobile] = import_react.useState(false);
	const [othersOpen, setOthersOpen] = import_react.useState(false);
	const [loginOpen, setLoginOpen] = import_react.useState(false);
	const [searchOpen, setSearchOpen] = import_react.useState(false);
	const [facultiesOpen, setFacultiesOpen] = import_react.useState(false);
	const [departmentsOpen, setDepartmentsOpen] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden border-b border-border/70 bg-primary text-primary-foreground md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${SITE.phone}`,
								className: "inline-flex items-center gap-1.5 opacity-90 hover:opacity-100",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }),
									" ",
									SITE.phone
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-60",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "opacity-90",
								children: ["Emergency: ", SITE.emergency]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "opacity-80",
						children: SITE.tagline
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						"aria-label": "East West University home",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-6 lg:flex",
						children: [
							MAIN_NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: item.to === "/" },
								activeProps: { className: "text-primary after:!w-full" },
								inactiveProps: { className: "text-foreground/80" },
								className: "relative py-2 text-md font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
								children: item.label
							}, item.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onMouseEnter: () => setFacultiesOpen(true),
								onMouseLeave: () => setFacultiesOpen(false),
								onFocus: () => setFacultiesOpen(true),
								onBlur: (event) => {
									if (!event.currentTarget.contains(event.relatedTarget)) setFacultiesOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									"aria-haspopup": "menu",
									"aria-expanded": facultiesOpen,
									className: `relative inline-flex items-center gap-1 py-2 text-md font-medium cursor-pointer transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${facultiesOpen ? "text-primary after:!w-full" : "text-foreground/80"}`,
									children: ["Faculties ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
								}), facultiesOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-0 top-full w-64 pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-brick animate-in fade-in slide-in-from-top-2 duration-200",
										children: FACULTIES_MENU.map((fMenu) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/faculties/$slug",
											params: { slug: fMenu.slug },
											onClick: () => setFacultiesOpen(false),
											className: "block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground font-medium",
											children: fMenu.label
										}, fMenu.slug))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onMouseEnter: () => setDepartmentsOpen(true),
								onMouseLeave: () => setDepartmentsOpen(false),
								onFocus: () => setDepartmentsOpen(true),
								onBlur: (event) => {
									if (!event.currentTarget.contains(event.relatedTarget)) setDepartmentsOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									"aria-haspopup": "menu",
									"aria-expanded": departmentsOpen,
									className: `relative inline-flex items-center gap-1 py-2 text-md font-medium cursor-pointer transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${departmentsOpen ? "text-primary after:!w-full" : "text-foreground/80"}`,
									children: ["Departments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
								}), departmentsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-0 top-full w-64 pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-xl border border-border bg-popover p-1 shadow-brick animate-in fade-in slide-in-from-top-2 duration-200",
										children: DEPARTMENTS_MENU.map((dMenu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: dMenu.to,
											onClick: () => setDepartmentsOpen(false),
											className: "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "inline-flex h-6 w-10 shrink-0 items-center justify-center rounded bg-primary/10 text-[9px] font-black uppercase tracking-wider text-primary",
												children: dMenu.short
											}), dMenu.label]
										}, dMenu.to))
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onMouseEnter: () => setLoginOpen(true),
								onMouseLeave: () => setLoginOpen(false),
								onFocus: () => setLoginOpen(true),
								onBlur: (event) => {
									if (!event.currentTarget.contains(event.relatedTarget)) setLoginOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									"aria-haspopup": "menu",
									"aria-expanded": loginOpen,
									className: `relative inline-flex items-center gap-1 py-2 text-sm font-medium cursor-pointer transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${loginOpen ? "text-primary after:!w-full" : "text-foreground/80"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" }),
										" Login ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
									]
								}), loginOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-0 top-full w-72 pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-xl border border-border bg-popover p-1.5 shadow-brick",
										children: LOGINS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: l.to,
											className: "flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-accent",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg brand-gradient text-primary-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-sm font-semibold leading-tight",
													children: [l.label, " Portal"]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: l.desc
												})]
											})]
										}, l.to))
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								onBlur: (event) => {
									if (!event.currentTarget.contains(event.relatedTarget)) setSearchOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSearchOpen((s) => !s),
									"aria-label": "Search",
									"aria-expanded": searchOpen,
									className: "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:text-primary",
									children: searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
								}), searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-0 top-full mt-2 w-64 lg:w-72",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-brick",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "search",
												placeholder: "Search programs, faculties...",
												className: "w-full rounded-md border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary",
												autoFocus: true
											})]
										})
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggle,
								"aria-label": "Toggle theme",
								className: "inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border bg-card text-foreground/80 transition-colors hover:border-primary hover:text-primary",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admission",
								className: "hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-brick transition-colors hover:bg-primary-deep md:inline-flex",
								children: "Apply Now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card lg:hidden",
								"aria-label": "Open menu",
								onClick: () => setMobile((m) => !m),
								children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							})
						]
					})
				]
			}),
			mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-background lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl space-y-1 px-4 py-3",
					children: [
						[...MAIN_NAV].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setMobile(false),
							className: "block rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
							children: "Faculties"
						}),
						FACULTIES_MENU.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/faculties/$slug",
							params: { slug: item.slug },
							onClick: () => setMobile(false),
							className: "block rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent",
							children: item.label
						}, item.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
							children: "Departments"
						}),
						DEPARTMENTS_MENU.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							onClick: () => setMobile(false),
							className: "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/85 hover:bg-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-5 w-9 shrink-0 items-center justify-center rounded bg-primary/10 text-[9px] font-black uppercase tracking-wider text-primary",
								children: item.short
							}), item.label]
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pt-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
							children: "Login"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2",
							children: LOGINS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: l.to,
								onClick: () => setMobile(false),
								className: "flex flex-col items-center gap-1 rounded-md border border-border bg-card px-2 py-3 text-xs font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-4 w-4 text-primary" }), l.label]
							}, l.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admission",
							onClick: () => setMobile(false),
							className: "mt-2 block rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground",
							children: "Apply Now"
						})
					]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-card text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "East West University, a leading private university in Bangladesh, building tomorrow's leaders since 1996."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex items-center gap-2",
						children: [
							{
								i: Facebook,
								h: SITE.socials.facebook,
								label: "Facebook"
							},
							{
								i: Instagram,
								h: SITE.socials.instagram,
								label: "Instagram"
							},
							{
								i: Youtube,
								h: SITE.socials.youtube,
								label: "YouTube"
							},
							{
								i: Twitter,
								h: SITE.socials.twitter,
								label: "Twitter"
							},
							{
								i: Linkedin,
								h: SITE.socials.linkedin,
								label: "LinkedIn"
							}
						].map(({ i: Icon, h, label }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							"aria-label": `East West University on ${label}`,
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, idx))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 text-sm font-bold uppercase tracking-wider text-primary",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm text-foreground/75",
					children: [
						["/about", "About EWU"],
						["/admission", "Admission"],
						["/research", "Research"],
						["/departments", "Departments"],
						["/contact", "Contact"]
					].map(([h, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: h,
						className: "transition-colors hover:text-primary",
						children: l
					}) }, h))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 text-sm font-bold uppercase tracking-wider text-primary",
					children: "Academic Calendar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Spring Semester · Jan – May" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Summer Semester · Jun – Aug" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fall Semester · Sep – Dec" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/academic-calendar",
							className: "font-medium text-primary hover:underline",
							children: "View full calendar →"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 text-sm font-bold uppercase tracking-wider text-primary",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), SITE.address]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), SITE.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), SITE.email]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "mt-2 flex gap-2 rounded-lg border border-primary/20 bg-primary-soft/40 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-foreground/85",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-semibold text-primary-deep",
										children: "24/7 Campus Helpline "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									SITE.emergency
								]
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-center px-6 py-5 text-xs text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" East West University. All rights reserved."
				] })
			})
		})]
	});
}
function FloatingFeedback() {
	const [open, setOpen] = import_react.useState(false);
	const [rating, setRating] = import_react.useState(0);
	function submit(e) {
		e.preventDefault();
		toast.success("Thanks! Your feedback was submitted.");
		setOpen(false);
		setRating(0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOpen(true),
		"aria-label": "Send feedback",
		className: "fixed bottom-6 left-6 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-gold-foreground shadow-brick transition-transform hover:scale-105",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquarePlus, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden sm:inline",
			children: "Feedback"
		})]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-brick",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg font-bold",
					children: "Share your feedback"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Close feedback form",
					onClick: () => setOpen(false),
					className: "rounded-md p-1 hover:bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						"aria-label": "Your name",
						placeholder: "Your name",
						className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "email",
						"aria-label": "Email",
						placeholder: "Email",
						className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						required: true,
						"aria-label": "Feedback category",
						className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select a category"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Admission" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Academic" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Facilities" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Website" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 3,
						"aria-label": "Your message",
						placeholder: "Your message",
						className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs font-medium text-muted-foreground",
						children: "Rating (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1",
						children: [
							1,
							2,
							3,
							4,
							5
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setRating(n),
							className: "rounded p-1",
							"aria-label": `${n} star`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-5 w-5 ${n <= rating ? "fill-gold text-gold" : "text-muted-foreground"}` })
						}, n))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Submit feedback"]
					})
				]
			})]
		})
	})] });
}
var SUGGESTED = [
	"How do I apply for admission?",
	"What scholarships are available?",
	"Show me the CSE department",
	"Campus emergency contacts"
];
var CANNED = {
	admission: "Spring 2027 admission is open through 15 January. Apply via the Admission page , you'll need your SSC/HSC transcripts and a recent photo.",
	scholarship: "EWU offers Merit, Need-based, Sports, and Quota waivers. See the Admission > Scholarships section for eligibility.",
	cse: "The CSE department offers BSc, MSc and PhD with 48 faculty. Visit /departments/cse for details.",
	emergency: "Emergency hotline: +880 1755 587224. Medical Centre operates 24/7 on campus."
};
function reply(text) {
	const k = text.toLowerCase();
	if (k.includes("admiss") || k.includes("apply")) return CANNED.admission;
	if (k.includes("scholar") || k.includes("waiver") || k.includes("financial")) return CANNED.scholarship;
	if (k.includes("cse") || k.includes("computer")) return CANNED.cse;
	if (k.includes("emergency") || k.includes("contact")) return CANNED.emergency;
	return "I can help with admission, scholarships, departments, faculty, facilities and contacts. What would you like to know?";
}
function FloatingChatbot() {
	const [open, setOpen] = import_react.useState(false);
	const [input, setInput] = import_react.useState("");
	const [msgs, setMsgs] = import_react.useState([{
		role: "bot",
		text: "Hi! I'm EWU Assist. Ask me anything about admission, programs or campus."
	}]);
	function send(t) {
		const q = t.trim();
		if (!q) return;
		setMsgs((m) => [
			...m,
			{
				role: "user",
				text: q
			},
			{
				role: "bot",
				text: reply(q)
			}
		]);
		setInput("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOpen(true),
		"aria-label": "Open EWU Assist",
		className: "fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-brick transition-transform hover:scale-105",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-gold-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" })
		})]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-6 z-50 flex h-[560px] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-brick",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-full bg-primary-foreground/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "EWU Assist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] opacity-80",
						children: "AI Admission & Campus Helper"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Close EWU Assist",
					onClick: () => setOpen(false),
					className: "rounded p-1 hover:bg-primary-foreground/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3 overflow-y-auto p-4",
				children: [msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`,
						children: m.text
					})
				}, i)), msgs.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 pt-2",
					children: SUGGESTED.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => send(s),
						className: "rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/75 hover:border-primary hover:text-primary",
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					send(input);
				},
				className: "flex items-center gap-2 border-t border-border p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: input,
					onChange: (e) => setInput(e.target.value),
					"aria-label": "Message for EWU Assist",
					placeholder: "Ask anything…",
					className: "flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					"aria-label": "Send message",
					className: "inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
				})]
			})
		]
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-8xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
					children: "Back to Home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "East West University , Excellence in Education" },
			{
				name: "description",
				content: "East West University (EWU) , a leading private university in Dhaka, Bangladesh. Explore programs, admission, research and campus life."
			},
			{
				name: "author",
				content: "East West University"
			},
			{
				property: "og:title",
				content: "East West University , Excellence in Education"
			},
			{
				property: "og:description",
				content: "EWU Digital Campus is a modern, responsive website for East West University, showcasing programs, faculty, and campus life."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "East West University , Excellence in Education"
			},
			{
				name: "twitter:description",
				content: "EWU Digital Campus is a modern, responsive website for East West University, showcasing programs, faculty, and campus life."
			},
			{
				name: "description",
				content: "EWU Digital Campus is a modern, responsive website for East West University, showcasing programs, faculty, and campus life."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00971586-5f42-4806-8411-41d6661b796e/id-preview-f22d9488--3ef3c03b-b6f5-448f-9cb5-9a8a5451dca7.lovable.app-1782145483250.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00971586-5f42-4806-8411-41d6661b796e/id-preview-f22d9488--3ef3c03b-b6f5-448f-9cb5-9a8a5451dca7.lovable.app-1782145483250.png"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col bg-background text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingFeedback, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingChatbot, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					richColors: true,
					position: "top-right"
				})
			]
		}) })
	});
}
var $$splitComponentImporter$13 = () => import("./research-C84_pYPG.mjs");
var Route$13 = createFileRoute("/research")({
	head: () => ({ meta: [
		{ title: "Research, East West University" },
		{
			name: "description",
			content: "Research themes, centres, impact, funding, student opportunities and faculty directory at EWU."
		},
		{
			property: "og:title",
			content: "Research at EWU"
		},
		{
			property: "og:description",
			content: "Research excellence with real-world impact, built for Bangladesh."
		},
		{
			property: "og:image",
			content: res_1_default
		},
		{
			name: "twitter:image",
			content: res_1_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./faculty-BHoINrCA.mjs");
var Route$12 = createFileRoute("/faculty")({
	head: () => ({ meta: [
		{ title: "Faculty Directory, East West University" },
		{
			name: "description",
			content: "Browse EWU's faculty across all departments, research interests, publications and contact information."
		},
		{
			property: "og:title",
			content: "Faculty Directory, EWU"
		},
		{
			property: "og:description",
			content: "Search EWU faculty across all departments."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./facilities-BQs66IvP.mjs");
var Route$11 = createFileRoute("/facilities")({
	head: () => ({ meta: [
		{ title: "Facilities, East West University" },
		{
			name: "description",
			content: "Academic spaces, labs, library, housing, athletics, wellness, virtual tour and campus map at EWU Dhaka."
		},
		{
			property: "og:title",
			content: "Facilities at EWU"
		},
		{
			property: "og:description",
			content: "A campus built for learning, living and building."
		},
		{
			property: "og:image",
			content: fac_library_default
		},
		{
			name: "twitter:image",
			content: fac_library_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./departments-BMaq6zDj.mjs");
var Route$10 = createFileRoute("/departments")({
	head: () => ({ meta: [
		{ title: "Departments , East West University" },
		{
			name: "description",
			content: "Explore EWU's faculties and departments across Engineering, Business, Pharmacy, Law and Liberal Arts."
		},
		{
			property: "og:title",
			content: "Departments at EWU"
		},
		{
			property: "og:description",
			content: "Faculties and departments across EWU."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-BkXrSsca.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact , East West University" },
		{
			name: "description",
			content: "Visit EWU in Aftabnagar, Dhaka , address, phone, email and inquiry form."
		},
		{
			property: "og:title",
			content: "Contact East West University"
		},
		{
			property: "og:description",
			content: "Get in touch , address, phone, email and inquiry form."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./computer-science-engineering-3SpnDtjC.mjs");
var Route$8 = createFileRoute("/computer-science-engineering")({
	head: () => ({ meta: [{ title: "Department of Computer Science & Engineering | EWU" }, {
		name: "description",
		content: "The CSE Department at EWU offers cutting-edge programs in AI, software engineering, and data science."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./clubs-CGU1q4QC.mjs");
var Route$7 = createFileRoute("/clubs")({
	head: () => ({ meta: [
		{ title: "Student Clubs, East West University" },
		{
			name: "description",
			content: "40+ student clubs and societies at EWU, academic, cultural, sports and service."
		},
		{
			property: "og:title",
			content: "Student Clubs at EWU"
		},
		{
			property: "og:description",
			content: "Find your community: academic, cultural, sports and service clubs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./admission-CtUnX_5Y.mjs");
var Route$6 = createFileRoute("/admission")({
	head: () => ({ meta: [
		{ title: "Admission, East West University" },
		{
			name: "description",
			content: "Apply to EWU. Undergraduate, graduate, international and transfer pathways with requirements, tuition, scholarships and key dates."
		},
		{
			property: "og:title",
			content: "Admission, EWU"
		},
		{
			property: "og:description",
			content: "Undergraduate, graduate, international and transfer pathways. Requirements, fees, scholarships and deadlines."
		},
		{
			property: "og:image",
			content: hero_fallback_default
		},
		{
			name: "twitter:image",
			content: hero_fallback_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./academic-calendar-Mj4ej8UR.mjs");
var Route$5 = createFileRoute("/academic-calendar")({
	head: () => ({ meta: [
		{ title: "Academic Calendar , East West University" },
		{
			name: "description",
			content: "Semester dates, examinations, holidays, convocation and academic deadlines at EWU."
		},
		{
			property: "og:title",
			content: "Academic Calendar , EWU"
		},
		{
			property: "og:description",
			content: "Important dates for the academic year."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-BK9clrJC.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About East West University" },
			{
				name: "description",
				content: "History, mission, leadership, academics and campus life of East West University, Dhaka."
			},
			{
				property: "og:title",
				content: "About East West University"
			},
			{
				property: "og:description",
				content: "Discover EWU's story, leadership, academics and campus life."
			},
			{
				property: "og:image",
				content: about_campus_aerial_default
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./routes-OL48oHHM.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "East West University, Excellence in Education" },
		{
			name: "description",
			content: "EWU is a leading private university in Dhaka offering 30+ programs across Engineering, Business, Pharmacy, Law and Liberal Arts."
		},
		{
			property: "og:title",
			content: "East West University"
		},
		{
			property: "og:description",
			content: "Excellence in Education. Programs, admission, research and campus life in Dhaka, Bangladesh."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./login.student-BK-8hXdH.mjs");
var Route$2 = createFileRoute("/login/student")({
	head: () => ({ meta: [{ title: "Student Login , EWU" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./login.nts-Ch72czrR.mjs");
var Route$1 = createFileRoute("/login/nts")({
	head: () => ({ meta: [{ title: "NTS Login , EWU" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./login.faculty-C-PyepEn.mjs");
var Route = createFileRoute("/login/faculty")({
	head: () => ({ meta: [{ title: "Faculty Login , EWU" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ResearchRoute = Route$13.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$14
});
var FacultyRoute = Route$12.update({
	id: "/faculty",
	path: "/faculty",
	getParentRoute: () => Route$14
});
var FacilitiesRoute = Route$11.update({
	id: "/facilities",
	path: "/facilities",
	getParentRoute: () => Route$14
});
var DepartmentsRoute = Route$10.update({
	id: "/departments",
	path: "/departments",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var ComputerScienceEngineeringRoute = Route$8.update({
	id: "/computer-science-engineering",
	path: "/computer-science-engineering",
	getParentRoute: () => Route$14
});
var ClubsRoute = Route$7.update({
	id: "/clubs",
	path: "/clubs",
	getParentRoute: () => Route$14
});
var AdmissionRoute = Route$6.update({
	id: "/admission",
	path: "/admission",
	getParentRoute: () => Route$14
});
var AcademicCalendarRoute = Route$5.update({
	id: "/academic-calendar",
	path: "/academic-calendar",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$14
});
var LoginStudentRoute = Route$2.update({
	id: "/login/student",
	path: "/login/student",
	getParentRoute: () => Route$14
});
var LoginNtsRoute = Route$1.update({
	id: "/login/nts",
	path: "/login/nts",
	getParentRoute: () => Route$14
});
var LoginFacultyRoute = Route.update({
	id: "/login/faculty",
	path: "/login/faculty",
	getParentRoute: () => Route$14
});
var FacultyIdRoute = Route$17.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => FacultyRoute
});
var FacultiesSlugRoute = Route$16.update({
	id: "/faculties/$slug",
	path: "/faculties/$slug",
	getParentRoute: () => Route$14
});
var DepartmentsRouteChildren = { DepartmentsSlugRoute: Route$15.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => DepartmentsRoute
}) };
var DepartmentsRouteWithChildren = DepartmentsRoute._addFileChildren(DepartmentsRouteChildren);
var FacultyRouteChildren = { FacultyIdRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AcademicCalendarRoute,
	AdmissionRoute,
	ClubsRoute,
	ComputerScienceEngineeringRoute,
	ContactRoute,
	DepartmentsRoute: DepartmentsRouteWithChildren,
	FacilitiesRoute,
	FacultyRoute: FacultyRoute._addFileChildren(FacultyRouteChildren),
	ResearchRoute,
	FacultiesSlugRoute,
	LoginFacultyRoute,
	LoginNtsRoute,
	LoginStudentRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
