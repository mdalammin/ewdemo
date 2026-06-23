import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as facultyById, p as deptBySlug } from "./site-data-DkD11PRE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faculty._id-CCp3nMBE.js
var $$splitComponentImporter = () => import("./faculty._id-BNNOLZXL.mjs");
var $$splitNotFoundComponentImporter = () => import("./faculty._id-BwFZkhpp.mjs");
var Route = createFileRoute("/faculty/$id")({
	loader: ({ params }) => {
		const f = facultyById(params.id);
		if (!f) throw notFound();
		return {
			f,
			dept: deptBySlug(f.dept)
		};
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.f.name ?? "Faculty"} , EWU` },
		{
			name: "description",
			content: loaderData?.f.bio ?? "EWU faculty profile"
		},
		{
			property: "og:title",
			content: `${loaderData?.f.name ?? "Faculty"} , EWU`
		},
		{
			property: "og:description",
			content: loaderData?.f.bio ?? ""
		}
	] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
