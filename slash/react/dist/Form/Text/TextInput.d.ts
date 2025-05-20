import { ComponentProps, ReactNode } from "react";
import { Field } from "../core";
import { Text } from "./Text";
export type TextInputProps = Omit<ComponentProps<typeof Field> & ComponentProps<typeof Text> & {
    helpMessage?: ReactNode;
}, "renderInput">;
declare const TextInput: import("react").ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { TextInput };
