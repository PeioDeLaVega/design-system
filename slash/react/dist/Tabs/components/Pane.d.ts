import React from "react";
type PaneComponentProps = {
    active: boolean;
    className?: string;
    children?: React.ReactNode;
};
declare const Pane: ({ children, className, active, }: PaneComponentProps) => import("react/jsx-runtime").JSX.Element | null;
export { Pane };
