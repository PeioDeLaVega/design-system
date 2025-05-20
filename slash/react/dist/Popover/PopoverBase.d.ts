import React from "react";
import { Placement } from "@floating-ui/react";
import "@axa-fr/design-system-slash-css/dist/Popover/Popover.scss";
type Props = {
    placement?: Placement;
    className?: string;
    classModifier?: string;
    element: React.ReactNode;
    children: React.ReactNode | React.ReactNode[];
    isOpen: boolean;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
};
declare const PopoverBase: ({ children, isOpen, placement, className, classModifier, element, onMouseEnter, onMouseLeave, }: Props) => import("react/jsx-runtime").JSX.Element;
export { PopoverBase };
