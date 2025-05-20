import { jsx as _jsx } from "react/jsx-runtime";
const LiPoint = ({ isVisible, children }) => {
    if (!isVisible) {
        return null;
    }
    return (_jsx("li", { className: "af-pager__item af-pager__item--disabled", children: _jsx("span", { className: "af-pager__item-link", children: children }) }));
};
export { LiPoint };
