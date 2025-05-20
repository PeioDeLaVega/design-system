import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/HeaderTitle/HeaderTitle.scss";
type Props = {
    children?: ReactNode;
    classModifier?: string;
    className?: string;
    isSticky?: boolean;
    subtitle?: string;
    title: string;
    toggleMenu?: () => void;
};
declare const HeaderTitle: ({ children, classModifier, className, isSticky, subtitle, title, toggleMenu, }: Props) => import("react/jsx-runtime").JSX.Element;
export { HeaderTitle };
