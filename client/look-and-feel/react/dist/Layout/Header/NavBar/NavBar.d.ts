import { type ComponentPropsWithoutRef, type PropsWithChildren, type Dispatch, type SetStateAction } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/NavBar/NavBar.scss";
type NavBarProps = {
    activeLink?: number;
    setActiveLink: Dispatch<SetStateAction<number | undefined>>;
} & ComponentPropsWithoutRef<"nav">;
declare const NavBar: ({ activeLink, children, setActiveLink, ...props }: PropsWithChildren<NavBarProps>) => import("react/jsx-runtime").JSX.Element | null;
export { NavBar };
