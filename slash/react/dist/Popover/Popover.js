import { jsx as _jsx } from "react/jsx-runtime";
import { PopoverClick } from "./PopoverClick";
import { PopoverOver } from "./PopoverOver";
const Popover = ({ children, placement = "top", className, classModifier, mode = "click", popoverElement: content, }) => {
    const Component = mode === "click" ? PopoverClick : PopoverOver;
    return (_jsx(Component, { className: className, classModifier: classModifier, placement: placement, element: content, children: children }));
};
export { Popover };
