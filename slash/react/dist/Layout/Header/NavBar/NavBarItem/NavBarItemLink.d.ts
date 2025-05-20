import { AllHTMLAttributes, RefObject } from "react";
type Props = AllHTMLAttributes<HTMLAnchorElement> & {
    handleKeys: () => void;
    isMenuOpen?: boolean;
    refCallBackFocus: RefObject<HTMLAnchorElement>;
};
declare const NavBarItemLink: ({ className, label, href, tabIndex, role, refCallBackFocus, isMenuOpen, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { NavBarItemLink };
