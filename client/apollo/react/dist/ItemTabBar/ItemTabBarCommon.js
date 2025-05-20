import { jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const itemTabBarVariants = {
    tabBar: "tabBar",
    header: "header",
};
export const ItemTabBar = forwardRef(({ variant = "tabBar", isActive = false, icon, title, className, ...props }, ref) => {
    const classNames = getComponentClassName("af-item-tab-bar", className, variant);
    return (_jsxs("button", { ref: ref, type: "button", role: "tab", "aria-selected": isActive, className: classNames, ...props, children: [icon, title] }));
});
ItemTabBar.displayName = "ItemTabBar";
