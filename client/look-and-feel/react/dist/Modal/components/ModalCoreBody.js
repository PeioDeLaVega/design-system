import { jsx as _jsx } from "react/jsx-runtime";
export const ModalCoreBody = ({ children, className, ...otherProps }) => (_jsx("section", { className: ["af-modal__body", className].filter(Boolean).join(" "), ...otherProps, children: children }));
