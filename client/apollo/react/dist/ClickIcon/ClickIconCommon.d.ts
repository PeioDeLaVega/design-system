import { ComponentPropsWithRef } from "react";
import { IconVariants } from "../Icon/IconCommon";
export type ClickIconProps = ComponentPropsWithRef<"button"> & {
    src: string;
    className?: string;
    iconVariant?: IconVariants;
    iconClassName?: string;
};
export declare const ClickIcon: ({ src, className, iconVariant, iconClassName, ...props }: ClickIconProps) => import("react/jsx-runtime").JSX.Element;
