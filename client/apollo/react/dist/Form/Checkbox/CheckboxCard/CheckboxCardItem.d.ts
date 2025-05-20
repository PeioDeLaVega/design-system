import { type ReactNode } from "react";
import type { CheckboxComponent, IconComponent } from "./types";
export type TCheckboxCardItem = {
    label: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    hasError?: boolean;
    icon?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">;
type CheckboxCardItemProps = {
    size: "M" | "L";
    errorId: string;
} & TCheckboxCardItem & CheckboxComponent & IconComponent;
export declare const CheckboxCardItem: ({ CheckboxComponent, IconComponent, id, label, description, subtitle, icon, errorId, hasError, size, ...inputProps }: CheckboxCardItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
