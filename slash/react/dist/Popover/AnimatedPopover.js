import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef } from "react";
import { arrow, FloatingArrow, offset, useFloating, } from "@floating-ui/react";
import { getComponentClassName } from "../utilities";
const defaultClassName = "af-popover__container";
export const AnimatedPopover = ({ placement, children, isOpen, target, className, classModifier, onMouseEnter, onMouseLeave, }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    const [referenceElement, setReferenceElement] = React.useState(null);
    const [popperElement, setPopperElement] = React.useState(null);
    const arrowRef = useRef(null);
    const { floatingStyles, context } = useFloating({
        placement,
        elements: { reference: referenceElement, floating: popperElement },
        middleware: [offset(12), arrow({ element: arrowRef })],
    });
    return (_jsxs("div", { className: componentClassName, children: [_jsx("div", { ref: setReferenceElement, className: "af-popover__container-over", role: "presentation", children: target }), isOpen && (_jsxs("div", { ref: setPopperElement, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, style: floatingStyles, "data-popper-placement": placement, className: "af-popover__container-pop", children: [_jsx("div", { children: children }), _jsx(FloatingArrow, { ref: arrowRef, context: context, fill: "white" })] }))] }));
};
