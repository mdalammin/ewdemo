import { i as __toESM } from "../_runtime.mjs";
import { a as img } from "./images-B3FFIUwW.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Search } from "../_libs/lucide-react.mjs";
import { a as DEPARTMENTS, c as FACULTY } from "./site-data-DkD11PRE.mjs";
import { t as PageHero } from "./PageHero-DViCVIdJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faculty-BHoINrCA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FacultyDirectory() {
	const [q, setQ] = import_react.useState("");
	const [dept, setDept] = import_react.useState("all");
	const filtered = FACULTY.filter((f) => {
		const matchQ = !q || f.name.toLowerCase().includes(q.toLowerCase()) || f.interests.join(" ").toLowerCase().includes(q.toLowerCase());
		const matchD = dept === "all" || f.dept === dept;
		return matchQ && matchD;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Faculty Directory",
		title: "320+ scholars shaping the future of Bangladesh.",
		subtitle: "Search by name, department or research interest.",
		crumbs: [{
			to: "/",
			label: "Home"
		}, { label: "Faculty" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						"aria-label": "Search faculty or research",
						placeholder: "Search faculty or research…",
						className: "w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none focus:border-primary"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: dept,
					onChange: (e) => setDept(e.target.value),
					"aria-label": "Filter by department",
					className: "rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "All departments"
					}), DEPARTMENTS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: d.slug,
						children: d.name
					}, d.slug))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xs text-muted-foreground",
				children: [
					filtered.length,
					" faculty member",
					filtered.length === 1 ? "" : "s"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((f) => {
					const d = DEPARTMENTS.find((x) => x.slug === f.dept);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faculty/$id",
						params: { id: f.id },
						className: "group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brick",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(f.img),
									alt: f.name,
									className: "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-3 top-3 rounded-full bg-gold/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-foreground",
									children: d?.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-3 left-4 right-4 text-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-lg font-bold leading-tight",
										children: f.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-white/85",
										children: f.designation
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: f.interests.slice(0, 3).map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-medium text-primary-deep",
									children: i
								}, i))
							})
						})]
					}, f.id);
				})
			})
		]
	})] });
}
//#endregion
export { FacultyDirectory as component };
