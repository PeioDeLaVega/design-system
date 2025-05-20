import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatedPopover } from "./AnimatedPopover";
import "@axa-fr/design-system-slash-css/dist/Popover/Popover.scss";
const defaultClassName = "af-popover__container";
const PopoverBase = ({ children, isOpen, placement = "right", className = defaultClassName, classModifier, element, onMouseEnter, onMouseLeave, }) => {
    return (_jsx(AnimatedPopover, { target: children, placement: placement, isOpen: isOpen, className: className, classModifier: classModifier, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, children: element }));
};
export { PopoverBase };
