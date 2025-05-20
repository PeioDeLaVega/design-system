import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
const THead = ({ children, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-table__thead");
    return (_jsx("thead", { className: componentClassName, ...otherProps, children: children }));
};
export { THead };
