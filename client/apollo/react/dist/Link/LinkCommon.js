import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import { useMemo, } from "react";
import { Svg } from "../Svg/Svg";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const linkVariants = {
    default: "default",
    underline: "underline",
    inverse: "inverse",
};
export const Link = ({ href, variant = "underline", openInNewTab = false, leftIcon, rightIcon, children, className, classModifier = "", ...props }) => {
    const newTabProps = openInNewTab && {
        target: "_blank",
        rel: "noopener noreferrer",
    };
    const componentClassName = useMemo(() => getComponentClassName("af-link", className, `${classModifier}${!className && openInNewTab ? " openInNewTab" : ""} ${variant}`), [classModifier, className, openInNewTab, variant]);
    return (_jsxs("a", { className: componentClassName, href: href, ...newTabProps, ...props, children: [leftIcon, children, (openInNewTab || Boolean(rightIcon)) &&
                (rightIcon ?? _jsx(Svg, { src: openInNew }))] }));
};
