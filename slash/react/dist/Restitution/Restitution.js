import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Restitution/Restitution.scss";
import { getComponentClassName } from "../utilities";
export const Restitution = ({ label, children = "-", className, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-restitution__listdef");
    return (_jsxs("dl", { className: componentClassName, children: [_jsx("dt", { className: "af-restitution__listdef-item", children: _jsx("span", { className: "af-restitution__text", children: label }) }), _jsx("dd", { className: "af-restitution__listdef-value", children: children })] }));
};
