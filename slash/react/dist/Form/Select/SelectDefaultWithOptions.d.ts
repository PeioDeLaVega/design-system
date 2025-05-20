import { ComponentPropsWithRef, OptionHTMLAttributes } from "react";
import { SelectBase } from "./SelectBase";
type Props = ComponentPropsWithRef<typeof SelectBase> & {
    options: OptionHTMLAttributes<HTMLOptionElement>[];
    forceDisplayPlaceholder?: boolean;
    placeholder?: string;
};
export declare const SelectDefaultWithOptions: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLSelectElement>>;
export {};
