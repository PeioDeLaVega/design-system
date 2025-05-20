import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Tabs/Tabs.scss";
import classNames from "classnames";
import { useCallback, useRef, useState } from "react";
export var Direction;
(function (Direction) {
    Direction["center"] = "center";
})(Direction || (Direction = {}));
export const TabsClient = ({ items, preSelectedTabIndex, direction, }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(preSelectedTabIndex || 0);
    const buttonRefs = useRef([]);
    const tablistRef = useRef(null);
    const totalTabs = items.length;
    const isActive = (index) => index === selectedTabIndex;
    const onChangeTab = useCallback((e) => {
        const firstTabIndex = 0;
        const lastTabIndex = totalTabs - 1;
        const goToNextTab = (nextTabIndex) => {
            setSelectedTabIndex(nextTabIndex);
            buttonRefs.current[nextTabIndex].focus();
            e.stopPropagation();
            e.preventDefault();
        };
        switch (e.key) {
            case "ArrowRight":
                goToNextTab(selectedTabIndex < lastTabIndex
                    ? selectedTabIndex + 1
                    : firstTabIndex);
                break;
            case "ArrowLeft":
                goToNextTab(selectedTabIndex > firstTabIndex
                    ? selectedTabIndex - 1
                    : lastTabIndex);
                break;
            case "Home":
                goToNextTab(firstTabIndex);
                break;
            case "End":
                goToNextTab(lastTabIndex);
                break;
            default:
                break;
        }
    }, [selectedTabIndex, totalTabs]);
    return (_jsxs("div", { className: classNames("af-tabs-client", direction === Direction.center ? `af-tabs-client--center` : ""), children: [_jsx("div", { role: "tablist", ref: tablistRef, children: items.map((item, index) => (_jsxs("button", { role: "tab", id: `tab-${index}`, "aria-selected": isActive(index), "aria-controls": `tabpanel-${index}`, onKeyDown: onChangeTab, onClick: () => setSelectedTabIndex(index), ref: (element) => {
                        buttonRefs.current[index] = element;
                    }, type: "button", tabIndex: isActive(index) ? 0 : -1, children: [item.icon, _jsx("span", { children: item.title })] }, `tab-${item.title}`))) }), items.map((item, index) => (_jsx("div", { role: "tabpanel", "aria-hidden": !isActive(index), id: `tabpanel-${index}`, "aria-labelledby": `tab-${index}`, children: item.content }, `tabpanel-${item.title}`)))] }));
};
