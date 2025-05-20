import { jsx as _jsx } from "react/jsx-runtime";
export const spinnerVariants = {
    blue: "blue",
    gray: "gray",
    white: "white",
};
const DEFAULT_CLASSNAME = "af-spinner";
const Spinner = ({ size = 40, variant = "blue", text = "Chargement en cours", }) => (_jsx("div", { role: "alert", "aria-busy": true, "aria-label": text, "aria-live": "assertive", className: [
        DEFAULT_CLASSNAME,
        `${DEFAULT_CLASSNAME}--${variant}`,
        `${DEFAULT_CLASSNAME}--${size}`,
    ]
        .filter(Boolean)
        .join(" "), style: {
        "--spinner-size": size,
    } }));
Spinner.displayName = "Spinner";
export { Spinner };
