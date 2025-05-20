import "@axa-fr/design-system-slash-css/dist/Restitution/Restitution.scss";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
export type RestitutionProps = ComponentPropsWithoutRef<"dl"> & {
    label: string;
    classModifier?: string;
};
export declare const Restitution: ({ label, children, className, classModifier, }: PropsWithChildren<RestitutionProps>) => import("react/jsx-runtime").JSX.Element;
