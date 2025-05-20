import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const cardMessageVariants = {
    info: "info",
    warning: "warning",
    error: "error",
    neutral: "neutral",
};
export const CardMessage = ({ variant = "info", title, text, className, ...props }) => {
    const componentClassName = useMemo(() => {
        return getComponentClassName("af-card-message", className, variant);
    }, [className, variant]);
    return (_jsxs("div", { ...props, className: componentClassName, children: [title && _jsx("span", { className: "af-card-message--title", children: title }), _jsx("span", { className: "af-card-message--text", children: text })] }));
};
