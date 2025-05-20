import { type ComponentProps, type MouseEvent, type ReactNode } from "react";
type AccordionProps = {
    summary: ReactNode;
    children: ReactNode;
    isOpen?: boolean;
    className?: string;
    classModifier?: string;
    summaryProps?: ComponentProps<"summary">;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Partial<ComponentProps<"details">>;
export declare const AccordionCore: ({ summary, children, className, classModifier, summaryProps, isOpen, onClick, ...detailsProps }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export {};
