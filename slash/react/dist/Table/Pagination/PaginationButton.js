import { jsx as _jsx } from "react/jsx-runtime";
const PaginationButton = ({ isVisible, active, children, value, onChange, }) => {
    if (!isVisible) {
        return null;
    }
    if (active) {
        return (_jsx("li", { className: "af-pager__item", children: _jsx("a", { className: "af-pager__item-link", href: "/#", role: "button", onClick: (e) => {
                    e.preventDefault();
                    onChange({ value });
                }, children: children }) }));
    }
    return (_jsx("li", { className: "af-pager__item af-pager__item--disabled", children: _jsx("span", { className: "af-pager__item-nolink", children: children }) }));
};
export { PaginationButton };
