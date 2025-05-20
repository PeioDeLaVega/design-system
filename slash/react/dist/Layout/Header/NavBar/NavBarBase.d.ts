import { FocusEvent, MouseEvent, ReactNode } from "react";
type Props = {
    isVisible: boolean;
    id?: string;
    toggleMenuId?: string;
    isMenuFocused?: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    classModifier?: string;
    handleKeys: (key: string) => void;
    onFocus: (action: {
        e: FocusEvent<HTMLUListElement>;
    }) => void;
    onBlur: (action: {
        e: FocusEvent<HTMLUListElement>;
    }) => void;
    children?: ReactNode;
};
declare const NavBarBase: ({ isVisible, onClick, id, toggleMenuId, isMenuFocused, className, classModifier, handleKeys, onFocus, onBlur, children, }: Props) => import("react/jsx-runtime").JSX.Element;
export { NavBarBase };
