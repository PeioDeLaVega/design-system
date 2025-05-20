import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useCallback, useState, } from "react";
import { getPosition } from "../NavBar.helpers";
import { NavBarItemBase } from "./NavBarItemBase";
const defaultClassName = "af-nav__item";
const NavBarItem = ({ children, hasFocus = false, actionElt, ariaLabel = "", tabIndex = -1, role = "menuitem", className = defaultClassName, ...otherProps }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [position, setPosition] = useState(0);
    const moveBykey = useCallback((key) => {
        const newPosition = getPosition(React.Children.count(children), position, key);
        setPosition(newPosition);
    }, [position, children]);
    const openMenu = useCallback(() => {
        if (children) {
            setIsMenuOpen(true);
        }
    }, [children]);
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
        setPosition(0);
    }, []);
    const handleKeys = useCallback(({ key }) => {
        if (!children) {
            return;
        }
        if (key === "ArrowDown") {
            if (!isMenuOpen) {
                openMenu();
            }
            else {
                moveBykey(key);
            }
        }
        if (key === "ArrowUp" && isMenuOpen) {
            if (position === 0) {
                closeMenu();
            }
            else {
                moveBykey(key);
            }
        }
        if (key === "ArrowRight" || key === "ArrowLeft" || key === "Escape") {
            closeMenu();
        }
    }, [children, isMenuOpen, position, moveBykey, openMenu, closeMenu]);
    const renderChild = useCallback((child, childIndex) => React.cloneElement(child, {
        classModifier: childIndex === position && isMenuOpen ? " active" : undefined,
        tabIndex: childIndex === position && isMenuOpen ? 0 : -1,
        key: `child${childIndex}`,
        hasFocus: hasFocus && position === childIndex && isMenuOpen,
    }), [position, isMenuOpen, hasFocus]);
    return (_jsx(NavBarItemBase, { className: className, role: role, hasFocus: hasFocus, tabIndex: tabIndex, isMenuOpen: isMenuOpen, handleKeys: handleKeys, actionElt: actionElt, ...otherProps, children: children && (_jsxs(_Fragment, { children: [_jsx("i", { className: "glyphicon glyphicon-arrow-xs-down" }, `icon${tabIndex}`), _jsx("ul", { className: "af-nav__list af-nav__list--children", role: "menu", "aria-label": ariaLabel, children: React.Children.map(children, renderChild) }, `list${tabIndex}`)] })) }));
};
export { NavBarItem };
