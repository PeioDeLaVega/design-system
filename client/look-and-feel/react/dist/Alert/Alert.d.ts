import "@axa-fr/design-system-look-and-feel-css/dist/Alert/Alert.scss";
import { ComponentPropsWithoutRef, PropsWithChildren, ReactElement } from "react";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
type Headings = "h2" | "h3" | "h4" | "h5" | "h6";
export declare const alertTypes: {
    readonly validation: "validation";
    readonly error: "error";
    readonly warning: "warning";
    readonly information: "information";
    readonly neutral: "neutral";
};
export type AlertType = keyof typeof alertTypes;
type AlertProps = {
    type: AlertType;
    title?: string;
    action?: ReactElement<typeof Link | typeof Button>;
    iconSize?: number;
    heading?: Headings;
} & ComponentPropsWithoutRef<"div">;
export declare const Alert: ({ type, title, children, action, iconSize, heading: Heading, }: PropsWithChildren<AlertProps>) => import("react/jsx-runtime").JSX.Element;
export {};
