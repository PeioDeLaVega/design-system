import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Table/Pager.scss";
import { getComponentClassName } from "../..";
import { Li } from "./Li";
import { LiPoint } from "./LiPoint";
import { PaginationButton } from "./PaginationButton";
const Pager = ({ className, classModifier, numberPages = 1, currentPage = 1, onChange, mode = "default", previousLabel = "« Précédent", nextLabel = "Suivant »", ofLabel = "sur", }) => {
    const hasNext = currentPage < numberPages;
    const hasPrevious = currentPage > 1;
    const componentClassName = getComponentClassName(className, classModifier, "af-pager");
    if (mode === "light") {
        return (_jsx("nav", { className: componentClassName, children: _jsxs("ul", { className: "af-pager__pagination", children: [_jsx(PaginationButton, { onChange: onChange, value: currentPage - 1, active: hasPrevious, isVisible: true, children: _jsx("i", { className: "glyphicon glyphicon-chevron-left", "aria-hidden": "true" }) }), _jsxs(LiPoint, { isVisible: true, children: [currentPage, " ", ofLabel, " ", numberPages] }), _jsx(PaginationButton, { onChange: onChange, value: currentPage + 1, active: hasNext, isVisible: true, children: _jsx("i", { className: "glyphicon glyphicon-chevron-right", "aria-hidden": "true" }) })] }) }));
    }
    return (_jsx("nav", { className: componentClassName, children: _jsxs("ul", { className: "af-pager__pagination", children: [_jsx(PaginationButton, { onChange: onChange, value: currentPage - 1, active: hasPrevious, isVisible: true, children: previousLabel }), _jsx(Li, { onChange: onChange, value: 1, isVisible: numberPages > 1 && currentPage > 1 }), _jsx(LiPoint, { isVisible: currentPage > 3, children: "..." }), _jsx(Li, { onChange: onChange, value: currentPage - 1, isVisible: numberPages > 2 && currentPage > 2 }), _jsx(Li, { onChange: onChange, value: currentPage, active: true, isVisible: numberPages > 0 }), _jsx(Li, { onChange: onChange, value: currentPage + 1, isVisible: currentPage < numberPages - 1 }), _jsx(LiPoint, { isVisible: currentPage < numberPages - 2, children: "..." }), _jsx(Li, { onChange: onChange, value: numberPages, isVisible: currentPage < numberPages }), _jsx(PaginationButton, { onChange: onChange, value: currentPage + 1, active: hasNext, isVisible: true, children: nextLabel })] }) }));
};
export { Pager };
