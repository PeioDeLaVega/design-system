import { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"thead"> & {
    classModifier?: string;
};
declare const THead: ({ children, className, classModifier, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { THead };
