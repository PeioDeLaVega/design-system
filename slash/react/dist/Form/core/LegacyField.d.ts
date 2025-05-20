import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { FieldForm } from "./FieldForm";
type FieldProps = Omit<ComponentPropsWithoutRef<typeof FieldForm>, "children"> & {
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
    errorId?: string;
};
export declare const LegacyField: ({ id, message, messageType, label, children, forceDisplayMessage, classModifier, className, classNameContainerLabel, classNameContainerInput, isVisible, roleContainer, ariaLabelContainer, isLabelContainerLinkedToInput, errorId, }: FieldProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
