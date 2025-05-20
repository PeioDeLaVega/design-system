import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import logo from "@axa-fr/design-system-look-and-feel-css/logo-axa.svg";
import { Children, isValidElement, useCallback, useEffect, useMemo, useState, } from "react";
import menu from "@material-symbols/svg-400/outlined/menu.svg";
import { NavBar } from "./NavBar";
import { PreviousLink } from "./PreviousLink/PreviousLink";
import { Button, IconBg, Svg } from "../..";
import { BurgerMenu } from "./BurgerMenu";
import { BREAKPOINT } from "../../utilities";
export const Header = ({ children, defaultActiveLink, previousLink, rightItem, ...props }) => {
    const [activeLink, setActiveLink] = useState(defaultActiveLink);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const resetActiveLink = useCallback(() => setActiveLink(defaultActiveLink), [defaultActiveLink]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > BREAKPOINT.MD && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);
    const burgerMenuItems = useMemo(() => {
        const mapValidElements = (items) => (Children.map(items, (child) => isValidElement(child) && child) ?? []).filter(Boolean);
        const validLinks = mapValidElements(children);
        if (!rightItem) {
            return [...validLinks];
        }
        if (Array.isArray(rightItem)) {
            return [...validLinks, ...mapValidElements(rightItem)];
        }
        return [...validLinks, rightItem];
    }, [children, rightItem]);
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: "af-header", ...props, children: [_jsxs("div", { className: "af-header-container", children: [_jsxs("div", { className: "af-header-left-item", children: [_jsx("img", { className: "af-logo", src: logo, alt: "logo AXA" }), _jsx(NavBar, { activeLink: activeLink, setActiveLink: setActiveLink, children: children })] }), rightItem && _jsx("div", { className: "af-header-right-item", children: rightItem }), burgerMenuItems && burgerMenuItems.length > 0 && (_jsx(Button, { "aria-label": isOpen ? "Fermer le menu" : "Ouvrir le menu", onClick: toggleMenu, variant: "ghost", children: _jsx(IconBg, { children: _jsx(Svg, { src: menu, "aria-hidden": "true" }) }) }))] }), _jsx(BurgerMenu, { isOpen: isOpen, items: burgerMenuItems, setActiveLink: setActiveLink, setIsOpen: setIsOpen })] }), _jsx(PreviousLink, { handleClick: resetActiveLink, children: previousLink }), burgerMenuItems && burgerMenuItems.length > 0 && (_jsx("div", { className: `af-header-overlay ${isOpen ? "open" : ""}` }))] }));
};
