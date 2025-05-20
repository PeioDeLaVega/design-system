import { type ComponentProps, type ComponentType, type MouseEventHandler } from "react";
import { Button } from "../../Button/ButtonCommon";
type ItemLabelProps = {
    label?: string;
    description?: string;
    required?: boolean;
    inputId: string;
    idLabel: string;
    sideButtonLabel?: string;
    onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
    buttonLabel?: string;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
    ButtonComponent: ComponentType<ComponentProps<typeof Button>>;
};
export declare const ItemLabel: ({ label, description, required, inputId, idLabel, sideButtonLabel, onSideButtonClick, buttonLabel, onButtonClick, ButtonComponent, }: ItemLabelProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
