import type { ReactNode } from "react";
import type { TitleLevel } from ".";
type TitleTextProps = {
    title: ReactNode;
    firstSubtitle?: string;
    secondSubtitle?: string;
    level?: TitleLevel;
};
export declare const TitleWithSubtitles: ({ title, firstSubtitle, secondSubtitle, level, }: TitleTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
