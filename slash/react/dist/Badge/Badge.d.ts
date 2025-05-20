import { ComponentPropsWithRef, PropsWithChildren } from "react";
import "@axa-fr/design-system-slash-css/dist/Badge/Badge.scss";
type BadgeProps = ComponentPropsWithRef<"span"> & {
    classModifier?: string;
    disabled?: boolean;
};
export declare const Badge: import("react").ForwardRefExoticComponent<Omit<PropsWithChildren<BadgeProps>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
export {};
