import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
const defaultClassName = "af-accordion__item-header";
const Header = ({ children, className, classModifier, id }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsxs("summary", { className: componentClassName, id: id, children: [_jsx("h3", { className: "af-accordion__item-title", children: children }), _jsx("span", { className: "glyphicon glyphicon-menu-down" })] }));
};
export { Header };
