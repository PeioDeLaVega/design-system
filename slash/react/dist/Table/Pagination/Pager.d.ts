import "@axa-fr/design-system-slash-css/dist/Table/Pager.scss";
import { ComponentPropsWithoutRef } from "react";
import { PaginationButton } from "./PaginationButton";
export type PagerComponentProps = Pick<ComponentPropsWithoutRef<typeof PaginationButton>, "onChange"> & {
    className?: string;
    classModifier?: string;
    numberPages?: number;
    currentPage?: number;
    mode?: "default" | "light";
    previousLabel?: string;
    nextLabel?: string;
    ofLabel?: string;
};
declare const Pager: ({ className, classModifier, numberPages, currentPage, onChange, mode, previousLabel, nextLabel, ofLabel, }: PagerComponentProps) => import("react/jsx-runtime").JSX.Element;
export { Pager };
