import "@axa-fr/design-system-slash-css/dist/Form/Radio/Radio.scss";
import { ComponentPropsWithRef, ReactNode } from "react";
type Props = Omit<ComponentPropsWithRef<"input">, "checked" | "type"> & {
    classModifier?: string;
    optionClassName?: string;
    label?: ReactNode;
    isChecked?: boolean;
};
declare const RadioItem: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { RadioItem };
