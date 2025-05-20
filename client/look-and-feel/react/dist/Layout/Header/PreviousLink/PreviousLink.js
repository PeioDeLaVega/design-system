import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Header/PreviousLink/PreviousLink.scss";
import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg";
import React, { isValidElement, useMemo, } from "react";
import { Svg } from "../../../Svg";
const PreviousLink = ({ handleClick, children, ...otherProps }) => {
    const validChildren = useMemo(() => (React.Children.map(children, (child) => isValidElement(child) && child) ?? []).filter((c) => Boolean(c)), [children]);
    if (validChildren.length === 0)
        return null;
    return (_jsx("div", { className: "af-header-previous-link-container", ...otherProps, children: React.Children.map(validChildren, (child) => React.cloneElement(child, {
            children: (_jsxs(_Fragment, { children: [_jsx(Svg, { src: arrowBack, "aria-hidden": true }), child.props.children] })),
            className: "af-btn-client af-btn-client--ghost af-btn-client--header-previous-link",
            onClick: handleClick,
        })) }));
};
export { PreviousLink };
