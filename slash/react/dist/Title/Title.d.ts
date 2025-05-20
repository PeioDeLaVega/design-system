import "@axa-fr/design-system-slash-css/dist/Title/Title.scss";
import { ComponentPropsWithRef, PropsWithChildren, ReactElement } from "react";
type Headings = "h2" | "h3" | "h4";
type TitleProps = ComponentPropsWithRef<"h2"> & {
    classModifier?: string;
    heading?: Headings;
    contentLeft?: ReactElement;
    contentRight?: ReactElement;
};
export declare const Title: import("react").ForwardRefExoticComponent<Omit<PropsWithChildren<TitleProps>, "ref"> & import("react").RefAttributes<HTMLHeadingElement>>;
export {};
