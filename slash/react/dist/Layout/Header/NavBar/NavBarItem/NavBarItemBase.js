import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, } from "react";
import { getComponentClassName } from "../../../../utilities";
import { handleLinkFocus } from "./NavBarItemBase.helpers";
export const NavBarItemBase = ({ tabIndex = -1, role = "menuitem", children, hasFocus, handleKeys, isMenuOpen, className, classModifier, actionElt, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-nav__item");
    const ref = useRef(null);
    useEffect(() => {
        handleLinkFocus(ref?.current, hasFocus, isMenuOpen);
    }, [hasFocus, isMenuOpen]);
    const openClass = useMemo(() => (hasFocus && isMenuOpen && children ? "af-nav__item--open" : ""), [children, hasFocus, isMenuOpen]);
    return (_jsxs("li", { className: `${componentClassName} ${openClass}`, role: "none", onKeyDown: (e) => {
            e.preventDefault();
            handleKeys(e);
        }, children: [_jsx(actionElt.type, { ...actionElt.props, ...otherProps, role: role, tabIndex: tabIndex, "aria-expanded": isMenuOpen, ref: ref }, actionElt.key), children] }));
};
