import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StepBase } from "./StepBase";
import type { CustomClickEvent } from "./types";
type Props = ComponentPropsWithoutRef<typeof StepBase> & {
    href: string;
    number?: ReactNode;
    onClick?: (e: CustomClickEvent) => void;
};
declare const StepLink: ({ id, href, number, title, className, onClick, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { StepLink };
