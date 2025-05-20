import React from "react";
export type HeaderToggleElement = {
    isOpen: boolean;
    index: number;
    id: string;
};
export type HeaderProps = {
    children: React.ReactNode;
    className?: string;
    classModifier?: string;
    id?: string;
};
declare const Header: ({ children, className, classModifier, id }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export { Header };
