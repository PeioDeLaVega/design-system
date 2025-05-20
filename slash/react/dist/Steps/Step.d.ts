import { ComponentPropsWithoutRef } from "react";
import { StepLink } from "./StepLink";
type Props = Omit<ComponentPropsWithoutRef<typeof StepLink>, "href"> & {
    href?: string;
    mode?: "link" | "active" | "disabled";
};
declare const Step: ({ number, id, title, classModifier, href, onClick, mode, className, }: Props) => import("react/jsx-runtime").JSX.Element;
export { Step };
