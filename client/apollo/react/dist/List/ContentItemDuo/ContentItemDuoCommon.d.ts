import { type ComponentProps, type ComponentType, type ReactNode } from "react";
import { Button } from "../../Button/ButtonCommon";
type ContentItemDuoProps = {
    label: string;
    value: ReactNode;
    isVertical?: boolean;
    className?: string;
    classModifier?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    ButtonComponent: ComponentType<ComponentProps<typeof Button>>;
};
export declare const ContentItemDuo: ({ label, value, isVertical, className, classModifier, buttonText, onButtonClick, ButtonComponent, }: ContentItemDuoProps) => import("react/jsx-runtime").JSX.Element;
export {};
