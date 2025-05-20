import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { NavBar } from "../NavBar";
const MenuTitleWrapper = ({ children, menuVisible, subtitle, title, navBarProps, }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(menuVisible);
    const handleClick = useCallback(() => {
        const { body } = document;
        body.classList.toggle("af-menu-open");
        setIsMenuVisible((prev) => !prev);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(NavBar, { isVisible: isMenuVisible, onClick: handleClick, ...navBarProps, children: children }), _jsx(HeaderTitle, { title: title, subtitle: subtitle, toggleMenu: handleClick })] }));
};
export { MenuTitleWrapper };
