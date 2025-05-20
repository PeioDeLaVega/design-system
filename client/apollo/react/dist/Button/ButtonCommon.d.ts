import type { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";
export declare const buttonVariants: {
    readonly primary: "primary";
    readonly "primary-business": "primary-business";
    readonly "primary-inverse": "primary-inverse";
    readonly secondary: "secondary";
    readonly "secondary-inverse": "secondary-inverse";
    readonly tertiary: "tertiary";
    readonly ghost: "ghost";
};
export type ButtonVariants = keyof typeof buttonVariants;
type ButtonProps = {
    variant?: ButtonVariants;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    loading?: boolean;
} & ComponentPropsWithoutRef<"button">;
export declare const Button: ({ children, className, variant, iconLeft, iconRight, disabled, loading, ...args }: PropsWithChildren<ButtonProps>) => import("react/jsx-runtime").JSX.Element;
export {};
