import { i as __toESM } from "../_runtime.mjs";
import { a as english_default, i as eee_default, n as civil_default, r as cse_default, t as bba_default } from "./english-DvCkNdU_.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Pin, F as Megaphone, X as GraduationCap, _t as Calendar, b as Quote, bt as Building2, jt as ArrowRight, mt as ChevronLeft, pt as ChevronRight, s as Users, vt as CalendarDays, wt as BookOpen } from "../_libs/lucide-react.mjs";
import { a as DEPARTMENTS } from "./site-data-DkD11PRE.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Route } from "./faculties._slug-DoNdSmoP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faculties._slug-D1RM-sCO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAG_STYLES = {
	Exam: "bg-red-50    text-red-800    border border-red-200",
	Research: "bg-green-50  text-green-800  border border-green-200",
	Academic: "bg-blue-50   text-blue-800   border border-blue-200",
	Event: "bg-purple-50 text-purple-800 border border-purple-200",
	Notice: "bg-gray-50   text-gray-700   border border-gray-200",
	Seminar: "bg-pink-50   text-pink-800   border border-pink-200",
	Workshop: "bg-amber-50  text-amber-800  border border-amber-200"
};
var RECENT_NEWS = [
	{
		date: "10 Jun 2025",
		title: "Huawei and BRACNet Host 'Campus NextGen' to Advance Smart Education in Bangladesh",
		excerpt: "In a significant stride toward digital transformation in the education sector, BRACNet...",
		image: cse_default
	},
	{
		date: "05 May 2025",
		title: "DNA Day Celebration at GEB EWU",
		excerpt: "Biotech Club, East West University proudly organized a day-long event titled 'Honouri...",
		image: eee_default
	},
	{
		date: "03 Mar 2025",
		title: "Department of CSE Successfully Organized a Seminar on 'Revolutionizing the Telecom Industry'",
		excerpt: "The Department of Computer Science and Engineering at East West University recently h...",
		image: civil_default
	},
	{
		date: "09 Dec 2024",
		title: "Department of Pharmacy Celebrates 'Pharma Carnival 2024': A Grand Celebration",
		excerpt: "The Department of Pharmacy of East West University has organized a two day long 'Phar...",
		image: bba_default
	},
	{
		date: "15 Oct 2024",
		title: "English Department hosts International Literature Conference",
		excerpt: "Scholars from around the world gathered to discuss contemporary South Asian literature...",
		image: english_default
	}
];
function NewsSlider({ news, prevRef, nextRef }) {
	const [ready, setReady] = import_react.useState(false);
	const [SwiperComp, setSwiperComp] = import_react.useState(null);
	const [SwiperSlideComp, setSwiperSlideComp] = import_react.useState(null);
	const [mods, setMods] = import_react.useState(null);
	import_react.useEffect(() => {
		Promise.all([
			import("../_libs/swiper.mjs").then((n) => n.t),
			import("../_libs/swiper.mjs").then((n) => n.n),
			Promise.resolve({}),
			Promise.resolve({})
		]).then(([{ Swiper: S, SwiperSlide: SS }, { Navigation, Autoplay }]) => {
			setSwiperComp(() => S);
			setSwiperSlideComp(() => SS);
			setMods([Navigation, Autoplay]);
			setReady(true);
		});
	}, []);
	if (!ready || !SwiperComp || !SwiperSlideComp || !mods) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8",
		children: news.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[420px] rounded-3xl bg-muted/40 animate-pulse" }, i))
	});
	const [Navigation, Autoplay] = mods;
	const Swiper = SwiperComp;
	const SwiperSlide = SwiperSlideComp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
		modules: [Navigation, Autoplay],
		spaceBetween: 24,
		slidesPerView: 1,
		breakpoints: {
			640: { slidesPerView: 2 },
			1024: { slidesPerView: 3 },
			1280: { slidesPerView: 4 }
		},
		loop: true,
		autoplay: {
			delay: 4e3,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		navigation: {
			prevEl: prevRef.current,
			nextEl: nextRef.current
		},
		onBeforeInit: (swiper) => {
			swiper.params.navigation.prevEl = prevRef.current;
			swiper.params.navigation.nextEl = nextRef.current;
		},
		className: "!pb-10",
		children: news.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, {
			className: "!h-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col h-[420px] relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 border border-border/40 cursor-grab active:cursor-grabbing",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: item.title,
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 pointer-events-none",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-5 left-5 pointer-events-none z-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur-md px-3.5 py-1.5 text-[10px] uppercase tracking-wider font-bold text-primary-foreground border border-primary/20 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3 w-3" }), item.date]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-auto p-7 z-10 flex flex-col items-start transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg md:text-xl font-bold text-white mb-3 leading-snug line-clamp-2",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/70 line-clamp-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-2 group-hover:translate-y-0",
								children: item.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-white transition-colors cursor-pointer group/btn mb-8",
								children: ["Read Full Story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" })]
							})
						]
					})
				]
			})
		}, idx))
	});
}
function FacultyDivisionPage() {
	const { data } = Route.useLoaderData();
	const depts = DEPARTMENTS.filter((d) => d.faculty === data.name);
	import_react.useEffect(() => {
		if (data.slug !== "science-engineering") return;
		document.documentElement.classList.add("brick-light-theme");
		return () => document.documentElement.classList.remove("brick-light-theme");
	}, [data.slug]);
	const [chairIndex, setChairIndex] = import_react.useState(0);
	const [chairHovered, setChairHovered] = import_react.useState(false);
	const [chairVisibleCount, setChairVisibleCount] = import_react.useState(4);
	const [alumniIndex, setAlumniIndex] = import_react.useState(0);
	const [alumniHovered, setAlumniHovered] = import_react.useState(false);
	const [alumniVisibleCount, setAlumniVisibleCount] = import_react.useState(2);
	const STUDY_LEVELS = [
		"Undergraduate",
		"Graduate",
		"Postgraduate"
	];
	const [studyLevelTab, setStudyLevelTab] = import_react.useState("Undergraduate");
	import_react.useEffect(() => {
		let timeoutId;
		const handleResize = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				if (typeof window === "undefined") return;
				if (window.innerWidth < 640) setChairVisibleCount(1);
				else if (window.innerWidth < 1024) setChairVisibleCount(2);
				else setChairVisibleCount(4);
				if (window.innerWidth < 768) setAlumniVisibleCount(1);
				else setAlumniVisibleCount(2);
			}, 150);
		};
		if (typeof window !== "undefined") {
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
	const nextChair = import_react.useCallback(() => {
		setChairIndex((prev) => (prev + 1) % totalChairpersons);
	}, [totalChairpersons]);
	const prevChair = import_react.useCallback(() => {
		setChairIndex((prev) => (prev - 1 + totalChairpersons) % totalChairpersons);
	}, [totalChairpersons]);
	import_react.useEffect(() => {
		if (chairHovered || totalChairpersons <= 1) return;
		const interval = setInterval(() => {
			nextChair();
		}, 5e3);
		return () => clearInterval(interval);
	}, [
		chairHovered,
		nextChair,
		totalChairpersons
	]);
	const nextAlumni = import_react.useCallback(() => {
		setAlumniIndex((prev) => (prev + 1) % totalAlumni);
	}, [totalAlumni]);
	import_react.useCallback(() => {
		setAlumniIndex((prev) => (prev - 1 + totalAlumni) % totalAlumni);
	}, [totalAlumni]);
	import_react.useEffect(() => {
		if (alumniHovered || totalAlumni <= 1) return;
		const interval = setInterval(() => {
			nextAlumni();
		}, 6e3);
		return () => clearInterval(interval);
	}, [
		alumniHovered,
		nextAlumni,
		totalAlumni
	]);
	const newsPrevRef = import_react.useRef(null);
	const newsNextRef = import_react.useRef(null);
	const chairToRender = [];
	if (totalChairpersons > 0) while (chairToRender.length < totalChairpersons + chairVisibleCount) chairToRender.push(...data.chairpersons);
	const alumniToRender = [];
	if (totalAlumni > 0) while (alumniToRender.length < totalAlumni + alumniVisibleCount) alumniToRender.push(...data.alumni);
	const [activeTab, setActiveTab] = (0, import_react.useState)("notices");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-[80vh] min-h-[500px] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: data.heroImage,
						alt: data.name,
						className: "absolute inset-0 h-full w-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-out hover:scale-100"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex items-center gap-2 text-xs font-semibold text-white/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "hover:text-white transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white",
										children: "Faculties"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold/90",
										children: data.name
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl mb-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm mb-4",
										children: "EWU ACADEMIC DIVISION"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-serif text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl tracking-wide drop-shadow-md",
										children: data.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-light",
										children: data.summary
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 border-t border-white/20 pt-6 rounded-xl bg-black/50 backdrop-blur-md p-5",
								children: [
									{
										icon: Building2,
										value: depts.length,
										label: "Departments"
									},
									{
										icon: Users,
										value: depts.reduce((acc, d) => acc + d.students, 0).toLocaleString(),
										label: "Enrolled Students"
									},
									{
										icon: GraduationCap,
										value: depts.reduce((acc, d) => acc + d.faculty_count, 0),
										label: "Scholarly Faculty"
									},
									{
										icon: BookOpen,
										value: depts.reduce((acc, d) => acc + d.programs, 0),
										label: "Degree Programs"
									}
								].map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gold/15 border border-gold/25 backdrop-blur-md",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-gold" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-lg md:text-2xl font-extrabold text-white leading-none",
										children: s.value
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-wider text-white/60 mt-1 font-medium",
										children: s.label
									})] })]
								}, idx))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-muted/30 border-y border-border py-16 lg:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-md font-bold uppercase tracking-[0.2em] text-primary mb-1",
							children: "Office of the Dean"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-3xl border border-border bg-card shadow-brick",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid md:grid-cols-[220px_1fr] lg:grid-cols-[380px_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-h-[300px] md:min-h-0 overflow-hidden border-b md:border-b-0 md:border-r border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: data.dean.image,
									alt: data.dean.name,
									className: "absolute inset-0 h-full w-full object-cover object-[20%_80%] transition-transform duration-[1000ms] ease-out hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white font-serif text-sm font-bold leading-tight",
										children: data.dean.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white/70 text-[10px] font-medium mt-0.5",
										children: data.dean.designation
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col p-6 md:p-8 lg:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4 mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-1",
											children: "Dean's Message"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-serif text-2xl lg:text-3xl font-bold tracking-tight leading-snug",
											children: data.dean.name
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-3 w-3" }), " Faculty Dean"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-5 pb-5 border-b border-border",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0",
													children: "Email"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `mailto:${data.dean.email}`,
													className: "text-primary hover:underline font-medium truncate",
													children: data.dean.email
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0",
													children: "Title"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-primary",
													children: data.dean.designation
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-2 text-sm sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground w-14 shrink-0 mt-0.5",
													children: "Faculty"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground/85",
													children: data.name
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-start gap-2 text-sm mb-1 pb-5 border-b border-border",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase tracking-wider text-primary mb-0.5",
											children: "Professor"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-foreground",
											children: data.dean.dept
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1",
										children: data.dean.message
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[11px] text-muted-foreground/70 font-light italic",
										children: data.dean.info
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-3.5 w-3.5" }), "View Full Message"]
										})
									})
								]
							})]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative bg-muted/30 border-y border-border py-12 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-20 pointer-events-none",
					style: {
						backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
						backgroundSize: "24px 24px"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-5xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2",
								children: "Faculty Updates"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl md:text-4xl font-bold tracking-tight",
								children: "News & Notice Board"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-1 w-16 bg-gold rounded-full" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group cursor-pointer hover:-translate-y-1 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-10 w-10 md:h-12 md:w-12 text-red-600 fill-red-600 rotate-12 drop-shadow-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 left-2 h-3 w-3 bg-white/40 rounded-full blur-[1px]" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-4 -left-4 md:-top-6 md:-left-6 z-20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative group cursor-pointer hover:-translate-y-1 transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-10 w-10 md:h-12 md:w-12 text-red-600 fill-red-600 -rotate-12 drop-shadow-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 left-2 h-3 w-3 bg-white/40 rounded-full blur-[1px]" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center -mb-px relative z-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveTab("notices"),
										className: cn("flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-t-2xl border border-b-0 cursor-pointer", activeTab === "notices" ? "bg-card text-primary border-border shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)]" : "bg-muted/80 text-muted-foreground border-transparent hover:bg-muted"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4.5 w-4.5" }),
											"Notices",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("text-[10px] px-2 py-0.5 rounded-full ml-1", activeTab === "notices" ? "bg-primary/10 text-primary" : "bg-border text-muted-foreground"),
												children: data.notices.length
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setActiveTab("events"),
										className: cn("flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-t-2xl border border-b-0 cursor-pointer", activeTab === "events" ? "bg-card text-primary border-border shadow-[0_-4px_15px_-3px_rgba(0,0,0,0.1)]" : "bg-muted/80 text-muted-foreground border-transparent hover:bg-muted"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4.5 w-4.5" }),
											"Events",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("text-[10px] px-2 py-0.5 rounded-full ml-1", activeTab === "events" ? "bg-primary/10 text-primary" : "bg-border text-muted-foreground"),
												children: data.events.length
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rounded-3xl rounded-t-none md:rounded-tl-3xl border border-border bg-card shadow-2xl overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col p-4 md:p-8 relative z-10",
									children: (activeTab === "notices" ? data.notices : data.events).map((n, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-2 transition-all duration-300 hover:bg-muted/40 rounded-2xl border border-transparent hover:border-border cursor-pointer mb-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "shrink-0 flex flex-col items-center justify-center h-[72px] w-[72px] rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold uppercase text-primary group-hover:text-primary-foreground/90 leading-none mb-1.5",
													children: new Date(n.date).toLocaleDateString("en-US", { month: "short" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xl font-black leading-none",
													children: new Date(n.date).getDate()
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2 mb-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: cn("inline-block rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm", TAG_STYLES[n.tag] ?? "bg-muted text-muted-foreground border border-border"),
														children: n.tag
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1.5 text-xs font-medium text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), new Date(n.date).getFullYear()]
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-serif text-md md:text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors",
													children: n.title
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hidden md:flex shrink-0 items-center justify-center h-12 w-12 rounded-full bg-background border border-border text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 transform group-hover:translate-x-1 transition-transform" })
											})
										]
									}, idx))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex justify-center p-6 border-t border-border/60 bg-muted/20 relative z-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-red-700 transition-colors cursor-pointer bg-background border border-border px-8 py-3 rounded-full hover:shadow-md hover:-translate-y-0.5",
										children: [
											"View all ",
											activeTab,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									})
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-20 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto mb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2",
							children: "Academic Structure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl md:text-4xl font-bold tracking-tight",
							children: "Our Departments"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2.5 h-1 w-20 bg-gold rounded-full mx-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground leading-relaxed",
							children: "Discover detailed insights about each academic department including majors, laboratories, specialized curriculums, and research labs."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: depts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/departments/$slug",
						params: { slug: d.slug },
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-brick flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-28 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-gold/10 group-hover:from-primary/20 group-hover:to-gold/15 transition-all duration-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -right-3 -bottom-4 font-serif text-7xl font-black tracking-tighter text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none leading-none",
									children: d.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-lg bg-primary/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary-foreground shadow-sm",
										children: d.short
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-0 left-0 h-1 w-full bg-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-0 group-hover:w-full bg-gradient-to-r from-primary to-gold transition-all duration-700 ease-out" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-base font-bold group-hover:text-primary transition-colors leading-snug mb-2",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1",
									children: d.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 pt-4 border-t border-border/60 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-extrabold text-foreground leading-none",
											children: d.students.toLocaleString()
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5",
											children: "Students"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-l border-border/60 pl-5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-extrabold text-foreground leading-none",
												children: d.faculty_count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5",
												children: "Faculty"
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})]
								})
							]
						})]
					}, d.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-card border-y border-border py-20 lg:py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2",
								children: "Leadership"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground",
								children: "Department Chairpersons"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-1 w-20 bg-gold rounded-full" })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 mt-4 md:mt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: prevChair,
								"aria-label": "Previous Chairperson",
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-accent hover:text-primary cursor-pointer active:scale-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: nextChair,
								"aria-label": "Next Chairperson",
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-accent hover:text-primary cursor-pointer active:scale-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto",
						onMouseEnter: () => setChairHovered(true),
						onMouseLeave: () => setChairHovered(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden px-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex transition-transform duration-500 ease-out",
								style: { transform: `translateX(-${chairIndex * (100 / chairVisibleCount)}%)` },
								children: chairToRender.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "shrink-0 px-3 pb-4",
									style: { width: `${100 / chairVisibleCount}%` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col h-full rounded-2xl border border-border bg-background overflow-hidden shadow-sm hover:border-primary hover:shadow-brick transition-all duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[4/4] overflow-hidden bg-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: c.image,
													alt: c.name,
													className: "h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute left-3 top-3 rounded-full bg-primary/95 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground border border-white/10 backdrop-blur-xs",
													children: c.deptName
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute bottom-3 left-3 right-3 text-white",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "font-serif text-base font-bold leading-tight truncate",
														children: c.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-white/80 mt-0.5 truncate font-medium",
														children: c.designation
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 flex-1 flex flex-col justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground leading-relaxed line-clamp-3 font-light mb-4",
												children: c.bio
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3 pt-3 border-t border-border/60",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[9px] font-bold text-primary uppercase tracking-wider mb-1",
														children: "Education"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-foreground/90 font-semibold truncate",
														children: c.education[0]
													}),
													c.education[1] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[9px] text-muted-foreground truncate",
														children: c.education[1]
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[9px] font-bold text-primary uppercase tracking-wider mb-1",
													children: "Research"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex flex-wrap gap-1",
													children: c.interests.slice(0, 2).map((interest, iIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-muted border border-border/50 px-2 py-0.5 text-[9px] font-medium text-foreground/80",
														children: interest
													}, iIdx))
												})] })]
											})]
										})]
									})
								}, idx))
							})
						}), totalChairpersons > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex justify-center gap-2",
							children: data.chairpersons.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setChairIndex(idx),
								"aria-label": `Go to slide ${idx + 1}`,
								className: `h-2.5 rounded-full transition-all duration-350 cursor-pointer ${idx === chairIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/45"}`
							}, idx))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-20 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2",
								children: "Academic Programs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl md:text-4xl font-bold tracking-tight",
								children: "Choose Your Level of Study"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-1 w-20 bg-gold rounded-full" })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 p-1.5 rounded-2xl bg-muted border border-border shadow-sm",
							children: STUDY_LEVELS.map((level) => {
								const counts = data.programs.filter((p) => p.level === level).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setStudyLevelTab(level),
									className: `relative flex flex-col items-center px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${studyLevelTab === level ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: level }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `text-[10px] font-bold mt-0.5 ${studyLevelTab === level ? "text-primary-foreground/70" : "text-muted-foreground/60"}`,
										children: [
											counts,
											" Program",
											counts !== 1 ? "s" : ""
										]
									})]
								}, level);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: data.programs.filter((p) => p.level === studyLevelTab).map((p, idx) => {
							const Icon = p.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-brick cursor-pointer",
								style: { animationDelay: `${idx * 60}ms` },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-primary-soft border border-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-serif text-sm font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2",
												children: p.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 mt-2 flex-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 rounded-full bg-muted border border-border/60 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-2.5 w-2.5" }), p.dept]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1 rounded-full bg-gold/10 border border-gold/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-yellow-700 dark:text-yellow-400",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-2.5 w-2.5" }), p.duration]
												})]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-4 right-4 flex items-center gap-1 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
									})
								]
							}, idx);
						})
					}),
					data.programs.filter((p) => p.level === studyLevelTab).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center py-16 text-center text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-10 w-10 mb-3 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "No programs listed for this level yet."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden border-y border-border py-24 bg-primary text-primary-foreground text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 z-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cse_default,
						alt: "Subscribe Background",
						className: "h-full w-full object-cover object-center opacity-80",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95 mix-blend-multiply" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-2xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl md:text-4xl font-bold mb-8",
						children: "Don't Miss Awesome Story From Our Alumni"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mx-auto flex flex-col items-center gap-4 max-w-sm",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "Your E-mail Address",
							className: "w-full bg-transparent border-b border-primary-foreground/40 pb-2 text-center text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-gold transition-colors",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-4 bg-white/70 hover:bg-white/90 text-primary font-bold px-8 py-3 text-xs tracking-widest uppercase transition-colors cursor-pointer",
							children: "SUBSCRIBE"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 lg:pt-24 lg:pb-0 bg-muted/20 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2",
								children: "Latest Insights"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl md:text-4xl font-bold tracking-tight",
								children: "Recent News & Updates"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-1 w-20 bg-gold rounded-full" })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								ref: newsPrevRef,
								"aria-label": "Previous News",
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								ref: newsNextRef,
								"aria-label": "Next News",
								className: "flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-4 px-4 pb-8 lg:pb-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsSlider, {
							news: RECENT_NEWS,
							prevRef: newsPrevRef,
							nextRef: newsNextRef
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { FacultyDivisionPage as component };
