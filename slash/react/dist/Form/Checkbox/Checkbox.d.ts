import React, { ComponentProps, ReactNode } from "react";
import { Option } from "../core";
import { CheckboxItem } from "./CheckboxItem";
import { CheckboxModes } from "./CheckboxModes";
type OnChange = {
    onChange?: (data: {
        values: string[];
        target: {
            value: string;
            checked: boolean;
        };
        name?: string;
        id?: string;
    }) => void;
};
type Props = Omit<ComponentProps<typeof CheckboxItem>, "value" | "label" | "checked" | "onChange"> & {
    options: Option[];
    values?: string[];
    children?: ReactNode;
    mode?: keyof typeof CheckboxModes;
} & OnChange;
export declare const Checkbox: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
