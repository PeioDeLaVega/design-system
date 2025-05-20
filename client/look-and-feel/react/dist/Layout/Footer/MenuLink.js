import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { BREAKPOINT, useIsSmallScreen } from "../../utilities";
export const MenuLink = ({ links, isAboutOpen = false }) => {
    const isSmallScreen = useIsSmallScreen(BREAKPOINT.MD);
    if (links.length === 0) {
        return null;
    }
    return (_jsx("div", { className: classNames("af-footer__menuLinks", isAboutOpen && "af-footer__menuLinks--display"), children: links.map((menuItem) => (_jsx("a", { className: "af-footer__linkItem", href: menuItem.link, target: menuItem.openInCurrentTab ? "_top" : "_blank", rel: "noreferrer", tabIndex: isSmallScreen && !isAboutOpen ? -1 : undefined, children: menuItem.text }, menuItem.text))) }));
};
