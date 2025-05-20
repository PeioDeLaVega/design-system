import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getComponentClassName } from "../../../utilities";
const defaultClassName = "af-nav-container";
const NavBarBase = ({ isVisible = true, onClick, id = "mainmenu", toggleMenuId = "togglemenu", isMenuFocused, className, classModifier, handleKeys, onFocus, onBlur, children, }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsxs("div", { className: componentClassName, children: [_jsx("button", { "aria-controls": id, "aria-haspopup": "true", type: "button", onClick: onClick, className: `mask fade ${isVisible ? "show" : ""}`, id: `open-${toggleMenuId}`, "aria-label": "Open Menu" }), _jsx("nav", { className: `af-nav af-drawer left ${isVisible ? "show" : ""}`, role: "navigation", "aria-label": "Menu principal", children: _jsxs("div", { className: "container af-nav__wrapper", children: [_jsxs("div", { className: "af-nav__aside-header", children: [_jsx("h4", { className: "af-nav__aside-title", children: "Menu" }), _jsx("button", { "aria-controls": id, "aria-haspopup": "true", onClick: onClick, type: "button", className: "af-nav__aside-close", id: `close-${toggleMenuId}`, "aria-label": "Close Menu", children: "\u00D7" })] }), _jsx("ul", { onKeyDown: (e) => {
                                e.preventDefault();
                                handleKeys(e.key);
                            }, onFocus: (e) => {
                                onFocus({ e });
                            }, onBlur: (e) => {
                                onBlur({ e });
                            }, className: `af-nav__list ${isMenuFocused ? "af-nav__list--focused" : ""}`, role: "menubar", id: id, children: children })] }) })] }));
};
export { NavBarBase };
