import { type ComponentProps, type ElementType, type ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Link/Link.scss";
export type LinkProps<C extends ElementType> = {
    component?: C;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    disabled?: boolean;
} & ComponentProps<C>;
export declare const Link: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
