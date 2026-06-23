import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-CKmx_6UK.js
var import_jsx_runtime = require_jsx_runtime();
var ewlogodark_default = "/assets/ewlogodark-Bao151ay.png";
var ewlogolight_default = "/assets/ewlogolight-DTuiuP0q.png";
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: ewlogodark_default,
		alt: "East West University",
		className: `h-16 w-72 object-contain dark:hidden ${className}`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: ewlogolight_default,
		alt: "East West University",
		className: `h-16 w-72 object-contain hidden dark:block ${className}`
	})] });
}
//#endregion
export { Logo as t };
