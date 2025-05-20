import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
export const TimelineVertical = ({ title, children, tag, className, }) => (_jsxs("section", { className: classNames("af-timeline-vertical", className), children: [_jsxs("header", { className: "af-timeline-vertical__header", children: [tag, _jsx("h4", { className: "af-timeline-vertical__title", children: title })] }), Boolean(children) && (_jsx("main", { className: "af-timeline-vertical__description", children: children }))] }));
