import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/Header.scss";
import { ComponentProps, PropsWithChildren, ReactElement, type ReactNode } from "react";
type HeaderProps = PropsWithChildren<{
    defaultActiveLink?: number;
    previousLink?: ReactNode;
    rightItem?: ReactElement | ReactElement[];
} & ComponentProps<"header">>;
export declare const Header: ({ children, defaultActiveLink, previousLink, rightItem, ...props }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
