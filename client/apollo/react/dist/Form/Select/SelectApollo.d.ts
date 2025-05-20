import "@axa-fr/design-system-apollo-css/dist/Form/Select/SelectApollo.scss";
import { type ComponentProps } from "react";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
export declare const Select: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").ClassAttributes<HTMLSelectElement> & import("react").SelectHTMLAttributes<HTMLSelectElement> & {
    id?: string;
    classModifier?: string;
    label?: ComponentProps<typeof import("../ItemLabel/ItemLabelCommon").ItemLabel>["label"];
    error?: string;
    success?: string;
    placeholder?: string;
    buttonLabel?: string;
    description?: string;
    helper?: string;
    ItemLabelComponent: import("react").ComponentType<Omit<ComponentProps<typeof import("../ItemLabel/ItemLabelCommon").ItemLabel>, "ButtonComponent">>;
    ItemMessageComponent: import("react").ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<{
    label?: string;
    description?: string;
    required?: boolean;
    inputId: string;
    idLabel: string;
    sideButtonLabel?: string;
    onSideButtonClick?: import("react").MouseEventHandler<HTMLButtonElement>;
    buttonLabel?: string;
    onButtonClick?: import("react").MouseEventHandler<HTMLButtonElement>;
    ButtonComponent: import("react").ComponentType<ComponentProps<typeof import("../..").Button>>;
}>, "ref"> & import("react").RefAttributes<HTMLSelectElement>, "ItemMessageComponent" | "ItemLabelComponent">, "ref"> & import("react").RefAttributes<HTMLSelectElement>>;
