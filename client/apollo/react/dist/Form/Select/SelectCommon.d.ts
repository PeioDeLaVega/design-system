import { type ComponentProps, type ComponentPropsWithRef, type ComponentType } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
type SelectProps = ComponentPropsWithRef<"select"> & {
    id?: string;
    classModifier?: string;
    label?: ComponentProps<typeof ItemLabel>["label"];
    error?: string;
    success?: string;
    placeholder?: string;
    buttonLabel?: string;
    description?: string;
    helper?: string;
    ItemLabelComponent: ComponentType<Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">>;
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
} & Partial<ComponentPropsWithRef<typeof ItemLabel>>;
declare const Select: import("react").ForwardRefExoticComponent<Omit<SelectProps, "ref"> & import("react").RefAttributes<HTMLSelectElement>>;
export { Select };
