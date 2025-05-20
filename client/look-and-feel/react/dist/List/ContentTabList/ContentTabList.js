import { jsx as _jsx } from "react/jsx-runtime";
import { List } from "../List";
import "@axa-fr/design-system-look-and-feel-css/dist/List/ContentTabList/ContentTabList.scss";
import { BREAKPOINT, useIsSmallScreen } from "../../utilities";
import { ContentTabItem } from "./ContentTabItem";
export const ContentTabList = ({ items, classModifier, }) => {
    const isMobile = useIsSmallScreen(BREAKPOINT.SM);
    return (_jsx(List, { classModifier: `list large extra-padding content-tab-list ${classModifier}`, children: items.map(({ id, ...item }) => (_jsx(ContentTabItem, { ...item, isMobile: isMobile }, id ?? item.title))) }));
};
