import { type ComponentProps, ComponentPropsWithRef, type ComponentType, MouseEventHandler } from "react";
import { ItemLabel } from "../ItemLabel/ItemLabelCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageCommon";
type Props = ComponentPropsWithRef<"textarea"> & Pick<ComponentProps<typeof ItemLabel>, "label" | "description" | "buttonLabel" | "sideButtonLabel" | "onSideButtonClick"> & {
    classModifier?: string;
    helper?: string;
    error?: string;
    ItemLabelComponent: ComponentType<Omit<ComponentProps<typeof ItemLabel>, "ButtonComponent">>;
    ItemMessageComponent: ComponentType<ComponentProps<typeof ItemMessage>>;
    onButtonClick?: MouseEventHandler<HTMLButtonElement>;
} & Partial<ComponentPropsWithRef<typeof ItemMessage>>;
declare const TextArea: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
export { TextArea };
