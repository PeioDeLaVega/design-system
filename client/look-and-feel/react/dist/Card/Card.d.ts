import { type ComponentProps } from "react";
type CardProps = ComponentProps<"section"> & ComponentProps<"button"> & {
    classModifier?: string;
};
export declare const Card: ({ children, className, classModifier, onClick, ...otherProps }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
