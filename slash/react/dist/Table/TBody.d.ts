import { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"tbody"> & {
    classModifier?: string;
};
declare const TBody: ({ children, className, classModifier, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { TBody };
