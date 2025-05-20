import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ContentItemMonoCore = ({ size = "medium", leftComponent, title, primarySubtitle, subtitle, }) => {
    return (_jsxs("div", { "data-testid": "container", className: `af-content-item-mono ${size}`, children: [leftComponent ?? _jsx("div", { className: "stick" }), _jsxs("div", { className: "text-content", children: [_jsx("span", { className: "title", children: title }), primarySubtitle && (_jsx("span", { className: "subtitle-primary", children: primarySubtitle })), subtitle && _jsx("span", { className: "subtitle", children: subtitle })] })] }));
};
