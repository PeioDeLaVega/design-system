import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from "../Icon/IconCommon";
export const ClickIcon = ({ src, className, iconVariant = "primary", iconClassName, ...props }) => (_jsx("button", { type: "button", className: ["af-click-icon", className].filter(Boolean).join(" "), ...props, children: _jsx(Icon, { src: src, variant: iconVariant, className: iconClassName }) }));
