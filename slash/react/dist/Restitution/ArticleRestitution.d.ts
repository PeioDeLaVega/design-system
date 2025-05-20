import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
type ArticleRestitutionProps = ComponentPropsWithoutRef<"article"> & {
    classModifier?: string;
};
export declare const ArticleRestitution: ({ children, className, classModifier, ...otherProps }: PropsWithChildren<ArticleRestitutionProps>) => import("react/jsx-runtime").JSX.Element;
export {};
