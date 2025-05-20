import { jsx as _jsx } from "react/jsx-runtime";
const defaultClassName = "af-nav__link";
const NavBarItemLink = ({ className = defaultClassName, label, href = "#", tabIndex = -1, role = "menuitem", refCallBackFocus, isMenuOpen = false, ...otherProps }) => (_jsx("a", { className: className, ref: refCallBackFocus, role: role, href: href, tabIndex: tabIndex, "aria-expanded": isMenuOpen, ...otherProps, children: label }));
export { NavBarItemLink };
