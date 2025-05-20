import { PropsWithChildren, ReactNode } from "react";
export type TimelineVerticalProps = PropsWithChildren<{
    title: string;
    tag: ReactNode;
    className?: string;
}>;
export declare const TimelineVertical: ({ title, children, tag, className, }: TimelineVerticalProps) => import("react/jsx-runtime").JSX.Element;
