import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../utilities";
const Td = ({ children, id, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-table__cell");
    return (_jsx("td", { className: componentClassName, id: id, ...otherProps, children: children }, id));
};
export { Td };
