import { ComponentPropsWithoutRef, ReactNode } from "react";
import { StepBase } from "./StepBase";
type Props = ComponentPropsWithoutRef<typeof StepBase> & {
    number?: ReactNode;
};
declare const StepNoLink: ({ number, title, className, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { StepNoLink };
