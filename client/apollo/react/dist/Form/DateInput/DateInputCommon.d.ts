import { ComponentProps, ComponentPropsWithRef, ComponentType } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
type DateInputProps = Omit<ComponentPropsWithRef<"input">, "value"> & {
    classModifier?: string;
    defaultValue?: Date | string;
    value?: Date | string;
    helper?: string;
    error?: string;
    success?: string;
    label: ComponentProps<typeof ItemLabel>["label"];
    type?: "text" | "date";
    ItemLabelComponent: ComponentType<Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">>;
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;
declare const DateInput: import("react").ForwardRefExoticComponent<Omit<DateInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { DateInput };
