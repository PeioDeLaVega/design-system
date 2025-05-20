import { jsx as _jsx } from "react/jsx-runtime";
import { getComponentClassName } from "..";
const defaultClassName = "af-steps-new";
const Steps = ({ children, className = defaultClassName, classModifier, }) => {
    const componentClassName = getComponentClassName(className, classModifier, defaultClassName);
    return (_jsx("div", { className: componentClassName, children: _jsx("ol", { className: "af-steps-list", children: children }) }));
};
export { Steps };
