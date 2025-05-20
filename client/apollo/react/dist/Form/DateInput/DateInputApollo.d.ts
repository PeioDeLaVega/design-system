import "@axa-fr/design-system-apollo-css/dist/Form/DateInput/DateInputApollo.scss";
import { type ComponentProps } from "react";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
export declare const DateInput: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value"> & {
    classModifier?: string;
    defaultValue?: Date | string;
    value?: Date | string;
    helper?: string;
    error?: string;
    success?: string;
    label: ComponentProps<typeof import("../ItemLabel/ItemLabelCommon").ItemLabel>["label"];
    type?: "text" | "date";
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
}>, "ref"> & import("react").RefAttributes<HTMLInputElement>, "ItemMessageComponent" | "ItemLabelComponent">, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
