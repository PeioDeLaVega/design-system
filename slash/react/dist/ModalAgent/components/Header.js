import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../..";
const Header = ({ className, classModifier, title, closeButtonAriaLabel = "Fermer la boite de dialogue", onCancel, ...props }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-modal__header");
    return (_jsxs("header", { className: componentClassName, ...props, children: [_jsx("h4", { className: "af-modal__header-title", children: title }), _jsx("button", { className: "af-modal__header-close-btn", type: "button", "aria-label": closeButtonAriaLabel, onClick: onCancel, children: _jsx("span", { className: "glyphicon glyphicon-close", "aria-hidden": "true" }) })] }));
};
export { Header };
