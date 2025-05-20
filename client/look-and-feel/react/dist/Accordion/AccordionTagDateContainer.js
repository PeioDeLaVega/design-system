import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Tag } from "../Tag/Tag";
export const AccordionTagDateContainer = ({ tagLabel, tagProps, dateLabel, dateProps, }) => {
    const isShowing = useMemo(() => Boolean(tagLabel) || Boolean(dateLabel), [tagLabel, dateLabel]);
    if (!isShowing) {
        return null;
    }
    return (_jsxs("div", { className: "af-accordion__tag-date-container", children: [tagLabel && (_jsx("div", { className: "af-accordion__tag-container", children: _jsx(Tag, { variant: "warning", ...tagProps, children: tagLabel }) })), dateLabel && (_jsx("time", { className: "af-accordion__date", ...dateProps, children: dateLabel }))] }));
};
