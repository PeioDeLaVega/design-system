import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export const TitleWithSubtitles = ({ title, firstSubtitle, secondSubtitle, level = 1, }) => {
    const HLevel = `h${level}`;
    return (_jsxs(_Fragment, { children: [_jsx(HLevel, { className: "af-title__title", children: title }), firstSubtitle && (_jsx("span", { className: "af-title__subtitle", children: firstSubtitle })), secondSubtitle && (_jsx("span", { className: "af-title__subtitle", children: secondSubtitle }))] }));
};
