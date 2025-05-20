import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId, } from "react";
const CheckboxTextCommon = ({ label, errorMessage, CheckboxComponent, ItemMessageComponent, ...inputProps }) => {
    const errorId = useId();
    let inputId = useId();
    inputId = inputProps.id || inputId;
    return (_jsxs("div", { className: "af-checkbox-text", children: [_jsxs("label", { htmlFor: inputId, children: [_jsx(CheckboxComponent, { id: inputId, errorId: errorId, hasError: Boolean(errorMessage), ...inputProps }), _jsx("span", { children: label })] }, inputProps.name), _jsx("div", { className: "af-checkbox-text__error", children: _jsx(ItemMessageComponent, { message: errorMessage }) })] }));
};
CheckboxTextCommon.displayName = "CheckboxTextCommon";
export { CheckboxTextCommon };
