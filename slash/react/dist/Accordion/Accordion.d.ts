import "@axa-fr/design-system-slash-css/dist/Accordion/Accordion.scss";
import React from "react";
import { CollapseProps } from "./CollapseCard";
import { TDefaultProps } from "./types";
export type EnhancedProps = Partial<TDefaultProps> & {
    onlyOne?: boolean;
    className?: string;
    classModifier?: string;
    children: React.ReactElement<CollapseProps>[] | React.ReactElement<CollapseProps>;
};
declare const Accordion: ({ className, classModifier, children, onlyOne, }: EnhancedProps) => import("react/jsx-runtime").JSX.Element;
export { Accordion };
