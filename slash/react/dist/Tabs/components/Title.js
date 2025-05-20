import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { getComponentClassName } from "../..";
const Title = ({ active, onChange, children, classModifier, className, enable, id, }) => {
    const newClassModifier = classNames(classModifier, {
        disabled: enable === false,
        active,
    });
    const componentClassName = getComponentClassName(className, newClassModifier, "af-tabs__item");
    return (_jsx("li", { className: componentClassName, children: _jsx("button", { type: "button", id: id, className: "af-tabs__link", onClick: (event) => onChange(event, id), children: children }) }));
};
Title.displayName = "Title";
export { Title };
