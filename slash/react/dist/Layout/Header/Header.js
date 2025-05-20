import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Header.scss";
import { getComponentClassName } from "../../utilities";
const defaultClassName = "af-header";
const Header = ({ classModifier, className, children }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsx("div", { className: componentClassName, children: _jsx("div", { className: `container ${defaultClassName}__wrapper`, children: _jsx("header", { className: `${defaultClassName}__content`, role: "banner", children: children }) }) }));
};
export { Header };
