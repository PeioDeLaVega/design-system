import { HTMLAttributes, KeyboardEvent, ReactElement } from "react";
type Props = HTMLAttributes<HTMLLIElement> & {
    actionElt: ReactElement<HTMLAttributes<HTMLElement>>;
    handleKeys: (event: KeyboardEvent<HTMLLIElement>) => void;
    hasFocus?: boolean;
    isMenuOpen?: boolean;
    classModifier?: string;
};
export declare const NavBarItemBase: ({ tabIndex, role, children, hasFocus, handleKeys, isMenuOpen, className, classModifier, actionElt, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
