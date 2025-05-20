import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import validationIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import warningIcon from "@material-symbols/svg-400/outlined/warning-fill.svg";
import neutralIcon from "@material-symbols/svg-400/outlined/info-fill.svg";
import infoIcon from "@material-symbols/svg-400/outlined/emoji_objects-fill.svg";
import { useMemo, } from "react";
import { Svg } from "../Svg/Svg";
export const messageVariants = {
    validation: "validation",
    error: "error",
    warning: "warning",
    information: "information",
    neutral: "neutral",
};
const getIconFromType = (variant) => ({
    [messageVariants.validation]: validationIcon,
    [messageVariants.error]: errorIcon,
    [messageVariants.neutral]: neutralIcon,
    [messageVariants.warning]: warningIcon,
    [messageVariants.information]: infoIcon,
})[variant] || infoIcon;
export const Message = ({ variant = messageVariants.information, className, title, children, action, iconSize = 24, heading: Heading = "h4", }) => {
    const icon = useMemo(() => getIconFromType(variant), [variant]);
    return (_jsxs("div", { className: ["af-message", `af-message--${variant}`, className]
            .filter(Boolean)
            .join(" "), role: "alert", children: [_jsx(Svg, { src: icon, width: iconSize, height: iconSize, className: "af-message__icon", role: "presentation" }), _jsxs("div", { className: "af-message__content", children: [title && _jsx(Heading, { className: "af-message__title", children: title }), children, action && _jsx("div", { className: "af-message__action", children: action })] })] }));
};
