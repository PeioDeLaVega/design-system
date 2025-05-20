import { jsx as _jsx } from "react/jsx-runtime";
import React, { Children, isValidElement, useMemo, } from "react";
import { Card } from "..";
import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";
const defaultClassName = "af-list";
export const List = ({ children, classModifier, ...cardProps }) => {
    const validChildren = useMemo(() => (Children.map(children, (child) => isValidElement(child) && child) ?? []).filter(Boolean), [children]);
    return (_jsx(Card, { classModifier: `list ${classModifier}`, ...cardProps, children: _jsx("ul", { className: defaultClassName, children: Children.map(validChildren, (child) => (_jsx(React.Fragment, { children: _jsx("li", { className: `${defaultClassName}__item`, children: child }) }, child.key))) }) }));
};
