import { ComponentProps } from "react";
import { LegacyField } from "../core";
import { Checkbox } from "./Checkbox";
type Props = Omit<ComponentProps<typeof Checkbox> & ComponentProps<typeof LegacyField>, "children" | "placeholder">;
declare const CheckboxInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { CheckboxInput };
