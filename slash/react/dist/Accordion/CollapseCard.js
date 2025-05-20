import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body } from "./Body";
import { Header } from "./Header";
import { getComponentClassName } from "../utilities";
export const CollapseCard = ({ children, name, title, id, open, onToggle, className, classModifier = "", }) => {
    const headerId = id;
    let newClassModifier = open ? "open" : "";
    newClassModifier += ` ${classModifier}`;
    const componentClassName = getComponentClassName(className, newClassModifier.trim(), "af-accordion__details");
    return (_jsxs("details", { open: open, name: name, className: componentClassName, onToggle: onToggle, children: [_jsx(Header, { id: headerId, children: title }), _jsx(Body, { children: children })] }));
};
