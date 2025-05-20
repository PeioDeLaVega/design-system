import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import chevron from "@material-symbols/svg-400/outlined/chevron_right.svg";
import { useMemo } from "react";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities";
export const ClickItem = ({ children, icon, parentClickComponent: ClickComponent = ({ children: parentClickComponentChildren, ...parentClickComponentProps }) => (_jsx("button", { type: "button", ...parentClickComponentProps, children: parentClickComponentChildren })), isDisabled = false, disabled = isDisabled, className, classModifier = "", actionIcon = _jsx(Svg, { src: chevron, "aria-hidden": true }), ...otherProps }) => {
    const componentClassName = useMemo(() => getComponentClassName("af-click-item", className, `${classModifier}${disabled ? " disabled" : ""}`), [className, classModifier, disabled]);
    return (_jsxs(ClickComponent, { className: componentClassName, disabled: disabled, ...otherProps, children: [_jsxs("div", { className: "af-click-item__content", children: [icon && _jsx("div", { className: "af-click-item__icon", children: icon }), _jsx("div", { className: "af-click-item__label", children: children })] }), _jsx("div", { className: "af-click-item__action", children: actionIcon })] }));
};
