import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Alert } from "../Alert/Alert";
type SummaryProps = Omit<ComponentPropsWithoutRef<typeof Alert>, "title"> & {
    title?: string;
    messages?: ReactNode[];
    isVisible?: boolean;
};
export declare const Summary: ({ messages, isVisible, title, classModifier, ...args }: SummaryProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
