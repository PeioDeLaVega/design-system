import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
export const HeaderRestitution = ({ title, subtitle, rightTitle, className, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-restitution__header");
    return (_jsxs("header", { className: componentClassName, children: [_jsx("div", { className: "af-restitution__header-left", children: _jsxs("h3", { className: "af-restitution__title", children: [_jsx("span", { className: "af-restitution__title-main", children: title }), subtitle ? (_jsx("span", { className: "af-restitution__title-subtitle", children: subtitle })) : null] }) }), rightTitle ? (_jsx("div", { className: "af-restitution__header-right", children: _jsx("span", { className: "af-restitution__title", children: rightTitle }) })) : null] }));
};
