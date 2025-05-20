import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Button, Modal, getComponentClassName } from "..";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
const defaultClassName = "af-modal";
const BooleanModal = forwardRef(({ children, title, submitTitle = "Valider", cancelTitle = "Annuler", className = defaultClassName, classModifier, onCancel, onSubmit, closeButtonAriaLabel, ...props }, ref) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsxs(Modal, { className: componentClassName, onOutsideTap: onCancel, title: title, ref: ref, ...props, children: [_jsx(Header, { title: title, onCancel: onCancel, closeButtonAriaLabel: closeButtonAriaLabel }), _jsx(Body, { children: children }), _jsxs(Footer, { children: [_jsx(Button, { classModifier: "reverse", onClick: onCancel, children: cancelTitle }), _jsx(Button, { onClick: onSubmit, children: submitTitle })] })] }));
});
BooleanModal.displayName = "BooleanModal";
export { BooleanModal };
