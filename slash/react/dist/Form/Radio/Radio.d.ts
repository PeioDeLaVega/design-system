import { ComponentPropsWithRef } from "react";
import type { Option } from "../core";
import { RadioItem } from "./RadioItem";
export declare enum RadioModes {
    classic = "classic",
    default = "default",
    inline = "inline"
}
type Props = Omit<ComponentPropsWithRef<typeof RadioItem>, "id" | "label" | "className"> & {
    options: Option[];
    mode?: keyof typeof RadioModes;
};
declare const Radio: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Radio };
