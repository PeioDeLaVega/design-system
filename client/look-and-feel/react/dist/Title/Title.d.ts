import { type ReactNode } from "react";
import { TitleLevel, TitleSize } from "./constants";
type TitleProps = {
    children: ReactNode;
    firstSubtitle?: string;
    secondSubtitle?: string;
    icon?: ReactNode;
    className?: string;
    classModifier?: string;
    size?: TitleSize;
    level?: TitleLevel;
};
export declare const Title: ({ children: title, className, classModifier, firstSubtitle, icon, secondSubtitle, size, level, }: TitleProps) => import("react/jsx-runtime").JSX.Element;
export {};
