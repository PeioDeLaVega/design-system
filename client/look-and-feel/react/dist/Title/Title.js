import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, } from "react";
import { IconBg } from "..";
import { getComponentClassName } from "../utilities";
import { TitleSize } from "./constants";
import { TitleWithSubtitles } from "./TitleWithSubtitles";
export const Title = ({ children: title, className, classModifier, firstSubtitle, icon, secondSubtitle, size = TitleSize.XL, level = size === TitleSize.L ? 2 : 1, }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-title", className, classModifier ? `${classModifier} ${size}` : size), [classModifier, className, size]);
    const TitleWithSubtitlesPart = useCallback(({ ...args }) => (_jsx(TitleWithSubtitles, { title: title, firstSubtitle: firstSubtitle, level: level, ...args })), [title, firstSubtitle, level]);
    return (_jsx("header", { className: componentClassName, children: icon && size === TitleSize.XL ? (_jsxs(_Fragment, { children: [_jsx(IconBg, { className: "af-title__icon af-icon-bg", children: icon }), _jsx(TitleWithSubtitlesPart, { secondSubtitle: secondSubtitle })] })) : (_jsx(TitleWithSubtitlesPart, {})) }));
};
