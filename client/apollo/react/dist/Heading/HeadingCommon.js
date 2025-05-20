import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { HeadingWithSubheadings } from "./HeadingWithSubheadings";
import { Icon } from "../Icon/IconCommon";
export const DEFAULT_TAG_PROPS = {
    variant: "neutral",
};
export const HeadingCommon = ({ children: title, className, firstSubtitle, secondSubtitle, level = 1, icon, iconProps = {}, tag, }) => (_jsxs("header", { className: classNames("af-heading", className), children: [tag && level < 3 && _jsx("div", { className: "af-heading__label", children: tag }), icon && level === 1 && (_jsx(Icon, { src: icon, size: "L", hasBackground: true, variant: "secondary", ...iconProps, className: classNames("af-heading__icon", iconProps.className) })), _jsx(HeadingWithSubheadings, { title: title, firstSubtitle: firstSubtitle, titleComponent: `h${level}`, secondSubtitle: secondSubtitle })] }));
