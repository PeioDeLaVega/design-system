import type { MouseEventHandler } from "react";
export type HeaderProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    onCancel: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    classModifier?: string;
    closeButtonAriaLabel?: string;
};
declare const Header: ({ className, classModifier, title, closeButtonAriaLabel, onCancel, ...props }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export { Header };
