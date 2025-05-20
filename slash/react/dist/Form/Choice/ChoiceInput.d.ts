import { type ComponentProps } from "react";
import { LegacyField } from "../core";
import { Choice } from "./Choice";
type Props = ComponentProps<typeof Choice> & Omit<ComponentProps<typeof LegacyField>, "children">;
declare const ChoiceInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { ChoiceInput };
