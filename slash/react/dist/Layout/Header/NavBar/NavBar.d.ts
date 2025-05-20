import React, { type ReactNode } from "react";
type Props = {
    id?: string;
    toggleMenuId?: string;
    positionInit?: number;
    className?: string;
    isVisible: boolean;
    children: ReactNode;
    onClick: (event: React.MouseEvent) => void;
};
declare const NavBar: ({ positionInit, children, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { NavBar };
