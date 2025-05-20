import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { PopoverBase } from "./PopoverBase";
export const PopoverOver = ({ children, placement, className, classModifier, element: content, }) => {
    const [isOpen, setOpen] = React.useState(false);
    const handleMouseEnter = () => {
        setOpen(true);
    };
    const handleMouseLeave = () => {
        setOpen(false);
    };
    return (_jsx("div", { role: "button", tabIndex: 0, className: "af-popover__wrapper af-popover__wrapper--over", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onFocus: handleMouseEnter, onBlur: handleMouseLeave, children: _jsx(PopoverBase, { isOpen: isOpen, placement: placement, className: className, classModifier: classModifier, element: content, children: children }) }));
};
