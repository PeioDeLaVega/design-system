import React from "react";
import { Placement } from "@floating-ui/react";
type PropsAnimatedPopover = {
    placement: Placement;
    children: React.ReactNode;
    isOpen: boolean;
    target: React.ReactNode;
    className?: string;
    classModifier?: string;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
};
export declare const AnimatedPopover: ({ placement, children, isOpen, target, className, classModifier, onMouseEnter, onMouseLeave, }: PropsAnimatedPopover) => import("react/jsx-runtime").JSX.Element;
export {};
