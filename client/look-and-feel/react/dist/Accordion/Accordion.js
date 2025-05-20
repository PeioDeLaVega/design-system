import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCore";
import { BREAKPOINT, getComponentClassName, useIsSmallScreen, } from "../utilities";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer";
export const Accordion = ({ title, children, icon, subtitle, tagLabel, tagProps, dateLabel, dateProps, value, isTitleFirst = true, ...accordionCoreProps }) => {
    const isMobile = useIsSmallScreen(BREAKPOINT.SM);
    const isShowingIcon = Boolean(icon && isTitleFirst);
    const summaryClassName = useMemo(() => getComponentClassName("af-accordion__summary", isTitleFirst ? "title-first" : ""), [isTitleFirst]);
    return (_jsx(AccordionCore, { summary: _jsxs(_Fragment, { children: [isShowingIcon && isMobile && (_jsx("div", { className: "af-accordion__icon", children: icon })), !isTitleFirst && (_jsx(AccordionTagDateContainer, { tagLabel: tagLabel, dateLabel: dateLabel, tagProps: tagProps, dateProps: dateProps })), _jsxs("div", { className: "af-accordion__title-container", children: [isShowingIcon && !isMobile && (_jsx("div", { className: "af-accordion__icon", children: icon })), _jsx("p", { className: "af-accordion__title", children: title }), subtitle && _jsx("p", { className: "af-accordion__subtitle", children: subtitle })] }), isTitleFirst && (_jsx(AccordionTagDateContainer, { tagLabel: tagLabel, dateLabel: dateLabel, tagProps: tagProps, dateProps: dateProps })), value && _jsx("p", { className: "af-accordion__value", children: value })] }), summaryProps: { className: summaryClassName }, ...accordionCoreProps, children: children }));
};
