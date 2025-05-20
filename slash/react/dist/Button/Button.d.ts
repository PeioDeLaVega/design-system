import "@axa-fr/design-system-slash-css/dist/Button/Button.scss";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
type ButtonProps = {
    classModifier?: string;
} & ComponentPropsWithoutRef<"button">;
export declare const Button: ({ children, classModifier, className, ...args }: PropsWithChildren<ButtonProps>) => import("react/jsx-runtime").JSX.Element;
export {};
