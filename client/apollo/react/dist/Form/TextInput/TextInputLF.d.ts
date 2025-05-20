import "@axa-fr/design-system-apollo-css/dist/Form/TextInput/TextInputLF.scss";
import { type ComponentProps } from "react";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
export declare const TextInput: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> & {
    unit?: React.ReactNode;
    classModifier?: string;
    helper?: string;
    error?: string;
    success?: string;
    label: ComponentProps<typeof import("../ItemLabel/ItemLabelCommon").ItemLabel>["label"];
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
