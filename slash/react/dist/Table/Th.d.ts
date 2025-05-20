import { ComponentPropsWithoutRef } from "react";
type Props = ComponentPropsWithoutRef<"th"> & {
    classModifier?: string;
};
declare const Th: ({ children, id, className, classModifier, ...otherProps }: Props) => import("react/jsx-runtime").JSX.Element;
export { Th };
