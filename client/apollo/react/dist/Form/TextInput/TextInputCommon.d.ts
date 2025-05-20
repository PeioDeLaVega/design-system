import { type ComponentProps, type ComponentPropsWithRef, type ComponentType } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
type TextInputProps = ComponentPropsWithRef<"input"> & {
    unit?: React.ReactNode;
    classModifier?: string;
    helper?: string;
    error?: string;
    success?: string;
    label: ComponentProps<typeof ItemLabel>["label"];
    ItemLabelComponent: ComponentType<Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">>;
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;
declare const TextInput: import("react").ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { TextInput };
