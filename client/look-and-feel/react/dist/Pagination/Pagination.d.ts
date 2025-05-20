import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/Pagination.scss";
import { ComponentPropsWithoutRef } from "react";
type PaginationProps = {
    numberPage: number;
    onChangePage: (page: number) => void;
    defaultPage?: number;
} & ComponentPropsWithoutRef<"div">;
export declare const Pagination: ({ numberPage, onChangePage, defaultPage, }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
export {};
