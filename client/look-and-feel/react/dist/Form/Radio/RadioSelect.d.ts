import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import React, { ComponentPropsWithRef, ReactNode } from "react";
type RadioSelectProps = ComponentPropsWithRef<"input"> & {
    type: "vertical" | "horizontal";
    label?: string;
    description?: string;
    isRequired?: boolean;
    options: ({
        label: ReactNode;
        subtitle?: ReactNode;
        description?: ReactNode;
        icon?: ReactNode;
    } & React.InputHTMLAttributes<HTMLInputElement>)[];
    name: string;
    errorMessage?: string;
    onChange?: React.ChangeEventHandler;
    value?: string;
    isDisabled?: boolean;
} & Omit<ComponentPropsWithRef<"div">, "className" | "aria-invalid">;
export declare const RadioSelect: React.ForwardRefExoticComponent<Omit<RadioSelectProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
