import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
const Tr = ({ children, id, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-table__tr");
    return (_jsx("tr", { className: componentClassName, ...otherProps, children: children }, id));
};
export { Tr };
