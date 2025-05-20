import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/common/reboot.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Footer/Footer.scss";
import expandMore from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import classNames from "classnames";
import { useCallback, useState } from "react";
import { MenuIcons } from "./MenuIcons";
import { MenuLink } from "./MenuLink";
import { Svg } from "../../Svg";
export const Footer = ({ links, socialMedias = [], copyright, expandLinkText, id, }) => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const handleClick = useCallback(() => {
        setIsAboutOpen((isOpen) => !isOpen);
    }, []);
    return (_jsxs("footer", { id: id, className: "af-footer", children: [_jsxs("div", { className: "af-footer__footerTop", children: [_jsxs("nav", { className: "af-footer__menuTop", "aria-label": expandLinkText, children: [_jsxs("button", { type: "button", onClick: handleClick, className: "af-footer__menuAboutTrigger", children: [_jsx("span", { className: "af-footer__menuAboutTriggerText", children: expandLinkText }), _jsx(Svg, { src: expandMore, className: classNames("af-footer__icon", "af-footer__iconTrigger", isAboutOpen && "af-footer__iconTrigger--display") })] }), _jsx(MenuLink, { links: links, isAboutOpen: isAboutOpen })] }), _jsx(MenuIcons, { socialMedias: socialMedias })] }), _jsx("div", { className: "af-footer__footerBottom", children: _jsx("div", { className: "af-footer__footerBottomWidth", children: _jsx("span", { className: "af-footer__textCopyright", children: copyright }) }) })] }));
};
