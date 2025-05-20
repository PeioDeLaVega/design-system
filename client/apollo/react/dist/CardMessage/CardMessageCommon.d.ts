import { ComponentPropsWithoutRef } from "react";
export declare const cardMessageVariants: {
    readonly info: "info";
    readonly warning: "warning";
    readonly error: "error";
    readonly neutral: "neutral";
};
export type CardMessageVariants = keyof typeof cardMessageVariants;
export type CardMessageProps = ComponentPropsWithoutRef<"div"> & {
    variant?: CardMessageVariants;
    title?: string;
    text: string;
};
export declare const CardMessage: ({ variant, title, text, className, ...props }: CardMessageProps) => import("react/jsx-runtime").JSX.Element;
