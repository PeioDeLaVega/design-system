import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/Radio/Radio.scss";
import radioIcon from "@material-symbols/svg-400/outlined/radio_button_checked.svg";
import radioOutlineBlankIcon from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import { forwardRef, useId } from "react";
import { Svg } from "../../Svg";
import { InputError } from "../InputError";
const Radio = forwardRef(({ label, errorMessage, ...inputProps }, ref) => {
    let inputId = useId();
    inputId = inputProps.id || inputId;
    const idError = useId();
    return (_jsxs("div", { children: [_jsx("div", { className: "af-radio", role: "radiogroup", "aria-invalid": Boolean(errorMessage), "aria-errormessage": idError, children: _jsxs("label", { htmlFor: inputId, children: [_jsx("input", { ref: ref, ...inputProps, type: "radio", id: inputId }), _jsxs("div", { className: "af-radio__icons", children: [_jsx(Svg, { src: radioOutlineBlankIcon, className: "af-radio__unchecked" }), _jsx(Svg, { src: radioIcon, className: "af-radio__checked" })] }), label] }, inputProps.name) }), errorMessage && _jsx(InputError, { id: idError, message: errorMessage })] }));
});
Radio.displayName = "Radio";
export { Radio };
