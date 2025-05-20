import { type ReactNode } from "react";
import { MessageTypes } from ".";
type InputProps = {
    label: ReactNode;
    children?: ReactNode;
    id?: string;
    classModifier?: string;
    classNameContainerLabel?: string;
    classNameContainerInput?: string;
    isVisible?: boolean;
    roleContainer?: string;
    ariaLabelContainer?: string;
    isLabelContainerLinkedToInput?: boolean;
    forceDisplayMessage?: boolean;
    message?: string;
    messageType?: MessageTypes;
    required?: boolean;
    disabled?: boolean;
    helpMessage?: ReactNode;
    errorId?: string;
};
export declare const Field: ({ classNameContainerInput, classNameContainerLabel, label, forceDisplayMessage, message, messageType, required, classModifier, children, disabled, helpMessage, id, isVisible, roleContainer, ariaLabelContainer, isLabelContainerLinkedToInput, errorId, renderInput, }: InputProps & {
    renderInput: (props: {
        id: string;
        classModifier: string;
    }) => ReactNode;
}) => import("react/jsx-runtime").JSX.Element | null;
export {};
