import { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"td"> & {
    classModifier?: string;
};
declare const Td: ({ children, id, className, classModifier, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { Td };
