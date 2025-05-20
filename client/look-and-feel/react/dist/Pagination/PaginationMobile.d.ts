import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/PaginationMobile.scss";
import { ComponentPropsWithoutRef } from "react";
type PropsPaginationMobile = {
    numberPage: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
} & ComponentPropsWithoutRef<"div">;
export declare const PaginationMobile: ({ numberPage, currentPage, setCurrentPage, }: PropsPaginationMobile) => import("react/jsx-runtime").JSX.Element;
export {};
