import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "..";
const StepBase = ({ children, id, title, className, classModifier }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-steps-list-step");
    return (_jsx("li", { className: componentClassName, title: title, children: children }, id));
};
export { StepBase };
