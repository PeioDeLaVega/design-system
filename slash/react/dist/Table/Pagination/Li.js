import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const onClick = ({ onChange, value }) => (event) => {
    event.preventDefault();
    onChange({
        value: Number(value),
    });
};
const Li = ({ isVisible, active, value, ...props }) => {
    if (!isVisible) {
        return null;
    }
    return (_jsx("li", { className: classNames("af-pager__item", {
            "af-pager__item--active": active,
        }), children: _jsx("a", { className: "af-pager__item-link", href: "/#", onClick: onClick({ ...props, value }), children: _jsx("span", { children: value }) }) }));
};
export { Li };
