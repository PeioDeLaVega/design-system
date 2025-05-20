import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
import "@axa-fr/design-system-slash-css/dist/Alert/Alert.scss";
export var TypeIcons;
(function (TypeIcons) {
    TypeIcons["error"] = "glyphicon glyphicon-minus-sign";
    TypeIcons["danger"] = "glyphicon glyphicon-alert";
    TypeIcons["info"] = "glyphicon glyphicon-info-sign";
    TypeIcons["success"] = "glyphicon glyphicon-ok";
})(TypeIcons || (TypeIcons = {}));
export const Alert = ({ className, onClose, icon, title, children, classModifier = "error", ariaLabel = "close", }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-alert");
    return (_jsxs("div", { className: componentClassName, role: "alert", children: [_jsxs("div", { className: "af-alert__title", children: [_jsx("div", { className: "af-alert__title-icon", children: _jsx("i", { role: "presentation", className: icon || TypeIcons[classModifier] }) }), _jsx("div", { className: "af-alert__title-text", children: title }), onClose && (_jsx("button", { type: "button", className: "af-alert__title-icon-close", onClick: onClose, "aria-label": ariaLabel, children: _jsx("i", { className: "glyphicon glyphicon-close" }) }))] }), children && (_jsxs("div", { className: "af-alert__content", children: [_jsx("div", { className: "af-alert__content-left" }), _jsx("div", { className: "af-alert__content-right", children: children })] }))] }));
};
