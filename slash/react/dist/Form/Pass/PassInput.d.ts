import { ComponentProps, ReactNode } from "react";
import { LegacyField } from "../core";
import { Pass } from "./Pass";
type PassProps = ComponentProps<typeof Pass>;
type Props = ComponentProps<typeof LegacyField> & Omit<PassProps, "onToggleType" | "type"> & {
    helpMessage?: ReactNode;
    score?: string;
};
declare const PassInput: ({ message, children, helpMessage, id, disabled, label, messageType, isVisible, forceDisplayMessage, className, classModifier, classNameContainerLabel, classNameContainerInput, score, required, ...passProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { PassInput };
