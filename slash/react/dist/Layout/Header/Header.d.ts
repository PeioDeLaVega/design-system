import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Header.scss";
type Props = {
    children: ReactNode;
    classModifier?: string;
    className?: string;
};
declare const Header: ({ classModifier, className, children }: Props) => import("react/jsx-runtime").JSX.Element;
export { Header };
