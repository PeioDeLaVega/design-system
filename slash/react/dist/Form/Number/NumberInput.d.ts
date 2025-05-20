import "@axa-fr/design-system-slash-css/dist/common/grid.scss";
import "@axa-fr/design-system-slash-css/dist/common/reboot.scss";
import "@axa-fr/design-system-slash-css/dist/Form/core/FormCore.scss";
import { ComponentPropsWithoutRef, ComponentPropsWithRef, ReactNode } from "react";
import { LegacyField } from "../core";
import { Number } from "./Number";
type Props = ComponentPropsWithoutRef<typeof LegacyField> & ComponentPropsWithRef<typeof Number> & {
    helpMessage?: ReactNode;
    children?: ReactNode;
};
export declare const NumberInput: ({ message, children, helpMessage, id, label, classNameContainerLabel, classNameContainerInput, forceDisplayMessage, messageType, isVisible, className, disabled, classModifier, required, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
