import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/HeaderTitle/HeaderTitle.scss";
import { getComponentClassName } from "../../../utilities";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { Action } from "../../../Action/Action";
import { getClassModifier } from "./HeaderTitle.helpers";
const defaultClassName = "af-title-bar";
const HeaderTitle = ({ children, classModifier, className, isSticky = true, subtitle, title, toggleMenu, }) => {
    const componentClassName = getComponentClassName(className, getClassModifier(classModifier, isSticky), defaultClassName);
    return (_jsx("div", { className: componentClassName, children: _jsxs("div", { className: `container ${defaultClassName}__wrapper`, children: [Boolean(toggleMenu) && (_jsx("div", { className: "burger-container", children: _jsx(ToggleButton, { idControl: "mainmenu", children: _jsx(Action, { className: "btn af-title-bar__mobile-menu af-btn--circle", id: "togglemenu", icon: "menu-hamburger", title: "Toggle menu", onClick: toggleMenu }) }) })), _jsxs("h1", { className: `${defaultClassName}__title`, children: [title, subtitle && (_jsx("span", { className: `${defaultClassName}__subtitle`, children: subtitle }))] }), children] }) }));
};
export { HeaderTitle };
