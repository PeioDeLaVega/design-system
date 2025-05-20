import { ComponentProps, ReactElement } from "react";
import { NavBarItemBase } from "./NavBarItemBase";
type ChildrenProps = {
    classModifier?: string;
    tabIndex?: number;
    hasFocus?: boolean;
    [key: string]: unknown;
};
type Props = Omit<ComponentProps<typeof NavBarItemBase>, "handleKeys" | "isMenuOpen" | "position"> & {
    ariaLabel?: string;
    children?: ReactElement<ChildrenProps> | ReactElement<ChildrenProps>[];
};
declare const NavBarItem: ({ children, hasFocus, actionElt, ariaLabel, tabIndex, role, className, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { NavBarItem };
