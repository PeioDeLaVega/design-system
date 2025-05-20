import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/BurgerMenu/BurgerMenu.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Card/Card.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/ClickItem/ClickItem.scss";
import classNames from "classnames";
import { ClickItem, createClickItemParent } from "../../../List/ClickItem";
const BurgerMenu = ({ isOpen, items, setActiveLink, setIsOpen, ...props }) => {
    const handleOnClick = (index) => () => {
        setActiveLink(index);
        setIsOpen(false);
    };
    if (items.length === 0)
        return null;
    return (_jsx("nav", { role: "navigation", "aria-label": "Menu principal mobile", "aria-hidden": !isOpen, className: classNames("af-card", "af-card--list", "af-burger-menu", {
            open: isOpen,
        }), ...props, children: _jsx("ul", { role: "menubar", children: items.map((item, index) => {
                const { key, props: itemProps, type } = item;
                const { children, ...otherProps } = itemProps;
                return (_jsx("li", { className: "af-list__item", role: "none", children: _jsx(ClickItem, { classModifier: "small", onClick: handleOnClick(index), parentClickComponent: createClickItemParent(type, {
                            ...otherProps,
                            role: "menuitem",
                        }), children: children }) }, key ?? `list item ${index}`));
            }) }) }));
};
export { BurgerMenu };
