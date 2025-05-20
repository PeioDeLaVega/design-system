import "@axa-fr/design-system-slash-css/dist/Action/Action.scss";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Popover } from "../Popover";
type HelpProps = Omit<ComponentPropsWithoutRef<typeof Popover>, "popoverElement"> & {
    helpButtonContent?: ReactNode;
};
export declare const HelpButton: ({ className, classModifier, children, mode, placement, helpButtonContent, }: HelpProps) => import("react/jsx-runtime").JSX.Element;
export {};
