import type { ReactNode } from "react";
import { HeadingLevel } from "./types";
type HeadingTextProps = {
    title: ReactNode;
    firstSubtitle?: ReactNode;
    secondSubtitle?: ReactNode;
    titleComponent?: `h${HeadingLevel}`;
};
export declare const HeadingWithSubheadings: ({ title, firstSubtitle, secondSubtitle, titleComponent: TitleComponent, }: HeadingTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
