import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as CALENDAR } from "./site-data-DkD11PRE.mjs";
import { t as PageHero } from "./PageHero-DViCVIdJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/academic-calendar-Mj4ej8UR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPES = [
	"All",
	"Semester",
	"Admission",
	"Exam",
	"Holiday",
	"Event"
];
function CalendarPage() {
	const [t, setT] = import_react.useState("All");
	const list = t === "All" ? CALENDAR : CALENDAR.filter((c) => c.type === t);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Academic Calendar",
		title: "Your roadmap for the academic year.",
		subtitle: "Semester start dates, examinations, holidays, convocation and important deadlines.",
		crumbs: [{
			to: "/",
			label: "Home"
		}, { label: "Academic Calendar" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-6 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: TYPES.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setT(x),
				"aria-pressed": t === x,
				className: `rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${t === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground/75 hover:border-primary"}`,
				children: x
			}, x))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card",
			children: list.map((e) => {
				const d = new Date(e.date);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid h-16 w-16 shrink-0 place-items-center rounded-xl brand-gradient text-primary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] font-bold uppercase opacity-80",
								children: d.toLocaleString("en", { month: "short" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl font-bold leading-none",
								children: d.getDate()
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold",
								children: e.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: d.toLocaleDateString("en-GB", {
									weekday: "long",
									day: "numeric",
									month: "long",
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
	})] });
}
//#endregion
export { CalendarPage as component };
