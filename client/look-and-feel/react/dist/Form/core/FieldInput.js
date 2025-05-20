import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "./getComponentClassName";
export const FieldInput = ({ children, className = "", classModifier = "", isVisible = true, }) => {
    if (!isVisible) {
        return null;
    }
    const newClassName = getComponentClassName(className, classModifier, "");
    return _jsx("div", { className: newClassName, children: children });
};
