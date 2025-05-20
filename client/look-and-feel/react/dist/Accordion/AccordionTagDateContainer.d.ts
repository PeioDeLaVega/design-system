import { type ComponentProps } from "react";
import { Tag } from "../Tag/Tag";
type AccordionTagDateContainerProps = {
    tagLabel?: string;
    tagProps?: ComponentProps<typeof Tag>;
    dateLabel?: string;
    dateProps?: ComponentProps<"time">;
};
export declare const AccordionTagDateContainer: ({ tagLabel, tagProps, dateLabel, dateProps, }: AccordionTagDateContainerProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
