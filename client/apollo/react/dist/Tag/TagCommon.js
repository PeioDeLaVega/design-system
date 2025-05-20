import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const tagVariants = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
    neutral: "neutral",
};
export const Tag = ({ children, className, variant = "info", ...divProps }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-tag", className, variant), [className, variant]);
    return (_jsx("div", { className: componentClassName, ...divProps, children: _jsx("span", { className: "af-tag__label", children: children }) }));
};
