import { type ComponentPropsWithoutRef, type Dispatch, type ReactElement, type SetStateAction } from "react";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/BurgerMenu/BurgerMenu.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Card/Card.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/List.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/List/ClickItem/ClickItem.scss";
type BurgerMenuProps = {
    isOpen: boolean;
    items: ReactElement[];
    setActiveLink: Dispatch<SetStateAction<number | undefined>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
} & ComponentPropsWithoutRef<"nav">;
declare const BurgerMenu: ({ isOpen, items, setActiveLink, setIsOpen, ...props }: BurgerMenuProps) => import("react/jsx-runtime").JSX.Element | null;
export { BurgerMenu };
