import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "../..";
const Body = ({ children, className, classModifier, ...otherProps }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-modal__body");
    return (_jsx("section", { className: componentClassName, ...otherProps, children: children }));
};
export { Body };
