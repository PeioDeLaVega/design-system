import { jsx as _jsx } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/Pagination.scss";
import { useEffect, useState } from "react";
import { BREAKPOINT, useIsSmallScreen } from "../utilities";
import { PaginationDesktop } from "./PaginationDesktop";
import { PaginationMobile } from "./PaginationMobile";
export const Pagination = ({ numberPage, onChangePage, defaultPage, }) => {
    const isMobile = useIsSmallScreen(BREAKPOINT.MD);
    const [currentPage, setCurrentPage] = useState(defaultPage || 1);
    useEffect(() => {
        onChangePage(currentPage);
    }, [currentPage, onChangePage]);
    return (_jsx("div", { className: "af-container-pagination", children: isMobile ? (_jsx(PaginationMobile, { numberPage: numberPage, currentPage: currentPage, setCurrentPage: setCurrentPage })) : (_jsx(PaginationDesktop, { numberPage: numberPage, currentPage: currentPage, setCurrentPage: setCurrentPage })) }));
};
