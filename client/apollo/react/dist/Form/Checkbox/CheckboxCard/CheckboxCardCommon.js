import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { BREAKPOINT } from "../../../utilities/constants";
import { getComponentClassName } from "../../../utilities/getComponentClassName";
import { useIsSmallScreen } from "../../../utilities/hook/useIsSmallScreen";
import { CheckboxCardItem } from "./CheckboxCardItem";
export const CheckboxCardCommon = ({ className, labelGroup, descriptionGroup, CheckboxComponent, IconComponent, isRequired, options, onChange, type = "vertical", }) => {
    const componentClassName = getComponentClassName("af-checkbox-card__container", className);
    const checkboxGroupClassName = getComponentClassName("af-checkbox-card-group", className, type);
    const errorId = useId();
    const isMobile = useIsSmallScreen(BREAKPOINT.SM);
    const size = isMobile ? "M" : "L";
    return (_jsxs("fieldset", { className: componentClassName, children: [_jsx("div", { className: "af-checkbox-card__label-container", children: labelGroup && (_jsxs("legend", { className: "af-checkbox-card__legend", children: [labelGroup, isRequired && _jsx("span", { "aria-hidden": true, children: "\u00A0*" }), descriptionGroup && (_jsx("p", { className: "af-checkbox-card__description", children: descriptionGroup }))] })) }), _jsx("ul", { className: checkboxGroupClassName, children: options.map((inputProps) => (_jsx("li", { children: _jsx(CheckboxCardItem, { size: size, errorId: errorId, onChange: onChange, CheckboxComponent: CheckboxComponent, IconComponent: IconComponent, ...inputProps }) }, crypto.randomUUID()))) })] }));
};
CheckboxCardCommon.displayName = "CheckboxCardCommon";
