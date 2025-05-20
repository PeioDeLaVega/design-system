import type { DetailsHTMLAttributes, ReactNode } from "react";
export type CollapseProps = {
    id: string;
    title: ReactNode;
    children?: ReactNode;
    open?: boolean;
    name?: string;
    onToggle?: DetailsHTMLAttributes<HTMLDetailsElement>["onToggle"];
    className?: string;
    classModifier?: string;
};
export declare const CollapseCard: ({ children, name, title, id, open, onToggle, className, classModifier, }: CollapseProps) => import("react/jsx-runtime").JSX.Element;
