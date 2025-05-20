import "@axa-fr/design-system-slash-css/dist/Form/Select/Select.scss";
import { OptionHTMLAttributes } from "react";
declare const SelectBase: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> & {
    options?: OptionHTMLAttributes<HTMLOptionElement>[];
    classModifier?: string;
} & import("react").RefAttributes<HTMLSelectElement>>;
export { SelectBase };
