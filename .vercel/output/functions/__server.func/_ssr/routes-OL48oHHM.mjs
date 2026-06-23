import { i as __toESM } from "../_runtime.mjs";
import { a as img, t as GALLERY_KEYS } from "./images-B3FFIUwW.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileChartColumnIncreasing, A as Microscope, At as ArrowUpRight, Et as Bell, F as Megaphone, O as Monitor, S as Play, X as GraduationCap, Y as Handshake, Z as FlaskConical, _t as Calendar, b as Quote, bt as Building2, c as User, g as Send, h as Sparkles, j as MicVocal, jt as ArrowRight, kt as Award, o as Utensils, q as HeartPulse, s as Users, u as Trophy, ut as CircleQuestionMark, wt as BookOpen, xt as Briefcase, yt as Bus } from "../_libs/lucide-react.mjs";
import { a as DEPARTMENTS, c as FACULTY, d as SCHOLARSHIPS, i as CLUBS, l as FAQS, n as ALUMNI, o as DEPT_IMG_KEYS, r as CALENDAR, s as FACILITIES, t as ACHIEVEMENTS, u as NEWS_TICKER } from "./site-data-DkD11PRE.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-OL48oHHM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function NewsTicker() {
	const items = [...NEWS_TICKER, ...NEWS_TICKER];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-stretch overflow-hidden border-y border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-4 w-4" }), " Latest"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex-1 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ticker-track flex w-max items-center gap-10 whitespace-nowrap py-2 pl-6 text-sm",
				children: items.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded bg-primary-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-deep",
							children: n.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/85",
							children: n.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border",
							children: "•"
						})
					]
				}, i))
			})
		})]
	});
}
var ITEMS = [
	{
		to: "/login/student",
		label: "Student Portal",
		icon: GraduationCap,
		external: false
	},
	{
		to: "/login/faculty",
		label: "Faculty Portal",
		icon: User,
		external: false
	},
	{
		to: "/login/nts",
		label: "NTS Portal",
		icon: Briefcase,
		external: false
	},
	{
		to: "/academic-calendar",
		label: "Notice",
		icon: Bell,
		external: false
	},
	{
		to: "/faculty",
		label: "Results",
		icon: FileChartColumnIncreasing,
		external: false
	},
	{
		to: "/admission",
		label: "Apply",
		icon: Send,
		external: false,
		highlight: true
	}
];
function PortalsBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 -mt-8 px-4 md:-mt-10 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl overflow-hidden rounded-2xl border border-primary/15 bg-primary-deep shadow-brick",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-3 divide-x divide-primary-foreground/10 md:grid-cols-6",
				children: ITEMS.map((it) => {
					const Icon = it.icon;
					const cls = "group flex flex-col items-center justify-center gap-2 px-3 py-5 text-primary-foreground transition-colors hover:bg-primary-foreground/10 " + (it.highlight ? "bg-gold/15 hover:bg-gold/25" : "");
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 transition-transform group-hover:-translate-y-0.5 " + (it.highlight ? "text-gold" : "text-primary-foreground/90") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold uppercase tracking-wider md:text-xs",
						children: it.label
					})] });
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: it.to,
						className: cls,
						children: inner
					}) }, it.label);
				})
			})
		})
	});
}
var PARTNERS = [
	"BAETE",
	"Washington Accord",
	"ACBSP",
	"ICAB",
	"ICMAB",
	"ACCA",
	"BICM",
	"ICSB",
	"Banglalink",
	"Macquarie University"
];
function PartnersFloating() {
	const loop = [...PARTNERS, ...PARTNERS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-y border-border bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "h-3.5 w-3.5" }), " Partnerships & Affiliates"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-bold leading-tight md:text-4xl text-balance",
							children: "Globally accredited. Locally connected."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
							children: "EWU is recognised by leading professional bodies and partners with universities, regulators and industry across four continents."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group relative",
					style: {
						maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
						WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-max gap-6 animate-[partners-marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]",
						children: loop.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-28 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-background px-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-brick",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center text-sm font-bold uppercase tracking-wide text-primary",
								children: p
							})
						}, `${p}-${i}`))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` })
		]
	});
}
var SLIDES = [
	{
		url: img("hero-2"),
		alt: "EWU campus courtyard",
		label: "Welcome to EWU",
		heading: "Shaping Bangladesh's brightest minds for the world.",
		sub: "A place where innovation meets tradition, and every student finds their purpose."
	},
	{
		url: img("hero-3"),
		alt: "EWU campus aerial view",
		label: "Our Campus",
		heading: "A world-class campus built for tomorrow's leaders.",
		sub: "State-of-the-art facilities spread across a vibrant, green academic landscape."
	},
	{
		url: img("hero-4"),
		alt: "Campus cultural festival",
		label: "Student Life",
		heading: "Where culture, creativity, and community come alive.",
		sub: "Festivals, clubs, and events that make university life truly unforgettable."
	},
	{
		url: img("hero-6"),
		alt: "EWU academic achievement ceremony",
		label: "Excellence",
		heading: "Recognized for academic achievement at every level.",
		sub: "Our students and faculty consistently set new benchmarks of excellence."
	},
	{
		url: img("hero-5"),
		alt: "EWU graduation ceremony",
		label: "Graduation",
		heading: "Every cap tossed is a dream realized.",
		sub: "Thousands of graduates shaping the nation's future across every sector."
	},
	{
		url: img("hero-7"),
		alt: "EWU library and learning commons",
		label: "Knowledge",
		heading: "Endless knowledge at the heart of our campus.",
		sub: "Our library and learning commons — open, resourceful, and always inspiring."
	}
];
function HeroSlider({ onSlideChange }) {
	const [current, setCurrent] = import_react.useState(0);
	const [paused, setPaused] = import_react.useState(false);
	const directionRef = import_react.useRef("right");
	const goTo = import_react.useCallback((next) => {
		const dir = next > current ? "right" : "left";
		directionRef.current = dir;
		setCurrent(next);
		onSlideChange?.(next, dir);
	}, [current, onSlideChange]);
	import_react.useEffect(() => {
		if (paused) return;
		const t = setInterval(() => {
			const next = (current + 1) % SLIDES.length;
			directionRef.current = "right";
			setCurrent(next);
			onSlideChange?.(next, "right");
		}, 5e3);
		return () => clearInterval(t);
	}, [
		paused,
		current,
		onSlideChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 h-full w-full",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [SLIDES.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: s.url,
			alt: s.alt,
			loading: idx === 0 ? "eager" : "lazy",
			className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100" : "opacity-0"}`
		}, s.url)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2",
			children: SLIDES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": `Slide ${idx + 1}`,
				onClick: () => goTo(idx),
				className: `h-1.5 rounded-full transition-all ${idx === current ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"}`
			}, idx))
		})]
	});
}
function Hero() {
	const [slideIndex, setSlideIndex] = import_react.useState(0);
	const textRef = import_react.useRef(null);
	const directionRef = import_react.useRef("right");
	import_react.useEffect(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".hero-text-item", {
				x: 120,
				opacity: 0,
				duration: 1.2,
				stagger: .15,
				ease: "power3.out"
			});
		}, textRef);
		return () => ctx.revert();
	}, []);
	const handleSlideChange = import_react.useCallback((index, direction) => {
		directionRef.current = direction;
		const node = textRef.current;
		if (!node) return;
		const exitX = direction === "right" ? -80 : 80;
		const enterX = direction === "right" ? 80 : -80;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(".hero-text-item", {
				x: exitX,
				opacity: 0,
				duration: .35,
				stagger: .05,
				ease: "power2.in",
				onComplete: () => {
					setSlideIndex(index);
					gsapWithCSS.fromTo(".hero-text-item", {
						x: enterX,
						opacity: 0
					}, {
						x: 0,
						opacity: 1,
						duration: .6,
						stagger: .1,
						ease: "power3.out"
					});
				}
			});
		}, node);
		return () => ctx.revert();
	}, []);
	const slide = SLIDES[slideIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-primary-deep text-primary-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, { onSlideChange: handleSlideChange }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: textRef,
				className: "relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-24 md:py-32 lg:py-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-text-item inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-gold" }), slide.label]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "hero-text-item max-w-4xl text-4xl font-bold leading-[1.05] text-balance md:text-6xl lg:text-7xl",
						children: slide.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-text-item max-w-2xl text-base text-primary-foreground/80 md:text-lg",
						children: slide.sub
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-text-item flex flex-wrap items-center gap-3 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admission",
							className: "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]",
							children: ["Apply for Admission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/departments",
							className: "inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20",
							children: "Explore Programs"
						})]
					})
				]
			})
		]
	});
}
/**
* YouTube embed that auto-plays when scrolled into view and pauses on scroll-out.
* If the user manually pauses (via the YT player), it will NOT auto-resume.
*/
function ShowreelPlayer({ videoId = "LlCwHnp3kL4", title = "YouTube video player" }) {
	const iframeRef = import_react.useRef(null);
	const manuallyPaused = import_react.useRef(false);
	const inView = import_react.useRef(false);
	const [started, setStarted] = import_react.useState(false);
	const send = import_react.useCallback((func) => {
		iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
			event: "command",
			func,
			args: []
		}), "*");
	}, []);
	import_react.useEffect(() => {
		const handler = (e) => {
			if (typeof e.data !== "string") return;
			try {
				const data = JSON.parse(e.data);
				if (data?.event === "onReady") iframeRef.current?.contentWindow?.postMessage(JSON.stringify({
					event: "listening",
					id: videoId
				}), "*");
				if (data?.event === "infoDelivery" && typeof data?.info?.playerState === "number") {
					const state = data.info.playerState;
					if (state === 2 && inView.current) manuallyPaused.current = true;
					if (state === 1) manuallyPaused.current = false;
				}
			} catch {}
		};
		window.addEventListener("message", handler);
		return () => window.removeEventListener("message", handler);
	}, [videoId]);
	import_react.useEffect(() => {
		const node = iframeRef.current;
		if (!node) return;
		const io = new IntersectionObserver(([entry]) => {
			const visible = entry.isIntersecting && entry.intersectionRatio >= .5;
			inView.current = visible;
			if (visible && !manuallyPaused.current) {
				send("playVideo");
				setStarted(true);
			} else if (!visible) send("pauseVideo");
		}, { threshold: [
			0,
			.25,
			.5,
			.75,
			1
		] });
		io.observe(node);
		return () => io.disconnect();
	}, [send]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-black shadow-brick",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			ref: iframeRef,
			title,
			className: "absolute inset-0 h-full w-full",
			src: `https://www.youtube.com/embed/${videoId}?si=zsYRvbEFEuMyTq34&enablejsapi=1&rel=0&modestbranding=1&playsinline=1&controls=1`,
			frameBorder: "0",
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
			referrerPolicy: "strict-origin-when-cross-origin",
			allowFullScreen: true
		}), !started && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-t from-black/50 to-transparent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-full bg-background/90 px-5 py-2.5 text-sm font-semibold text-foreground shadow-brick backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-primary text-primary" }), " Scroll to play"]
			})
		})]
	});
}
function AboutPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 pt-24 pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-gold" }), " Watch · 90 seconds"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold leading-tight md:text-4xl text-balance",
					children: "See what a day at EWU really feels like."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base text-muted-foreground text-pretty",
					children: "From early-morning labs to late-night rehearsals, our students live the EWU promise every single day. Press play, or just keep scrolling, the showreel will play itself."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
						children: ["Our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/clubs",
						className: "inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary",
						children: "Campus life"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowreelPlayer, {})]
		})
	});
}
function CountUp({ end, suffix = "", prefix = "", duration = 1600, className }) {
	const [value, setValue] = import_react.useState(0);
	const ref = import_react.useRef(null);
	const started = import_react.useRef(false);
	import_react.useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !started.current) {
				started.current = true;
				const start = performance.now();
				const tick = (t) => {
					const p = Math.min(1, (t - start) / duration);
					const eased = 1 - Math.pow(1 - p, 3);
					setValue(Math.floor(end * eased));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			}
		}, { threshold: .3 });
		io.observe(node);
		return () => io.disconnect();
	}, [end, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [
			prefix,
			value.toLocaleString(),
			suffix
		]
	});
}
var STATS = [
	{
		value: 12400,
		suffix: "+",
		label: "Students",
		icon: GraduationCap
	},
	{
		value: 30,
		suffix: "+",
		label: "Programs",
		icon: BookOpen
	},
	{
		value: 320,
		suffix: "+",
		label: "Faculty",
		icon: Users
	},
	{
		value: 180,
		suffix: "+",
		label: "Industry partners",
		icon: Building2
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4",
			children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-xl px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl font-bold leading-none text-foreground md:text-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							end: s.value,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] uppercase tracking-wider text-muted-foreground",
						children: s.label
					})]
				})]
			}, s.label))
		})
	});
}
function SectionHead({ eyebrow, title, subtitle, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl font-bold leading-tight md:text-4xl text-balance",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground text-pretty",
				children: subtitle
			})
		]
	});
}
function FeaturedDepartments() {
	const featured = DEPARTMENTS.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Departments",
				title: "Where will you study?",
				subtitle: "Explore six faculties and 30+ rigorously designed programs taught by Bangladesh's leading academics."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/departments/$slug",
					params: { slug: d.slug },
					className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img(DEPT_IMG_KEYS[i] ?? "hero-2"),
								alt: d.name,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary shadow-brick",
								children: d.short
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "absolute bottom-4 left-4 right-4 font-serif text-lg font-bold text-white",
								children: d.name
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: d.summary
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								d.students.toLocaleString(),
								" students · ",
								d.faculty_count,
								" faculty"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-1" })]
						})]
					})]
				}, d.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/departments",
					className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline",
					children: ["View all departments ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			})
		]
	});
}
function ScholarshipsBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-y border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img("hero-5"),
				alt: "",
				className: "h-full w-full object-cover opacity-15",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-card/40 via-card/70 to-card" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary",
					children: "Scholarships"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-3xl font-bold leading-tight md:text-4xl text-balance",
					children: "Talent shouldn't depend on tuition."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-muted-foreground",
					children: [
						"Over ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "42% of EWU students"
						}),
						" receive some form of financial assistance, merit, need-based, sports or quota waivers."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admission",
					className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
					children: ["Scholarship details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: SCHOLARSHIPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-3 rounded-xl border border-border bg-background p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-foreground/85",
						children: s
					})]
				}, i))
			})]
		})]
	});
}
var FACILITY_ICONS = {
	BookOpen,
	Monitor,
	FlaskConical,
	Mic2: MicVocal,
	Utensils,
	Trophy,
	HeartPulse,
	Bus
};
function FacilityIcon({ iconKey }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FACILITY_ICONS[iconKey] ?? Building2, { className: "h-4 w-4" });
}
function HeroCard({ facility, hoverFacility }) {
	const [hovered, setHovered] = import_react.useState(false);
	const shown = hovered ? hoverFacility : facility;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl cursor-pointer lg:row-span-2",
		style: { minHeight: 480 },
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img(facility.img),
				alt: facility.name,
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img(hoverFacility.img),
				alt: "",
				"aria-hidden": true,
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`,
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 text-primary shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacilityIcon, { iconKey: shown.icon })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-0 right-0 z-20 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50",
						children: "Featured"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-2xl font-bold leading-tight text-white",
						children: shown.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-white/70",
						children: shown.summary
					})
				]
			})
		]
	});
}
function GridCard({ facility, hoverFacility }) {
	const [hovered, setHovered] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-38 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img(facility.img),
					alt: facility.name,
					className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`,
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img(hoverFacility.img),
					alt: "",
					"aria-hidden": true,
					className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`,
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 text-primary shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacilityIcon, { iconKey: facility.icon })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-sm font-bold",
				children: facility.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground",
				children: facility.summary
			})]
		})]
	});
}
function FacilitiesBlock() {
	const facilities = FACILITIES.slice(0, 6);
	const next = (i) => FACILITIES[(i + 1) % FACILITIES.length];
	const hero = facilities[0];
	const grid4 = facilities.slice(1, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Facilities",
					title: "A campus designed for learning, living and building."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/facilities",
					className: "hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex",
					children: ["Tour all facilities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-[2fr_1fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCard, {
					facility: hero,
					hoverFacility: next(0)
				}), grid4.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridCard, {
					facility: f,
					hoverFacility: next(i + 1)
				}, f.name))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 text-center sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/facilities",
					className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline",
					children: ["Tour all facilities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			})
		]
	});
}
function ResearchHighlights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "brand-gradient text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-end gap-8 md:grid-cols-[1fr_auto]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold",
							children: "Research"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-bold leading-tight md:text-4xl text-balance",
							children: "Research with real-world impact, built for Bangladesh."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-primary-foreground/80",
							children: "EWU researchers publish in top international venues and partner with national institutions to solve problems that matter at home, from rural healthcare to climate resilience."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/research",
						className: "inline-flex items-center gap-1 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20",
						children: ["Research portal ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-3",
					children: [
						{
							tag: "AI · Health",
							title: "Bangla Voice Diagnostics for Rural Clinics",
							lead: "Dr. Tasnia Rahman, CSE",
							img: "res-1"
						},
						{
							tag: "Energy",
							title: "Solar Mini-Grid Resilience for Coastal Bangladesh",
							lead: "Dr. Kazi Mahbubul Alam, EEE",
							img: "res-2"
						},
						{
							tag: "Economics",
							title: "Microfinance & Female Labor Force Participation",
							lead: "Dr. Rumana Akter, Economics",
							img: "res-3"
						}
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur transition-all hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(p.img),
									alt: p.title,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Microscope, { className: "h-3 w-3" }),
										" ",
										p.tag
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-bold leading-tight",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-primary-foreground/80",
								children: p.lead
							})]
						})]
					}, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-10 sm:grid-cols-4 backdrop-blur",
					children: [
						{
							value: 1820,
							suffix: "+",
							label: "Publications"
						},
						{
							value: 32,
							label: "Research groups"
						},
						{
							value: 14,
							label: "Funded labs"
						},
						{
							value: 18,
							prefix: "৳",
							suffix: " Cr",
							label: "2025 funding"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl font-bold text-gold md:text-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
								end: s.value,
								prefix: s.prefix,
								suffix: s.suffix
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[11px] uppercase tracking-wider text-primary-foreground/70",
							children: s.label
						})]
					}, s.label))
				})
			]
		})
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-serif text-lg font-bold text-foreground",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[10px] uppercase tracking-wider text-muted-foreground",
		children: l
	})] });
}
function FacultySpotlight() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			eyebrow: "Faculty Spotlight",
			title: "Taught by Bangladesh's leading academics."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
			children: FACULTY.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/faculty/$id",
				params: { id: f.id },
				className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[3/3] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img(f.img),
							alt: f.name,
							className: "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4 right-4 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-bold leading-tight",
								children: f.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-white/85",
								children: f.designation
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: f.interests.slice(0, 3).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary-deep",
							children: i
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-3 border-t border-border pt-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: f.papers,
								l: "Papers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: f.cites.toLocaleString(),
								l: "Citations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: f.h,
								l: "h-index"
							})
						]
					})]
				})]
			}, f.id))
		})]
	});
}
function ClubsBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Club Activities",
				title: "Find your people. Build your story.",
				subtitle: "40+ clubs and societies, academic, cultural, sports and community service."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: CLUBS.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/clubs",
					className: "group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img(c.img),
								alt: c.name,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gold-foreground",
								children: c.category
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold leading-tight",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
								children: c.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-xs font-medium text-primary",
								children: [c.members, " active members →"]
							})
						]
					})]
				}, c.slug))
			})]
		})
	});
}
function CalendarPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img("calendar-bg"),
				alt: "",
				className: "h-full w-full object-cover",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }), " Academic Calendar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl font-bold leading-tight md:text-4xl text-balance",
						children: "Plan your semester. Every date that matters at EWU."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "From class start dates to convocation, exams, holidays and registration windows."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/academic-calendar",
						className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
						children: ["Full academic calendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-3xl border border-border bg-card/90 shadow-brick backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border bg-primary px-6 py-4 text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-widest opacity-80",
							children: "Upcoming"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg font-bold",
							children: "Spring 2027 highlights"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: CALENDAR.slice(0, 5).map((e) => {
							const d = new Date(e.date);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-bold uppercase text-primary",
											children: d.toLocaleString("en", { month: "short" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-serif text-lg font-bold leading-none",
											children: d.getDate()
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "truncate font-semibold",
											children: e.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: d.toLocaleDateString("en", {
												weekday: "long",
												year: "numeric"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase text-primary-deep",
										children: e.type
									})
								]
							}, e.date + e.title);
						})
					})]
				})]
			})
		})]
	});
}
gsapWithCSS.registerPlugin(ScrollTrigger);
function AchievementsBlock() {
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		const ctx = gsapWithCSS.context(() => {
			ScrollTrigger.create({
				trigger: section,
				start: "top 10%",
				end: "bottom bottom",
				pin: ".achievements-left",
				pinSpacing: false
			});
		}, section);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "relative mx-auto max-w-7xl px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-16 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "achievements-left hidden lg:block lg:w-[38%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: "Our Achievements",
					title: "Trophies, medals and the moments that defined our year.",
					subtitle: "From national programming contests to international debate finals, EWU students and faculty are winning where it counts. These accomplishments showcase the talent, determination, and creativity that thrive across our campus. Whether in academics, research, innovation, athletics, or community engagement, EWU continues to make its mark on prestigious platforms at home and abroad. Celebrate the achievements that have shaped our year and inspired our future."
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-col gap-6 lg:w-[62%]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
						eyebrow: "Our Achievements",
						title: "Trophies, medals and the moments that defined our year.",
						subtitle: "From national programming contests to international debate finals, EWU students and faculty are winning where it counts."
					})
				}), ACHIEVEMENTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group overflow-hidden rounded-2xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img(a.img),
								alt: a.title,
								className: "h-full w-full object-cover",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-3 w-3" }),
									" ",
									a.tag
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-base font-bold leading-tight",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: a.body
						})]
					})]
				}, a.title))]
			})]
		})
	});
}
function GalleryBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Campus Gallery",
				title: "A glimpse of life at EWU.",
				subtitle: "Students, classrooms, events and quiet corners of our Aftabnagar campus."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
				children: GALLERY_KEYS.map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `group relative overflow-hidden rounded-2xl border border-border bg-background ${i === 0 || i === 3 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img(k),
						alt: `EWU campus moment ${i + 1}`,
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" })]
				}, k))
			})]
		})
	});
}
function AlumniBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Top Alumni",
				title: "Where EWU graduates lead today.",
				subtitle: "From banks and hospitals to startups and global tech giants, our alumni are building the future."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: ALUMNI.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img(a.img),
								alt: a.name,
								className: "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute right-4 top-4 h-6 w-6 text-gold/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-bold uppercase tracking-wider text-gold",
										children: a.batch
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-serif text-lg font-bold leading-tight",
										children: a.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/90",
										children: a.role
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col gap-4 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "relative border-l-2 border-gold pl-3 text-sm italic text-foreground/85",
							children: [
								"\"",
								a.quote,
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto text-xs text-muted-foreground",
							children: a.body
						})]
					})]
				}, a.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline",
					children: ["More alumni stories ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				})
			})
		]
	});
}
function FAQItem({ q, a }) {
	const [open, setOpen] = import_react.useState(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((o) => !o),
			className: "flex w-full items-center justify-between gap-3 p-5 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-start gap-3 font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), q]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-primary transition-transform ${open ? "rotate-45" : ""}`,
				children: "+"
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-5 pb-5 pl-13 text-sm text-muted-foreground",
			children: a
		})]
	});
}
function FAQBlock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "FAQ",
				title: "Quick answers for prospective students.",
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-3",
				children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, { ...f }, i))
			})]
		})
	});
}
function Home() {
	import_react.useEffect(() => {
		document.documentElement.classList.add("brick-light-theme");
		return () => document.documentElement.classList.remove("brick-light-theme");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalsBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsTicker, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedDepartments, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScholarshipsBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacilitiesBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResearchHighlights, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AchievementsBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FacultySpotlight, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubsBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlumniBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQBlock, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnersFloating, {})
	] });
}
//#endregion
export { Home as component };
