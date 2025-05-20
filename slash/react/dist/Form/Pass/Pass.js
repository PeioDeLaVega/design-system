import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getComponentClassName } from "../../utilities";
import "@axa-fr/design-system-slash-css/dist/Form/Pass/Pass.scss";
const Pass = forwardRef(({ onToggleType, type = "password", className, classModifier, ...inputProps }, inputRef) => {
    const componentClassName = getComponentClassName(className, classModifier, "af-form__pass");
    return (_jsxs("div", { className: componentClassName, children: [_jsx("div", { className: "af-form__pass-strength" }), _jsx("input", { ...inputProps, role: type === "password" ? "password" : "textbox", className: "af-form__input-text", type: type, ref: inputRef, required: classModifier?.includes("required") }), _jsx("button", { className: "af-form__pass-btn", type: "button", "aria-label": "show password", onClick: onToggleType, children: _jsx("i", { className: `glyphicon glyphicon-eye${type === "text" ? "-close" : "-open"}` }) })] }));
});
Pass.displayName = "Pass";
export { Pass };
