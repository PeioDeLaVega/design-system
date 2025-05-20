import { type ComponentProps } from "react";
import { NavBar } from "../NavBar";
type TMenuTitleWrapperProps = {
    children: React.ReactNode;
    menuVisible: boolean;
    subtitle: string;
    title: string;
    navBarProps?: Partial<ComponentProps<typeof NavBar>>;
};
declare const MenuTitleWrapper: ({ children, menuVisible, subtitle, title, navBarProps, }: TMenuTitleWrapperProps) => import("react/jsx-runtime").JSX.Element;
export { MenuTitleWrapper };
