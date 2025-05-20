import "@axa-fr/design-system-slash-css/dist/Form/MultiSelect/MultiSelect.scss";
import { type ComponentProps, type ReactNode } from "react";
import { LegacyField } from "../core";
import { MultiSelect } from "./MultiSelect";
type Props = ComponentProps<typeof LegacyField> & ComponentProps<typeof MultiSelect> & {
    helpMessage?: ReactNode;
};
declare const MultiSelectInput: ({ classModifier, message, children, helpMessage, id, disabled, classNameContainerLabel, classNameContainerInput, label, messageType, isVisible, forceDisplayMessage, className, required, ...multiSelectProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { MultiSelectInput };
