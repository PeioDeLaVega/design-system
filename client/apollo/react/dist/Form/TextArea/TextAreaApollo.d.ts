import "@axa-fr/design-system-apollo-css/dist/Form/TextArea/TextAreaApollo.scss";
import { type ComponentProps } from "react";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
export declare const TextArea: import("react").ForwardRefExoticComponent<Omit<Omit<Omit<import("react").ClassAttributes<HTMLTextAreaElement> & import("react").TextareaHTMLAttributes<HTMLTextAreaElement> & Pick<{
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
}, "label" | "description" | "sideButtonLabel" | "onSideButtonClick" | "buttonLabel"> & {
    classModifier?: string;
    helper?: string;
    error?: string;
    ItemLabelComponent: import("react").ComponentType<Omit<ComponentProps<typeof import("../ItemLabel/ItemLabelCommon").ItemLabel>, "ButtonComponent">>;
    ItemMessageComponent: import("react").ComponentType<ComponentProps<typeof ItemMessage>>;
    onButtonClick?: import("react").MouseEventHandler<HTMLButtonElement>;
} & Partial<{
    message?: string;
    id?: string;
    messageType?: "error" | "success";
}>, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>, "ItemMessageComponent" | "ItemLabelComponent">, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
