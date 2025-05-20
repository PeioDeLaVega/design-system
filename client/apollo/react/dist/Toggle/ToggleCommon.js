import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
export const Toggle = forwardRef(({ className, ...inputProps }, ref) => {
    let inputId = useId();
    inputId = inputProps.id ?? inputId;
    return (_jsxs("label", { className: getComponentClassName("af-toggle", className), htmlFor: inputId, children: [_jsx("div", { className: "af-toggle__root", children: _jsx("span", { className: "af-toggle__handle" }) }), _jsx("input", { ...inputProps, ref: ref, type: "checkbox", id: inputId })] }));
});
Toggle.displayName = "Toggle";
