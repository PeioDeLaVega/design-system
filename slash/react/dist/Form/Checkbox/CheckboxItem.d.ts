import { ReactNode } from "react";
import "@axa-fr/design-system-slash-css/dist/Form/Checkbox/Checkbox.scss";
declare const CheckboxItem: import("react").ForwardRefExoticComponent<Omit<Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "type"> & {
    classModifier?: string;
    optionClassName?: string;
    children?: ReactNode;
    label?: ReactNode;
    isChecked?: boolean;
} & import("react").RefAttributes<HTMLInputElement>>;
export { CheckboxItem };
