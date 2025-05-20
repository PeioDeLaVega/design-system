import "@axa-fr/design-system-slash-css/dist/Layout/Footer/Footer.scss";
type FooterProps = {
    href?: string;
    title?: string;
    alt?: string;
    icon?: string;
    className?: string;
};
export declare const Footer: import("react").ForwardRefExoticComponent<FooterProps & {
    children?: import("react").ReactNode | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export {};
