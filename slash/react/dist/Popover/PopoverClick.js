import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { PopoverBase } from "./PopoverBase";
export const PopoverClick = ({ children, placement, className, classModifier, element, }) => {
    const wrapperRef = React.useRef(null);
    const [isOpen, setOpen] = React.useState(false);
    const [isPopoverHover, setPopoverHover] = React.useState(false);
    const handleClick = (event, isOpenValue) => {
        if (isPopoverHover || !wrapperRef.current || isOpenValue === isOpen) {
            event.stopPropagation();
            return;
        }
        setOpen((oldIsOpen) => isOpenValue ?? !oldIsOpen);
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleClick(event);
        }
    };
    const handleMouseEnterPopover = () => {
        setPopoverHover(true);
    };
    const handleMouseLeavePopover = () => {
        setPopoverHover(false);
    };
    return (_jsx("div", { role: "button", tabIndex: 0, ref: wrapperRef, className: "af-popover__wrapper af-popover__wrapper--click", onKeyDown: handleKeyDown, onClick: handleClick, onBlur: (event) => handleClick(event, false), children: _jsx(PopoverBase, { onMouseEnter: handleMouseEnterPopover, onMouseLeave: handleMouseLeavePopover, isOpen: isOpen, placement: placement, className: className, classModifier: classModifier, element: element, children: children }) }));
};
