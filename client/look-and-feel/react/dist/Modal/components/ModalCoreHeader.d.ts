import type { HTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import type { TitleLevel } from "../../Title";
export type ModalCoreHeaderProps = HTMLAttributes<HTMLDivElement> & {
    className?: string;
    title: string;
    subtitle?: string;
    iconTitle?: string;
    levelTitle?: TitleLevel;
    onCancel: (event: MouseEvent | KeyboardEvent) => void;
    closeButtonAriaLabel?: string;
};
export declare const ModalCoreHeader: ({ className, title, subtitle, iconTitle, levelTitle, onCancel, closeButtonAriaLabel, ...props }: ModalCoreHeaderProps) => import("react/jsx-runtime").JSX.Element;
