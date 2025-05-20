import { ReactNode } from "react";
export declare const FormClassManager: {
    getFieldInputClassModifier: (modifier: string, disabled: boolean) => string;
    getInputClassModifier: (modifier: string, children: ReactNode) => string;
    getModifier: (messageType: string) => string;
    getMessageClassModifier: (messageType: "error" | "success" | "warning", message?: string | null, modifier?: string) => string;
};
