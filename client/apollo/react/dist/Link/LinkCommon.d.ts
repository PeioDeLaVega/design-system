import { ComponentPropsWithoutRef, PropsWithChildren, type ReactNode } from "react";
export declare const linkVariants: {
    readonly default: "default";
    readonly underline: "underline";
    readonly inverse: "inverse";
};
export type LinkVariants = keyof typeof linkVariants;
type LinkProps = {
    variant?: LinkVariants;
    openInNewTab?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
    classModifier?: string;
} & ComponentPropsWithoutRef<"a">;
export declare const Link: ({ href, variant, openInNewTab, leftIcon, rightIcon, children, className, classModifier, ...props }: PropsWithChildren<LinkProps>) => import("react/jsx-runtime").JSX.Element;
export {};
