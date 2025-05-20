import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { getComponentClassName } from "../utilities";
export const Card = ({ children, className, classModifier, onClick, ...otherProps }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-card", className, classModifier), [className, classModifier]);
    const Component = useMemo(() => (onClick ? "button" : "section"), [onClick]);
    return (_jsx(Component, { className: componentClassName, ...(onClick ? { type: "button", onClick } : {}), ...otherProps, children: children }));
};
