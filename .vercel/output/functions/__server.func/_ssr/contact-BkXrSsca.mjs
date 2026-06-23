import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { G as Instagram, L as MapPin, R as Mail, T as Phone, V as Linkedin, d as TriangleAlert, et as Facebook, l as Twitter, n as Youtube } from "../_libs/lucide-react.mjs";
import { f as SITE } from "./site-data-DkD11PRE.mjs";
import { t as PageHero } from "./PageHero-DViCVIdJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BkXrSsca.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "We'd love to hear from you.",
			subtitle: "Visit our Aftabnagar campus, call the admission office, or send a quick message below.",
			crumbs: [{
				to: "/",
				label: "Home"
			}, { label: "Contact" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						icon: MapPin,
						title: "Visit us",
						lines: [SITE.address]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						icon: Phone,
						title: "Call us",
						lines: [
							`Main: ${SITE.phone}`,
							`Admission: +880 9666 775 200`,
							`Emergency: ${SITE.emergency}`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						icon: Mail,
						title: "Email us",
						lines: [
							`General: ${SITE.email}`,
							"Admission: admission@ewubd.edu",
							"Research: research@ewubd.edu"
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "EWU map",
					src: "https://www.google.com/maps?q=East+West+University+Dhaka&output=embed",
					className: "h-[420px] w-full",
					loading: "lazy"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl grid gap-10 px-6 py-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl font-bold",
				children: "Send an inquiry"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					toast.success("Message sent , we'll reply within 1 business day.");
				},
				className: "mt-5 space-y-4 rounded-2xl border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							"aria-label": "Full name",
							placeholder: "Full name",
							className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							"aria-label": "Email",
							placeholder: "Email",
							className: "rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						"aria-label": "Subject",
						placeholder: "Subject",
						className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						required: true,
						"aria-label": "Your message",
						placeholder: "Your message",
						className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep",
						children: "Send message"
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-destructive/30 bg-destructive/5 p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg font-bold",
								children: "Emergency contacts"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EWU Hotline (24/7)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-destructive",
										children: SITE.emergency
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Campus Medical Centre" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "+880 9666 775 999"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Security Desk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "+880 9666 775 911"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "National Emergency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "999"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg font-bold",
							children: "Departmental directory"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								["Admission Office", "admission@ewubd.edu"],
								["Registrar", "registrar@ewubd.edu"],
								["Office of Research", "research@ewubd.edu"],
								["Student Services", "services@ewubd.edu"],
								["Library", "library@ewubd.edu"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between border-b border-dashed border-border pb-2 last:border-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/85",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${v}`,
									className: "font-medium text-primary hover:underline",
									children: v
								})]
							}, k))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg font-bold",
							children: "Follow EWU"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-2",
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
									i: Linkedin,
									h: SITE.socials.linkedin,
									label: "LinkedIn"
								},
								{
									i: Twitter,
									h: SITE.socials.twitter,
									label: "Twitter"
								}
							].map(({ i: Icon, h, label }, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: h,
								"aria-label": `East West University on ${label}`,
								className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:border-primary hover:bg-primary hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, idx))
						})]
					})
				]
			})]
		})
	] });
}
function Tile({ icon: Icon, title, lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-serif text-lg font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 space-y-1 text-sm text-muted-foreground",
				children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: l }, l))
			})
		]
	});
}
//#endregion
export { ContactPage as component };
