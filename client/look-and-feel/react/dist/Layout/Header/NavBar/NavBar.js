import { jsx as _jsx } from "react/jsx-runtime";
import { isValidElement, useMemo, Children, cloneElement, } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.scss";
import classNames from "classnames";
const NavBar = ({ activeLink, children, setActiveLink, ...props }) => {
    const validChildren = useMemo(() => (Children.map(children, (child) => isValidElement(child) && child) ?? []).filter((c) => Boolean(c)), [children]);
    if (validChildren.length === 0)
        return null;
    return (_jsx("nav", { role: "navigation", "aria-label": "Menu principal", ...props, children: _jsx("ul", { className: "af-navbar-container", role: "menubar", children: Children.map(validChildren, (child, index) => (_jsx("li", { className: "af-navbar-item", role: "none", children: cloneElement(child, {
                    className: classNames("af-navbar-item__link", {
                        "af-navbar-item__link--active": index === activeLink,
                    }),
                    onClick: () => setActiveLink(index),
                    onFocus: () => setActiveLink(index),
                    role: "menuitem",
                }) }))) }) }));
};
export { NavBar };
