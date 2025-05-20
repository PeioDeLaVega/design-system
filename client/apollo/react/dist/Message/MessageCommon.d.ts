import { type ComponentPropsWithoutRef, type PropsWithChildren, type ReactElement } from "react";
import { Button } from "../Button/ButtonCommon";
import { Link } from "../Link/LinkCommon";
type Headings = "h2" | "h3" | "h4" | "h5" | "h6";
export declare const messageVariants: {
    readonly validation: "validation";
    readonly error: "error";
    readonly warning: "warning";
    readonly information: "information";
    readonly neutral: "neutral";
};
export type MessageVariants = keyof typeof messageVariants;
export type MessageProps = {
    variant: MessageVariants;
    title?: string;
    action?: ReactElement<typeof Link | typeof Button>;
    iconSize?: number;
    heading?: Headings;
} & ComponentPropsWithoutRef<"div">;
export declare const Message: ({ variant, className, title, children, action, iconSize, heading: Heading, }: PropsWithChildren<MessageProps>) => import("react/jsx-runtime").JSX.Element;
export {};
