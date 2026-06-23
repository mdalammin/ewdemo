import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as deptBySlug } from "./site-data-DkD11PRE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments._slug-BOMASkiY.js
var $$splitComponentImporter = () => import("./departments._slug-DWgW_VdZ.mjs");
var $$splitNotFoundComponentImporter = () => import("./departments._slug-OUGB5R6K.mjs");
var Route = createFileRoute("/departments/$slug")({
	loader: ({ params }) => {
		const dept = deptBySlug(params.slug);
		if (!dept) throw notFound();
		return { dept };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.dept.name ?? "Department"} | EWU` }, {
		name: "description",
		content: loaderData?.dept.summary ?? "EWU department"
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
