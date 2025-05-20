import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/PaginationDesktop.scss";
import { ComponentPropsWithoutRef } from "react";
type PropsPaginationDesktop = {
    numberPage: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
} & ComponentPropsWithoutRef<"div">;
export declare const PaginationDesktop: ({ numberPage, currentPage, setCurrentPage, }: PropsPaginationDesktop) => import("react/jsx-runtime").JSX.Element;
export {};
