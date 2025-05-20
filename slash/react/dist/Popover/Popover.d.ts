import React from "react";
import { Placement } from "@floating-ui/react";
import { PopoverModes } from "./Popover.types";
type Props = {
    className?: string;
    classModifier?: string;
    placement?: Placement;
    mode: PopoverModes;
    popoverElement: React.ReactNode;
    children: React.ReactNode;
};
declare const Popover: ({ children, placement, className, classModifier, mode, popoverElement: content, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Popover };
