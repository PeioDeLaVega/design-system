import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Modal/Modal.scss";
const ModalCore = forwardRef(({ className, title = "", onOutsideTap, children, ...props }, ref) => (_jsx("dialog", { "aria-label": title, className: ["af-modal", className].filter(Boolean).join(" "), onClick: onOutsideTap, ref: ref, ...props, children: _jsx("div", { className: "af-modal__dialog", onClick: (e) => e.stopPropagation(), children: _jsx("div", { className: "af-modal__content", children: children }) }) })));
ModalCore.displayName = "ModalCore";
export { ModalCore };
