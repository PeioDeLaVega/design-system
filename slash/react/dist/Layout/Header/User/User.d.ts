import { MouseEvent, ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/User/User.scss";
type Props = {
    children?: ReactNode;
    classModifier?: string;
    className?: string;
    href?: string;
    name: string;
    onClick?: (action: {
        path?: string;
        event: MouseEvent<HTMLAnchorElement>;
    }) => void;
    path?: string;
    profile?: string;
    title?: string;
};
declare const User: ({ children, classModifier, className, href, name, path, profile, onClick, title, }: Props) => import("react/jsx-runtime").JSX.Element;
export { User };
