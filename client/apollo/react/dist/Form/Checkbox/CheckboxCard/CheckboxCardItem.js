import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
export const CheckboxCardItem = ({ CheckboxComponent, IconComponent, id, label, description, subtitle, icon, errorId, hasError, size, ...inputProps }) => {
    let inputId = useId();
    inputId = id ?? inputId;
    return (_jsxs("label", { htmlFor: inputId, className: "af-checkbox-card-label", "aria-invalid": hasError, children: [_jsx(CheckboxComponent, { id: inputId, errorId: errorId, hasError: hasError, ...inputProps }), _jsxs("div", { className: "af-checkbox-card-content", children: [icon && _jsx(IconComponent, { src: icon, size: size }), _jsxs("div", { className: "af-checkbox-card-content-description", children: [_jsx("span", { children: label }), description && _jsx("span", { children: description }), subtitle && _jsx("span", { children: subtitle })] })] })] }));
};
