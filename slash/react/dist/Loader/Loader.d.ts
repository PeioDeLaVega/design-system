import "@axa-fr/design-system-slash-css/dist/Loader/Loader.scss";
import React from "react";
type LoaderMode = "none" | "get" | "post" | "delete" | "update" | "error";
type LoaderProps = {
    className?: string;
    mode: LoaderMode;
    text?: string;
    children: React.ReactNode;
    classModifier?: string;
};
export declare const Loader: ({ className, text, children, classModifier, mode, }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
