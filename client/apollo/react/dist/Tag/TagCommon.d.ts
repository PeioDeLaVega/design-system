import { type ComponentProps } from "react";
export declare const tagVariants: {
    readonly info: "info";
    readonly success: "success";
    readonly warning: "warning";
    readonly error: "error";
    readonly neutral: "neutral";
};
export type TagVariants = keyof typeof tagVariants;
export type TagProps = ComponentProps<"div"> & {
    variant?: TagVariants;
};
export declare const Tag: ({ children, className, variant, ...divProps }: TagProps) => import("react/jsx-runtime").JSX.Element;
