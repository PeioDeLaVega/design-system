import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
const Th = ({ children, id, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-table__th");
    return (_jsx("th", { className: componentClassName, id: id, ...otherProps, children: children }, id));
};
export { Th };
