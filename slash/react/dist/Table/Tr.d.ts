import { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"tr"> & {
    classModifier?: string;
};
declare const Tr: ({ children, id, className, classModifier, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { Tr };
