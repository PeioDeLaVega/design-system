import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getComponentClassName } from "..";
const Modal = forwardRef(({ className, title = "", onOutsideTap, children, classModifier, ...props }, ref) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-modal");
    return (_jsx("dialog", { "aria-label": title, className: componentClassName, onClick: onOutsideTap, ref: ref, ...props, children: _jsx("div", { className: "af-modal__dialog", onClick: (event) => event.stopPropagation(), children: _jsx("div", { className: "af-modal__content", children: children }) }) }));
});
Modal.displayName = "Modal";
export { Modal };
