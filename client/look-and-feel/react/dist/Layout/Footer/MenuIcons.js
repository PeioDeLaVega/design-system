import { jsx as _jsx } from "react/jsx-runtime";
import { DynamicIcon } from "./DynamicIcons";
export const MenuIcons = ({ socialMedias }) => {
    if (socialMedias.length === 0) {
        return null;
    }
    return (_jsx("nav", { className: "af-footer__footerMenuIcons", children: socialMedias.map((socialItem) => (_jsx("a", { "aria-label": `social media ${socialItem.icon}`, className: "af-footer__menuIconLinks", href: socialItem.link, target: "_blank", rel: "noopener noreferrer", children: _jsx(DynamicIcon, { iconName: socialItem.icon }) }, socialItem.icon))) }));
};
