import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Pagination/PaginationMobile.scss";
import arrowBackIos from "@material-symbols/svg-400/outlined/arrow_back_ios.svg";
import arrowForwardIos from "@material-symbols/svg-400/outlined/arrow_forward_ios.svg";
import { Svg } from "../Svg";
export const PaginationMobile = ({ numberPage, currentPage, setCurrentPage, }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === numberPage;
    return (_jsxs("div", { className: "af-pagination-mobile", children: [_jsx("button", { type: "button", onClick: () => setCurrentPage(currentPage - 1), disabled: isFirstPage, "aria-label": "Page pr\u00E9c\u00E9dente", children: _jsx(Svg, { src: arrowBackIos, className: "arrow" }) }), _jsxs("span", { children: [currentPage, " sur ", numberPage] }), _jsx("button", { type: "button", onClick: () => setCurrentPage(currentPage + 1), disabled: isLastPage, "aria-label": "Page suivant", children: _jsx(Svg, { src: arrowForwardIos, className: "arrow" }) })] }));
};
