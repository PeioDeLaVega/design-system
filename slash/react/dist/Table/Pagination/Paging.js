import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-slash-css/dist/Table/Paging.scss";
import { useCallback } from "react";
import { getComponentClassName } from "../..";
import { Items } from "./Items";
import { Pager } from "./Pager";
const Paging = ({ className, classModifier, currentPage = 1, displayLabel, selectAriaLabel, elementsLabel, id, mode, nextLabel, numberItems = 10, numberPages, ofLabel, previousLabel, items, onChange, }) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-paging");
    const handleChangeItems = useCallback((e) => onChange &&
        onChange({
            numberItems: e.value,
            page: currentPage,
        }), [currentPage, onChange]);
    const handleChangePager = useCallback((e) => onChange &&
        onChange({
            numberItems,
            page: e.value,
        }), [numberItems, onChange]);
    return (_jsxs("div", { className: componentClassName, children: [_jsx("div", { className: "af-paging__limit", children: _jsx(Items, { onChange: handleChangeItems, numberItems: numberItems, id: id, displayLabel: displayLabel, selectAriaLabel: selectAriaLabel, elementsLabel: elementsLabel, items: items }) }), _jsx("div", { className: "af-paging__pager", children: _jsx(Pager, { onChange: handleChangePager, currentPage: currentPage, numberPages: numberPages, previousLabel: previousLabel, nextLabel: nextLabel, ofLabel: ofLabel, mode: mode }) })] }));
};
export { Paging };
