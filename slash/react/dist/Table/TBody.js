import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "..";
const TBody = ({ children, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-table__body");
    return (_jsx("tbody", { className: componentClassName, ...otherProps, children: children }));
};
export { TBody };
