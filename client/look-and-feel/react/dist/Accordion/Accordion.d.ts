import { type ComponentProps, type ReactNode } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCore";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer";
type AccordionProps = {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
    value?: string;
    isTitleFirst?: boolean;
} & ComponentProps<typeof AccordionTagDateContainer> & Partial<ComponentProps<typeof AccordionCore>>;
export declare const Accordion: ({ title, children, icon, subtitle, tagLabel, tagProps, dateLabel, dateProps, value, isTitleFirst, ...accordionCoreProps }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export {};
