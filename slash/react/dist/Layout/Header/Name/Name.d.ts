import { MouseEvent } from "react";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Name/Name.scss";
import "@axa-fr/design-system-slash-css/dist/Layout/Header/Logo/Logo.scss";
type Props = {
    alt?: string;
    classModifier?: string;
    className?: string;
    img?: string;
    onClick?: (action: {
        event: MouseEvent<HTMLAnchorElement>;
    }) => void;
    subtitle?: string;
    title: string;
};
declare const Name: ({ alt, classModifier, className, img, onClick, subtitle, title, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Name };
